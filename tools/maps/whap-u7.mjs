// Maps for Unit 7 (Global Conflict): the unit assessment w7a and the topic quizzes t75 and t77. Drawn by tools/build-maps.mjs.
// Places are points with names only; the site draws no borders.

const newStates = {
  id: "u7-new-states",
  caption: "New states in Europe and the Middle East after the First World War: each point marks the capital, with the year the state declared independence or was proclaimed. The italic names in the Middle East are lands taken from the Ottoman Empire and ruled as League of Nations mandates from 1920.",
  alt: "Map of Europe and the Middle East with points for the capitals of new states and the year each declared independence or was proclaimed. In the north, along the Baltic Sea: Finland 1917 at Helsinki, Estonia 1918 at Tallinn, Latvia 1918 at Riga, and Lithuania 1918 at Kaunas. In central Europe: Poland 1918 at Warsaw, Czechoslovakia 1918 at Prague, Austria 1918 at Vienna, Hungary 1918 at Budapest, and the Kingdom of the Serbs, Croats, and Slovenes 1918 at Belgrade. In Anatolia: the Republic of Turkey 1923 at Ankara. South of Turkey, with no capitals marked, italic names read Syria and Lebanon, French mandate; Iraq, British mandate; and Palestine and Transjordan, British mandate. Paris, where the peace conference met in 1919, is marked in the west.",
  bbox: [-4, 28, 50, 64], width: 700, height: 520,
  regions: [
    { name: "Baltic Sea", at: [19.2, 57.6], size: 10 },
    { name: "Black Sea", at: [34, 43.4], size: 10 },
    { name: "Mediterranean Sea", at: [18, 34.6], size: 10 },
    { name: "SOVIET RUSSIA", at: [40, 56.5], size: 10 },
    { name: "GERMANY", at: [10, 51.2], size: 10 },
    { name: "Syria and Lebanon", at: [38.6, 35.5], size: 10 },
    { name: "(French mandate)", at: [38.6, 34.6], size: 9 },
    { name: "Iraq", at: [43.2, 32.4], size: 10 },
    { name: "(British mandate)", at: [43.2, 31.5], size: 9 },
    { name: "Palestine and Transjordan", at: [37.6, 29.9], size: 10 },
    { name: "(British mandate)", at: [37.6, 29.0], size: 9 },
  ],
  places: [
    { name: "Paris (peace conference, 1919)", at: [2.35, 48.86], kind: "city", label: "below" },
    { name: "Finland 1917", at: [24.94, 60.17], kind: "major", label: "right" },
    { name: "Estonia 1918", at: [24.75, 59.44], kind: "major", label: "left" },
    { name: "Latvia 1918", at: [24.11, 56.95], kind: "major", label: "right" },
    { name: "Lithuania 1918", at: [23.9, 54.9], kind: "major", label: "right" },
    { name: "Poland 1918", at: [21.01, 52.23], kind: "major", label: "right" },
    { name: "Czechoslovakia 1918", at: [14.42, 50.08], kind: "major", label: "above" },
    { name: "Austria 1918", at: [16.37, 48.21], kind: "major", label: "left" },
    { name: "Hungary 1918", at: [19.04, 47.5], kind: "major", label: "right" },
    { name: "Kingdom of the Serbs,\nCroats, and Slovenes 1918", at: [20.46, 44.8], kind: "major", label: [-8, 14] },
    { name: "Turkey 1923", at: [32.86, 39.93], kind: "major", label: "right" },
  ],
  legend: [{ kind: "major", text: "Capital of a new state, with the year" }, { kind: "city", text: "Site of the peace conference" }],
  legendAt: "bottom-left", legendWidth: 250,
  checked: ["Encyclopaedia Britannica, \"Baltic states: Independence and the 20th century\", and its entries for each state", "U.S. Department of State, Office of the Historian, A Guide to the United States' History of Recognition, Diplomatic, and Consular Relations, by Country"],
};

const pacific = {
  id: "u7-pacific",
  caption: "Battles of the war in Asia and the Pacific, 1941 to 1945, with the year of each",
  alt: "Map of East Asia, Southeast Asia, and the Pacific Ocean marking battles with an X and the year. Far to the east in the central Pacific: Pearl Harbor, Hawaii, 1941, and Midway 1942. In Southeast Asia: Singapore 1942. Northeast of Australia: the Coral Sea 1942 and Guadalcanal 1942 to 1943. In the Philippines: Leyte Gulf 1944. Close to Japan: Iwo Jima 1945 and Okinawa 1945. In Japan, larger points mark Hiroshima and Nagasaki, destroyed by atomic bombs in 1945, and a smaller point marks Tokyo. The Dutch East Indies are labeled between Singapore and Australia.",
  bbox: [96, -22, 204, 46], width: 760, height: 480,
  regions: [
    { name: "JAPAN", at: [138.6, 38.6], size: 10 },
    { name: "CHINA", at: [108, 33], size: 11 },
    { name: "AUSTRALIA", at: [134, -19], size: 11 },
    { name: "Dutch East Indies", at: [114, -9.6], size: 10 },
    { name: "Philippines", at: [121.4, 16.6], size: 9 },
    { name: "Pacific Ocean", at: [165, 10], size: 13 },
    { name: "Hawaii", at: [203, 23.6], size: 9 },
  ],
  places: [
    { name: "Pearl Harbor 1941", at: [202.05, 21.35], kind: "battle", label: "left" },
    { name: "Midway 1942", at: [182.63, 28.21], kind: "battle", label: "left" },
    { name: "Singapore 1942", at: [103.85, 1.29], kind: "battle", label: "right" },
    { name: "Coral Sea 1942", at: [155, -15.5], kind: "battle", label: "right" },
    { name: "Guadalcanal 1942 to 1943", at: [160.15, -9.6], kind: "battle", label: "right" },
    { name: "Leyte Gulf 1944", at: [125.5, 10.8], kind: "battle", label: "right" },
    { name: "Iwo Jima 1945", at: [141.32, 24.78], kind: "battle", label: "right" },
    { name: "Okinawa 1945", at: [127.9, 26.5], kind: "battle", label: "left" },
    { name: "Tokyo", at: [139.69, 35.68], kind: "city", label: "right" },
    { name: "Hiroshima 1945", at: [132.45, 34.39], kind: "major", label: [-6, -9] },
    { name: "Nagasaki 1945", at: [129.88, 32.75], kind: "major", label: "left" },
  ],
  legend: [{ kind: "battle", text: "Battle or campaign, with its year" }, { kind: "major", text: "City destroyed by an atomic bomb" }, { kind: "city", text: "Capital of Japan" }],
  legendAt: "top-right", legendWidth: 245,
  checked: ["Encyclopaedia Britannica, \"Pacific War\", \"Battle of Midway\", and \"World War II: The end of the Japanese war\"", "Royal Australian Navy, Sea Power Centre, \"The Battles of the Coral Sea and Midway\""],
};

const camps = {
  id: "u7-camps",
  caption: "Nazi concentration camps in Germany and killing centers in German-occupied Poland, with the year each camp opened or, for a killing center, the year mass killing by gas began",
  alt: "Map of central Europe. Inside Germany, smaller points mark three concentration camps with the year each opened: Dachau 1933, near Munich in the south; Sachsenhausen 1936, near Berlin; and Buchenwald 1937, near Weimar. Farther east, in German-occupied Poland, larger points mark the five killing centers with the year mass killing by gas began: Chelmno 1941 in the west of Poland; Treblinka 1942, in the northeast; Sobibor 1942 and Belzec 1942, near the eastern edge of Poland; and Auschwitz-Birkenau 1942, in the south.",
  bbox: [6, 46.5, 27, 55.5], width: 700, height: 460,
  regions: [
    { name: "GERMANY", at: [9.6, 51.6], size: 11 },
    { name: "GERMAN-OCCUPIED POLAND", at: [20.5, 53.9], size: 10 },
    { name: "Baltic Sea", at: [15.5, 55.0], size: 10 },
  ],
  places: [
    { name: "Dachau 1933", at: [11.47, 48.27], kind: "city", label: "right" },
    { name: "Sachsenhausen 1936", at: [13.26, 52.77], kind: "city", label: "above" },
    { name: "Buchenwald 1937", at: [11.25, 51.02], kind: "city", label: "left" },
    { name: "Chelmno 1941", at: [18.73, 52.15], kind: "major", label: "below" },
    { name: "Treblinka 1942", at: [22.05, 52.63], kind: "major", label: "right" },
    { name: "Sobibor 1942", at: [23.59, 51.45], kind: "major", label: "right" },
    { name: "Belzec 1942", at: [23.46, 50.37], kind: "major", label: "right" },
    { name: "Auschwitz-Birkenau 1942", at: [19.18, 50.03], kind: "major", label: "below" },
  ],
  legend: [{ kind: "city", text: "Concentration camp, year opened" }, { kind: "major", text: "Killing center, year gassing began" }],
  legendAt: "bottom-left", legendWidth: 250,
  checked: ["United States Holocaust Memorial Museum, Holocaust Encyclopedia, \"Killing Centers: In Depth\" and \"Concentration Camps, 1933 to 1939\"", "Encyclopaedia Britannica, \"extermination camp\", \"Dachau\", \"Buchenwald\", and \"Sachsenhausen\""],
};

export const maps = [newStates, pacific, camps];
