// AP U.S. History review, Unit 7 (7.9 to 7.15): the Great Depression, the New Deal, interwar diplomacy, World War II at home and abroad, and the period as a whole.
import { bars, lines } from "../../plot.js";
import { maps } from "./maps.js";

const PRACTICE = "Practice passage written for this review, summarizing an interpretation held by many historians.";
const MAPCITE = (refs) => "Map drawn for this review from Natural Earth land outlines and U.S. Census Bureau state boundaries (public domain). Places and dates checked against " + refs + ".";

export const sets = {
  "a7b-s02": {
    id: "a7b-s02", name: "Hoover on federal relief, 1931", intro: "Use the excerpt below to answer the questions that follow.",
    sources: [{ title: "Source", blocks: [
      { p: "This is not an issue as to whether people shall go hungry or cold in the United States. ... It is a question as to whether the American people on one hand will maintain the spirit of charity and mutual self-help through voluntary giving and the responsibility of local government as distinguished on the other hand from appropriations out of the Federal Treasury for such purposes. My own conviction is strongly that if we break down this sense of responsibility of individual generosity to individual and mutual self-help in the country in times of national difficulty and if we start appropriations of this character we have not only impaired something infinitely valuable in the life of the American people but have struck at the roots of self-government." },
      { cite: "Herbert Hoover, Statement on Public vs. Private Financing of Relief Efforts, February 3, 1931.", url: "https://www.presidency.ucsb.edu/documents/statement-public-vs-private-financing-relief-efforts", kind: "primary" },
    ] }],
  },
  "a7b-s05": {
    id: "a7b-s05", name: "Roosevelt signs the Social Security Act, 1935", intro: "Use the excerpt below to answer the questions that follow.",
    sources: [{ title: "Source", blocks: [
      { p: "Today a hope of many years' standing is in large part fulfilled. The civilization of the past hundred years, with its startling industrial changes, has tended more and more to make life insecure. ... This social security measure gives at least some protection to thirty millions of our citizens who will reap direct benefits through unemployment compensation, through old-age pensions and through increased services for the protection of children and the prevention of ill health. ... This law, too, represents a cornerstone in a structure which is being built but is by no means complete. It is a structure intended to lessen the force of possible future depressions." },
      { cite: "Franklin D. Roosevelt, Statement on Signing the Social Security Act, August 14, 1935.", url: "https://www.presidency.ucsb.edu/documents/statement-signing-the-social-security-act-0", kind: "primary" },
    ] }],
  },
  "a7b-s08": {
    id: "a7b-s08", name: "The arsenal of democracy, 1940", intro: "Use the excerpt below to answer the questions that follow.",
    sources: [{ title: "Source", blocks: [
      { p: "If Great Britain goes down, the Axis powers will control the continents of Europe, Asia, Africa, Australasia, and the high seas—and they will be in a position to bring enormous military and naval resources against this hemisphere. ... Thinking in terms of today and tomorrow, I make the direct statement to the American people that there is far less chance of the United States getting into war, if we do all we can now to support the nations defending themselves against attack by the Axis than if we acquiesce in their defeat, submit tamely to an Axis victory, and wait our turn to be the object of attack in another war later on. ... We must be the great arsenal of democracy. For us this is an emergency as serious as war itself." },
      { cite: "Franklin D. Roosevelt, Fireside Chat (on national security), December 29, 1940.", url: "https://www.presidency.ucsb.edu/documents/fireside-chat-9", kind: "primary" },
    ] }],
  },
  "a7b-s09": {
    id: "a7b-s09", name: "The Atlantic Charter, 1941", intro: "Use the excerpt below to answer the questions that follow.",
    sources: [{ title: "Source", blocks: [
      { p: "First, their countries seek no aggrandizement, territorial or other; Second, they desire to see no territorial changes that do not accord with the freely expressed wishes of the peoples concerned; Third, they respect the right of all peoples to choose the form of government under which they will live; and they wish to see sovereign rights and self government restored to those who have been forcibly deprived of them; ... Sixth, after the final destruction of the Nazi tyranny, they hope to see established a peace which will afford to all nations the means of dwelling in safety within their own boundaries, and which will afford assurance that all the men in all lands may live out their lives in freedom from fear and want;" },
      { cite: "Franklin D. Roosevelt and Winston Churchill, joint declaration (the Atlantic Charter), August 14, 1941. The Avalon Project, Yale Law School.", url: "https://avalon.law.yale.edu/wwii/atlantic.asp", kind: "primary" },
    ] }],
  },
  "a7b-s11": {
    id: "a7b-s11", name: "Executive Order 8802, 1941", intro: "Use the excerpt below to answer the questions that follow.",
    sources: [{ title: "Source", blocks: [
      { p: "Whereas there is evidence that available and needed workers have been barred from employment in industries engaged in defense production solely because of consideration of race, creed, color, or national origin, to the detriment of workers' morale and of national unity: Now, Therefore, by virtue of the authority vested in me by the Constitution and the statutes, and as a prerequisite to the successful conduct of our national defense production effort, I do hereby reaffirm the policy of the United States that there shall be no discrimination in the employment of workers in defense industries or government because of race, creed, color, or national origin, and I do hereby declare that it is the duty of employers and of labor organizations ... to provide for the full and equitable participation of all workers in defense industries, without discrimination because of race, creed, color, or national origin;" },
      { cite: "Franklin D. Roosevelt, Executive Order 8802, Reaffirming Policy of Full Participation in the Defense Program by All Persons, Regardless of Race, Creed, Color, or National Origin, June 25, 1941.", url: "https://www.presidency.ucsb.edu/documents/executive-order-8802-reaffirming-policy-full-participation-the-defense-program-all-persons", kind: "primary" },
    ] }],
  },
  "a7b-s16": {
    id: "a7b-s16", name: "Truman announces the bombing of Hiroshima, 1945", intro: "Use the excerpt below to answer the questions that follow.",
    sources: [{ title: "Source", blocks: [
      { p: "SIXTEEN HOURS AGO an American airplane dropped one bomb on Hiroshima, an important Japanese Army base. That bomb had more power than 20,000 tons of T.N.T. ... It is an atomic bomb. It is a harnessing of the basic power of the universe. The force from which the sun draws its power has been loosed against those who brought war to the Far East. ... It was to spare the Japanese people from utter destruction that the ultimatum of July 26 was issued at Potsdam. Their leaders promptly rejected that ultimatum. If they do not now accept our terms they may expect a rain of ruin from the air, the like of which has never been seen on this earth." },
      { cite: "Harry S. Truman, Statement by the President Announcing the Use of the A-Bomb at Hiroshima, August 6, 1945.", url: "https://www.presidency.ucsb.edu/documents/statement-the-president-announcing-the-use-the-bomb-hiroshima", kind: "primary" },
    ] }],
  },
  "a7b-s15": {
    id: "a7b-s15", name: "Roosevelt asks for war, December 8, 1941", intro: "Use the excerpt below to answer the questions that follow.",
    sources: [{ title: "Source", blocks: [
      { p: "The attack yesterday on the Hawaiian Islands has caused severe damage to American naval and military forces. I regret to tell you that very many American lives have been lost. In addition American ships have been reported torpedoed on the high seas between San Francisco and Honolulu. Yesterday the Japanese Government also launched an attack against Malaya. Last night Japanese forces attacked Hong Kong. Last night Japanese forces attacked Guam. Last night Japanese forces attacked the Philippine Islands. Last night the Japanese attacked Wake Island. And this morning the Japanese attacked Midway Island. Japan has, therefore, undertaken a surprise offensive extending throughout the Pacific area." },
      { cite: "Franklin D. Roosevelt, Address to Congress Requesting a Declaration of War with Japan, December 8, 1941.", url: "https://www.presidency.ucsb.edu/documents/address-congress-requesting-declaration-war-with-japan", kind: "primary" },
    ] }],
  },
  "a7b-s18": {
    id: "a7b-s18", name: "The Declaration on Liberated Europe, Yalta, 1945", intro: "Use the excerpt below to answer the questions that follow.",
    sources: [{ title: "Source", blocks: [
      { p: "The establishment of order in Europe and the rebuilding of national economic life must be achieved by processes which will enable the liberated peoples to destroy the last vestiges of nazism and fascism and to create democratic institutions of their own choice. ... To foster the conditions in which the liberated people may exercise these rights, the three governments will jointly assist the people in any European liberated state or former Axis state in Europe where, in their judgment conditions require, ... (c) to form interim governmental authorities broadly representative of all democratic elements in the population and pledged to the earliest possible establishment through free elections of Governments responsive to the will of the people; and (d) to facilitate where necessary the holding of such elections." },
      { cite: "Report of the Crimea (Yalta) Conference, Section II, \"Declaration on Liberated Europe,\" signed by Winston Churchill, Franklin D. Roosevelt, and Joseph Stalin, February 11, 1945. The Avalon Project, Yale Law School.", url: "https://avalon.law.yale.edu/wwii/yalta.asp", kind: "primary" },
    ] }],
  },
  // SETS-END
};

export default [
  // ITEMS-END
];
