// Map specs for AP U.S. History Unit 3 review, 3.1 to 3.7 (drawn by tools/build-maps.mjs apush).
// Coordinates are [longitude, latitude]. No state shading: these maps show places and years only.

const fiwar = {
  id: "u3a-fiwar",
  caption: "Major battles and sieges of the French and Indian War in North America, 1754 to 1760, with the year and the side that won (present-day state lines shown for reference)",
  alt: "Map of northeastern North America from the Ohio River to Cape Breton Island, with present-day state lines. X marks show battles and sieges with the year and winner: Fort Necessity, 1754, French; at the forks of the Ohio River, Braddock's defeat, 1755, French, and the taking of Fort Duquesne, 1758, British; Fort William Henry, 1757, French; Louisbourg, 1758, British; Quebec, 1759, British; and Montreal, 1760, British. A dot marks Albany, New York. Region names read Ohio Country, New France, and British colonies.",
  bbox: [-87.0, 36.0, -58.5, 48.5], width: 660, height: 440,
  states: true,
  places: [
    { name: "Fort Necessity, 1754\n(French)", at: [-79.59, 39.81], kind: "battle", label: [8, 14] },
    { name: "Forks of the Ohio: Braddock's\ndefeat, 1755 (French); Fort\nDuquesne taken, 1758 (British)", at: [-80.01, 40.44], kind: "battle", label: [10, -36] },
    { name: "Fort William Henry,\n1757 (French)", at: [-73.71, 43.42], kind: "battle", label: "left" },
    { name: "Albany", at: [-73.76, 42.65], kind: "city", label: "right" },
    { name: "Montreal, 1760\n(British)", at: [-73.57, 45.50], kind: "battle", label: "left" },
    { name: "Quebec, 1759\n(British)", at: [-71.21, 46.81], kind: "battle", label: "left" },
    { name: "Louisbourg, 1758\n(British)", at: [-59.99, 45.92], kind: "battle", label: "below" },
  ],
  regions: [
    { name: "OHIO COUNTRY", at: [-84.0, 38.6], size: 11 },
    { name: "NEW FRANCE", at: [-68.5, 47.6], size: 12 },
    { name: "BRITISH COLONIES", at: [-78.5, 37.2], size: 11 },
  ],
  legend: [
    { kind: "battle", text: "Battle or siege (year, winner)" },
    { kind: "city", text: "Town" },
  ],
  legendAt: "bottom-right", legendWidth: 210,
  checked: ["Fred Anderson, Crucible of War: The Seven Years' War and the Fate of Empire in British North America, 1754 to 1766", "Encyclopaedia Britannica, \"French and Indian War\" and its entries for each battle"],
};

const resistance = {
  id: "u3a-resistance",
  caption: "Some places of colonial protest and resistance, 1765 to 1775 (present-day state lines shown for reference)",
  alt: "Map of the Atlantic coast from Maine to Georgia, with present-day state lines. Dots mark places of colonial protest with their dates: Williamsburg, Virginia, the Virginia Resolves against the Stamp Act, May 1765; New York City, the Stamp Act Congress, October 1765; Boston, the Boston Massacre, March 1770, and the Boston Tea Party, December 1773; Narragansett Bay, Rhode Island, the burning of the customs schooner Gaspee, June 1772; Philadelphia, the First Continental Congress, September 1774; Edenton, North Carolina, women's pledge to boycott British tea and cloth, October 1774; and Lexington and Concord, Massachusetts, the first battles of the war, April 1775.",
  bbox: [-84.0, 31.0, -66.5, 44.8], width: 600, height: 470,
  states: true,
  places: [
    { name: "Lexington and Concord:\nfirst battles, Apr. 1775", at: [-71.35, 42.46], kind: "battle", label: [10, -22] },
    { name: "Boston: Massacre, Mar. 1770;\nTea Party, Dec. 1773", at: [-71.06, 42.36], kind: "major", label: [10, 4] },
    { name: "Narragansett Bay: Gaspee\nburned, June 1772", at: [-71.38, 41.70], kind: "city", label: [8, 24] },
    { name: "New York: Stamp Act\nCongress, Oct. 1765", at: [-74.01, 40.71], kind: "city", label: [8, 26] },
    { name: "Philadelphia: First Continental\nCongress, Sept. 1774", at: [-75.17, 39.95], kind: "city", label: "left" },
    { name: "Williamsburg: Virginia\nResolves, May 1765", at: [-76.71, 37.27], kind: "city", label: "left" },
    { name: "Edenton: women's boycott\npledge, Oct. 1774", at: [-76.61, 36.06], kind: "city", label: "left" },
  ],
  legend: [
    { kind: "major", text: "Boston, the center of protest" },
    { kind: "city", text: "Other place of protest" },
    { kind: "battle", text: "Battle" },
  ],
  legendAt: "bottom-right", legendWidth: 210,
  checked: ["Robert Middlekauff, The Glorious Cause: The American Revolution, 1763 to 1789", "Encyclopaedia Britannica's entries for the Stamp Act, the Boston Massacre, the Gaspee Affair, the Boston Tea Party, the Continental Congress, the Edenton Tea Party, and the Battles of Lexington and Concord"],
};

const revwar = {
  id: "u3a-revwar",
  caption: "Some major battles of the American Revolution, 1775 to 1781, with the year and the side that won (present-day state lines shown for reference)",
  alt: "Map of eastern North America from Quebec to Georgia, with present-day state lines. X marks show battles with the year and winner. In the North: Lexington and Concord, 1775, American; Quebec, 1775, British; Trenton, 1776, American; Saratoga, 1777, American. In the South: Charleston, 1780, British; Camden, 1780, British; Kings Mountain, 1780, American; Cowpens, 1781, American; and Yorktown, 1781, American and French.",
  bbox: [-85.0, 31.0, -66.0, 47.5], width: 600, height: 520,
  states: true,
  places: [
    { name: "Quebec, 1775 (British)", at: [-71.21, 46.81], kind: "battle", label: "left" },
    { name: "Lexington and Concord,\n1775 (American)", at: [-71.35, 42.46], kind: "battle", label: [8, 20] },
    { name: "Saratoga, 1777\n(American)", at: [-73.59, 43.01], kind: "battle", label: "left" },
    { name: "Trenton, 1776\n(American)", at: [-74.76, 40.22], kind: "battle", label: "right" },
    { name: "Yorktown, 1781\n(American and French)", at: [-76.51, 37.24], kind: "battle", label: "right" },
    { name: "Kings Mountain, 1780\n(American)", at: [-81.39, 35.14], kind: "battle", label: [8, -16] },
    { name: "Cowpens, 1781\n(American)", at: [-81.82, 35.14], kind: "battle", label: [-8, 14] },
    { name: "Camden, 1780\n(British)", at: [-80.61, 34.25], kind: "battle", label: "right" },
    { name: "Charleston, 1780\n(British)", at: [-79.93, 32.78], kind: "battle", label: "right" },
  ],
  legend: [
    { kind: "battle", text: "Battle (year, winner)" },
  ],
  legendAt: "top-left", legendWidth: 180,
  checked: ["Robert Middlekauff, The Glorious Cause: The American Revolution, 1763 to 1789", "National Park Service and Encyclopaedia Britannica entries for each battle"],
};

export const maps = [fiwar, resistance, revwar];
