// Maps for the Unit 7 review bank (decks/whap/u7.js), 11/8: the Eastern Front and the protests of 1919 to 1920.
// Drawn by tools/build-maps.mjs. Places are points with names only; the site draws no borders.

const easternFront = {
  id: "u7r-eastern-front",
  caption: "The war between Germany and the Soviet Union, 1941 to 1943: battles and sieges, sites of mass shootings of Jews by German units, and industrial cities east of the Ural Mountains",
  alt: "Map of eastern Europe and the western Soviet Union. An X at Brest, on the western border of the Soviet Union, marks where the German invasion began in June 1941. Farther east, Xs mark the siege of Leningrad, 1941 to 1944, in the north; the battle of Moscow, 1941, where the German advance was stopped in December; the battle of Stalingrad, 1942 to 1943, on the Volga River in the south; and the battle of Kursk, 1943, between Moscow and the Black Sea. Larger points mark two sites where German units shot tens of thousands of Jews in 1941: Ponary, near Vilnius, and Babi Yar, at Kyiv. Far to the east, beyond the Ural Mountains and far from the front, smaller points mark Magnitogorsk, a steel city founded in 1929, and Chelyabinsk, which grew as factories were moved east in 1941.",
  bbox: [20, 44, 64, 61], width: 720, height: 440,
  regions: [
    { name: "SOVIET UNION", at: [47, 57.5], size: 11 },
    { name: "Ural Mountains", at: [59.2, 59.6], size: 10 },
    { name: "Black Sea", at: [34, 43.6], size: 10 },
    { name: "Baltic Sea", at: [20.6, 57.4], size: 10 },
  ],
  places: [
    { name: "Brest, June 1941\n(invasion begins)", at: [23.66, 52.08], kind: "battle", label: "below" },
    { name: "Leningrad 1941 to 1944", at: [30.31, 59.94], kind: "battle", label: "right" },
    { name: "Moscow 1941", at: [37.62, 55.75], kind: "battle", label: "right" },
    { name: "Kursk 1943", at: [36.19, 51.73], kind: "battle", label: "right" },
    { name: "Stalingrad 1942 to 1943", at: [44.51, 48.71], kind: "battle", label: "right" },
    { name: "Ponary 1941", at: [25.18, 54.63], kind: "major", label: "right" },
    { name: "Babi Yar, Kyiv, 1941", at: [30.52, 50.45], kind: "major", label: "below" },
    { name: "Magnitogorsk", at: [58.98, 53.41], kind: "city", label: "left" },
    { name: "Chelyabinsk", at: [61.4, 55.16], kind: "city", label: "above" },
  ],
  legend: [
    { kind: "battle", text: "Battle or siege, with its years" },
    { kind: "major", text: "Mass shooting of Jews by German units" },
    { kind: "city", text: "Industrial city east of the Urals" },
  ],
  legendAt: "bottom-right", legendWidth: 265,
  checked: ["Encyclopaedia Britannica, \"Battle of Moscow\", \"Siege of Leningrad\", \"Battle of Stalingrad\", \"Battle of Kursk\", \"Chelyabinsk\", and \"Magnitogorsk\"", "United States Holocaust Memorial Museum, Holocaust Encyclopedia, \"Invasion of the Soviet Union, June 1941\", \"Kiev and Babi Yar\", and \"Vilna\""],
};

const protests1919 = {
  id: "u7r-protests-1919",
  caption: "Protests and revolts against foreign rule, 1919 to 1920, while the peace conference met in Paris and after",
  alt: "Map from western Europe to East Asia. A small point marks Paris, where the peace conference met in 1919. Larger points mark protests: Cairo, Egypt, March 1919; Amritsar, India, April 1919; Seoul, Korea, March 1919; and Beijing, China, May 1919. An X marks an armed revolt on the middle Euphrates in Iraq, 1920.",
  bbox: [-5, 14, 132, 52], width: 760, height: 380,
  regions: [
    { name: "EUROPE", at: [24, 47.5], size: 10 },
    { name: "AFRICA", at: [20, 20], size: 10 },
    { name: "Indian Ocean", at: [70, 16], size: 10 },
    { name: "CHINA", at: [104, 33], size: 10 },
  ],
  places: [
    { name: "Paris (peace conference, 1919)", at: [2.35, 48.86], kind: "city", label: "below" },
    { name: "Cairo, March 1919", at: [31.24, 30.04], kind: "major", label: "left" },
    { name: "Middle Euphrates, Iraq, 1920", at: [44.6, 31.8], kind: "battle", label: "below" },
    { name: "Amritsar, April 1919", at: [74.87, 31.63], kind: "major", label: "above" },
    { name: "Beijing, May 1919", at: [116.4, 39.9], kind: "major", label: "below" },
    { name: "Seoul, March 1919", at: [126.98, 37.57], kind: "major", label: [-4, -10] },
  ],
  legend: [
    { kind: "major", text: "Protest, with its month and year" },
    { kind: "battle", text: "Armed revolt" },
    { kind: "city", text: "Site of the peace conference" },
  ],
  legendAt: "bottom-left", legendWidth: 240,
  checked: ["Encyclopaedia Britannica, \"Jallianwala Bagh Massacre\", \"May Fourth Movement\", and \"Wafd\"", "the English Wikipedia articles \"Egyptian revolution of 1919\", \"March 1st Movement\", and \"Iraqi revolt of 1920\""],
};

export const maps = [easternFront, protests1919];
