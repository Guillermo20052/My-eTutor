/* =====================================================================
   Redwood · Language Arts — CONTENT FILE
   Original teaching content + question banks. Drop-in for both the
   study module and the practice game. All English.

   STRUCTURE
   - LA_LESSONS: 5 study lessons (Reading Comprehension; Meaning by
     Context / Main Idea & Details; Phonics & Word Analysis; Ordering
     Events; Writing Complete Sentences).
   - LA_BANK: question banks for 4 game mechanics:
       comprehend -> short passage + tap the correct answer
       sort       -> sort a word into the correct sound/pattern bucket
       order      -> drag/number events into the right sequence
       sentence   -> build/fix into a complete sentence
   ===================================================================== */

   const LA_LESSONS = [
    {
      id: "reading-comprehension",
      num: 1,
      title: "Reading Comprehension",
      subtitle: "Understanding what you read",
      intro:
        "Reading comprehension means understanding and remembering what a text is about. Good readers don't just say the words — they think about the meaning, picture what's happening, and ask themselves questions while they read.",
      sections: [
        {
          h: "Read with a purpose",
          body:
            "Before reading, look at the title and any pictures. Ask yourself: what might this be about? While you read, keep checking: does this make sense? If something is confusing, slow down and read it again.",
        },
        {
          h: "Find the answers in the text",
          body:
            "Many questions can be answered by going back to the text. The answer is often right there in a sentence. Look for key words from the question and find where they appear in the passage.",
        },
        {
          h: "Make a movie in your mind",
          body:
            "As you read, imagine the scene like a movie. Who is there? Where are they? What is happening? Visualizing helps you remember and understand the story much better.",
        },
      ],
      recuerda:
        "Tip: When a question asks about details, go back and reread. The answer is usually hiding in the text.",
    },
    {
      id: "context-main-idea",
      num: 2,
      title: "Meaning of Words by Context, Main Idea & Details",
      subtitle: "Figuring out words and finding the big idea",
      intro:
        "Sometimes you read a word you don't know. Instead of stopping, you can use context clues — the other words around it — to figure out what it means. You also learn to tell the main idea (the big point) from the details (the smaller facts that support it).",
      sections: [
        {
          h: "Context clues",
          body:
            "The words around a tricky word often give hints. In 'The arid desert had no water for miles,' the words 'desert' and 'no water' tell you that arid means dry. Use the sentence to be a detective.",
        },
        {
          h: "Main idea",
          body:
            "The main idea is what the whole paragraph is mostly about — the big point. It is not one small fact; it's the umbrella that covers all the details. Ask: 'What is this mostly about?'",
        },
        {
          h: "Supporting details",
          body:
            "Details are the smaller pieces of information that explain or prove the main idea. If the main idea is 'Dogs make great pets,' details might be 'they are loyal,' 'they protect the home,' and 'they are fun to play with.'",
        },
      ],
      recuerda:
        "Tip: Main idea = the big point. Details = the small facts that support it.",
    },
    {
      id: "phonics",
      num: 3,
      title: "Phonics and Word Analysis",
      subtitle: "Sounds, patterns, and parts of words",
      intro:
        "Phonics is about the sounds letters make. Word analysis means breaking words into parts — like prefixes, suffixes, and root words — to understand and read them. Knowing patterns helps you read new words you've never seen.",
      sections: [
        {
          h: "Long and short vowels",
          body:
            "Short vowels are quick sounds: cat, bed, sit, hot, cup. Long vowels say their own name: cake, these, bike, rope, cute. The silent 'e' at the end often makes a vowel long (cap → cape).",
        },
        {
          h: "Prefixes and suffixes",
          body:
            "A prefix goes at the START of a word and changes its meaning: un- (unhappy = not happy), re- (redo = do again). A suffix goes at the END: -ful (helpful = full of help), -less (fearless = without fear).",
        },
        {
          h: "Root words",
          body:
            "The root is the main part of a word. If you find the root, you can understand many words. 'Play' is the root in playing, played, player, and replay.",
        },
      ],
      recuerda:
        "Tip: Silent 'e' usually makes the vowel long: hop → hope, kit → kite.",
    },
    {
      id: "ordering-events",
      num: 4,
      title: "Ordering Events",
      subtitle: "Putting a story in the right sequence",
      intro:
        "Stories happen in an order: first, next, then, and last. Putting events in the correct sequence shows that you understand how a story unfolds. Signal words like first, then, after, and finally help you keep track.",
      sections: [
        {
          h: "Sequence signal words",
          body:
            "Words like first, second, next, then, before, after, and finally tell you the order things happen. Watch for them — they are clues that show what comes when.",
        },
        {
          h: "Beginning, middle, end",
          body:
            "Most stories have a beginning (what starts it), a middle (what happens), and an end (how it finishes). When ordering events, ask which one had to happen first for the others to make sense.",
        },
        {
          h: "Cause and effect in order",
          body:
            "Often one event causes the next. You plant a seed, THEN it grows, THEN it becomes a flower. The cause always comes before the effect.",
        },
      ],
      recuerda:
        "Tip: Look for signal words — first, then, next, finally — to find the right order.",
    },
    {
      id: "complete-sentences",
      num: 5,
      title: "Writing Complete Sentences",
      subtitle: "Subjects, predicates, and proper form",
      intro:
        "A complete sentence expresses a full idea. It needs two main parts: a subject (who or what the sentence is about) and a predicate (what the subject does or is). It also starts with a capital letter and ends with a punctuation mark.",
      sections: [
        {
          h: "Subject and predicate",
          body:
            "The subject is who or what does the action: 'The dog ran.' (dog = subject, ran = predicate). Without both parts, it's a fragment, not a full sentence. 'Ran fast' is missing a subject.",
        },
        {
          h: "Capital letter and end mark",
          body:
            "Every sentence starts with a capital letter and ends with a period (.), question mark (?), or exclamation point (!). 'the cat sleeps' is missing a capital and a period — it should be 'The cat sleeps.'",
        },
        {
          h: "Fragments vs. complete sentences",
          body:
            "A fragment is an incomplete piece: 'After the game.' A complete sentence finishes the thought: 'We ate pizza after the game.' Always check that your sentence can stand on its own.",
        },
      ],
      recuerda:
        "Tip: A complete sentence = subject + predicate + capital letter + end mark.",
    },
  ];
  
  const LA_BANK = {
    comprehend: [
      { topic:"reading-comprehension", passage:"Maya planted a small seed in her garden. Every morning she watered it and made sure it had sunlight.", question:"What did Maya do every morning?", options:["Watered the seed","Ate breakfast","Went to school"], answer:0, why:"The text says she watered it every morning.", ask:"Read the text. Then tap the answer." },
      { topic:"reading-comprehension", passage:"The fire truck raced down the street with its sirens blaring. Firefighters hurried to put out the flames.", question:"Why were the firefighters hurrying?", options:["To eat lunch","To put out a fire","To wash the truck"], answer:1, why:"The passage mentions putting out the flames.", ask:"Read the text. Then tap the answer." },
      { topic:"reading-comprehension", passage:"Leo lost his favorite blue cap at the park. He looked under the slide and behind the benches until he found it.", question:"Where did Leo look for his cap?", options:["At home","Under the slide and behind benches","In his backpack"], answer:1, why:"The text lists those two places.", ask:"Read the text. Then tap the answer." },
      { topic:"reading-comprehension", passage:"The little turtle was slow, but it never stopped moving. By sunset, it had reached the top of the hill.", question:"How did the turtle reach the top?", options:["By flying","By never stopping","By giving up"], answer:1, why:"It never stopped moving.", ask:"Read the text. Then tap the answer." },
      { topic:"reading-comprehension", passage:"Sara baked cookies for the school fair. She made chocolate chip, oatmeal, and sugar cookies.", question:"How many kinds of cookies did Sara make?", options:["Two","Three","Four"], answer:1, why:"Chocolate chip, oatmeal, and sugar = three.", ask:"Read the text. Then tap the answer." },
      { topic:"reading-comprehension", passage:"It started to rain during the picnic. The family quickly packed up the food and ran to the car.", question:"What made the family pack up?", options:["The rain","The sun","A dog"], answer:0, why:"It started to rain.", ask:"Read the text. Then tap the answer." },
      { topic:"reading-comprehension", passage:"Tom practiced the piano for an hour every day. After a month, he could play a whole song.", question:"What was the result of Tom's practice?", options:["He broke the piano","He could play a whole song","He stopped playing"], answer:1, why:"After practicing, he could play a song.", ask:"Read the text. Then tap the answer." },
      { topic:"reading-comprehension", passage:"The classroom pet was a hamster named Nibbles. Students took turns feeding him carrots and lettuce.", question:"What did the students feed Nibbles?", options:["Carrots and lettuce","Cookies","Fish"], answer:0, why:"The text says carrots and lettuce.", ask:"Read the text. Then tap the answer." },
      { topic:"reading-comprehension", passage:"A strong wind blew through the town. It knocked over trash cans and scattered leaves everywhere.", question:"What did the wind do?", options:["Knocked over trash cans","Brought sunshine","Made it snow"], answer:0, why:"It knocked over trash cans and scattered leaves.", ask:"Read the text. Then tap the answer." },
      { topic:"reading-comprehension", passage:"Emma was nervous before her first swim meet. But when the whistle blew, she dove in and swam her best.", question:"How did Emma feel before the meet?", options:["Bored","Nervous","Angry"], answer:1, why:"The text says she was nervous.", ask:"Read the text. Then tap the answer." },
      { topic:"reading-comprehension", passage:"The library was very quiet. Children read books while soft music played in the background.", question:"What were the children doing?", options:["Reading books","Running","Singing loudly"], answer:0, why:"They were reading books.", ask:"Read the text. Then tap the answer." },
      { topic:"reading-comprehension", passage:"Diego built a sandcastle near the water. A wave came and washed part of it away, so he built it higher up.", question:"Why did Diego move his castle higher up?", options:["A wave washed it away","He was tired","It was lunchtime"], answer:0, why:"A wave washed part of it away.", ask:"Read the text. Then tap the answer." },
      { topic:"reading-comprehension", passage:"The bakery smelled like fresh bread. People lined up outside to buy warm loaves in the morning.", question:"When did people buy the bread?", options:["At night","In the morning","At noon"], answer:1, why:"The text says in the morning.", ask:"Read the text. Then tap the answer." },
      { topic:"reading-comprehension", passage:"Ana's kite got stuck in a tall tree. Her dad used a long stick to gently free it.", question:"How did Ana's dad get the kite down?", options:["He climbed the tree","He used a long stick","He waited for wind"], answer:1, why:"He used a long stick.", ask:"Read the text. Then tap the answer." },
      { topic:"reading-comprehension", passage:"The puppy chewed on a shoe and then fell asleep in its basket. It was a tired little dog.", question:"What did the puppy do before sleeping?", options:["Chewed a shoe","Ate dinner","Barked at the mailman"], answer:0, why:"It chewed on a shoe first.", ask:"Read the text. Then tap the answer." },
      { topic:"context-main-idea", passage:"The path was so narrow that only one person could walk on it at a time.", question:"What does 'narrow' mean here?", options:["Very wide","Not wide; thin","Very tall"], answer:1, why:"Only one person fits, so narrow means thin/not wide.", ask:"Read the text. Then tap the answer." },
      { topic:"context-main-idea", passage:"After running the race, Sam was exhausted and could barely keep his eyes open.", question:"What does 'exhausted' mean?", options:["Very tired","Very happy","Very hungry"], answer:0, why:"He could barely stay awake, so exhausted means very tired.", ask:"Read the text. Then tap the answer." },
      { topic:"context-main-idea", passage:"Bees are amazing helpers. They make honey, they pollinate flowers, and they help plants grow.", question:"What is the main idea?", options:["Bees are amazing helpers","Honey is sweet","Flowers are pretty"], answer:0, why:"It's the big point; the rest are details.", ask:"Read the text. Then tap the answer." },
      { topic:"context-main-idea", passage:"The ancient castle was enormous, with towers taller than any building Lucy had ever seen.", question:"What does 'enormous' mean?", options:["Very small","Very large","Very old"], answer:1, why:"Towers taller than anything she'd seen = very large.", ask:"Read the text. Then tap the answer." },
      { topic:"context-main-idea", passage:"Recycling helps the planet. It saves trees, reduces trash, and keeps the air cleaner.", question:"What is the main idea?", options:["Recycling helps the planet","Trees are tall","Trash smells bad"], answer:0, why:"The big point; the rest support it.", ask:"Read the text. Then tap the answer." },
      { topic:"context-main-idea", passage:"The soup was so bland that Mia added salt and pepper to give it more flavor.", question:"What does 'bland' mean?", options:["Too spicy","Lacking flavor","Too hot"], answer:1, why:"She added salt for flavor, so bland means lacking flavor.", ask:"Read the text. Then tap the answer." },
      { topic:"context-main-idea", passage:"Exercise is great for you. It makes your heart strong, builds muscles, and boosts your mood.", question:"What is the main idea?", options:["Exercise is great for you","Hearts beat fast","Muscles are big"], answer:0, why:"It's the umbrella point over the details.", ask:"Read the text. Then tap the answer." },
      { topic:"context-main-idea", passage:"The room was immaculate — not a single speck of dust anywhere.", question:"What does 'immaculate' mean?", options:["Very dirty","Perfectly clean","Very dark"], answer:1, why:"No dust at all = perfectly clean.", ask:"Read the text. Then tap the answer." },
      { topic:"context-main-idea", passage:"Penguins are built for cold. They have thick feathers, a layer of fat, and they huddle together for warmth.", question:"What is the main idea?", options:["Penguins are built for cold","Fat is yellow","Feathers are soft"], answer:0, why:"The big point; the rest are supporting details.", ask:"Read the text. Then tap the answer." },
      { topic:"context-main-idea", passage:"The detective was curious about the strange noise, so she decided to investigate it.", question:"What does 'investigate' mean?", options:["To ignore","To look into carefully","To run away"], answer:1, why:"A curious detective looks into it carefully.", ask:"Read the text. Then tap the answer." },
      { topic:"context-main-idea", passage:"The crowd was ecstatic when the home team scored the winning goal in the last second.", question:"What does 'ecstatic' mean?", options:["Extremely happy","A little sad","Very calm"], answer:0, why:"A winning goal makes a crowd extremely happy.", ask:"Read the text. Then tap the answer." },
      { topic:"context-main-idea", passage:"Volcanoes can be dangerous. They shoot out hot lava, release ash clouds, and can cause earthquakes.", question:"What is the main idea?", options:["Volcanoes can be dangerous","Ash is gray","Lava is hot"], answer:0, why:"The big point covering the details.", ask:"Read the text. Then tap the answer." },
      { topic:"context-main-idea", passage:"The toddler was reluctant to try the new food and kept turning her head away.", question:"What does 'reluctant' mean?", options:["Eager","Unwilling","Hungry"], answer:1, why:"Turning her head away shows she was unwilling.", ask:"Read the text. Then tap the answer." },
      { topic:"context-main-idea", passage:"Libraries are wonderful places. You can borrow books, use computers, and join reading clubs there.", question:"What is the main idea?", options:["Libraries are wonderful places","Books are heavy","Computers are fast"], answer:0, why:"The umbrella point over the details.", ask:"Read the text. Then tap the answer." },
      { topic:"context-main-idea", passage:"The hikers were cautious near the cliff, walking slowly and watching every step.", question:"What does 'cautious' mean?", options:["Careless","Careful","Fast"], answer:1, why:"Walking slowly and watching every step = careful.", ask:"Read the text. Then tap the answer." },
      { topic:"reading-comprehension", passage:"The old oak tree was home to many animals. Squirrels lived in its branches and owls nested in its hollow trunk.", question:"Who lived in the tree's hollow trunk?", options:["Squirrels","Owls","Rabbits"], answer:1, why:"The text says owls nested in the hollow trunk.", ask:"Read the text. Then tap the answer." },
      { topic:"reading-comprehension", passage:"Carlos saved his allowance for three months. Finally, he had enough to buy the skateboard he wanted.", question:"How long did Carlos save?", options:["One week","Three months","One year"], answer:1, why:"The text says three months.", ask:"Read the text. Then tap the answer." },
      { topic:"reading-comprehension", passage:"The science experiment fizzed and bubbled when the two liquids mixed. The whole class watched in amazement.", question:"What did the class do?", options:["Watched in amazement","Left the room","Fell asleep"], answer:0, why:"They watched in amazement.", ask:"Read the text. Then tap the answer." },
      { topic:"reading-comprehension", passage:"Grandma's garden was full of color. Red roses, yellow sunflowers, and purple tulips grew in neat rows.", question:"What color were the sunflowers?", options:["Red","Yellow","Purple"], answer:1, why:"The text says yellow sunflowers.", ask:"Read the text. Then tap the answer." },
      { topic:"reading-comprehension", passage:"The storm knocked out the power. The family lit candles and told stories until the lights came back on.", question:"What did the family do during the blackout?", options:["Watched TV","Lit candles and told stories","Went to sleep immediately"], answer:1, why:"They lit candles and told stories.", ask:"Read the text. Then tap the answer." },
      { topic:"reading-comprehension", passage:"Mia practiced her speech in front of the mirror. By the day of the contest, she knew every word by heart.", question:"Where did Mia practice?", options:["In front of the mirror","At the library","On the bus"], answer:0, why:"In front of the mirror.", ask:"Read the text. Then tap the answer." },
      { topic:"reading-comprehension", passage:"The new puppy was scared of the vacuum. Every time it turned on, the puppy ran and hid under the bed.", question:"Where did the puppy hide?", options:["Under the bed","In the closet","Outside"], answer:0, why:"Under the bed.", ask:"Read the text. Then tap the answer." },
      { topic:"reading-comprehension", passage:"Jake's kite soared high above the beach. The strong ocean wind kept it dancing in the sky for hours.", question:"What kept the kite in the air?", options:["The ocean wind","Jake's hands","A rope"], answer:0, why:"The strong ocean wind.", ask:"Read the text. Then tap the answer." },
      { topic:"reading-comprehension", passage:"The bakery ran out of chocolate cake by noon. So many customers had come that the shelves were empty.", question:"Why were the shelves empty?", options:["The bakery was closed","So many customers came","It was nighttime"], answer:1, why:"Many customers had bought everything.", ask:"Read the text. Then tap the answer." },
      { topic:"reading-comprehension", passage:"Lily found a wounded bird in the yard. She gently placed it in a box and called the animal rescue center.", question:"What did Lily do with the bird?", options:["Left it outside","Placed it in a box and called rescue","Kept it as a pet"], answer:1, why:"She boxed it and called rescue.", ask:"Read the text. Then tap the answer." },
      { topic:"reading-comprehension", passage:"The marathon runner was in last place at the start. But she didn't give up, and by the end she finished third.", question:"How did the runner finish?", options:["First","Last","Third"], answer:2, why:"She finished third.", ask:"Read the text. Then tap the answer." },
      { topic:"reading-comprehension", passage:"Snow fell softly all night. In the morning, the whole town was covered in a thick white blanket.", question:"What covered the town?", options:["Rain","Snow","Leaves"], answer:1, why:"Snow fell all night and covered the town.", ask:"Read the text. Then tap the answer." },
      { topic:"reading-comprehension", passage:"The museum had a dinosaur exhibit. Kids gathered around the huge skeleton, amazed by how tall it was.", question:"What were the kids looking at?", options:["A painting","A dinosaur skeleton","A fish tank"], answer:1, why:"A dinosaur skeleton.", ask:"Read the text. Then tap the answer." },
      { topic:"reading-comprehension", passage:"Ben forgot his umbrella, so he got soaked walking home. He promised to always check the weather next time.", question:"Why did Ben get wet?", options:["He went swimming","He forgot his umbrella","He spilled water"], answer:1, why:"He forgot his umbrella.", ask:"Read the text. Then tap the answer." },
      { topic:"reading-comprehension", passage:"The class planted a vegetable garden. After weeks of care, they harvested tomatoes, carrots, and beans.", question:"What did the class harvest?", options:["Flowers","Tomatoes, carrots, and beans","Apples"], answer:1, why:"The text lists those three vegetables.", ask:"Read the text. Then tap the answer." },
      { topic:"context-main-idea", passage:"The hikers felt parched after hours in the hot sun with no water.", question:"What does 'parched' mean?", options:["Very thirsty","Very full","Very cold"], answer:0, why:"No water in hot sun = very thirsty.", ask:"Read the text. Then tap the answer." },
      { topic:"context-main-idea", passage:"Dolphins are intelligent animals. They use sounds to talk, solve problems, and even help each other.", question:"What is the main idea?", options:["Dolphins are intelligent","The ocean is big","Sounds are loud"], answer:0, why:"The big point; the rest are details.", ask:"Read the text. Then tap the answer." },
      { topic:"context-main-idea", passage:"The room was so cluttered that you could barely walk without stepping on something.", question:"What does 'cluttered' mean?", options:["Empty","Messy and full of stuff","Brightly lit"], answer:1, why:"Hard to walk = messy and full.", ask:"Read the text. Then tap the answer." },
      { topic:"context-main-idea", passage:"Brushing your teeth is important. It prevents cavities, keeps your breath fresh, and protects your gums.", question:"What is the main idea?", options:["Brushing your teeth is important","Toothpaste is minty","Gums are pink"], answer:0, why:"The umbrella point.", ask:"Read the text. Then tap the answer." },
      { topic:"context-main-idea", passage:"The puppy was timid at first, hiding behind the couch whenever someone new came in.", question:"What does 'timid' mean?", options:["Brave","Shy and fearful","Angry"], answer:1, why:"Hiding from new people = shy/fearful.", ask:"Read the text. Then tap the answer." },
      { topic:"context-main-idea", passage:"Trees are important to the earth. They give us oxygen, provide shade, and are homes for animals.", question:"What is the main idea?", options:["Trees are important to the earth","Shade is cool","Birds fly"], answer:0, why:"The big point over the details.", ask:"Read the text. Then tap the answer." },
      { topic:"context-main-idea", passage:"The magician's trick was baffling — no one in the audience could figure out how he did it.", question:"What does 'baffling' mean?", options:["Easy to understand","Confusing","Boring"], answer:1, why:"No one could figure it out = confusing.", ask:"Read the text. Then tap the answer." },
      { topic:"context-main-idea", passage:"Saving water helps everyone. Take shorter showers, fix leaks, and turn off the tap while brushing.", question:"What is the main idea?", options:["Saving water helps everyone","Showers are warm","Taps are silver"], answer:0, why:"The umbrella point.", ask:"Read the text. Then tap the answer." },
      { topic:"context-main-idea", passage:"After the long trip, the travelers were weary and wanted nothing more than to rest.", question:"What does 'weary' mean?", options:["Excited","Tired","Hungry"], answer:1, why:"After a long trip, weary means tired.", ask:"Read the text. Then tap the answer." },
      { topic:"context-main-idea", passage:"Ants are hard workers. They build tunnels, carry food, and protect their colony together.", question:"What is the main idea?", options:["Ants are hard workers","Tunnels are dark","Food is tasty"], answer:0, why:"The big point; rest are details.", ask:"Read the text. Then tap the answer." },
      { topic:"context-main-idea", passage:"The crowd grew restless as the delayed concert still hadn't started after an hour.", question:"What does 'restless' mean?", options:["Calm and patient","Unable to stay calm","Sleepy"], answer:1, why:"A delayed concert makes a crowd unable to stay calm.", ask:"Read the text. Then tap the answer." },
      { topic:"context-main-idea", passage:"The ocean is amazing. It is home to tiny fish, giant whales, and colorful coral reefs.", question:"What is the main idea?", options:["The ocean is amazing","Whales are gray","Fish swim"], answer:0, why:"The umbrella point over details.", ask:"Read the text. Then tap the answer." },
      { topic:"context-main-idea", passage:"The smell from the kitchen was so pleasant that everyone's mouth started to water.", question:"What does 'pleasant' mean?", options:["Nice and enjoyable","Terrible","Strange"], answer:0, why:"It made mouths water, so it was nice.", ask:"Read the text. Then tap the answer." },
      { topic:"context-main-idea", passage:"Helping others feels good. You can share your toys, comfort a friend, or hold a door open.", question:"What is the main idea?", options:["Helping others feels good","Toys are fun","Doors are heavy"], answer:0, why:"The big point; the rest support it.", ask:"Read the text. Then tap the answer." },
      { topic:"context-main-idea", passage:"The puzzle was so complex that it took the whole family an entire weekend to finish.", question:"What does 'complex' mean?", options:["Simple","Complicated","Small"], answer:1, why:"Took a whole weekend = complicated.", ask:"Read the text. Then tap the answer." },
    ],
    sort: [
      { topic:"phonics", word:"cake", buckets:["Long A","Short A"], answer:0, why:"'cake' has a long A (silent e).", ask:"Which box does this word go in? Tap it." },
      { topic:"phonics", word:"cat", buckets:["Long A","Short A"], answer:1, why:"'cat' has a short A.", ask:"Which box does this word go in? Tap it." },
      { topic:"phonics", word:"bike", buckets:["Long I","Short I"], answer:0, why:"'bike' has a long I (silent e).", ask:"Which box does this word go in? Tap it." },
      { topic:"phonics", word:"sit", buckets:["Long I","Short I"], answer:1, why:"'sit' has a short I.", ask:"Which box does this word go in? Tap it." },
      { topic:"phonics", word:"rope", buckets:["Long O","Short O"], answer:0, why:"'rope' has a long O (silent e).", ask:"Which box does this word go in? Tap it." },
      { topic:"phonics", word:"hop", buckets:["Long O","Short O"], answer:1, why:"'hop' has a short O.", ask:"Which box does this word go in? Tap it." },
      { topic:"phonics", word:"cute", buckets:["Long U","Short U"], answer:0, why:"'cute' has a long U (silent e).", ask:"Which box does this word go in? Tap it." },
      { topic:"phonics", word:"cup", buckets:["Long U","Short U"], answer:1, why:"'cup' has a short U.", ask:"Which box does this word go in? Tap it." },
      { topic:"phonics", word:"these", buckets:["Long E","Short E"], answer:0, why:"'these' has a long E.", ask:"Which box does this word go in? Tap it." },
      { topic:"phonics", word:"bed", buckets:["Long E","Short E"], answer:1, why:"'bed' has a short E.", ask:"Which box does this word go in? Tap it." },
      { topic:"phonics", word:"unhappy", buckets:["Prefix","Suffix"], answer:0, why:"'un-' is a prefix at the start.", ask:"Which box does this word go in? Tap it." },
      { topic:"phonics", word:"helpful", buckets:["Prefix","Suffix"], answer:1, why:"'-ful' is a suffix at the end.", ask:"Which box does this word go in? Tap it." },
      { topic:"phonics", word:"redo", buckets:["Prefix","Suffix"], answer:0, why:"'re-' is a prefix at the start.", ask:"Which box does this word go in? Tap it." },
      { topic:"phonics", word:"fearless", buckets:["Prefix","Suffix"], answer:1, why:"'-less' is a suffix at the end.", ask:"Which box does this word go in? Tap it." },
      { topic:"phonics", word:"preview", buckets:["Prefix","Suffix"], answer:0, why:"'pre-' is a prefix at the start.", ask:"Which box does this word go in? Tap it." },
      { topic:"phonics", word:"kindness", buckets:["Prefix","Suffix"], answer:1, why:"'-ness' is a suffix at the end.", ask:"Which box does this word go in? Tap it." },
      { topic:"phonics", word:"disagree", buckets:["Prefix","Suffix"], answer:0, why:"'dis-' is a prefix at the start.", ask:"Which box does this word go in? Tap it." },
      { topic:"phonics", word:"playful", buckets:["Prefix","Suffix"], answer:1, why:"'-ful' is a suffix at the end.", ask:"Which box does this word go in? Tap it." },
      { topic:"phonics", word:"ship", buckets:["sh sound","ch sound"], answer:0, why:"'ship' starts with the sh sound.", ask:"Which box does this word go in? Tap it." },
      { topic:"phonics", word:"chair", buckets:["sh sound","ch sound"], answer:1, why:"'chair' starts with the ch sound.", ask:"Which box does this word go in? Tap it." },
      { topic:"phonics", word:"shell", buckets:["sh sound","ch sound"], answer:0, why:"'shell' starts with the sh sound.", ask:"Which box does this word go in? Tap it." },
      { topic:"phonics", word:"cheese", buckets:["sh sound","ch sound"], answer:1, why:"'cheese' starts with the ch sound.", ask:"Which box does this word go in? Tap it." },
      { topic:"phonics", word:"thumb", buckets:["th sound","wh sound"], answer:0, why:"'thumb' starts with the th sound.", ask:"Which box does this word go in? Tap it." },
      { topic:"phonics", word:"whale", buckets:["th sound","wh sound"], answer:1, why:"'whale' starts with the wh sound.", ask:"Which box does this word go in? Tap it." },
      { topic:"phonics", word:"three", buckets:["th sound","wh sound"], answer:0, why:"'three' starts with the th sound.", ask:"Which box does this word go in? Tap it." },
      { topic:"phonics", word:"wheel", buckets:["th sound","wh sound"], answer:1, why:"'wheel' starts with the wh sound.", ask:"Which box does this word go in? Tap it." },
      { topic:"phonics", word:"rain", buckets:["Long A","Short A"], answer:0, why:"'rain' has a long A (ai).", ask:"Which box does this word go in? Tap it." },
      { topic:"phonics", word:"map", buckets:["Long A","Short A"], answer:1, why:"'map' has a short A.", ask:"Which box does this word go in? Tap it." },
      { topic:"phonics", word:"boat", buckets:["Long O","Short O"], answer:0, why:"'boat' has a long O (oa).", ask:"Which box does this word go in? Tap it." },
      { topic:"phonics", word:"dog", buckets:["Long O","Short O"], answer:1, why:"'dog' has a short O.", ask:"Which box does this word go in? Tap it." },
    ],
    order: [
      { topic:"ordering-events", intro:"Planting a flower", events:["Dig a hole","Place the seed","Cover it with soil","Water it"], why:"You dig, plant, cover, then water.", ask:"Put them in order. Tap 1st, 2nd, 3rd..." },
      { topic:"ordering-events", intro:"Making a sandwich", events:["Get two slices of bread","Add the filling","Put the slices together","Take a bite"], why:"Bread first, filling, close it, then eat.", ask:"Put them in order. Tap 1st, 2nd, 3rd..." },
      { topic:"ordering-events", intro:"Getting ready for school", events:["Wake up","Brush your teeth","Eat breakfast","Walk to school"], why:"Wake, brush, eat, then go.", ask:"Put them in order. Tap 1st, 2nd, 3rd..." },
      { topic:"ordering-events", intro:"A caterpillar's life", events:["An egg is laid","A caterpillar hatches","It forms a cocoon","A butterfly emerges"], why:"Egg, caterpillar, cocoon, butterfly.", ask:"Put them in order. Tap 1st, 2nd, 3rd..." },
      { topic:"ordering-events", intro:"Baking cookies", events:["Mix the dough","Roll it into balls","Bake in the oven","Let them cool"], why:"Mix, roll, bake, cool.", ask:"Put them in order. Tap 1st, 2nd, 3rd..." },
      { topic:"ordering-events", intro:"Brushing your teeth", events:["Put toothpaste on the brush","Brush your teeth","Rinse with water","Put the brush away"], why:"Paste, brush, rinse, put away.", ask:"Put them in order. Tap 1st, 2nd, 3rd..." },
      { topic:"ordering-events", intro:"A rainy day", events:["Clouds gather in the sky","Rain begins to fall","Puddles form on the ground","The sun comes back out"], why:"Clouds, rain, puddles, sun.", ask:"Put them in order. Tap 1st, 2nd, 3rd..." },
      { topic:"ordering-events", intro:"Reading a book", events:["Open the book","Read the first page","Turn to the next page","Finish the last chapter"], why:"Open, read, turn, finish.", ask:"Put them in order. Tap 1st, 2nd, 3rd..." },
      { topic:"ordering-events", intro:"Growing up", events:["Be a baby","Become a child","Grow into a teenager","Become an adult"], why:"Baby, child, teen, adult.", ask:"Put them in order. Tap 1st, 2nd, 3rd..." },
      { topic:"ordering-events", intro:"Washing your hands", events:["Turn on the water","Add soap","Scrub your hands","Dry with a towel"], why:"Water, soap, scrub, dry.", ask:"Put them in order. Tap 1st, 2nd, 3rd..." },
      { topic:"ordering-events", intro:"A soccer goal", events:["The player gets the ball","She runs toward the goal","She kicks the ball","The ball goes in"], why:"Get, run, kick, score.", ask:"Put them in order. Tap 1st, 2nd, 3rd..." },
      { topic:"ordering-events", intro:"Mailing a letter", events:["Write the letter","Put it in an envelope","Add a stamp","Drop it in the mailbox"], why:"Write, envelope, stamp, mail.", ask:"Put them in order. Tap 1st, 2nd, 3rd..." },
      { topic:"ordering-events", intro:"Morning routine", events:["The alarm rings","You get out of bed","You get dressed","You eat breakfast"], why:"Alarm, up, dress, eat.", ask:"Put them in order. Tap 1st, 2nd, 3rd..." },
      { topic:"ordering-events", intro:"Building a snowman", events:["Roll a big snowball","Stack a medium ball on top","Add a small ball for the head","Give it eyes and a nose"], why:"Big, medium, head, face.", ask:"Put them in order. Tap 1st, 2nd, 3rd..." },
      { topic:"ordering-events", intro:"A seed becomes a tree", events:["A seed is planted","A sprout pushes up","It grows into a sapling","It becomes a tall tree"], why:"Seed, sprout, sapling, tree.", ask:"Put them in order. Tap 1st, 2nd, 3rd..." },
      { topic:"ordering-events", intro:"Going to the movies", events:["Buy a ticket","Find your seat","Watch the movie","Leave the theater"], why:"Ticket, seat, watch, leave.", ask:"Put them in order. Tap 1st, 2nd, 3rd..." },
      { topic:"ordering-events", intro:"Drawing a picture", events:["Get a pencil and paper","Sketch the outline","Color it in","Show it to a friend"], why:"Get, sketch, color, show.", ask:"Put them in order. Tap 1st, 2nd, 3rd..." },
      { topic:"ordering-events", intro:"A campfire", events:["Gather dry wood","Stack the wood","Light the fire","Roast marshmallows"], why:"Gather, stack, light, roast.", ask:"Put them in order. Tap 1st, 2nd, 3rd..." },
      { topic:"ordering-events", intro:"Riding a bike", events:["Put on a helmet","Get on the bike","Start pedaling","Ride down the path"], why:"Helmet, on, pedal, ride.", ask:"Put them in order. Tap 1st, 2nd, 3rd..." },
      { topic:"ordering-events", intro:"Making lemonade", events:["Cut the lemons","Squeeze the juice","Add water and sugar","Stir and serve"], why:"Cut, squeeze, add, stir.", ask:"Put them in order. Tap 1st, 2nd, 3rd..." },
      { topic:"ordering-events", intro:"A school day", events:["Arrive at school","Attend classes","Eat lunch","Go home"], why:"Arrive, classes, lunch, home.", ask:"Put them in order. Tap 1st, 2nd, 3rd..." },
      { topic:"ordering-events", intro:"Planting then harvesting", events:["Plant the seeds","Water the plants","Wait for them to grow","Pick the vegetables"], why:"Plant, water, wait, pick.", ask:"Put them in order. Tap 1st, 2nd, 3rd..." },
      { topic:"ordering-events", intro:"Telling a story", events:["Once upon a time...","A problem appears","The hero solves it","The end"], why:"Beginning, problem, solution, end.", ask:"Put them in order. Tap 1st, 2nd, 3rd..." },
      { topic:"ordering-events", intro:"Doing homework", events:["Take out your books","Read the instructions","Answer the questions","Check your work"], why:"Books, read, answer, check.", ask:"Put them in order. Tap 1st, 2nd, 3rd..." },
      { topic:"ordering-events", intro:"A butterfly drinks", events:["The butterfly lands on a flower","It uncurls its tongue","It drinks the nectar","It flies away"], why:"Land, uncurl, drink, fly.", ask:"Put them in order. Tap 1st, 2nd, 3rd..." },
      { topic:"ordering-events", intro:"Setting the table", events:["Place the plates","Add the forks and knives","Set out the glasses","Fold the napkins"], why:"Plates, utensils, glasses, napkins.", ask:"Put them in order. Tap 1st, 2nd, 3rd..." },
      { topic:"ordering-events", intro:"A thunderstorm", events:["The sky turns dark","Lightning flashes","Thunder rumbles","Rain pours down"], why:"Dark, lightning, thunder, rain.", ask:"Put them in order. Tap 1st, 2nd, 3rd..." },
      { topic:"ordering-events", intro:"Making the bed", events:["Pull up the sheet","Add the blanket","Fluff the pillows","Smooth it all out"], why:"Sheet, blanket, pillows, smooth.", ask:"Put them in order. Tap 1st, 2nd, 3rd..." },
      { topic:"ordering-events", intro:"Catching a fish", events:["Put bait on the hook","Cast the line","Wait for a bite","Reel it in"], why:"Bait, cast, wait, reel.", ask:"Put them in order. Tap 1st, 2nd, 3rd..." },
      { topic:"ordering-events", intro:"Getting a pet dog", events:["Visit the shelter","Choose a dog","Take it home","Give it a name"], why:"Visit, choose, home, name.", ask:"Put them in order. Tap 1st, 2nd, 3rd..." },
    ],
    sentence: [
      { topic:"complete-sentences", kind:"order", words:["The","dog","ran","fast."], answer:"The dog ran fast.", why:"Subject (dog) + predicate (ran fast).", ask:"Tap the words in order to make a sentence." },
      { topic:"complete-sentences", kind:"order", words:["My","sister","loves","books."], answer:"My sister loves books.", why:"Subject + predicate, capital + period.", ask:"Tap the words in order to make a sentence." },
      { topic:"complete-sentences", kind:"order", words:["We","played","at","the","park."], answer:"We played at the park.", why:"Complete idea with subject and predicate.", ask:"Tap the words in order to make a sentence." },
      { topic:"complete-sentences", kind:"order", words:["The","sun","is","bright","today."], answer:"The sun is bright today.", why:"Subject (sun) + predicate (is bright).", ask:"Tap the words in order to make a sentence." },
      { topic:"complete-sentences", kind:"order", words:["Birds","sing","in","the","morning."], answer:"Birds sing in the morning.", why:"Subject (birds) + predicate (sing).", ask:"Tap the words in order to make a sentence." },
      { topic:"complete-sentences", kind:"order", words:["I","like","to","draw","pictures."], answer:"I like to draw pictures.", why:"Complete sentence with subject I.", ask:"Tap the words in order to make a sentence." },
      { topic:"complete-sentences", kind:"order", words:["The","rain","fell","all","night."], answer:"The rain fell all night.", why:"Subject (rain) + predicate (fell).", ask:"Tap the words in order to make a sentence." },
      { topic:"complete-sentences", kind:"order", words:["She","reads","every","day."], answer:"She reads every day.", why:"Subject (she) + predicate (reads).", ask:"Tap the words in order to make a sentence." },
      { topic:"complete-sentences", kind:"order", words:["Our","team","won","the","game."], answer:"Our team won the game.", why:"Subject (team) + predicate (won).", ask:"Tap the words in order to make a sentence." },
      { topic:"complete-sentences", kind:"order", words:["The","baby","is","sleeping."], answer:"The baby is sleeping.", why:"Subject (baby) + predicate (is sleeping).", ask:"Tap the words in order to make a sentence." },
      { topic:"complete-sentences", kind:"fix", fragment:"ran to the store.", options:["The boy ran to the store.","Ran to the store fast.","To the store."], answer:0, why:"Only the first has a subject (The boy).", ask:"Tap the choice that is a full sentence." },
      { topic:"complete-sentences", kind:"fix", fragment:"the cat sleeps", options:["the cat sleeps","The cat sleeps.","cat sleeps"], answer:1, why:"Needs a capital letter and a period.", ask:"Tap the choice that is a full sentence." },
      { topic:"complete-sentences", kind:"fix", fragment:"After the game.", options:["After the game.","We ate pizza after the game.","Game after."], answer:1, why:"The fragment needs a subject and predicate.", ask:"Tap the choice that is a full sentence." },
      { topic:"complete-sentences", kind:"fix", fragment:"barked loudly", options:["barked loudly","The dog barked loudly.","loudly barked the"], answer:1, why:"Needs a subject, capital, and period.", ask:"Tap the choice that is a full sentence." },
      { topic:"complete-sentences", kind:"fix", fragment:"my favorite color is blue", options:["my favorite color is blue","My favorite color is blue.","favorite color blue"], answer:1, why:"Needs a capital and an end mark.", ask:"Tap the choice that is a full sentence." },
      { topic:"complete-sentences", kind:"fix", fragment:"The tall trees.", options:["The tall trees.","The tall trees swayed in the wind.","Tall the trees."], answer:1, why:"The fragment has no predicate (action).", ask:"Tap the choice that is a full sentence." },
      { topic:"complete-sentences", kind:"fix", fragment:"swam in the pool", options:["swam in the pool","The kids swam in the pool.","pool swam in"], answer:1, why:"Needs a subject (The kids).", ask:"Tap the choice that is a full sentence." },
      { topic:"complete-sentences", kind:"fix", fragment:"she is a good singer", options:["she is a good singer","She is a good singer.","good singer she is"], answer:1, why:"Needs a capital and a period.", ask:"Tap the choice that is a full sentence." },
      { topic:"complete-sentences", kind:"fix", fragment:"Because it was cold.", options:["Because it was cold.","We wore coats because it was cold.","Cold because was."], answer:1, why:"The fragment can't stand alone; needs a main clause.", ask:"Tap the choice that is a full sentence." },
      { topic:"complete-sentences", kind:"fix", fragment:"the bus arrived late", options:["the bus arrived late","The bus arrived late.","late the bus arrived"], answer:1, why:"Needs a capital and a period.", ask:"Tap the choice that is a full sentence." },
      { topic:"complete-sentences", kind:"order", words:["The","stars","shine","at","night."], answer:"The stars shine at night.", why:"Subject (stars) + predicate (shine).", ask:"Tap the words in order to make a sentence." },
      { topic:"complete-sentences", kind:"order", words:["He","fixed","his","bike."], answer:"He fixed his bike.", why:"Subject (he) + predicate (fixed).", ask:"Tap the words in order to make a sentence." },
      { topic:"complete-sentences", kind:"order", words:["The","flowers","smell","sweet."], answer:"The flowers smell sweet.", why:"Subject (flowers) + predicate (smell).", ask:"Tap the words in order to make a sentence." },
      { topic:"complete-sentences", kind:"order", words:["They","watched","a","movie."], answer:"They watched a movie.", why:"Subject (they) + predicate (watched).", ask:"Tap the words in order to make a sentence." },
      { topic:"complete-sentences", kind:"order", words:["The","snow","melted","quickly."], answer:"The snow melted quickly.", why:"Subject (snow) + predicate (melted).", ask:"Tap the words in order to make a sentence." },
      { topic:"complete-sentences", kind:"order", words:["My","dad","cooks","dinner."], answer:"My dad cooks dinner.", why:"Subject (dad) + predicate (cooks).", ask:"Tap the words in order to make a sentence." },
      { topic:"complete-sentences", kind:"fix", fragment:"jumped over the fence", options:["jumped over the fence","The horse jumped over the fence.","fence over jumped"], answer:1, why:"Needs a subject (The horse).", ask:"Tap the choice that is a full sentence." },
      { topic:"complete-sentences", kind:"fix", fragment:"we are going to the beach", options:["we are going to the beach","We are going to the beach.","beach the to going"], answer:1, why:"Needs a capital and a period.", ask:"Tap the choice that is a full sentence." },
      { topic:"complete-sentences", kind:"order", words:["The","clock","ticks","slowly."], answer:"The clock ticks slowly.", why:"Subject (clock) + predicate (ticks).", ask:"Tap the words in order to make a sentence." },
      { topic:"complete-sentences", kind:"order", words:["A","frog","hopped","away."], answer:"A frog hopped away.", why:"Subject (frog) + predicate (hopped).", ask:"Tap the words in order to make a sentence." },
    ],
  };
  
  /* Kid-friendly instructions (English) shown on each game round. 8-year-olds. */
  const LA_UI = {
    comprehend: "Read the short text. Then tap the correct answer.",
    sort:       "Tap the box this word belongs in.",
    order:      "Put the steps in the right order. Tap them 1, 2, 3...",
    sentenceOrder: "Tap the words in order to build a complete sentence.",
    sentenceFix:   "Tap the choice that is a complete sentence."
  };
  
  if (typeof window !== "undefined") {
    window.LA_LESSONS = LA_LESSONS;
    window.LA_BANK = LA_BANK;
    window.LA_UI = LA_UI;
  }