// AP World History: Modern, Unit 7 Assessment (form w7a), Unit 7: Global Conflict, c. 1900 to the present
// Sources: every stimulus this form uses, keyed by id.
import { maps } from "../whap/maps.js";
const MAP = "Map drawn for this review from Natural Earth land outlines (public domain). Places, dates, and routes checked against ";
const map = (id, caption, refs) => [{ svg: maps[id], caption }, { cite: MAP + refs + ".", kind: "map" }];
export const sets = {
  "w7a-s1": {
    id: "w7a-s1", name: "Battle deaths in the First World War", intro: "Use the table below to answer the questions that follow.",
    sources: [
      { title: "Source", blocks: [
        { p: "Estimated battle deaths in the armies of the nations at war, 1914 to 1918, as published in 1919. Only deaths resulting directly from combat are counted." },
        { table: {
          head: ["Nation", "Battle deaths"],
          rows: [
            ["Russia", "1,700,000"],
            ["Germany", "1,600,000"],
            ["France", "1,385,300"],
            ["Great Britain", "900,000"],
            ["Austria", "800,000"],
            ["Italy", "330,000"],
            ["Turkey", "250,000"],
            ["Serbia and Montenegro", "125,000"],
            ["Belgium", "102,000"],
            ["Romania", "100,000"],
            ["Bulgaria", "100,000"],
            ["United States", "48,900"],
            ["Greece", "7,000"],
            ["Portugal", "2,000"],
            ["Total", "7,450,200"],
          ],
        } },
        { cite: "Leonard P. Ayres, Chief of the Statistical Branch of the General Staff, The War with Germany: A Statistical Summary (Washington: Government Printing Office, 1919), Chapter IX, \"Health and Casualties,\" Table 9, \"Battle Deaths in Armies Engaged in the Present War, 1914-1918.\" Figures as printed; the report states that they are approximate in some cases and include only deaths resulting directly from action. \"Roumania\" in the original is spelled Romania here.", url: "https://web.viu.ca/davies/H482.WWI/Ayer.stats.WWI.htm", kind: "data" },
      ] },
    ],
  },
  "w7a-s2": {
    id: "w7a-s2", name: "The Zimmermann Telegram, 1917", intro: "Use the source below to answer the questions that follow.",
    sources: [
      { title: "Source", blocks: [
        { p: "We intend to begin on the first of February unrestricted submarine warfare. We shall endeavor in spite of this to keep the United States of America neutral. In the event of this not succeeding, we make Mexico a proposal or alliance on the following basis: make war together, make peace together, generous financial support and an understanding on our part that Mexico is to reconquer the lost territory in Texas, New Mexico, and Arizona. The settlement in detail is left to you. ..." },
        { p: "Please call the President's attention to the fact that the ruthless employment of our submarines now offers the prospect of compelling England in a few months to make peace." },
        { cite: "Arthur Zimmermann, German Foreign Secretary, coded telegram to the German Minister in Mexico, January 1917, intercepted and deciphered by British cryptographers and published in American newspapers on March 1, 1917 (decoded message text, U.S. National Archives). \"The President\" is the President of Mexico.", url: "https://www.archives.gov/milestone-documents/zimmermann-telegram", kind: "primary" },
      ] },
    ],
  },
  "w7a-s3": {
    id: "w7a-s3", name: "British and French plans for Ottoman lands, 1916 and 1917", intro: "Use the two sources below to answer the questions that follow. Source 2 refers to zones on a map: the blue area included coastal Syria and Lebanon, the red area included southern Mesopotamia (present-day Iraq), and the brown area included much of Palestine.",
    sources: [
      { title: "Source 1", blocks: [
        { p: "I have much pleasure in conveying to you, on behalf of His Majesty's Government, the following declaration of sympathy with Jewish Zionist aspirations which has been submitted to, and approved by, the Cabinet." },
        { p: "\"His Majesty's Government view with favour the establishment in Palestine of a national home for the Jewish people, and will use their best endeavours to facilitate the achievement of this object, it being clearly understood that nothing shall be done which may prejudice the civil and religious rights of existing non-Jewish communities in Palestine, or the rights and political status enjoyed by Jews in any other country.\"" },
        { p: "I should be grateful if you would bring this declaration to the knowledge of the Zionist Federation." },
        { cite: "Arthur James Balfour, British Foreign Secretary, letter to Lord Rothschild (the Balfour Declaration), Foreign Office, London, November 2, 1917.", url: "https://avalon.law.yale.edu/20th_century/balfour.asp", kind: "primary" },
      ] },
      { title: "Source 2", blocks: [
        { p: "It is accordingly understood between the French and British governments:" },
        { p: "That France and Great Britain are prepared to recognize and protect an independent Arab states or a confederation of Arab states (a) and (b) marked on the annexed map, under the suzerainty of an Arab chief. ..." },
        { p: "That in the blue area France, and in the red area Great Britain, shall be allowed to establish such direct or indirect administration or control as they desire and as they may think fit to arrange with the Arab state or confederation of Arab states." },
        { p: "That in the brown area there shall be established an international administration, the form of which is to be decided upon after consultation with Russia, and subsequently in consultation with the other allies, and the representatives of the Shereef of Mecca." },
        { cite: "The Sykes-Picot Agreement, a secret agreement between the British and French governments on the future of the Ottoman Empire's Arab lands, negotiated by Mark Sykes for Britain and Francois Georges-Picot for France and concluded in an exchange of letters, May 1916.", url: "https://avalon.law.yale.edu/20th_century/sykes.asp", kind: "primary" },
      ] },
    ],
  },
  "w7a-s4": {
    id: "w7a-s4", name: "Roosevelt's first inaugural address, 1933", intro: "Use the source below to answer the questions that follow.",
    sources: [
      { title: "Source", blocks: [
        { p: "Values have shrunken to fantastic levels; ... the withered leaves of industrial enterprise lie on every side; farmers find no markets for their produce; the savings of many years in thousands of families are gone. ..." },
        { p: "Our greatest primary task is to put people to work. ... It can be accomplished in part by direct recruiting by the Government itself, treating the task as we would treat the emergency of a war, but at the same time, through this employment, accomplishing greatly needed projects to stimulate and reorganize the use of our natural resources. ..." },
        { p: "I shall ask the Congress for the one remaining instrument to meet the crisis--broad Executive power to wage a war against the emergency, as great as the power that would be given to me if we were in fact invaded by a foreign foe." },
        { cite: "Franklin D. Roosevelt, President of the United States, First Inaugural Address, Washington, D.C., March 4, 1933.", url: "https://avalon.law.yale.edu/20th_century/froos1.asp", kind: "primary" },
      ] },
    ],
  },
  "w7a-s5": {
    id: "w7a-s5", name: "Nazi camps and killing centers", intro: "Use the map below to answer the questions that follow.", label: "Map",
    sources: [{ title: "Map", blocks: map("u7-camps", "Nazi concentration camps in Germany and killing centers in German-occupied Poland, with the year each camp opened or, for a killing center, the year mass killing by gas began", "the United States Holocaust Memorial Museum, Holocaust Encyclopedia, \"Killing Centers: In Depth\" and \"Concentration Camps, 1933 to 1939,\" and Encyclopaedia Britannica, \"extermination camp,\" \"Dachau,\" \"Buchenwald,\" and \"Sachsenhausen\"") }],
  },
  "w7a-s6": {
    id: "w7a-s6", name: "Empires and the world wars", intro: "Use the passage below to answer all parts of the question that follows.",
    sources: [
      { title: "Source", blocks: [
        { p: "In both world wars, the European imperial powers fought with the resources of their empires as well as their own. Britain drew more than a million soldiers and laborers from India, and France recruited soldiers and workers from West Africa, North Africa, and Indochina. Colonies also supplied food and raw materials such as rubber and tin. Imperial governments often promised reforms or greater self-government in return for this support." },
        { p: "When these promises went unmet after 1918, many colonial subjects who had served or sacrificed turned to nationalist movements. The Second World War weakened the imperial powers even more. Defeats in Europe and Asia damaged their prestige, and the costs of the war left them less able to hold their colonies by force. In this way, the two world wars helped bring about the end of the European empires." },
        { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" },
      ] },
    ],
  },
};

export default {
  forms: [
    { id: "w7a", name: "Unit 7 Assessment", group: "Unit 7: Global Conflict",
      items: [
        // ---------- Set 1: battle deaths table ----------
        { id: "w7a-m01", skill: "u7", type: "mcq", set: "w7a-s1", topic: "7.3", reasoning: "Causation", difficulty: "moderate",
          question: "Which of the following most directly explains the large numbers of battle deaths shown in the table?",
          choices: [
            "Trench battles against machine guns and artillery",
            "The influenza pandemic that swept army camps in 1918",
            "Atomic bombs dropped on cities near the front lines",
            "Cavalry charges against fortified enemy positions",
          ],
          why: [
            "Correct. Industrial weapons and trench warfare produced huge losses in battles such as Verdun and the Somme in 1916, where attacks across open ground gained little land.",
            "The pandemic killed many soldiers, but the table counts only deaths that resulted directly from combat.",
            "Atomic bombs were first used in 1945, near the end of the Second World War.",
            "Cavalry played a small role, especially on the Western Front; infantry attacks against artillery and machine guns caused most deaths.",
          ],
          answer: 0 },
        { id: "w7a-m02", skill: "u7", type: "mcq", set: "w7a-s1", topic: "7.2", reasoning: "Causation", difficulty: "easy",
          question: "The number of nations listed in the table is best explained by which of the following?",
          choices: [
            "Alliances turned a Balkan crisis into a great-power war.",
            "League of Nations rules required members to fight any aggressor.",
            "European states united to stop the spread of Soviet communism.",
            "Colonial independence movements drew the powers into wars abroad.",
          ],
          why: [
            "Correct. Russia backed Serbia, Germany backed Austria-Hungary, France was allied with Russia, and the German invasion of Belgium brought Britain in, so a regional crisis became a general war in August 1914.",
            "The League of Nations was created after the war, in 1919 and 1920.",
            "The Soviet Union was formed in 1922, after the war, and the Bolsheviks took power in Russia only in 1917.",
            "Most of the fighting was among the great powers in Europe and the Middle East; colonial independence movements grew stronger after the war rather than causing it.",
          ],
          answer: 0 },
        { id: "w7a-m03", skill: "u7", type: "mcq", set: "w7a-s1", topic: "7.1", reasoning: "Causation", difficulty: "easy",
          question: "The losses of the nation with the most battle deaths in the table most directly contributed to which of the following?",
          choices: [
            "The fall of the tsar and the Bolshevik takeover",
            "Russia's defeat by Japan in the war of 1904 and 1905",
            "Alexander II's emancipation of the serfs in 1861",
            "Russia's mandates over former Ottoman lands in 1920",
          ],
          why: [
            "Correct. Military defeats, enormous casualties, and food shortages led to the February Revolution of 1917, which ended tsarist rule, and the Bolsheviks seized power that October and soon left the war.",
            "The Russo-Japanese War ended in 1905, before the First World War began.",
            "Tsar Alexander II freed the serfs in 1861, long before the war.",
            "Britain and France received the Middle Eastern mandates; Russia had left the war and gained none of them.",
          ],
          answer: 0 },

        // ---------- Set 2: Zimmermann Telegram ----------
        { id: "w7a-m04", skill: "u7", type: "mcq", set: "w7a-s2", topic: "7.3", reasoning: "Causation", difficulty: "moderate",
          question: "The plan announced in the first sentence of the excerpt was most directly a response to which of the following?",
          choices: [
            "Britain's naval blockade of Germany's ports",
            "The entry of the United States into the war",
            "Japan's attack on the U.S. fleet at Pearl Harbor",
            "Russia's exit from the war at Brest-Litovsk",
          ],
          why: [
            "Correct. The British navy blockaded German ports from 1914, and German leaders hoped submarines could cut off Britain's supplies in turn and force it to make peace.",
            "The United States entered the war in April 1917, after this telegram and partly because of the submarine campaign it announces.",
            "Pearl Harbor was attacked in 1941, during the Second World War.",
            "Russia signed the Treaty of Brest-Litovsk in March 1918, more than a year after the telegram.",
          ],
          answer: 0 },
        { id: "w7a-m05", skill: "u7", type: "mcq", set: "w7a-s2", topic: "7.1", reasoning: "Causation", difficulty: "easy",
          question: "German leaders most likely expected Mexico to consider the proposal in the excerpt because, at that time, Mexico was",
          choices: [
            "in a revolution that had led to clashes with U.S. troops",
            "ruled by an emperor whom French troops had put in power",
            "a member of the Axis alliance with Germany and Japan",
            "a colony fighting to win independence from Spain",
          ],
          why: [
            "Correct. The Mexican Revolution began in 1910, and in 1916 and early 1917 a U.S. force under General John Pershing pursued Pancho Villa inside Mexico, which angered many Mexicans.",
            "French troops supported Emperor Maximilian in the 1860s, about fifty years earlier.",
            "The Axis was an alliance of the Second World War, and Mexico joined the Allies in 1942.",
            "Mexico won its independence from Spain in 1821.",
          ],
          answer: 0 },
        { id: "w7a-m06", skill: "u7", type: "mcq", set: "w7a-s2", topic: "7.3", reasoning: "Causation", difficulty: "difficult",
          question: "The claim in the last paragraph of the excerpt best reflects which belief held by German leaders in early 1917?",
          choices: [
            "Germany could beat Britain before American troops arrived.",
            "Germany no longer needed Austria-Hungary to win the war.",
            "Germany had already defeated France on the Western Front.",
            "Submarine attacks would bring the United States in on Germany's side.",
          ],
          why: [
            "Correct. German planners calculated that sinking ships bound for Britain would force a British surrender within months, before American troops could arrive; the gamble failed after the United States declared war in April 1917.",
            "The excerpt says nothing about Austria-Hungary, and the two powers fought together until 1918.",
            "The Western Front was still deadlocked in early 1917, which is why Germany turned to submarines.",
            "Zimmermann expected the submarine campaign might bring the United States into the war against Germany, which is why he sought an alliance with Mexico.",
          ],
          answer: 0 },

        // ---------- Set 3: Balfour Declaration and Sykes-Picot ----------
        { id: "w7a-m07", skill: "u7", type: "mcq", set: "w7a-s3", topic: "7.3", reasoning: "Causation", difficulty: "moderate",
          question: "The British government's purpose in issuing Source 1 was most likely to",
          choices: [
            "win Zionist support for the war and a claim to Palestine",
            "end British rule in Palestine and free its Arab population",
            "carry out a League of Nations decision on a Jewish state",
            "persuade the Ottomans to leave the war and make peace",
          ],
          why: [
            "Correct. In 1917 Britain was fighting Ottoman forces in Palestine and hoped to win Jewish support in Allied and neutral countries, while control of Palestine would also protect the route to the Suez Canal.",
            "Palestine was still part of the Ottoman Empire in November 1917, so Britain did not yet rule it.",
            "The League of Nations did not exist until after the war.",
            "The declaration concerns the future of Ottoman land and offers the Ottoman government nothing.",
          ],
          answer: 0 },
        { id: "w7a-m08", skill: "u7", type: "mcq", set: "w7a-s3", topic: "7.5", reasoning: "Continuity and Change", difficulty: "moderate",
          question: "The two sources help explain which continuity in the Arab lands of the Middle East from before the First World War to the 1920s?",
          choices: [
            "Outside powers kept ruling them, as mandates replaced Ottoman rule.",
            "The lands stayed united under one government, as under the Ottomans.",
            "Russia remained the strongest foreign power in the Arab lands.",
            "The Ottoman sultan remained the region's religious and political leader.",
          ],
          why: [
            "Correct. After the war, Britain received mandates for Palestine and Iraq and France for Syria and Lebanon, so outside rule continued under a new form.",
            "The region was divided into several mandates and states after the war, which was a change, not a continuity.",
            "Russia left the war in 1918, and the Bolshevik government gave up tsarist claims in the region.",
            "The Ottoman sultanate was abolished in 1922 and the caliphate in 1924.",
          ],
          answer: 0 },
        { id: "w7a-m09", skill: "u7", type: "mcq", set: "w7a-s3", topic: "7.5", reasoning: "Comparison", difficulty: "easy",
          question: "The agreement in Source 2 is most similar to which of the following earlier developments?",
          choices: [
            "The Berlin Conference's division of Africa in 1884 and 1885",
            "The Meiji Restoration's adoption of Western technology in Japan",
            "The Haitian Revolution's overthrow of French colonial rule",
            "The Monroe Doctrine's warning against new European colonies",
          ],
          why: [
            "Correct. In both cases European governments arranged among themselves which of them would control lands they did not yet rule, without the consent of the people who lived there.",
            "The Meiji reforms were carried out by Japanese leaders for their own state, not by outside powers dividing foreign land.",
            "The Haitian Revolution ended colonial rule, while Source 2 plans to extend European control.",
            "The Monroe Doctrine opposed new European colonies in the Americas, while Source 2 plans to extend European control.",
          ],
          answer: 0 },

        // ---------- Set 4: Roosevelt, 1933 ----------
        { id: "w7a-m10", skill: "u7", type: "mcq", set: "w7a-s4", topic: "7.4", reasoning: "Causation", difficulty: "easy",
          question: "The conditions described in the first paragraph were most directly caused by which of the following?",
          choices: [
            "The crash of 1929, bank failures, and falling world trade",
            "Damage to American factories and farms in the First World War",
            "Hyperinflation from printing money to pay war reparations",
            "The spread of Soviet-style collective farming to the United States",
          ],
          why: [
            "Correct. The crash of 1929 was followed by thousands of bank failures, falling prices, and a collapse of world trade, which left millions out of work by 1933.",
            "No fighting took place on American soil during the First World War.",
            "Hyperinflation struck Germany in 1923; Roosevelt describes falling values, not rising prices.",
            "Collective farming was a Soviet policy and was never adopted in the United States.",
          ],
          answer: 0 },
        { id: "w7a-m11", skill: "u7", type: "mcq", set: "w7a-s4", topic: "7.4", reasoning: "Comparison", difficulty: "moderate",
          question: "Roosevelt's request for \"broad Executive power\" in the third paragraph differed most from the actions of the leaders of Germany and Italy in the 1930s because Roosevelt",
          choices: [
            "asked Congress for power and still faced elections",
            "refused to use government spending to create new jobs",
            "rejected any growth in the government's role in the economy",
            "abolished opposing parties to speed up economic recovery",
          ],
          why: [
            "Correct. Hitler used the Enabling Act of 1933 to rule by decree and banned other parties, and Mussolini had already built a one-party state, while Roosevelt worked through Congress and faced reelection in 1936.",
            "The second paragraph proposes that the government itself hire workers for public projects.",
            "Roosevelt calls for a larger government role, comparing the crisis to a war.",
            "This describes Nazi Germany and Fascist Italy, not the United States, where opposing parties kept competing in elections.",
          ],
          answer: 0 },
        { id: "w7a-m12", skill: "u7", type: "mcq", set: "w7a-s4", topic: "7.6", reasoning: "Causation", difficulty: "difficult",
          question: "Economic crises like the one described in the excerpt contributed to the outbreak of war in East Asia most directly by",
          choices: [
            "strengthening Japanese officers who sought resources in China",
            "persuading Nationalist China to invade Japan for its factories",
            "leading the United States to seize the Philippines from Spain",
            "putting Japan under a League mandate run by Britain and France",
          ],
          why: [
            "Correct. The Depression hurt Japanese exports such as silk, and army officers seized Manchuria in 1931; full-scale war with China followed in 1937.",
            "China was divided and weak in the 1930s and was invaded by Japan, not the other way around.",
            "The United States took the Philippines from Spain in 1898.",
            "Mandates applied to former German and Ottoman lands; Japan itself was given a mandate over former German islands in the Pacific.",
          ],
          answer: 0 },

        // ---------- Set 5: map of Nazi camps and killing centers ----------
        { id: "w7a-m13", skill: "u7", type: "mcq", set: "w7a-s5", topic: "7.8", reasoning: "Causation", difficulty: "difficult",
          question: "Which of the following most directly explains why all five killing centers on the map were in German-occupied Poland rather than in Germany?",
          choices: [
            "Poland had Europe's largest Jewish population and was under German rule.",
            "The Polish government built the camps before the war and gave them to Germany.",
            "Poland was Germany's ally and asked it to build the camps on its soil.",
            "German law did not allow the Nazi regime to build camps inside Germany.",
          ],
          why: [
            "Correct. About 3.3 million Jews lived in Poland in 1939, and the conquest of Poland put them under Nazi rule. The killing centers were built in rural places near rail lines, so Jews from Poland's ghettos and from across occupied Europe could be brought to them.",
            "Germany invaded Poland in September 1939 and ruled it by force. The Polish government fled abroad, and the SS built the killing centers in 1941 and 1942.",
            "Poland was Germany's first victim in the Second World War, not its ally.",
            "The map shows concentration camps inside Germany from 1933, so the regime faced no such limit.",
          ],
          answer: 0 },
        { id: "w7a-m14", skill: "u7", type: "mcq", set: "w7a-s5", topic: "7.7", reasoning: "Causation", difficulty: "easy",
          question: "The years given on the map for the killing centers, 1941 and 1942, came soon after which development of the Second World War?",
          choices: [
            "Germany's invasion of the Soviet Union in 1941",
            "The Allied landings in Normandy in 1944",
            "The Munich Agreement over the Sudetenland",
            "Germany's surrender to the Allies in 1945",
          ],
          why: [
            "Correct. As the German army advanced into the Soviet Union in 1941, mobile killing units shot hundreds of thousands of Jews, and the regime moved toward murdering all of Europe's Jews. The first gassings at Chelmno began in December 1941, and the other killing centers followed in 1942.",
            "The Allies landed in Normandy in June 1944, two years after most of the killing centers on the map began operating.",
            "The Munich Agreement of 1938 gave Germany the Sudetenland. It came three years before the first killing center and did not bring large Jewish populations under German rule.",
            "Germany surrendered in May 1945. By then Soviet troops had already reached Auschwitz-Birkenau, in January 1945.",
          ],
          answer: 0 },
        { id: "w7a-m15", skill: "u7", type: "mcq", set: "w7a-s5", topic: "7.9", reasoning: "Comparison", difficulty: "difficult",
          question: "Which of the following best describes a difference between the camps inside Germany and the killing centers shown on the map?",
          choices: [
            "Camps in Germany opened first, for political enemies; killing centers came later, to murder Jews.",
            "The camps in Germany were built after the killing centers, to hold the people who survived them.",
            "The camps in Germany were run by the Allies to hold captured German soldiers after the war.",
            "The killing centers were inside Germany, while the concentration camps were in occupied Poland.",
          ],
          why: [
            "Correct. Dachau opened in 1933, a few weeks after Hitler became chancellor, and its first prisoners were political opponents such as Communists and Social Democrats. The killing centers opened in 1941 and 1942, during the war, and were built to kill people with poison gas, most of them Jews.",
            "The map gives 1933 to 1937 for the camps in Germany and 1941 and 1942 for the killing centers, so the camps in Germany came first.",
            "The Nazi regime ran the camps in Germany. Allied troops reached them only in 1945, when they freed the surviving prisoners.",
            "This reverses the map, which places the three concentration camps in Germany and the five killing centers in occupied Poland.",
          ],
          answer: 0 },

        // ---------- SAQ 1: practice passage, empires and the world wars ----------
        { id: "w7a-q1a", skill: "u7", type: "fr", set: "w7a-s6", part: "SAQ 1", sub: "a", topic: "7.3",
          lead: "Use the passage below to answer all parts of the question that follows.",
          prompt: "Identify ONE piece of historical evidence, not mentioned in the passage, that supports the claim that European imperial powers relied on their colonies during the First World War.",
          earns: "Names a specific, accurate example of colonial soldiers, laborers, or resources used by an imperial power in the First World War that goes beyond the passage's general statements.",
          yes: [
            "Soldiers of the British Indian Army fought in the trenches in France in 1914 and 1915 and in the campaign against the Ottomans in Mesopotamia.",
            "France sent West African troops, the tirailleurs senegalais, to fight on the Western Front, including at Verdun.",
            "In the East African campaign, Britain and Germany forced huge numbers of Africans to carry supplies as porters, and many thousands of them died.",
          ],
          no: [
            "\"Britain used soldiers from India.\" This repeats the passage without adding a specific piece of evidence.",
            "\"Colonial troops fought in the Second World War.\" The prompt asks about the First World War.",
          ],
          example: "During the First World War, France brought soldiers from its West African colonies to fight on the Western Front, and many of them fought in the Battle of Verdun in 1916.",
          notExample: "The colonies helped a lot during the war." },
        { id: "w7a-q1b", skill: "u7", type: "fr", set: "w7a-s6", part: "SAQ 1", sub: "b", topic: "7.5",
          lead: "Use the passage below to answer all parts of the question that follows.",
          prompt: "Describe ONE way an anti-colonial movement challenged imperial rule in the period 1918 to 1939.",
          earns: "Describes a specific, accurate action by an anti-colonial movement or leader against imperial rule between 1918 and 1939.",
          yes: [
            "In India, Gandhi led the noncooperation movement of 1920 to 1922, asking Indians to boycott British goods, schools, and courts, and he led the Salt March in 1930.",
            "In Egypt, mass protests against British rule in 1919 pushed Britain to declare Egypt formally independent in 1922.",
            "Ho Chi Minh asked the peacemakers at Versailles in 1919 for rights for the people of French Indochina and later helped found the Indochinese Communist Party in 1930.",
          ],
          no: [
            "\"India became independent.\" India became independent in 1947, after the period in the prompt.",
            "\"People protested.\" This does not name a movement, a place, or an action.",
          ],
          example: "In 1930 Gandhi led thousands of Indians on the Salt March to the sea to make salt illegally, breaking a British law that taxed salt. This protest challenged British rule by showing that ordinary Indians would openly disobey colonial laws.",
          notExample: "Colonies wanted independence after the war." },
        { id: "w7a-q1c", skill: "u7", type: "fr", set: "w7a-s6", part: "SAQ 1", sub: "c", topic: "7.7",
          lead: "Use the passage below to answer all parts of the question that follows.",
          prompt: "Explain ONE way the Second World War weakened the ability of European powers to control their colonies.",
          earns: "Explains how a specific development of the Second World War reduced a European power's control over its colonies.",
          yes: [
            "Japan conquered British, French, and Dutch colonies in Southeast Asia in 1941 and 1942, including Singapore and the Dutch East Indies, which showed colonial peoples that European rulers could be defeated.",
            "Britain ended the war deeply in debt and dependent on American loans, so it could not afford to keep large armies in its colonies.",
            "Germany occupied France and the Netherlands in 1940, which left their colonies cut off from the home governments.",
          ],
          no: [
            "\"The war was expensive.\" This does not explain how the cost affected control of colonies.",
            "\"The colonies won the war.\" This is inaccurate and does not answer the prompt.",
          ],
          example: "Japan's capture of Singapore in 1942, when tens of thousands of British Empire troops surrendered, damaged British prestige in Asia. After the war, nationalists in places such as Malaya and Burma were less willing to accept British rule, and Britain found it harder to restore control.",
          notExample: "World War II was a world war, so it affected colonies." },

        // ---------- SAQ 2: no source, mass atrocities ----------
        { id: "w7a-q2a", skill: "u7", type: "fr", part: "SAQ 2", sub: "a", topic: "7.8",
          lead: "Answer all parts of the question that follows.",
          prompt: "Identify ONE mass atrocity, other than the Holocaust, carried out by a government or its forces in the period 1900 to 2000.",
          earns: "Names a specific, accurate mass atrocity from the period and the group or government responsible.",
          yes: [
            "The Ottoman government's deportation and killing of Armenians beginning in 1915.",
            "The Khmer Rouge's killing of more than a million Cambodians from 1975 to 1979.",
            "The genocide of Tutsi in Rwanda in 1994 by Hutu extremists, including government officials and militias.",
          ],
          no: [
            "\"The Holocaust.\" The prompt asks for an atrocity other than the Holocaust.",
            "\"The First World War.\" A war is not by itself a mass atrocity against a targeted group.",
          ],
          example: "The Rwandan genocide of 1994, when Hutu extremists killed hundreds of thousands of Tutsi in about one hundred days.",
          notExample: "A lot of people were killed in wars." },
        { id: "w7a-q2b", skill: "u7", type: "fr", part: "SAQ 2", sub: "b", topic: "7.8",
          lead: "Answer all parts of the question that follows.",
          prompt: "Describe ONE way a government used ideas about ethnicity, religion, or political enemies to justify a mass atrocity in the period 1900 to 2000.",
          earns: "Describes how a specific government or movement used an idea about a targeted group to justify violence against it.",
          yes: [
            "Nazi propaganda described Jews as a racial enemy who threatened the German nation.",
            "The Khmer Rouge treated educated city dwellers and former officials as enemies of a revolution meant to create a classless farming society.",
            "Hutu Power radio broadcasts in Rwanda called Tutsi \"cockroaches\" and urged listeners to kill them.",
          ],
          no: [
            "\"The government did not like them.\" This does not describe an idea used to justify violence.",
            "\"The Nazis wanted more land.\" This describes a war aim, not an idea used to justify killing a targeted group.",
          ],
          example: "In 1994, radio stations controlled by Hutu extremists in Rwanda described Tutsi as \"cockroaches\" and as a threat to the nation, which encouraged ordinary people to join the killing.",
          notExample: "The leaders were evil." },
        { id: "w7a-q2c", skill: "u7", type: "fr", part: "SAQ 2", sub: "c", topic: "7.8",
          lead: "Answer all parts of the question that follows.",
          prompt: "Explain ONE way international responses to mass atrocities changed in the period 1900 to 2000.",
          earns: "Explains a specific change in how states or international bodies responded to mass atrocities, with an accurate example.",
          yes: [
            "After the Second World War, the Nuremberg trials held individual Nazi leaders responsible for crimes against humanity, which had rarely happened after earlier atrocities such as the killing of Armenians.",
            "The United Nations adopted the Genocide Convention in 1948, which made genocide a crime under international law.",
            "In the 1990s the United Nations created international tribunals to try people accused of crimes in the former Yugoslavia and in Rwanda, and in 1998 states agreed to create a permanent International Criminal Court.",
          ],
          no: [
            "\"Countries stopped all genocides after 1945.\" This is inaccurate; genocides took place in Cambodia and Rwanda later.",
            "\"The world was sad about it.\" This does not describe a change in international responses.",
          ],
          example: "Before the Second World War, leaders who ordered mass killings, such as those responsible for the Armenian genocide, mostly escaped punishment. After 1945, the Nuremberg trials and the 1948 Genocide Convention made genocide an international crime, and in the 1990s the United Nations set up a tribunal that convicted organizers of the Rwandan genocide.",
          notExample: "People started caring more about human rights." },

        // ---------- Section II: LEQ ----------
        { id: "w7a-leq", skill: "u7", type: "essay", kind: "leq", topic: "7.4", reasoning: "Comparison",
          prompt: "In the period 1929 to 1939, the Great Depression caused severe economic hardship in many parts of the world. Develop an argument that evaluates the extent to which governments in different states responded to the Great Depression in similar ways.",
          rows: [
            { name: "Thesis/Claim", max: 1, levels: [
              "0 points: restates the prompt, or makes a claim that does not take a position on how similar the responses were (for example, \"Governments responded to the Great Depression in many ways\").",
              "1 point: makes a historically defensible claim that takes a position on the extent of similarity, such as \"Most governments expanded the state's role in the economy to fight unemployment, but democracies like the United States did so within elected institutions, while Germany, Italy, and Japan used the crisis to build authoritarian states and prepare for war.\"",
            ] },
            { name: "Contextualization", max: 1, levels: [
              "0 points: gives no broader context, or only a phrase about the period.",
              "1 point: describes a broader context relevant to the prompt, such as the stock market crash of 1929, bank failures, and the collapse of world trade and prices, which spread the crisis from the United States to Europe, Latin America, and Asia and discredited the older belief that markets would recover without government action.",
            ] },
            { name: "Evidence", max: 2, levels: [
              "0 points: gives no specific examples relevant to the prompt.",
              "1 point: gives at least two specific examples of government responses to the Depression, such as the Works Progress Administration in the United States and Nazi public works and rearmament in Germany.",
              "2 points: uses specific and relevant examples to support an argument about the extent of similarity, for example by showing that the New Deal and Nazi programs both put people to work through state spending while differing in how they treated labor unions and opposing parties.",
            ] },
            { name: "Analysis and Reasoning", max: 2, levels: [
              "0 points: describes responses one by one without comparing them.",
              "1 point: uses comparison to frame the argument, for example by stating a similarity or a difference between the responses of two states and explaining it.",
              "2 points: shows a complex understanding, for example by explaining both similarities and differences, by explaining why responses differed (political system, colonial empire, or military goals), or by comparing a response such as Japan's or Germany's that combined economic recovery with expansion abroad.",
            ] },
          ],
          evidence: [
            "In the United States, unemployment reached about a quarter of the labor force in 1933.",
            "Roosevelt's New Deal created the Civilian Conservation Corps (1933) and the Works Progress Administration (1935) to employ people on public projects.",
            "The Social Security Act of 1935 created old-age pensions and unemployment insurance in the United States.",
            "The Smoot-Hawley Tariff of 1930 raised U.S. tariffs, and other states raised their own, which deepened the fall in world trade.",
            "In Germany, the Nazi government banned independent trade unions in 1933, replaced them with the German Labor Front, built highways (the Autobahn), and expanded rearmament, especially under the Four Year Plan of 1936.",
            "Hitler used the Enabling Act of 1933 to rule by decree and made the Nazi Party the only legal party.",
            "In Fascist Italy, Mussolini's government created the Institute for Industrial Reconstruction (IRI) in 1933 to take over failing banks and companies, and it organized the economy into state-controlled corporations.",
            "In Japan, Finance Minister Takahashi Korekiyo increased government and military spending in the early 1930s, while the army's seizure of Manchuria in 1931 was justified as a way to gain resources and markets.",
            "Britain left the gold standard in 1931 and, at the Ottawa Conference of 1932, adopted imperial preference to favor trade within its empire.",
            "In Latin America, governments such as Getulio Vargas's in Brazil and Lazaro Cardenas's in Mexico promoted national industry; Cardenas nationalized foreign oil companies in 1938.",
            "The Soviet Union's Five-Year Plans, begun in 1928, continued state-directed industrialization, and Soviet leaders presented the Depression as proof that capitalism had failed.",
          ],
          model: "Thesis: Between 1929 and 1939, most governments responded to the Great Depression by expanding the state's role in the economy to create jobs, but the responses differed sharply in their political methods, as the United States worked through elected institutions while Germany, Italy, and Japan used the crisis to build authoritarian states and prepare for expansion. Context: the crash of 1929, bank failures, and the collapse of world trade spread unemployment across industrial and export economies and made older laissez-faire policies look like failures. Body 1 (similarity): the New Deal's CCC and WPA and Nazi public works such as the Autobahn both used government spending to put people back to work, and Italy's IRI and Japan's increased spending under Takahashi show the same turn toward state action; many states, including Britain with imperial preference and the United States with the Smoot-Hawley Tariff, also protected their own markets. Body 2 (difference): Roosevelt sought power from Congress and kept elections and unions, adding the Social Security Act, while Hitler ruled by decree after the Enabling Act and crushed independent unions, and Mussolini ran a one-party corporate state. Body 3 (difference and complexity): in Germany and Japan, recovery was tied to rearmament and conquest, as in the seizure of Manchuria in 1931, so the Depression response in those states helped lead to war, while in Latin America leaders such as Cardenas used the crisis to reduce foreign economic control. Conclusion: the shared turn toward state intervention was real, but the political systems that carried it out made the responses more different than similar.",
        },
      ] },
  ],
};
