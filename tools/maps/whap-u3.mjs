// Map specs for the Unit 3 topic quizzes and unit assessments (whap-topic/t31.js, t33.js; whap-mocks/w3b.js).
// Drawn by tools/build-maps.mjs into decks/whap/maps.js. The spec format is at the top of tools/build-maps.mjs.

const qing = {
  id: "u3-qing",
  caption: "Qing expansion, 1625 to 1759: the year the Qing took or won control of each place",
  alt: "Map of East and Central Asia marking Qing conquests with their years. Shenyang, the Manchu capital from 1625. Beijing, taken in 1644. Taiwan, conquered in 1683. Dolon Nor, where the Khalkha Mongol princes submitted to the Kangxi Emperor in 1691. Jao Modo, near present-day Ulaanbaatar, where the Kangxi Emperor's army defeated the Zunghar leader Galdan in 1696. Lhasa in Tibet, where a Qing army drove out the Zunghars in 1720. Ili, the center of the Zunghar state, captured in 1755. Kashgar, in the Tarim Basin, conquered in 1759. The dates move outward from the northeast: first China itself and Taiwan, then Mongolia, then Tibet, and last the far west.",
  bbox: [72, 18, 128, 52], width: 700, height: 440,
  regions: [
    { name: "MONGOLIA", at: [103, 45.5], size: 11 }, { name: "TIBET", at: [88, 32.5], size: 11 }, { name: "TARIM BASIN", at: [84.5, 38.2], size: 10 },
    { name: "CHINA", at: [111, 30], size: 12 }, { name: "Pacific Ocean", at: [125.5, 25], size: 10 },
  ],
  places: [
    { name: "Shenyang 1625", at: [123.43, 41.8], kind: "major", label: "right" },
    { name: "Beijing 1644", at: [116.4, 39.9], kind: "major", label: "below" },
    { name: "Taiwan 1683", at: [120.2, 23.0], kind: "battle", label: "left" },
    { name: "Dolon Nor 1691", at: [116.48, 42.18], kind: "battle", label: "left" },
    { name: "Jao Modo 1696", at: [107.6, 47.9], kind: "battle", label: "right" },
    { name: "Lhasa 1720", at: [91.11, 29.65], kind: "battle", label: "below" },
    { name: "Ili 1755", at: [81.32, 43.91], kind: "battle", label: "above" },
    { name: "Kashgar 1759", at: [75.99, 39.47], kind: "battle", label: "above" },
  ],
  legend: [{ kind: "major", text: "Qing capital, with the year it became one" }, { kind: "battle", text: "Place taken or won, with the year" }],
  legendAt: "bottom-left", legendWidth: 290,
  checked: [
    "Wikipedia, \"Qing dynasty in Inner Asia\", \"Dzungar-Qing Wars\", \"Battle of Jao Modo\", \"Battle of Penghu\", \"Shenyang\", and \"Timeline of Xinjiang under Qing rule\"",
    "John P. McKay et al., Understanding World Societies, 2nd ed., chapter 21, \"Imperial Expansion\" (Taiwan 1683, Mongolia 1696, Tibet 1720s, Xinjiang 1750s)",
  ],
};

const mughal = {
  id: "u3-mughal",
  caption: "Mughal conquests in India, 1568 to 1687, with the year each place was taken",
  alt: "Map of South Asia marking Mughal conquests with their years. Kabul, Babur's base before he entered India. Agra and Delhi, Mughal capitals in the north. Under Akbar: Chittor, a Rajput fortress, 1568; Ahmedabad in Gujarat, 1573; Rajmahal in Bengal, 1576. Under Shah Jahan: Ahmadnagar in the Deccan, annexed 1636. Under Aurangzeb: Bijapur, 1686, and Golconda, 1687, in the southern Deccan. Aurangabad, in the Deccan, is marked as Aurangzeb's base for his southern wars. Raigad, in the western Deccan, is marked as the Maratha capital where Shivaji was crowned in 1674. The years grow later from north to south.",
  bbox: [64, 12, 92, 36], width: 560, height: 520,
  regions: [{ name: "DECCAN", at: [78.6, 15.3], size: 11 }, { name: "Arabian Sea", at: [67, 14.2], size: 11 }, { name: "Bay of Bengal", at: [88, 16], size: 11 }],
  places: [
    { name: "Kabul", at: [69.17, 34.53], label: "right" },
    { name: "Delhi", at: [77.21, 28.61], kind: "major", label: "right" },
    { name: "Agra", at: [78.01, 27.18], kind: "major", label: "right" },
    { name: "Chittor 1568", at: [74.65, 24.89], kind: "battle", label: "left" },
    { name: "Ahmedabad 1573", at: [72.58, 23.02], kind: "battle", label: "left" },
    { name: "Rajmahal 1576", at: [87.83, 25.05], kind: "battle", label: "below" },
    { name: "Ahmadnagar 1636", at: [74.74, 19.09], kind: "battle", label: "right" },
    { name: "Bijapur 1686", at: [75.71, 16.83], kind: "battle", label: "left" },
    { name: "Golconda 1687", at: [78.4, 17.38], kind: "battle", label: "right" },
    { name: "Aurangabad\n(Aurangzeb's base)", at: [75.34, 19.88], label: [7, -12] },
    { name: "Raigad\n(Maratha capital, 1674)", at: [73.44, 18.23], kind: "major", label: "left" },
  ],
  legend: [{ kind: "major", text: "Capital" }, { kind: "battle", text: "Place taken by Mughal armies, with the year" }, { kind: "city", text: "Other city" }],
  legendAt: "top-right", legendWidth: 320,
  checked: [
    "Encyclopaedia Britannica, \"Mughal dynasty: Akbar the Great and the consolidation of the empire\" (Chittor 1568, Ahmadnagar 1636), and New World Encyclopedia, \"Deccan sultanates\" (Ahmadnagar 1636, Bijapur 1686, Golconda 1687)",
    "Wikipedia, \"Akbar\" (Chittor 1568, Gujarat 1572 to 1573, Rajmahal 1576), \"Aurangzeb\" (Aurangabad, Bijapur 1686, Golconda 1687), and \"Raigad Fort\" (Shivaji crowned 1674)",
  ],
};

const shrines = {
  id: "u3-shrines",
  caption: "Capitals and holy cities of the Ottoman and Safavid empires, 1501 to 1639. Iraq, with Baghdad, Najaf, and Karbala, was Ottoman from 1534, except from 1624 to 1638, when the Safavids held Baghdad; the Treaty of Zuhab (1639) left it Ottoman.",
  alt: "Map from Istanbul to eastern Iran. Ottoman places: Istanbul, the Ottoman capital; Mecca and Medina in Arabia, the holiest cities of Islam, under Ottoman rule from 1517; and Baghdad in Iraq, taken by the Ottomans in 1534. Near Baghdad are Najaf, with the shrine of Ali, and Karbala, with the shrine of Husayn, the holiest Shi'a sites, which lay in Ottoman Iraq. Safavid places: Ardabil, home of the Safavid religious order; Tabriz, where Ismail I declared Twelver Shi'ism the state religion in 1501; Isfahan, the Safavid capital from 1598; and Mashhad, in the far east of Iran, with the shrine of the Imam Reza.",
  bbox: [26, 19, 62, 43], width: 680, height: 460,
  regions: [
    { name: "OTTOMAN EMPIRE", at: [33.5, 38.8], size: 11 }, { name: "SAFAVID EMPIRE", at: [55, 33.6], size: 11 }, { name: "ARABIA", at: [45, 25], size: 10 },
    { name: "Mediterranean Sea", at: [29.5, 33.6], size: 10 }, { name: "Black Sea", at: [34.5, 43.0], size: 10 }, { name: "Caspian Sea", at: [50.9, 41.4], size: 9 },
    { name: "Persian Gulf", at: [52, 26.7], size: 9 },
  ],
  places: [
    { name: "Istanbul (Ottoman capital)", at: [28.98, 41.01], kind: "major", label: "below" },
    { name: "Medina (Ottoman 1517)", at: [39.61, 24.47], label: "right" },
    { name: "Mecca (Ottoman 1517)", at: [39.83, 21.42], label: "right" },
    { name: "Baghdad (Ottoman 1534)", at: [44.36, 33.31], label: "above" },
    { name: "Karbala (shrine of Husayn)", at: [44.03, 32.62], label: "left" },
    { name: "Najaf (shrine of Ali)", at: [44.32, 32.0], label: "below" },
    { name: "Ardabil (Safavid order)", at: [48.29, 38.25], label: "right" },
    { name: "Tabriz (1501)", at: [46.29, 38.08], kind: "major", label: "left" },
    { name: "Isfahan (capital from 1598)", at: [51.67, 32.65], kind: "major", label: "below" },
    { name: "Mashhad (shrine of the Imam Reza)", at: [59.6, 36.3], label: "below" },
  ],
  legend: [{ kind: "major", text: "Capital" }, { kind: "city", text: "Holy city, shrine, or other city" }],
  legendAt: "bottom-right", legendWidth: 250,
  checked: [
    "Wikipedia, \"Safavid Iran\" (Tabriz 1501, Ardabil, Isfahan 1598, Baghdad 1534) and \"Ottoman-Safavid War (1623 to 1639)\" (Baghdad 1624 to 1638, Treaty of Zuhab 1639)",
    "\"Shii piety and dynastic legitimacy: Mashhad under the early Safavid Shahs\" (abstract, American University of Beirut ScholarWorks), and Wikipedia, \"Imam Reza shrine\"",
  ],
};

export const maps = [qing, mughal, shrines];
