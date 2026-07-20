// Datos recopilados de chess.com (chess.com/article/view/womens-world-chess-champions),
// Wikipedia (biografías individuales), FIDE Chess Museum y la Federación de Ajedrez de Aragón
// (Campeonas_del_mundo.pdf). Ver la sección de fuentes al final de la página para más detalle.

export const champions = [
  {
    id: 1,
    name: 'Vera Menchik',
    years: '1927–1944',
    country: 'Reino Unido / Checoslovaquia',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/f/f8/Vera_Menchik_1927_newspaper_photo_%28cropped%29.png',
    opponent: 'Campo de 12 jugadoras (torneo de Londres, 1927)',
    matchDetail:
      'Ganó siete torneos-campeonato consecutivos (Londres 1927 a Buenos Aires 1939) sin perder jamás el título. Su único match individual reconocido por la FIDE fue en 1937, en Semmering, Austria, contra Sonja Graf: lo ganó 11½–4½ en 16 partidas, en unas tres semanas de juego.',
    duration: '17 años de reinado ininterrumpido (1927–1944)',
    funFact:
      'Apodada la "aplanadora": no era una jugadora de golpes brillantes, sino de presión posicional constante hasta quebrar a su rival. Murió en 1944 durante un bombardeo alemán sobre Londres, todavía como campeona invicta.',
    piece: '♟',
  },
  {
    id: 2,
    name: 'Lyudmila Rudenko',
    years: '1950–1953',
    country: 'URSS (Ucrania)',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Lyudmila_Rudenko.jpg',
    opponent: 'Campo de 16 jugadoras de 12 países (Moscú, 1949–1950)',
    matchDetail:
      'Ganó el título con 45 años, en un torneo todos-contra-todos en Moscú, con 9 victorias, 1 derrota y 5 tablas. Perdió la corona en 1953, en Leningrado, ante Elisaveta Bykova: 6–8 en 14 partidas, unas cinco semanas de match.',
    duration: '~3 meses de torneo para ganar el título; 3 años de reinado',
    funFact:
      'Primera campeona mundial de la posguerra. Su estilo era agudo y combinativo, arriesgado hasta la temeridad: cuando le salía bien era imparable, cuando no, se le complicaba el resultado.',
    piece: '♞',
  },
  {
    id: 3,
    name: 'Elisaveta Bykova',
    years: '1953–1956 y 1958–1962',
    country: 'URSS (Rusia)',
    image: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Bykowa%2CJelisaweta.jpeg',
    opponent: 'Lyudmila Rudenko (1953); Olga Rubtsova (1958)',
    matchDetail:
      'Ganó el título en Leningrado 1953 (8–6 en 14 partidas). Lo perdió en 1956 ante Rubtsova en un cuadrangular. Lo recuperó en Moscú 1958 venciendo a Rubtsova 8½–5½, defendió en 1960 ante Kira Zvorykina (8½–4½) y finalmente cayó en 1962 ante una jovencísima Nona Gaprindashvili.',
    duration: '2 reinados: 3 años + 4 años',
    funFact:
      'Fue la primera mujer en recuperar el título mundial tras perderlo. Nona Gaprindashvili describió su juego como sin igual "en el desarrollo de posiciones simples y en el final", con una frialdad y determinación fuera de lo común.',
    piece: '♜',
  },
  {
    id: 4,
    name: 'Olga Rubtsova',
    years: '1956–1958',
    country: 'URSS (Rusia)',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Olga_Rubtsova.jpeg',
    opponent: 'Elisaveta Bykova y Lyudmila Rudenko (cuadrangular, Moscú 1956)',
    matchDetail:
      'Ganó el título en un cuadrangular en Moscú en 1956, superando a Bykova por medio punto (10 vs 9½). Lo perdió en 1958 frente a Bykova, 5½–8½.',
    duration: '2 años de reinado',
    funFact:
      'Es la única persona, hombre o mujer, en haber sido campeona mundial tanto de ajedrez sobre tablero (1956) como de ajedrez por correspondencia (1972): un doble récord único en la historia del juego.',
    piece: '♝',
  },
  {
    id: 5,
    name: 'Nona Gaprindashvili',
    years: '1962–1978',
    country: 'Georgia (URSS)',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/9/93/Wereldkampioene_schaken_de_Russin_Nona_Geprindasjwili_op_Schiphol_%28kop%29%2C_Bestanddeelnr_914-7094_%28cropped%29.jpg',
    opponent: 'Elisaveta Bykova (1962); defendió 4 veces, incl. 3 veces ante Alla Kushnir',
    matchDetail:
      'Ganó el título en Moscú 1962 con un contundente 9–2 en 11 partidas. Defendió la corona ante Alla Kushnir en 1965, 1969 y 1972, y ante Nana Alexandria en 1975, antes de perderla en 1978 en Tbilisi frente a Maia Chiburdanidze, de apenas 17 años (6½–8½ en 15 partidas).',
    duration: '16 años de reinado — el segundo más largo de la historia',
    funFact:
      'Primera mujer en obtener el título de Gran Maestro (a título honorífico, 1978). Conocida por su espíritu combativo y estilo agresivo; jugaba, según sus propias palabras, "sin apuros de tiempo", atraída por la emoción de la batalla.',
    piece: '♛',
  },
  {
    id: 6,
    name: 'Maia Chiburdanidze',
    years: '1978–1991',
    country: 'Georgia (URSS)',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/d/dd/Maia_Tschiburdanidse_1984_Saloniki.jpg',
    opponent: 'Nona Gaprindashvili (1978); defendió 4 veces',
    matchDetail:
      'Ganó el título en Tbilisi en 1978, con 17 años, venciendo a Gaprindashvili 8½–6½ en 15 partidas (7 semanas de match). Defendió ante Nana Alexandria (1981, empate 8–8), Irina Levitina (1984), Elena Ajmilovskaia (1986) y Nana Ioseliani (1988), hasta perder el título en 1991 en Manila ante Xie Jun.',
    duration: '13 años de reinado; fue la campeona más joven de la historia hasta Hou Yifan',
    funFact:
      'Primera mujer en entrar al top 50 mundial absoluto (puesto 48 en 1988). Su estilo se describe como "sólido pero agresivo, bien anclado en los principios clásicos".',
    piece: '♞',
  },
  {
    id: 7,
    name: 'Xie Jun',
    years: '1991–1996 y 1999–2001',
    country: 'China',
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Xie_Jun_1993.jpg',
    opponent: 'Maia Chiburdanidze (1991); Alisa Galliamova (1999)',
    matchDetail:
      'Ganó el título en Manila 1991 (8½–6½, 15 partidas), primera campeona asiática, cerrando 13 años de dominio soviético. Perdió la corona en Jaén 1996 ante Susan Polgar (4½–8½). La recuperó en 1999 venciendo a Alisa Galliamova 8½–6½ en un match disputado entre Kazán y Shenyang. Cedió el título en 2001 sin disputarlo, al no defenderlo.',
    duration: '2 reinados: 5 años + 2 años',
    funFact:
      'Una heroína nacional en China, conocida por su optimismo y un estilo de ataque vívido y directo sobre el tablero.',
    piece: '♛',
  },
  {
    id: 8,
    name: 'Susan Polgar',
    years: '1996–1999',
    country: 'Hungría',
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Susan_Polgar.JPG',
    opponent: 'Xie Jun (1996)',
    matchDetail:
      'Venció a Xie Jun en Jaén, España, en 1996: 8½–4½, cerrando el match en 13 de las 16 partidas previstas. En 1999 la FIDE la declaró en rebeldía (perdió el título sin jugar) tras un desacuerdo sobre las condiciones del match de defensa —incluía su reciente maternidad—; llevó el caso al Tribunal de Arbitraje Deportivo, que en 2001 obligó a la FIDE a cubrir sus costos legales, aunque el título no le fue devuelto.',
    duration: '3 años de reinado',
    funFact:
      'Según su propio biógrafo en la FIDE, "su capacidad para buscar contrajuego activo es impresionante", con un juego de base clásica sólida. Más tarde fundó el Instituto Susan Polgar para la Excelencia en Ajedrez.',
    piece: '♗',
  },
  {
    id: 9,
    name: 'Zhu Chen',
    years: '2001–2004',
    country: 'China / Catar',
    image: 'https://upload.wikimedia.org/wikipedia/commons/b/b0/Zhu_Chen_2011.jpg',
    opponent: 'Alexandra Kosteniuk (final, Moscú 2001)',
    matchDetail:
      'Primer título decidido por el nuevo formato de torneo eliminatorio de 64 jugadoras (Moscú, nov–dic 2001). Venció a Alexandra Kosteniuk en la final 5–3, tras empatar 2–2 en partidas clásicas y definir en desempates rápidos. No defendió el título en 2004 por su embarazo.',
    duration: '3 años de reinado',
    funFact:
      'Hoy es Tesorera de la FIDE. Su repertorio de aperturas —Nimzoindia, Eslava— revela un estilo sólido y posicional más que puramente táctico.',
    piece: '♝',
  },
  {
    id: 10,
    name: 'Antoaneta Stefanova',
    years: '2004–2006',
    country: 'Bulgaria',
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/02/2022-Antoaneta-Stefanova.JPG',
    opponent: 'Ekaterina Kovalevskaya (final, Elista 2004)',
    matchDetail:
      'Ganó el torneo eliminatorio de Elista (Kalmukia, mayo-junio de 2004), venciendo en la final a Ekaterina Kovalevskaya 2½–½. Perdió el título en 2006 frente a Xu Yuhua.',
    duration: '2 años de reinado',
    funFact:
      'Primera campeona mundial búlgara. Conocida por un estilo agresivo: en una célebre victoria de 2005 enrocó largo y lanzó un ataque directo al rey rival hasta forzar la rendición.',
    piece: '♞',
  },
  {
    id: 11,
    name: 'Xu Yuhua',
    years: '2006–2008',
    country: 'China',
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Xu_Yuhua_2008.jpg',
    opponent: 'Alisa Galliamova (final, Ekaterimburgo 2006)',
    matchDetail:
      'Se impuso en el torneo eliminatorio de Ekaterimburgo (marzo de 2006), venciendo en la final a la MI Alisa Galliamova 2½–½. Fue eliminada en segunda ronda del ciclo de 2008, cediendo el título a Alexandra Kosteniuk.',
    duration: '2 años de reinado',
    funFact:
      'Con este resultado alcanzó el título de Gran Maestra. Su repertorio combina líneas afiladas con el blanco y sistemas clásicos sólidos con negras: una mezcla de filo táctico y solidez posicional.',
    piece: '♜',
  },
  {
    id: 12,
    name: 'Alexandra Kosteniuk',
    years: '2008–2010',
    country: 'Rusia / Suiza',
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Alexandra_Kosteniuk_in_June_2026.jpg',
    opponent: 'Hou Yifan, 14 años (final, Nalchik 2008)',
    matchDetail:
      'Ganó el torneo eliminatorio de Nalchik (Rusia, agosto-septiembre de 2008), derrotando en la final a una Hou Yifan de solo 14 años: 2½–1½. Fue eliminada en tercera ronda del ciclo de 2010, perdiendo el título.',
    duration: '2 años de reinado',
    funFact:
      'Primera campeona rusa desde 1962. Destaca por su versatilidad: ha sido campeona mundial también en partidas rápidas (2021) y en dos Campeonatos Fischer Random, algo poco común entre las campeonas clásicas.',
    piece: '♛',
  },
  {
    id: 13,
    name: 'Hou Yifan',
    years: '2010–2012, 2013–2015 y 2016–2017',
    country: 'China',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/3/36/Hou_Yifan_%2829762728494%29_%28cropped%29.jpg',
    opponent: 'Ruan Lufei (2010); Anna Ushenina (2013); Mariya Muzychuk (2016)',
    matchDetail:
      'Ganó el título en Antioquía (Turquía, dic. 2010) con 16 años, tras empatar 2–2 en clásicas y definir 3–1 en rápidas ante Ruan Lufei. Defendió en 2011 ante Koneru Humpy (5½–2½). Recuperó la corona en 2013 ante Anna Ushenina (5½–1½, Taizhou) y de nuevo en 2016 ante Mariya Muzychuk (6–3, Lviv), perdiéndola en los ciclos eliminatorios intermedios de 2012 y 2015.',
    duration: '3 reinados, ~7 años combinados; campeona más joven de la historia (16 años)',
    funFact:
      'En sus matches directos por el título nunca perdió una sola partida: 10 victorias y 14 tablas. Juega 1.e4 con blancas y recurre a la Siciliana Najdorf/Dragón y a la Francesa con negras.',
    piece: '♚',
  },
  {
    id: 14,
    name: 'Anna Ushenina',
    years: '2012–2013',
    country: 'Ucrania',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/d/d4/Ushenina_Anna_%2830273298782%29_%28cropped%29.jpg',
    opponent: 'Antoaneta Stefanova (final, Khanty-Mansisk 2012)',
    matchDetail:
      'Ganó el torneo eliminatorio de Khanty-Mansisk (nov–dic 2012), empatando 2–2 en clásicas ante Stefanova y definiendo en rápidas (agregado 3½–2½). Perdió el título en 2013 frente a Hou Yifan, 1½–5½.',
    duration: '1 año de reinado',
    funFact:
      'Primera campeona mundial ucraniana; ganó el título como una de las cabezas de serie más bajas del cuadro. Pese a triunfos notables sobre grandes maestros varones, ella misma se describe como una jugadora de preferencia sólida y posicional, no de pura pelea táctica.',
    piece: '♝',
  },
  {
    id: 15,
    name: 'Mariya Muzychuk',
    years: '2015–2016',
    country: 'Ucrania',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/7/73/2022-Mariya-Muzychuk_%28cropped%29.JPG',
    opponent: 'Natalia Pogonina (final, Sochi 2015)',
    matchDetail:
      'Ganó el torneo eliminatorio de Sochi (marzo–abril de 2015), venciendo en la final a Natalia Pogonina 2½–1½. Perdió el título en 2016, en su propia Lviv, ante Hou Yifan (3–6).',
    duration: '1 año de reinado',
    funFact:
      'Apodada "Miss Táctica" durante su ciclo mundialista, por su habilidad para encontrar recursos tácticos inesperados incluso en posiciones aparentemente inferiores. Su hermana Anna Muzychuk es también jugadora de nivel mundial.',
    piece: '♞',
  },
  {
    id: 16,
    name: 'Tan Zhongyi',
    years: '2017–2018',
    country: 'China',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/TanZhongyi23.jpg',
    opponent: 'Anna Muzychuk (final, Teherán 2017)',
    matchDetail:
      'Ganó el torneo eliminatorio de Teherán (feb–mar de 2017), empatando 2–2 en clásicas con Anna Muzychuk y definiendo en desempate rápido. Perdió el título en 2018 frente a Ju Wenjun (4½–5½, Shanghái/Chongqing) y volvió a disputarlo —sin éxito— en la revancha de 2025 (2½–6½).',
    duration: '1 año de reinado',
    funFact:
      '"Hay dos tipos de combate: uno es el ajedrez, y el otro es la psicología", ha dicho sobre su enfoque del juego: preparación profunda de aperturas para generar problemas de tiempo al rival, y disposición a sacrificar material por la iniciativa.',
    piece: '♟',
  },
  {
    id: 17,
    name: 'Ju Wenjun',
    years: '2018–presente',
    country: 'China',
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/c6/Ju_Wenjun_in_2024_%28cropped%29.jpg',
    opponent: 'Tan Zhongyi (2018 y 2025); Aleksandra Goryachkina (2020); Lei Tingjie (2023)',
    matchDetail:
      'Ganó el título en mayo de 2018 ante Tan Zhongyi (5½–4½, Shanghái/Chongqing) y lo revalidó ese mismo año en el torneo eliminatorio de noviembre ante Kateryna Lagno. Defendió en 2020 ante Goryachkina (empate 6–6, rápidas 2½–1½), en 2023 ante Lei Tingjie (6½–5½) y en 2025 de nuevo ante Tan Zhongyi, ganando 6½–2½ en solo 9 de las 12 partidas previstas (Shanghái y Chongqing, abril de 2025).',
    duration: '5 títulos mundiales y contando — reinado vigente desde 2018',
    funFact:
      'Junto con Vera Menchik, es una de las dos únicas campeonas en ganar dos campeonatos mundiales el mismo año (2018). Juego técnico y posicional: construye pequeñas ventajas con método y convierte finales con precisión quirúrgica.',
    piece: '♛',
  },
]

export const sources = [
  {
    label: 'Chess.com — Women\'s World Chess Champions',
    url: 'https://www.chess.com/article/view/womens-world-chess-champions',
  },
  {
    label: 'Federación de Ajedrez de Aragón — Campeonas del mundo (PDF)',
    url:
      'https://www.ajedrezaragon.org/uploads/33029a9e-a372-4801-926b-324a0b499a7c/Campeonas_del_mundo.pdf',
  },
  {
    label: 'FIDE — Women\'s World Chess Championship 2025',
    url: 'https://womenworldchampionship2025.fide.com/',
  },
]
