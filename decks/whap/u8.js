// Unit 8: Cold War and Decolonization, c. 1900 to the present
// Sources: every stimulus (multiple-choice sets, SAQs with a source, DBQ documents), keyed by id.
export const sets = {
  "u8-s1": {
    id: "u8-s1", name: "Truman on two ways of life", intro: "Use the source below to answer the questions that follow.",
    sources: [
      { title: "Source", blocks: [
        { p: "One way of life is based upon the will of the majority, and is distinguished by free institutions, representative government, free elections, guarantees of individual liberty, freedom of speech and religion, and freedom from political oppression." },
        { p: "The second way of life is based upon the will of a minority forcibly imposed upon the majority. It relies upon terror and oppression, a controlled press and radio; fixed elections, and the suppression of personal freedoms." },
        { p: "I believe that it must be the policy of the United States to support free peoples who are resisting attempted subjugation by armed minorities or by outside pressures." },
        { p: "... I believe that our help should be primarily through economic and financial aid which is essential to economic stability and orderly political processes." },
        { p: "... The seeds of totalitarian regimes are nurtured by misery and want." },
        { cite: "Harry S. Truman, President of the United States, address to a joint session of Congress recommending assistance to Greece and Turkey (the Truman Doctrine), March 12, 1947. The Avalon Project, Yale Law School.", url: "https://avalon.law.yale.edu/20th_century/trudoc.asp", kind: "primary" },
      ] },
    ],
  },

  "u8-s2": {
    id: "u8-s2", name: "Eisenhower's farewell warning", intro: "Use the source below to answer the questions that follow.",
    sources: [
      { title: "Source", blocks: [
        { p: "Until the latest of our world conflicts, the United States had no armaments industry. American makers of plowshares could, with time and as required, make swords as well. But now we can no longer risk emergency improvisation of national defense; we have been compelled to create a permanent armaments industry of vast proportions. Added to this, three and a half million men and women are directly engaged in the defense establishment. ..." },
        { p: "This conjunction of an immense military establishment and a large arms industry is new in the American experience. ..." },
        { p: "In the councils of government, we must guard against the acquisition of unwarranted influence, whether sought or unsought, by the military-industrial complex. The potential for the disastrous rise of misplaced power exists and will persist." },
        { cite: "Dwight D. Eisenhower, President of the United States, Farewell Address to the Nation, January 17, 1961. Transcript, National Archives, Milestone Documents.", url: "https://www.archives.gov/milestone-documents/president-dwight-d-eisenhowers-farewell-address", kind: "primary" },
      ] },
    ],
  },

  "u8-s3": {
    id: "u8-s3", name: "Communism and the peasantry in China", intro: "Use the passage below to answer the questions that follow.",
    sources: [
      { title: "Source", blocks: [
        { p: "Communist parties in the 20th century usually came to power in mostly rural societies, not in the industrial societies Karl Marx had expected. In China, Mao Zedong's Communist Party won peasant support by promising to take land from landlords and give it to the people who farmed it. Its fight against the Japanese invasion from 1937 to 1945 also made it look like a defender of the nation. After its victory in 1949, the new government carried out land reform and then moved peasants into collective farms. The Great Leap Forward, begun in 1958, tried to industrialize the country through mass campaigns. Unrealistic grain quotas and the shift of farm labor into other work caused a famine that killed millions. China's experience shows how communist states promised equality to peasants but often used force to reshape rural life." },
        { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" },
      ] },
    ],
  },

  "u8-s4": {
    id: "u8-s4", name: "Nuclear warhead stockpiles, 1950 to 2000", intro: "Use the table below to answer the questions that follow.",
    sources: [
      { title: "Source", blocks: [
        { p: "Estimated nuclear warheads in the stockpiles of the United States and the Soviet Union (Russia after 1991), selected years" },
        { table: {
          head: ["Year", "United States", "Soviet Union / Russia"],
          rows: [
            ["1950", "299", "5"],
            ["1955", "2,422", "200"],
            ["1960", "18,638", "1,627"],
            ["1965", "31,139", "6,144"],
            ["1970", "26,008", "11,736"],
            ["1975", "27,519", "19,235"],
            ["1980", "24,104", "30,665"],
            ["1985", "23,368", "38,582"],
            ["1990", "21,392", "32,980"],
            ["1995", "10,904", "18,179"],
            ["2000", "10,577", "12,188"],
          ],
        } },
        { cite: "Federation of American Scientists, nuclear warhead stockpile estimates (Hans M. Kristensen, Matt Korda, Robert S. Norris, Eliana Johns, and Mackenzie Knight), as compiled by Our World in Data, \"Nuclear warhead stockpiles\" (2026). Stockpiles include warheads assigned to military forces and exclude retired warheads waiting to be dismantled. Our World in Data lists Soviet figures under Russia for the years before 1991.", url: "https://ourworldindata.org/grapher/nuclear-warhead-stockpiles", kind: "data" },
      ] },
    ],
  },

  "u8-s5": {
    id: "u8-s5", name: "Kennedy on the new states", intro: "Use the source below to answer the questions that follow.",
    sources: [
      { title: "Source", blocks: [
        { p: "To those new states whom we welcome to the ranks of the free, we pledge our word that one form of colonial control shall not have passed away merely to be replaced by a far more iron tyranny. We shall not always expect to find them supporting our view. But we shall always hope to find them strongly supporting their own freedom--and to remember that, in the past, those who foolishly sought power by riding the back of the tiger ended up inside." },
        { p: "To those people in the huts and villages of half the globe struggling to break the bonds of mass misery, we pledge our best efforts to help them help themselves, for whatever period is required--not because the communists may be doing it, not because we seek their votes, but because it is right." },
        { cite: "John F. Kennedy, President of the United States, Inaugural Address, January 20, 1961. Transcript, National Archives, Milestone Documents.", url: "https://www.archives.gov/milestone-documents/president-john-f-kennedys-inaugural-address", kind: "primary" },
      ] },
    ],
  },

  "u8-s6": {
    id: "u8-s6", name: "Reagan at the Brandenburg Gate", intro: "Use the source below to answer the questions that follow.",
    sources: [
      { title: "Source", blocks: [
        { p: "In the 1950's, Khrushchev predicted: \"We will bury you.\" But in the West today, we see a free world that has achieved a level of prosperity and well-being unprecedented in all human history. In the Communist world, we see failure, technological backwardness, declining standards of health, even want of the most basic kind-too little food. ..." },
        { p: "And now the Soviets themselves may, in a limited way, be coming to understand the importance of freedom. We hear much from Moscow about a new policy of reform and openness. ... Some economic enterprises have been permitted to operate with greater freedom from state control. ..." },
        { p: "General Secretary Gorbachev, if you seek peace, if you seek prosperity for the Soviet Union and Eastern Europe, if you seek liberalization: Come here to this gate! Mr. Gorbachev, open this gate! Mr. Gorbachev, tear down this wall!" },
        { cite: "Ronald Reagan, President of the United States, Remarks on East-West Relations at the Brandenburg Gate in West Berlin, June 12, 1987. Ronald Reagan Presidential Library and Museum.", url: "https://www.reaganlibrary.gov/archives/speech/remarks-east-west-relations-brandenburg-gate-west-berlin", kind: "primary" },
      ] },
    ],
  },

  "u8-s7": {
    id: "u8-s7", name: "The legacies of empire in new states", intro: "Use the passage below to answer all parts of the question that follows.",
    sources: [
      { title: "Source", blocks: [
        { p: "After independence, many new states in Asia and Africa faced problems that colonial rule had left behind. Borders drawn by European officials often grouped rival ethnic and religious communities inside one state or split a single community between several. In South Asia, the partition of British India into India and Pakistan in 1947 set off the migration of millions of Hindus, Muslims, and Sikhs and violence that killed hundreds of thousands of people. Colonial economies had also been built around exporting raw materials to Europe. To build their own industries, many new governments chose state-led development. Egypt nationalized the Suez Canal in 1956, and India used five-year plans to direct investment into factories, dams, and steel mills. Political independence did not end the economic and social effects of empire." },
        { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" },
      ] },
    ],
  },

  "u8-s8": {
    id: "u8-s8", name: "The Comprehensive Anti-Apartheid Act", intro: "Use the source below to answer all parts of the question that follows.",
    sources: [
      { title: "Source", blocks: [
        { p: "The purpose of this Act is to set forth a comprehensive and complete framework to guide the efforts of the United States in helping to bring an end to apartheid in South Africa and lead to the establishment of a nonracial, democratic form of government. ..." },
        { p: "(b) The United States will work toward this goal by encouraging the Government of South Africa to—" },
        { p: "(1) repeal the present state of emergency and respect the principle of equal justice under law for citizens of all races;" },
        { p: "(2) release Nelson Mandela, Govan Mbeki, Walter Sisulu, black trade union leaders, and all political prisoners;" },
        { p: "... (4) establish a timetable for the elimination of apartheid laws;" },
        { p: "(5) negotiate with representatives of all racial groups in South Africa the future political system in South Africa; and" },
        { cite: "United States Congress, Comprehensive Anti-Apartheid Act of 1986, Public Law 99-440, Sections 4 and 101, enacted October 2, 1986 (100 Stat. 1086). Office of the Law Revision Counsel, United States House of Representatives.", url: "https://uscode.house.gov/statutes/pl/99/440.pdf", kind: "primary" },
      ] },
    ],
  },

  "u8-dbq": {
    id: "u8-dbq", name: "The Cold War and decolonization", intro: "Use the documents below to answer the question that follows.",
    sources: [
      { title: "Document 1", blocks: [
        { p: "The President of the United States of America and the Prime Minister, Mr. Churchill, representing His Majesty's Government in the United Kingdom, being met together, deem it right to make known certain common principles in the national policies of their respective countries on which they base their hopes for a better future for the world." },
        { p: "First, their countries seek no aggrandizement, territorial or other;" },
        { p: "Second, they desire to see no territorial changes that do not accord with the freely expressed wishes of the peoples concerned;" },
        { p: "Third, they respect the right of all peoples to choose the form of government under which they will live; and they wish to see sovereign rights and self government restored to those who have been forcibly deprived of them;" },
        { cite: "Franklin D. Roosevelt, President of the United States, and Winston Churchill, Prime Minister of the United Kingdom, The Atlantic Charter, joint declaration, August 14, 1941. The Avalon Project, Yale Law School.", url: "https://avalon.law.yale.edu/wwii/atlantic.asp", kind: "primary" },
      ] },
      { title: "Document 2", blocks: [
        { p: "Members of the United Nations which have or assume responsibilities for the administration of territories whose peoples have not yet attained a full measure of self-government recognize the principle that the interests of the inhabitants of these territories are paramount, and accept as a sacred trust the obligation to promote to the utmost, within the system of international peace and security established by the present Charter, the well-being of the inhabitants of these territories, and, to this end:" },
        { p: "... b. to develop self-government, to take due account of the political aspirations of the peoples, and to assist them in the progressive development of their free political institutions, according to the particular circumstances of each territory and its peoples and their varying stages of advancement;" },
        { cite: "Charter of the United Nations, Chapter XI (Declaration Regarding Non-Self-Governing Territories), Article 73, signed at San Francisco, June 26, 1945. United Nations.", url: "https://www.un.org/en/about-us/un-charter/chapter-11", kind: "primary" },
      ] },
      { title: "Document 3", blocks: [
        { p: "Question from a reporter: Mr. President, would you mind commenting on the strategic importance of Indochina to the free world? ..." },
        { p: "President Eisenhower: ... Then you have the possibility that many human beings pass under a dictatorship that is inimical to the free world." },
        { p: "Finally, you have broader considerations that might follow what you would call the \"falling domino\" principle. You have a row of dominoes set up, you knock over the first one, and what will happen to the last one is the certainty that it will go over very quickly. So you could have a beginning of a disintegration that would have the most profound influences. ..." },
        { p: "Then with respect to more people passing under this domination, Asia, after all, has already lost some 450 million of its peoples to the Communist dictatorship, and we simply can't afford greater losses." },
        { cite: "Dwight D. Eisenhower, President of the United States, The President's News Conference, April 7, 1954 (question from Robert Richards of Copley Press). The American Presidency Project, University of California, Santa Barbara.", url: "https://www.presidency.ucsb.edu/documents/the-presidents-news-conference-361", kind: "primary" },
      ] },
      { title: "Document 4", blocks: [
        { p: "Mr. President, the most powerful single force in the world today is neither communism nor capitalism, neither the H-bomb nor the guided missile – it is man's eternal desire to be free and independent. The great enemy of that tremendous force of freedom is called, for want of a more precise term, imperialism – and today that means Soviet imperialism and, whether we like it or not, and though they are not to be equated, Western imperialism. ..." },
        { p: "It [the war in Algeria] has furnished powerful ammunition to anti-Western propagandists throughout Asia and the Middle East ..." },
        { p: "Instead of abandoning African nationalism to the anti-Western agitators and Soviet agents who hope to capture its leadership, the United States, a product of political revolution, must redouble its efforts to earn the respect and friendship of nationalist leaders." },
        { cite: "John F. Kennedy, United States Senator from Massachusetts, remarks in the Senate on the French war in Algeria, Washington, D.C., July 2, 1957. John F. Kennedy Presidential Library and Museum.", url: "https://www.jfklibrary.org/node/14256", kind: "primary" },
      ] },
      { title: "Document 5", blocks: [
        { p: "1. The subjection of peoples to alien subjugation, domination and exploitation constitutes a denial of fundamental human rights, is contrary to the Charter of the United Nations and is an impediment to the promotion of world peace and co-operation." },
        { p: "2. All peoples have the right to self-determination; by virtue of that right they freely determine their political status and freely pursue their economic, social and cultural development." },
        { p: "3. Inadequacy of political, economic, social or educational preparedness should never serve as a pretext for delaying independence. ..." },
        { p: "5. Immediate steps shall be taken, in Trust and Non-Self-Governing Territories or all other territories which have not yet attained independence, to transfer all powers to the peoples of those territories, without any conditions or reservations, ... in order to enable them to enjoy complete independence and freedom." },
        { cite: "United Nations General Assembly, Resolution 1514 (XV), Declaration on the Granting of Independence to Colonial Countries and Peoples, adopted at the 947th plenary meeting, December 14, 1960. United Nations Digital Library.", url: "https://digitallibrary.un.org/record/206145/files/A_RES_1514%28XV%29-EN.pdf?ln=en", kind: "primary" },
      ] },
      { title: "Document 6", blocks: [
        { p: "Total number of member states of the United Nations, selected years" },
        { table: {
          head: ["Year", "Member states", "Increase since the previous year shown"],
          rows: [
            ["1945", "51", "(founding members)"],
            ["1950", "60", "9"],
            ["1955", "76", "16"],
            ["1960", "99", "23"],
            ["1965", "117", "18"],
            ["1970", "127", "10"],
            ["1975", "144", "17"],
          ],
        } },
        { p: "Of the 17 states admitted in 1960, 16 were in Africa." },
        { cite: "United Nations, \"Growth in United Nations Membership,\" member states by year of admission. Increases calculated from the totals the United Nations reports for each year.", url: "https://www.un.org/en/about-us/growth-in-un-membership", kind: "data" },
      ] },
      { title: "Document 7", blocks: [
        { p: "Whereas naval units of the Communist regime in Vietnam, in violation of the principles of the Charter of the United Nations and of international law, have deliberately and repeatedly attacked United States naval vessels lawfully present in international waters, and have thereby created a serious threat to international peace; and ..." },
        { p: "Resolved by the Senate and House of Representatives of the United States of America in Congress assembled, That the Congress approves and supports the determination of the President, as Commander in Chief, to take all necessary measures to repel any armed attack against the forces of the United States and to prevent further aggression." },
        { p: "Section 2. The United States regards as vital to its national interest and to world peace the maintenance of international peace and security in southeast Asia. ..." },
        { cite: "United States Congress, Tonkin Gulf Resolution (H.J. Res. 1145), passed by Congress August 7, 1964, and signed by President Johnson August 10, 1964. Transcript, National Archives, Milestone Documents.", url: "https://www.archives.gov/milestone-documents/tonkin-gulf-resolution", kind: "primary" },
      ] },
    ],
  },
};

export default [
  // ===== Multiple choice: Set 1, Truman Doctrine =====
  { id: "u8-m01", skill: "u8", type: "mcq", set: "u8-s1", topic: "8.1", reasoning: "Causation",
    question: "Which of the following most directly led Truman to give the speech in the excerpt?",
    choices: [
      "Great Britain, weakened by the Second World War, announced that it could no longer pay to support the governments of Greece and Turkey.",
      "The Soviet Union tested its first atomic bomb, ending the United States' monopoly on nuclear weapons.",
      "Communist forces led by Mao Zedong won the Chinese Civil War and founded the People's Republic of China.",
      "North Korea invaded South Korea, and the United Nations voted to send troops to defend the South.",
    ],
    why: [
      "Correct. In early 1947 Britain told the United States it could no longer afford aid to Greece and Turkey, and Truman asked Congress to take over that role.",
      "The first Soviet atomic test came in 1949, two years after this speech.",
      "The Communist victory in China came in 1949, two years after this speech.",
      "The Korean War began in 1950, three years after this speech.",
    ],
    answer: 0 },

  { id: "u8-m02", skill: "u8", type: "mcq", set: "u8-s1", topic: "8.2", reasoning: "Comparison",
    question: "The two ways of life described in the excerpt most directly reflect which of the following?",
    choices: [
      "The ideological split between the democratic, capitalist bloc led by the United States and the communist bloc led by the Soviet Union",
      "The split between the Soviet Union and the People's Republic of China over the direction of world communism",
      "The division between European colonial powers and the peoples they ruled in Asia and Africa",
      "The conflict between the Axis powers and the Allied powers during the Second World War",
    ],
    why: [
      "Correct. Truman contrasts free elections and liberties with rule by a minority through terror, which is how United States leaders described Soviet communism at the start of the Cold War.",
      "The Sino-Soviet split developed around 1960, and the excerpt describes a contrast between democracy and dictatorship, not a quarrel between communist states.",
      "The excerpt does not describe colonial rule. Truman is contrasting two political systems, one based on the majority and one imposed by a minority.",
      "The Axis had been defeated by 1945. In 1947 Truman is describing a new postwar rivalry.",
    ],
    answer: 0 },

  { id: "u8-m03", skill: "u8", type: "mcq", set: "u8-s1", topic: "8.2", reasoning: "Causation",
    question: "The claims in the final two paragraphs of the excerpt most directly helped lead to which of the following?",
    choices: [
      "The Marshall Plan, which gave billions of dollars to rebuild the economies of Western Europe",
      "The Warsaw Pact, which joined the Soviet Union and its Eastern European satellites in a military alliance",
      "The Non-Aligned Movement, which brought together states that refused to join either Cold War bloc",
      "The League of Nations, which was created to settle disputes between states through negotiation",
    ],
    why: [
      "Correct. Truman argues that \"misery and want\" breed totalitarianism and that aid should be economic, and the Marshall Plan (1948) applied that idea to Western Europe.",
      "The Warsaw Pact (1955) was the Soviet bloc's answer to NATO, not a United States program of economic aid.",
      "The Non-Aligned Movement (1961) was formed by states such as India, Egypt, and Yugoslavia, not by the United States.",
      "The League of Nations was created after the First World War, decades before this speech.",
    ],
    answer: 0 },

  { id: "u8-m04", skill: "u8", type: "mcq", set: "u8-s1", topic: "8.3", reasoning: "Continuity and Change",
    question: "Which of the following later developments best continued the policy stated in the third paragraph of the excerpt?",
    choices: [
      "United States military involvement in Korea and Vietnam to stop the spread of communism",
      "The Soviet Union's use of tanks to crush the Hungarian uprising of 1956",
      "The United States' decision to stay out of the League of Nations after the First World War",
      "The opening of the Berlin Wall and the reunification of Germany",
    ],
    why: [
      "Correct. Supporting governments that resisted communist forces, as Truman proposed for Greece and Turkey, became the policy of containment that led the United States into wars in Korea and Vietnam.",
      "The Soviet action in Hungary kept a communist government in power, which is the opposite of Truman's policy.",
      "Staying out of the League came long before this speech and reflected isolation, not a pledge to support other peoples.",
      "The end of the Berlin Wall marked the end of the Cold War, not a continuation of Truman's policy of resisting communist expansion.",
    ],
    answer: 0 },

  // ===== Multiple choice: Set 2, Eisenhower farewell =====
  { id: "u8-m05", skill: "u8", type: "mcq", set: "u8-s2", topic: "8.3", reasoning: "Causation",
    question: "The \"permanent armaments industry\" described in the excerpt was most directly a result of which of the following?",
    choices: [
      "The arms race between the United States and the Soviet Union after the Second World War",
      "The rise of fascist governments in Germany and Italy in the 1930s",
      "The economic collapse of the Great Depression",
      "The independence of former colonies in Africa and Asia",
    ],
    why: [
      "Correct. Eisenhower says the United States had no armaments industry before the Second World War, and Cold War rivalry with the Soviet Union kept military production running at a high level afterward.",
      "Fascism led to the Second World War, but Eisenhower stresses that the arms industry became permanent after that war ended.",
      "The Great Depression reduced industrial production and is not connected to military spending in the excerpt.",
      "Decolonization was happening at the same time, but it did not create the American arms industry.",
    ],
    answer: 0 },

  { id: "u8-m06", skill: "u8", type: "mcq", set: "u8-s2", topic: "8.3", reasoning: "Causation",
    question: "Eisenhower's main purpose in the excerpt is to",
    choices: [
      "warn Americans that the size and power of the military and arms industry could threaten democratic government",
      "persuade Congress to stop sending military aid to Western European allies",
      "announce a treaty with the Soviet Union to end the arms race",
      "celebrate the role of American factories in the defeat of Germany and Japan",
    ],
    why: [
      "Correct. He calls the defense establishment necessary but warns against the \"unwarranted influence\" of the \"military-industrial complex.\"",
      "The excerpt says nothing about aid to allies. It is about influence inside the United States.",
      "No such treaty is mentioned, and Eisenhower treats the arms industry as something that \"will persist.\"",
      "He mentions the world wars only to show that the permanent arms industry is new, not to celebrate victory.",
    ],
    answer: 0 },

  { id: "u8-m07", skill: "u8", type: "mcq", set: "u8-s2", topic: "8.3", reasoning: "Comparison",
    question: "Which of the following developments in the Soviet Union during the Cold War was most similar to the one Eisenhower describes?",
    choices: [
      "The Soviet government put a large share of the country's resources into weapons production and military research.",
      "The Soviet government allowed small private businesses under the New Economic Policy.",
      "The Soviet government sent troops to end the Hungarian uprising.",
      "The Soviet government introduced glasnost, which allowed more open criticism of officials.",
    ],
    why: [
      "Correct. Like the United States, the Soviet Union built a huge permanent military and arms industry during the Cold War, and that spending strained its economy.",
      "The New Economic Policy of the 1920s was a retreat toward limited private trade, not a military buildup.",
      "The invasion of Hungary in 1956 was a use of military force, not the growth of a permanent arms industry.",
      "Glasnost in the late 1980s opened up public debate. It is not similar to a growing arms industry.",
    ],
    answer: 0 },

  { id: "u8-m08", skill: "u8", type: "mcq", set: "u8-s2", topic: "8.3", reasoning: "Continuity and Change",
    question: "Which of the following developments of the 1960s most directly continued the pattern Eisenhower describes?",
    choices: [
      "The space race, in which the United States and the Soviet Union competed to build rockets and send people into space",
      "The spread of nonviolent protests for civil rights in the United States",
      "The independence of most of Britain's and France's African colonies",
      "The founding of the Organization of the Petroleum Exporting Countries (OPEC)",
    ],
    why: [
      "Correct. The space race tied government spending, military rocket technology, and private industry together, as in the \"conjunction\" Eisenhower describes.",
      "The civil rights movement was a major development of the 1960s, but it was a protest movement, not part of the defense establishment.",
      "African independence was a major change of the 1960s, but it has no direct link to the American arms industry.",
      "OPEC (1960) was formed by oil-producing states to control prices, not by the superpowers' defense industries.",
    ],
    answer: 0 },

  // ===== Multiple choice: Set 3, practice passage on Chinese communism =====
  { id: "u8-m09", skill: "u8", type: "mcq", set: "u8-s3", topic: "8.4", reasoning: "Causation",
    question: "Which of the following best states the argument of the passage?",
    choices: [
      "Communist parties won support by promising land and equality to peasants, but the states they built often used force to remake rural life.",
      "Communist revolutions succeeded mainly in industrial countries with large populations of factory workers.",
      "The Chinese Communist Party came to power mainly because Soviet troops occupied China in 1945.",
      "Land reform in China weakened the Communist Party by turning peasants against the government.",
    ],
    why: [
      "Correct. The passage traces peasant support for the party, then land reform, collectivization, and a deadly famine, and ends by saying communist states \"often used force.\"",
      "The passage says the opposite: communist parties usually came to power in mostly rural societies.",
      "The passage credits peasant support and the war against Japan, not Soviet occupation.",
      "The passage presents land reform as a policy that built support, not one that weakened the party.",
    ],
    answer: 0 },

  { id: "u8-m10", skill: "u8", type: "mcq", set: "u8-s3", topic: "8.4", reasoning: "Causation",
    question: "Which of the following best explains why communist movements often gained support in rural and colonized societies in the 20th century?",
    choices: [
      "Communists promised to redistribute land and to end foreign control, which appealed to poor farmers and to nationalists.",
      "The Marshall Plan sent economic aid to these societies, which helped communist parties organize.",
      "Industrial workers made up most of the population in these societies.",
      "European governments encouraged communist parties in their colonies to weaken local elites.",
    ],
    why: [
      "Correct. In China, Vietnam, and elsewhere, communist parties combined land reform with resistance to foreign powers, as the passage shows with the war against Japan.",
      "The Marshall Plan aided Western Europe and was designed to weaken communist parties, not help them.",
      "These societies were mostly rural, which is the point of the passage's first sentence.",
      "Colonial governments usually banned or jailed communists, seeing them as a threat to colonial rule.",
    ],
    answer: 0 },

  { id: "u8-m11", skill: "u8", type: "mcq", set: "u8-s3", topic: "8.4", reasoning: "Comparison",
    question: "Which of the following developments in the Soviet Union was most similar to the Great Leap Forward described in the passage?",
    choices: [
      "Stalin's Five-Year Plans and forced collectivization of farms, which caused famine in Ukraine and other regions",
      "Lenin's New Economic Policy, which allowed peasants to sell some of their crops on the open market",
      "Khrushchev's speech denouncing Stalin's crimes in 1956",
      "Gorbachev's perestroika, which loosened state control over parts of the economy",
    ],
    why: [
      "Correct. Like the Great Leap Forward, Stalin's plans pushed rapid industrialization, seized control of farming, and led to a famine in the early 1930s that killed millions.",
      "The New Economic Policy relaxed state control over farming, the opposite of the Great Leap Forward.",
      "Khrushchev's speech criticized Stalin's methods. It was not a campaign to remake the economy.",
      "Perestroika reduced central planning, the opposite of the mass campaigns in the passage.",
    ],
    answer: 0 },

  { id: "u8-m12", skill: "u8", type: "mcq", set: "u8-s3", topic: "8.4", reasoning: "Continuity and Change",
    question: "Which of the following later developments in China was the greatest change from the economic policies described in the passage?",
    choices: [
      "Deng Xiaoping's reforms after 1978, which let families farm their own plots and opened parts of China to foreign investment",
      "The Cultural Revolution of 1966 to 1976, in which Red Guards attacked people accused of opposing Mao",
      "The split between China and the Soviet Union in the early 1960s",
      "China's entry into the Korean War in 1950",
    ],
    why: [
      "Correct. Deng's reforms broke up collective farming and added market incentives, reversing the collectivization the passage describes.",
      "The Cultural Revolution continued Mao's mass campaigns rather than changing them, and it was mainly political, not a new economic policy.",
      "The Sino-Soviet split changed China's foreign relations, not its system of collective farms.",
      "Entering the Korean War was a military decision made before the collective farms and the Great Leap Forward.",
    ],
    answer: 0 },

  // ===== Multiple choice: Set 4, nuclear stockpile data =====
  { id: "u8-m13", skill: "u8", type: "mcq", set: "u8-s4", topic: "8.3", reasoning: "Causation",
    question: "Which of the following best explains the change in the United States stockpile from 1950 to 1965 shown in the table?",
    choices: [
      "The United States built up its nuclear forces to deter the Soviet Union as Cold War tensions grew.",
      "The United States dropped atomic bombs on Hiroshima and Nagasaki to end the war with Japan.",
      "The United States signed the Nuclear Non-Proliferation Treaty.",
      "The United States launched the Alliance for Progress with Latin American states.",
    ],
    why: [
      "Correct. The stockpile rose from 299 to 31,139 as the United States relied on nuclear weapons to deter Soviet attack in Europe and elsewhere.",
      "Hiroshima and Nagasaki were bombed in 1945, before the period in the table.",
      "The Non-Proliferation Treaty was signed in 1968 and aimed to stop the spread of weapons to new countries, not to build up the United States stockpile.",
      "The Alliance for Progress (1961) was a program of economic aid, not a weapons program.",
    ],
    answer: 0 },

  { id: "u8-m14", skill: "u8", type: "mcq", set: "u8-s4", topic: "8.3", reasoning: "Comparison",
    question: "Which of the following conclusions is best supported by the data in the table?",
    choices: [
      "The Soviet stockpile grew faster than the United States stockpile in the 1970s and was larger by 1980.",
      "The United States stockpile grew in every period shown in the table.",
      "The two stockpiles were about the same size in 1960.",
      "Both stockpiles were at their largest in 1990.",
    ],
    why: [
      "Correct. The Soviet stockpile rose from 11,736 in 1970 to 30,665 in 1980, while the United States stockpile fell from 26,008 to 24,104.",
      "The United States stockpile peaked in 1965 and was lower in 1970 and in most later years.",
      "In 1960 the United States had 18,638 warheads and the Soviet Union had 1,627.",
      "The United States peak came in 1965 and the Soviet peak shown came in 1985.",
    ],
    answer: 0 },

  { id: "u8-m15", skill: "u8", type: "mcq", set: "u8-s4", topic: "8.8", reasoning: "Causation",
    question: "The decline in both stockpiles from 1990 to 2000 is best explained by which of the following?",
    choices: [
      "The end of the Cold War, the breakup of the Soviet Union in 1991, and arms reduction treaties",
      "The Cuban Missile Crisis of 1962",
      "The Soviet invasion of Afghanistan in 1979",
      "The founding of the United Nations in 1945",
    ],
    why: [
      "Correct. With the Cold War over, treaties such as START I (1991) required deep cuts in nuclear weapons.",
      "The Cuban Missile Crisis came during the buildup shown in the 1960s, not the cuts of the 1990s.",
      "The invasion of Afghanistan raised tensions and came during the Soviet buildup of the late 1970s and 1980s.",
      "The United Nations was founded before the period in the table.",
    ],
    answer: 0 },

  { id: "u8-m16", skill: "u8", type: "mcq", set: "u8-s4", topic: "8.3", reasoning: "Continuity and Change",
    question: "The trend in both stockpiles from 1955 to 1985 is most closely connected to which of the following ideas?",
    choices: [
      "Mutually assured destruction, the belief that each side's power to destroy the other would prevent a direct war",
      "Containment through economic aid, the belief that poverty made countries open to communism",
      "Non-alignment, the refusal of some new states to join either Cold War bloc",
      "Self-determination, the right of peoples to choose their own government",
    ],
    why: [
      "Correct. Both superpowers built thousands of warheads so that a first strike would bring certain destruction in return, which kept them from fighting each other directly.",
      "Containment through economic aid shaped the Marshall Plan, not the growth of nuclear stockpiles.",
      "Non-alignment was a response to the superpower rivalry by other states, not the reason for the stockpiles.",
      "Self-determination was the principle behind decolonization, not the arms race.",
    ],
    answer: 0 },

  // ===== Multiple choice: Set 5, Kennedy inaugural =====
  { id: "u8-m17", skill: "u8", type: "mcq", set: "u8-s5", topic: "8.5", reasoning: "Causation",
    question: "Which of the following best describes the historical context of Kennedy's reference to \"new states\"?",
    choices: [
      "Many former colonies, especially in Africa, had recently won independence from European empires.",
      "The Soviet Union had broken apart into fifteen independent republics.",
      "The Ottoman and Austro-Hungarian empires had collapsed at the end of a world war.",
      "Spain's colonies in Latin America had recently won their independence.",
    ],
    why: [
      "Correct. In 1960 alone, 17 African states became independent, and many more Asian and African states had gained independence since 1945.",
      "The Soviet Union broke apart in 1991, thirty years after this speech.",
      "Those empires collapsed in 1918, more than forty years before this speech.",
      "Most of Latin America won independence from Spain in the early 19th century.",
    ],
    answer: 0 },

  { id: "u8-m18", skill: "u8", type: "mcq", set: "u8-s5", topic: "8.3", reasoning: "Causation",
    question: "Kennedy's warning that colonial control should not be \"replaced by a far more iron tyranny\" most directly expresses concern that",
    choices: [
      "newly independent states might come under Soviet or communist control",
      "European powers would try to retake their former colonies by force",
      "newly independent states would restore the rule of kings and emperors",
      "the United Nations would govern former colonies as trust territories",
    ],
    why: [
      "Correct. In Cold War terms, the \"iron tyranny\" is communist rule, and the image of riding the tiger warns new states against alliances with communist powers.",
      "Britain and France did use force in some places, as in the Suez Crisis, but Kennedy describes the danger as a new and harsher tyranny, not the old colonial one.",
      "Restoring monarchies was not a major Cold War concern, and nothing in the excerpt points to it.",
      "United Nations trusteeship was meant to prepare territories for independence, and Kennedy does not mention it.",
    ],
    answer: 0 },

  { id: "u8-m19", skill: "u8", type: "mcq", set: "u8-s5", topic: "8.6", reasoning: "Continuity and Change",
    question: "Kennedy's statement that the new states would not always support the views of the United States most directly anticipates which of the following?",
    choices: [
      "The choice of states such as India, Indonesia, and Egypt to join the Non-Aligned Movement instead of either Cold War bloc",
      "The formation of NATO by the United States, Canada, and Western European states",
      "The formation of the Warsaw Pact by the Soviet Union and Eastern European states",
      "The creation of the European Economic Community to lower trade barriers in Western Europe",
    ],
    why: [
      "Correct. Many new states refused to take sides in the Cold War, and the Non-Aligned Movement held its first summit in Belgrade in 1961.",
      "NATO was formed in 1949 by states already allied with the United States, not by newly independent states.",
      "The Warsaw Pact was formed in 1955 by states under Soviet control, not by new states choosing their own path.",
      "The European Economic Community was formed by established European states, not former colonies.",
    ],
    answer: 0 },

  { id: "u8-m20", skill: "u8", type: "mcq", set: "u8-s5", topic: "8.3", reasoning: "Causation",
    question: "The pledge in the second paragraph was most directly carried out through which of the following?",
    choices: [
      "Development programs such as the Peace Corps, which sent American volunteers to work in poorer countries beginning in 1961",
      "The Marshall Plan, which sent economic aid to rebuild Western Europe",
      "The Truman Doctrine's aid to Greece and Turkey",
      "The Berlin Airlift, which flew food and fuel into West Berlin",
    ],
    why: [
      "Correct. Kennedy created the Peace Corps weeks after this speech to help people in Asia, Africa, and Latin America, and his mention of \"the communists\" shows that the pledge was made in a Cold War setting.",
      "The Marshall Plan began in 1948 and aided industrial Europe, not \"huts and villages of half the globe.\"",
      "Aid to Greece and Turkey began in 1947, well before this speech.",
      "The Berlin Airlift (1948 to 1949) supplied one city during a Soviet blockade and came long before this speech.",
    ],
    answer: 0 },

  // ===== Multiple choice: Set 6, Reagan at the Brandenburg Gate =====
  { id: "u8-m21", skill: "u8", type: "mcq", set: "u8-s6", topic: "8.8", reasoning: "Causation",
    question: "The \"new policy of reform and openness\" mentioned in the excerpt refers to",
    choices: [
      "Mikhail Gorbachev's policies of glasnost and perestroika",
      "Nikita Khrushchev's campaign to criticize Stalin in the 1950s",
      "Deng Xiaoping's market reforms in China",
      "Vladimir Lenin's New Economic Policy",
    ],
    why: [
      "Correct. Gorbachev, Soviet leader from 1985, introduced glasnost (openness) and perestroika (restructuring), which led to the economic changes Reagan lists.",
      "Khrushchev's de-Stalinization came three decades earlier, and Reagan names Gorbachev as the leader in charge.",
      "Deng's reforms were in China, and Reagan is describing policies coming \"from Moscow.\"",
      "The New Economic Policy dates from the 1920s, not the 1980s.",
    ],
    answer: 0 },

  { id: "u8-m22", skill: "u8", type: "mcq", set: "u8-s6", topic: "8.8", reasoning: "Continuity and Change",
    question: "Which of the following developments most directly followed the speech in the excerpt?",
    choices: [
      "The opening of the Berlin Wall and the fall of communist governments across Eastern Europe",
      "The building of the Berlin Wall to stop East Germans from fleeing to the West",
      "The Berlin Airlift, which supplied West Berlin during a Soviet blockade",
      "The Soviet invasion of Czechoslovakia to crush the Prague Spring reforms",
    ],
    why: [
      "Correct. Two years after the speech, East Germany opened the wall, and communist governments in Poland, Hungary, Czechoslovakia, and elsewhere fell.",
      "The wall was built in 1961, so it came before the speech, not after it.",
      "The Berlin Airlift took place almost four decades before the speech.",
      "The invasion of Czechoslovakia came nearly two decades before the speech.",
    ],
    answer: 0 },

  { id: "u8-m23", skill: "u8", type: "mcq", set: "u8-s6", topic: "8.9", reasoning: "Causation",
    question: "Reagan's description of \"technological backwardness\" and food shortages in the communist world best supports which argument about the end of the Cold War?",
    choices: [
      "Economic weakness in the Soviet system helped bring about the collapse of Soviet power.",
      "Decolonization in Africa ended the Cold War by removing the superpowers' reasons to compete.",
      "The Non-Aligned Movement forced the superpowers to end the arms race.",
      "The Soviet Union collapsed because it lost a direct war with the United States.",
    ],
    why: [
      "Correct. A stagnant planned economy that could not match Western technology or feed its people pushed Gorbachev toward reforms that loosened Soviet control.",
      "Most African states had won independence by the mid-1970s, and superpower competition in Africa continued into the 1980s.",
      "Non-aligned states criticized the arms race but did not have the power to end it.",
      "The United States and the Soviet Union never fought a direct war, and the excerpt points to economic failure.",
    ],
    answer: 0 },

  { id: "u8-m24", skill: "u8", type: "mcq", set: "u8-s6", topic: "8.8", reasoning: "Comparison",
    question: "Reagan's main purpose in the final paragraph of the excerpt is to",
    choices: [
      "challenge the Soviet leader to prove that his reforms were real by removing the main symbol of a divided Europe",
      "announce that American troops would leave West Germany",
      "celebrate the reunification of East and West Germany",
      "warn West Germans that a Soviet invasion was about to begin",
    ],
    why: [
      "Correct. After describing Moscow's first reforms, Reagan calls on Gorbachev to tear down the Berlin Wall as a real sign of change.",
      "The excerpt says nothing about withdrawing troops.",
      "Germany reunified in 1990, three years after this speech.",
      "Reagan describes a Soviet Union that is starting to reform, not one about to attack.",
    ],
    answer: 0 },

  // ===== SAQ 1: practice passage on newly independent states =====
  { id: "u8-q1a", skill: "u8", type: "fr", set: "u8-s7", part: "SAQ 1", sub: "a", topic: "8.6",
    lead: "Use the passage below to answer all parts of the question that follows.",
    prompt: "Describe ONE argument the author makes about newly independent states after 1945.",
    earns: "The point goes to a response that accurately puts one of the passage's claims into its own words, with more than a quoted phrase.",
    yes: [
      "The author argues that borders drawn by colonial officials caused conflict in new states because they placed rival groups together or split communities apart.",
      "The author argues that new states inherited economies built to export raw materials, so many turned to state-led development to build industry.",
      "The author argues that independence ended colonial rule but not its economic and social effects.",
    ],
    no: [
      "\"The author talks about India.\" This names a topic, not an argument.",
      "\"The author argues that new states became rich quickly after independence.\" This is not what the passage says.",
      "\"Political independence did not end the economic and social effects of empire.\" A quotation with no description of its meaning does not earn the point.",
    ],
    example: "The author argues that colonial rule left new states with serious problems, such as borders that did not match where ethnic and religious groups lived, which led to violence like the killings during the partition of India.",
    notExample: "The passage is about decolonization." },

  { id: "u8-q1b", skill: "u8", type: "fr", set: "u8-s7", part: "SAQ 1", sub: "b", topic: "8.6",
    lead: "Use the passage below to answer all parts of the question that follows.",
    prompt: "Identify ONE piece of historical evidence, not mentioned in the passage, that would support the author's argument.",
    earns: "The point goes to a specific, accurate example from outside the passage that fits one of the author's claims.",
    yes: [
      "The Nigerian Civil War (1967 to 1970), when the Igbo region tried to break away as Biafra, showed the conflict that came from colonial borders joining rival groups.",
      "The 1947 to 1948 war between India and Pakistan over Kashmir grew out of partition.",
      "Ghana under Kwame Nkrumah used the state to build the Akosombo Dam on the Volta River to power an aluminum smelter and reduce dependence on cocoa exports.",
    ],
    no: [
      "\"The partition of India.\" This is already in the passage.",
      "\"The Marshall Plan.\" It concerned Western Europe and does not support an argument about former colonies.",
      "\"Some countries had problems.\" This is too vague to be evidence.",
    ],
    example: "In Nigeria, British rule had joined Hausa, Yoruba, and Igbo regions into one colony, and in 1967 the Igbo-led east tried to secede as Biafra, starting a civil war.",
    notExample: "Egypt nationalized the Suez Canal." },

  { id: "u8-q1c", skill: "u8", type: "fr", set: "u8-s7", part: "SAQ 1", sub: "c", topic: "8.6",
    lead: "Use the passage below to answer all parts of the question that follows.",
    prompt: "Explain how ONE development in the period 1945 to 1990 could be used to challenge the author's argument.",
    earns: "The point goes to an accurate development and an explanation of how it shows that a former colony overcame, or was not shaped by, the colonial legacy the author describes.",
    yes: [
      "South Korea and Singapore, both former colonies, grew rapidly by exporting manufactured goods, which shows that some new states moved beyond economies built on raw materials.",
      "Some conflicts in new states came from Cold War interference rather than colonial borders, such as superpower support for rival sides in Angola after 1975.",
      "India remained a functioning democracy with regular elections after 1947, which shows that some new states built stable governments despite the violence of partition.",
    ],
    no: [
      "\"Some countries were not colonies.\" This does not name a development or explain how it challenges the argument.",
      "\"Singapore became rich.\" This names an example but does not explain why it challenges the argument.",
      "\"The Nigerian Civil War.\" This supports the argument instead of challenging it.",
    ],
    example: "South Korea, a former Japanese colony, became an industrial exporter of ships, steel, and electronics by the 1980s. This challenges the argument because it shows that a colonial economy built around supplying raw materials did not have to hold a new state back.",
    notExample: "Many countries became independent after 1945." },

  // ===== SAQ 2: Comprehensive Anti-Apartheid Act =====
  { id: "u8-q2a", skill: "u8", type: "fr", set: "u8-s8", part: "SAQ 2", sub: "a", topic: "8.7",
    lead: "Use the source below to answer all parts of the question that follows.",
    prompt: "Identify ONE historical development that led to the passage of the act.",
    earns: "The point goes to a specific, accurate development before 1986 that helped lead to the act.",
    yes: [
      "The Soweto uprising of 1976, when police killed student protesters, turned world opinion against apartheid.",
      "Protests inside South Africa in the 1980s led the government to declare a state of emergency, which the act asks it to repeal.",
      "Campaigns on American college campuses and in cities pushed companies and governments to divest from South Africa.",
    ],
    no: [
      "\"Nelson Mandela was released.\" This happened in 1990, after the act.",
      "\"Apartheid was bad.\" This does not identify a development.",
      "\"The end of the Cold War.\" The Cold War had not ended in 1986.",
    ],
    example: "In 1976 police in Soweto shot students protesting against apartheid schooling, and the killings led to protests and calls for sanctions around the world.",
    notExample: "South Africa had laws about race." },

  { id: "u8-q2b", skill: "u8", type: "fr", set: "u8-s8", part: "SAQ 2", sub: "b", topic: "8.7",
    lead: "Use the source below to answer all parts of the question that follows.",
    prompt: "Describe ONE way the act reflects global resistance to established power structures in the period after 1945.",
    earns: "The point goes to a description that ties the act to the wider international movement against apartheid or against systems of racial rule.",
    yes: [
      "The act joined the United States to an international campaign of sanctions against South Africa that the United Nations and many other governments had already supported.",
      "The act demands the release of political prisoners like Nelson Mandela, which shows outside governments backing the African National Congress's struggle against white minority rule.",
      "The act calls for a \"nonracial, democratic\" government, which reflects the worldwide rejection of racial hierarchy that also drove decolonization and the American civil rights movement.",
    ],
    no: [
      "\"The act is about South Africa.\" This does not describe resistance.",
      "\"The act ended apartheid.\" Apartheid ended through negotiations in the early 1990s, and the act did not end it on its own.",
      "\"The act shows the United States wanted to colonize South Africa.\" This is not accurate.",
    ],
    example: "The act reflects global resistance because it uses economic pressure from a powerful outside country to push the South African government to free Nelson Mandela and end apartheid laws, joining protests by South Africans and sanctions by other nations.",
    notExample: "The act was passed by Congress." },

  { id: "u8-q2c", skill: "u8", type: "fr", set: "u8-s8", part: "SAQ 2", sub: "c", topic: "8.7",
    lead: "Use the source below to answer all parts of the question that follows.",
    prompt: "Explain ONE similarity or ONE difference between the anti-apartheid movement in South Africa and another movement that resisted established power structures in the period 1900 to 1990.",
    earns: "The point goes to a named movement outside South Africa and an explanation of how its goals or methods were like or unlike the anti-apartheid movement.",
    yes: [
      "Similarity: The American civil rights movement and the anti-apartheid movement both used boycotts, marches, and mass protest to end laws that separated people by race.",
      "Difference: Gandhi's campaign in India stayed committed to nonviolence, while the African National Congress formed an armed wing in 1961 after the government banned the ANC in 1960.",
      "Similarity: Like the anti-apartheid movement, Solidarity in Poland used strikes and outside support to pressure a one-party government into negotiations in the 1980s.",
    ],
    no: [
      "\"Both movements were against the government.\" This is too general to explain a similarity.",
      "\"Martin Luther King Jr. gave speeches.\" This names a person but does not compare the movements.",
      "\"The anti-apartheid movement was in South Africa.\" This does not compare it to another movement.",
    ],
    example: "Both the civil rights movement in the United States and the anti-apartheid movement fought laws that kept races apart, and both used boycotts and mass marches, such as the Montgomery bus boycott and the protests against pass laws in South Africa.",
    notExample: "Many people around the world protested." },

  // ===== SAQ 3: no source =====
  { id: "u8-q3a", skill: "u8", type: "fr", part: "SAQ 3", sub: "a", topic: "8.3",
    lead: "Answer all parts of the question that follows.",
    prompt: "Identify ONE way the Cold War affected a region outside Europe in the period 1945 to 1991.",
    earns: "The point goes to a specific, accurate effect of superpower rivalry in Asia, Africa, Latin America, or the Middle East.",
    yes: [
      "Korea was divided at the 38th parallel, and the Korean War (1950 to 1953) left it split into a communist North and a United States-allied South.",
      "The Cuban Missile Crisis of 1962 brought the superpowers close to nuclear war over Soviet missiles in Cuba.",
      "The United States and the Soviet Union backed rival sides in the Angolan civil war after 1975.",
    ],
    no: [
      "\"The Berlin Wall was built.\" Berlin is in Europe.",
      "\"There were many wars.\" This does not name a region or a specific effect.",
      "\"The United States and the Soviet Union fought each other in Vietnam.\" The superpowers never fought each other directly.",
    ],
    example: "In Vietnam, the United States sent hundreds of thousands of troops to support South Vietnam against the communist North, which the Soviet Union and China supplied with weapons.",
    notExample: "The Cold War caused problems around the world." },

  { id: "u8-q3b", skill: "u8", type: "fr", part: "SAQ 3", sub: "b", topic: "8.3",
    lead: "Answer all parts of the question that follows.",
    prompt: "Describe ONE way a state attempted to stay independent of both superpowers during the Cold War.",
    earns: "The point goes to a named state and an accurate description of how it avoided joining either bloc.",
    yes: [
      "India under Jawaharlal Nehru helped lead the Non-Aligned Movement and accepted aid from both the United States and the Soviet Union without joining either alliance.",
      "Egypt under Gamal Abdel Nasser attended the Bandung Conference in 1955 and played the superpowers against each other for aid, such as Soviet help with the Aswan High Dam.",
      "Yugoslavia under Josip Broz Tito broke with Stalin in 1948 and stayed communist without joining the Warsaw Pact.",
    ],
    no: [
      "\"India was neutral.\" This names a state but does not describe how it stayed independent.",
      "\"Poland joined the Warsaw Pact.\" This is the opposite of staying independent.",
      "\"Many countries were non-aligned.\" This does not name a state or describe a method.",
    ],
    example: "Indonesia under Sukarno hosted the Bandung Conference of Asian and African states in 1955, where leaders called for cooperation among new nations and rejected pressure to join either Cold War bloc.",
    notExample: "Some countries did not like the United States or the Soviet Union." },

  { id: "u8-q3c", skill: "u8", type: "fr", part: "SAQ 3", sub: "c", topic: "8.9",
    lead: "Answer all parts of the question that follows.",
    prompt: "Explain ONE reason the United States and the Soviet Union fought proxy wars instead of fighting each other directly.",
    earns: "The point goes to an accurate reason and an explanation of how it led the superpowers to compete through other states' wars.",
    yes: [
      "Both sides had nuclear weapons, so a direct war risked destroying both countries, and supporting allies in local wars let them compete without that risk.",
      "Decolonization created many new states with civil wars and weak governments, which gave each superpower chances to back a friendly side cheaply.",
      "Each side's leaders believed that losing one country to the other bloc would lead to more losses, as in the domino theory, so they intervened in places like Vietnam and Afghanistan.",
    ],
    no: [
      "\"They did not want to fight.\" This does not explain why.",
      "\"Because of the Cold War.\" This restates the question.",
      "\"The United Nations banned direct war.\" This is not accurate as a reason.",
    ],
    example: "By the 1960s both superpowers had thousands of nuclear warheads, so a direct war could have destroyed them both. Instead they armed and advised allies, such as the Soviet Union supplying North Vietnam and the United States arming rebels in Afghanistan, which let them fight for influence while avoiding nuclear war.",
    notExample: "They fought proxy wars because they were enemies." },

  // ===== LEQ 1 =====
  { id: "u8-leq1", skill: "u8", type: "essay", kind: "leq", topic: "8.5", reasoning: "Comparison",
    prompt: "In the period c. 1900 to c. 1975, colonized peoples in Asia and Africa used a range of methods to win independence from European empires. Develop an argument that evaluates the extent to which the methods used to end colonial rule in South Asia were similar to the methods used to end colonial rule in Africa.",
    rows: [
      { name: "Thesis/Claim", max: 1, levels: [
        "0 points: restates the prompt, gives no claim, or makes a claim that is not historically defensible, such as \"all colonies won independence through war.\"",
        "1 point: makes a historically defensible claim about how similar the methods were that sets up a line of reasoning, for example that both regions used mass political organizing but that settler colonies in Africa saw far more armed struggle than South Asia.",
      ] },
      { name: "Contextualization", max: 1, levels: [
        "0 points: gives no context, or only a phrase such as \"after World War II.\"",
        "1 point: describes a broader context relevant to the prompt, for example how the two world wars drained European empires, spread ideas of self-determination through the Atlantic Charter and the United Nations, and set the stage for the Cold War pressures that shaped independence.",
      ] },
      { name: "Evidence", max: 2, levels: [
        "0 points: gives no specific evidence relevant to the methods of independence movements.",
        "1 point: names at least two specific examples relevant to the topic, such as the Salt March and the Mau Mau uprising.",
        "2 points: uses specific and relevant examples from both regions to support an argument about similarity and difference.",
      ] },
      { name: "Analysis and Reasoning", max: 2, levels: [
        "0 points: describes events in each region without comparing them.",
        "1 point: uses comparison to frame the argument, explaining at least one similarity or difference between methods in South Asia and in Africa.",
        "2 points: shows a complex understanding, for example by explaining both similarities and differences, by explaining why methods differed (settler populations in Kenya and Algeria versus few British settlers in India), or by showing that South Asian movements themselves used both negotiation and violence.",
      ] },
    ],
    evidence: [
      "The Indian National Congress, founded in 1885, became a mass movement under Mohandas Gandhi after the First World War.",
      "Gandhi's satyagraha (nonviolent resistance) campaigns included the Salt March of 1930 and the boycott of British cloth.",
      "The Quit India movement of 1942 demanded immediate British withdrawal during the Second World War.",
      "Britain negotiated independence with the Congress and the Muslim League, leading to partition into India and Pakistan in 1947.",
      "Kwame Nkrumah's Convention People's Party in the Gold Coast used strikes and boycotts (\"Positive Action\") and won elections, and Ghana became independent in 1957.",
      "Nkrumah drew on Gandhi's example of nonviolent mass protest.",
      "In Kenya, the Mau Mau uprising (1952 to 1960) fought British rule and white settler control of land, and Kenya became independent in 1963.",
      "In Algeria, the National Liberation Front (FLN) fought a war against France from 1954 to 1962.",
      "Angola and Mozambique won independence from Portugal in 1975 after long armed struggles.",
      "Many French colonies in West Africa gained independence through negotiation in 1960.",
      "Partition in 1947 brought mass migration and communal violence, showing that a mostly negotiated transfer of power was not peaceful everywhere.",
    ],
    model: "Thesis: Independence movements in South Asia and in much of Africa both relied on mass political parties, boycotts, and negotiation with weakened European powers, but armed struggle played a much larger role in Africa where large settler populations or a determined colonial power refused to leave. Outline: (1) Context: the world wars weakened Britain and France, and the Atlantic Charter and United Nations Charter spread the language of self-determination. (2) Similarity: the Indian National Congress under Gandhi and Ghana's Convention People's Party under Nkrumah both organized mass nonviolent protest, and both won independence through negotiation (1947 and 1957). (3) Difference: in Kenya, Algeria, Angola, and Mozambique, settlers or a determined colonial government led nationalists to armed revolt, such as Mau Mau and the FLN's war against France. (4) Complexity: even in South Asia the transfer of power was followed by partition violence, and in Africa many French colonies became independent peacefully in 1960, so the line between methods did not fall neatly along regional lines.",
  },

  // ===== LEQ 2 =====
  { id: "u8-leq2", skill: "u8", type: "essay", kind: "leq", topic: "8.8", reasoning: "Causation",
    prompt: "In the period 1980 to 1991, the Cold War came to an end with the collapse of communist governments in Eastern Europe and the breakup of the Soviet Union. Develop an argument that evaluates the extent to which problems inside the Soviet Union caused the end of the Cold War.",
    rows: [
      { name: "Thesis/Claim", max: 1, levels: [
        "0 points: restates the prompt, gives no claim, or makes a claim that is not historically defensible, such as \"the Soviet Union lost a war to the United States.\"",
        "1 point: makes a historically defensible claim about how much internal Soviet problems mattered compared with other causes, for example that economic stagnation forced Gorbachev's reforms, which then let Eastern European and Soviet nationalist movements break the system apart.",
      ] },
      { name: "Contextualization", max: 1, levels: [
        "0 points: gives no context, or only a phrase such as \"during the Cold War.\"",
        "1 point: describes a broader context relevant to the prompt, for example the decades of superpower rivalry after 1945, the arms race, and the costly Soviet commitments in Eastern Europe and Afghanistan.",
      ] },
      { name: "Evidence", max: 2, levels: [
        "0 points: gives no specific evidence relevant to the end of the Cold War.",
        "1 point: names at least two specific examples relevant to the topic, such as perestroika and the fall of the Berlin Wall.",
        "2 points: uses specific and relevant examples to support an argument about the causes of the end of the Cold War.",
      ] },
      { name: "Analysis and Reasoning", max: 2, levels: [
        "0 points: lists events without explaining how they caused the end of the Cold War.",
        "1 point: uses causation to frame the argument, explaining how at least one internal Soviet problem helped end the Cold War.",
        "2 points: shows a complex understanding, for example by weighing internal problems against outside causes such as United States pressure and Eastern European protest, or by explaining how reforms meant to save the Soviet system sped up its collapse.",
      ] },
    ],
    evidence: [
      "The Soviet planned economy stagnated in the 1970s and 1980s, with shortages of food and consumer goods.",
      "World oil prices fell sharply in the mid-1980s, cutting Soviet export income.",
      "The Soviet war in Afghanistan (1979 to 1989) cost lives and money and hurt morale.",
      "The Chernobyl nuclear disaster of 1986 exposed government secrecy and weakness.",
      "Mikhail Gorbachev became Soviet leader in 1985 and introduced glasnost (openness) and perestroika (restructuring).",
      "Gorbachev and Reagan signed the Intermediate-Range Nuclear Forces Treaty in 1987.",
      "Ronald Reagan increased United States military spending and proposed the Strategic Defense Initiative in 1983.",
      "The Solidarity trade union in Poland, founded in 1980, challenged communist rule and won elections in 1989.",
      "The Berlin Wall opened on November 9, 1989, and communist governments across Eastern Europe fell that year.",
      "Nationalist movements in the Baltic republics and elsewhere demanded independence from the Soviet Union.",
      "A failed coup by hard-line communists in August 1991 weakened Gorbachev, and the Soviet Union dissolved in December 1991.",
    ],
    model: "Thesis: Problems inside the Soviet Union, above all a failing economy, were the main cause of the end of the Cold War because they pushed Gorbachev into reforms that weakened Soviet control, but outside pressure from the United States and protest movements in Eastern Europe turned those reforms into collapse. Outline: (1) Context: after 1945 the superpowers competed in an arms race and proxy wars that strained both economies. (2) Internal causes: stagnation, falling oil income, the war in Afghanistan, and Chernobyl led Gorbachev to adopt glasnost and perestroika after 1985. (3) Effects of reform: glasnost allowed open criticism, and Gorbachev's refusal to use force in Eastern Europe let Solidarity and other movements end communist rule in 1989. (4) Outside causes and complexity: Reagan's military buildup raised the cost of competition, but the Soviet Union broke apart only after nationalist movements in its own republics and the failed August 1991 coup, showing that internal and external causes worked together.",
  },

  // ===== DBQ =====
  { id: "u8-dbq1", skill: "u8", type: "essay", kind: "dbq", set: "u8-dbq", topic: "8.5", reasoning: "Causation",
    prompt: "Evaluate the extent to which the Cold War shaped the process of decolonization in Asia and Africa in the period 1941 to 1975.",
    rows: [
      { name: "Thesis/Claim", max: 1, levels: [
        "0 points: restates the prompt, gives no claim, or makes a claim that is not historically defensible, such as \"decolonization had nothing to do with world politics.\"",
        "1 point: makes a historically defensible claim about how much the Cold War shaped decolonization that sets up a line of reasoning, for example that independence movements and the ideal of self-determination drove decolonization, while the Cold War shaped how the superpowers responded and turned some independence struggles into wars.",
      ] },
      { name: "Contextualization", max: 1, levels: [
        "0 points: gives no context, or only a phrase such as \"after World War II.\"",
        "1 point: describes a broader context relevant to the prompt, for example how the two world wars weakened Britain and France, how nationalist movements such as the Indian National Congress had been organizing since before 1941, or how the United States and the Soviet Union emerged as rival superpowers after 1945.",
      ] },
      { name: "Evidence", max: 3, levels: [
        "0 points: uses the content of fewer than three documents.",
        "1 point: accurately describes the content of at least three documents in a way that relates to the prompt.",
        "2 points: uses the content of at least four documents to support an argument about how much the Cold War shaped decolonization.",
        "3 points: uses at least four documents to support the argument and also uses at least one specific, relevant piece of evidence not found in the documents, such as the Bandung Conference or the Congo crisis.",
      ] },
      { name: "Analysis and Reasoning", max: 2, levels: [
        "0 points: does not explain the point of view, purpose, historical situation, or audience of any document, and does not show complex understanding.",
        "1 point: explains how or why the point of view, purpose, historical situation, or audience of at least two documents is relevant to the argument, for example that Eisenhower spoke while French forces were under siege at Dien Bien Phu, or that Resolution 1514 was adopted by a General Assembly newly filled with former colonies.",
        "2 points: does that for at least two documents and shows a complex understanding, for example by explaining both how the Cold War sped decolonization and how it delayed or distorted it, or by comparing how decolonization unfolded in places where the Cold War intervened (Vietnam) and places where it did not decide the outcome (most of French West Africa).",
      ] },
    ],
    docs: [
      "Document 1 (Atlantic Charter, 1941): Roosevelt and Churchill endorse the right of all peoples to choose their government before the Cold War began. Use it to argue that self-determination as a principle came out of the Second World War, not the Cold War. Sourcing: Churchill later said the third point applied to Nazi-occupied Europe, not the British Empire, so the authors' purpose was to rally support against the Axis.",
      "Document 2 (UN Charter, Article 73, 1945): colonial powers accept a \"sacred trust\" to develop self-government in their territories, but at a pace set by \"stages of advancement.\" Use it to show that the postwar international order pushed toward decolonization while letting colonizers control its timing. Sourcing: the Charter was written mostly by the victorious powers, including Britain and France.",
      "Document 3 (Eisenhower press conference, 1954): Eisenhower explains the domino theory, treating Indochina as a Cold War front. Use it to argue that the Cold War turned Vietnam's independence struggle into a contest between blocs. Sourcing: he spoke during the siege of Dien Bien Phu, when the United States was paying much of France's war costs, and his audience was the American public.",
      "Document 4 (Senator Kennedy on Algeria, 1957): Kennedy argues that supporting France's colonial war helps Soviet propaganda and that the United States must win over African nationalists. Use it to show that Cold War competition led some United States leaders to favor decolonization. Sourcing: as an ambitious senator criticizing the Eisenhower administration, Kennedy had political reasons to stake out a new position.",
      "Document 5 (UN Resolution 1514, 1960): the General Assembly declares colonialism a denial of human rights and rejects lack of \"preparedness\" as a reason to delay independence. Use it to show that newly independent states themselves pushed decolonization forward through the United Nations. Sourcing: the resolution was drafted by Asian and African states and adopted 89 to 0 with 9 abstentions, including the United States, Britain, and France.",
      "Document 6 (UN membership table): membership nearly tripled from 51 in 1945 to 144 in 1975, with the largest jump around 1960. Use it to show the speed and timing of decolonization, especially in Africa. The data show change but not causes, so pair it with other documents to argue about why it happened.",
      "Document 7 (Tonkin Gulf Resolution, 1964): Congress authorizes the President to use force in Southeast Asia, calling North Vietnam's government a \"Communist regime.\" Use it to argue that the Cold War turned the aftermath of French colonial rule in Vietnam into a major war. Sourcing: Congress passed it quickly after a disputed naval incident, and its purpose was to give President Johnson broad authority.",
    ],
    evidence: [
      "Indian independence and partition in 1947 came mainly from the Congress and Muslim League movements and British exhaustion after the war, before the Cold War was fully under way.",
      "Indonesia declared independence in 1945 and won it from the Netherlands in 1949, after United States pressure on the Dutch.",
      "At the Bandung Conference of 1955, 29 Asian and African states called for an end to colonialism and for cooperation outside the two blocs.",
      "The Non-Aligned Movement, founded in Belgrade in 1961, brought together states such as India, Egypt, Indonesia, and Ghana that refused to join either bloc.",
      "In the Suez Crisis of 1956, the United States and the Soviet Union both pressured Britain, France, and Israel to withdraw from Egypt.",
      "In the Congo crisis after independence from Belgium in 1960, the superpowers backed rival leaders, and Prime Minister Patrice Lumumba was removed from power in 1960 and killed in 1961.",
      "The Geneva Accords of 1954 ended French rule in Indochina and divided Vietnam at the 17th parallel.",
      "Ghana won independence through mass protest and elections in 1957 without becoming a Cold War battleground.",
      "Angola and Mozambique won independence from Portugal in 1975, and Angola's civil war soon drew in Cuban troops backed by the Soviet Union and rebels backed by the United States and South Africa.",
    ],
    model: "Thesis: The Cold War did not start decolonization, which grew out of nationalist movements and the weakening of Europe in the Second World War, but it shaped how decolonization unfolded by pushing the superpowers to compete for new states and by turning some independence struggles, above all in Vietnam, into wars. Outline: (1) Context: the world wars drained Britain and France, and movements such as the Indian National Congress had built mass support long before 1945. (2) Origins outside the Cold War: the Atlantic Charter (Doc 1) and the UN Charter (Doc 2) made self-determination an international principle, and Asian and African states drove Resolution 1514 (Doc 5), which the United States did not even vote for. India's independence in 1947 and Ghana's in 1957 are outside evidence. (3) The Cold War speeding decolonization: Kennedy (Doc 4) argued that backing colonial wars handed the Soviet Union a propaganda weapon, and the rapid growth in UN membership (Doc 6) shows how fast new states appeared as both superpowers courted them. (4) The Cold War distorting decolonization: Eisenhower's domino theory (Doc 3) and the Tonkin Gulf Resolution (Doc 7) show how the United States treated Vietnam as a Cold War front, turning an anticolonial war into a long superpower conflict, as also happened in the Congo and Angola. (5) Complexity: the Cold War both helped and hurt independence movements, since superpower rivalry pressed Europe to leave while also drawing new states into proxy wars, which the Non-Aligned Movement tried to resist.",
  },
];
