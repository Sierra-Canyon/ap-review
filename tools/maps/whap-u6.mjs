// Map specs for AP World History, Unit 6 assessments and topic quizzes (drawn by tools/build-maps.mjs). Coordinates are
// [longitude, latitude]. Every place and date here is a claim the site makes: each map lists the references it was checked against.

const centralAsia = {
  id: "u6-central-asia",
  caption: "Russia's advance into Central Asia, 1853 to 1884: the year Russian forces took or founded each place",
  alt: "Map of Central Asia between the Caspian Sea and the Qing Empire, with the Russian base at Orenburg in the north. Dots mark the year Russian forces took or founded each place: Perovsk, on the Syr Darya, 1853; Tashkent, 1865; Samarkand, 1868; Bukhara, 1868, made a protectorate; Krasnovodsk, on the Caspian coast, 1869; Khiva, 1873, made a protectorate; Kokand, 1876; and Merv, 1884. A cross marks the battle of Geok Tepe, 1881. The dates move from the steppe in the north toward Persia and Afghanistan in the south, and British India lies beyond Afghanistan to the southeast.",
  bbox: [48, 31, 80, 53], width: 640, height: 500,
  regions: [
    { name: "RUSSIAN EMPIRE", at: [57.5, 49.6], size: 11 },
    { name: "KAZAKH STEPPE", at: [70, 47.2], size: 11 },
    { name: "Caspian Sea", at: [50.6, 43.2], size: 10 },
    { name: "PERSIA", at: [55, 33.2], size: 11 },
    { name: "AFGHANISTAN", at: [66, 33.6], size: 11 },
    { name: "BRITISH INDIA", at: [75.5, 31.8], size: 11 },
    { name: "QING EMPIRE", at: [77.5, 42.8], size: 11 },
  ],
  places: [
    { name: "Orenburg", at: [55.1, 51.77], kind: "major", label: "right" },
    { name: "Perovsk 1853", at: [65.51, 44.85], label: "right" },
    { name: "Tashkent 1865", at: [69.24, 41.3], label: "above" },
    { name: "Kokand 1876", at: [70.94, 40.53], label: "right" },
    { name: "Samarkand 1868", at: [66.96, 39.65], label: "right" },
    { name: "Bukhara 1868\n(protectorate)", at: [64.42, 39.77], label: "below" },
    { name: "Khiva 1873\n(protectorate)", at: [60.36, 41.38], label: [0, -24] },
    { name: "Krasnovodsk 1869", at: [52.97, 40.02], label: "below" },
    { name: "Geok Tepe 1881", at: [57.97, 38.15], kind: "battle", label: "left" },
    { name: "Merv 1884", at: [61.83, 37.6], label: "right" },
  ],
  legend: [{ kind: "major", text: "Russian base" }, { kind: "city", text: "Taken or founded by Russia, with year" }, { kind: "battle", text: "Battle, with year" }],
  legendAt: "top-right", legendWidth: 290,
  checked: [
    "Encyclopaedia Britannica: \"Konstantin Petrovich Kaufmann\" (Samarkand and Bukhara 1868, Khiva 1873), \"Uzbekistan: Russian and Soviet rule\" (Bukhara and Khiva protectorates, Kokand annexed 1876), \"Tashkent\" (1865), \"Kokand\" (1876), \"Qyzylorda\" (Ak-Mechet taken and renamed Perovsk, 1853), \"Turkmenistan: Turkmen tribes and Russian invasion\" (Krasnovodsk 1869, Gök-Tepe 1881), \"Merv\" (1884), \"Orenburg\"",
    "Wikipedia, \"Russian conquest of Central Asia\" (Perovsky's 1853 campaign, Tashkent 1865, Samarkand 1868, Bukhara treaty July 1868, Khiva 1873, Kokand 1876, Krasnovodsk 1869, Geok Tepe taken January 1881, Merv March 1884, Orenburg as the base)",
  ],
};

const goldRushes = {
  id: "u6-gold-rushes",
  caption: "Major gold rushes, 1848 to 1896, with the year each began",
  alt: "World map marking the places where major gold rushes began, with the year: California, 1848; Victoria, in southeastern Australia, 1851; the Fraser River in British Columbia, 1858; Otago, in New Zealand, 1861; the Witwatersrand in South Africa, 1886; Kalgoorlie, in Western Australia, 1893; and the Klondike in northwestern Canada, 1896. All of them lie in lands that Europeans had recently settled or were settling around the Pacific and in southern Africa, far from Europe and China.",
  bbox: [-145, -48, 180, 66], width: 760, height: 400,
  regions: [
    { name: "Pacific Ocean", at: [-130, 10], size: 10 }, { name: "Atlantic Ocean", at: [-35, 15], size: 10 },
    { name: "Indian Ocean", at: [75, -12], size: 10 },
    { name: "EUROPE", at: [15, 50], size: 10 }, { name: "CHINA", at: [105, 34], size: 10 },
  ],
  places: [
    { name: "Klondike 1896", at: [-139.43, 64.06], kind: "major", label: "right" },
    { name: "Fraser River 1858", at: [-121.43, 49.56], kind: "major", label: "right" },
    { name: "California 1848", at: [-120.89, 38.8], kind: "major", label: "right" },
    { name: "Witwatersrand 1886", at: [28.05, -26.2], kind: "major", label: "left" },
    { name: "Kalgoorlie 1893", at: [121.47, -30.75], kind: "major", label: "left" },
    { name: "Victoria 1851", at: [143.85, -37.56], kind: "major", label: "below" },
    { name: "Otago 1861", at: [169.68, -45.91], kind: "major", label: [-6, -10] },
  ],
  legend: [{ kind: "major", text: "Gold rush, with the year it began" }],
  legendAt: "bottom-left", legendWidth: 230,
  checked: [
    "Encyclopaedia Britannica, \"Gold rush\" (California 1848, Victoria 1851, Fraser River 1858, Witwatersrand 1886, Klondike 1896), \"Otago\" (1861), and \"Kalgoorlie-Boulder\" (1893)",
    "Wikipedia, \"Gold rush\" (California 1848 to 1855, Victoria 1851, Fraser Canyon 1858 to 1861, Otago from 1861, Witwatersrand 1886, Kalgoorlie and Coolgardie 1893, Klondike 1896 to 1899)",
  ],
};

export const maps = [centralAsia, goldRushes];
