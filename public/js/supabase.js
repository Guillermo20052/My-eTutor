// =============================================================
//  Supabase configuration  --  PASTE YOUR VALUES BELOW
// =============================================================
//  Find these in your Supabase dashboard:
//    Project Settings  ->  Data API   (Project URL)
//    Project Settings  ->  API Keys   (anon / public key)
//
//  The anon key is safe to expose in frontend code; it only
//  grants the access allowed by your Row Level Security policies.
// -------------------------------------------------------------
const SUPABASE_URL = "https://nyveeajdtnnoknebrcjy.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_6beIR-BPLagZcavFRD03NQ_Wpeojcu0";
// =============================================================

// Import the Supabase JS client (v2) from the esm.sh CDN.
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

// Initialize and export a single shared client for the whole app.
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export default supabase;
