/* ============================================================
   BANCO DE PREGUNTAS — ESPAÑOL (5° grado, 3er periodo)
   Basado EXCLUSIVAMENTE en el temario proporcionado.
   4 temas. Cada tema cubre TODO su contenido.
   Formato por carta: { q, opts:[], correct:<idx>, ex, d:<1-3> }
   ============================================================ */
const TEMAS = [

  /* =======================================================
     1) LA HISTORIETA
     ======================================================= */
  { name:"LA HISTORIETA", icon:"💬", q:[
    { q:"¿Qué es una historieta?", opts:["Una forma de expresión artística que cuenta historias con dibujos","Un tipo de poema con rimas","Una lista de palabras","Una canción"], correct:0, ex:"La historieta es una forma de expresión artística que cuenta historias con dibujos, combinando imágenes y texto en secuencia.", d:1 },
    { q:"¿Con qué otro nombre se conoce a la historieta?", opts:["Cómic","Novela","Adivinanza","Refrán"], correct:0, ex:"La historieta también se conoce como cómic.", d:1 },
    { q:"La historieta combina dos cosas en secuencia. ¿Cuáles son?", opts:["Imágenes y texto","Música y baile","Números y letras","Colores y sonidos"], correct:0, ex:"La historieta combina imágenes y texto en secuencia.", d:1 },
    { q:"¿Cómo se llaman los recuadros que contienen las escenas de una historieta?", opts:["Viñetas","Globos","Onomatopeyas","Bocadillos"], correct:0, ex:"Las viñetas son los recuadros que contienen las escenas.", d:1 },
    { q:"Además de contener las escenas, ¿qué marcan las viñetas en la historia?", opts:["El paso del tiempo","El precio","El número de páginas","El idioma"], correct:0, ex:"Las viñetas marcan el paso del tiempo en la historia y pueden tener diferentes formas y tamaños.", d:2 },
    { q:"¿Cómo se llaman los globos de texto donde aparecen los diálogos de los personajes?", opts:["Bocadillos","Viñetas","Onomatopeyas","Signos cinéticos"], correct:0, ex:"Los diálogos van en globos de texto o bocadillos.", d:1 },
    { q:"En una historieta, ¿qué muestran las ilustraciones?", opts:["La acción y los personajes","El precio del cómic","Los nombres de los autores","La fecha"], correct:0, ex:"Las ilustraciones son los dibujos que muestran la acción y los personajes.", d:1 },
    { q:"¿Qué son las onomatopeyas en una historieta?", opts:["Palabras que representan sonidos (¡POW!, ¡RING!)","Líneas que muestran movimiento","Recuadros con escenas","Símbolos de emociones"], correct:0, ex:"Las onomatopeyas son palabras que representan sonidos, como ¡POW! o ¡RING!", d:1 },
    { q:"En una historieta, ¿qué son los «signos cinéticos»?", opts:["Líneas que muestran movimiento","Palabras que imitan sonidos","Globos de diálogo","Recuadros de escenas"], correct:0, ex:"Los signos cinéticos son líneas que muestran movimiento.", d:2 },
    { q:"Los corazones o rayos que representan emociones en una historieta son—", opts:["Metáforas visuales","Onomatopeyas","Viñetas","Bocadillos"], correct:0, ex:"Las metáforas visuales son símbolos para emociones, como corazones o rayos.", d:2 },
    { q:"Empareja correctamente el efecto especial con su definición:", opts:["Onomatopeya = sonido · Signo cinético = movimiento · Metáfora visual = emoción","Onomatopeya = movimiento · Signo cinético = emoción · Metáfora visual = sonido","Onomatopeya = emoción · Signo cinético = sonido · Metáfora visual = movimiento","Todas significan lo mismo"], correct:0, ex:"Onomatopeya = sonido (¡POW!); signo cinético = líneas de movimiento; metáfora visual = símbolo de emoción (corazón, rayo).", d:3 },
  ]},

  /* =======================================================
     2) LAS ADIVINANZAS
     ======================================================= */
  { name:"LAS ADIVINANZAS", icon:"🧩", q:[
    { q:"¿Qué combina una adivinanza?", opts:["Poesía con ingenio en verso","Números con dibujos","Música con baile","Historia con geografía"], correct:0, ex:"La adivinanza combina poesía con ingenio en verso.", d:1 },
    { q:"Una adivinanza es un tipo de—", opts:["Enigma poético","Cuento largo","Lista de adverbios","Historieta"], correct:0, ex:"Las adivinanzas son enigmas poéticos: metáforas y versos breves que desafían la mente.", d:1 },
    { q:"¿Cómo son los versos de una adivinanza?", opts:["Cortos, completos y autosuficientes, que expresan la idea con claridad","Largos y sin sentido","Siempre de diez líneas","Sin ninguna rima ni idea"], correct:0, ex:"Los versos de una adivinanza son cortos, completos y autosuficientes, y expresan la idea central con claridad.", d:2 },
    { q:"¿Qué recursos usan las adivinanzas para crear el enigma poético?", opts:["Metáforas, analogías y juegos de palabras","Solo números","Dibujos a color","Onomatopeyas"], correct:0, ex:"Las adivinanzas usan metáforas, analogías y juegos de palabras para crear el enigma poético.", d:2 },
    { q:"¿Cuál es uno de los propósitos de una adivinanza?", opts:["Entretener, enseñar y estimular el pensamiento creativo","Vender productos","Marcar el paso del tiempo","Indicar el modo de una acción"], correct:0, ex:"Las adivinanzas buscan entretener, enseñar y estimular el pensamiento creativo y la reflexión.", d:1 },
    { q:"Una adivinanza «desafía la mente» principalmente porque—", opts:["Es un enigma que hay que resolver con ingenio","Es muy larga","Tiene muchos dibujos","No tiene respuesta"], correct:0, ex:"Es un enigma poético que reta a pensar para descubrir la respuesta.", d:2 },
  ]},

  /* =======================================================
     3) LOS ADVERBIOS
     ======================================================= */
  { name:"LOS ADVERBIOS", icon:"⚡", q:[
    { q:"¿Qué es un adverbio?", opts:["Una palabra que expresa las circunstancias de un evento (modo, tiempo o lugar)","Un dibujo de una historieta","Un verso de una adivinanza","Un sonido"], correct:0, ex:"El adverbio es un tipo de palabra que expresa las circunstancias de un evento: ofrece información sobre el modo, el tiempo o el lugar de la acción.", d:1 },
    { q:"Un adverbio ofrece información acerca del modo, el tiempo o el ___ en que se desarrolla la acción.", opts:["lugar","color","precio","nombre"], correct:0, ex:"El adverbio informa sobre el modo, el tiempo o el lugar en que se desarrolla la acción.", d:1 },
    // Lugar
    { q:"¿A qué categoría de adverbio pertenece «aquí»?", opts:["Lugar","Tiempo","Modo","Duda"], correct:0, ex:"«Aquí» es un adverbio de LUGAR (indica espacio): aquí, allí, ahí, allá, cerca, lejos, arriba, abajo...", d:1 },
    { q:"¿Cuál de estas palabras es un adverbio de LUGAR?", opts:["lejos","ayer","rápidamente","quizás"], correct:0, ex:"«Lejos» indica espacio = adverbio de lugar. «Ayer» es tiempo, «rápidamente» es modo, «quizás» es duda.", d:2 },
    // Tiempo
    { q:"¿A qué categoría pertenece el adverbio «ayer»?", opts:["Tiempo","Lugar","Modo","Cantidad"], correct:0, ex:"«Ayer» indica el momento = adverbio de TIEMPO (ayer, hoy, después).", d:1 },
    { q:"¿Cuál es un adverbio de TIEMPO?", opts:["después","arriba","mucho","no"], correct:0, ex:"«Después» indica momento = adverbio de tiempo. «Arriba» es lugar, «mucho» es cantidad, «no» es negación.", d:2 },
    // Modo
    { q:"El adverbio «rápidamente» pertenece a la categoría de—", opts:["Modo","Lugar","Tiempo","Afirmación"], correct:0, ex:"«Rápidamente» indica la manera = adverbio de MODO (bien, mal, rápidamente).", d:1 },
    { q:"¿Cuál de estos es un adverbio de MODO?", opts:["bien","hoy","aquí","jamás"], correct:0, ex:"«Bien» indica la manera = adverbio de modo. «Hoy» es tiempo, «aquí» es lugar, «jamás» es negación.", d:2 },
    // Cantidad
    { q:"¿A qué categoría pertenece el adverbio «mucho»?", opts:["Cantidad","Modo","Lugar","Duda"], correct:0, ex:"«Mucho» indica grado o medida = adverbio de CANTIDAD (mucho, poco, muy).", d:1 },
    { q:"¿Cuál es un adverbio de CANTIDAD?", opts:["muy","ahí","ayer","sí"], correct:0, ex:"«Muy» indica grado o medida = adverbio de cantidad.", d:2 },
    // Afirmación
    { q:"Los adverbios «sí», «también» y «ciertamente» son de—", opts:["Afirmación","Negación","Duda","Lugar"], correct:0, ex:"«Sí, también, ciertamente» son adverbios de AFIRMACIÓN.", d:2 },
    // Negación
    { q:"¿A qué categoría pertenecen «no», «jamás» y «nunca»?", opts:["Negación","Afirmación","Duda","Tiempo"], correct:0, ex:"«No, jamás, nunca» son adverbios de NEGACIÓN.", d:1 },
    { q:"¿Cuál de estas palabras es un adverbio de NEGACIÓN?", opts:["nunca","también","quizás","muy"], correct:0, ex:"«Nunca» es de negación. «También» es afirmación, «quizás» es duda, «muy» es cantidad.", d:2 },
    // Duda
    { q:"Los adverbios «quizás», «tal vez» y «probablemente» son de—", opts:["Duda","Afirmación","Negación","Modo"], correct:0, ex:"«Quizás, tal vez, probablemente» son adverbios de DUDA.", d:2 },
    { q:"¿Cuántas categorías de adverbios menciona el temario?", opts:["Siete (lugar, tiempo, modo, cantidad, afirmación, negación, duda)","Tres","Cinco","Diez"], correct:0, ex:"Son 7 categorías: lugar, tiempo, modo, cantidad, afirmación, negación y duda.", d:3 },
    { q:"Empareja adverbio y categoría:", opts:["cerca = lugar · hoy = tiempo · mal = modo","cerca = tiempo · hoy = modo · mal = lugar","cerca = modo · hoy = lugar · mal = tiempo","Todos son de cantidad"], correct:0, ex:"«Cerca» = lugar; «hoy» = tiempo; «mal» = modo.", d:3 },
  ]},

  /* =======================================================
     4) PALABRAS HOMÓFONAS
     ======================================================= */
  { name:"PALABRAS HOMÓFONAS", icon:"🔤", q:[
    { q:"¿Qué son las palabras homófonas?", opts:["Palabras que se escriben diferente pero suenan igual y tienen significado distinto","Palabras que se escriben igual","Palabras sin significado","Palabras que riman"], correct:0, ex:"Las homófonas se escriben diferente, suenan igual y tienen significado distinto. Igual pronunciación, distinta ortografía y distinto significado.", d:1 },
    { q:"Las palabras homófonas tienen igual ___ pero distinta ortografía y significado.", opts:["pronunciación","longitud","número de letras","categoría"], correct:0, ex:"Las homófonas tienen igual pronunciación (suenan igual), pero distinta ortografía y significado.", d:2 },
    { q:"«Botar» significa arrojar o dar botes. ¿Cuál es su homófona que significa «emitir votos»?", opts:["votar","botas","bota","votos"], correct:0, ex:"«Botar» (arrojar) y «votar» (emitir votos) son homófonas.", d:2 },
    { q:"¿Qué significa «cabo» (homófona de «cavo»)?", opts:["Punta o grado militar","Verbo cavar","Un animal","Un color"], correct:0, ex:"«Cabo» = punta o grado militar; «cavo» = del verbo cavar.", d:2 },
    { q:"«Calló» (del verbo callar) suena igual que «cayó». ¿De qué verbo viene «cayó»?", opts:["Caer","Callar","Cazar","Cavar"], correct:0, ex:"«Calló» viene de callar (guardar silencio); «cayó» viene de caer.", d:2 },
    { q:"¿Cuál es el significado de «sede» (homófona de «cede»)?", opts:["Local o lugar","Verbo ceder","Verbo saber","Tener sed"], correct:0, ex:"«Sede» = local o lugar; «cede» = del verbo ceder.", d:2 },
    { q:"«Cepa» significa «tronco de la vid». ¿Cuál es su homófona, del verbo saber?", opts:["sepa","sede","cede","cierra"], correct:0, ex:"«Cepa» (tronco de la vid) y «sepa» (verbo saber) son homófonas.", d:2 },
    { q:"¿Qué significa «ciego» (homófona de «siego»)?", opts:["Invidente (que no ve)","Verbo segar","Cerrar","Un número"], correct:0, ex:"«Ciego» = invidente; «siego» = del verbo segar (cortar mies).", d:2 },
    { q:"«Cierra» viene del verbo cerrar. ¿Qué significa su homófona «sierra»?", opts:["Instrumento de corte (o cadena de montañas)","Verbo cerrar","Un número","Un color"], correct:0, ex:"«Cierra» = verbo cerrar; «sierra» = instrumento de corte.", d:2 },
    { q:"«Cien» es un número. ¿Qué significa su homófona «sien»?", opts:["La frente (parte de la cabeza)","El número 100","Verbo cerrar","Un animal"], correct:0, ex:"«Cien» = número 100; «sien» = parte lateral de la frente.", d:2 },
    { q:"¿Cuál es la diferencia entre «cocer» y «coser»?", opts:["Cocer = cocinar; coser = unir con hilo y aguja","Son la misma palabra","Cocer = coser ropa; coser = cocinar","Ninguna significa nada"], correct:0, ex:"«Cocer» = cocinar; «coser» = unir con hilo y aguja (verbo coser).", d:3 },
    { q:"«Combino» viene del verbo combinar. ¿Qué significa su homófona «convino»?", opts:["Del verbo convenir (acordar)","Una bebida","Un color","Verbo combinar también"], correct:0, ex:"«Combino» = del verbo combinar; «convino» = del verbo convenir (acordar).", d:3 },
    { q:"En la oración «Mañana voy a ___ por mi candidato», ¿qué homófona es correcta?", opts:["votar","botar","botas","bota"], correct:0, ex:"«Votar» = emitir votos (elección). «Botar» sería arrojar algo.", d:3 },
    { q:"«Ella se ___ y nadie supo qué pensaba.» ¿Qué homófona es correcta?", opts:["calló","cayó","cabo","cavo"], correct:0, ex:"«Calló» (del verbo callar = guardó silencio) es la correcta aquí; «cayó» sería del verbo caer.", d:3 },
  ]},

];