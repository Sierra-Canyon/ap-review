// Map specs for AP World History Unit 2 forms (drawn by tools/build-maps.mjs). Coordinates are [longitude, latitude].
// Every place, date, and route here is a claim the site makes: each map lists the references it was checked against.
// Routes are drawn as approximate lines between places, and the captions say so.

const mongolLimits = {
  id: "u2-mongol-limits",
  caption: "Mongol conquests and defeats, 1215 to 1293",
  alt: "Map of Eurasia from Poland to Japan and Java marking Mongol campaigns. Karakorum, the Mongol capital, is in Mongolia. Places Mongol armies captured or won battles, with years: Zhongdu (Beijing) 1215, Samarkand 1220, Kiev 1240, Legnica in Poland 1241, Baghdad 1258, and Hangzhou, the Song capital, 1276. Places where Mongol armies were defeated: Ain Jalut in Palestine 1260, Hakata Bay in Japan 1274 and 1281, Bach Dang in Dai Viet (northern Vietnam) 1288, and Java 1293.",
  bbox: [12, -9, 134, 56], width: 760, height: 500,
  regions: [
    { name: "MONGOLIA", at: [102, 44.5], size: 11 }, { name: "Indian Ocean", at: [78, -2], size: 12 },
    { name: "Pacific Ocean", at: [128, 22], size: 11 }, { name: "Mediterranean Sea", at: [22, 34.2], size: 10 },
    { name: "Caspian Sea", at: [50.6, 41.8], size: 10 }, { name: "Arabian Sea", at: [64, 15], size: 10 },
  ],
  places: [
    { name: "Karakorum", at: [102.83, 47.2], kind: "major", label: "above" },
    { name: "Zhongdu (Beijing) 1215", at: [116.4, 39.9], label: "left" },
    { name: "Samarkand 1220", at: [66.97, 39.65], label: "below" },
    { name: "Kiev 1240", at: [30.52, 50.45], label: "right" },
    { name: "Legnica 1241", at: [16.16, 51.21], label: "below" },
    { name: "Baghdad 1258", at: [44.37, 33.31], label: "right" },
    { name: "Hangzhou 1276", at: [120.15, 30.27], label: "left" },
    { name: "Ain Jalut 1260", at: [35.35, 32.55], kind: "battle", label: "below" },
    { name: "Hakata Bay\n1274, 1281", at: [130.4, 33.6], kind: "battle", label: "left" },
    { name: "Bach Dang 1288", at: [106.75, 20.95], kind: "battle", label: "left" },
    { name: "Java 1293", at: [112.3, -7.2], kind: "battle", label: "left" },
  ],
  legend: [
    { kind: "major", text: "Mongol capital" },
    { kind: "city", text: "Captured or won by Mongol armies" },
    { kind: "battle", text: "Mongol army defeated" },
  ],
  legendAt: "bottom-left", legendWidth: 245,
  checked: [
    "World History Encyclopedia, \"Mongol Empire\" (timeline: Beijing 1215, Kiev 1240, Legnica 1241, Baghdad 1258, Lin'an/Hangzhou 1276, Japan 1274 and 1281, Java 1292 to 1293)",
    "Encyclopaedia Britannica, \"Battle of Ayn Jalut\" (1260), and the Wikipedia articles \"Mongol invasions of Vietnam\" (Bach Dang, 1288), \"Mongol invasion of Java\" (1293), and \"Siege of Samarkand (1220)\"",
  ],
};

const italianPosts = {
  id: "u2-italian-posts",
  caption: "Venetian and Genoese trading posts from the Mediterranean to Tabriz, c. 1340 (routes approximate)",
  alt: "Map of the Mediterranean and Black Sea regions, c. 1340. Venice and Genoa in Italy are marked as home cities. Italian sea routes run from them past Crete, where Venice held Candia, to Alexandria in Mamluk Egypt, and through Pera, the Genoese quarter across the harbor from Constantinople, into the Black Sea. On the Black Sea the routes reach Kaffa in Crimea, held by Genoa from 1266, Tana at the mouth of the Don River, where both Venetians and Genoese traded, and Trebizond on the south coast. Caravan routes run east from Tana into the lands of the Golden Horde toward Central Asia and China, and from Trebizond to Tabriz, the capital of the Ilkhanate, where Italian merchants lived, and on toward Persia and India.",
  bbox: [5, 29, 54, 50], width: 720, height: 440,
  regions: [
    { name: "GOLDEN HORDE", at: [42.5, 45.4], size: 11 }, { name: "ILKHANATE", at: [44.5, 32.6], size: 11 },
    { name: "MAMLUK SULTANATE", at: [34, 29.6], size: 10 }, { name: "Black Sea", at: [37, 43.2], size: 11 },
    { name: "Mediterranean Sea", at: [16, 33.3], size: 11 }, { name: "Caspian Sea", at: [50.8, 41.6], size: 9 },
    { name: "to Central Asia and China", at: [49.2, 48.2], size: 9 }, { name: "to Persia and India", at: [50.5, 34.7], size: 9 },
  ],
  routes: [
    { kind: "sea", through: [[12.33, 45.44], [14.5, 43.5], [18.5, 40.5], [20.0, 38.0], [22.5, 36.3], [25.13, 35.6]] },
    { kind: "sea", through: [[8.93, 44.41], [9.6, 41.0], [12.0, 38.5], [15.6, 37.0], [19.5, 35.8], [25.13, 35.6]] },
    { kind: "sea", through: [[25.13, 35.6], [27.0, 33.5], [29.92, 31.4]] },
    { kind: "sea", through: [[25.13, 35.6], [25.6, 37.5], [26.3, 40.1], [27.6, 40.7], [28.97, 41.1], [30.0, 42.0], [32.5, 43.8], [35.38, 44.9]] },
    { kind: "sea", through: [[35.38, 44.9], [36.6, 45.3], [37.5, 46.4], [39.3, 47.05]] },
    { kind: "sea", through: [[29.5, 41.4], [33.0, 42.1], [36.5, 41.6], [39.72, 41.1]] },
    { through: [[39.42, 47.1], [42.5, 47.6], [45.0, 47.0], [48.0, 46.5], [53.5, 46.5]] },
    { through: [[39.72, 41.0], [41.3, 39.9], [44.0, 39.0], [46.3, 38.08], [49.0, 36.6], [53.5, 35.8]] },
  ],
  places: [
    { name: "Venice", at: [12.33, 45.44], kind: "major", label: "above" },
    { name: "Genoa", at: [8.93, 44.41], kind: "major", label: "above" },
    { name: "Candia, Crete (Venice)", at: [25.13, 35.34], label: "below" },
    { name: "Alexandria (Venice, Genoa)", at: [29.92, 31.2], label: "right" },
    { name: "Pera (Genoa)", at: [28.97, 41.03], label: "left" },
    { name: "Kaffa (Genoa)", at: [35.38, 45.03], label: "left" },
    { name: "Tana (Venice, Genoa)", at: [39.42, 47.1], label: [-8, -8] },
    { name: "Trebizond (Venice, Genoa)", at: [39.72, 41.0], label: "below" },
    { name: "Tabriz", at: [46.3, 38.08], label: "below" },
  ],
  legend: [
    { kind: "major", text: "Home city" },
    { kind: "city", text: "Italian trading post or merchant quarter" },
    { kind: "sea", text: "Italian sea route" },
    { kind: "route", text: "Caravan route" },
  ],
  legendAt: "top-left", legendWidth: 270,
  checked: [
    "The Wikipedia articles \"Genoese Gazaria\" (Kaffa granted to Genoa by the Golden Horde, 1266), \"Feodosia\", \"Azov\" (Venetian and Genoese Tana under the Golden Horde), and \"Genoese colonies\" (Pera)",
    "Virgil Ciocîltan, The Mongols and the Black Sea Trade in the Thirteenth and Fourteenth Centuries (Brill, 2012), as summarized by its publisher: the Golden Horde route from Urgench through Sarai to Tana and Kaffa, and the Ilkhanate route from Hormuz through Tabriz to Trebizond, both used by Genoese and Venetian merchants",
  ],
};

const indianOcean = {
  id: "u2-ocean-goods",
  caption: "Ports of the Indian Ocean and some goods traded from each, c. 1400 (routes approximate)",
  alt: "Map of the Indian Ocean from East Africa to China and the Spice Islands, c. 1400, labeling ports with goods traded from them. Kilwa on the East African coast: gold and ivory. Aden at the mouth of the Red Sea. Hormuz at the mouth of the Persian Gulf: horses. Cambay in Gujarat: cotton cloth. Calicut on the southwest coast of India: pepper. Ceylon: cinnamon. Malacca, on the narrow strait between Sumatra and the Malay Peninsula, where routes from India and from China meet. Quanzhou in southern China: silk and porcelain. Maluku: cloves. Banda: nutmeg. Sea routes link all of these ports.",
  bbox: [34, -15, 136, 31], width: 760, height: 440,
  regions: [
    { name: "Indian Ocean", at: [72, -5], size: 13 }, { name: "Arabian Sea", at: [63, 14.5], size: 10 },
    { name: "Bay of Bengal", at: [88.5, 14.5], size: 10 }, { name: "South China Sea", at: [114, 14], size: 10 },
    { name: "AFRICA", at: [37.5, 6], size: 10 }, { name: "ARABIA", at: [46, 21], size: 10 },
    { name: "INDIA", at: [78.5, 17.5], size: 10 }, { name: "CHINA", at: [112, 28], size: 10 },
  ],
  routes: [
    { kind: "sea", through: [[39.51, -8.96], [40.6, -3.5], [45.34, 2.05], [51.0, 11.5], [45.03, 12.8]] },
    { kind: "sea", through: [[45.03, 12.8], [52.0, 13.5], [64.0, 14.0], [75.78, 11.25]] },
    { kind: "sea", through: [[56.46, 27.1], [58.5, 23.5], [64.0, 23.0], [72.62, 22.3]] },
    { kind: "sea", through: [[72.62, 22.3], [72.2, 18.0], [73.6, 14.5], [75.78, 11.25]] },
    { kind: "sea", through: [[75.78, 11.25], [77.5, 7.6], [79.86, 6.93], [88.0, 5.8], [95.0, 6.0], [99.5, 4.2], [102.25, 2.19]] },
    { kind: "sea", through: [[102.25, 2.19], [104.3, 1.2], [105.8, 4.0], [108.5, 11.0], [113.0, 19.0], [118.59, 24.91]] },
    { kind: "sea", through: [[104.3, 1.2], [106.5, -3.0], [110.0, -5.6], [116.0, -6.5], [121.0, -6.6], [126.0, -5.2], [129.9, -4.53]] },
    { kind: "sea", through: [[121.0, -6.6], [122.5, -3.0], [125.5, -1.0], [127.38, 0.79]] },
  ],
  places: [
    { name: "Kilwa: gold, ivory", at: [39.51, -8.96], label: "right" },
    { name: "Aden", at: [45.03, 12.8], label: "below" },
    { name: "Hormuz: horses", at: [56.46, 27.1], label: "left" },
    { name: "Cambay: cotton cloth", at: [72.62, 22.3], label: "right" },
    { name: "Calicut: pepper", at: [75.78, 11.25], label: "left" },
    { name: "Ceylon: cinnamon", at: [79.86, 6.93], label: [-4, 16] },
    { name: "Malacca", at: [102.25, 2.19], kind: "major", label: "left" },
    { name: "Quanzhou: silk, porcelain", at: [118.59, 24.91], label: "left" },
    { name: "Maluku: cloves", at: [127.38, 0.79], label: "above" },
    { name: "Banda: nutmeg", at: [129.9, -4.53], label: "below" },
  ],
  legend: [{ kind: "sea", text: "Sea route (approximate)" }, { kind: "city", text: "Port, with goods traded from it" }, { kind: "major", text: "Malacca, founded c. 1400" }],
  legendAt: "bottom-left", legendWidth: 230,
  checked: [
    "The Wikipedia articles \"Spice trade\" (cloves from Maluku, nutmeg from Banda, pepper through Calicut), \"Kilwa Sultanate\" (gold and ivory through Sofala), and \"Malacca Sultanate\" (founded c. 1400); National Geographic, \"Ruins on the coast\" (2020), on Kilwa's gold and ivory",
    "Encyclopaedia Britannica, \"Cambay\" (a busy port in Marco Polo's time); Marco Polo, Travels, book 3, on horses shipped from Hormuz to India and on Quanzhou (Zaiton); Ibn Battuta, Travels (Gibb trans.), on cinnamon in Ceylon",
  ],
};

export const maps = [mongolLimits, italianPosts, indianOcean];
