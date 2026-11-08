// Unit 9 map specs (unit assessment w9a and the topic quizzes t93 and t94). Format: see the top of tools/build-maps.mjs.

const smallpox = {
  id: "u9-smallpox",
  caption: "The last cases of smallpox in each region, 1971 to 1977, and the headquarters of the World Health Organization",
  alt: "Map from South America to Southeast Asia marking the place and year of the last smallpox case in each region. Rio de Janeiro, Brazil, 1971, the last case in the Americas. Java, Indonesia, 1972. Bhola Island, Bangladesh, 1975, the last case in Asia. El Kere, Ethiopia, 1976. Merca, Somalia, 1977, the last natural case in the world. A larger dot marks Geneva, Switzerland, the headquarters of the World Health Organization. The last cases move from the Americas and Southeast Asia to South Asia and then to the Horn of Africa.",
  bbox: [-75, -36, 120, 54], width: 780, height: 440,
  regions: [
    { name: "SOUTH AMERICA", at: [-58, -8], size: 10 }, { name: "AFRICA", at: [20, 16], size: 11 }, { name: "EUROPE", at: [22, 52], size: 10 },
    { name: "ASIA", at: [88, 42], size: 11 }, { name: "Atlantic Ocean", at: [-22, 5], size: 11 }, { name: "Indian Ocean", at: [72, -12], size: 11 },
  ],
  places: [
    { name: "Geneva (WHO headquarters)", at: [6.14, 46.2], kind: "major", label: "left" },
    { name: "Rio de Janeiro, Brazil, 1971", at: [-43.2, -22.9], label: "right" },
    { name: "Java, Indonesia, 1972", at: [106.63, -6.18], label: "below" },
    { name: "Bhola Island, Bangladesh, 1975", at: [90.65, 22.3], label: "left" },
    { name: "El Kere, Ethiopia, 1976", at: [42.1, 5.8], label: "left" },
    { name: "Merca, Somalia, 1977", at: [44.77, 1.71], label: "right" },
  ],
  legend: [{ kind: "city", text: "Last case in the region, with year" }, { kind: "major", text: "World Health Organization" }],
  legendAt: "bottom-right", legendWidth: 245,
  checked: [
    "Frank Fenner and others, Smallpox and Its Eradication (World Health Organization, 1988), chapters 12 (South America: Rio de Janeiro, 19 April 1971) and 13 (Indonesia: villages in Tangerang, West Java, 23 January 1972)",
    "Centers for Disease Control, MMWR, \"Smallpox Surveillance, Worldwide\" (MMWR, January 6 and May 5, 1978, reprinted 1999: Bangladesh, 16 October 1975; El Kere Region, Ethiopia, 9 August 1976; Merca District, Somalia, 26 October 1977), with NPR (2022) for Bhola Island",
  ],
};

const disasters = {
  id: "u9-disasters",
  caption: "Environmental and industrial disasters in Europe and Asia, 1956 to 2011",
  alt: "Map of Europe and Asia marking environmental disasters with their years. Dots mark poisoning from industry or farming: Minamata, Japan, 1956, where a chemical factory's mercury poisoned people who ate fish; the Aral Sea in Soviet Central Asia, which shrank from the 1960s as its rivers were taken for irrigation; and Bhopal, India, 1984, where gas leaked from a pesticide plant. X marks show nuclear power plant accidents: Chernobyl in the Soviet Union, 1986, and Fukushima, Japan, 2011. The label SOVIET UNION (TO 1991) covers northern Asia.",
  bbox: [10, 8, 150, 60], width: 720, height: 430,
  regions: [
    { name: "SOVIET UNION (TO 1991)", at: [80, 57], size: 11 }, { name: "CHINA", at: [103, 33], size: 10 },
    { name: "Indian Ocean", at: [75, 10], size: 11 }, { name: "Pacific Ocean", at: [143, 25], size: 10 },
  ],
  places: [
    { name: "Chernobyl, 1986", at: [30.1, 51.39], kind: "battle", label: "below" },
    { name: "Aral Sea, 1960s to 2000s", at: [59.6, 45.0], label: "right" },
    { name: "Bhopal, 1984", at: [77.41, 23.26], label: "right" },
    { name: "Minamata, 1956", at: [130.4, 32.2], label: "left" },
    { name: "Fukushima, 2011", at: [141.03, 37.42], kind: "battle", label: "above" },
  ],
  legend: [{ kind: "city", text: "Poisoning from industry or farming" }, { kind: "battle", text: "Nuclear power plant accident" }],
  legendAt: "bottom-left", legendWidth: 245,
  checked: [
    "Encyclopaedia Britannica, \"Minamata disease\" (1956, Nippon Chisso), \"Bhopal disaster\" (December 3, 1984, Union Carbide), and \"Chernobyl disaster\" (April 25 to 26, 1986, Ukraine, Soviet Union)",
    "Wikipedia, \"Minamata disease\", \"Bhopal disaster\", \"Chernobyl disaster\", \"Aral Sea\" (shrinking from the 1960s, Kok-Aral dam 2005), and \"Fukushima nuclear accident\" (March 11, 2011), each checked against its cited sources",
  ],
};

const sez = {
  id: "u9-sez",
  caption: "China opens its coast: special economic zones, 1979 to 1988, and the fourteen coastal cities opened in 1984",
  alt: "Map of eastern China. Large dots mark special economic zones: Shenzhen next to Hong Kong, Zhuhai next to Macau, Shantou, and Xiamen across the strait from Taiwan, all opened in 1979 to 1980 on the southern coast, and Hainan Island, made a zone in 1988. Small dots mark the fourteen coastal cities opened to foreign investment in 1984, spread along the whole coast from Dalian and Qinhuangdao in the north through Tianjin, Yantai, Qingdao, Lianyungang, Nantong, Shanghai, Ningbo, Wenzhou, and Fuzhou to Guangzhou, Zhanjiang, and Beihai in the south. Hong Kong, a British colony until 1997, and Taiwan are labeled.",
  bbox: [105, 17.5, 126, 41.5], width: 520, height: 620,
  regions: [
    { name: "CHINA", at: [111, 32], size: 12 }, { name: "Yellow Sea", at: [123.4, 35], size: 10 }, { name: "East China Sea", at: [124.2, 28.5], size: 10 },
    { name: "South China Sea", at: [115.5, 18.6], size: 10 }, { name: "TAIWAN", at: [123.1, 23.4], size: 9 },
    { name: "Hong Kong (British to 1997)", at: [116.2, 21.55], size: 9 },
  ],
  places: [
    { name: "Shenzhen", at: [114.06, 22.54], kind: "major", label: "right" },
    { name: "Zhuhai", at: [113.58, 22.27], kind: "major", label: "left" },
    { name: "Shantou", at: [116.68, 23.35], kind: "major", label: "right" },
    { name: "Xiamen", at: [118.09, 24.48], kind: "major", label: "right" },
    { name: "Hainan (1988)", at: [110.34, 20.04], kind: "major", label: "below" },
    { name: "Dalian", at: [121.6, 38.91], label: "right" },
    { name: "Qinhuangdao", at: [119.6, 39.93], label: "above" },
    { name: "Tianjin", at: [117.2, 39.13], label: "left" },
    { name: "Yantai", at: [121.39, 37.54], label: "right" },
    { name: "Qingdao", at: [120.38, 36.07], label: "right" },
    { name: "Lianyungang", at: [119.22, 34.6], label: "left" },
    { name: "Nantong", at: [120.86, 32.0], label: "left" },
    { name: "Shanghai", at: [121.47, 31.23], label: "right" },
    { name: "Ningbo", at: [121.55, 29.87], label: "right" },
    { name: "Wenzhou", at: [120.67, 28.0], label: "right" },
    { name: "Fuzhou", at: [119.3, 26.08], label: "right" },
    { name: "Guangzhou", at: [113.26, 23.13], label: "left" },
    { name: "Zhanjiang", at: [110.36, 21.27], label: "below" },
    { name: "Beihai", at: [109.12, 21.48], label: "left" },
  ],
  legend: [{ kind: "major", text: "Special economic zone, 1979 to 1980" }, { kind: "city", text: "Coastal city opened, 1984" }],
  legendAt: "top-left", legendWidth: 240,
  checked: [
    "Encyclopaedia Britannica, \"Shenzhen\" (special economic zone from 1979, next to Hong Kong), and Wikipedia, \"Special economic zones of China\" (Shenzhen, Zhuhai, Shantou, Xiamen, 1979 to 1980; Hainan, 1988; the fourteen cities of 1984)",
    "Legislative Council of Hong Kong, Research Office, Essentials ISE03/15-16, \"Free economic and trade zones in the Mainland\" (2015), for the fourteen coastal cities opened in May 1984",
  ],
};

export const maps = [smallpox, disasters, sez];
