-- =====================================================================
--  My eTutor  --  Database schema
--  Paste this whole file into the Supabase SQL Editor and run it.
--  It is safe to re-run (idempotent where practical).
-- =====================================================================


-- ---------------------------------------------------------------------
-- 1. TABLES
-- ---------------------------------------------------------------------

-- profiles: one row per authenticated user.
create table if not exists public.profiles (
  id           uuid primary key references auth.users (id) on delete cascade,
  kid_name     text,
  parent_email text,
  has_access   boolean     not null default false,
  is_admin     boolean     not null default false,
  created_at   timestamptz not null default now()
);

-- progress: per-subject saved game/study state for each user.
create table if not exists public.progress (
  id         uuid primary key default gen_random_uuid(),
  user_id    uuid references auth.users (id) on delete cascade,
  subject    text,
  data       jsonb,
  updated_at timestamptz not null default now(),
  unique (user_id, subject)
);


-- ---------------------------------------------------------------------
-- 2. ENABLE ROW LEVEL SECURITY
-- ---------------------------------------------------------------------
alter table public.profiles enable row level security;
alter table public.progress enable row level security;


-- ---------------------------------------------------------------------
-- 3. HELPER: is the current user an admin?
--    SECURITY DEFINER lets this function read the profiles table
--    without being blocked by RLS, which avoids infinite recursion
--    in the admin policies (a policy on profiles that also queries
--    profiles would otherwise recurse).
-- ---------------------------------------------------------------------
create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = public, pg_temp
as $$
  select coalesce(
    (select p.is_admin from public.profiles p where p.id = auth.uid()),
    false
  );
$$;


-- ---------------------------------------------------------------------
-- 4. POLICIES: profiles
-- ---------------------------------------------------------------------

-- A user can read their own row.
drop policy if exists "profiles_select_own" on public.profiles;
create policy "profiles_select_own"
  on public.profiles
  for select
  using (auth.uid() = id);

-- A user can update their own row.
-- (Column-level protection for has_access / is_admin is handled by the
--  trigger in section 6, not here.)
drop policy if exists "profiles_update_own" on public.profiles;
create policy "profiles_update_own"
  on public.profiles
  for update
  using (auth.uid() = id)
  with check (auth.uid() = id);

-- Admins can read every profile.
drop policy if exists "profiles_select_admin" on public.profiles;
create policy "profiles_select_admin"
  on public.profiles
  for select
  using (public.is_admin());

-- Admins can update every profile.
drop policy if exists "profiles_update_admin" on public.profiles;
create policy "profiles_update_admin"
  on public.profiles
  for update
  using (public.is_admin())
  with check (public.is_admin());


-- ---------------------------------------------------------------------
-- 5. POLICIES: progress
-- ---------------------------------------------------------------------

drop policy if exists "progress_select_own" on public.progress;
create policy "progress_select_own"
  on public.progress
  for select
  using (auth.uid() = user_id);

drop policy if exists "progress_insert_own" on public.progress;
create policy "progress_insert_own"
  on public.progress
  for insert
  with check (auth.uid() = user_id);

drop policy if exists "progress_update_own" on public.progress;
create policy "progress_update_own"
  on public.progress
  for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);


-- ---------------------------------------------------------------------
-- 6. PROTECT PRIVILEGED COLUMNS (has_access, is_admin)
--    The RLS UPDATE policy above lets a user edit their own row, but we
--    must stop them from escalating their own has_access / is_admin.
--    This trigger fires BEFORE UPDATE and FAILS CLOSED: the only way
--    to change has_access / is_admin is to be a verified admin (via
--    is_admin()). For everyone else the columns are reverted to their
--    old values. There is no session-less (auth.uid() is null) bypass,
--    so bootstrapping the first admin is done by temporarily disabling
--    this trigger (see section 8).
-- ---------------------------------------------------------------------
create or replace function public.protect_privileged_columns()
returns trigger
language plpgsql
security definer
set search_path = public, pg_temp
as $$
begin
  -- Fail CLOSED: the ONLY way to change these columns is to be a
  -- verified admin. Every other context (normal users, anonymous /
  -- session-less updates) has the privileged columns reverted to
  -- their old values. There is intentionally no auth.uid() bypass.
  if public.is_admin() then
    return new;
  end if;

  new.has_access := old.has_access;
  new.is_admin   := old.is_admin;

  return new;
end;
$$;

drop trigger if exists protect_privileged_columns on public.profiles;
create trigger protect_privileged_columns
  before update on public.profiles
  for each row
  execute function public.protect_privileged_columns();


-- ---------------------------------------------------------------------
-- 7. AUTO-CREATE A PROFILE ON SIGNUP
--    When a new row is inserted into auth.users, create the matching
--    profiles row using kid_name + parent_email from signup metadata.
--    SECURITY DEFINER so it can insert despite RLS.
-- ---------------------------------------------------------------------
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, kid_name, parent_email)
  values (
    new.id,
    new.raw_user_meta_data ->> 'kid_name',
    new.raw_user_meta_data ->> 'parent_email'
  )
  on conflict (id) do nothing;

  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row
  execute function public.handle_new_user();

-- ---------------------------------------------------------------------
-- NOTE: The one-time first-admin promotion (which temporarily disables
-- the protect_privileged_columns trigger to set is_admin/has_access) is
-- NOT part of the schema. It lives in promote.sql (gitignored) since it
-- is a manual bootstrap step. Run promote.sql once in the SQL Editor.
-- ---------------------------------------------------------------------


-- ---------------------------------------------------------------------
-- 8. CROSS-SUBJECT LEADERBOARD
--    A privacy-safe, read-only ranking of every NON-admin student by
--    their total score summed across ALL of their progress rows.
--    This section only ADDS objects; it does not alter the tables,
--    RLS policies, or triggers defined above.
-- ---------------------------------------------------------------------

-- 8a. Privacy-safe display-name derivation.
--     "Guillermo Guadarrama Patuel" -> "Guillermo G."
--     "Maria"                       -> "Maria"
--     null / empty / whitespace     -> "Estudiante"
--     This is a PURE function of its text input: it never touches any
--     table, so it cannot leak anything. SECURITY INVOKER (the default).
create or replace function public.derive_display_name(p_name text)
returns text
language sql
immutable
as $$
  select case
    when p_name is null or btrim(p_name) = '' then 'Estudiante'
    else
      (regexp_split_to_array(btrim(p_name), '\s+'))[1]
      || case
           when array_length(regexp_split_to_array(btrim(p_name), '\s+'), 1) >= 2
             then ' '
               || upper(left((regexp_split_to_array(btrim(p_name), '\s+'))[2], 1))
               || '.'
           else ''
         end
  end;
$$;

-- 8b. The leaderboard VIEW.
--     - One row per NON-admin student (admins excluded via is_admin).
--     - LEFT JOIN to progress so a student with NO progress rows still
--       appears with total_points = 0 (chosen behavior: everyone shows).
--     - total_points = SUM over the student's progress rows of the
--       numeric "score" in data->>'score', treating a missing key or a
--       non-numeric value as 0 (the regex guard avoids cast errors).
--     - rank() computed in SQL, ordered by total_points desc.
--
--     SECURITY MODEL: this is an ordinary view (security_invoker = false,
--     i.e. it runs with the OWNER's rights). That is intentional and
--     required: it lets the view read ALL students' rows (the profiles
--     RLS would otherwise restrict a caller to only their own row, which
--     would defeat a leaderboard). It CANNOT leak private data because a
--     view is a fixed projection: the object only has the four columns
--     below, so parent_email / full kid_name / has_access / is_admin are
--     simply not selectable through it.
drop view if exists public.leaderboard;
create view public.leaderboard
with (security_invoker = false)
as
with totals as (
  select
    p.id                                as user_id,
    public.derive_display_name(p.kid_name) as display_name,
    coalesce(
      sum(
        case
          when pr.data ->> 'score' ~ '^[+-]?[0-9]+(\.[0-9]+)?$'
            then (pr.data ->> 'score')::numeric
          else 0
        end
      ),
      0
    )                                   as total_points
  from public.profiles p
  left join public.progress pr on pr.user_id = p.id
  where p.is_admin is not true            -- exclude admin accounts
  group by p.id, p.kid_name
)
select
  user_id,
  display_name,
  total_points,
  rank() over (order by total_points desc) as rank
from totals;

-- 8c. Grants: authenticated users may read it; anonymous users may not.
--     Revoke any default-granted access first, then grant only SELECT
--     to the authenticated role. (anon is never granted, so logged-out
--     visitors cannot read the leaderboard.)
revoke all on public.leaderboard from public;
revoke all on public.leaderboard from anon;
grant select on public.leaderboard to authenticated;
