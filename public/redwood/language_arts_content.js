/* Redwood · Language Arts — modules + study + banks (English) */

const LA_MODULES = [
  {
    "id": "reading-comprehension",
    "title": "Reading Comprehension",
    "emoji": "📖",
    "topics": [
      "reading-comprehension"
    ],
    "lesson": "reading-comprehension"
  },
  {
    "id": "context-main-idea",
    "title": "Word Meaning & Main Idea",
    "emoji": "💡",
    "topics": [
      "context-main-idea"
    ],
    "lesson": "context-main-idea"
  },
  {
    "id": "phonics",
    "title": "Phonics & Word Analysis",
    "emoji": "🔤",
    "topics": [
      "phonics"
    ],
    "lesson": "phonics"
  },
  {
    "id": "ordering-events",
    "title": "Ordering Events",
    "emoji": "🔢",
    "topics": [
      "ordering-events"
    ],
    "lesson": "ordering-events"
  },
  {
    "id": "complete-sentences",
    "title": "Writing Complete Sentences",
    "emoji": "✍️",
    "topics": [
      "complete-sentences"
    ],
    "lesson": "complete-sentences"
  }
];

const LA_LESSONS = [
  {
    "id": "reading-comprehension",
    "num": 1,
    "title": "Reading Comprehension",
    "subtitle": "Understanding what you read",
    "intro": "Reading comprehension means understanding and remembering what a text is about. Good readers don't just say the words — they think about the meaning, picture what's happening, and ask themselves questions while they read.",
    "sections": [
      {
        "h": "Read with a purpose",
        "body": "Before reading, look at the title and any pictures. Ask yourself: what might this be about? While you read, keep checking: does this make sense? If something is confusing, slow down and read it again."
      },
      {
        "h": "Find the answers in the text",
        "body": "Many questions can be answered by going back to the text. The answer is often right there in a sentence. Look for key words from the question and find where they appear in the passage."
      },
      {
        "h": "Make a movie in your mind",
        "body": "As you read, imagine the scene like a movie. Who is there? Where are they? What is happening? Visualizing helps you remember and understand the story much better."
      }
    ],
    "recuerda": "Tip: When a question asks about details, go back and reread. The answer is usually hiding in the text."
  },
  {
    "id": "context-main-idea",
    "num": 2,
    "title": "Meaning of Words by Context, Main Idea & Details",
    "subtitle": "Figuring out words and finding the big idea",
    "intro": "Sometimes you read a word you don't know. Instead of stopping, you can use context clues — the other words around it — to figure out what it means. You also learn to tell the main idea (the big point) from the details (the smaller facts that support it).",
    "sections": [
      {
        "h": "Context clues",
        "body": "The words around a tricky word often give hints. In 'The arid desert had no water for miles,' the words 'desert' and 'no water' tell you that arid means dry. Use the sentence to be a detective."
      },
      {
        "h": "Main idea",
        "body": "The main idea is what the whole paragraph is mostly about — the big point. It is not one small fact; it's the umbrella that covers all the details. Ask: 'What is this mostly about?'"
      },
      {
        "h": "Supporting details",
        "body": "Details are the smaller pieces of information that explain or prove the main idea. If the main idea is 'Dogs make great pets,' details might be 'they are loyal,' 'they protect the home,' and 'they are fun to play with.'"
      }
    ],
    "recuerda": "Tip: Main idea = the big point. Details = the small facts that support it."
  },
  {
    "id": "phonics",
    "num": 3,
    "title": "Phonics and Word Analysis",
    "subtitle": "Sounds, patterns, and parts of words",
    "intro": "Phonics is about the sounds letters make. Word analysis means breaking words into parts — like prefixes, suffixes, and root words — to understand and read them. Knowing patterns helps you read new words you've never seen.",
    "sections": [
      {
        "h": "Long and short vowels",
        "body": "Short vowels are quick sounds: cat, bed, sit, hot, cup. Long vowels say their own name: cake, these, bike, rope, cute. The silent 'e' at the end often makes a vowel long (cap → cape)."
      },
      {
        "h": "Prefixes and suffixes",
        "body": "A prefix goes at the START of a word and changes its meaning: un- (unhappy = not happy), re- (redo = do again). A suffix goes at the END: -ful (helpful = full of help), -less (fearless = without fear)."
      },
      {
        "h": "Root words",
        "body": "The root is the main part of a word. If you find the root, you can understand many words. 'Play' is the root in playing, played, player, and replay."
      }
    ],
    "recuerda": "Tip: Silent 'e' usually makes the vowel long: hop → hope, kit → kite."
  },
  {
    "id": "ordering-events",
    "num": 4,
    "title": "Ordering Events",
    "subtitle": "Putting a story in the right sequence",
    "intro": "Stories happen in an order: first, next, then, and last. Putting events in the correct sequence shows that you understand how a story unfolds. Signal words like first, then, after, and finally help you keep track.",
    "sections": [
      {
        "h": "Sequence signal words",
        "body": "Words like first, second, next, then, before, after, and finally tell you the order things happen. Watch for them — they are clues that show what comes when."
      },
      {
        "h": "Beginning, middle, end",
        "body": "Most stories have a beginning (what starts it), a middle (what happens), and an end (how it finishes). When ordering events, ask which one had to happen first for the others to make sense."
      },
      {
        "h": "Cause and effect in order",
        "body": "Often one event causes the next. You plant a seed, THEN it grows, THEN it becomes a flower. The cause always comes before the effect."
      }
    ],
    "recuerda": "Tip: Look for signal words — first, then, next, finally — to find the right order."
  },
  {
    "id": "complete-sentences",
    "num": 5,
    "title": "Writing Complete Sentences",
    "subtitle": "Subjects, predicates, and proper form",
    "intro": "A complete sentence expresses a full idea. It needs two main parts: a subject (who or what the sentence is about) and a predicate (what the subject does or is). It also starts with a capital letter and ends with a punctuation mark.",
    "sections": [
      {
        "h": "Subject and predicate",
        "body": "The subject is who or what does the action: 'The dog ran.' (dog = subject, ran = predicate). Without both parts, it's a fragment, not a full sentence. 'Ran fast' is missing a subject."
      },
      {
        "h": "Capital letter and end mark",
        "body": "Every sentence starts with a capital letter and ends with a period (.), question mark (?), or exclamation point (!). 'the cat sleeps' is missing a capital and a period — it should be 'The cat sleeps.'"
      },
      {
        "h": "Fragments vs. complete sentences",
        "body": "A fragment is an incomplete piece: 'After the game.' A complete sentence finishes the thought: 'We ate pizza after the game.' Always check that your sentence can stand on its own."
      }
    ],
    "recuerda": "Tip: A complete sentence = subject + predicate + capital letter + end mark."
  }
];

const LA_BANK = {
  comprehend: [
    {"topic":"reading-comprehension","passage":"Maya planted a small seed in her backyard garden. Every morning before school, she watered it and pulled out the weeds nearby. After three weeks, a tiny green sprout finally pushed through the soil. Maya was so proud that she drew a picture of it.","question":"Why was Maya proud at the end?","options":["The weeds grew","A sprout finally appeared","It rained"],"answer":1,"why":"After her care, a sprout appeared, so she was proud.","ask":"Read the whole text. Then tap the best answer."},
    {"topic":"reading-comprehension","passage":"The fire truck raced down Main Street with its red lights flashing and siren blaring. People stepped back onto the sidewalk to let it pass. When it reached the old bakery, three firefighters jumped out and unrolled a long hose. Smoke was pouring from the bakery roof.","question":"Where was the fire?","options":["The bakery","The fire station","A school"],"answer":0,"why":"Smoke poured from the bakery roof.","ask":"Read the whole text. Then tap the best answer."},
    {"topic":"reading-comprehension","passage":"Leo could not find his favorite blue cap anywhere. He looked under his bed, inside his backpack, and behind the couch. Just when he was about to give up, his little sister walked in wearing it. She giggled and handed it back to him.","question":"Who had Leo's cap?","options":["His dog","His little sister","His friend"],"answer":1,"why":"His sister walked in wearing it.","ask":"Read the whole text. Then tap the best answer."},
    {"topic":"reading-comprehension","passage":"The little turtle was much slower than the other animals in the race. While the rabbit dashed ahead and then stopped to nap, the turtle kept moving step by step. By the time the sun began to set, the turtle had quietly crossed the finish line first. The rabbit woke up too late.","question":"How did the turtle win?","options":["It ran fast","It never stopped moving","It took a shortcut"],"answer":1,"why":"It kept moving while the rabbit napped.","ask":"Read the whole text. Then tap the best answer."},
    {"topic":"reading-comprehension","passage":"Sara wanted to bake cookies for the school fair. She mixed flour, sugar, and butter in a big bowl, then added chocolate chips. After the cookies baked, the whole kitchen smelled sweet and warm. She packed them carefully into a box for the morning.","question":"What did Sara add after the flour, sugar, and butter?","options":["Chocolate chips","Salt","Eggs"],"answer":0,"why":"She added chocolate chips.","ask":"Read the whole text. Then tap the best answer."},
    {"topic":"reading-comprehension","passage":"It was sunny when the family started their picnic in the park. Suddenly, dark clouds rolled in and a cold wind began to blow. Big raindrops started to fall, so everyone quickly packed the food. They ran to the car laughing as the rain poured down.","question":"What changed during the picnic?","options":["It got sunnier","A storm came","It snowed"],"answer":1,"why":"Clouds, wind, and rain came.","ask":"Read the whole text. Then tap the best answer."},
    {"topic":"reading-comprehension","passage":"Tom wanted to learn to play the piano, so he practiced for thirty minutes every day after dinner. At first his fingers felt clumsy and he made many mistakes. But after a whole month of practice, he could play a short song without stopping. His family clapped when he performed it.","question":"What helped Tom play the song?","options":["Luck","Daily practice","A new piano"],"answer":1,"why":"A month of daily practice helped him.","ask":"Read the whole text. Then tap the best answer."},
    {"topic":"reading-comprehension","passage":"The classroom hamster, named Nibbles, lived in a cage by the window. Each day a different student had the job of feeding him carrots and fresh water. On Fridays, the class let him run inside a clear plastic ball across the floor. The students loved watching him roll around.","question":"What happened on Fridays?","options":["Nibbles got a bath","Nibbles ran in a plastic ball","Nibbles went home"],"answer":1,"why":"On Fridays he ran in the ball.","ask":"Read the whole text. Then tap the best answer."},
    {"topic":"reading-comprehension","passage":"A strong storm blew through the town overnight. In the morning, branches were scattered across the streets and one big tree had fallen near the park. Neighbors came outside with rakes and bags to help clean up. By lunchtime, the streets looked tidy again.","question":"What did the neighbors do?","options":["Stayed inside","Helped clean up","Planted trees"],"answer":1,"why":"They came out to help clean up.","ask":"Read the whole text. Then tap the best answer."},
    {"topic":"reading-comprehension","passage":"Emma felt nervous before her first swimming race. Her hands were shaky and her stomach felt like it was full of butterflies. But when the whistle blew, she dove into the cool water and swam as hard as she could. She touched the wall in second place and grinned.","question":"How did Emma feel BEFORE the race?","options":["Bored","Nervous","Angry"],"answer":1,"why":"She was nervous, with shaky hands.","ask":"Read the whole text. Then tap the best answer."},
    {"topic":"reading-comprehension","passage":"The town library was a quiet, cozy place full of tall shelves. Children sat on soft cushions reading picture books while soft music played. A librarian helped a boy find a book about dinosaurs. Outside, it was raining, which made the warm library feel even nicer.","question":"Why did the library feel nicer?","options":["It was raining outside","The music was loud","It was crowded"],"answer":0,"why":"The rain outside made the warm library nicer.","ask":"Read the whole text. Then tap the best answer."},
    {"topic":"reading-comprehension","passage":"Diego built a tall sandcastle close to the ocean waves. A big wave rolled in and washed away one of the towers. Instead of getting upset, Diego moved his castle higher up the beach and rebuilt it. This time the waves could not reach it.","question":"Why did Diego move his castle?","options":["He was bored","A wave washed part away","It was time to go"],"answer":1,"why":"A wave washed a tower away.","ask":"Read the whole text. Then tap the best answer."},
    {"topic":"reading-comprehension","passage":"Every morning the bakery on the corner filled the street with the smell of fresh bread. People formed a long line outside before it even opened. The baker, Mr. Ortiz, waved at the children on their way to school. By noon, most of the warm loaves were sold.","question":"When were most loaves sold?","options":["At night","By noon","At midnight"],"answer":1,"why":"By noon most were sold.","ask":"Read the whole text. Then tap the best answer."},
    {"topic":"reading-comprehension","passage":"Ana's kite got stuck high in a tall oak tree at the park. She tried jumping, but she could not reach it. Her dad found a long branch and gently knocked the kite loose. Ana cheered as the kite floated back down to her hands.","question":"How did the kite come down?","options":["The wind blew it","Her dad used a long branch","It fell on its own"],"answer":1,"why":"Her dad knocked it loose with a branch.","ask":"Read the whole text. Then tap the best answer."},
    {"topic":"reading-comprehension","passage":"The puppy was full of energy all afternoon. It chased its tail, chewed an old shoe, and barked at the mail carrier. After all that playing, it curled up in its soft basket. Within minutes, the tired puppy was fast asleep.","question":"What did the puppy do LAST?","options":["Chased its tail","Chewed a shoe","Fell asleep"],"answer":2,"why":"It fell asleep last.","ask":"Read the whole text. Then tap the best answer."},
    {"topic":"reading-comprehension","passage":"The third-grade class planted a vegetable garden behind the school. They watered it carefully and watched it grow for many weeks. When harvest day came, they picked ripe tomatoes, crunchy carrots, and green beans. The class made a big salad to share.","question":"What did the class do with the vegetables?","options":["Sold them","Made a salad","Threw them away"],"answer":1,"why":"They made a salad to share.","ask":"Read the whole text. Then tap the best answer."},
    {"topic":"reading-comprehension","passage":"A baby bird had fallen from its nest onto the grass below. Lily carefully scooped it up and placed it in a small box lined with a soft cloth. She called the animal rescue center, and a worker came to help. The bird was soon back safe with its family.","question":"What did Lily do first?","options":["Called the rescue center","Put the bird in a soft box","Climbed the tree"],"answer":1,"why":"First she placed it in a soft box.","ask":"Read the whole text. Then tap the best answer."},
    {"topic":"reading-comprehension","passage":"The marathon runner started the race in last place. She did not let that stop her, and she kept a steady pace the whole way. One by one, she passed the runners who had grown tired. By the end, she crossed the finish line in third place.","question":"How did the runner finish?","options":["First","Third","Last"],"answer":1,"why":"She finished third after passing tired runners.","ask":"Read the whole text. Then tap the best answer."},
    {"topic":"reading-comprehension","passage":"Snow fell softly over the town all through the night. By morning, the rooftops, cars, and trees were covered in a thick white blanket. Children rushed outside in their warm coats to build snowmen. The whole town looked bright and quiet.","question":"What covered the town by morning?","options":["Rain","Thick snow","Leaves"],"answer":1,"why":"Snow fell all night and covered the town.","ask":"Read the whole text. Then tap the best answer."},
    {"topic":"reading-comprehension","passage":"The natural history museum opened a brand-new dinosaur exhibit. A giant skeleton stood in the middle of the room, towering over the visitors. Kids gathered around, amazed at how tall and ancient it was. A guide explained what the dinosaur ate millions of years ago.","question":"What was the new exhibit about?","options":["Space","Dinosaurs","Oceans"],"answer":1,"why":"It was a dinosaur exhibit.","ask":"Read the whole text. Then tap the best answer."},
    {"topic":"reading-comprehension","passage":"Ben forgot to check the weather before walking to school. Halfway there, dark clouds opened up and rain poured down. By the time he arrived, his clothes and backpack were soaked. He promised himself he would always bring an umbrella from then on.","question":"Why did Ben get soaked?","options":["He went swimming","He forgot his umbrella","He spilled water"],"answer":1,"why":"He forgot to bring an umbrella.","ask":"Read the whole text. Then tap the best answer."},
    {"topic":"reading-comprehension","passage":"Carlos saved a little money from his allowance every week. He kept the coins in an old jar on his shelf and counted them often. After three whole months, he finally had enough to buy the skateboard he wanted. He felt proud that his patience had paid off.","question":"How did Carlos get the skateboard?","options":["It was a gift","He saved for three months","He borrowed money"],"answer":1,"why":"He saved his allowance for three months.","ask":"Read the whole text. Then tap the best answer."},
    {"topic":"reading-comprehension","passage":"The science class did an exciting experiment with two safe liquids. When the teacher poured them together, the mixture began to fizz and bubble over. The whole class gasped and leaned in closer to watch. The teacher explained why the bubbles formed.","question":"How did the class react to the fizzing?","options":["They were bored","They leaned in to watch","They left the room"],"answer":1,"why":"They gasped and leaned in.","ask":"Read the whole text. Then tap the best answer."},
    {"topic":"reading-comprehension","passage":"Grandma's garden was bursting with color all summer long. Red roses climbed the fence, yellow sunflowers stood tall, and purple tulips lined the path. Bees buzzed happily from flower to flower. Grandma said the garden was her favorite place to relax.","question":"Which flowers stood tall?","options":["Roses","Sunflowers","Tulips"],"answer":1,"why":"The yellow sunflowers stood tall.","ask":"Read the whole text. Then tap the best answer."},
    {"topic":"reading-comprehension","passage":"During the long camping trip, the power in the cabin went out at night. Instead of worrying, the family lit candles and told funny stories in the dark. They roasted marshmallows over the fireplace and laughed for hours. It became the best night of the whole trip.","question":"What made it the best night?","options":["The power outage led to fun stories","They watched TV","They went to sleep early"],"answer":0,"why":"The outage led to candles, stories, and fun.","ask":"Read the whole text. Then tap the best answer."},
    {"topic":"reading-comprehension","passage":"Mia was chosen to give a speech at the school assembly. She practiced it every evening in front of her bedroom mirror. By the day of the assembly, she knew every word by heart. She spoke clearly and the whole school clapped.","question":"How did Mia prepare?","options":["She practiced in the mirror","She read it once","She asked a friend"],"answer":0,"why":"She practiced nightly in the mirror.","ask":"Read the whole text. Then tap the best answer."},
    {"topic":"reading-comprehension","passage":"The new puppy was afraid of the loud vacuum cleaner. Every time it turned on, the puppy ran and hid under the bed. The family decided to give it a treat each time the vacuum ran. Slowly, the puppy learned the vacuum was nothing to fear.","question":"How did the family help the puppy?","options":["They threw away the vacuum","They gave treats when it ran","They yelled at it"],"answer":1,"why":"Treats helped the puppy stop being scared.","ask":"Read the whole text. Then tap the best answer."},
    {"topic":"reading-comprehension","passage":"Jake flew his kite at the windy beach all afternoon. The strong ocean breeze lifted it higher and higher into the sky. Other children stopped to watch the bright kite dance above the waves. Jake held on tightly so it would not fly away.","question":"What kept the kite up so high?","options":["The ocean breeze","Jake jumping","A long ladder"],"answer":0,"why":"The strong ocean breeze lifted it.","ask":"Read the whole text. Then tap the best answer."},
    {"topic":"reading-comprehension","passage":"The bakery sold out of chocolate cake by lunchtime. So many customers had come in the morning that the shelves were completely empty. The baker promised to make twice as much the next day. Everyone agreed it was the best cake in town.","question":"Why were the shelves empty?","options":["The bakery closed early","Many customers bought everything","The cake was thrown out"],"answer":1,"why":"Many customers bought it all.","ask":"Read the whole text. Then tap the best answer."},
    {"topic":"reading-comprehension","passage":"The class went on a field trip to a working farm. They fed the goats, collected eggs from the hens, and watched a cow being milked. The farmer showed them how vegetables grow in long rows. On the bus home, everyone talked about their favorite animal.","question":"What did the students do at the farm?","options":["Fed goats and collected eggs","Rode roller coasters","Went swimming"],"answer":0,"why":"They fed goats and collected eggs.","ask":"Read the whole text. Then tap the best answer."},
    {"topic":"context-main-idea","passage":"The hikers had been walking under the hot sun for hours without any water. Their throats felt dry and scratchy, and they could think only of a cool drink. When they finally found a stream, they were overjoyed.","question":"In this story, what does \"parched\" mean? (Their throats were parched.)","options":["Very wet","Very thirsty","Very cold"],"answer":1,"why":"No water in hot sun = very thirsty.","ask":"Read the whole text. Then tap the best answer."},
    {"topic":"context-main-idea","passage":"Bees are amazing little helpers in nature. They make sweet honey, they carry pollen from flower to flower, and they help fruits and vegetables grow. Without bees, many of our foods would disappear.","question":"What is the MAIN idea of this paragraph?","options":["Bees are amazing helpers","Honey is sweet","Flowers are pretty"],"answer":0,"why":"The big point; the rest are details.","ask":"Read the whole text. Then tap the best answer."},
    {"topic":"context-main-idea","passage":"After running the entire race, Sam could barely stand up. His legs felt like jelly and his eyes kept closing. All he wanted was to lie down and rest.","question":"What does \"exhausted\" mean? (Sam was exhausted.)","options":["Very tired","Very excited","Very hungry"],"answer":0,"why":"Barely standing, eyes closing = very tired.","ask":"Read the whole text. Then tap the best answer."},
    {"topic":"context-main-idea","passage":"Recycling is good for our planet in many ways. It saves trees by reusing paper, it keeps trash out of the ocean, and it uses less energy. Everyone can help by sorting their bottles and cans.","question":"What is the MAIN idea?","options":["Recycling is good for the planet","Trees are tall","Cans are shiny"],"answer":0,"why":"The umbrella point over the details.","ask":"Read the whole text. Then tap the best answer."},
    {"topic":"context-main-idea","passage":"The ancient castle was the largest building Lucy had ever seen. Its stone towers stretched up past the clouds, and its walls seemed to go on forever. She had to tip her head all the way back just to see the top.","question":"What does \"enormous\" mean? (The castle was enormous.)","options":["Very small","Very large","Very old"],"answer":1,"why":"Towers past the clouds = very large.","ask":"Read the whole text. Then tap the best answer."},
    {"topic":"context-main-idea","passage":"Dolphins are very intelligent ocean animals. They talk to each other using clicks and whistles, they solve tricky puzzles, and they work together to find food. Scientists are amazed by how smart they are.","question":"What is the MAIN idea?","options":["Dolphins are intelligent","The ocean is deep","Clicks are loud"],"answer":0,"why":"The big point; rest are details.","ask":"Read the whole text. Then tap the best answer."},
    {"topic":"context-main-idea","passage":"The soup tasted like warm water with almost no flavor at all. Mia made a face and reached for the salt and pepper. After adding some spices, the soup finally tasted good.","question":"What does \"bland\" mean? (The soup was bland.)","options":["Too spicy","Lacking flavor","Too hot"],"answer":1,"why":"No flavor, needed spices = bland.","ask":"Read the whole text. Then tap the best answer."},
    {"topic":"context-main-idea","passage":"Exercise keeps your whole body healthy. It makes your heart strong, it builds your muscles, and it even puts you in a happier mood. That is why doctors say to play and move every day.","question":"What is the MAIN idea?","options":["Exercise keeps you healthy","Hearts beat fast","Muscles are big"],"answer":0,"why":"The umbrella point.","ask":"Read the whole text. Then tap the best answer."},
    {"topic":"context-main-idea","passage":"When Lucy walked into the hotel room, she could not find a single speck of dust. The mirrors sparkled, the floor shined, and the bed was perfectly made. Everything was spotless.","question":"What does \"immaculate\" mean? (The room was immaculate.)","options":["Very dirty","Perfectly clean","Very dark"],"answer":1,"why":"No dust, sparkling = perfectly clean.","ask":"Read the whole text. Then tap the best answer."},
    {"topic":"context-main-idea","passage":"Penguins are built to survive in freezing cold places. They have thick layers of feathers and fat to stay warm, and they huddle close together to share heat. Even on icy days, they stay cozy.","question":"What is the MAIN idea?","options":["Penguins are built for the cold","Ice is slippery","Feathers are soft"],"answer":0,"why":"The big point; rest are details.","ask":"Read the whole text. Then tap the best answer."},
    {"topic":"context-main-idea","passage":"The young detective heard a strange noise coming from the empty house. She was curious and decided to look more closely instead of walking away. With her flashlight, she carefully searched each room.","question":"What does \"investigate\" mean? (She decided to investigate.)","options":["To ignore it","To look into it closely","To run away"],"answer":1,"why":"Curious + searched closely = investigate.","ask":"Read the whole text. Then tap the best answer."},
    {"topic":"context-main-idea","passage":"Volcanoes can be very dangerous to the towns near them. They shoot out burning hot lava, they fill the sky with ash clouds, and they can even shake the ground. People must leave quickly when one erupts.","question":"What is the MAIN idea?","options":["Volcanoes can be dangerous","Ash is gray","Lava is hot"],"answer":0,"why":"The big point covering details.","ask":"Read the whole text. Then tap the best answer."},
    {"topic":"context-main-idea","passage":"The toddler did not want to try the new green vegetable. She turned her head away every time the spoon came close and kept her lips shut tight. Her mom decided to try again tomorrow.","question":"What does \"reluctant\" mean? (The toddler was reluctant.)","options":["Eager","Unwilling","Sleepy"],"answer":1,"why":"Turning away, lips shut = unwilling.","ask":"Read the whole text. Then tap the best answer."},
    {"topic":"context-main-idea","passage":"Libraries are wonderful places for everyone. You can borrow books for free, use the computers, and even join a reading club. Best of all, it is quiet and welcoming.","question":"What is the MAIN idea?","options":["Libraries are wonderful places","Books are heavy","Computers are fast"],"answer":0,"why":"The umbrella point.","ask":"Read the whole text. Then tap the best answer."},
    {"topic":"context-main-idea","passage":"The hikers walked very slowly along the narrow cliff path. They watched every single step and held onto the rocks tightly. One wrong move could be dangerous, so they were careful.","question":"What does \"cautious\" mean? (They were cautious.)","options":["Careless","Careful","Fast"],"answer":1,"why":"Slow, watching every step = careful.","ask":"Read the whole text. Then tap the best answer."},
    {"topic":"context-main-idea","passage":"Trees do so much for our planet. They give us the oxygen we breathe, they provide cool shade on hot days, and they are homes for birds and squirrels. We should plant and protect them.","question":"What is the MAIN idea?","options":["Trees help our planet","Shade is cool","Birds chirp"],"answer":0,"why":"The big point over details.","ask":"Read the whole text. Then tap the best answer."},
    {"topic":"context-main-idea","passage":"The magician pulled a rabbit out of an empty hat right before everyone's eyes. The whole audience stared in confusion, unable to figure out how he did it. Even the grown-ups were puzzled.","question":"What does \"baffling\" mean? (The trick was baffling.)","options":["Easy to understand","Very confusing","Boring"],"answer":1,"why":"No one could figure it out = confusing.","ask":"Read the whole text. Then tap the best answer."},
    {"topic":"context-main-idea","passage":"Saving water is something everyone can do at home. You can take shorter showers, turn off the tap while brushing your teeth, and fix any leaks quickly. Small changes add up to a big difference.","question":"What is the MAIN idea?","options":["Everyone can save water","Showers are warm","Taps are metal"],"answer":0,"why":"The umbrella point.","ask":"Read the whole text. Then tap the best answer."},
    {"topic":"context-main-idea","passage":"After the long car trip, the travelers could barely keep their eyes open. They had been awake since early morning and just wanted to rest. As soon as they reached the hotel, they fell asleep.","question":"What does \"weary\" mean? (The travelers were weary.)","options":["Excited","Tired","Hungry"],"answer":1,"why":"Awake all day, wanted rest = tired.","ask":"Read the whole text. Then tap the best answer."},
    {"topic":"context-main-idea","passage":"Ants are some of the hardest workers in nature. They dig long underground tunnels, they carry food much heavier than themselves, and they protect their colony as a team. They never seem to stop.","question":"What is the MAIN idea?","options":["Ants are hard workers","Tunnels are dark","Food is heavy"],"answer":0,"why":"The big point; rest are details.","ask":"Read the whole text. Then tap the best answer."},
    {"topic":"context-main-idea","passage":"The concert was supposed to start an hour ago, but the band still had not come out. People in the crowd kept checking the time and shifting in their seats. They could not stay calm any longer.","question":"What does \"restless\" mean? (The crowd grew restless.)","options":["Calm and patient","Unable to stay calm","Sleepy"],"answer":1,"why":"Checking time, shifting = unable to stay calm.","ask":"Read the whole text. Then tap the best answer."},
    {"topic":"context-main-idea","passage":"The ocean is full of amazing living things. Tiny silver fish dart through the water, giant whales sing their songs, and colorful coral reefs grow on the sea floor. There is so much to discover.","question":"What is the MAIN idea?","options":["The ocean is amazing","Whales are gray","Fish are small"],"answer":0,"why":"The umbrella point.","ask":"Read the whole text. Then tap the best answer."},
    {"topic":"context-main-idea","passage":"The smell drifting from the kitchen was so wonderful that everyone's mouth began to water. It smelled of warm bread and melting cheese. The whole family hurried to the table.","question":"What does \"pleasant\" mean? (The smell was pleasant.)","options":["Terrible","Nice and enjoyable","Strange"],"answer":1,"why":"Made mouths water = nice.","ask":"Read the whole text. Then tap the best answer."},
    {"topic":"context-main-idea","passage":"Helping other people can make you feel really good inside. You can share your toys, comfort a sad friend, or hold the door open for someone. These small acts of kindness matter a lot.","question":"What is the MAIN idea?","options":["Helping others feels good","Toys are fun","Doors are heavy"],"answer":0,"why":"The big point; rest support it.","ask":"Read the whole text. Then tap the best answer."},
    {"topic":"context-main-idea","passage":"The jigsaw puzzle had a thousand tiny pieces and a very tricky picture. It took the whole family an entire weekend to put it together. They worked on it bit by bit until it was done.","question":"What does \"complex\" mean? (The puzzle was complex.)","options":["Simple","Complicated","Small"],"answer":1,"why":"Tricky, took a weekend = complicated.","ask":"Read the whole text. Then tap the best answer."},
    {"topic":"context-main-idea","passage":"Brushing your teeth every day is very important. It washes away the sugar that causes cavities, it keeps your breath fresh, and it protects your gums. A healthy smile starts with good habits.","question":"What is the MAIN idea?","options":["Brushing teeth is important","Toothpaste is minty","Gums are pink"],"answer":0,"why":"The umbrella point.","ask":"Read the whole text. Then tap the best answer."},
    {"topic":"context-main-idea","passage":"The little kitten was timid when it first arrived at its new home. It hid behind the couch and would not come out when anyone walked by. After a few days, it slowly began to trust the family.","question":"What does \"timid\" mean? (The kitten was timid.)","options":["Brave","Shy and fearful","Angry"],"answer":1,"why":"Hiding from people = shy and fearful.","ask":"Read the whole text. Then tap the best answer."},
    {"topic":"context-main-idea","passage":"Rainforests are important to the whole world. They are home to millions of animals, they make much of the oxygen we breathe, and they hold plants used for medicine. We must protect them.","question":"What is the MAIN idea?","options":["Rainforests are important","Rain is wet","Frogs are green"],"answer":0,"why":"The big point over details.","ask":"Read the whole text. Then tap the best answer."},
    {"topic":"context-main-idea","passage":"The crowd went wild when the home team scored the winning goal in the final second. People jumped from their seats, cheered, and hugged one another. It was the most exciting moment of the game.","question":"What does \"ecstatic\" mean? (The crowd was ecstatic.)","options":["Extremely happy","A little sad","Very calm"],"answer":0,"why":"Jumping and cheering = extremely happy.","ask":"Read the whole text. Then tap the best answer."},
  ],
  sort: [
    {"topic":"phonics","word":"cake","buckets":["Long A","Short A"],"answer":0,"why":"'cake' has a long A (silent e).","ask":"Which box does this word belong in? Tap it."},
    {"topic":"phonics","word":"cat","buckets":["Long A","Short A"],"answer":1,"why":"'cat' has a short A.","ask":"Which box does this word belong in? Tap it."},
    {"topic":"phonics","word":"bike","buckets":["Long I","Short I"],"answer":0,"why":"'bike' has a long I (silent e).","ask":"Which box does this word belong in? Tap it."},
    {"topic":"phonics","word":"sit","buckets":["Long I","Short I"],"answer":1,"why":"'sit' has a short I.","ask":"Which box does this word belong in? Tap it."},
    {"topic":"phonics","word":"rope","buckets":["Long O","Short O"],"answer":0,"why":"'rope' has a long O (silent e).","ask":"Which box does this word belong in? Tap it."},
    {"topic":"phonics","word":"hop","buckets":["Long O","Short O"],"answer":1,"why":"'hop' has a short O.","ask":"Which box does this word belong in? Tap it."},
    {"topic":"phonics","word":"cute","buckets":["Long U","Short U"],"answer":0,"why":"'cute' has a long U (silent e).","ask":"Which box does this word belong in? Tap it."},
    {"topic":"phonics","word":"cup","buckets":["Long U","Short U"],"answer":1,"why":"'cup' has a short U.","ask":"Which box does this word belong in? Tap it."},
    {"topic":"phonics","word":"these","buckets":["Long E","Short E"],"answer":0,"why":"'these' has a long E.","ask":"Which box does this word belong in? Tap it."},
    {"topic":"phonics","word":"bed","buckets":["Long E","Short E"],"answer":1,"why":"'bed' has a short E.","ask":"Which box does this word belong in? Tap it."},
    {"topic":"phonics","word":"unhappy","buckets":["Prefix","Suffix"],"answer":0,"why":"'un-' is a prefix at the start.","ask":"Which box does this word belong in? Tap it."},
    {"topic":"phonics","word":"helpful","buckets":["Prefix","Suffix"],"answer":1,"why":"'-ful' is a suffix at the end.","ask":"Which box does this word belong in? Tap it."},
    {"topic":"phonics","word":"redo","buckets":["Prefix","Suffix"],"answer":0,"why":"'re-' is a prefix at the start.","ask":"Which box does this word belong in? Tap it."},
    {"topic":"phonics","word":"fearless","buckets":["Prefix","Suffix"],"answer":1,"why":"'-less' is a suffix at the end.","ask":"Which box does this word belong in? Tap it."},
    {"topic":"phonics","word":"preview","buckets":["Prefix","Suffix"],"answer":0,"why":"'pre-' is a prefix at the start.","ask":"Which box does this word belong in? Tap it."},
    {"topic":"phonics","word":"kindness","buckets":["Prefix","Suffix"],"answer":1,"why":"'-ness' is a suffix at the end.","ask":"Which box does this word belong in? Tap it."},
    {"topic":"phonics","word":"disagree","buckets":["Prefix","Suffix"],"answer":0,"why":"'dis-' is a prefix at the start.","ask":"Which box does this word belong in? Tap it."},
    {"topic":"phonics","word":"playful","buckets":["Prefix","Suffix"],"answer":1,"why":"'-ful' is a suffix at the end.","ask":"Which box does this word belong in? Tap it."},
    {"topic":"phonics","word":"ship","buckets":["sh sound","ch sound"],"answer":0,"why":"'ship' starts with the sh sound.","ask":"Which box does this word belong in? Tap it."},
    {"topic":"phonics","word":"chair","buckets":["sh sound","ch sound"],"answer":1,"why":"'chair' starts with the ch sound.","ask":"Which box does this word belong in? Tap it."},
    {"topic":"phonics","word":"shell","buckets":["sh sound","ch sound"],"answer":0,"why":"'shell' starts with the sh sound.","ask":"Which box does this word belong in? Tap it."},
    {"topic":"phonics","word":"cheese","buckets":["sh sound","ch sound"],"answer":1,"why":"'cheese' starts with the ch sound.","ask":"Which box does this word belong in? Tap it."},
    {"topic":"phonics","word":"thumb","buckets":["th sound","wh sound"],"answer":0,"why":"'thumb' starts with the th sound.","ask":"Which box does this word belong in? Tap it."},
    {"topic":"phonics","word":"whale","buckets":["th sound","wh sound"],"answer":1,"why":"'whale' starts with the wh sound.","ask":"Which box does this word belong in? Tap it."},
    {"topic":"phonics","word":"three","buckets":["th sound","wh sound"],"answer":0,"why":"'three' starts with the th sound.","ask":"Which box does this word belong in? Tap it."},
    {"topic":"phonics","word":"wheel","buckets":["th sound","wh sound"],"answer":1,"why":"'wheel' starts with the wh sound.","ask":"Which box does this word belong in? Tap it."},
    {"topic":"phonics","word":"rain","buckets":["Long A","Short A"],"answer":0,"why":"'rain' has a long A (ai).","ask":"Which box does this word belong in? Tap it."},
    {"topic":"phonics","word":"map","buckets":["Long A","Short A"],"answer":1,"why":"'map' has a short A.","ask":"Which box does this word belong in? Tap it."},
    {"topic":"phonics","word":"boat","buckets":["Long O","Short O"],"answer":0,"why":"'boat' has a long O (oa).","ask":"Which box does this word belong in? Tap it."},
    {"topic":"phonics","word":"dog","buckets":["Long O","Short O"],"answer":1,"why":"'dog' has a short O.","ask":"Which box does this word belong in? Tap it."},
  ],
  order: [
    {"topic":"ordering-events","intro":"Planting a flower","events":["Dig a hole","Place the seed","Cover it with soil","Water it"],"why":"You dig, plant, cover, then water.","ask":"Put the steps in order. Tap 1st, then 2nd, then 3rd..."},
    {"topic":"ordering-events","intro":"Making a sandwich","events":["Get two slices of bread","Add the filling","Put the slices together","Take a bite"],"why":"Bread first, filling, close it, then eat.","ask":"Put the steps in order. Tap 1st, then 2nd, then 3rd..."},
    {"topic":"ordering-events","intro":"Getting ready for school","events":["Wake up","Brush your teeth","Eat breakfast","Walk to school"],"why":"Wake, brush, eat, then go.","ask":"Put the steps in order. Tap 1st, then 2nd, then 3rd..."},
    {"topic":"ordering-events","intro":"A caterpillar's life","events":["An egg is laid","A caterpillar hatches","It forms a cocoon","A butterfly emerges"],"why":"Egg, caterpillar, cocoon, butterfly.","ask":"Put the steps in order. Tap 1st, then 2nd, then 3rd..."},
    {"topic":"ordering-events","intro":"Baking cookies","events":["Mix the dough","Roll it into balls","Bake in the oven","Let them cool"],"why":"Mix, roll, bake, cool.","ask":"Put the steps in order. Tap 1st, then 2nd, then 3rd..."},
    {"topic":"ordering-events","intro":"Brushing your teeth","events":["Put toothpaste on the brush","Brush your teeth","Rinse with water","Put the brush away"],"why":"Paste, brush, rinse, put away.","ask":"Put the steps in order. Tap 1st, then 2nd, then 3rd..."},
    {"topic":"ordering-events","intro":"A rainy day","events":["Clouds gather in the sky","Rain begins to fall","Puddles form on the ground","The sun comes back out"],"why":"Clouds, rain, puddles, sun.","ask":"Put the steps in order. Tap 1st, then 2nd, then 3rd..."},
    {"topic":"ordering-events","intro":"Reading a book","events":["Open the book","Read the first page","Turn to the next page","Finish the last chapter"],"why":"Open, read, turn, finish.","ask":"Put the steps in order. Tap 1st, then 2nd, then 3rd..."},
    {"topic":"ordering-events","intro":"Growing up","events":["Be a baby","Become a child","Grow into a teenager","Become an adult"],"why":"Baby, child, teen, adult.","ask":"Put the steps in order. Tap 1st, then 2nd, then 3rd..."},
    {"topic":"ordering-events","intro":"Washing your hands","events":["Turn on the water","Add soap","Scrub your hands","Dry with a towel"],"why":"Water, soap, scrub, dry.","ask":"Put the steps in order. Tap 1st, then 2nd, then 3rd..."},
    {"topic":"ordering-events","intro":"A soccer goal","events":["The player gets the ball","She runs toward the goal","She kicks the ball","The ball goes in"],"why":"Get, run, kick, score.","ask":"Put the steps in order. Tap 1st, then 2nd, then 3rd..."},
    {"topic":"ordering-events","intro":"Mailing a letter","events":["Write the letter","Put it in an envelope","Add a stamp","Drop it in the mailbox"],"why":"Write, envelope, stamp, mail.","ask":"Put the steps in order. Tap 1st, then 2nd, then 3rd..."},
    {"topic":"ordering-events","intro":"Morning routine","events":["The alarm rings","You get out of bed","You get dressed","You eat breakfast"],"why":"Alarm, up, dress, eat.","ask":"Put the steps in order. Tap 1st, then 2nd, then 3rd..."},
    {"topic":"ordering-events","intro":"Building a snowman","events":["Roll a big snowball","Stack a medium ball on top","Add a small ball for the head","Give it eyes and a nose"],"why":"Big, medium, head, face.","ask":"Put the steps in order. Tap 1st, then 2nd, then 3rd..."},
    {"topic":"ordering-events","intro":"A seed becomes a tree","events":["A seed is planted","A sprout pushes up","It grows into a sapling","It becomes a tall tree"],"why":"Seed, sprout, sapling, tree.","ask":"Put the steps in order. Tap 1st, then 2nd, then 3rd..."},
    {"topic":"ordering-events","intro":"Going to the movies","events":["Buy a ticket","Find your seat","Watch the movie","Leave the theater"],"why":"Ticket, seat, watch, leave.","ask":"Put the steps in order. Tap 1st, then 2nd, then 3rd..."},
    {"topic":"ordering-events","intro":"Drawing a picture","events":["Get a pencil and paper","Sketch the outline","Color it in","Show it to a friend"],"why":"Get, sketch, color, show.","ask":"Put the steps in order. Tap 1st, then 2nd, then 3rd..."},
    {"topic":"ordering-events","intro":"A campfire","events":["Gather dry wood","Stack the wood","Light the fire","Roast marshmallows"],"why":"Gather, stack, light, roast.","ask":"Put the steps in order. Tap 1st, then 2nd, then 3rd..."},
    {"topic":"ordering-events","intro":"Riding a bike","events":["Put on a helmet","Get on the bike","Start pedaling","Ride down the path"],"why":"Helmet, on, pedal, ride.","ask":"Put the steps in order. Tap 1st, then 2nd, then 3rd..."},
    {"topic":"ordering-events","intro":"Making lemonade","events":["Cut the lemons","Squeeze the juice","Add water and sugar","Stir and serve"],"why":"Cut, squeeze, add, stir.","ask":"Put the steps in order. Tap 1st, then 2nd, then 3rd..."},
    {"topic":"ordering-events","intro":"A school day","events":["Arrive at school","Attend classes","Eat lunch","Go home"],"why":"Arrive, classes, lunch, home.","ask":"Put the steps in order. Tap 1st, then 2nd, then 3rd..."},
    {"topic":"ordering-events","intro":"Planting then harvesting","events":["Plant the seeds","Water the plants","Wait for them to grow","Pick the vegetables"],"why":"Plant, water, wait, pick.","ask":"Put the steps in order. Tap 1st, then 2nd, then 3rd..."},
    {"topic":"ordering-events","intro":"Telling a story","events":["Once upon a time...","A problem appears","The hero solves it","The end"],"why":"Beginning, problem, solution, end.","ask":"Put the steps in order. Tap 1st, then 2nd, then 3rd..."},
    {"topic":"ordering-events","intro":"Doing homework","events":["Take out your books","Read the instructions","Answer the questions","Check your work"],"why":"Books, read, answer, check.","ask":"Put the steps in order. Tap 1st, then 2nd, then 3rd..."},
    {"topic":"ordering-events","intro":"A butterfly drinks","events":["The butterfly lands on a flower","It uncurls its tongue","It drinks the nectar","It flies away"],"why":"Land, uncurl, drink, fly.","ask":"Put the steps in order. Tap 1st, then 2nd, then 3rd..."},
    {"topic":"ordering-events","intro":"Setting the table","events":["Place the plates","Add the forks and knives","Set out the glasses","Fold the napkins"],"why":"Plates, utensils, glasses, napkins.","ask":"Put the steps in order. Tap 1st, then 2nd, then 3rd..."},
    {"topic":"ordering-events","intro":"A thunderstorm","events":["The sky turns dark","Lightning flashes","Thunder rumbles","Rain pours down"],"why":"Dark, lightning, thunder, rain.","ask":"Put the steps in order. Tap 1st, then 2nd, then 3rd..."},
    {"topic":"ordering-events","intro":"Making the bed","events":["Pull up the sheet","Add the blanket","Fluff the pillows","Smooth it all out"],"why":"Sheet, blanket, pillows, smooth.","ask":"Put the steps in order. Tap 1st, then 2nd, then 3rd..."},
    {"topic":"ordering-events","intro":"Catching a fish","events":["Put bait on the hook","Cast the line","Wait for a bite","Reel it in"],"why":"Bait, cast, wait, reel.","ask":"Put the steps in order. Tap 1st, then 2nd, then 3rd..."},
    {"topic":"ordering-events","intro":"Getting a pet dog","events":["Visit the shelter","Choose a dog","Take it home","Give it a name"],"why":"Visit, choose, home, name.","ask":"Put the steps in order. Tap 1st, then 2nd, then 3rd..."},
  ],
  sentence: [
    {"topic":"complete-sentences","kind":"order","words":["The","dog","ran","fast."],"answer":"The dog ran fast.","why":"Subject (dog) + predicate (ran fast).","ask":"Tap the words in the right order to build a sentence."},
    {"topic":"complete-sentences","kind":"order","words":["My","sister","loves","books."],"answer":"My sister loves books.","why":"Subject + predicate, capital + period.","ask":"Tap the words in the right order to build a sentence."},
    {"topic":"complete-sentences","kind":"order","words":["We","played","at","the","park."],"answer":"We played at the park.","why":"Complete idea with subject and predicate.","ask":"Tap the words in the right order to build a sentence."},
    {"topic":"complete-sentences","kind":"order","words":["The","sun","is","bright","today."],"answer":"The sun is bright today.","why":"Subject (sun) + predicate (is bright).","ask":"Tap the words in the right order to build a sentence."},
    {"topic":"complete-sentences","kind":"order","words":["Birds","sing","in","the","morning."],"answer":"Birds sing in the morning.","why":"Subject (birds) + predicate (sing).","ask":"Tap the words in the right order to build a sentence."},
    {"topic":"complete-sentences","kind":"order","words":["I","like","to","draw","pictures."],"answer":"I like to draw pictures.","why":"Complete sentence with subject I.","ask":"Tap the words in the right order to build a sentence."},
    {"topic":"complete-sentences","kind":"order","words":["The","rain","fell","all","night."],"answer":"The rain fell all night.","why":"Subject (rain) + predicate (fell).","ask":"Tap the words in the right order to build a sentence."},
    {"topic":"complete-sentences","kind":"order","words":["She","reads","every","day."],"answer":"She reads every day.","why":"Subject (she) + predicate (reads).","ask":"Tap the words in the right order to build a sentence."},
    {"topic":"complete-sentences","kind":"order","words":["Our","team","won","the","game."],"answer":"Our team won the game.","why":"Subject (team) + predicate (won).","ask":"Tap the words in the right order to build a sentence."},
    {"topic":"complete-sentences","kind":"order","words":["The","baby","is","sleeping."],"answer":"The baby is sleeping.","why":"Subject (baby) + predicate (is sleeping).","ask":"Tap the words in the right order to build a sentence."},
    {"topic":"complete-sentences","kind":"fix","fragment":"ran to the store.","options":["The boy ran to the store.","Ran to the store fast.","To the store."],"answer":0,"why":"Only the first has a subject (The boy).","ask":"Tap the choice that is a complete sentence."},
    {"topic":"complete-sentences","kind":"fix","fragment":"the cat sleeps","options":["the cat sleeps","The cat sleeps.","cat sleeps"],"answer":1,"why":"Needs a capital letter and a period.","ask":"Tap the choice that is a complete sentence."},
    {"topic":"complete-sentences","kind":"fix","fragment":"After the game.","options":["After the game.","We ate pizza after the game.","Game after."],"answer":1,"why":"The fragment needs a subject and predicate.","ask":"Tap the choice that is a complete sentence."},
    {"topic":"complete-sentences","kind":"fix","fragment":"barked loudly","options":["barked loudly","The dog barked loudly.","loudly barked the"],"answer":1,"why":"Needs a subject, capital, and period.","ask":"Tap the choice that is a complete sentence."},
    {"topic":"complete-sentences","kind":"fix","fragment":"my favorite color is blue","options":["my favorite color is blue","My favorite color is blue.","favorite color blue"],"answer":1,"why":"Needs a capital and an end mark.","ask":"Tap the choice that is a complete sentence."},
    {"topic":"complete-sentences","kind":"fix","fragment":"The tall trees.","options":["The tall trees.","The tall trees swayed in the wind.","Tall the trees."],"answer":1,"why":"The fragment has no predicate (action).","ask":"Tap the choice that is a complete sentence."},
    {"topic":"complete-sentences","kind":"fix","fragment":"swam in the pool","options":["swam in the pool","The kids swam in the pool.","pool swam in"],"answer":1,"why":"Needs a subject (The kids).","ask":"Tap the choice that is a complete sentence."},
    {"topic":"complete-sentences","kind":"fix","fragment":"she is a good singer","options":["she is a good singer","She is a good singer.","good singer she is"],"answer":1,"why":"Needs a capital and a period.","ask":"Tap the choice that is a complete sentence."},
    {"topic":"complete-sentences","kind":"fix","fragment":"Because it was cold.","options":["Because it was cold.","We wore coats because it was cold.","Cold because was."],"answer":1,"why":"The fragment can't stand alone; needs a main clause.","ask":"Tap the choice that is a complete sentence."},
    {"topic":"complete-sentences","kind":"fix","fragment":"the bus arrived late","options":["the bus arrived late","The bus arrived late.","late the bus arrived"],"answer":1,"why":"Needs a capital and a period.","ask":"Tap the choice that is a complete sentence."},
    {"topic":"complete-sentences","kind":"order","words":["The","stars","shine","at","night."],"answer":"The stars shine at night.","why":"Subject (stars) + predicate (shine).","ask":"Tap the words in the right order to build a sentence."},
    {"topic":"complete-sentences","kind":"order","words":["He","fixed","his","bike."],"answer":"He fixed his bike.","why":"Subject (he) + predicate (fixed).","ask":"Tap the words in the right order to build a sentence."},
    {"topic":"complete-sentences","kind":"order","words":["The","flowers","smell","sweet."],"answer":"The flowers smell sweet.","why":"Subject (flowers) + predicate (smell).","ask":"Tap the words in the right order to build a sentence."},
    {"topic":"complete-sentences","kind":"order","words":["They","watched","a","movie."],"answer":"They watched a movie.","why":"Subject (they) + predicate (watched).","ask":"Tap the words in the right order to build a sentence."},
    {"topic":"complete-sentences","kind":"order","words":["The","snow","melted","quickly."],"answer":"The snow melted quickly.","why":"Subject (snow) + predicate (melted).","ask":"Tap the words in the right order to build a sentence."},
    {"topic":"complete-sentences","kind":"order","words":["My","dad","cooks","dinner."],"answer":"My dad cooks dinner.","why":"Subject (dad) + predicate (cooks).","ask":"Tap the words in the right order to build a sentence."},
    {"topic":"complete-sentences","kind":"fix","fragment":"jumped over the fence","options":["jumped over the fence","The horse jumped over the fence.","fence over jumped"],"answer":1,"why":"Needs a subject (The horse).","ask":"Tap the choice that is a complete sentence."},
    {"topic":"complete-sentences","kind":"fix","fragment":"we are going to the beach","options":["we are going to the beach","We are going to the beach.","beach the to going"],"answer":1,"why":"Needs a capital and a period.","ask":"Tap the choice that is a complete sentence."},
    {"topic":"complete-sentences","kind":"order","words":["The","clock","ticks","slowly."],"answer":"The clock ticks slowly.","why":"Subject (clock) + predicate (ticks).","ask":"Tap the words in the right order to build a sentence."},
    {"topic":"complete-sentences","kind":"order","words":["A","frog","hopped","away."],"answer":"A frog hopped away.","why":"Subject (frog) + predicate (hopped).","ask":"Tap the words in the right order to build a sentence."},
  ],
};

const LA_UI = {
  "comprehend": "Read the short text. Then tap the correct answer.",
  "sort": "Tap the box this word belongs in.",
  "order": "Put the steps in the right order. Tap them 1, 2, 3...",
  "sentenceOrder": "Tap the words in order to build a complete sentence.",
  "sentenceFix": "Tap the choice that is a complete sentence."
};

if (typeof window !== "undefined") {
  window.LA_MODULES = LA_MODULES;
  window.LA_LESSONS = LA_LESSONS;
  window.LA_BANK = LA_BANK;
  window.LA_UI = LA_UI;
}