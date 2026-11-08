// Unit 5 maps for the topic quizzes t52, t54, and t56 (sets t52-s2, t54-s2, t56-s2). Spec format: tools/build-maps.mjs.
// HANDOFF.md, section 2e. Each map's places and dates were checked against the two references in its `checked` line.

const greece = {
  id: "u5f-greek-kingdom",
  caption: "The Greek War of Independence and the Kingdom of Greece, 1821 to 1834, with the year places outside the kingdom later joined Greece",
  alt: "Map of Greece and the Aegean Sea. Places inside the Kingdom of Greece as its borders were set in 1832: Tripolitsa, taken by Greek rebels in 1821; Missolonghi, which fell to Ottoman and Egyptian forces in 1826; Nafplio, the capital from 1832 to 1834; and Athens, the capital from 1834. A naval battle is marked at Navarino, 1827. Places outside the kingdom in 1832: the island of Corfu, under British protection until 1864; Larissa in Thessaly, joined to Greece in 1881; Thessaloniki, 1912; the island of Chios, where Ottoman forces massacred Greeks in 1822, joined to Greece in 1912; Crete, 1913; and Smyrna and Istanbul, the Ottoman capital, which never joined Greece.",
  bbox: [19, 34.6, 30, 42.2], width: 640, height: 470,
  regions: [
    { name: "KINGDOM OF GREECE, 1832", at: [22.0, 38.95], size: 9 }, { name: "OTTOMAN EMPIRE", at: [25.6, 41.75], size: 11 },
    { name: "Aegean Sea", at: [25.0, 39.4], size: 11 }, { name: "Ionian Sea", at: [19.9, 37.6], size: 10 }, { name: "Mediterranean Sea", at: [27.7, 35.3], size: 10 },
  ],
  places: [
    { name: "Tripolitsa: taken by\nGreek rebels, 1821", at: [22.37, 37.51], kind: "major", label: "left" },
    { name: "Missolonghi: fell to Ottoman\nand Egyptian forces, 1826", at: [21.43, 38.37], kind: "major", label: [-7, -12] },
    { name: "Nafplio: capital,\n1832 to 1834", at: [22.8, 37.57], kind: "major", label: [8, 14] },
    { name: "Athens: capital\nfrom 1834", at: [23.73, 37.98], kind: "major", label: "right" },
    { name: "Navarino, 1827", at: [21.67, 36.92], kind: "battle", label: "left" },
    { name: "Corfu: British\nuntil 1864", at: [19.92, 39.62], label: "right" },
    { name: "Larissa (1881)", at: [22.42, 39.64], label: "right" },
    { name: "Thessaloniki (1912)", at: [22.94, 40.64], label: "right" },
    { name: "Chios: massacre by\nOttoman forces, 1822 (1912)", at: [26.14, 38.37], label: [8, 14] },
    { name: "Smyrna", at: [27.14, 38.42], label: [6, -8] },
    { name: "Crete (1913)", at: [25.14, 35.34], label: "below" },
    { name: "Istanbul,\nOttoman capital", at: [28.98, 41.01], kind: "city", label: [-8, 18] },
  ],
  legend: [{ kind: "major", text: "Inside the Kingdom of Greece, 1832" }, { kind: "city", text: "Outside it in 1832 (year it joined Greece)" }, { kind: "battle", text: "Naval battle" }],
  legendAt: "bottom-left", legendWidth: 280,
  checked: ["Wikipedia, \"Greek War of Independence\" (Friendly Society, Tripolitsa 1821, Chios 1822, Missolonghi 1826, Navarino 1827, the 1830 and 1832 settlements)", "Wikipedia, \"Kingdom of Greece\" (Nafplio capital 1832 to 1834, Athens from 1834, the Ionian Islands 1864, Thessaly 1881, Thessaloniki 1912, Crete 1913) and \"Muhammad Ali of Egypt\" (Navarino, 20 October 1827)"],
};

const egypt = {
  id: "u5f-egypt-campaigns",
  caption: "Campaigns of Muhammad Ali's armies and fleet, 1811 to 1839 (routes approximate)",
  alt: "Map of Egypt and its neighbors. Cairo and Alexandria, with its naval shipyard, are marked as the centers of Muhammad Ali's state. Egyptian forces cross the Red Sea and march inland in Arabia, taking Medina in 1812 and Mecca in 1813 and destroying Diriyah in 1818. An army marches up the Nile into Sudan, where Khartoum is founded in 1821. A fleet sails from Alexandria to southern Greece, where the Egyptian and Ottoman fleet is destroyed at Navarino in 1827. An army marches north through Syria, taking Acre in 1832 and defeating Ottoman armies at Konya in central Anatolia in 1832 and at Nezib in 1839. Istanbul, the Ottoman capital, is marked to the northwest of Konya.",
  bbox: [19, 12, 50, 42], width: 680, height: 620,
  regions: [
    { name: "EGYPT", at: [29.3, 26.6], size: 12 }, { name: "SUDAN", at: [29.5, 17.5], size: 11 }, { name: "ARABIA", at: [44, 20.5], size: 11 },
    { name: "SYRIA", at: [38.6, 34.3], size: 11 }, { name: "ANATOLIA", at: [35.5, 39.6], size: 11 }, { name: "Mediterranean Sea", at: [27.6, 33.2], size: 11 },
    { name: "Red Sea", at: [38.4, 19.6], size: 10 },
  ],
  routes: [
    { kind: "sea", through: [[32.55, 29.97], [33.6, 27.9], [35.6, 26.1], [38.06, 24.09]] },
    { kind: "route", through: [[38.06, 24.09], [39.61, 24.47], [42.5, 25.6], [44.0, 25.9], [46.57, 24.73]] },
    { kind: "route", through: [[39.61, 24.47], [39.83, 21.42]] },
    { kind: "route", through: [[31.24, 30.04], [32.55, 29.97]] },
    { kind: "route", through: [[31.24, 30.04], [31.1, 27.2], [32.9, 24.09], [31.35, 21.8], [30.48, 19.17], [32.0, 17.6], [32.53, 15.5]] },
    { kind: "sea", through: [[29.92, 31.2], [26.5, 33.2], [23.5, 35.4], [21.9, 36.6], [21.67, 36.92]] },
    { kind: "route", through: [[31.24, 30.04], [32.3, 30.9], [33.8, 31.13], [34.46, 31.5], [35.08, 32.93], [36.3, 33.5], [36.72, 34.73], [37.16, 36.2], [35.32, 37.0], [34.0, 37.4], [32.48, 37.87]] },
    { kind: "route", through: [[37.16, 36.2], [37.79, 37.01]] },
  ],
  places: [
    { name: "Cairo", at: [31.24, 30.04], kind: "major", label: [-8, 14] },
    { name: "Alexandria:\nnaval shipyard", at: [29.92, 31.2], kind: "major", label: [-8, -8] },
    { name: "Navarino 1827: Egyptian and\nOttoman fleet destroyed by\nBritain, France, and Russia", at: [21.67, 36.92], kind: "battle", label: [8, 18] },
    { name: "Medina 1812", at: [39.61, 24.47], kind: "battle", label: [6, -9] },
    { name: "Mecca 1813", at: [39.83, 21.42], kind: "battle", label: "right" },
    { name: "Diriyah 1818", at: [46.57, 24.73], kind: "battle", label: "below" },
    { name: "Khartoum,\nfounded 1821", at: [32.53, 15.5], kind: "city", label: "right" },
    { name: "Acre 1832", at: [35.08, 32.93], kind: "battle", label: "left" },
    { name: "Konya 1832", at: [32.48, 37.87], kind: "battle", label: "above" },
    { name: "Nezib 1839", at: [37.79, 37.01], kind: "battle", label: "right" },
    { name: "Istanbul,\nOttoman capital", at: [28.98, 41.01], kind: "city", label: "right" },
  ],
  legend: [{ kind: "major", text: "Center of Muhammad Ali's state" }, { kind: "route", text: "Egyptian army on land" }, { kind: "sea", text: "Egyptian forces by sea" },
    { kind: "battle", text: "Battle, siege, or capture, with year" }],
  legendAt: "bottom-left", legendWidth: 250,
  checked: ["Wikipedia, \"Muhammad Ali of Egypt\" (Sudan 1820 to 1824, Navarino 1827, Acre 1832, Konya 1832, Nezib 1839, the 1840 settlement), \"Ottoman-Wahhabi war\" (Medina 1812, Mecca 1813, Diriyah 1818), and \"Khartoum\" (founded 1821)", "Encyclopaedia Britannica, \"Muhammad Ali (pasha and viceroy of Egypt)\" (Arabia, Sudan, Navarino 1827, Syria 1831 to 1833, Nizip 1839, the 1840 and 1841 settlements)"],
};

const belgium = {
  id: "u5f-belgium",
  caption: "Industry and railways in Belgium, 1799 to 1843 (railway routes approximate)",
  alt: "Map of Belgium. A belt of coalfields runs from Mons in the southwest through Charleroi and Namur to Liège in the east. Seraing, beside Liège, is marked for the ironworks and machine works founded by John Cockerill, born in England, in 1817. Ghent, in the northwest, far from the coalfields, is marked for cotton mills begun in 1799 with a spinning machine smuggled from Britain. Antwerp is marked as the main seaport. State railways completed by 1843 run out from Mechelen, the hub of the network: south to Brussels (the first line, 1835), north to Antwerp (1836), east through Leuven to Liège and on toward Germany, west through Ghent to the port of Ostend, and south from Brussels toward Mons and Charleroi.",
  bbox: [2.5, 49.85, 6.3, 51.45], width: 640, height: 420,
  regions: [
    { name: "North Sea", at: [2.85, 51.38], size: 11 }, { name: "FRANCE", at: [3.3, 50.05], size: 10 }, { name: "NETHERLANDS", at: [5.4, 51.4], size: 10 },
    { name: "PRUSSIA", at: [6.15, 50.3], size: 9 },
    { name: "coalfields", at: [4.15, 50.27], size: 11 }, { name: "coalfields", at: [5.85, 50.5], size: 11 },
  ],
  routes: [
    { kind: "route", through: [[4.36, 50.85], [4.48, 51.03]] },
    { kind: "route", through: [[4.48, 51.03], [4.4, 51.22]] },
    { kind: "route", through: [[4.48, 51.03], [4.7, 50.88], [5.2, 50.77], [5.57, 50.63], [6.08, 50.78]] },
    { kind: "route", through: [[4.48, 51.03], [4.1, 51.03], [3.72, 51.05], [3.22, 51.21], [2.92, 51.22]] },
    { kind: "route", through: [[4.36, 50.85], [4.13, 50.61], [3.95, 50.45]] },
    { kind: "route", through: [[4.13, 50.61], [4.44, 50.41], [4.87, 50.47]] },
  ],
  places: [
    { name: "Mechelen:\nrailway hub", at: [4.48, 51.03], kind: "major", label: "right" },
    { name: "Brussels (first line,\nto Mechelen, 1835)", at: [4.36, 50.85], kind: "major", label: [-8, 4] },
    { name: "Antwerp: seaport,\nline 1836", at: [4.4, 51.22], label: "right" },
    { name: "Ghent: cotton mills with a spinning\nmachine smuggled from Britain, 1799", at: [3.72, 51.05], label: [0, 20] },
    { name: "Ostend", at: [2.92, 51.22], label: "below" },
    { name: "Leuven", at: [4.7, 50.88], label: "below" },
    { name: "Liège", at: [5.57, 50.63], label: [6, -6] },
    { name: "Seraing: Cockerill ironworks\nand machine works, 1817", at: [5.5, 50.6], kind: "major", label: [-8, 16] },
    { name: "Mons", at: [3.95, 50.45], label: "left" },
    { name: "Charleroi", at: [4.44, 50.41], label: "below" },
    { name: "Namur", at: [4.87, 50.47], label: "right" },
  ],
  legend: [{ kind: "route", text: "State railway completed by 1843" }, { kind: "major", text: "Rail hub, capital, or ironworks" }],
  legendAt: "bottom-left", legendWidth: 240,
  checked: ["Wikipedia, \"History of rail transport in Belgium\" (Brussels to Mechelen 1835, Antwerp 1836, main lines by 1843, link to Cologne 1843) and \"Mechelen\" (hub of the network)", "Wikipedia, \"Sillon industriel\" (the coal belt from the Borinage through Mons, Charleroi, and Namur to Liège), \"Lieven Bauwens\" (Ghent mill, 1799), and \"John Cockerill (industrialist)\" (Seraing, 1817)"],
};

export const maps = [greece, egypt, belgium];
