/* =====================================================================
   Redwood · Español (Ortografía) — CONTENT FILE
   Original teaching content + question banks. Drop-in for both the
   study module and the practice game.

   STRUCTURE
   - ESPANOL_LESSONS: 7 lessons of study content (titles, explanation,
     rules, examples, a "recuerda" tip). Original text — does NOT copy
     any textbook.
   - ESPANOL_BANK: question banks for the 3 game mechanics:
       fill   -> "Escribe la letra"  (type the missing letter[s])
       tilde  -> "Pon la tilde"       (tap the vowel that needs the accent)
       error  -> "Caza el error"      (tap the wrong part of a sentence)
   ===================================================================== */

   const ESPANOL_LESSONS = [
    {
      id: "z-c-s",
      num: 1,
      title: "Como pez en el agua",
      subtitle: 'Uso de "z", "c" y "s"',
      intro:
        "Las letras z, c y s suenan muy parecido, y por eso se confunden al escribir. La buena noticia es que hay reglas que te ayudan a decidir cuál usar casi siempre.",
      sections: [
        {
          h: "La letra C",
          body:
            "La c suena suave (como s) cuando va antes de e o de i: cielo, cena, ciudad, cocina. Antes de a, o, u suena fuerte (como k): casa, cosa, cuna. Muchas palabras terminadas en -ción y -cción se escriben con c: canción, acción, lección, dirección.",
        },
        {
          h: "La letra Z",
          body:
            "La z se usa antes de a, o, u: zapato, zona, azúcar. Casi nunca se escribe ze o zi; en su lugar usamos ce, ci (por eso es 'cebra' y no 'zebra'). Muchos sustantivos terminan en -anza y -azgo con z: confianza, esperanza, liderazgo.",
        },
        {
          h: "La letra S",
          body:
            "La s aparece en muchísimas palabras y en casi todos los plurales: casas, mesas, niños. Se escriben con s las terminaciones -oso/-osa (cariñoso, hermosa) y -sión cuando viene de palabras en -so o -sor: televisión (de televisor), expresión (de expresivo).",
        },
      ],
      recuerda:
        "Truco: antes de e/i casi siempre va C (cielo, cine). La Z prefiere a/o/u (zorro, azul).",
    },
    {
      id: "mayusculas",
      num: 2,
      title: "Todo es más limpio con brillantín",
      subtitle: "Uso de mayúsculas y minúsculas",
      intro:
        "Las mayúsculas no se usan por gusto: tienen reglas claras. Saber cuándo poner mayúscula hace que tu escritura se vea ordenada y profesional.",
      sections: [
        {
          h: "Siempre con mayúscula",
          body:
            "Se escribe con mayúscula la primera letra de un texto y la que va después de un punto. También los nombres propios: personas (Ana, Pedro), lugares (México, Monterrey), y nombres de mascotas o marcas.",
        },
        {
          h: "Cuidado: estas NO llevan mayúscula",
          body:
            "Los días de la semana (lunes, martes) y los meses (enero, abril) se escriben con minúscula en español. Tampoco llevan mayúscula los idiomas (español, inglés) ni los gentilicios (mexicano, francés).",
        },
        {
          h: "Títulos y obras",
          body:
            "En los títulos de libros o películas, normalmente solo la primera palabra lleva mayúscula: 'El principito', 'La isla del tesoro'. Los nombres propios dentro del título sí la conservan.",
        },
      ],
      recuerda:
        "Después de punto, mayúscula. Los días y meses van en minúscula: 'El lunes de enero...'",
    },
    {
      id: "signos",
      num: 3,
      title: "De preguntas a preguntas",
      subtitle:
        "Signos de exclamación, interrogación, punto final y coma en enumeraciones",
      intro:
        "Los signos de puntuación son como las señales de tránsito de un texto: le dicen al lector cuándo parar, cuándo emocionarse y cuándo preguntar.",
      sections: [
        {
          h: "Preguntas y exclamaciones: ¡dos signos!",
          body:
            "En español, las preguntas se abren y se cierran: ¿Cómo te llamas? Lo mismo las exclamaciones: ¡Qué sorpresa! Olvidar el signo de apertura (¿ o ¡) es uno de los errores más comunes.",
        },
        {
          h: "La coma en enumeraciones",
          body:
            "Cuando nombras varias cosas en una lista, las separas con comas: 'Compré manzanas, peras, uvas y plátanos.' Fíjate que antes de la última 'y' normalmente NO se pone coma.",
        },
        {
          h: "El punto final",
          body:
            "El punto cierra una oración con sentido completo. Después de un punto, la siguiente palabra empieza con mayúscula. El punto y seguido separa ideas dentro de un mismo párrafo; el punto y aparte cambia de párrafo.",
        },
      ],
      recuerda:
        "Toda pregunta lleva ¿ al inicio y ? al final. Toda exclamación, ¡ y !",
    },
    {
      id: "acentuacion",
      num: 4,
      title: "Un invento espectacular",
      subtitle: "Acentuación de palabras y tilde diacrítica",
      intro:
        "La tilde (´) es esa rayita que cambia cómo se pronuncia —y a veces qué significa— una palabra. Saber dónde va es una de las habilidades más útiles de la ortografía.",
      sections: [
        {
          h: "Sílaba tónica: la que suena más fuerte",
          body:
            "En toda palabra hay una sílaba que pronunciamos con más fuerza: la sílaba tónica. En 'cámara' es CA, en 'reloj' es LOJ. Saber cuál es te ayuda a decidir si lleva tilde.",
        },
        {
          h: "Agudas, graves y esdrújulas",
          body:
            "Agudas: la fuerza va en la última sílaba; llevan tilde si terminan en n, s o vocal (canción, café, además). Graves: la fuerza va en la penúltima; llevan tilde si NO terminan en n, s o vocal (árbol, lápiz). Esdrújulas: la fuerza va en la antepenúltima; SIEMPRE llevan tilde (pájaro, médico, rápido).",
        },
        {
          h: "Tilde diacrítica: cambia el significado",
          body:
            "Algunas palabras se escriben igual pero la tilde las distingue: tú (persona) / tu (posesivo); él (persona) / el (artículo); sí (afirmación) / si (condición); más (cantidad) / mas (pero). 'Tú tienes tu libro' usa las dos formas.",
        },
      ],
      recuerda:
        "Las esdrújulas SIEMPRE llevan tilde (música, México). La tilde diacrítica separa palabras gemelas: él / el.",
    },
    {
      id: "c-qu-k",
      num: 5,
      title: "¡Quiquiriquí!",
      subtitle: 'Uso de "c" y "qu", y vocabulario con "k"',
      intro:
        "El sonido fuerte /k/ se puede escribir de tres maneras: c, qu o k. Elegir la correcta depende de la vocal que sigue.",
      sections: [
        {
          h: "C antes de a, o, u",
          body:
            "El sonido /k/ se escribe con c antes de a, o, u: casa, comida, cuna, escuela. Es la forma más común.",
        },
        {
          h: "QU antes de e, i",
          body:
            "Antes de e o i, el sonido /k/ se escribe con qu (la u no se pronuncia): queso, quitar, esquina, paquete. Nunca se escribe 'ce' con sonido fuerte: por eso es 'queso', no 'ceso'.",
        },
        {
          h: "La letra K",
          body:
            "La k aparece sobre todo en palabras que vienen de otros idiomas: kilo, koala, kiwi, karate, kayak. Son pocas, así que conviene memorizarlas.",
        },
      ],
      recuerda:
        "/k/ + a,o,u → C (casa). /k/ + e,i → QU (queso). Palabras 'extranjeras' → K (kilo).",
    },
    {
      id: "homofonas",
      num: 6,
      title: "¿De casa o de caza?",
      subtitle: 'Homófonas con "z-s" y "b-v"',
      intro:
        "Las homófonas son palabras que suenan igual pero se escriben distinto y significan cosas diferentes. El contexto te dice cuál usar.",
      sections: [
        {
          h: "Casa / Caza",
          body:
            "Casa (con s) es el lugar donde vives. Caza (con z) es perseguir un animal. 'Salió de su casa a la caza de aventuras.'",
        },
        {
          h: "Más parejas con S y Z",
          body:
            "cocer (cocinar) / coser (con hilo y aguja); abrazar (dar un abrazo) / abrasar (quemar); ves (del verbo ver) / vez (una ocasión).",
        },
        {
          h: "Parejas con B y V",
          body:
            "tubo (objeto hueco) / tuvo (del verbo tener); botar (lanzar o tirar) / votar (en una elección); bello (hermoso) / vello (pelo fino). 'Tuvo que botar el tubo viejo.'",
        },
      ],
      recuerda:
        "Si suenan igual, piensa en el SIGNIFICADO: 'tuvo' viene de tener (con b); 'votar' es de votos (con v).",
    },
    {
      id: "concordancia",
      num: 7,
      title: "Vamos a redactar",
      subtitle: "Concordancia en género y número (Proyecto)",
      intro:
        "Concordancia significa que las palabras de una oración 'se ponen de acuerdo'. El artículo, el sustantivo y el adjetivo deben coincidir en género (masculino/femenino) y número (singular/plural).",
      sections: [
        {
          h: "Género: masculino y femenino",
          body:
            "El artículo y el adjetivo cambian según el sustantivo: 'el niño alto' / 'la niña alta'. No se dice 'la niño' ni 'el niña'. El género debe coincidir.",
        },
        {
          h: "Número: singular y plural",
          body:
            "Si el sustantivo es plural, todo lo que lo acompaña va en plural: 'los perros negros', no 'los perro negro'. 'Las casas bonitas', no 'las casa bonita'.",
        },
        {
          h: "Al redactar",
          body:
            "Cuando escribas un texto, revisa que cada grupo de palabras concuerde. Un error de concordancia se nota de inmediato: 'unas flores rojo' suena mal; lo correcto es 'unas flores rojas'.",
        },
      ],
      recuerda:
        "Artículo + sustantivo + adjetivo deben coincidir: 'las casas blancas' (todo femenino y plural).",
    },
  ];
  
  /* =====================================================================
     QUESTION BANKS  (ESPANOL_BANK)
     Each item has a "topic" (lesson id) so the game can tag what it tested.
     ===================================================================== */
  
  const ESPANOL_BANK = {
    /* ---- MECHANIC 1: "Escribe la letra" ------------------------------- */
    fill: [
      { topic: "z-c-s", prompt: "lápi_", answer: "z", hint: "Sonido fuerte al final, va con z." },
      { topic: "z-c-s", prompt: "_ielo", answer: "c", hint: "Antes de e/i casi siempre C." },
      { topic: "z-c-s", prompt: "can_ión", answer: "c", hint: "Termina en -ción." },
      { topic: "z-c-s", prompt: "_apato", answer: "z", hint: "Antes de a suena con z." },
      { topic: "z-c-s", prompt: "cora_ón", answer: "z", hint: "-zón se escribe con z." },
      { topic: "z-c-s", prompt: "le_ción", answer: "c", hint: "Doble c: lec-ción." },
      { topic: "z-c-s", prompt: "espe_anza", answer: "r", hint: "Suena 'esperanza'." },
      { topic: "z-c-s", prompt: "cabe_a", answer: "z", hint: "La cabeza, con z." },
      { topic: "z-c-s", prompt: "lu_ero", answer: "c", hint: "'Lucero' antes de e → c." },
      { topic: "z-c-s", prompt: "ri_o", answer: "z", hint: "'Rizo' del cabello, con z." },
      { topic: "z-c-s", prompt: "cari_o", answer: "ñ", hint: "Cariño, con eñe." },
      { topic: "z-c-s", prompt: "direc_ión", answer: "c", hint: "-cción se escribe con doble c... aquí va c+ción." },
      { topic: "z-c-s", prompt: "fideli_ad", answer: "d", hint: "'Fidelidad'." },
      { topic: "z-c-s", prompt: "confian_a", answer: "z", hint: "-anza con z." },
      { topic: "z-c-s", prompt: "vela_idad", answer: "", accept: ["", "o"], hint: "Pista: 'velocidad'." },
      { topic: "z-c-s", prompt: "_ebra", answer: "c", hint: "Se escribe 'cebra', con c." },
      { topic: "z-c-s", prompt: "ha_er", answer: "c", hint: "El verbo 'hacer', con c." },
      { topic: "z-c-s", prompt: "do_ena", answer: "c", hint: "Una 'docena' (12), con c." },
      { topic: "z-c-s", prompt: "tro_o", answer: "z", hint: "Un 'trozo', con z." },
      { topic: "z-c-s", prompt: "ni_o", answer: "ñ", hint: "El 'niño', con eñe." },
  
      { topic: "c-qu-k", prompt: "_eso", answer: "qu", hint: "Sonido /k/ antes de e → qu." },
      { topic: "c-qu-k", prompt: "es_ina", answer: "qu", hint: "/k/ antes de i → qu." },
      { topic: "c-qu-k", prompt: "_asa", answer: "c", hint: "/k/ antes de a → c." },
      { topic: "c-qu-k", prompt: "pa_ete", answer: "qu", hint: "/k/ antes de e → qu." },
      { topic: "c-qu-k", prompt: "_ilo", answer: "k", hint: "Unidad de peso, palabra con k." },
      { topic: "c-qu-k", prompt: "_oala", answer: "k", hint: "Animal de Australia, con k." },
      { topic: "c-qu-k", prompt: "es_uela", answer: "c", hint: "/k/ antes de u → c." },
      { topic: "c-qu-k", prompt: "_imica", answer: "qu", hint: "'Química' /k/ antes de i → qu." },
      { topic: "c-qu-k", prompt: "ma_ina", answer: "qu", hint: "'Máquina' → qu." },
      { topic: "c-qu-k", prompt: "_omida", answer: "c", hint: "/k/ antes de o → c." },
      { topic: "c-qu-k", prompt: "bos_e", answer: "qu", hint: "'Bosque' → qu." },
      { topic: "c-qu-k", prompt: "_iwi", answer: "k", hint: "La fruta 'kiwi', con k." },
      { topic: "c-qu-k", prompt: "_arate", answer: "k", hint: "El 'karate', con k." },
      { topic: "c-qu-k", prompt: "ar_itecto", answer: "qu", hint: "'Arquitecto' → qu." },
      { topic: "c-qu-k", prompt: "_uaderno", answer: "c", hint: "/k/ antes de u → c." },
  
      { topic: "homofonas", prompt: "tu_o (de tener)", answer: "v", hint: "'Tuvo' viene de tener → v." },
      { topic: "homofonas", prompt: "tu_o (objeto hueco)", answer: "b", hint: "El 'tubo' es un objeto → b." },
      { topic: "homofonas", prompt: "_otar (en elección)", answer: "v", hint: "Votar = dar tu voto → v." },
      { topic: "homofonas", prompt: "_ello (hermoso)", answer: "b", hint: "Bello = bonito → b." },
      { topic: "homofonas", prompt: "ca_a (perseguir animales)", answer: "z", hint: "La caza, con z." },
      { topic: "homofonas", prompt: "ca_a (donde vives)", answer: "s", hint: "La casa, con s." },
      { topic: "homofonas", prompt: "co_er (con hilo y aguja)", answer: "s", hint: "'Coser' ropa → s." },
      { topic: "homofonas", prompt: "co_er (cocinar)", answer: "c", hint: "'Cocer' alimentos → c." },
      { topic: "homofonas", prompt: "a_razar (dar un abrazo)", answer: "b", hint: "'Abrazar' → b." },
      { topic: "homofonas", prompt: "_ello (pelo fino)", answer: "v", hint: "El 'vello' del cuerpo → v." },
      { topic: "homofonas", prompt: "_otar (lanzar la pelota)", answer: "b", hint: "'Botar' la pelota → b." },
      { topic: "homofonas", prompt: "ve_ (una ocasión)", answer: "z", hint: "'Una vez' → z." },
      { topic: "homofonas", prompt: "ve_ (del verbo ver)", answer: "s", hint: "'Tú ves' → s." },
      { topic: "homofonas", prompt: "sa_ia (con conocimiento)", answer: "b", hint: "Persona 'sabia' → b." },
      { topic: "homofonas", prompt: "ha_er (existir/tener)", answer: "b", hint: "El verbo 'haber' → b." },
    ],
  
    /* ---- MECHANIC 2: "Pon la tilde" ----------------------------------- */
    tilde: [
      { topic: "acentuacion", word: "pajaro", letters: ["p","a","j","a","r","o"], answerIndex: 1, accented: "pájaro", hint: "Esdrújula: siempre lleva tilde." },
      { topic: "acentuacion", word: "musica", letters: ["m","u","s","i","c","a"], answerIndex: 1, accented: "música", hint: "Esdrújula: MÚ-si-ca." },
      { topic: "acentuacion", word: "cancion", letters: ["c","a","n","c","i","o","n"], answerIndex: 5, accented: "canción", hint: "Aguda terminada en n → tilde en la o." },
      { topic: "acentuacion", word: "cafe", letters: ["c","a","f","e"], answerIndex: 3, accented: "café", hint: "Aguda terminada en vocal → tilde." },
      { topic: "acentuacion", word: "arbol", letters: ["a","r","b","o","l"], answerIndex: 0, accented: "árbol", hint: "Grave que NO termina en n,s,vocal → tilde." },
      { topic: "acentuacion", word: "lapiz", letters: ["l","a","p","i","z"], answerIndex: 1, accented: "lápiz", hint: "Grave terminada en z → tilde." },
      { topic: "acentuacion", word: "medico", letters: ["m","e","d","i","c","o"], answerIndex: 1, accented: "médico", hint: "Esdrújula: MÉ-di-co." },
      { topic: "acentuacion", word: "rapido", letters: ["r","a","p","i","d","o"], answerIndex: 1, accented: "rápido", hint: "Esdrújula: siempre tilde." },
      { topic: "acentuacion", word: "casa", letters: ["c","a","s","a"], answerIndex: -1, accented: "casa", hint: "Grave terminada en vocal → SIN tilde." },
      { topic: "acentuacion", word: "reloj", letters: ["r","e","l","o","j"], answerIndex: -1, accented: "reloj", hint: "Aguda terminada en j → SIN tilde." },
      { topic: "acentuacion", word: "examen", letters: ["e","x","a","m","e","n"], answerIndex: -1, accented: "examen", hint: "Grave terminada en n → SIN tilde." },
      { topic: "acentuacion", word: "telefono", letters: ["t","e","l","e","f","o","n","o"], answerIndex: 5, accented: "teléfono", hint: "Esdrújula: te-LÉ-fo-no." },
      { topic: "acentuacion", word: "arboles", letters: ["a","r","b","o","l","e","s"], answerIndex: 0, accented: "árboles", hint: "Esdrújula: ÁR-bo-les." },
      { topic: "acentuacion", word: "lampara", letters: ["l","a","m","p","a","r","a"], answerIndex: 1, accented: "lámpara", hint: "Esdrújula: LÁM-pa-ra." },
      { topic: "acentuacion", word: "corazon", letters: ["c","o","r","a","z","o","n"], answerIndex: 5, accented: "corazón", hint: "Aguda terminada en n → tilde." },
      { topic: "acentuacion", word: "jardin", letters: ["j","a","r","d","i","n"], answerIndex: 4, accented: "jardín", hint: "Aguda terminada en n → tilde." },
      { topic: "acentuacion", word: "facil", letters: ["f","a","c","i","l"], answerIndex: 1, accented: "fácil", hint: "Grave terminada en l → tilde." },
      { topic: "acentuacion", word: "azucar", letters: ["a","z","u","c","a","r"], answerIndex: 2, accented: "azúcar", hint: "Grave terminada en r → tilde." },
      { topic: "acentuacion", word: "matematicas", letters: ["m","a","t","e","m","a","t","i","c","a","s"], answerIndex: 5, accented: "matemáticas", hint: "Esdrújula: ma-te-MÁ-ti-cas." },
      { topic: "acentuacion", word: "sabado", letters: ["s","a","b","a","d","o"], answerIndex: 1, accented: "sábado", hint: "Esdrújula: SÁ-ba-do." },
      { topic: "acentuacion", word: "ventana", letters: ["v","e","n","t","a","n","a"], answerIndex: -1, accented: "ventana", hint: "Grave terminada en vocal → SIN tilde." },
      { topic: "acentuacion", word: "papel", letters: ["p","a","p","e","l"], answerIndex: -1, accented: "papel", hint: "Aguda terminada en l → SIN tilde." },
      { topic: "acentuacion", word: "cuaderno", letters: ["c","u","a","d","e","r","n","o"], answerIndex: -1, accented: "cuaderno", hint: "Grave terminada en vocal → SIN tilde." },
      { topic: "acentuacion", word: "camion", letters: ["c","a","m","i","o","n"], answerIndex: 4, accented: "camión", hint: "Aguda terminada en n → tilde en la o." },
      { topic: "acentuacion", word: "platano", letters: ["p","l","a","t","a","n","o"], answerIndex: 2, accented: "plátano", hint: "Esdrújula: PLÁ-ta-no." },
      { topic: "acentuacion", word: "arbolito", letters: ["a","r","b","o","l","i","t","o"], answerIndex: -1, accented: "arbolito", hint: "Grave terminada en vocal → SIN tilde." },
      { topic: "acentuacion", word: "esdrujula", letters: ["e","s","d","r","u","j","u","l","a"], answerIndex: 4, accented: "esdrújula", hint: "Esdrújula: es-DRÚ-ju-la." },
      { topic: "acentuacion", word: "pizarron", letters: ["p","i","z","a","r","r","o","n"], answerIndex: 6, accented: "pizarrón", hint: "Aguda terminada en n → tilde." },
      { topic: "acentuacion", word: "huesped", letters: ["h","u","e","s","p","e","d"], answerIndex: 2, accented: "huésped", hint: "Grave terminada en d → tilde." },
      { topic: "acentuacion", word: "mochila", letters: ["m","o","c","h","i","l","a"], answerIndex: -1, accented: "mochila", hint: "Grave terminada en vocal → SIN tilde." },
    ],
  
    /* ---- MECHANIC 3: "Caza el error" ---------------------------------- */
    error: [
      { topic: "mayusculas", tokens: ["el","perro","corrió","muy","rápido."], badIndex: 0, fixed: "El", why: "Inicio de oración → mayúscula." },
      { topic: "mayusculas", tokens: ["Mi","amigo","vive","en","monterrey."], badIndex: 4, fixed: "Monterrey.", why: "Monterrey es nombre propio → mayúscula." },
      { topic: "mayusculas", tokens: ["Vamos","a","la","playa","el","Lunes."], badIndex: 5, fixed: "lunes.", why: "Los días van en minúscula." },
      { topic: "mayusculas", tokens: ["ana","compró","un","helado","de","fresa."], badIndex: 0, fixed: "Ana", why: "Nombre propio e inicio → mayúscula." },
      { topic: "mayusculas", tokens: ["Nací","en","el","mes","de","Abril."], badIndex: 5, fixed: "abril.", why: "Los meses van en minúscula." },
      { topic: "mayusculas", tokens: ["mi","gato","se","llama","Pelusa."], badIndex: 0, fixed: "Mi", why: "Inicio de oración → mayúscula." },
      { topic: "mayusculas", tokens: ["Viajé","a","francia","el","verano","pasado."], badIndex: 2, fixed: "Francia", why: "Francia es nombre propio → mayúscula." },
      { topic: "mayusculas", tokens: ["hablo","español","e","inglés."], badIndex: 0, fixed: "Hablo", why: "Inicio de oración → mayúscula (idiomas en minúscula)." },
  
      { topic: "signos", tokens: ["Cómo","te","llamas?"], badIndex: 0, fixed: "¿Cómo", why: "Falta el signo de apertura ¿." },
      { topic: "signos", tokens: ["Qué","sorpresa","tan","grande!"], badIndex: 0, fixed: "¡Qué", why: "Falta el signo de apertura ¡." },
      { topic: "signos", tokens: ["Compré","manzanas","peras","y","uvas."], badIndex: 1, fixed: "manzanas,", why: "En enumeración va coma: manzanas, peras..." },
      { topic: "signos", tokens: ["¿Dónde","están","mis","llaves."], badIndex: 3, fixed: "llaves?", why: "Una pregunta cierra con ?, no con punto." },
      { topic: "signos", tokens: ["Tengo","perros","gatos","y","peces."], badIndex: 1, fixed: "perros,", why: "Enumeración: perros, gatos y peces." },
      { topic: "signos", tokens: ["Qué","día","tan","bonito."], badIndex: 0, fixed: "¡Qué", why: "Exclamación: falta ¡ y debe cerrar con !." },
      { topic: "signos", tokens: ["¡Feliz","cumpleaños."], badIndex: 1, fixed: "cumpleaños!", why: "Una exclamación cierra con !, no con punto." },
      { topic: "signos", tokens: ["Quién","ganó","el","partido?"], badIndex: 0, fixed: "¿Quién", why: "Falta el signo de apertura ¿." },
  
      { topic: "concordancia", tokens: ["las","casa","blancas"], badIndex: 1, fixed: "casas", why: "Plural: 'las casas blancas'." },
      { topic: "concordancia", tokens: ["el","niña","alta"], badIndex: 0, fixed: "la", why: "Femenino: 'la niña alta'." },
      { topic: "concordancia", tokens: ["unos","flores","rojas"], badIndex: 0, fixed: "unas", why: "'Flores' es femenino: 'unas flores rojas'." },
      { topic: "concordancia", tokens: ["los","perro","negros"], badIndex: 1, fixed: "perros", why: "Plural: 'los perros negros'." },
      { topic: "concordancia", tokens: ["la","libro","nuevo"], badIndex: 0, fixed: "el", why: "Masculino: 'el libro nuevo'." },
      { topic: "concordancia", tokens: ["los","mesas","largas"], badIndex: 0, fixed: "las", why: "Femenino plural: 'las mesas largas'." },
      { topic: "concordancia", tokens: ["una","problema","difícil"], badIndex: 0, fixed: "un", why: "'Problema' es masculino: 'un problema difícil'." },
      { topic: "concordancia", tokens: ["el","manzanas","verdes"], badIndex: 0, fixed: "las", why: "Plural femenino: 'las manzanas verdes'." },
      { topic: "concordancia", tokens: ["mis","amigo","favoritos"], badIndex: 1, fixed: "amigos", why: "Plural: 'mis amigos favoritos'." },
  
      { topic: "homofonas", tokens: ["Tuvo","que","botar","el","tuvo","viejo."], badIndex: 4, fixed: "tubo", why: "El objeto hueco es 'tubo' (con b)." },
      { topic: "homofonas", tokens: ["Salió","de","caza","a","cazar","venados."], badIndex: 2, fixed: "casa", why: "El lugar donde vives es 'casa' (con s)." },
      { topic: "homofonas", tokens: ["Voy","a","votar","la","basura."], badIndex: 2, fixed: "botar", why: "Tirar/lanzar es 'botar' (con b)." },
      { topic: "homofonas", tokens: ["Ella","es","muy","vella."], badIndex: 3, fixed: "bella.", why: "Hermosa es 'bella' (con b)." },
    ],
  };
  
  /* expose for both pages */
  if (typeof window !== "undefined") {
    window.ESPANOL_LESSONS = ESPANOL_LESSONS;
    window.ESPANOL_BANK = ESPANOL_BANK;
  }