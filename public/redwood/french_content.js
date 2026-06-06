/* =====================================================================
   Redwood · Français (French) — CONTENT FILE
   Original beginner-French content for ~8-year-olds.
   Two themes: Fruits et légumes (vocab) + Dialogues au marché (phrases).
   Meaning side mixes English, Spanish, and emoji where clearest.

   FR_LESSONS: 2 study lessons.
   FR_BANK: 4 mechanics:
     match    -> French word shown; tap the correct meaning (en/es/emoji)
     toFrench -> meaning shown; tap the correct French word
     dialogue -> market mini-dialogue with a blank; tap the right phrase
     gender   -> noun shown; tap "le" or "la" (or "les")
   FR_UI: kid-friendly instructions (English w/ a touch of French).
   ===================================================================== */

   const FR_LESSONS = [
    {
      id: "fruits-legumes",
      num: 1,
      title: "Fruits et légumes",
      subtitle: "Fruits and vegetables in French",
      intro:
        "Let's learn the names of fruits (les fruits) and vegetables (les légumes) in French! Many French words look a little like English or Spanish, which makes them easier to remember. In French, every noun is either masculine (le) or feminine (la).",
      sections: [
        {
          h: "Les fruits 🍎",
          body:
            "la pomme = apple (manzana), la banane = banana (plátano), l'orange = orange (naranja), la fraise = strawberry (fresa), le raisin = grape (uva), la poire = pear (pera), le citron = lemon (limón), la pêche = peach (durazno).",
        },
        {
          h: "Les légumes 🥕",
          body:
            "la carotte = carrot (zanahoria), la tomate = tomato (tomate), la pomme de terre = potato (papa), l'oignon = onion (cebolla), le brocoli = broccoli (brócoli), la salade = lettuce/salad (lechuga), le maïs = corn (maíz), le concombre = cucumber (pepino).",
        },
        {
          h: "Le ou la? (masculine or feminine)",
          body:
            "Every French noun has a gender. 'Le' is for masculine words (le citron, le raisin) and 'la' is for feminine words (la pomme, la carotte). For plurals, both become 'les' (les pommes, les fruits). You just learn them with the word!",
        },
      ],
      recuerda:
        "Tip: Learn each word WITH its 'le' or 'la' — say 'la pomme,' not just 'pomme.'",
    },
    {
      id: "marche",
      num: 2,
      title: "Dialogues : le marché français",
      subtitle: "Talking at the French market",
      intro:
        "At a French market (le marché), people use polite, simple phrases to buy food. Let's learn what to say to greet someone, ask for something, and say thank you. Politeness is very important in French!",
      sections: [
        {
          h: "Greetings & politeness",
          body:
            "Bonjour = Hello / Good day. Au revoir = Goodbye. S'il vous plaît = Please. Merci = Thank you. Merci beaucoup = Thank you very much. De rien = You're welcome.",
        },
        {
          h: "Asking for food",
          body:
            "Je voudrais... = I would like... (Je voudrais des pommes = I would like some apples). Combien ça coûte? = How much does it cost? C'est combien? = How much is it?",
        },
        {
          h: "Useful market words",
          body:
            "le marché = the market, un kilo = a kilo, un sac = a bag, l'argent = money, la monnaie = change (coins). 'Un kilo de tomates, s'il vous plaît' = A kilo of tomatoes, please.",
        },
      ],
      recuerda:
        "Tip: Be polite! Start with 'Bonjour' and end with 'Merci.' It matters a lot in France.",
    },
  ];
  
  const FR_BANK = {
    /* ---- MECHANIC 1: "Match the meaning" (match) ----------------------
       fr: French word (with article).
       options: array of meanings (mix of emoji/English/Spanish).
       answer: index of correct meaning.
       why: short note. -------------------------------------------------- */
    match: [
      { topic:"fruits-legumes", fr:"la pomme", options:["🍎 apple","🍌 banana","🥕 carrot"], answer:0, why:"la pomme = apple." },
      { topic:"fruits-legumes", fr:"la banane", options:["🍓 strawberry","🍌 banana","🍋 lemon"], answer:1, why:"la banane = banana." },
      { topic:"fruits-legumes", fr:"la fraise", options:["🍓 strawberry","🍐 pear","🍅 tomato"], answer:0, why:"la fraise = strawberry (fresa)." },
      { topic:"fruits-legumes", fr:"la carotte", options:["🥦 broccoli","🥕 carrot","🌽 corn"], answer:1, why:"la carotte = carrot (zanahoria)." },
      { topic:"fruits-legumes", fr:"le citron", options:["🍋 lemon","🍊 orange","🍎 apple"], answer:0, why:"le citron = lemon (limón)." },
      { topic:"fruits-legumes", fr:"la tomate", options:["🥔 potato","🍅 tomato","🧅 onion"], answer:1, why:"la tomate = tomato." },
      { topic:"fruits-legumes", fr:"l'orange", options:["🍊 orange","🍇 grape","🍐 pear"], answer:0, why:"l'orange = orange (naranja)." },
      { topic:"fruits-legumes", fr:"le raisin", options:["🍓 strawberry","🍇 grape","🍌 banana"], answer:1, why:"le raisin = grape (uva)." },
      { topic:"fruits-legumes", fr:"l'oignon", options:["🧅 onion","🥦 broccoli","🌽 corn"], answer:0, why:"l'oignon = onion (cebolla)." },
      { topic:"fruits-legumes", fr:"la poire", options:["🍎 apple","🍐 pear","🍋 lemon"], answer:1, why:"la poire = pear (pera)." },
      { topic:"fruits-legumes", fr:"le brocoli", options:["🥦 broccoli","🥕 carrot","🍅 tomato"], answer:0, why:"le brocoli = broccoli." },
      { topic:"fruits-legumes", fr:"le maïs", options:["🥔 potato","🌽 corn","🧅 onion"], answer:1, why:"le maïs = corn (maíz)." },
      { topic:"fruits-legumes", fr:"la pêche", options:["🍑 peach","🍇 grape","🍊 orange"], answer:0, why:"la pêche = peach (durazno)." },
      { topic:"fruits-legumes", fr:"la pomme de terre", options:["🥔 potato","🍎 apple","🥕 carrot"], answer:0, why:"la pomme de terre = potato (papa)." },
      { topic:"fruits-legumes", fr:"la salade", options:["🥬 lettuce","🍓 strawberry","🌽 corn"], answer:0, why:"la salade = lettuce/salad (lechuga)." },
      { topic:"fruits-legumes", fr:"le concombre", options:["🥒 cucumber","🍋 lemon","🍅 tomato"], answer:0, why:"le concombre = cucumber (pepino)." },
  
      { topic:"marche", fr:"Bonjour", options:["Hello / Hola","Goodbye / Adiós","Thanks / Gracias"], answer:0, why:"Bonjour = hello (hola)." },
      { topic:"marche", fr:"Merci", options:["Please / Por favor","Thank you / Gracias","Hello / Hola"], answer:1, why:"Merci = thank you (gracias)." },
      { topic:"marche", fr:"Au revoir", options:["Goodbye / Adiós","Hello / Hola","Please / Por favor"], answer:0, why:"Au revoir = goodbye (adiós)." },
      { topic:"marche", fr:"S'il vous plaît", options:["Thank you / Gracias","Please / Por favor","Goodbye / Adiós"], answer:1, why:"S'il vous plaît = please (por favor)." },
      { topic:"marche", fr:"De rien", options:["You're welcome / De nada","How much? / ¿Cuánto?","Hello / Hola"], answer:0, why:"De rien = you're welcome (de nada)." },
      { topic:"marche", fr:"Je voudrais", options:["I would like / Quisiera","I have / Tengo","I am / Soy"], answer:0, why:"Je voudrais = I would like (quisiera)." },
      { topic:"marche", fr:"Combien ça coûte ?", options:["How much does it cost? / ¿Cuánto cuesta?","What time? / ¿Qué hora?","Where? / ¿Dónde?"], answer:0, why:"Combien ça coûte = how much (cuánto cuesta)." },
      { topic:"marche", fr:"le marché", options:["the market / el mercado","the school / la escuela","the house / la casa"], answer:0, why:"le marché = the market (el mercado)." },
      { topic:"marche", fr:"un kilo", options:["a kilo / un kilo","a bag / una bolsa","money / dinero"], answer:0, why:"un kilo = a kilo." },
      { topic:"marche", fr:"un sac", options:["a bag / una bolsa","a kilo / un kilo","change / cambio"], answer:0, why:"un sac = a bag (una bolsa)." },
      { topic:"marche", fr:"l'argent", options:["money / dinero","a bag / una bolsa","the market / el mercado"], answer:0, why:"l'argent = money (dinero)." },
      { topic:"marche", fr:"Merci beaucoup", options:["Thank you very much / Muchas gracias","See you / Nos vemos","Please / Por favor"], answer:0, why:"Merci beaucoup = thank you very much." },
      { topic:"marche", fr:"la monnaie", options:["change (coins) / el cambio","the market / el mercado","a bag / una bolsa"], answer:0, why:"la monnaie = change/coins (el cambio)." },
      { topic:"marche", fr:"C'est combien ?", options:["How much is it? / ¿Cuánto es?","What is it? / ¿Qué es?","Who is it? / ¿Quién es?"], answer:0, why:"C'est combien = how much is it (cuánto es)." },
    ],
  
    /* ---- MECHANIC 2: "Say it in French" (toFrench) --------------------
       meaning: the English/Spanish/emoji clue.
       options: array of French words.
       answer: index of correct French word. ---------------------------- */
    toFrench: [
      { topic:"fruits-legumes", meaning:"🍎 apple / manzana", options:["la pomme","la poire","la pêche"], answer:0, why:"apple = la pomme." },
      { topic:"fruits-legumes", meaning:"🥕 carrot / zanahoria", options:["la tomate","la carotte","la salade"], answer:1, why:"carrot = la carotte." },
      { topic:"fruits-legumes", meaning:"🍋 lemon / limón", options:["le citron","l'orange","le raisin"], answer:0, why:"lemon = le citron." },
      { topic:"fruits-legumes", meaning:"🍌 banana / plátano", options:["la fraise","la banane","la poire"], answer:1, why:"banana = la banane." },
      { topic:"fruits-legumes", meaning:"🍅 tomato / tomate", options:["la tomate","l'oignon","le brocoli"], answer:0, why:"tomato = la tomate." },
      { topic:"fruits-legumes", meaning:"🍇 grape / uva", options:["la pêche","le raisin","la pomme"], answer:1, why:"grape = le raisin." },
      { topic:"fruits-legumes", meaning:"🍊 orange / naranja", options:["l'orange","le citron","la fraise"], answer:0, why:"orange = l'orange." },
      { topic:"fruits-legumes", meaning:"🧅 onion / cebolla", options:["le maïs","l'oignon","la carotte"], answer:1, why:"onion = l'oignon." },
      { topic:"fruits-legumes", meaning:"🍐 pear / pera", options:["la poire","la pomme","la pêche"], answer:0, why:"pear = la poire." },
      { topic:"fruits-legumes", meaning:"🥦 broccoli / brócoli", options:["le concombre","le brocoli","le maïs"], answer:1, why:"broccoli = le brocoli." },
      { topic:"fruits-legumes", meaning:"🌽 corn / maíz", options:["le maïs","la salade","la tomate"], answer:0, why:"corn = le maïs." },
      { topic:"fruits-legumes", meaning:"🍑 peach / durazno", options:["la poire","la pêche","la fraise"], answer:1, why:"peach = la pêche." },
      { topic:"fruits-legumes", meaning:"🥔 potato / papa", options:["la pomme de terre","la pomme","la carotte"], answer:0, why:"potato = la pomme de terre." },
      { topic:"fruits-legumes", meaning:"🥬 lettuce / lechuga", options:["le brocoli","la salade","l'oignon"], answer:1, why:"lettuce = la salade." },
      { topic:"fruits-legumes", meaning:"🥒 cucumber / pepino", options:["le concombre","le maïs","la tomate"], answer:0, why:"cucumber = le concombre." },
  
      { topic:"marche", meaning:"Hello / Hola", options:["Bonjour","Au revoir","Merci"], answer:0, why:"hello = Bonjour." },
      { topic:"marche", meaning:"Thank you / Gracias", options:["S'il vous plaît","Merci","De rien"], answer:1, why:"thank you = Merci." },
      { topic:"marche", meaning:"Please / Por favor", options:["S'il vous plaît","Bonjour","Au revoir"], answer:0, why:"please = S'il vous plaît." },
      { topic:"marche", meaning:"Goodbye / Adiós", options:["Merci","Au revoir","Bonjour"], answer:1, why:"goodbye = Au revoir." },
      { topic:"marche", meaning:"I would like / Quisiera", options:["Je voudrais","C'est combien","De rien"], answer:0, why:"I would like = Je voudrais." },
      { topic:"marche", meaning:"You're welcome / De nada", options:["Merci beaucoup","De rien","Bonjour"], answer:1, why:"you're welcome = De rien." },
      { topic:"marche", meaning:"the market / el mercado", options:["le marché","le sac","l'argent"], answer:0, why:"the market = le marché." },
      { topic:"marche", meaning:"money / dinero", options:["la monnaie","l'argent","un kilo"], answer:1, why:"money = l'argent." },
      { topic:"marche", meaning:"a bag / una bolsa", options:["un sac","un kilo","le marché"], answer:0, why:"a bag = un sac." },
      { topic:"marche", meaning:"How much does it cost? / ¿Cuánto cuesta?", options:["Bonjour","Combien ça coûte ?","Merci beaucoup"], answer:1, why:"how much = Combien ça coûte ?." },
      { topic:"marche", meaning:"a kilo / un kilo", options:["un kilo","un sac","la monnaie"], answer:0, why:"a kilo = un kilo." },
      { topic:"marche", meaning:"Thank you very much / Muchas gracias", options:["De rien","Merci beaucoup","S'il vous plaît"], answer:1, why:"thanks a lot = Merci beaucoup." },
      { topic:"marche", meaning:"change / coins / el cambio", options:["la monnaie","l'argent","un sac"], answer:0, why:"change = la monnaie." },
      { topic:"marche", meaning:"How much is it? / ¿Cuánto es?", options:["C'est combien ?","Au revoir","Bonjour"], answer:0, why:"how much is it = C'est combien ?." },
    ],
  
    /* ---- MECHANIC 3: "Complete the dialogue" (dialogue) ---------------
       line: market dialogue with a "___" blank.
       options: array of French phrases.
       answer: index of correct fill.
       translation: helper meaning.
       why. -------------------------------------------------------------- */
    dialogue: [
      { topic:"marche", line:"___, madame ! (when you arrive)", options:["Bonjour","Au revoir","Merci"], answer:0, translation:"Hello, madam!", why:"You greet with Bonjour." },
      { topic:"marche", line:"Je voudrais des pommes, ___.", options:["merci","s'il vous plaît","bonjour"], answer:1, translation:"I would like some apples, please.", why:"Polite requests add s'il vous plaît." },
      { topic:"marche", line:"— Voilà ! — ___ beaucoup !", options:["Merci","Bonjour","Pomme"], answer:0, translation:"— Here! — Thank you very much!", why:"Say Merci to thank them." },
      { topic:"marche", line:"___ ça coûte ?", options:["Combien","Bonjour","Merci"], answer:0, translation:"How much does it cost?", why:"Combien asks 'how much'." },
      { topic:"marche", line:"Au revoir ! — ___ !", options:["Au revoir","Pomme","Kilo"], answer:0, translation:"Goodbye! — Goodbye!", why:"You answer goodbye with Au revoir." },
      { topic:"marche", line:"Je voudrais un ___ de tomates.", options:["kilo","merci","bonjour"], answer:0, translation:"I would like a kilo of tomatoes.", why:"un kilo = a kilo." },
      { topic:"marche", line:"— Merci ! — ___ !", options:["De rien","Bonjour","Combien"], answer:0, translation:"— Thanks! — You're welcome!", why:"De rien = you're welcome." },
      { topic:"marche", line:"Je voudrais ___ pommes, s'il vous plaît.", options:["des","merci","bonjour"], answer:0, translation:"I would like some apples, please.", why:"'des' = some (plural)." },
      { topic:"marche", line:"Bonjour ! Je ___ des carottes.", options:["voudrais","merci","kilo"], answer:0, translation:"Hello! I would like some carrots.", why:"Je voudrais = I would like." },
      { topic:"marche", line:"C'est ___ ? (asking the price)", options:["combien","merci","bonjour"], answer:0, translation:"How much is it?", why:"C'est combien = how much is it." },
      { topic:"marche", line:"Vous avez un ___ pour mes fruits ?", options:["sac","merci","bonjour"], answer:0, translation:"Do you have a bag for my fruits?", why:"un sac = a bag." },
      { topic:"marche", line:"Voici votre ___ (the coins back).", options:["monnaie","pomme","bonjour"], answer:0, translation:"Here is your change.", why:"la monnaie = change/coins." },
      { topic:"marche", line:"___ ! Bonne journée ! (leaving)", options:["Au revoir","Bonjour","Combien"], answer:0, translation:"Goodbye! Have a good day!", why:"Leaving = Au revoir." },
      { topic:"marche", line:"Je voudrais une ___ , s'il vous plaît. 🍌", options:["banane","pomme","carotte"], answer:0, translation:"I would like a banana, please.", why:"banana = la banane." },
      { topic:"marche", line:"Bonjour ! ___-vous des fraises ? 🍓", options:["Avez","Merci","Bonjour"], answer:0, translation:"Hello! Do you have strawberries?", why:"Avez-vous = do you have." },
    ],
  
    /* ---- MECHANIC 4: "Le ou la ?" (gender) ----------------------------
       noun: the noun WITHOUT article.
       options: ["le","la"] (and sometimes "les").
       answer: index of correct article.
       full: the correct full form.
       why. -------------------------------------------------------------- */
    gender: [
      { topic:"fruits-legumes", noun:"pomme 🍎", options:["le","la"], answer:1, full:"la pomme", why:"pomme is feminine → la pomme." },
      { topic:"fruits-legumes", noun:"citron 🍋", options:["le","la"], answer:0, full:"le citron", why:"citron is masculine → le citron." },
      { topic:"fruits-legumes", noun:"carotte 🥕", options:["le","la"], answer:1, full:"la carotte", why:"carotte is feminine → la carotte." },
      { topic:"fruits-legumes", noun:"raisin 🍇", options:["le","la"], answer:0, full:"le raisin", why:"raisin is masculine → le raisin." },
      { topic:"fruits-legumes", noun:"banane 🍌", options:["le","la"], answer:1, full:"la banane", why:"banane is feminine → la banane." },
      { topic:"fruits-legumes", noun:"brocoli 🥦", options:["le","la"], answer:0, full:"le brocoli", why:"brocoli is masculine → le brocoli." },
      { topic:"fruits-legumes", noun:"tomate 🍅", options:["le","la"], answer:1, full:"la tomate", why:"tomate is feminine → la tomate." },
      { topic:"fruits-legumes", noun:"maïs 🌽", options:["le","la"], answer:0, full:"le maïs", why:"maïs is masculine → le maïs." },
      { topic:"fruits-legumes", noun:"poire 🍐", options:["le","la"], answer:1, full:"la poire", why:"poire is feminine → la poire." },
      { topic:"fruits-legumes", noun:"concombre 🥒", options:["le","la"], answer:0, full:"le concombre", why:"concombre is masculine → le concombre." },
      { topic:"fruits-legumes", noun:"fraise 🍓", options:["le","la"], answer:1, full:"la fraise", why:"fraise is feminine → la fraise." },
      { topic:"fruits-legumes", noun:"pêche 🍑", options:["le","la"], answer:1, full:"la pêche", why:"pêche is feminine → la pêche." },
      { topic:"fruits-legumes", noun:"salade 🥬", options:["le","la"], answer:1, full:"la salade", why:"salade is feminine → la salade." },
      { topic:"fruits-legumes", noun:"fruits (plural) 🍏🍌", options:["le","les"], answer:1, full:"les fruits", why:"plural → les fruits." },
      { topic:"fruits-legumes", noun:"légumes (plural) 🥕🥦", options:["la","les"], answer:1, full:"les légumes", why:"plural → les légumes." },
      { topic:"marche", noun:"marché", options:["le","la"], answer:0, full:"le marché", why:"marché is masculine → le marché." },
      { topic:"marche", noun:"monnaie", options:["le","la"], answer:1, full:"la monnaie", why:"monnaie is feminine → la monnaie." },
      { topic:"marche", noun:"sac", options:["le","la"], answer:0, full:"le sac", why:"sac is masculine → le sac." },
      { topic:"marche", noun:"argent", options:["le","la"], answer:0, full:"l'argent (le)", why:"argent is masculine → l'argent." },
      { topic:"marche", noun:"journée", options:["le","la"], answer:1, full:"la journée", why:"journée is feminine → la journée." },
      { topic:"marche", noun:"kilo", options:["le","la"], answer:0, full:"le kilo", why:"kilo is masculine → le kilo." },
      { topic:"marche", noun:"prix (price)", options:["le","la"], answer:0, full:"le prix", why:"prix is masculine → le prix." },
      { topic:"marche", noun:"madame", options:["le","la"], answer:1, full:"la madame", why:"madame is feminine → la." },
      { topic:"marche", noun:"monsieur", options:["le","la"], answer:0, full:"le monsieur", why:"monsieur is masculine → le." },
      { topic:"marche", noun:"client (customer)", options:["le","la"], answer:0, full:"le client", why:"client (m.) → le client." },
      { topic:"marche", noun:"vendeuse (seller, f.)", options:["le","la"], answer:1, full:"la vendeuse", why:"vendeuse is feminine → la vendeuse." },
      { topic:"marche", noun:"panier (basket)", options:["le","la"], answer:0, full:"le panier", why:"panier is masculine → le panier." },
      { topic:"marche", noun:"caisse (checkout)", options:["le","la"], answer:1, full:"la caisse", why:"caisse is feminine → la caisse." },
      { topic:"marche", noun:"euro", options:["le","la"], answer:0, full:"l'euro (le)", why:"euro is masculine → l'euro." },
      { topic:"marche", noun:"liste (list)", options:["le","la"], answer:1, full:"la liste", why:"liste is feminine → la liste." },
    ],
  };
  
  /* Kid-friendly instructions (English with a touch of French). 8-year-olds. */
  const FR_UI = {
    match:    "Read the French word. Tap what it means.",
    toFrench: "Tap the French word for this.",
    dialogue: "Finish the talk at the market. Tap the best word.",
    gender:   "Is it 'le' or 'la'? Tap the right one."
  };
  
  if (typeof window !== "undefined") {
    window.FR_LESSONS = FR_LESSONS;
    window.FR_BANK = FR_BANK;
    window.FR_UI = FR_UI;
  }