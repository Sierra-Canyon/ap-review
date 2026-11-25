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
  "a7b-dbq": {
    id: "a7b-dbq", name: "From neutrality to undeclared naval war, 1936 to 1941", intro: "Read the seven documents below and use them to answer the document-based question.",
    sources: [
      { title: "Document 1", blocks: [
        { p: "We shun political commitments which might entangle us in foreign wars; we avoid connection with the political activities of the League of Nations; ... I have seen war. I have seen war on land and sea. I have seen blood running from the wounded. I have seen men coughing out their gassed lungs. I have seen the dead in the mud. I have seen cities destroyed. I have seen two hundred limping, exhausted men come out of line—the survivors of a regiment of one thousand that went forward forty-eight hours before. I have seen children starving. I have seen the agony of mothers and wives. I hate war." },
        { cite: "Franklin D. Roosevelt, Address at Chautauqua, New York, August 14, 1936, during his campaign for reelection.", url: "https://www.presidency.ucsb.edu/documents/address-chautauqua-ny", kind: "primary" },
      ] },
      { title: "Document 2", blocks: [
        { p: "This nation will remain a neutral nation, but I cannot ask that every American remain neutral in thought as well. Even a neutral has a right to take account of facts. Even a neutral cannot be asked to close his mind or his conscience. I have said not once, but many times, that I have seen war and that I hate war. I say that again and again. I hope the United States will keep out of this war. I believe that it will. And I give you assurance and reassurance that every effort of your Government will be directed toward that end." },
        { cite: "Franklin D. Roosevelt, Fireside Chat (radio address on the war in Europe), September 3, 1939, two days after Germany invaded Poland.", url: "https://www.presidency.ucsb.edu/documents/fireside-chat-13", kind: "primary" },
      ] },
      { title: "Document 3", blocks: [
        { p: "On this tenth day of June, 1940, the hand that held the dagger has struck it into the back of its neighbor. ... Some indeed still hold to the now somewhat obvious delusion that we of the United States can safely permit the United States to become a lone island, a lone island in a world dominated by the philosophy of force. ... In our American unity, we will pursue two obvious and simultaneous courses; we will extend to the opponents of force the material resources of this nation; and, at the same time, we will harness and speed up the use of those resources in order that we ourselves in the Americas may have equipment and training equal to the task of any emergency and every defense." },
        { cite: "Franklin D. Roosevelt, Address at the University of Virginia, Charlottesville, June 10, 1940, the day Italy declared war on France and Britain.", url: "https://www.presidency.ucsb.edu/documents/address-university-virginia", kind: "primary" },
      ] },
      { title: "Document 4", blocks: [
        { p: "I transmit herewith for the information of the Congress notes exchanged between the British Ambassador at Washington and the Secretary of State on September 2, 1940, under which this Government has acquired the right to lease naval and air bases in Newfoundland, and in the islands of Bermuda, the Bahamas, Jamaica, St. Lucia, Trinidad, and Antigua, and in British Guiana ... Preparation for defense is an inalienable prerogative of a sovereign state. Under present circumstances this exercise of sovereign right is essential to the maintenance of our peace and safety. This is the most important action in the reinforcement of our national defense that has been taken since the Louisiana Purchase." },
        { cite: "Franklin D. Roosevelt, Message to Congress on Exchanging Destroyers for British Naval and Air Bases, September 3, 1940.", url: "https://www.presidency.ucsb.edu/documents/message-congress-exchanging-destroyers-for-british-naval-and-air-bases", kind: "primary" },
      ] },
      { title: "Document 5", blocks: [
        { p: "The aid-to-democracies bill was agreed on by both houses of the Congress last Tuesday afternoon. I signed it one half hour later. Five minutes after that I approved a list of articles for immediate shipment; and today—Saturday night—many of them are on their way. On Wednesday, I recommended an appropriation for new material to the extent of seven billion dollars; and the Congress is making patriotic speed in making the money available. Here in Washington, we are thinking in terms of speed and speed now." },
        { cite: "Franklin D. Roosevelt, Address at the Annual Dinner of the White House Correspondents' Association, March 15, 1941, four days after he signed the Lend-Lease Act.", url: "https://www.presidency.ucsb.edu/documents/address-the-annual-dinner-white-house-correspondents-association", kind: "primary" },
      ] },
      { title: "Document 6", blocks: [
        { p: "These Nazi submarines and raiders are the rattlesnakes of the Atlantic. They are a menace to the free pathways of the high seas. They are a challenge to our sovereignty. ... But when you see a rattlesnake poised to strike, you do not wait until he has struck before you crush him. ... It is no act of war on our part when we decide to protect the seas that are vital to American defense. The aggression is not ours. Ours is solely defense. ... From now on, if German or Italian vessels of war enter the waters, the protection of which is necessary for American defense, they do so at their own peril." },
        { cite: "Franklin D. Roosevelt, Fireside Chat (on the attack on the destroyer Greer), September 11, 1941.", url: "https://www.presidency.ucsb.edu/documents/fireside-chat-11", kind: "primary" },
      ] },
      { title: "Document 7", blocks: [
        { p: "On September 11, 1941, the President of the United States publicly declared that he had ordered the American Navy and Air Force to shoot on sight at any German war vessel. ... Acting under this order, vessels of the American Navy, since early September 1941, have systematically attacked German naval forces. ... Although Germany on her part has strictly adhered to the rules of international law in her relations with the United States during every period of the present war, the Government of the United States from initial violations of neutrality has finally proceeded to open acts of war against Germany. The Government of the United States has thereby virtually created a state of war." },
        { cite: "German government, note declaring war on the United States, December 11, 1941, four days after Pearl Harbor. Written by the Nazi regime to justify its own declaration of war. The Avalon Project, Yale Law School.", url: "https://avalon.law.yale.edu/wwii/gerdec41.asp", kind: "primary" },
      ] },
    ],
  },
  "a7b-s20": {
    id: "a7b-s20", name: "Theodore Roosevelt's New Nationalism, 1910", intro: "Use the excerpt below to answer the questions that follow.",
    sources: [{ title: "Source", blocks: [
      { p: "I stand for the square deal. But when I say that I am for the square deal, I mean not merely that I stand for fair play under the present rules of the game, but that I stand for having those rules changed so as to work for a more substantial equality of opportunity and of reward for equally good service. ... The New Nationalism puts the national need before sectional or personal advantage. ... This New Nationalism regards the executive power as the steward of the public welfare. It demands of the judiciary that it shall be interested primarily in human welfare rather than in property, just as it demands that the representative body shall represent all the people rather than any one class or section of the people." },
      { cite: "Theodore Roosevelt, \"The New Nationalism,\" speech at Osawatomie, Kansas, August 31, 1910. Text from the White House archives.", url: "https://obamawhitehouse.archives.gov/blog/2011/12/06/archives-president-teddy-roosevelts-new-nationalism-speech", kind: "primary" },
    ] }],
  },
  "a7b-s22": {
    id: "a7b-s22", name: "A second Bill of Rights, 1944", intro: "Use the excerpt below to answer all parts of the question that follows.",
    sources: [{ title: "Source", blocks: [
      { p: "We have come to a clear realization of the fact that true individual freedom cannot exist without economic security and independence. \"Necessitous men are not free men.\" People who are hungry and out of a job are the stuff of which dictatorships are made. In our day these economic truths have become accepted as self-evident. We have accepted, so to speak, a second Bill of Rights under which a new basis of security and prosperity can be established for all regardless of station, race, or creed. Among these are: The right to a useful and remunerative job in the industries or shops or farms or mines of the Nation; The right to earn enough to provide adequate food and clothing and recreation; The right of every farmer to raise and sell his products at a return which will give him and his family a decent living;" },
      { cite: "Franklin D. Roosevelt, State of the Union Message to Congress, January 11, 1944.", url: "https://www.presidency.ucsb.edu/documents/state-the-union-message-congress", kind: "primary" },
    ] }],
  },
  // SETS-END
};

export default [
  // ITEMS-END
];
