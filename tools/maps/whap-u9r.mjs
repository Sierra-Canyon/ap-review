// Unit 9 review bank map specs (decks/whap/u9.js, set u9-s15). Format: see the top of tools/build-maps.mjs.

const protest = {
  id: "u9r-protest",
  caption: "Protests, meetings, and bans aimed at economic and cultural globalization, 1994 to 2004",
  alt: "Map from the western United States to India. X marks show uprisings and mass protests against free trade or global finance: Chiapas, Mexico, 1994, the Zapatista uprising; Seattle, United States, 1999, at a meeting of the World Trade Organization; Prague, Czech Republic, 2000, at a meeting of the International Monetary Fund and the World Bank; and Genoa, Italy, 2001, at a summit of the G8 leaders. Large dots show meetings of the World Social Forum, a gathering of critics of globalization: Porto Alegre, Brazil, 2001, and Mumbai, India, 2004. A small dot shows Tehran, Iran, where the government banned satellite dishes in the mid-1990s.",
  bbox: [-125, -36, 80, 56], width: 780, height: 440,
  regions: [
    { name: "NORTH AMERICA", at: [-102, 40], size: 10 }, { name: "SOUTH AMERICA", at: [-60, -10], size: 10 },
    { name: "EUROPE", at: [25, 53], size: 10 }, { name: "AFRICA", at: [20, 8], size: 11 }, { name: "ASIA", at: [65, 45], size: 11 },
    { name: "Atlantic Ocean", at: [-42, 33], size: 11 }, { name: "Pacific Ocean", at: [-115, 8], size: 11 },
  ],
  places: [
    { name: "Seattle, 1999: WTO meeting", at: [-122.33, 47.61], kind: "battle", label: "right" },
    { name: "Chiapas, 1994: Zapatista uprising", at: [-92.64, 16.74], kind: "battle", label: "right" },
    { name: "Prague, 2000: IMF and World Bank meeting", at: [14.44, 50.08], kind: "battle", label: "right" },
    { name: "Genoa, 2001: G8 summit", at: [8.93, 44.41], kind: "battle", label: "left" },
    { name: "Porto Alegre, 2001", at: [-51.23, -30.03], kind: "major", label: "left" },
    { name: "Mumbai, 2004", at: [72.88, 19.08], kind: "major", label: "below" },
    { name: "Tehran, mid-1990s", at: [51.39, 35.69], label: "right" },
  ],
  legend: [
    { kind: "battle", text: "Uprising or mass protest against free trade or finance" },
    { kind: "major", text: "World Social Forum, a meeting of critics of globalization" },
    { kind: "city", text: "Government ban on satellite dishes" },
  ],
  legendAt: "bottom-right", legendWidth: 370,
  checked: [
    "Wikipedia, \"Anti-globalization movement\" (Seattle, November 30 to December 3, 1999; Prague, September 2000; Genoa, July 18 to 22, 2001; the World Social Forum, Porto Alegre, 2001, and Mumbai, 2004), \"World Social Forum\", and \"Television in Iran\" (satellite dishes banned by a 1994 law)",
    "Encyclopaedia Britannica, \"Zapatista National Liberation Army\" (Chiapas, January 1, 1994, the day NAFTA took effect) and \"Seattle WTO protests of 1999\", and Radio Free Europe/Radio Liberty (Prague, 2000; Genoa, 2001, more than 100,000 marchers; Iran's parliament outlawed satellite dishes in 1995)",
  ],
};

export const maps = [protest];
