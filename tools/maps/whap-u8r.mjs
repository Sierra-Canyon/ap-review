// Map specs for the AP World History Unit 8 review bank (writer tag u8r), drawn by tools/build-maps.mjs.
// Coordinates are [longitude, latitude]. Every place and date here is a claim the site makes: each map lists the two
// references it was checked against.

const landReform = {
  id: "u8r-land-reform",
  caption: "Land reform in four countries, 1953 to 1975, with the government that carried it out",
  alt: "World map from the Caribbean to Southeast Asia marking four land reforms. Cuba, 1959: Fidel Castro's revolutionary government breaks up large estates, including American-owned ones. Iran, 1963: the Shah, a monarch allied with the United States, buys land from large landlords and sells it to peasants in the White Revolution. Ethiopia, 1975: the Derg, military officers who overthrew Emperor Haile Selassie in 1974 and declared socialism, nationalizes all rural land. North Vietnam, 1953 to 1956: the communist government takes land from landlords, and thousands of people labeled class enemies are executed. The legend marks Cuba, Ethiopia, and North Vietnam as reforms by communist or socialist governments and Iran as a reform by an anticommunist monarchy allied with the United States.",
  bbox: [-90, 2, 112, 42], width: 780, height: 330,
  regions: [
    { name: "Atlantic Ocean", at: [-40, 20], size: 12 }, { name: "Indian Ocean", at: [70, 6], size: 12 },
    { name: "AFRICA", at: [18, 14], size: 12 },
  ],
  places: [
    { name: "Cuba, 1959: Castro's revolutionary\ngovernment breaks up large estates,\nincluding American-owned ones", at: [-82.37, 23.13], kind: "major", label: [8, 22] },
    { name: "Iran, 1963: the Shah, allied with\nthe United States, buys landlords'\nland and sells it to peasants\n(the White Revolution)", at: [51.39, 35.69], kind: "city", label: [-8, -40] },
    { name: "Ethiopia, 1975: the Derg, officers who\noverthrew the emperor in 1974 and\ndeclared socialism, nationalizes\nall rural land", at: [38.75, 9.03], kind: "major", label: [8, 4] },
    { name: "North Vietnam, 1953 to 1956:\nthe communist government\ntakes landlords' land and\nexecutes thousands", at: [105.85, 21.03], kind: "major", label: [-8, -48] },
  ],
  legend: [
    { kind: "major", text: "Reform by a communist or socialist government" },
    { kind: "city", text: "Reform by an anticommunist monarch" },
  ],
  legendAt: "bottom-left", legendWidth: 300,
  checked: ["Encyclopaedia Britannica's entries \"Cuban Revolution,\" \"White Revolution,\" \"Derg,\" and \"Vietnam: The Democratic Republic of Vietnam\"", "Edwin E. Moise, Land Reform in China and North Vietnam (1983), and Ervand Abrahamian, A History of Modern Iran (2008)"],
};

const firstTests = {
  id: "u8r-first-tests",
  caption: "The first nuclear test by each state that tested a nuclear weapon, 1945 to 1998",
  alt: "World map marking the site and year of each state's first nuclear test. United States, 1945, near Alamogordo, New Mexico. Soviet Union, 1949, at Semipalatinsk in Soviet Kazakhstan. Britain, 1952, at the Monte Bello Islands off Western Australia. France, 1960, at Reggane in the Algerian Sahara, while Algeria was still ruled by France. China, 1964, at Lop Nur in Xinjiang. India, 1974, at Pokhran in Rajasthan. Pakistan, 1998, in the Chagai Hills of Balochistan, about two weeks after India's second series of tests.",
  bbox: [-122, -30, 138, 58], width: 780, height: 400,
  regions: [
    { name: "Atlantic Ocean", at: [-40, 4], size: 12 }, { name: "Indian Ocean", at: [78, -4], size: 12 },
  ],
  places: [
    { name: "United States, 1945\n(near Alamogordo, New Mexico)", at: [-106.48, 33.68], kind: "major", label: "below" },
    { name: "Soviet Union, 1949\n(Semipalatinsk, Kazakhstan)", at: [78.0, 50.1], kind: "major", label: "left" },
    { name: "Britain, 1952\n(Monte Bello Islands, Australia)", at: [115.55, -20.4], kind: "major", label: "left" },
    { name: "France, 1960\n(Reggane, Algeria)", at: [-0.06, 26.3], kind: "major", label: [-8, -16] },
    { name: "China, 1964\n(Lop Nur, Xinjiang)", at: [88.3, 41.5], kind: "major", label: "right" },
    { name: "India, 1974\n(Pokhran, Rajasthan)", at: [71.75, 27.08], kind: "major", label: [8, 14] },
    { name: "Pakistan, 1998\n(Chagai Hills, Balochistan)", at: [64.9, 28.8], kind: "major", label: [-8, 34] },
  ],
  legend: [{ kind: "major", text: "First nuclear test, with the testing state and year" }],
  legendAt: "bottom-left", legendWidth: 320,
  checked: ["the Comprehensive Nuclear-Test-Ban Treaty Organization's history of nuclear testing, 1945 to today", "Encyclopaedia Britannica's entries \"nuclear weapon\" and \"Trinity,\" \"Semipalatinsk,\" \"Reggane,\" \"Lop Nur,\" \"Pokhran,\" and \"Chagai Hills\""],
};

const nineteen89 = {
  id: "u8r-1989",
  caption: "The end of communist rule in Eastern Europe, 1989",
  alt: "Map of central and eastern Europe in 1989 with dated events. Gdańsk, Poland: the Solidarity trade union was founded in 1980. Warsaw: partly free elections in June 1989, and a Solidarity-led government in August 1989. Near Sopron, on Hungary's border with Austria: Hungary opens its border with Austria to East Germans, September 1989. Leipzig, East Germany: mass marches in October 1989. Berlin: the Wall opens, November 9, 1989. Sofia, Bulgaria: party leader Todor Zhivkov is removed, November 10, 1989. Prague, Czechoslovakia: the Velvet Revolution, November to December 1989. Bucharest, Romania, marked as violent: Nicolae Ceaușescu is overthrown and executed, December 1989. Every change except Romania's was peaceful.",
  bbox: [9, 40.6, 31, 56], width: 680, height: 560,
  regions: [
    { name: "Baltic Sea", at: [16.5, 55.4], size: 11 }, { name: "Black Sea", at: [30.0, 43.0], size: 11 },
    { name: "POLAND", at: [20.5, 52.9], size: 12 }, { name: "EAST GERMANY", at: [12.3, 51.3], size: 11 },
    { name: "WEST GERMANY", at: [9.8, 48.6], size: 10 }, { name: "CZECHOSLOVAKIA", at: [18.6, 48.7], size: 11 },
    { name: "AUSTRIA", at: [13.6, 47.6], size: 10 }, { name: "HUNGARY", at: [20.4, 46.3], size: 11 },
    { name: "ROMANIA", at: [24.6, 45.9], size: 11 }, { name: "BULGARIA", at: [25.4, 42.8], size: 11 },
    { name: "SOVIET UNION", at: [28.4, 54.2], size: 12 }, { name: "YUGOSLAVIA", at: [18.6, 43.3], size: 10 },
  ],
  places: [
    { name: "Gdańsk: Solidarity\nfounded, 1980", at: [18.65, 54.35], label: "right" },
    { name: "Warsaw: partly free elections,\nJune 1989; Solidarity-led\ngovernment, August 1989", at: [21.01, 52.23], label: "right" },
    { name: "Berlin: the Wall opens,\nNovember 9, 1989", at: [13.4, 52.52], label: "right" },
    { name: "Leipzig: mass marches,\nOctober 1989", at: [12.37, 51.34], label: [-8, 16] },
    { name: "Prague: Velvet Revolution,\nNovember to December 1989", at: [14.42, 50.08], label: [8, 16] },
    { name: "Hungary opens its border\nwith Austria, September 1989", at: [16.6, 47.68], label: [8, 16] },
    { name: "Sofia: party leader Zhivkov\nremoved, November 10, 1989", at: [23.32, 42.7], label: [-8, 16] },
    { name: "Bucharest: Ceaușescu overthrown\nand executed, December 1989", at: [26.1, 44.43], kind: "battle", label: [-8, 16] },
  ],
  legend: [{ kind: "city", text: "Peaceful change" }, { kind: "battle", text: "Violent overthrow" }],
  legendAt: "top-left", legendWidth: 170,
  checked: ["Encyclopaedia Britannica's entries \"Revolutions of 1989,\" \"Solidarity,\" \"Velvet Revolution,\" and \"Nicolae Ceaușescu\"", "Timothy Garton Ash, The Magic Lantern: The Revolution of '89 Witnessed in Warsaw, Budapest, Berlin, and Prague (1990), and Mary Elise Sarotte, The Collapse: The Accidental Opening of the Berlin Wall (2014)"],
};

export const maps = [landReform, firstTests, nineteen89];
