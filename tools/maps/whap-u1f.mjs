// Map specs for the AP World History Unit 1 topic quizzes, quality pass u1f (drawn by tools/build-maps.mjs).
// Coordinates are [longitude, latitude]. Every place, date, and route here is a claim the site makes: each map lists the
// references it was checked against. Routes are drawn as approximate lines, and the legends say so.

const neighbors = {
  id: "u1f-east-asia-neighbors",
  caption: "China's neighbors, c. 1200 to c. 1450: capitals, civil service examinations, and who held power (sea route approximate)",
  alt: "Map of East Asia from northern Vietnam to Japan. Nanjing, in China, is marked as the Ming capital from 1368. Hanseong (Seoul) in Korea is marked as the Joseon capital, with the note that Korea held civil service examinations from 958 and that the Joseon state, founded in 1392, made neo-Confucianism its official philosophy. Thang Long (Hanoi), the capital of Dai Viet, is marked with the notes that Dai Viet held examinations from 1075 and was occupied by Ming armies from 1407 to 1427. In Japan, Kyoto is marked as the emperor's court and the seat of the Ashikaga shoguns from 1336, and Kamakura as the shoguns' capital from 1185 to 1333. A label south of Japan says that shoguns and warrior families held power there and that Japan had no examination system. A dotted sea route links Ningbo, on the Chinese coast, where Japanese monks studied Chan (Zen) Buddhism at monasteries, with the island of Kyushu in Japan.",
  bbox: [101, 15, 142, 44], width: 640, height: 560,
  regions: [
    { name: "CHINA", at: [112.0, 31.5], size: 13 },
    { name: "KOREA", at: [127.2, 41.6], size: 11 },
    { name: "JAPAN: rule by shoguns and", at: [134.0, 30.0], size: 10 },
    { name: "warrior families; no examinations", at: [134.0, 29.1], size: 10 },
    { name: "DAI VIET", at: [104.6, 18.6], size: 11 },
    { name: "Yellow Sea", at: [123.4, 35.2], size: 10 }, { name: "East China Sea", at: [125.5, 27.5], size: 10 },
    { name: "South China Sea", at: [115.5, 17.5], size: 11 }, { name: "Pacific Ocean", at: [136.5, 24.5], size: 11 },
  ],
  routes: [
    { kind: "sea", through: [[121.9, 29.9], [124.5, 31.2], [127.5, 32.6], [129.9, 33.6]] },
  ],
  places: [
    { name: "Nanjing\nMing capital from 1368", at: [118.78, 32.06], kind: "major", label: "left" },
    { name: "Ningbo\nChan (Zen) monasteries where\nJapanese monks studied", at: [121.55, 29.87], label: [-8, 16] },
    { name: "Hanseong (Seoul), Joseon capital\nKorea: examinations from 958;\nneo-Confucian state from 1392", at: [126.98, 37.57], kind: "major", label: [-8, -40] },
    { name: "Thang Long (Hanoi)\nDai Viet capital; examinations\nfrom 1075; Ming occupation,\n1407 to 1427", at: [105.85, 21.03], kind: "major", label: [8, 4] },
    { name: "Kyoto\nemperor's court; Ashikaga\nshoguns from 1336", at: [135.77, 35.01], kind: "major", label: [-4, 18] },
    { name: "Kamakura\nshoguns' capital,\n1185 to 1333", at: [139.55, 35.32], kind: "major", label: [0, -44] },
  ],
  legend: [{ kind: "major", text: "Capital or court" }, { kind: "city", text: "Port" }, { kind: "sea", text: "Monks' sea route (approximate)" }],
  legendAt: "bottom-right", legendWidth: 250,
  checked: ["Columbia University, Asia for Educators, \"1000 to 1450: Intensified Hemispheric Interactions\" (Korea and Japan pages)", "Wikipedia, \"Gwageo\", \"Joseon\", \"Lý dynasty\", \"Fourth Era of Northern Domination\", \"Ashikaga shogunate\", \"Eisai\", and \"Tiantong Temple\""],
};

const church = {
  id: "u1f-latin-church",
  caption: "The Church in Latin Europe, 1209 to 1378: seats of the popes, a crusade against Christians the Church called heretics, and three great pilgrimage shrines",
  alt: "Map of western Europe from Spain and England to Italy. Rome is marked as the city of the popes, where the Fourth Lateran Council met in 1215 and ordered Jews and Muslims in Christian lands to wear distinctive dress. Avignon, in southern France, is marked as the home of the popes from 1309 to 1376 and of rival popes from 1378. An X marks Beziers, in southern France, where crusaders sent by the pope against the Cathars sacked the town in 1209. Small dots mark three pilgrimage shrines that drew Christians from many kingdoms: Santiago de Compostela in northwestern Spain, the shrine of Saint James; Canterbury in England, the shrine of Saint Thomas Becket; and Cologne in the Holy Roman Empire, the shrine of the Three Kings. The names of the kingdoms of England, France, Castile, and the Holy Roman Empire are written across their lands.",
  bbox: [-10, 36, 16, 55], width: 600, height: 560,
  regions: [
    { name: "ENGLAND", at: [-1.6, 52.6], size: 11 }, { name: "FRANCE", at: [2.0, 47.0], size: 12 },
    { name: "CASTILE", at: [-4.0, 40.6], size: 11 }, { name: "HOLY ROMAN EMPIRE", at: [11.5, 48.6], size: 11 },
    { name: "Mediterranean Sea", at: [4.5, 39.6], size: 11 }, { name: "Atlantic Ocean", at: [-7.5, 47.0], size: 11 },
    { name: "North Sea", at: [3.5, 54.2], size: 10 },
  ],
  places: [
    { name: "Rome\ncity of the popes; Fourth Lateran\nCouncil, 1215, ordered Jews and\nMuslims to wear distinctive dress", at: [12.5, 41.9], kind: "major", label: [-8, 18] },
    { name: "Avignon\npopes lived here 1309 to 1376;\nrival popes from 1378", at: [4.81, 43.95], kind: "major", label: [8, -18] },
    { name: "Beziers 1209\ncrusade against the Cathars", at: [3.22, 43.34], kind: "battle", label: [-8, 16] },
    { name: "Santiago de Compostela\nshrine of Saint James", at: [-8.54, 42.88], label: [8, -16] },
    { name: "Canterbury\nshrine of Saint Thomas Becket", at: [1.08, 51.28], label: [-8, 18] },
    { name: "Cologne\nshrine of the Three Kings", at: [6.96, 50.94], label: "right" },
  ],
  legend: [{ kind: "major", text: "Seat of the popes" }, { kind: "battle", text: "Crusade against Christians called heretics" }, { kind: "city", text: "Pilgrimage shrine" }],
  legendAt: "bottom-right", legendWidth: 300,
  checked: ["the Internet Medieval Sourcebook, Fordham University, \"Twelfth Ecumenical Council: Lateran IV 1215\" (canon 68)", "Wikipedia, \"Albigensian Crusade\", \"Avignon Papacy\", and \"Camino de Santiago\""],
};

export const maps = [neighbors, church];
