// Map specs for the AP World History Unit 1 review bank (decks/whap/u1x.js), drawn by tools/build-maps.mjs.
// Coordinates are [longitude, latitude]. Every place and date here is a claim the site makes: each map lists the
// references it was checked against. The site draws no borders; places are points with names.

const learning = {
  id: "u1r-learning",
  caption: "Translation of learning and the first universities: Baghdad in the 800s, and the year each university in Latin Europe began, 1088 to 1222",
  alt: "Map of Europe, North Africa, and Southwest Asia. A large dot marks Baghdad, where Greek works were translated into Arabic in the 800s. Smaller dots mark places in Latin Christian Europe. Toledo, in Iberia, taken by Christian rulers in 1085, and Palermo, in Sicily, taken by Christian rulers in 1091, are marked as places where Arabic and Greek works were translated into Latin in the 1100s. Universities are marked with the year each began: Bologna 1088, Paris c. 1150, Oxford by 1167, Salamanca 1218, Montpellier 1220, and Padua 1222.",
  bbox: [-10, 29, 48, 55], width: 720, height: 430,
  regions: [
    { name: "LATIN CHRISTIAN EUROPE", at: [17.0, 53.6], size: 11 }, { name: "DAR AL-ISLAM", at: [37.0, 31.3], size: 11 },
    { name: "Mediterranean Sea", at: [18.5, 34.0], size: 11 }, { name: "Atlantic Ocean", at: [-7.5, 45.5], size: 10 },
    { name: "Black Sea", at: [34.5, 43.3], size: 10 },
  ],
  places: [
    { name: "Baghdad\nGreek works translated\ninto Arabic, 800s", at: [44.37, 33.31], kind: "major", label: "left" },
    { name: "Toledo\nChristian from 1085;\ntranslations into Latin, 1100s", at: [-4.02, 39.86], label: "right" },
    { name: "Palermo (Sicily)\nChristian from 1091;\ntranslations into Latin, 1100s", at: [13.36, 38.12], label: "below" },
    { name: "Bologna 1088", at: [11.34, 44.49], label: [8, 12] },
    { name: "Paris c. 1150", at: [2.35, 48.86], label: "right" },
    { name: "Oxford by 1167", at: [-1.26, 51.75], label: "right" },
    { name: "Salamanca 1218", at: [-5.66, 40.97], label: "above" },
    { name: "Montpellier 1220", at: [3.88, 43.61], label: "above" },
    { name: "Padua 1222", at: [11.88, 45.41], label: "right" },
  ],
  legend: [
    { kind: "major", text: "Center of translation into Arabic" },
    { kind: "city", text: "Translation center or university in Latin Europe" },
  ],
  legendAt: "bottom-left", legendWidth: 300,
  checked: [
    "Wikipedia, \"Latin translations of the 12th century\" (Toledo 1085, Sicily 1091, the Toledo and Sicily translators of the 1100s) and \"List of medieval universities\"",
    "Encyclopaedia Britannica, \"Bayt al-Hikmah\" (Greek works translated into Arabic in 9th-century Baghdad), and the University at Buffalo's \"Medieval Universities\" page (Bologna 1088, Paris c. 1150, Oxford before 1167, Salamanca 1218, Montpellier 1220)",
  ],
};

const france = {
  id: "u1r-france",
  caption: "Lands added to the French royal domain, 1204 to 1312, and lands held by the king of England",
  alt: "Map of France. A large dot marks Paris, the royal capital. Smaller dots mark lands the French kings added to the royal domain, with years: Rouen in Normandy, taken from the king of England in 1204; Angers in Anjou, taken 1204 to 1206; Toulouse, which passed to the crown in 1271 when its count died without heirs; Troyes in Champagne, joined to the crown by a royal marriage in 1284; and Lyon, annexed in 1312. X marks show two places held by the king of England: Bordeaux in Gascony, held until 1453, and Calais, held until 1558.",
  bbox: [-5.5, 42.4, 8.5, 51.6], width: 560, height: 520,
  regions: [
    { name: "ENGLAND", at: [-1.6, 51.35], size: 11 }, { name: "Bay of Biscay", at: [-3.8, 45.3], size: 10 },
    { name: "Mediterranean Sea", at: [5.2, 42.75], size: 10 }, { name: "English Channel", at: [-3.0, 49.95], size: 10 },
    { name: "HOLY ROMAN EMPIRE", at: [7.3, 48.4], size: 9 },
  ],
  places: [
    { name: "Paris\nroyal capital", at: [2.35, 48.86], kind: "major", label: [8, -6] },
    { name: "Rouen (Normandy) 1204", at: [1.1, 49.44], label: [-8, -8] },
    { name: "Angers (Anjou)\n1204 to 1206", at: [-0.55, 47.47], label: "left" },
    { name: "Toulouse 1271", at: [1.44, 43.6], label: "right" },
    { name: "Troyes (Champagne) 1284", at: [4.07, 48.3], label: "below" },
    { name: "Lyon 1312", at: [4.84, 45.76], label: "right" },
    { name: "Bordeaux (Gascony)\nEnglish until 1453", at: [-0.58, 44.84], kind: "battle", label: "left" },
    { name: "Calais\nEnglish until 1558", at: [1.86, 50.95], kind: "battle", label: "right" },
  ],
  legend: [
    { kind: "major", text: "French royal capital" },
    { kind: "city", text: "Added to the royal domain, with year" },
    { kind: "battle", text: "Held by the king of England" },
  ],
  legendAt: "bottom-right", legendWidth: 255,
  checked: [
    "Encyclopaedia Britannica, \"France, 1180 to c. 1490\" (Normandy 1204, Anjou 1204 to 1206, Toulouse 1271, Champagne 1284, Lyon 1312) and World History Encyclopedia, \"The Hundred Years' War: Consequences and Effects\" (Calais the only English land left)",
    "Wikipedia, \"Crown lands of France\" (Normandy and Anjou 1204, Toulouse 1271, Champagne 1284, Calais 1558), \"Lyon\" (French from 1312), and \"Battle of Castillon\" (Bordeaux retaken 1453)",
  ],
};

const timur = {
  id: "u1r-timur",
  caption: "Timur's campaigns from Samarkand, 1395 to 1402: battles he won and cities his army sacked",
  alt: "Map from Anatolia and Syria east to northern India. A large dot marks Samarkand in Central Asia, Timur's capital. X marks show battles Timur won: at the Terek River, north of the Caucasus, against the Golden Horde in 1395, and at Ankara in Anatolia against the Ottoman sultan in 1402. Dots mark cities his army sacked: Delhi, capital of the Delhi Sultanate, in 1398; Damascus, a city of the Mamluk Sultanate, in 1401; and Baghdad in 1401.",
  bbox: [28, 22, 82, 47], width: 720, height: 420,
  regions: [
    { name: "CENTRAL ASIA", at: [64.0, 43.6], size: 10 }, { name: "ANATOLIA", at: [33.5, 38.4], size: 10 },
    { name: "SYRIA", at: [38.6, 35.2], size: 10 }, { name: "IRAN", at: [55.0, 32.5], size: 10 },
    { name: "INDIA", at: [78.0, 23.8], size: 10 }, { name: "Caspian Sea", at: [50.8, 41.6], size: 10 },
    { name: "Black Sea", at: [34.0, 43.2], size: 10 }, { name: "Arabian Sea", at: [64.0, 22.8], size: 10 },
    { name: "Persian Gulf", at: [51.8, 27.0], size: 9 },
  ],
  places: [
    { name: "Samarkand\nTimur's capital", at: [66.97, 39.65], kind: "major", label: "right" },
    { name: "Terek River 1395\ndefeats the Golden Horde", at: [45.6, 43.7], kind: "battle", label: "right" },
    { name: "Ankara 1402\ndefeats the Ottoman sultan", at: [32.85, 39.93], kind: "battle", label: [0, -24] },
    { name: "Delhi 1398", at: [77.21, 28.61], label: "left" },
    { name: "Damascus 1401\n(Mamluk Sultanate)", at: [36.29, 33.51], label: "below" },
    { name: "Baghdad 1401", at: [44.37, 33.31], label: "right" },
  ],
  legend: [
    { kind: "major", text: "Timur's capital" },
    { kind: "battle", text: "Battle won by Timur" },
    { kind: "city", text: "City sacked by Timur's army" },
  ],
  legendAt: "bottom-left", legendWidth: 220,
  checked: [
    "Wikipedia, \"Timur\" (Terek River 1395, Delhi December 1398, Baghdad June 1401, Ankara July 1402) and \"Siege of Damascus (1400)\" (sacked March 1401)",
    "World History Encyclopedia, \"Timeline: Timur\" (Terek River 1395, Delhi 1398 to 1399, Baghdad 1401, Ankara 1402), with Britannica's student encyclopedia, \"Timur\" (Delhi 1398), and History Today, \"The Sack of Damascus\" (1401)",
  ],
};

const gunpowder = {
  id: "u1r-gunpowder",
  caption: "Early gunpowder weapons, 1044 to 1453: where and when each step was first recorded",
  alt: "Map of Eurasia from western Europe to eastern China. In Song China, dots mark Kaifeng, where a written formula for gunpowder survives from 1044 and where gunpowder weapons were used in the Mongol siege of 1232, and De'an, where Song defenders used fire lances in 1132. A label over Syria and Egypt notes recipes for gunpowder written in Arabic between about 1240 and 1280. In Europe, a dot marks Florence, where cannons were cast in 1326, and X marks show Crécy in France, where cannons were used in battle in 1346, and Constantinople, taken with Ottoman cannons in 1453.",
  bbox: [-6, 22, 124, 55], width: 760, height: 380,
  regions: [
    { name: "SONG CHINA", at: [111.5, 26.0], size: 11 },
    { name: "SYRIA AND EGYPT:", at: [37.5, 30.6], size: 10 }, { name: "recipes in Arabic, c. 1240 to 1280", at: [37.5, 28.9], size: 10 },
    { name: "EUROPE", at: [16.0, 50.5], size: 11 }, { name: "Mediterranean Sea", at: [17.0, 35.2], size: 9 },
    { name: "Arabian Sea", at: [64.0, 23.5], size: 9 },
  ],
  places: [
    { name: "Kaifeng: formula\nwritten down, 1044;\nweapons in Mongol\nsiege, 1232", at: [114.31, 34.8], label: [-8, -36] },
    { name: "De'an\nfire lances, 1132", at: [113.69, 31.26], label: [-8, 10] },
    { name: "Florence\ncannons cast, 1326", at: [11.25, 43.77], label: [8, -14] },
    { name: "Crécy 1346\ncannons in battle", at: [1.93, 50.25], kind: "battle", label: [-8, -18] },
    { name: "Constantinople 1453\nOttoman cannons", at: [28.97, 41.01], kind: "battle", label: [8, -10] },
  ],
  legend: [
    { kind: "city", text: "Gunpowder recorded, with year" },
    { kind: "battle", text: "Battle or siege with cannons" },
  ],
  legendAt: "bottom-left", legendWidth: 245,
  checked: [
    "Wikipedia, \"History of gunpowder\" and \"Timeline of the gunpowder age\" (formula 1044, fire lances at De'an 1132, Kaifeng 1232, Arabic recipes 1240 to 1280, Florence and England 1326, Crécy 1346, Constantinople 1453)",
    "World History Encyclopedia, \"Ancient Chinese Warfare\" (earliest text 1044) and \"Artillery in Medieval Europe\" (Florence 1326, Crécy 1346, Constantinople 1453), with Medievalists.net on the 1132 siege of De'an",
  ],
};

export const maps = [learning, france, timur, gunpowder];
