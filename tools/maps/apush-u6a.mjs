// Map specs for AP U.S. History Unit 6 review, 6.1 to 6.7 (drawn by tools/build-maps.mjs apush).
// Coordinates are [longitude, latitude]. Present-day state lines are shown; captions say where they differ from the period.

const statehood = {
  id: "u6a-statehood",
  caption: "Western states admitted to the Union, 1864 to 1896, and territories still waiting in 1896",
  alt: "Map of the western United States with present-day state lines. Solid shading marks Nevada (1864), Nebraska (1867), and Colorado (1876). Hatching marks the six states admitted in 1889 and 1890: North Dakota, South Dakota, Montana, Washington, Idaho, and Wyoming. Gray marks Utah, admitted in 1896. Dots mark Oklahoma, New Mexico, and Arizona, still territories in 1896 (Oklahoma became a state in 1907, New Mexico and Arizona in 1912).",
  bbox: [-125.0, 30.5, -94.0, 49.5], width: 640, height: 440,
  states: true,
  fill: [
    { kind: "a", states: ["Nevada", "Nebraska", "Colorado"] },
    { kind: "b", states: ["North Dakota", "South Dakota", "Montana", "Washington", "Idaho", "Wyoming"] },
    { kind: "c", states: ["Utah"] },
    { kind: "d", states: ["Oklahoma", "New Mexico", "Arizona"] },
  ],
  legend: [
    { kind: "a", text: "Admitted 1864 to 1876" },
    { kind: "b", text: "Admitted 1889 to 1890" },
    { kind: "c", text: "Admitted 1896" },
    { kind: "d", text: "Still a territory in 1896" },
  ],
  legendAt: "bottom-left", legendWidth: 200,
  checked: ["Congressional Research Service, Admission of States to the Union: A Historical Reference Guide (R47747)", "U.S. Senate, States in the Senate, state introduction pages"],
};

const plainswars = {
  id: "u6a-plainswars",
  caption: "Some major clashes between the U.S. Army and Plains nations, 1864 to 1890 (present-day state lines shown; Oklahoma was then Indian Territory, and Montana, Colorado, and the Dakotas were territories)",
  alt: "Map of the Great Plains and Rocky Mountains with present-day state lines. X marks show four clashes with years: Sand Creek, Colorado, 1864; the Washita River, in Indian Territory (present-day Oklahoma), 1868; the Little Bighorn River, Montana, 1876; and Wounded Knee Creek, South Dakota, 1890. A region label marks the Black Hills in western South Dakota.",
  bbox: [-112.0, 32.5, -92.0, 48.8], width: 600, height: 470,
  states: true,
  places: [
    { name: "Sand Creek, 1864", at: [-102.51, 38.55], kind: "battle", label: "right" },
    { name: "Washita, 1868", at: [-99.71, 35.62], kind: "battle", label: "right" },
    { name: "Little Bighorn, 1876", at: [-107.43, 45.57], kind: "battle", label: "right" },
    { name: "Wounded Knee, 1890", at: [-102.36, 43.14], kind: "battle", label: "right" },
  ],
  regions: [
    { name: "BLACK HILLS", at: [-103.7, 44.25], size: 11 },
    { name: "GREAT PLAINS", at: [-98.5, 40.4], size: 13 },
  ],
  legend: [
    { kind: "battle", text: "Battle or massacre (year)" },
  ],
  legendAt: "bottom-left", legendWidth: 190,
  checked: ["National Park Service pages for Sand Creek Massacre National Historic Site, Washita Battlefield National Historic Site, and Little Bighorn Battlefield National Monument", "Encyclopedia of the Great Plains (University of Nebraska-Lincoln) entries Sioux Wars, Sand Creek Massacre, Washita (Battle of the), Little Bighorn (Battle of the), and Wounded Knee Massacre"],
};

const cattle = {
  id: "u6a-cattle",
  caption: "Three cattle trails from Texas, 1866 to the 1880s, and the railroad towns where many drives ended (present-day state lines shown; Oklahoma was then Indian Territory)",
  alt: "Map of the southern and central Great Plains with present-day state lines. A solid line, the Chisholm Trail, runs north from San Antonio, Texas, through Fort Worth and Indian Territory to Abilene, Kansas. A dashed line, the Western Trail, runs from near San Antonio through Fort Griffin, Texas, across the Red River and Indian Territory to Dodge City, Kansas, and on to Ogallala, Nebraska. A dotted line, the Goodnight-Loving Trail, runs from Fort Belknap, Texas, southwest to Horsehead Crossing on the Pecos River, north along the Pecos to Fort Sumner, New Mexico, then over Raton Pass to Denver, Colorado, and Cheyenne, Wyoming. Larger dots mark the railroad towns Abilene, Dodge City, Ogallala, and Cheyenne.",
  bbox: [-108.5, 28.5, -93.0, 42.6], width: 600, height: 560,
  states: true,
  routes: [
    { through: [[-98.49, 29.42], [-97.74, 30.27], [-97.33, 32.75], [-97.93, 33.92], [-97.95, 35.5], [-97.6, 37.0], [-97.34, 37.69], [-97.21, 38.92]], kind: "route" },
    { through: [[-98.9, 29.6], [-99.22, 32.93], [-99.25, 34.65], [-99.6, 36.4], [-100.02, 37.75], [-101.0, 39.5], [-101.72, 41.13]], kind: "route2" },
    { through: [[-98.74, 33.15], [-100.5, 31.5], [-102.31, 31.24], [-103.3, 32.6], [-104.24, 34.47], [-104.4, 36.0], [-104.5, 36.95], [-104.61, 38.25], [-104.99, 39.74], [-104.82, 41.14]], kind: "sea" },
  ],
  places: [
    { name: "San Antonio", at: [-98.49, 29.42], kind: "city", label: "left" },
    { name: "Fort Worth", at: [-97.33, 32.75], kind: "city", label: "right" },
    { name: "Fort Griffin", at: [-99.22, 32.93], kind: "city", label: "left" },
    { name: "Fort Belknap", at: [-98.74, 33.15], kind: "city", label: [-6, -10] },
    { name: "Horsehead\nCrossing", at: [-102.31, 31.24], kind: "city", label: "left" },
    { name: "Fort Sumner", at: [-104.24, 34.47], kind: "city", label: "left" },
    { name: "Denver", at: [-104.99, 39.74], kind: "city", label: "left" },
    { name: "Cheyenne", at: [-104.82, 41.14], kind: "major", label: "left" },
    { name: "Ogallala", at: [-101.72, 41.13], kind: "major", label: "right" },
    { name: "Dodge City", at: [-100.02, 37.75], kind: "major", label: "right" },
    { name: "Abilene", at: [-97.21, 38.92], kind: "major", label: "right" },
  ],
  legend: [
    { kind: "route", text: "Chisholm Trail" },
    { kind: "route2", text: "Western Trail" },
    { kind: "sea", text: "Goodnight-Loving Trail" },
    { kind: "major", text: "Railroad town" },
  ],
  legendAt: "bottom-right", legendWidth: 190,
  checked: ["Texas State Historical Association, Handbook of Texas entries Chisholm Trail, Western Trail, and Goodnight-Loving Trail", "Encyclopedia of the Great Plains (University of Nebraska-Lincoln) entries Cattle Trails and Western Trail"],
};

export const maps = [statehood, plainswars, cattle];
