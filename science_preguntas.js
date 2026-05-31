/* ============================================================
   SCIENCE QUESTION BANK — 5th grade, Period III
   (Liceo de Monterrey — English-language Science class)
   Topics from the study guide:
     1. Types of ecosystems and their characteristics
     2. Solar system
     3. Historical astronomers and their contributions
     4. Universe timeline
     5. Ancient contributions (to astronomy)
   Format per card: { q, opts:[], correct:<idx>, ex, d:<1-3> }
   All content in ENGLISH. Facts grounded in standard curriculum.
   ============================================================ */
const TOPICS = [

  /* =======================================================
     1) TYPES OF ECOSYSTEMS AND THEIR CHARACTERISTICS
     ======================================================= */
  { name:"ECOSYSTEMS", icon:"🌳", q:[
    { q:"What is an ecosystem?", opts:["A community of living things interacting with their non-living environment","A single animal living alone","A type of rock","A man-made machine"], correct:0, ex:"An ecosystem is all the living things (plants, animals, microbes) interacting with each other and with non-living parts (water, air, soil, sunlight) in an area.", d:1 },
    { q:"Which of these is a NON-living (abiotic) part of an ecosystem?", opts:["Sunlight","A rabbit","A tree","A mushroom"], correct:0, ex:"Abiotic (non-living) parts include sunlight, water, air, temperature, and soil. Rabbits, trees, and mushrooms are living (biotic).", d:2 },
    { q:"A desert ecosystem is mainly characterized by—", opts:["Very little rainfall and extreme temperatures","Heavy rain all year","Being covered by ocean","Thick rainforest trees"], correct:0, ex:"Deserts are dry (very little rain) with big temperature swings — hot days and cold nights. Plants and animals there are adapted to save water.", d:1 },
    { q:"Which ecosystem has the GREATEST variety of plants and animals (biodiversity)?", opts:["Tropical rainforest","Desert","Tundra","Open parking lot"], correct:0, ex:"Tropical rainforests are warm and wet year-round, supporting an enormous variety of living things — the highest biodiversity on land.", d:2 },
    { q:"The frozen, treeless ecosystem with very cold temperatures is called the—", opts:["Tundra","Rainforest","Coral reef","Grassland"], correct:0, ex:"The tundra is cold and treeless, with frozen ground (permafrost). Only hardy plants like mosses and small shrubs survive.", d:2 },
    { q:"Which is an example of an AQUATIC (water) ecosystem?", opts:["A coral reef","A desert","A grassland","A forest"], correct:0, ex:"Coral reefs, lakes, rivers, and oceans are aquatic ecosystems. Deserts, grasslands, and forests are land (terrestrial) ecosystems.", d:1 },
    { q:"In an ecosystem, plants are called PRODUCERS because they—", opts:["Make their own food using sunlight","Eat other animals","Break down dead things","Drink only water"], correct:0, ex:"Producers (plants) make their own food from sunlight through photosynthesis. Consumers eat other living things; decomposers break down dead matter.", d:2 },
    { q:"An animal that eats only plants is called a—", opts:["Herbivore","Carnivore","Decomposer","Producer"], correct:0, ex:"Herbivores eat plants; carnivores eat meat; omnivores eat both. Decomposers (like fungi) break down dead material.", d:1 },
    { q:"What do decomposers (like fungi and bacteria) do in an ecosystem?", opts:["Break down dead plants and animals, returning nutrients to the soil","Produce sunlight","Hunt large animals","Make oxygen from rocks"], correct:0, ex:"Decomposers break down dead organisms and waste, recycling nutrients back into the soil so producers can use them again.", d:2 },
    { q:"What usually happens if one species is removed from an ecosystem?", opts:["It can affect many other living things connected to it","Nothing changes at all","The sun stops shining","The ecosystem instantly disappears"], correct:0, ex:"Living things are connected in food chains and webs, so removing one species can affect many others that depend on it.", d:3 },
  ]},

  /* =======================================================
     2) THE SOLAR SYSTEM
     ======================================================= */
  { name:"THE SOLAR SYSTEM", icon:"🪐", q:[
    { q:"What is at the CENTER of our solar system?", opts:["The Sun","The Earth","The Moon","Jupiter"], correct:0, ex:"The Sun is at the center of the solar system. All the planets orbit (go around) the Sun.", d:1 },
    { q:"How many planets are in our solar system?", opts:["8","9","7","12"], correct:0, ex:"There are 8 planets: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune. (Pluto is now called a dwarf planet.)", d:1 },
    { q:"Which planet is CLOSEST to the Sun?", opts:["Mercury","Venus","Earth","Mars"], correct:0, ex:"Mercury is the closest planet to the Sun and also the smallest planet.", d:1 },
    { q:"What is the correct order of the first four planets from the Sun?", opts:["Mercury, Venus, Earth, Mars","Earth, Mars, Venus, Mercury","Venus, Mercury, Mars, Earth","Mars, Earth, Venus, Mercury"], correct:0, ex:"From the Sun outward: Mercury, Venus, Earth, Mars (the rocky inner planets), then Jupiter, Saturn, Uranus, Neptune.", d:2 },
    { q:"Which is the LARGEST planet in our solar system?", opts:["Jupiter","Earth","Saturn","Mars"], correct:0, ex:"Jupiter is the largest planet — a giant ball of gas. Saturn is the second largest.", d:1 },
    { q:"Which planet is famous for its beautiful rings?", opts:["Saturn","Mercury","Mars","Venus"], correct:0, ex:"Saturn is famous for its bright rings made of ice and rock. (Other gas giants have faint rings too, but Saturn's are the most spectacular.)", d:1 },
    { q:"Which planet is known as the 'Red Planet'?", opts:["Mars","Jupiter","Venus","Neptune"], correct:0, ex:"Mars looks red because its soil is rich in iron oxide (rust). It's the fourth planet from the Sun.", d:1 },
    { q:"What is the name of Earth's only natural satellite?", opts:["The Moon","Titan","Phobos","Europa"], correct:0, ex:"The Moon is Earth's only natural satellite. It orbits Earth and causes the tides.", d:1 },
    { q:"The four planets closest to the Sun are rocky. What are the four farther planets mostly made of?", opts:["Gas (gas giants)","Solid iron","Ice cream","Water only"], correct:0, ex:"Jupiter, Saturn, Uranus, and Neptune are 'gas giants' — huge planets made mostly of gases, unlike the small rocky inner planets.", d:2 },
    { q:"Why do the planets stay in orbit around the Sun?", opts:["The Sun's gravity pulls on them","They are tied with ropes","They are pushed by wind","They float with no reason"], correct:0, ex:"The Sun's gravity pulls the planets toward it, keeping them moving in their orbits instead of flying off into space.", d:2 },
    { q:"What is a star, like our Sun?", opts:["A huge glowing ball of hot gas that gives off light and heat","A large cold rock","A type of planet","A frozen comet"], correct:0, ex:"A star is an enormous ball of hot gas that produces its own light and heat. Our Sun is the closest star to Earth.", d:2 },
  ]},

  /* =======================================================
     3) HISTORICAL ASTRONOMERS AND THEIR CONTRIBUTIONS
     ======================================================= */
  { name:"HISTORICAL ASTRONOMERS", icon:"🔭", q:[
    { q:"Before Copernicus, most people believed the 'geocentric' model. What did it say?", opts:["The Earth is the center and everything orbits around it","The Sun is the center","There is no center","The Moon is the center"], correct:0, ex:"The geocentric model (from ancient Greeks like Ptolemy) put the EARTH at the center, with the Sun, Moon, and planets orbiting it.", d:2 },
    { q:"Which astronomer proposed that the SUN, not the Earth, is the center (the heliocentric model)?", opts:["Nicolaus Copernicus","Ptolemy","Aristotle","Isaac Newton"], correct:0, ex:"Nicolaus Copernicus (1473–1543) proposed the heliocentric model: the Sun at the center, with Earth and the planets orbiting it.", d:2 },
    { q:"The word 'heliocentric' means the center is the—", opts:["Sun","Earth","Moon","Galaxy"], correct:0, ex:"'Helio' means Sun. Heliocentric = Sun-centered. 'Geo' means Earth, so geocentric = Earth-centered.", d:2 },
    { q:"Which astronomer used an early telescope to discover four moons of Jupiter?", opts:["Galileo Galilei","Copernicus","Kepler","Ptolemy"], correct:0, ex:"Galileo Galilei (1564–1642) used a telescope to discover Jupiter's four large moons, supporting the idea that not everything orbits Earth.", d:2 },
    { q:"What important tool did Galileo use to study the sky in a new way?", opts:["The telescope","A microscope","A calculator","A compass"], correct:0, ex:"Galileo improved and used the telescope to observe the Moon's craters, Jupiter's moons, and the phases of Venus.", d:1 },
    { q:"Johannes Kepler discovered that the planets orbit the Sun in what shape?", opts:["Ellipses (ovals), not perfect circles","Perfect squares","Straight lines","Triangles"], correct:0, ex:"Kepler (1571–1630) showed that planets move around the Sun in ellipses (oval shapes), correcting the idea of perfect circles.", d:3 },
    { q:"Isaac Newton explained WHY planets stay in orbit. What was his big idea?", opts:["Gravity — a force that pulls objects toward each other","Magnetism from the Moon","Wind in space","Electricity"], correct:0, ex:"Isaac Newton described gravity, the force that pulls objects together. The Sun's gravity keeps the planets in their orbits.", d:2 },
    { q:"Match the astronomer to the contribution:", opts:["Copernicus = Sun-centered model · Galileo = telescope discoveries · Newton = gravity","Copernicus = gravity · Galileo = ellipses · Newton = telescope","Copernicus = telescope · Galileo = gravity · Newton = Sun-centered","All three did exactly the same thing"], correct:0, ex:"Copernicus → heliocentric (Sun-centered) model; Galileo → telescope discoveries (Jupiter's moons); Kepler → elliptical orbits; Newton → gravity.", d:3 },
    { q:"How did the telescope change astronomy?", opts:["It let people see farther and discover things invisible to the naked eye","It made the stars disappear","It was only used for reading books","It replaced the Sun"], correct:0, ex:"The telescope let astronomers see distant objects (like moons and craters) for the first time, leading to many new discoveries.", d:2 },
  ]},

  /* =======================================================
     4) UNIVERSE TIMELINE
     ======================================================= */
  { name:"UNIVERSE TIMELINE", icon:"🌌", q:[
    { q:"According to scientists, how did the universe begin?", opts:["With the Big Bang","With a giant rock","With the first humans","With the Moon"], correct:0, ex:"Scientists explain the beginning of the universe with the Big Bang: about 13.8 billion years ago, the universe began from an extremely hot, dense point and expanded.", d:1 },
    { q:"About how long ago did the Big Bang happen?", opts:["About 13.8 billion years ago","About 100 years ago","About 1 million years ago","About 5,000 years ago"], correct:0, ex:"The Big Bang happened about 13.8 billion years ago — an enormous amount of time.", d:2 },
    { q:"Right after the Big Bang, the universe was—", opts:["Extremely hot and dense, then it expanded and cooled","Cold and empty forever","Full of planets already","Made of solid ice"], correct:0, ex:"The early universe was incredibly hot and dense. As it expanded, it cooled down, allowing matter to form.", d:2 },
    { q:"Which formed FIRST after the universe cooled?", opts:["Tiny particles and atoms","Humans","Cities","Smartphones"], correct:0, ex:"As the universe cooled, tiny particles joined to form the first atoms — the building blocks of all matter.", d:2 },
    { q:"What is a galaxy?", opts:["An enormous collection of stars, gas, and dust held together by gravity","A single planet","A small moon","A type of comet"], correct:0, ex:"A galaxy is a huge group of stars (often billions), plus gas and dust, held together by gravity. Our galaxy is the Milky Way.", d:1 },
    { q:"What is the name of the galaxy we live in?", opts:["The Milky Way","Andromeda","The Big Dipper","Orion"], correct:0, ex:"We live in the Milky Way galaxy, which contains our Sun and more than 100 billion other stars.", d:1 },
    { q:"Put these in the correct ORDER (earliest first):", opts:["Big Bang → first atoms → first stars → galaxies → solar system","Solar system → galaxies → first stars → Big Bang","First stars → Big Bang → galaxies → atoms","Galaxies → Big Bang → solar system → atoms"], correct:0, ex:"Order: Big Bang → atoms form → first stars shine → stars gather into galaxies → our solar system forms.", d:3 },
    { q:"About how old is our solar system (the Sun and planets)?", opts:["About 4.6 billion years old","About 100 years old","About 13.8 billion years old","About 1 million years old"], correct:0, ex:"Our solar system formed about 4.6 billion years ago — much later than the Big Bang (13.8 billion years ago).", d:3 },
    { q:"Our solar system formed from a giant spinning cloud of gas and dust called a—", opts:["Solar nebula","Black hole","Galaxy cluster","Comet tail"], correct:0, ex:"The Sun and planets formed from a collapsing, spinning cloud of gas and dust called the solar nebula.", d:3 },
    { q:"Is the universe still changing today?", opts:["Yes — it is still expanding and stars are still forming","No, it stopped long ago","It is shrinking to nothing","It never changes"], correct:0, ex:"The universe is still expanding today, and new stars continue to form in galaxies.", d:2 },
  ]},

  /* =======================================================
     5) ANCIENT CONTRIBUTIONS (to astronomy)
     ======================================================= */
  { name:"ANCIENT CONTRIBUTIONS", icon:"🏛️", q:[
    { q:"Why did ancient civilizations study the sky?", opts:["To track time, seasons, farming, and navigation","To watch television","To play video games","For no reason at all"], correct:0, ex:"Ancient peoples watched the Sun, Moon, and stars to make calendars, know when to plant crops, navigate, and hold ceremonies.", d:1 },
    { q:"The ancient Maya (in Mexico and Central America) are famous for developing a sophisticated—", opts:["Calendar based on careful sky observations","Telescope","Space rocket","Computer"], correct:0, ex:"The Maya carefully observed the stars and planets (like Venus) and created sophisticated calendars to track time.", d:2 },
    { q:"The ancient Egyptians aligned their pyramids and used a calendar based on—", opts:["The Sun and stars (like the star Sirius)","Television signals","Ocean tides only","Random guessing"], correct:0, ex:"Egyptians built a solar calendar and used the rising of the star Sirius to predict the Nile's flooding. Their pyramids align with stars.", d:2 },
    { q:"The ancient Babylonians (in Mesopotamia) are known for—", opts:["Recording star positions and creating early star catalogs","Inventing the telescope","Landing on the Moon","Building cars"], correct:0, ex:"The Babylonians of Mesopotamia recorded the movements of stars and planets on clay tablets, creating some of the earliest star catalogs.", d:3 },
    { q:"The ancient Greeks added what to astronomy?", opts:["Mathematics and geometry to explain the sky","Electricity","Photography","Rockets"], correct:0, ex:"The Greeks used mathematics and geometry to build models of the sky and explain the motion of the planets.", d:2 },
    { q:"How did ancient sailors use the stars?", opts:["To navigate and find their way across the sea","To cook food","To send text messages","To grow plants"], correct:0, ex:"Ancient sailors used the positions of stars and constellations to navigate across oceans, before modern instruments existed.", d:1 },
    { q:"Why were calendars so important to ancient farming civilizations?", opts:["They told people when to plant and harvest crops","They were just decorations","They predicted the lottery","They had no real use"], correct:0, ex:"Calendars based on the Sun and stars told farmers the right time to plant and harvest, which was vital for survival.", d:2 },
    { q:"Match the ancient civilization to its astronomy achievement:", opts:["Maya = detailed calendar · Egyptians = pyramids aligned to stars · Babylonians = star records","Maya = telescope · Egyptians = rockets · Babylonians = computers","Maya = electricity · Egyptians = cars · Babylonians = airplanes","All of them invented the telescope"], correct:0, ex:"Maya → advanced calendars; Egyptians → solar calendar and star-aligned pyramids; Babylonians → early star catalogs on clay tablets.", d:3 },
  ]},

];