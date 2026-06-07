/* Redwood · Français — modules + study + banks */

const FR_MODULES = [
  {
    "id": "fruits-legumes",
    "title": "Fruits et légumes",
    "emoji": "🍎",
    "topics": [
      "fruits-legumes"
    ],
    "lesson": "fruits-legumes"
  },
  {
    "id": "marche",
    "title": "Le marché (dialogues)",
    "emoji": "🧺",
    "topics": [
      "marche"
    ],
    "lesson": "marche"
  }
];

const FR_LESSONS = [
  {
    "id": "fruits-legumes",
    "num": 1,
    "title": "Fruits et légumes",
    "subtitle": "Fruits and vegetables in French",
    "intro": "Let's learn the names of fruits (les fruits) and vegetables (les légumes) in French! Many French words look a little like English or Spanish, which makes them easier to remember. In French, every noun is either masculine (le) or feminine (la).",
    "sections": [
      {
        "h": "Les fruits 🍎",
        "body": "la pomme = apple (manzana), la banane = banana (plátano), l'orange = orange (naranja), la fraise = strawberry (fresa), le raisin = grape (uva), la poire = pear (pera), le citron = lemon (limón), la pêche = peach (durazno)."
      },
      {
        "h": "Les légumes 🥕",
        "body": "la carotte = carrot (zanahoria), la tomate = tomato (tomate), la pomme de terre = potato (papa), l'oignon = onion (cebolla), le brocoli = broccoli (brócoli), la salade = lettuce/salad (lechuga), le maïs = corn (maíz), le concombre = cucumber (pepino)."
      },
      {
        "h": "Le ou la? (masculine or feminine)",
        "body": "Every French noun has a gender. 'Le' is for masculine words (le citron, le raisin) and 'la' is for feminine words (la pomme, la carotte). For plurals, both become 'les' (les pommes, les fruits). You just learn them with the word!"
      }
    ],
    "recuerda": "Tip: Learn each word WITH its 'le' or 'la' — say 'la pomme,' not just 'pomme.'"
  },
  {
    "id": "marche",
    "num": 2,
    "title": "Dialogues : le marché français",
    "subtitle": "Talking at the French market",
    "intro": "At a French market (le marché), people use polite, simple phrases to buy food. Let's learn what to say to greet someone, ask for something, and say thank you. Politeness is very important in French!",
    "sections": [
      {
        "h": "Greetings & politeness",
        "body": "Bonjour = Hello / Good day. Au revoir = Goodbye. S'il vous plaît = Please. Merci = Thank you. Merci beaucoup = Thank you very much. De rien = You're welcome."
      },
      {
        "h": "Asking for food",
        "body": "Je voudrais... = I would like... (Je voudrais des pommes = I would like some apples). Combien ça coûte? = How much does it cost? C'est combien? = How much is it?"
      },
      {
        "h": "Useful market words",
        "body": "le marché = the market, un kilo = a kilo, un sac = a bag, l'argent = money, la monnaie = change (coins). 'Un kilo de tomates, s'il vous plaît' = A kilo of tomatoes, please."
      }
    ],
    "recuerda": "Tip: Be polite! Start with 'Bonjour' and end with 'Merci.' It matters a lot in France."
  }
];

const FR_BANK = {
  match: [
    {"topic":"fruits-legumes","fr":"la pomme","options":["🍎 apple","🍌 banana","🥕 carrot"],"answer":0,"why":"la pomme = apple.","ask":"Read the French word. Tap what it means."},
    {"topic":"fruits-legumes","fr":"la banane","options":["🍓 strawberry","🍌 banana","🍋 lemon"],"answer":1,"why":"la banane = banana.","ask":"Read the French word. Tap what it means."},
    {"topic":"fruits-legumes","fr":"la fraise","options":["🍓 strawberry","🍐 pear","🍅 tomato"],"answer":0,"why":"la fraise = strawberry (fresa).","ask":"Read the French word. Tap what it means."},
    {"topic":"fruits-legumes","fr":"la carotte","options":["🥦 broccoli","🥕 carrot","🌽 corn"],"answer":1,"why":"la carotte = carrot (zanahoria).","ask":"Read the French word. Tap what it means."},
    {"topic":"fruits-legumes","fr":"le citron","options":["🍋 lemon","🍊 orange","🍎 apple"],"answer":0,"why":"le citron = lemon (limón).","ask":"Read the French word. Tap what it means."},
    {"topic":"fruits-legumes","fr":"la tomate","options":["🥔 potato","🍅 tomato","🧅 onion"],"answer":1,"why":"la tomate = tomato.","ask":"Read the French word. Tap what it means."},
    {"topic":"fruits-legumes","fr":"l'orange","options":["🍊 orange","🍇 grape","🍐 pear"],"answer":0,"why":"l'orange = orange (naranja).","ask":"Read the French word. Tap what it means."},
    {"topic":"fruits-legumes","fr":"le raisin","options":["🍓 strawberry","🍇 grape","🍌 banana"],"answer":1,"why":"le raisin = grape (uva).","ask":"Read the French word. Tap what it means."},
    {"topic":"fruits-legumes","fr":"l'oignon","options":["🧅 onion","🥦 broccoli","🌽 corn"],"answer":0,"why":"l'oignon = onion (cebolla).","ask":"Read the French word. Tap what it means."},
    {"topic":"fruits-legumes","fr":"la poire","options":["🍎 apple","🍐 pear","🍋 lemon"],"answer":1,"why":"la poire = pear (pera).","ask":"Read the French word. Tap what it means."},
    {"topic":"fruits-legumes","fr":"le brocoli","options":["🥦 broccoli","🥕 carrot","🍅 tomato"],"answer":0,"why":"le brocoli = broccoli.","ask":"Read the French word. Tap what it means."},
    {"topic":"fruits-legumes","fr":"le maïs","options":["🥔 potato","🌽 corn","🧅 onion"],"answer":1,"why":"le maïs = corn (maíz).","ask":"Read the French word. Tap what it means."},
    {"topic":"fruits-legumes","fr":"la pêche","options":["🍑 peach","🍇 grape","🍊 orange"],"answer":0,"why":"la pêche = peach (durazno).","ask":"Read the French word. Tap what it means."},
    {"topic":"fruits-legumes","fr":"la pomme de terre","options":["🥔 potato","🍎 apple","🥕 carrot"],"answer":0,"why":"la pomme de terre = potato (papa).","ask":"Read the French word. Tap what it means."},
    {"topic":"fruits-legumes","fr":"la salade","options":["🥬 lettuce","🍓 strawberry","🌽 corn"],"answer":0,"why":"la salade = lettuce/salad (lechuga).","ask":"Read the French word. Tap what it means."},
    {"topic":"fruits-legumes","fr":"le concombre","options":["🥒 cucumber","🍋 lemon","🍅 tomato"],"answer":0,"why":"le concombre = cucumber (pepino).","ask":"Read the French word. Tap what it means."},
    {"topic":"marche","fr":"Bonjour","options":["Hello / Hola","Goodbye / Adiós","Thanks / Gracias"],"answer":0,"why":"Bonjour = hello (hola).","ask":"Read the French word. Tap what it means."},
    {"topic":"marche","fr":"Merci","options":["Please / Por favor","Thank you / Gracias","Hello / Hola"],"answer":1,"why":"Merci = thank you (gracias).","ask":"Read the French word. Tap what it means."},
    {"topic":"marche","fr":"Au revoir","options":["Goodbye / Adiós","Hello / Hola","Please / Por favor"],"answer":0,"why":"Au revoir = goodbye (adiós).","ask":"Read the French word. Tap what it means."},
    {"topic":"marche","fr":"S'il vous plaît","options":["Thank you / Gracias","Please / Por favor","Goodbye / Adiós"],"answer":1,"why":"S'il vous plaît = please (por favor).","ask":"Read the French word. Tap what it means."},
    {"topic":"marche","fr":"De rien","options":["You're welcome / De nada","How much? / ¿Cuánto?","Hello / Hola"],"answer":0,"why":"De rien = you're welcome (de nada).","ask":"Read the French word. Tap what it means."},
    {"topic":"marche","fr":"Je voudrais","options":["I would like / Quisiera","I have / Tengo","I am / Soy"],"answer":0,"why":"Je voudrais = I would like (quisiera).","ask":"Read the French word. Tap what it means."},
    {"topic":"marche","fr":"Combien ça coûte ?","options":["How much does it cost? / ¿Cuánto cuesta?","What time? / ¿Qué hora?","Where? / ¿Dónde?"],"answer":0,"why":"Combien ça coûte = how much (cuánto cuesta).","ask":"Read the French word. Tap what it means."},
    {"topic":"marche","fr":"le marché","options":["the market / el mercado","the school / la escuela","the house / la casa"],"answer":0,"why":"le marché = the market (el mercado).","ask":"Read the French word. Tap what it means."},
    {"topic":"marche","fr":"un kilo","options":["a kilo / un kilo","a bag / una bolsa","money / dinero"],"answer":0,"why":"un kilo = a kilo.","ask":"Read the French word. Tap what it means."},
    {"topic":"marche","fr":"un sac","options":["a bag / una bolsa","a kilo / un kilo","change / cambio"],"answer":0,"why":"un sac = a bag (una bolsa).","ask":"Read the French word. Tap what it means."},
    {"topic":"marche","fr":"l'argent","options":["money / dinero","a bag / una bolsa","the market / el mercado"],"answer":0,"why":"l'argent = money (dinero).","ask":"Read the French word. Tap what it means."},
    {"topic":"marche","fr":"Merci beaucoup","options":["Thank you very much / Muchas gracias","See you / Nos vemos","Please / Por favor"],"answer":0,"why":"Merci beaucoup = thank you very much.","ask":"Read the French word. Tap what it means."},
    {"topic":"marche","fr":"la monnaie","options":["change (coins) / el cambio","the market / el mercado","a bag / una bolsa"],"answer":0,"why":"la monnaie = change/coins (el cambio).","ask":"Read the French word. Tap what it means."},
    {"topic":"marche","fr":"C'est combien ?","options":["How much is it? / ¿Cuánto es?","What is it? / ¿Qué es?","Who is it? / ¿Quién es?"],"answer":0,"why":"C'est combien = how much is it (cuánto es).","ask":"Read the French word. Tap what it means."},
  ],
  toFrench: [
    {"topic":"fruits-legumes","meaning":"🍎 apple / manzana","options":["la pomme","la poire","la pêche"],"answer":0,"why":"apple = la pomme.","ask":"Tap the French word for this."},
    {"topic":"fruits-legumes","meaning":"🥕 carrot / zanahoria","options":["la tomate","la carotte","la salade"],"answer":1,"why":"carrot = la carotte.","ask":"Tap the French word for this."},
    {"topic":"fruits-legumes","meaning":"🍋 lemon / limón","options":["le citron","l'orange","le raisin"],"answer":0,"why":"lemon = le citron.","ask":"Tap the French word for this."},
    {"topic":"fruits-legumes","meaning":"🍌 banana / plátano","options":["la fraise","la banane","la poire"],"answer":1,"why":"banana = la banane.","ask":"Tap the French word for this."},
    {"topic":"fruits-legumes","meaning":"🍅 tomato / tomate","options":["la tomate","l'oignon","le brocoli"],"answer":0,"why":"tomato = la tomate.","ask":"Tap the French word for this."},
    {"topic":"fruits-legumes","meaning":"🍇 grape / uva","options":["la pêche","le raisin","la pomme"],"answer":1,"why":"grape = le raisin.","ask":"Tap the French word for this."},
    {"topic":"fruits-legumes","meaning":"🍊 orange / naranja","options":["l'orange","le citron","la fraise"],"answer":0,"why":"orange = l'orange.","ask":"Tap the French word for this."},
    {"topic":"fruits-legumes","meaning":"🧅 onion / cebolla","options":["le maïs","l'oignon","la carotte"],"answer":1,"why":"onion = l'oignon.","ask":"Tap the French word for this."},
    {"topic":"fruits-legumes","meaning":"🍐 pear / pera","options":["la poire","la pomme","la pêche"],"answer":0,"why":"pear = la poire.","ask":"Tap the French word for this."},
    {"topic":"fruits-legumes","meaning":"🥦 broccoli / brócoli","options":["le concombre","le brocoli","le maïs"],"answer":1,"why":"broccoli = le brocoli.","ask":"Tap the French word for this."},
    {"topic":"fruits-legumes","meaning":"🌽 corn / maíz","options":["le maïs","la salade","la tomate"],"answer":0,"why":"corn = le maïs.","ask":"Tap the French word for this."},
    {"topic":"fruits-legumes","meaning":"🍑 peach / durazno","options":["la poire","la pêche","la fraise"],"answer":1,"why":"peach = la pêche.","ask":"Tap the French word for this."},
    {"topic":"fruits-legumes","meaning":"🥔 potato / papa","options":["la pomme de terre","la pomme","la carotte"],"answer":0,"why":"potato = la pomme de terre.","ask":"Tap the French word for this."},
    {"topic":"fruits-legumes","meaning":"🥬 lettuce / lechuga","options":["le brocoli","la salade","l'oignon"],"answer":1,"why":"lettuce = la salade.","ask":"Tap the French word for this."},
    {"topic":"fruits-legumes","meaning":"🥒 cucumber / pepino","options":["le concombre","le maïs","la tomate"],"answer":0,"why":"cucumber = le concombre.","ask":"Tap the French word for this."},
    {"topic":"marche","meaning":"Hello / Hola","options":["Bonjour","Au revoir","Merci"],"answer":0,"why":"hello = Bonjour.","ask":"Tap the French word for this."},
    {"topic":"marche","meaning":"Thank you / Gracias","options":["S'il vous plaît","Merci","De rien"],"answer":1,"why":"thank you = Merci.","ask":"Tap the French word for this."},
    {"topic":"marche","meaning":"Please / Por favor","options":["S'il vous plaît","Bonjour","Au revoir"],"answer":0,"why":"please = S'il vous plaît.","ask":"Tap the French word for this."},
    {"topic":"marche","meaning":"Goodbye / Adiós","options":["Merci","Au revoir","Bonjour"],"answer":1,"why":"goodbye = Au revoir.","ask":"Tap the French word for this."},
    {"topic":"marche","meaning":"I would like / Quisiera","options":["Je voudrais","C'est combien","De rien"],"answer":0,"why":"I would like = Je voudrais.","ask":"Tap the French word for this."},
    {"topic":"marche","meaning":"You're welcome / De nada","options":["Merci beaucoup","De rien","Bonjour"],"answer":1,"why":"you're welcome = De rien.","ask":"Tap the French word for this."},
    {"topic":"marche","meaning":"the market / el mercado","options":["le marché","le sac","l'argent"],"answer":0,"why":"the market = le marché.","ask":"Tap the French word for this."},
    {"topic":"marche","meaning":"money / dinero","options":["la monnaie","l'argent","un kilo"],"answer":1,"why":"money = l'argent.","ask":"Tap the French word for this."},
    {"topic":"marche","meaning":"a bag / una bolsa","options":["un sac","un kilo","le marché"],"answer":0,"why":"a bag = un sac.","ask":"Tap the French word for this."},
    {"topic":"marche","meaning":"How much does it cost? / ¿Cuánto cuesta?","options":["Bonjour","Combien ça coûte ?","Merci beaucoup"],"answer":1,"why":"how much = Combien ça coûte ?.","ask":"Tap the French word for this."},
    {"topic":"marche","meaning":"a kilo / un kilo","options":["un kilo","un sac","la monnaie"],"answer":0,"why":"a kilo = un kilo.","ask":"Tap the French word for this."},
    {"topic":"marche","meaning":"Thank you very much / Muchas gracias","options":["De rien","Merci beaucoup","S'il vous plaît"],"answer":1,"why":"thanks a lot = Merci beaucoup.","ask":"Tap the French word for this."},
    {"topic":"marche","meaning":"change / coins / el cambio","options":["la monnaie","l'argent","un sac"],"answer":0,"why":"change = la monnaie.","ask":"Tap the French word for this."},
    {"topic":"marche","meaning":"How much is it? / ¿Cuánto es?","options":["C'est combien ?","Au revoir","Bonjour"],"answer":0,"why":"how much is it = C'est combien ?.","ask":"Tap the French word for this."},
  ],
  dialogue: [
    {"topic":"marche","line":"___, madame ! (when you arrive)","options":["Bonjour","Au revoir","Merci"],"answer":0,"translation":"Hello, madam!","why":"You greet with Bonjour.","ask":"Finish the sentence at the market. Tap the best word."},
    {"topic":"marche","line":"Je voudrais des pommes, ___.","options":["merci","s'il vous plaît","bonjour"],"answer":1,"translation":"I would like some apples, please.","why":"Polite requests add s'il vous plaît.","ask":"Finish the sentence at the market. Tap the best word."},
    {"topic":"marche","line":"— Voilà ! — ___ beaucoup !","options":["Merci","Bonjour","Pomme"],"answer":0,"translation":"— Here! — Thank you very much!","why":"Say Merci to thank them.","ask":"Finish the sentence at the market. Tap the best word."},
    {"topic":"marche","line":"___ ça coûte ?","options":["Combien","Bonjour","Merci"],"answer":0,"translation":"How much does it cost?","why":"Combien asks 'how much'.","ask":"Finish the sentence at the market. Tap the best word."},
    {"topic":"marche","line":"Au revoir ! — ___ !","options":["Au revoir","Pomme","Kilo"],"answer":0,"translation":"Goodbye! — Goodbye!","why":"You answer goodbye with Au revoir.","ask":"Finish the sentence at the market. Tap the best word."},
    {"topic":"marche","line":"Je voudrais un ___ de tomates.","options":["kilo","merci","bonjour"],"answer":0,"translation":"I would like a kilo of tomatoes.","why":"un kilo = a kilo.","ask":"Finish the sentence at the market. Tap the best word."},
    {"topic":"marche","line":"— Merci ! — ___ !","options":["De rien","Bonjour","Combien"],"answer":0,"translation":"— Thanks! — You're welcome!","why":"De rien = you're welcome.","ask":"Finish the sentence at the market. Tap the best word."},
    {"topic":"marche","line":"Je voudrais ___ pommes, s'il vous plaît.","options":["des","merci","bonjour"],"answer":0,"translation":"I would like some apples, please.","why":"'des' = some (plural).","ask":"Finish the sentence at the market. Tap the best word."},
    {"topic":"marche","line":"Bonjour ! Je ___ des carottes.","options":["voudrais","merci","kilo"],"answer":0,"translation":"Hello! I would like some carrots.","why":"Je voudrais = I would like.","ask":"Finish the sentence at the market. Tap the best word."},
    {"topic":"marche","line":"C'est ___ ? (asking the price)","options":["combien","merci","bonjour"],"answer":0,"translation":"How much is it?","why":"C'est combien = how much is it.","ask":"Finish the sentence at the market. Tap the best word."},
    {"topic":"marche","line":"Vous avez un ___ pour mes fruits ?","options":["sac","merci","bonjour"],"answer":0,"translation":"Do you have a bag for my fruits?","why":"un sac = a bag.","ask":"Finish the sentence at the market. Tap the best word."},
    {"topic":"marche","line":"Voici votre ___ (the coins back).","options":["monnaie","pomme","bonjour"],"answer":0,"translation":"Here is your change.","why":"la monnaie = change/coins.","ask":"Finish the sentence at the market. Tap the best word."},
    {"topic":"marche","line":"___ ! Bonne journée ! (leaving)","options":["Au revoir","Bonjour","Combien"],"answer":0,"translation":"Goodbye! Have a good day!","why":"Leaving = Au revoir.","ask":"Finish the sentence at the market. Tap the best word."},
    {"topic":"marche","line":"Je voudrais une ___ , s'il vous plaît. 🍌","options":["banane","pomme","carotte"],"answer":0,"translation":"I would like a banana, please.","why":"banana = la banane.","ask":"Finish the sentence at the market. Tap the best word."},
    {"topic":"marche","line":"Bonjour ! ___-vous des fraises ? 🍓","options":["Avez","Merci","Bonjour"],"answer":0,"translation":"Hello! Do you have strawberries?","why":"Avez-vous = do you have.","ask":"Finish the sentence at the market. Tap the best word."},
  ],
  gender: [
    {"topic":"fruits-legumes","noun":"pomme 🍎","options":["le","la"],"answer":1,"full":"la pomme","why":"pomme is feminine → la pomme.","ask":"Is it \"le\" or \"la\"? Tap the right one."},
    {"topic":"fruits-legumes","noun":"citron 🍋","options":["le","la"],"answer":0,"full":"le citron","why":"citron is masculine → le citron.","ask":"Is it \"le\" or \"la\"? Tap the right one."},
    {"topic":"fruits-legumes","noun":"carotte 🥕","options":["le","la"],"answer":1,"full":"la carotte","why":"carotte is feminine → la carotte.","ask":"Is it \"le\" or \"la\"? Tap the right one."},
    {"topic":"fruits-legumes","noun":"raisin 🍇","options":["le","la"],"answer":0,"full":"le raisin","why":"raisin is masculine → le raisin.","ask":"Is it \"le\" or \"la\"? Tap the right one."},
    {"topic":"fruits-legumes","noun":"banane 🍌","options":["le","la"],"answer":1,"full":"la banane","why":"banane is feminine → la banane.","ask":"Is it \"le\" or \"la\"? Tap the right one."},
    {"topic":"fruits-legumes","noun":"brocoli 🥦","options":["le","la"],"answer":0,"full":"le brocoli","why":"brocoli is masculine → le brocoli.","ask":"Is it \"le\" or \"la\"? Tap the right one."},
    {"topic":"fruits-legumes","noun":"tomate 🍅","options":["le","la"],"answer":1,"full":"la tomate","why":"tomate is feminine → la tomate.","ask":"Is it \"le\" or \"la\"? Tap the right one."},
    {"topic":"fruits-legumes","noun":"maïs 🌽","options":["le","la"],"answer":0,"full":"le maïs","why":"maïs is masculine → le maïs.","ask":"Is it \"le\" or \"la\"? Tap the right one."},
    {"topic":"fruits-legumes","noun":"poire 🍐","options":["le","la"],"answer":1,"full":"la poire","why":"poire is feminine → la poire.","ask":"Is it \"le\" or \"la\"? Tap the right one."},
    {"topic":"fruits-legumes","noun":"concombre 🥒","options":["le","la"],"answer":0,"full":"le concombre","why":"concombre is masculine → le concombre.","ask":"Is it \"le\" or \"la\"? Tap the right one."},
    {"topic":"fruits-legumes","noun":"fraise 🍓","options":["le","la"],"answer":1,"full":"la fraise","why":"fraise is feminine → la fraise.","ask":"Is it \"le\" or \"la\"? Tap the right one."},
    {"topic":"fruits-legumes","noun":"pêche 🍑","options":["le","la"],"answer":1,"full":"la pêche","why":"pêche is feminine → la pêche.","ask":"Is it \"le\" or \"la\"? Tap the right one."},
    {"topic":"fruits-legumes","noun":"salade 🥬","options":["le","la"],"answer":1,"full":"la salade","why":"salade is feminine → la salade.","ask":"Is it \"le\" or \"la\"? Tap the right one."},
    {"topic":"fruits-legumes","noun":"fruits (plural) 🍏🍌","options":["le","les"],"answer":1,"full":"les fruits","why":"plural → les fruits.","ask":"Is it \"le\" or \"la\"? Tap the right one."},
    {"topic":"fruits-legumes","noun":"légumes (plural) 🥕🥦","options":["la","les"],"answer":1,"full":"les légumes","why":"plural → les légumes.","ask":"Is it \"le\" or \"la\"? Tap the right one."},
    {"topic":"marche","noun":"marché","options":["le","la"],"answer":0,"full":"le marché","why":"marché is masculine → le marché.","ask":"Is it \"le\" or \"la\"? Tap the right one."},
    {"topic":"marche","noun":"monnaie","options":["le","la"],"answer":1,"full":"la monnaie","why":"monnaie is feminine → la monnaie.","ask":"Is it \"le\" or \"la\"? Tap the right one."},
    {"topic":"marche","noun":"sac","options":["le","la"],"answer":0,"full":"le sac","why":"sac is masculine → le sac.","ask":"Is it \"le\" or \"la\"? Tap the right one."},
    {"topic":"marche","noun":"argent","options":["le","la"],"answer":0,"full":"l'argent (le)","why":"argent is masculine → l'argent.","ask":"Is it \"le\" or \"la\"? Tap the right one."},
    {"topic":"marche","noun":"journée","options":["le","la"],"answer":1,"full":"la journée","why":"journée is feminine → la journée.","ask":"Is it \"le\" or \"la\"? Tap the right one."},
    {"topic":"marche","noun":"kilo","options":["le","la"],"answer":0,"full":"le kilo","why":"kilo is masculine → le kilo.","ask":"Is it \"le\" or \"la\"? Tap the right one."},
    {"topic":"marche","noun":"prix (price)","options":["le","la"],"answer":0,"full":"le prix","why":"prix is masculine → le prix.","ask":"Is it \"le\" or \"la\"? Tap the right one."},
    {"topic":"marche","noun":"madame","options":["le","la"],"answer":1,"full":"la madame","why":"madame is feminine → la.","ask":"Is it \"le\" or \"la\"? Tap the right one."},
    {"topic":"marche","noun":"monsieur","options":["le","la"],"answer":0,"full":"le monsieur","why":"monsieur is masculine → le.","ask":"Is it \"le\" or \"la\"? Tap the right one."},
    {"topic":"marche","noun":"client (customer)","options":["le","la"],"answer":0,"full":"le client","why":"client (m.) → le client.","ask":"Is it \"le\" or \"la\"? Tap the right one."},
    {"topic":"marche","noun":"vendeuse (seller, f.)","options":["le","la"],"answer":1,"full":"la vendeuse","why":"vendeuse is feminine → la vendeuse.","ask":"Is it \"le\" or \"la\"? Tap the right one."},
    {"topic":"marche","noun":"panier (basket)","options":["le","la"],"answer":0,"full":"le panier","why":"panier is masculine → le panier.","ask":"Is it \"le\" or \"la\"? Tap the right one."},
    {"topic":"marche","noun":"caisse (checkout)","options":["le","la"],"answer":1,"full":"la caisse","why":"caisse is feminine → la caisse.","ask":"Is it \"le\" or \"la\"? Tap the right one."},
    {"topic":"marche","noun":"euro","options":["le","la"],"answer":0,"full":"l'euro (le)","why":"euro is masculine → l'euro.","ask":"Is it \"le\" or \"la\"? Tap the right one."},
    {"topic":"marche","noun":"liste (list)","options":["le","la"],"answer":1,"full":"la liste","why":"liste is feminine → la liste.","ask":"Is it \"le\" or \"la\"? Tap the right one."},
  ],
};

const FR_UI = {
  "match": "Read the French word. Tap what it means.",
  "toFrench": "Tap the French word for this.",
  "dialogue": "Finish the talk at the market. Tap the best word.",
  "gender": "Is it 'le' or 'la'? Tap the right one."
};

if (typeof window !== "undefined") {
  window.FR_MODULES = FR_MODULES;
  window.FR_LESSONS = FR_LESSONS;
  window.FR_BANK = FR_BANK;
  window.FR_UI = FR_UI;
}