/* ============================================================
   BANCO DE PREGUNTAS — HISTORIA (5° grado, 3er trimestre)
   "De los Caudillos al Presidencialismo"
   Basado EXCLUSIVAMENTE en el temario proporcionado.
   6 temas. Cada tema cubre TODO su contenido.
   Formato por carta: { q, opts:[], correct:<idx>, ex, d:<1-3> }
   (Deuda Externa se OMITE: el temario no traía texto, solo banderas.)
   ============================================================ */
const TEMAS = [

  /* =======================================================
     1) DE LOS CAUDILLOS AL PRESIDENCIALISMO (Carranza)
     ======================================================= */
  { name:"DEL CAUDILLO AL PRESIDENTE", icon:"🏛️", q:[
    { q:"¿Quién se convirtió en presidente de México el 1 de mayo de 1917 al ganar las elecciones por el Partido Liberal Constitucionalista?", opts:["Venustiano Carranza","Francisco I. Madero","Emiliano Zapata","Álvaro Obregón"], correct:0, ex:"Venustiano Carranza llegó a la presidencia el 1 de mayo de 1917, representando al Partido Liberal Constitucionalista.", d:1 },
    { q:"¿Por cuál partido ganó las elecciones Venustiano Carranza?", opts:["Partido Liberal Constitucionalista","Partido Acción Nacional","Partido Revolucionario Institucional","Partido de la Revolución Democrática"], correct:0, ex:"Carranza ganó como representante del Partido Liberal Constitucionalista.", d:2 },
    { q:"Durante su gobierno, ¿qué se le reconoce a Carranza haber hecho?", opts:["Pacificar el país, reorganizar la administración y los poderes, y hacer valer la Constitución","Iniciar la Revolución con el Plan de San Luis","Repartir tierras con el Plan de Ayala","Expropiar el petróleo"], correct:0, ex:"A Carranza se le reconoce pacificar el país, reorganizar la administración y los poderes, y hacer valer la Constitución de 1917.", d:2 },
    { q:"¿En qué fecha exacta fue promulgada la Constitución que Carranza hizo valer?", opts:["5 de febrero de 1917","1 de mayo de 1917","20 de noviembre de 1910","18 de marzo de 1938"], correct:0, ex:"La Constitución fue promulgada el 5 de febrero de 1917; Carranza llegó a la presidencia poco después, el 1 de mayo de 1917.", d:2 },
    { q:"La Constitución de 1917 que promovió Carranza, ¿sigue vigente hoy?", opts:["Sí, sigue vigente","No, fue reemplazada en 1940","No, nunca se aplicó","Solo se usó durante la Revolución"], correct:0, ex:"La Constitución de 1917 sigue vigente actualmente.", d:1 },
  ]},

  /* =======================================================
     2) LOS CAUDILLOS REVOLUCIONARIOS (¿Quién fue?)
     ======================================================= */
  { name:"LOS CAUDILLOS REVOLUCIONARIOS", icon:"🐎", q:[
    // Madero
    { q:"¿Quién inició la Revolución con el Plan de San Luis, llamando al pueblo a levantarse en armas el 20 de noviembre de 1910?", opts:["Francisco I. Madero","Emiliano Zapata","Francisco Villa","Álvaro Obregón"], correct:0, ex:"Francisco I. Madero inició la Revolución con el Plan de San Luis, que llamaba a levantarse en armas el 20 de noviembre de 1910.", d:1 },
    { q:"¿Con qué Plan inició Francisco I. Madero la Revolución Mexicana?", opts:["El Plan de San Luis","El Plan de Ayala","El Plan de Guadalupe","El Plan de Celaya"], correct:0, ex:"Madero proclamó el Plan de San Luis, que convocaba al levantamiento armado el 20 de noviembre de 1910.", d:2 },
    { q:"¿Qué le ocurrió a Francisco I. Madero, que fue presidente en 1911?", opts:["Fue asesinado en 1913 tras un golpe de Estado","Murió de viejo siendo presidente","Renunció y se exilió","Ganó la Batalla de Celaya"], correct:0, ex:"Madero fue presidente en 1911, pero fue asesinado en 1913 tras un golpe de Estado.", d:2 },
    { q:"Madero proclamó el Plan de San Luis. ¿En qué lugar?", opts:["San Luis Potosí","Morelos","Chihuahua","Sonora"], correct:0, ex:"El lugar asociado a Madero y su Plan es San Luis Potosí.", d:2 },
    // Zapata
    { q:"¿Quién luchó por los derechos de los campesinos y la restitución de tierras con su Plan de Ayala?", opts:["Emiliano Zapata","Venustiano Carranza","Álvaro Obregón","Francisco I. Madero"], correct:0, ex:"Emiliano Zapata luchó por los campesinos y la restitución de tierras con el Plan de Ayala.", d:1 },
    { q:"¿De quién es la frase famosa «La tierra es de quien la trabaja»?", opts:["Emiliano Zapata","Pancho Villa","Lázaro Cárdenas","Venustiano Carranza"], correct:0, ex:"«La tierra es de quien la trabaja» es la frase famosa de Emiliano Zapata.", d:1 },
    { q:"¿En qué región del país luchó principalmente Emiliano Zapata?", opts:["El sur, principalmente Morelos","El norte, en Chihuahua","Sonora","Coahuila"], correct:0, ex:"Zapata luchó en el sur del país, principalmente en Morelos.", d:2 },
    { q:"¿Qué Plan proclamó Emiliano Zapata para defender a los campesinos?", opts:["El Plan de Ayala","El Plan de San Luis","El Plan de Guadalupe","El Plan de Celaya"], correct:0, ex:"Zapata proclamó el Plan de Ayala, que exigía la restitución de tierras a los campesinos.", d:2 },
    // Villa
    { q:"¿Quién lideró el ejército del norte conocido como la «División del Norte»?", opts:["Francisco Villa (Pancho Villa)","Emiliano Zapata","Venustiano Carranza","Francisco I. Madero"], correct:0, ex:"Pancho Villa lideró la División del Norte, defendiendo la justicia social y a campesinos y obreros.", d:1 },
    { q:"¿Cómo se llamaba el ejército que lideró Francisco Villa?", opts:["La División del Norte","El Ejército Libertador del Sur","El Ejército Constitucionalista","La Brigada de Celaya"], correct:0, ex:"Villa lideró la División del Norte en el norte del país.", d:2 },
    { q:"¿En qué región luchó principalmente Pancho Villa?", opts:["El norte, principalmente Chihuahua","El sur, en Morelos","Sonora","Coahuila"], correct:0, ex:"Villa operó en el norte del país, principalmente en Chihuahua.", d:2 },
    { q:"¿En derrotar a qué régimen fue clave Francisco Villa?", opts:["El régimen de Victoriano Huerta","El gobierno de Carranza","El gobierno de Madero","El régimen de Calles"], correct:0, ex:"Villa fue clave en derrotar al régimen de Victoriano Huerta.", d:2 },
    // Carranza (como caudillo)
    { q:"¿Quién se rebeló contra Victoriano Huerta con el Plan de Guadalupe?", opts:["Venustiano Carranza","Emiliano Zapata","Pancho Villa","Francisco I. Madero"], correct:0, ex:"Carranza se rebeló contra Huerta con el Plan de Guadalupe y luego organizó el Congreso Constituyente de 1917.", d:2 },
    { q:"¿Qué congreso organizó Carranza, del cual salió la Constitución?", opts:["El Congreso Constituyente de 1917","El Plan de Ayala","La Batalla de Celaya","El Congreso de Anáhuac"], correct:0, ex:"Carranza organizó el Congreso Constituyente de 1917, origen de la Constitución vigente.", d:3 },
    { q:"¿Qué lugar (estado) se asocia con Venustiano Carranza?", opts:["Coahuila","Morelos","Chihuahua","San Luis Potosí"], correct:0, ex:"Carranza se asocia con Coahuila.", d:2 },
    // Obregón
    { q:"¿Quién fue el militar clave en el triunfo del constitucionalismo y derrotó a Villa en la Batalla de Celaya (1915)?", opts:["Álvaro Obregón","Emiliano Zapata","Francisco I. Madero","Plutarco Elías Calles"], correct:0, ex:"Álvaro Obregón fue clave para el constitucionalismo y derrotó a Villa en la Batalla de Celaya en 1915.", d:2 },
    { q:"¿En qué año fue Álvaro Obregón presidente de México?", opts:["1920","1911","1917","1934"], correct:0, ex:"Obregón fue presidente de México en 1920.", d:2 },
    { q:"¿En qué batalla de 1915 derrotó Obregón a Pancho Villa?", opts:["La Batalla de Celaya","La Batalla de Puebla","La Toma de Zacatecas","La Batalla del Ébano"], correct:0, ex:"Obregón derrotó a Villa en la Batalla de Celaya en 1915.", d:2 },
    { q:"¿Qué lugar (estado) se asocia con Álvaro Obregón?", opts:["Sonora","Morelos","Coahuila","Chihuahua"], correct:0, ex:"Obregón se asocia con Sonora.", d:2 },
    // Síntesis / emparejamiento
    { q:"Empareja correctamente caudillo y lugar:", opts:["Zapata = Morelos · Villa = Chihuahua · Obregón = Sonora","Zapata = Sonora · Villa = Morelos · Obregón = Chihuahua","Zapata = Chihuahua · Villa = Coahuila · Obregón = Morelos","Zapata = Coahuila · Villa = Sonora · Obregón = San Luis Potosí"], correct:0, ex:"Zapata→Morelos (sur), Villa→Chihuahua (norte), Obregón→Sonora. Madero→San Luis Potosí, Carranza→Coahuila.", d:3 },
    { q:"Empareja correctamente caudillo y Plan:", opts:["Madero = Plan de San Luis · Zapata = Plan de Ayala · Carranza = Plan de Guadalupe","Madero = Plan de Ayala · Zapata = Plan de Guadalupe · Carranza = Plan de San Luis","Madero = Plan de Guadalupe · Zapata = Plan de San Luis · Carranza = Plan de Ayala","Madero = Plan de Celaya · Zapata = Plan de San Luis · Carranza = Plan de Ayala"], correct:0, ex:"Madero→Plan de San Luis, Zapata→Plan de Ayala, Carranza→Plan de Guadalupe.", d:3 },
  ]},

  /* =======================================================
     3) LA REBELIÓN CRISTERA
     ======================================================= */
  { name:"LA REBELIÓN CRISTERA", icon:"✝️", q:[
    { q:"¿Contra las políticas de qué presidente lucharon los cristeros?", opts:["Plutarco Elías Calles","Lázaro Cárdenas","Venustiano Carranza","Manuel Ávila Camacho"], correct:0, ex:"Los cristeros lucharon contra las políticas de intolerancia religiosa del gobierno de Plutarco Elías Calles.", d:2 },
    { q:"¿Por qué lucharon los cristeros?", opts:["Contra las políticas de intolerancia religiosa del gobierno","Por la restitución de tierras","Por nacionalizar el petróleo","Por entrar a la Segunda Guerra Mundial"], correct:0, ex:"Los cristeros se levantaron contra las políticas de intolerancia religiosa promulgadas por el gobierno de Calles.", d:1 },
    { q:"La Guerra Cristera tuvo dos bandos. ¿Quiénes formaban el bando católico?", opts:["Obispos, intelectuales y cristeros (combatientes armados)","El gobierno y el Ejército Federal","Los campesinos de Morelos","La División del Norte"], correct:0, ex:"El bando católico estaba formado por obispos, intelectuales y los cristeros (combatientes armados).", d:2 },
    { q:"¿Quiénes formaban el otro bando, contra los cristeros?", opts:["El gobierno y el Ejército Federal","Los obispos","Los intelectuales","Los campesinos"], correct:0, ex:"El otro bando lo formaban el gobierno y el Ejército Federal.", d:2 },
    { q:"¿Cuántos años duró el enfrentamiento de la Guerra Cristera?", opts:["De 1926 a 1929 (tres años)","De 1910 a 1917","De 1934 a 1938","De 1942 a 1945"], correct:0, ex:"La Guerra Cristera duró de 1926 a 1929.", d:2 },
    { q:"¿Cuál fue el saldo aproximado de pérdidas humanas de la Guerra Cristera?", opts:["Aproximadamente 250,000","Aproximadamente 5,000","Aproximadamente 1 millón","Aproximadamente 50,000"], correct:0, ex:"El conflicto dejó un saldo aproximado de 250,000 pérdidas humanas.", d:3 },
    { q:"¿Cómo terminó la Guerra Cristera?", opts:["El episcopado y el gobierno se pusieron de acuerdo mediante «arreglos» para establecer la paz","Con la victoria total de los cristeros","Con la rendición del gobierno","Con la intervención de Estados Unidos"], correct:0, ex:"Terminó cuando el episcopado y el gobierno llegaron a «arreglos» para establecer la paz.", d:2 },
  ]},

  /* =======================================================
     4) HISTORIA DE PARTIDOS
     ======================================================= */
  { name:"HISTORIA DE PARTIDOS", icon:"🗳️", q:[
    { q:"¿Desde qué año se identifica al Partido Revolucionario Institucional (PRI)?", opts:["Desde 1946","Desde 1939","Desde 1989","Desde 1997"], correct:0, ex:"El PRI se identifica desde 1946; a partir de los años 1940 el partido fue testigo del crecimiento económico de México.", d:2 },
    { q:"A partir de los años 1940, ¿de qué fue testigo el PRI en México?", opts:["Del crecimiento económico","De la Revolución","De la Guerra Cristera","De la expropiación petrolera"], correct:0, ex:"A partir de los años 1940 el PRI fue testigo del crecimiento económico en México.", d:2 },
    { q:"¿En qué año fue fundado el Partido Acción Nacional (PAN)?", opts:["1939","1946","1989","1986"], correct:0, ex:"El PAN fue fundado en 1939 como alternativa opositora al poder posrevolucionario.", d:2 },
    { q:"¿Como qué se consolidó el PAN desde su fundación?", opts:["Como el principal partido opositor en México","Como el partido en el poder","Como un partido ecologista","Como un movimiento campesino"], correct:0, ex:"Desde su fundación en 1939, el PAN se consolidó como el principal partido opositor en México.", d:2 },
    { q:"¿Quién fundó el Partido de la Revolución Democrática (PRD)?", opts:["Cuauhtémoc Cárdenas Solórzano","Plutarco Elías Calles","Lázaro Cárdenas","Venustiano Carranza"], correct:0, ex:"El PRD fue fundado por Cuauhtémoc Cárdenas Solórzano el 5 de mayo de 1989.", d:2 },
    { q:"¿En qué fecha fue fundado el PRD?", opts:["5 de mayo de 1989","9 de febrero de 1991","1 de agosto de 1999","1939"], correct:0, ex:"El PRD fue fundado el 5 de mayo de 1989.", d:3 },
    { q:"El Partido Verde Ecologista de México (PVEM) fue fundado como organización civil en 1986. ¿Bajo qué nombre original?", opts:["Partido Verde Mexicano (PVM)","Convergencia por la Democracia","Partido Ecologista de México","Movimiento Ciudadano"], correct:0, ex:"El PVEM nació en 1986 como organización civil con el nombre de Partido Verde Mexicano (PVM).", d:3 },
    { q:"¿En qué año obtuvo el PVEM su registro ante el IFE (como Partido Ecologista de México)?", opts:["9 de febrero de 1991","1986","1989","1999"], correct:0, ex:"El PVEM obtuvo su registro ante el IFE el 9 de febrero de 1991, bajo el nombre de Partido Ecologista de México (PEM).", d:3 },
    { q:"El partido Movimiento Ciudadano (MC) fue fundado en 1997. ¿Bajo qué nombre original?", opts:["Convergencia por la Democracia","Partido Verde Mexicano","Partido Acción Nacional","Partido de la Revolución Democrática"], correct:0, ex:"MC fue fundado en 1997 como agrupación política llamada Convergencia por la Democracia.", d:3 },
    { q:"¿Cómo evolucionó el nombre del partido Movimiento Ciudadano?", opts:["Convergencia por la Democracia → Convergencia (2002) → Movimiento Ciudadano (2011)","Movimiento Ciudadano → Convergencia → PVEM","PAN → Convergencia → MC","PRD → Convergencia → MC"], correct:0, ex:"Empezó como Convergencia por la Democracia (1997), se acortó a Convergencia en 2002, y cambió a Movimiento Ciudadano en 2011.", d:3 },
    { q:"Empareja partido y año de fundación:", opts:["PAN = 1939 · PRD = 1989 · MC = 1997","PAN = 1989 · PRD = 1939 · MC = 1946","PAN = 1946 · PRD = 1997 · MC = 1939","PAN = 1997 · PRD = 1986 · MC = 1989"], correct:0, ex:"PAN→1939, PRD→1989, MC→1997 (como Convergencia). El PVEM nació en 1986.", d:3 },
  ]},

  /* =======================================================
     5) MÉXICO EN LA SEGUNDA GUERRA MUNDIAL
     ======================================================= */
  { name:"MÉXICO EN LA 2ª GUERRA MUNDIAL", icon:"🌊", q:[
    { q:"En la Segunda Guerra Mundial, ¿de qué postura pasó México a un involucramiento activo?", opts:["De la neutralidad a apoyar a los países Aliados","De aliado a neutral","De atacar a defender","De ganador a perdedor"], correct:0, ex:"México pasó de una postura de neutralidad a un involucramiento activo en favor de los Aliados.", d:2 },
    { q:"¿En qué año cambió México su postura y se involucró en la guerra?", opts:["1942","1917","1938","1929"], correct:0, ex:"El cambio ocurrió en 1942, tras los ataques a embarcaciones petroleras mexicanas.", d:2 },
    { q:"¿Qué provocó que México entrara a la Segunda Guerra Mundial?", opts:["Submarinos alemanes atacaron embarcaciones petroleras mexicanas en el Golfo de México","Un ataque de Estados Unidos","La Guerra Cristera","La expropiación petrolera"], correct:0, ex:"Submarinos alemanes atacaron buques petroleros mexicanos en el Golfo de México, lo que provocó la entrada de México a la guerra.", d:2 },
    { q:"¿Cómo se llamaban las embarcaciones petroleras mexicanas atacadas por submarinos alemanes?", opts:["El Potrero del Llano y el Faja de Oro","El Potrero del Llano y el Águila Azteca","El Faja de Oro y el Cuauhtémoc","El Anáhuac y el Morelos"], correct:0, ex:"Los buques atacados fueron el Potrero del Llano y el Faja de Oro.", d:3 },
    { q:"¿Qué presidente declaró la guerra en nombre de México?", opts:["Manuel Ávila Camacho","Lázaro Cárdenas","Plutarco Elías Calles","Venustiano Carranza"], correct:0, ex:"El presidente Manuel Ávila Camacho declaró la guerra el 22 de mayo de 1942.", d:2 },
    { q:"¿En qué fecha declaró México la guerra durante la Segunda Guerra Mundial?", opts:["22 de mayo de 1942","18 de marzo de 1938","5 de febrero de 1917","20 de noviembre de 1910"], correct:0, ex:"Ávila Camacho declaró la guerra el 22 de mayo de 1942.", d:3 },
    { q:"¿A favor de qué bando participó México en la Segunda Guerra Mundial?", opts:["De los países Aliados","De las Potencias del Eje","De ninguno, se mantuvo neutral","De Alemania"], correct:0, ex:"México participó en favor de los países Aliados.", d:1 },
  ]},

  /* =======================================================
     6) LA EXPROPIACIÓN PETROLERA
     ======================================================= */
  { name:"LA EXPROPIACIÓN PETROLERA", icon:"🛢️", q:[
    { q:"¿Qué presidente llegó al poder en 1934 y promovió la creación de sindicatos para proteger a los trabajadores?", opts:["Lázaro Cárdenas","Plutarco Elías Calles","Manuel Ávila Camacho","Álvaro Obregón"], correct:0, ex:"Lázaro Cárdenas llegó a la presidencia en 1934 y promovió la creación de sindicatos para proteger a los trabajadores.", d:2 },
    { q:"¿En qué año llegó Lázaro Cárdenas a la presidencia?", opts:["1934","1917","1942","1920"], correct:0, ex:"Cárdenas llegó a la presidencia en 1934.", d:2 },
    { q:"¿De la lucha de qué sindicato surgió la decisión de nacionalizar el petróleo?", opts:["El sindicato de los petroleros","El sindicato de los maestros","El sindicato de los campesinos","El sindicato de los mineros"], correct:0, ex:"De la lucha del sindicato de los petroleros se llegó a la decisión de nacionalizar el petróleo.", d:2 },
    { q:"¿En qué fecha exacta leyó Cárdenas el decreto de expropiación petrolera?", opts:["18 de marzo de 1938","22 de mayo de 1942","5 de febrero de 1917","1 de mayo de 1917"], correct:0, ex:"El 18 de marzo de 1938, a las 10 de la noche, Cárdenas leyó el decreto de expropiación por radio nacional.", d:2 },
    { q:"¿Por qué medio dio Cárdenas a conocer el decreto de expropiación?", opts:["Por radio nacional","Por carta a los petroleros","Por el periódico únicamente","En el Congreso"], correct:0, ex:"Cárdenas leyó el decreto por radio nacional el 18 de marzo de 1938 a las 10 de la noche.", d:2 },
    { q:"¿Qué artículo constitucional se hizo válido con el decreto de expropiación petrolera?", opts:["El artículo 27 constitucional","El artículo 3 constitucional","El artículo 123 constitucional","El artículo 5 constitucional"], correct:0, ex:"Con el decreto se hizo válido el artículo 27 constitucional.", d:3 },
    { q:"¿Qué hizo Cárdenas con el petróleo de México?", opts:["Lo nacionalizó (expropiación petrolera)","Lo vendió a Estados Unidos","Lo dejó en manos extranjeras","Lo regaló a los sindicatos"], correct:0, ex:"Cárdenas nacionalizó el petróleo: la expropiación petrolera del 18 de marzo de 1938.", d:1 },
  ]},

];