// Map specs for AP U.S. History Unit 5 review, 5.1 to 5.6 (drawn by tools/build-maps.mjs apush).
// Coordinates are [longitude, latitude]. Present-day state lines are drawn as a thin grid; captions say where they differ.

const trails = {
  id: "u5a-trails",
  caption: "The Oregon, California, and Mormon trails, 1840s and 1850s (routes approximate; present-day state lines shown)",
  alt: "Map of the western United States with present-day state lines. A solid line, the Oregon Trail, runs from Independence, Missouri, northwest along the Platte River past Fort Laramie, over South Pass in the Rocky Mountains, past Fort Bridger and Fort Hall, along the Snake River, and on to Oregon City in the Willamette valley. A second line, the California Trail, leaves the Oregon Trail near Fort Hall and runs southwest across the Great Basin to the Sacramento valley in California. A dashed line, the Mormon Trail, runs from Nauvoo, Illinois, across Iowa to Council Bluffs, then along the north side of the Platte to Fort Laramie, over South Pass, and southwest to Salt Lake City.",
  bbox: [-125, 35.5, -89.5, 47.5], width: 700, height: 420,
  states: true,
  routes: [
    { kind: "route", through: [[-94.42, 39.09], [-96.5, 39.9], [-98.0, 40.6], [-99.0, 40.64], [-101.6, 41.1], [-103.0, 41.7], [-104.56, 42.21], [-106.3, 42.85], [-107.8, 42.5], [-108.92, 42.34], [-109.9, 41.6], [-110.39, 41.32], [-111.0, 42.3], [-111.6, 42.65], [-112.44, 43.03], [-114.4, 42.6], [-115.7, 42.9], [-117.0, 43.8], [-117.8, 44.8], [-118.8, 45.6], [-121.18, 45.6], [-122.61, 45.36]] },
    { kind: "route2", through: [[-112.44, 43.03], [-113.0, 42.5], [-113.72, 42.08], [-114.9, 41.1], [-116.2, 40.9], [-117.7, 40.7], [-118.6, 39.9], [-119.8, 39.5], [-120.2, 39.3], [-121.47, 38.57]] },
    { kind: "sea", through: [[-91.38, 40.55], [-92.8, 40.75], [-94.3, 41.0], [-95.86, 41.26], [-97.5, 41.4], [-99.5, 41.1], [-101.5, 41.4], [-103.2, 41.85], [-104.56, 42.21], [-106.3, 42.85], [-108.92, 42.34], [-110.39, 41.32], [-111.0, 40.9], [-111.89, 40.76]] },
  ],
  places: [
    { name: "Independence", at: [-94.42, 39.09], label: "below", kind: "major" },
    { name: "Nauvoo", at: [-91.38, 40.55], label: "right" },
    { name: "Council Bluffs", at: [-95.86, 41.26], label: [8, -10] },
    { name: "Fort Laramie", at: [-104.56, 42.21], label: "right" },
    { name: "South Pass", at: [-108.92, 42.34], label: [6, 16] },
    { name: "Fort Bridger", at: [-110.39, 41.32], label: [8, 14] },
    { name: "Fort Hall", at: [-112.44, 43.03], label: "above" },
    { name: "Salt Lake City", at: [-111.89, 40.76], label: [-8, 16], kind: "major" },
    { name: "Oregon City", at: [-122.61, 45.36], label: "above", kind: "major" },
    { name: "Sacramento", at: [-121.47, 38.57], label: "below", kind: "major" },
  ],
  legend: [
    { kind: "route", text: "Oregon Trail" },
    { kind: "route2", text: "California Trail" },
    { kind: "sea", text: "Mormon Trail" },
  ],
  legendAt: "bottom-right", legendWidth: 170,
  checked: ["Encyclopaedia Britannica, \"Oregon Trail\"", "National Park Service, Oregon and Mormon Pioneer National Historic Trails, \"History and Culture\""],
};

const war = {
  id: "u5a-war",
  caption: "Major campaigns of the war with Mexico, 1846 to 1847 (routes approximate; present-day U.S. state lines shown)",
  alt: "Map of the southwestern United States and Mexico. Crossed swords mark battles. In northeastern Mexico, a line for Taylor's army runs from the Nueces River in Texas south to Palo Alto near the Rio Grande, 1846, then southwest to Monterrey, September 1846, and to Buena Vista near Saltillo, February 1847. A second line for Scott's army runs by sea from the Texas coast to Veracruz, March 1847, then inland past Cerro Gordo, April 1847, to Mexico City, September 1847. A third line for Kearny's army runs from Missouri west to Santa Fe, taken in 1846, and on to southern California, which U.S. forces held by January 1847.",
  bbox: [-119, 17.5, -88, 39.5], width: 680, height: 520,
  states: true,
  routes: [
    { kind: "route", through: [[-97.4, 27.8], [-97.5, 26.9], [-97.48, 26.02], [-98.5, 26.1], [-99.6, 25.9], [-100.31, 25.67], [-101.0, 25.42], [-101.0, 25.35]] },
    { kind: "sea", through: [[-97.2, 26.0], [-96.8, 24.0], [-96.6, 21.5], [-96.13, 19.18]] },
    { kind: "route", through: [[-96.13, 19.18], [-96.68, 19.45], [-97.2, 19.3], [-98.2, 19.05], [-99.13, 19.43]] },
    { kind: "route2", through: [[-94.92, 39.35], [-97.4, 38.6], [-100.0, 37.9], [-103.0, 37.5], [-104.6, 36.3], [-105.94, 35.69], [-107.0, 33.5], [-109.5, 32.9], [-112.5, 32.8], [-114.6, 32.7], [-116.99, 33.09], [-117.16, 32.72]] },
  ],
  places: [
    { name: "Palo Alto, 1846", at: [-97.48, 26.02], kind: "battle", label: "right" },
    { name: "Monterrey, Sept. 1846", at: [-100.31, 25.67], kind: "battle", label: [6, 18] },
    { name: "Buena Vista, Feb. 1847", at: [-101.0, 25.35], kind: "battle", label: [-8, -8] },
    { name: "Veracruz, March 1847", at: [-96.13, 19.18], kind: "battle", label: "right" },
    { name: "Cerro Gordo, April 1847", at: [-96.68, 19.45], kind: "battle", label: [4, -14] },
    { name: "Mexico City, Sept. 1847", at: [-99.13, 19.43], kind: "battle", label: [-8, -10] },
    { name: "Santa Fe, 1846", at: [-105.94, 35.69], label: "right" },
  ],
  regions: [{ name: "MEXICO", at: [-103.5, 23.5], size: 12 }, { name: "Gulf of Mexico", at: [-91.5, 22.6], size: 11 }, { name: "Pacific Ocean", at: [-114, 22], size: 11 }, { name: "NEW MEXICO", at: [-106.5, 34.4], size: 9 }, { name: "CALIFORNIA", at: [-119.2, 36.0], size: 9 }],
  legend: [
    { kind: "route", text: "Taylor, then Scott" },
    { kind: "route2", text: "Kearny" },
    { kind: "sea", text: "Scott by sea" },
    { kind: "battle", text: "Battle" },
  ],
  legendAt: "bottom-left", legendWidth: 150,
  checked: ["Encyclopaedia Britannica, \"Mexican-American War\"", "National Park Service, Palo Alto Battlefield National Historical Park, \"An Extended War\""],
};

const e1856 = {
  id: "u5a-1856",
  caption: "The presidential election of 1856: the states each candidate won (present-day state lines shown; West Virginia was then part of Virginia and is shaded with it; unshaded areas were territories)",
  alt: "Map of the United States with present-day state lines. Eleven Northern states won by John C. Fremont, the Republican, are shaded solid: Maine, New Hampshire, Vermont, Massachusetts, Rhode Island, Connecticut, New York, Ohio, Michigan, Wisconsin, and Iowa. Nineteen states won by James Buchanan, the Democrat, are hatched: every slave state except Maryland, plus Pennsylvania, New Jersey, Indiana, Illinois, and California. Maryland, won by Millard Fillmore of the American Party, is gray. The western territories and Minnesota are unshaded.",
  bbox: [-124.5, 24.5, -67, 49.5], width: 720, height: 440,
  states: true,
  fill: [
    { kind: "a", states: ["Maine", "New Hampshire", "Vermont", "Massachusetts", "Rhode Island", "Connecticut", "New York", "Ohio", "Michigan", "Wisconsin", "Iowa"] },
    { kind: "b", states: ["Pennsylvania", "New Jersey", "Delaware", "Virginia", "West Virginia", "North Carolina", "South Carolina", "Georgia", "Florida", "Alabama", "Mississippi", "Louisiana", "Texas", "Arkansas", "Tennessee", "Kentucky", "Missouri", "Indiana", "Illinois", "California"] },
    { kind: "c", states: ["Maryland"] },
  ],
  legend: [
    { kind: "a", text: "Fremont (Republican), 114 electoral votes" },
    { kind: "b", text: "Buchanan (Democrat), 174 electoral votes" },
    { kind: "c", text: "Fillmore (American), 8 electoral votes" },
  ],
  legendAt: "bottom-left", legendWidth: 290,
  checked: ["The American Presidency Project, \"Presidential Election of 1856\"", "National Archives, \"Electoral College Results, 1856\""],
};

const kansas = {
  id: "u5a-kansas",
  caption: "Eastern Kansas Territory, 1854 to 1858 (present-day state lines shown; the territory then reached west to the Rocky Mountains)",
  alt: "Map of eastern Kansas and western Missouri with present-day state lines. Dots mark towns in Kansas Territory: Atchison and Leavenworth near the Missouri River in the northeast; Lecompton, the proslavery territorial capital; Topeka, seat of the free-state government; and Lawrence, a free-state town sacked by a proslavery force on May 21, 1856. Crossed swords mark Pottawatomie Creek, where John Brown's party killed five proslavery settlers in May 1856; Osawatomie, a battle on August 30, 1856; and the Marais des Cygnes massacre of free-state men near the Missouri line on May 19, 1858.",
  bbox: [-97.2, 37.6, -93.6, 40.1], width: 620, height: 440,
  states: true,
  places: [
    { name: "Atchison", at: [-95.12, 39.56], label: "left" },
    { name: "Leavenworth", at: [-94.92, 39.31], label: "right" },
    { name: "Lecompton\n(proslavery capital)", at: [-95.39, 39.04], label: [0, -24] },
    { name: "Topeka\n(free-state government)", at: [-95.68, 39.05], kind: "major", label: [-10, 4] },
    { name: "Lawrence, sacked\nMay 21, 1856", at: [-95.24, 38.97], kind: "major", label: [8, 14] },
    { name: "Pottawatomie Creek, May 1856", at: [-95.08, 38.43], kind: "battle", label: "left" },
    { name: "Osawatomie, Aug. 30, 1856", at: [-94.95, 38.5], kind: "battle", label: [8, -8] },
    { name: "Marais des Cygnes, May 19, 1858", at: [-94.66, 38.29], kind: "battle", label: [-4, 18] },
  ],
  regions: [{ name: "KANSAS TERRITORY", at: [-96.5, 38.0], size: 12 }, { name: "MISSOURI", at: [-93.95, 37.9], size: 12 }],
  legend: [{ kind: "city", text: "Town" }, { kind: "battle", text: "Killings or battle" }],
  legendAt: "top-left", legendWidth: 160,
  checked: ["Kansas Historical Society, Kansapedia, \"Bleeding Kansas\" and \"Sack of Lawrence\"", "National Park Service, Fort Scott National Historic Site, \"Bleeding Kansas\""],
};

export const maps = [trails, war, e1856, kansas];
