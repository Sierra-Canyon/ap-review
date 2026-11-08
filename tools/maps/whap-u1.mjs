// Map specs for AP World History Unit 1 topic quizzes and the Unit 1 assessment (drawn by tools/build-maps.mjs).
// Coordinates are [longitude, latitude]. Every place, date, and route here is a claim the site makes: each map lists the
// references it was checked against. Routes and borders are drawn as approximate lines, and the legends say so.

const song = {
  id: "u1-song-jin",
  caption: "China under the Southern Song and the Jin, c. 1160 (canal and border approximate)",
  alt: "Map of eastern China and the lands to its south. Kaifeng, on the Yellow River plain in the north, is marked as the Song capital from 960 to 1127. Zhongdu, near modern Beijing, is marked as the Jin capital from 1153. A dashed line along the Huai River and the Qinling Mountains marks the border of 1142: the Jin, a Jurchen state, ruled north of it, and the Southern Song ruled south of it. Hangzhou, near the coast south of the Yangzi River, is marked as the Southern Song capital. A canal line runs from Hangzhou north through Suzhou and Yangzhou, crosses the Huai River, and continues northwest to Kaifeng. The ports of Quanzhou and Guangzhou are on the southeast coast, and Champa, far to the south on the coast of what is now Vietnam, is marked as the source of fast-ripening rice.",
  bbox: [102, 11, 124, 42], width: 560, height: 640,
  regions: [
    { name: "JIN", at: [111.0, 37.6], size: 13 }, { name: "(Jurchen)", at: [111.0, 36.5], size: 10 },
    { name: "SOUTHERN SONG", at: [110.6, 27.6], size: 13 },
    { name: "Yellow Sea", at: [122.6, 35.4], size: 11 }, { name: "East China Sea", at: [123.4, 27.8], size: 10 },
    { name: "South China Sea", at: [115.0, 17.0], size: 11 },
  ],
  routes: [
    // Jiangnan canal and the canal north of the Yangzi to the Huai, then the Bian canal northwest to Kaifeng
    { through: [[120.16, 30.27], [120.62, 31.3], [119.97, 31.81], [119.45, 32.2], [119.41, 32.39], [119.45, 32.78], [119.15, 33.5], [118.55, 33.0], [117.5, 33.55], [116.98, 33.64], [115.65, 34.41], [114.31, 34.8]] },
    // the Qinling and Huai line of 1142
    { kind: "route2", through: [[106.9, 34.25], [108.5, 33.85], [110.5, 33.2], [112.0, 32.75], [113.3, 32.4], [114.5, 32.3], [115.4, 32.43], [116.99, 32.63], [117.36, 32.94], [118.55, 33.0], [119.15, 33.5], [120.3, 34.1]] },
  ],
  places: [
    { name: "Zhongdu (Beijing)\nJin capital from 1153", at: [116.4, 39.9], label: "right" },
    { name: "Kaifeng\nSong capital, 960 to 1127", at: [114.31, 34.8], kind: "major", label: [-8, -14] },
    { name: "Yangzhou", at: [119.41, 32.39], label: "left" },
    { name: "Suzhou", at: [120.62, 31.3], label: "right" },
    { name: "Hangzhou\nSouthern Song capital", at: [120.16, 30.27], kind: "major", label: [-8, 14] },
    { name: "Quanzhou (port)", at: [118.59, 24.91], label: "right" },
    { name: "Guangzhou (port)", at: [113.26, 23.13], label: "left" },
    { name: "Champa\n(source of fast-ripening rice)", at: [109.1, 13.9], label: "left" },
  ],
  legend: [{ kind: "route", text: "Grand Canal (approximate)" }, { kind: "route2", text: "Jin and Song border, 1142 (approximate)" }, { kind: "major", text: "Song capital" }],
  legendAt: "bottom-right", legendWidth: 285,
  checked: ["Encyclopaedia Britannica, \"Hangzhou\" (summary) and \"Old Bian Canal\"", "Wikipedia, \"Treaty of Shaoxing\", \"Lin'an Prefecture\", \"Grand Canal (China)\", \"Caoyun system\", and \"Champa rice\""],
};

const turkic = {
  id: "u1-turkic-states",
  caption: "Turkic and Mongol rulers in Dar al-Islam, 1206 to 1336",
  alt: "Map from Egypt and Anatolia east to northern India. Large dots mark the capitals of Muslim states founded by Turkic rulers: Konya, capital of the Seljuk sultanate of Rum in Anatolia; Cairo, where the Mamluk sultanate began in 1250; Delhi, where the Delhi Sultanate began in 1206; and Bursa, taken by the Ottomans in 1326 and made their capital. An X marks Baghdad, taken by the Mongols in 1258, and another X marks Ain Jalut in Palestine, where the Mamluks defeated the Mongols in 1260. A small dot marks Tabriz, capital of the Mongol Ilkhanate in Iran, whose rulers became Muslim in 1295.",
  bbox: [26, 22, 80, 44], width: 700, height: 400,
  regions: [
    { name: "ANATOLIA", at: [34.5, 39.4], size: 10 }, { name: "EGYPT", at: [29.5, 26.0], size: 10 },
    { name: "ARABIA", at: [45.0, 25.0], size: 10 }, { name: "IRAN", at: [58.0, 33.5], size: 10 },
    { name: "INDIA", at: [76.0, 24.2], size: 10 }, { name: "Mediterranean Sea", at: [29.0, 34.3], size: 10 },
    { name: "Caspian Sea", at: [50.8, 41.8], size: 10 }, { name: "Black Sea", at: [34.5, 43.0], size: 10 },
    { name: "Arabian Sea", at: [64.0, 22.8], size: 10 },
  ],
  places: [
    { name: "Bursa\nOttoman capital, 1326", at: [29.06, 40.18], kind: "major", label: [0, -24] },
    { name: "Konya\nSeljuk sultanate of Rum", at: [32.49, 37.87], kind: "major", label: "below" },
    { name: "Cairo\nMamluk sultanate, 1250", at: [31.24, 30.04], kind: "major", label: [8, 14] },
    { name: "Ain Jalut 1260\nMamluks defeat the Mongols", at: [35.36, 32.55], kind: "battle", label: [0, -28] },
    { name: "Baghdad 1258\ntaken by the Mongols", at: [44.37, 33.31], kind: "battle", label: "right" },
    { name: "Tabriz\nMongol Ilkhanate;\nrulers Muslim from 1295", at: [46.3, 38.08], label: "right" },
    { name: "Delhi\nDelhi Sultanate, 1206", at: [77.21, 28.61], kind: "major", label: "left" },
  ],
  legend: [{ kind: "major", text: "Capital of a state founded by Turkic rulers" }, { kind: "city", text: "Capital of the Mongol Ilkhanate" }, { kind: "battle", text: "Battle or conquest" }],
  legendAt: "bottom-left", legendWidth: 290,
  checked: ["The Metropolitan Museum of Art, Heilbrunn Timeline of Art History, \"The Art of the Mamluk Period (1250 to 1517)\" and \"The Art of the Ilkhanid Period (1256 to 1353)\"", "Encyclopaedia Britannica, \"India: The early Turkish sultans\", and Wikipedia, \"Delhi Sultanate\" and \"Siege of Bursa\""],
};

const islamSea = {
  id: "u1-islam-indian-ocean",
  caption: "Muslim, Hindu, and Buddhist rulers in South and Southeast Asia, c. 1200 to c. 1450 (route approximate)",
  alt: "Map of South and Southeast Asia. Large dots mark places ruled by Muslims, each with the date Muslim rule is first known: Delhi, 1206; the Gujarat port of Cambay, ruled from Delhi after 1304; Samudera Pasai on the north tip of Sumatra, where a Muslim ruler's tomb is dated 1297; and Malacca, founded c. 1400, whose first ruler soon became Muslim. Small dots mark places ruled by Hindus or Buddhists: Calicut, a port with a Hindu ruler and many Muslim merchants; Vijayanagara, a Hindu kingdom founded in southern India in 1336; Pagan in Burma, a Buddhist capital until c. 1300; Angkor, the Khmer capital, first Hindu and then Buddhist; and Majapahit on Java, a Hindu and Buddhist kingdom founded in 1293. A sea route links Cambay, Calicut, Samudera Pasai, Malacca, and Java, and continues toward China.",
  bbox: [66, -10, 118, 31], width: 680, height: 560,
  regions: [
    { name: "Arabian Sea", at: [70.5, 4.0], size: 11 }, { name: "Bay of Bengal", at: [88.5, 16.8], size: 11 },
    { name: "Indian Ocean", at: [82.0, -4.0], size: 12 }, { name: "South China Sea", at: [113.0, 11.5], size: 11 },
    { name: "INDIA", at: [80.0, 24.0], size: 11 }, { name: "SUMATRA", at: [101.5, -3.2], size: 9 }, { name: "JAVA", at: [109.5, -8.6], size: 9 },
  ],
  routes: [
    { kind: "sea", through: [[72.62, 22.31], [71.0, 20.0], [72.6, 15.5], [75.4, 11.25], [76.0, 8.0], [80.0, 5.5], [88.0, 5.9], [95.0, 6.2], [97.15, 5.6]] },
    { kind: "sea", through: [[97.15, 5.6], [99.5, 4.1], [102.0, 1.9], [104.3, 1.2], [106.0, -2.5], [108.5, -5.8], [112.0, -6.6]] },
    { kind: "sea", through: [[104.3, 1.2], [106.5, 5.0], [109.5, 10.0], [112.0, 14.5], [116.0, 19.5]] },
  ],
  places: [
    { name: "Delhi\nMuslim sultanate from 1206", at: [77.21, 28.61], kind: "major", label: "right" },
    { name: "Cambay\nGujarat port; ruled\nfrom Delhi after 1304", at: [72.62, 22.31], kind: "major", label: "right" },
    { name: "Vijayanagara\nHindu kingdom from 1336", at: [76.46, 15.33], label: "right" },
    { name: "Calicut\nHindu ruler; many\nMuslim merchants", at: [75.78, 11.25], label: "left" },
    { name: "Pagan\nBuddhist capital\nto c. 1300", at: [94.86, 21.17], label: "right" },
    { name: "Angkor\nKhmer capital; Hindu,\nthen Buddhist", at: [103.87, 13.41], label: "left" },
    { name: "Samudera Pasai\nMuslim ruler's tomb, 1297", at: [97.15, 5.15], kind: "major", label: "left" },
    { name: "Malacca\nfounded c. 1400; ruler\nsoon became Muslim", at: [102.25, 2.19], kind: "major", label: [-8, 16] },
    { name: "Majapahit\nHindu and Buddhist\nkingdom from 1293", at: [112.38, -7.56], label: [-6, 16] },
  ],
  legend: [{ kind: "major", text: "Muslim ruler, with the date first known" }, { kind: "city", text: "Hindu or Buddhist ruler" }, { kind: "sea", text: "Sea trade route (approximate)" }],
  legendAt: "bottom-left", legendWidth: 270,
  checked: ["Encyclopaedia Britannica, \"Indonesia: Islamic influence in Indonesia\" and \"India: The Vijayanagar empire, 1336 to 1646\"", "Wikipedia, \"Majapahit\", \"Alauddin Khalji's conquest of Gujarat\", and \"Delhi Sultanate\", and OpenStax, World History Volume 2, \"The Malacca Sultanate\""],
};

export const maps = [song, turkic, islamSea];
