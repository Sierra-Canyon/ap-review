// Unit 5 maps for the review bank (decks/whap/u5x.js, sets u5-ns4 and u5-ns6). Spec format: tools/build-maps.mjs.
// HANDOFF.md, section 2e. Each map's places and dates were checked against the two references in its `checked` line.

const stateIndustry = {
  id: "u5r-state-industry",
  caption: "Some industrial projects begun by governments outside western Europe, 1805 to 1891, with the year each began (for Cairo, the years of Muhammad Ali's rule)",
  alt: "Map from Egypt to Japan. In Egypt, Cairo is marked for the state textile mills and arsenals of Muhammad Ali, who ruled from 1805 to 1848. In China, Shanghai is marked for the Jiangnan Arsenal, guns and steamships, 1865; Fuzhou for the Fuzhou Navy Yard, warships, 1866; and Hanyang, on the Yangzi River inland, for an ironworks and arsenal begun in 1890 and 1891. In Japan, Tomioka is marked for a state silk mill, 1872, and a short line marks the state railway from Tokyo to Yokohama, 1872. Across Russia, a dashed line marks the Trans-Siberian Railway, begun in 1891 at Vladivostok and Chelyabinsk.",
  bbox: [26, 18, 157, 60], width: 760, height: 430,
  regions: [
    { name: "EGYPT", at: [29, 24.5], size: 10 }, { name: "OTTOMAN EMPIRE", at: [36, 39.5], size: 9 }, { name: "RUSSIAN EMPIRE", at: [92, 57], size: 11 },
    { name: "QING CHINA", at: [100, 37], size: 11 }, { name: "JAPAN", at: [140.5, 40.5], size: 9 }, { name: "INDIA", at: [78.5, 22], size: 10 },
  ],
  routes: [
    { kind: "route", through: [[61.4, 55.16], [73.37, 54.98], [82.9, 55.03], [92.87, 56.01], [104.3, 52.29], [113.5, 52.03], [127.5, 50.27], [135.07, 48.48], [131.89, 43.12]] },
    { kind: "route2", through: [[139.77, 35.67], [139.64, 35.44]] },
  ],
  places: [
    { name: "Cairo: state textile mills and\narsenals of Muhammad Ali,\nwho ruled 1805 to 1848", at: [31.24, 30.04], kind: "major", label: "right" },
    { name: "Shanghai: Jiangnan Arsenal\n(guns, steamships), 1865", at: [121.47, 31.23], kind: "major", label: "right" },
    { name: "Fuzhou: Navy Yard\n(warships), 1866", at: [119.3, 26.08], kind: "major", label: "right" },
    { name: "Hanyang: ironworks\nand arsenal, 1890", at: [114.27, 30.55], kind: "major", label: "left" },
    { name: "Tomioka: state\nsilk mill, 1872", at: [138.89, 36.26], kind: "major", label: [10, -6] },
    { name: "Tokyo to Yokohama\nrailway, 1872", at: [139.7, 35.55], label: [12, 30] },
    { name: "Chelyabinsk, 1891", at: [61.4, 55.16], label: "left" },
    { name: "Vladivostok, 1891", at: [131.89, 43.12], label: "left" },
  ],
  legend: [{ kind: "major", text: "State factory, arsenal, or shipyard" }, { kind: "route", text: "Trans-Siberian Railway, begun 1891 (route approximate)" }, { kind: "route2", text: "Japan's first railway, 1872" }],
  legendAt: "bottom-left", legendWidth: 330,
  checked: ["Wikipedia, \"Jiangnan Shipyard\", \"Foochow Arsenal\", \"Hanyang Arsenal\", \"Tomioka Silk Mill\", \"Shinbashi Station\", \"Trans-Siberian Railway\", and \"Muhammad Ali of Egypt\"", "Encyclopaedia Britannica, \"Trans-Siberian Railroad\" and \"Muhammad Ali (pasha and viceroy of Egypt)\", and Immanuel C. Y. Hsu, The Rise of Modern China, on the Self-Strengthening arsenals"],
};

const industrySpreads = {
  id: "u5r-industry-spreads",
  caption: "Machine industry beyond Britain: some early mills and works, with the year each began",
  alt: "World map from North America to Japan. In Britain, Manchester is marked for steam-powered cotton mills in the 1780s. In Belgium, Seraing is marked for the ironworks and machine works of John Cockerill, born in England, 1817. In Germany, Essen is marked for the Krupp steel works, 1811. In the United States, Lowell, Massachusetts, is marked for textile mills built on British loom designs, 1823, and Braddock near Pittsburgh for the Edgar Thomson steel works, which used the Bessemer process, 1875. In the Russian Empire, Yuzovka is marked for the ironworks of John Hughes, born in Wales, 1870. In India, Bombay is marked for the first Indian-owned steam cotton mill, 1854. In Japan, Osaka is marked for the Osaka Spinning Company, a private cotton mill, 1882.",
  bbox: [-95, 12, 142, 62], width: 760, height: 400,
  regions: [{ name: "Atlantic Ocean", at: [-45, 20], size: 11 }, { name: "Indian Ocean", at: [86, 14], size: 10 }, { name: "RUSSIAN EMPIRE", at: [70, 56], size: 10 }],
  places: [
    { name: "Manchester: steam cotton\nmills, 1780s", at: [-2.24, 53.48], kind: "major", label: "left" },
    { name: "Seraing: works of English-born\nJohn Cockerill, 1817", at: [5.5, 50.6], label: [-8, 18] },
    { name: "Essen: Krupp\nsteel works, 1811", at: [7.01, 51.46], label: [14, -20] },
    { name: "Lowell: mills on British\nloom designs, 1823", at: [-71.32, 42.63], label: [8, 26] },
    { name: "Pittsburgh: Bessemer\nsteel works, 1875", at: [-79.86, 40.4], label: "above" },
    { name: "Yuzovka: ironworks of\nWelsh-born John Hughes, 1870", at: [37.8, 48.0], label: [0, 22] },
    { name: "Bombay: first Indian-owned\nsteam cotton mill, 1854", at: [72.83, 18.93], label: "left" },
    { name: "Osaka: Osaka Spinning\nCompany, 1882", at: [135.5, 34.69], label: [-10, 22] },
  ],
  legend: [{ kind: "major", text: "Britain, where machine industry began" }, { kind: "city", text: "Early mill or works elsewhere" }],
  legendAt: "bottom-left", legendWidth: 260,
  checked: ["Wikipedia, \"John Cockerill (industrialist)\", \"John Hughes (businessman)\", \"Krupp\", \"Merrimack Manufacturing Company\", \"Francis Cabot Lowell\", \"Edgar Thomson Steel Works\", \"Cotton mill\" (for Bombay, 1854), and \"Toyobo\" (for the Osaka Spinning Company, 1882)", "Encyclopaedia Britannica, \"Seraing\", and Peter N. Stearns, The Industrial Revolution in World History, on the spread of industry to Belgium, Germany, the United States, Russia, India, and Japan"],
};

export const maps = [stateIndustry, industrySpreads];
