// Unit 8: Cold War and Decolonization, c. 1900 to the present
import { maps } from "./maps.js";

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
    id: "u8-s2", name: "NSC 68 on a new distribution of power", intro: "Use the source below to answer the questions that follow.",
    sources: [
      { title: "Source", blocks: [
        { p: "Within the past thirty-five years the world has experienced two global wars of tremendous violence. It has witnessed two revolutions—the Russian and the Chinese—of extreme scope and intensity. It has also seen the collapse of five empires—the Ottoman, the Austro-Hungarian, German, Italian and Japanese—and the drastic decline of two major imperial systems, the British and the French. During the span of one generation, the international distribution of power has been fundamentally altered. ..." },
        { p: "Two complex sets of factors have now basically altered this historical distribution of power. First, the defeat of Germany and Japan and the decline of the British and French Empires have interacted with the development of the United States and the Soviet Union in such a way that power has increasingly gravitated to these two centers. Second, the Soviet Union, unlike previous aspirants to hegemony, is animated by a new fanatic faith, antithetical to our own, and seeks to impose its absolute authority over the rest of the world. Conflict has, therefore, become endemic and is waged, on the part of the Soviet Union, by violent or non-violent methods in accordance with the dictates of expediency. With the development of increasingly terrifying weapons of mass destruction, every individual faces the ever-present possibility of annihilation should the conflict enter the phase of total war." },
        { cite: "United States National Security Council, NSC 68, \"United States Objectives and Programs for National Security,\" a secret report prepared by State and Defense Department officials at the request of President Harry S. Truman, Washington, April 14, 1950 (declassified in 1975), Section I, \"Background of the Present Crisis.\" Foreign Relations of the United States, 1950, Volume I, Document 85. Office of the Historian, United States Department of State.", url: "https://history.state.gov/historicaldocuments/frus1950v01/d85", kind: "primary" },
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

  "u8-s9": {
    id: "u8-s9", name: "The United Nations plan for Palestine", intro: "Use the source below to answer the questions that follow.",
    sources: [
      { title: "Source", blocks: [
        { p: "The General Assembly, ..." },
        { p: "Considers that the present situation in Palestine is one which is likely to impair the general welfare and friendly relations among nations;" },
        { p: "... Recommends to the United Kingdom, as the mandatory Power for Palestine, and to all other Members of the United Nations the adoption and implementation, with regard to the future Government of Palestine, of the Plan of Partition with Economic Union set out below; ..." },
        { p: "The Mandate for Palestine shall terminate as soon as possible but in any case not later than 1 August 1948. ..." },
        { p: "Independent Arab and Jewish States and the Special International Regime for the City of Jerusalem, set forth in Part III of this Plan, shall come into existence in Palestine two months after the evacuation of the armed forces of the mandatory Power has been completed but in any case not later than 1 October 1948. ..." },
        { p: "No discrimination of any kind shall be made between the inhabitants on the ground of race, religion, language or sex." },
        { cite: "United Nations General Assembly, Resolution 181 (II), Future Government of Palestine, adopted November 29, 1947 (the preamble and Part I of the Plan of Partition with Economic Union). The Avalon Project, Yale Law School.", url: "https://avalon.law.yale.edu/20th_century/res181.asp", kind: "primary" },
      ] },
    ],
  },

  "u8-s10": {
    id: "u8-s10", name: "Eisenhower on the Suez Crisis", intro: "Use the source below to answer the questions that follow.",
    sources: [
      { title: "Source", blocks: [
        { p: "These matters came to a crisis on July 26th of this year, when the Egyptian Government seized the Universal Suez Canal Company. For ninety years--ever since the inauguration of the Canal--that Company has operated the Canal, largely under British and French technical supervision." },
        { p: "Now there were some among our allies who urged an immediate reaction to this event by use of force. We insistently urged otherwise, and our wish prevailed--through a long succession of conferences and negotiations for weeks--even months--with participation by the United Nations. ..." },
        { p: "... And on Tuesday, the British and French Governments delivered a 12-hour ultimatum to Israel and Egypt--now followed up by armed attack against Egypt." },
        { p: "The United States was not consulted in any way about any phase of these actions. Nor were we informed of them in advance." },
        { p: "As it is the manifest right of any of these nations to take such decisions and actions, it is likewise our right--if our judgment so dictates--to dissent. We believe these actions to have been taken in error. For we do not accept the use of force as a wise or proper instrument for the settlement of international disputes." },
        { cite: "Dwight D. Eisenhower, President of the United States, Radio and Television Report to the American People on the Developments in Eastern Europe and the Middle East, October 31, 1956. The American Presidency Project, University of California, Santa Barbara.", url: "https://www.presidency.ucsb.edu/documents/radio-and-television-report-the-american-people-the-developments-eastern-europe-and-the", kind: "primary" },
      ] },
    ],
  },

  "u8-s11": {
    id: "u8-s11", name: "The Indian Independence Act", intro: "Use the source below to answer the questions that follow.",
    sources: [
      { title: "Source", blocks: [
        { p: "An Act to make provision for the setting up in India of two independent Dominions, ..." },
        { p: "[Section 1] (1) As from the fifteenth day of August, nineteen hundred and forty-seven, two independent Dominions shall be set up in India, to be known respectively as India and Pakistan. ..." },
        { p: "[Section 2] (2) ... the territories of Pakistan shall be—" },
        { p: "(a) the territories which, on the appointed day, are included in the Provinces of East Bengal and West Punjab, as constituted under the two following sections ;" },
        { p: "(b) the territories which, at the date of the passing of this Act, are included in the Province of Sind and the Chief Commissioner's Province of British Baluchistan ; ..." },
        { p: "[Section 3] (1) As from the appointed day— (a) the Province of Bengal, as constituted under the ... Government of India Act, 1935, shall cease to exist; and (b) there shall be constituted in lieu thereof two new Provinces, to be known respectively as East Bengal and West Bengal. ..." },
        { p: "[Section 7] (1) As from the appointed day— ... (b) the suzerainty of His Majesty over the Indian States lapses, ..." },
        { cite: "Parliament of the United Kingdom, Indian Independence Act 1947 (10 & 11 Geo. 6, c. 30), enacted July 18, 1947, text as originally enacted. legislation.gov.uk, The National Archives (United Kingdom). The \"Indian States\" were the princely states, such as Hyderabad and Kashmir, ruled by Indian princes under British overlordship.", url: "https://www.legislation.gov.uk/ukpga/Geo6/10-11/30/enacted", kind: "primary" },
      ] },
    ],
  },

  "u8-s12": {
    id: "u8-s12", name: "United States policy toward Africa, 1957", intro: "Use the source below to answer the questions that follow.",
    sources: [
      { title: "Source", blocks: [
        { p: "There is a growing awareness in the world that Africa is emerging as an area which will have an increasingly important influence on the course of world events and that the political alignment of the present and future independent nations of the continent will be deeply affected by the policies which Western nations, including the United States, pursue in the future." },
        { p: "The United States is concerned that Africa South of the Sahara develop in an orderly manner towards self-government and independence in cooperation with the European powers now in control of large areas of the continent. ... Europe in turn needs the African market, as well as Africa’s minerals and agricultural products. ..." },
        { p: "We wish to avoid in Africa a situation where thwarted nationalist and self-determinist aspirations are turned to the advantage of extremist elements, particularly Communists. ..." },
        { p: "... we are attempting to bring our influence to bear through:" },
        { p: "a. Welcoming and extending political support to new states, such as Ghana, as they emerge." },
        { cite: "United States National Security Council, NSC 5719/1, \"U.S. Policy Toward Africa South of the Sahara Prior to Calendar Year 1960,\" note by the Executive Secretary to the National Security Council, Washington, August 23, 1957, paragraphs 2, 3, 4, and 10. Foreign Relations of the United States, 1955-1957, Volume XVIII, Africa, Document 24. Office of the Historian, United States Department of State.", url: "https://history.state.gov/historicaldocuments/frus1955-57v18/d24", kind: "primary" },
      ] },
    ],
  },

  "u8-s13": {
    id: "u8-s13", name: "Carter on Afghanistan and the Persian Gulf", intro: "Use the source below to answer the questions that follow.",
    sources: [
      { title: "Source", blocks: [
        { p: "But now the Soviet Union has taken a radical and an aggressive new step. It's using its great military power against a relatively defenseless nation. The implications of the Soviet invasion of Afghanistan could pose the most serious threat to the peace since the Second World War." },
        { p: "... I've cut Soviet access to high-technology equipment and to agricultural products. ... And I have notified the Olympic Committee that with Soviet invading forces in Afghanistan, neither the American people nor I will support sending an Olympic team to Moscow." },
        { p: "The region which is now threatened by Soviet troops in Afghanistan is of great strategic importance: It contains more than two-thirds of the world's exportable oil. ... The Soviet Union is now attempting to consolidate a strategic position, therefore, that poses a grave threat to the free movement of Middle East oil." },
        { p: "Let our position be absolutely clear: An attempt by any outside force to gain control of the Persian Gulf region will be regarded as an assault on the vital interests of the United States of America, and such an assault will be repelled by any means necessary, including military force." },
        { cite: "Jimmy Carter, President of the United States, The State of the Union Address Delivered Before a Joint Session of the Congress, January 23, 1980. The American Presidency Project, University of California, Santa Barbara.", url: "https://www.presidency.ucsb.edu/documents/the-state-the-union-address-delivered-before-joint-session-the-congress", kind: "primary" },
      ] },
    ],
  },

  "u8-s14": {
    id: "u8-s14", name: "The Limited Test Ban Treaty", intro: "Use the source below to answer the questions that follow.",
    sources: [
      { title: "Source", blocks: [
        { p: "The Governments of the United States of America, the United Kingdom of Great Britain and Northern Ireland, and the Union of Soviet Socialist Republics, hereinafter referred to as the \"Original Parties\"," },
        { p: "Proclaiming as their principal aim the speediest possible achievement of an agreement on general and complete disarmament under strict international control in accordance with the objectives of the United Nations which would put an end to the armaments race and eliminate the incentive to the production and testing of all kinds of weapons, including nuclear weapons," },
        { p: "Seeking to achieve the discontinuance of all test explosions of nuclear weapons for all time, determined to continue negotiations to this end, and desiring to put an end to the contamination of man's environment by radioactive substances, ..." },
        { p: "1. Each of the Parties to this Treaty undertakes to prohibit, to prevent, and not to carry out any nuclear weapon test explosion, or any other nuclear explosion, at any place under its jurisdiction or control:" },
        { p: "(a) in the atmosphere; beyond its limits, including outer space; or under water, including territorial waters or high seas; ..." },
        { cite: "Treaty Banning Nuclear Weapon Tests in the Atmosphere, in Outer Space and Under Water (the Limited Test Ban Treaty), signed at Moscow by the United States, the United Kingdom, and the Soviet Union, August 5, 1963, preamble and Article I. The Avalon Project, Yale Law School.", url: "https://avalon.law.yale.edu/20th_century/usmu015.asp", kind: "primary" },
      ] },
    ],
  },

  "u8-s15": {
    id: "u8-s15", name: "Land reform and revolution", intro: "Use the map below to answer the questions that follow.", label: "Map",
    sources: [
      { title: "Map", blocks: [
        { svg: maps["u8r-land-reform"], caption: "Land reform in four countries, 1953 to 1975, with the government that carried it out" },
        { cite: "Map drawn for this review from Natural Earth land outlines (public domain). Places, dates, and governments checked against Encyclopaedia Britannica's entries \"Cuban Revolution,\" \"White Revolution,\" \"Derg,\" and \"Vietnam,\" and against Edwin E. Moise, Land Reform in China and North Vietnam (1983), and Ervand Abrahamian, A History of Modern Iran (2008).", kind: "map" },
      ] },
    ],
  },

  "u8-s16": {
    id: "u8-s16", name: "Military rule and armed revolt in South America", intro: "Use the passage below to answer the questions that follow.",
    sources: [
      { title: "Source", blocks: [
        { p: "During the Cold War, fear of revolution led military officers in several South American countries to seize power. In Chile, the armed forces overthrew the elected socialist president Salvador Allende in 1973. General Augusto Pinochet's government created a secret police agency, DINA, that arrested, tortured, and killed opponents, and more than 3,000 people were killed or disappeared under his rule. Argentina's military government waged a \"Dirty War\" from 1976 to 1983 in which somewhere between about 10,000 and 30,000 people were killed or disappeared. These regimes worked together in Operation Condor, sharing intelligence and hunting exiles across borders, and the United States often supported them as allies against communism. Armed groups on the left also used terror. In Peru, the Maoist Shining Path began a war in 1980 that attacked peasants, local leaders, and rival leftists as well as the state, and the conflict killed about 69,000 people by 2000." },
        { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" },
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
  { id: "u8-m01", skill: "u8", type: "mcq", set: "u8-s1", topic: "8.1", reasoning: "Causation", difficulty: "moderate",
    question: "Which of the following most directly led Truman to give the speech in the excerpt?",
    choices: [
      "Britain told the United States it could no longer afford to support Greece and Turkey.",
      "Churchill warned at Fulton, Missouri, that an iron curtain had descended across Europe.",
      "The Soviet Union tested its first atomic bomb, ending the American nuclear monopoly.",
      "The Soviet Union cut off road and rail access to the western sectors of Berlin.",
    ],
    why: [
      "Correct. In February 1947 Britain told the United States it could no longer pay for aid to Greece and Turkey, and three weeks later Truman asked Congress to take over that role.",
      "Churchill's speech of March 1946 shaped American views of the Soviet Union, but it came a year earlier. The immediate need Truman answered was Britain's withdrawal of aid to Greece and Turkey.",
      "The first Soviet atomic test came in 1949, two years after this speech.",
      "The Berlin blockade began in June 1948, more than a year after this speech.",
    ],
    answer: 0 },

  { id: "u8-m02", skill: "u8", type: "mcq", set: "u8-s1", topic: "8.2", reasoning: "Comparison", difficulty: "easy",
    question: "The two ways of life described in the excerpt most directly reflect which of the following?",
    choices: [
      "The rivalry between the American-led democratic bloc and the Soviet-led communist bloc",
      "The split between the Soviet Union and China over leadership of world communism",
      "The division between European colonial powers and the peoples they ruled in Asia and Africa",
      "The struggle between fascist dictatorships and Western democracies in the Second World War",
    ],
    why: [
      "Correct. Truman contrasts free elections and liberties with rule by a minority through terror, which is how United States leaders described Soviet communism at the start of the Cold War.",
      "The Sino-Soviet split developed around 1960, and the excerpt describes a contrast between democracy and dictatorship, not a quarrel between communist states.",
      "The excerpt does not describe colonial rule. Truman is contrasting two political systems, one based on the majority and one imposed by a minority.",
      "Truman's words echo wartime attacks on fascism, but the Axis was defeated by 1945. In 1947 he is describing a new postwar rivalry with the Soviet Union.",
    ],
    answer: 0 },

  { id: "u8-m03", skill: "u8", type: "mcq", set: "u8-s1", topic: "8.2", reasoning: "Causation", difficulty: "moderate",
    question: "The claims in the final two paragraphs of the excerpt most directly helped lead to which of the following?",
    choices: [
      "The Marshall Plan's economic aid to rebuild Western Europe",
      "The North Atlantic Treaty's pledge of collective military defense",
      "The Warsaw Pact's military alliance of Soviet bloc states",
      "The Non-Aligned Movement's refusal to join either Cold War bloc",
    ],
    why: [
      "Correct. Truman argues that \"misery and want\" breed totalitarianism and that aid should be economic, and the Marshall Plan (1948) applied that idea to Western Europe.",
      "NATO (1949) also grew out of containment, but it was a military alliance, while these paragraphs call for \"economic and financial aid\" against \"misery and want.\"",
      "The Non-Aligned Movement (1961) was formed by states such as India, Egypt, and Yugoslavia, not by the United States.",
      "The League of Nations was created after the First World War, decades before this speech.",
    ],
    answer: 0 },

  { id: "u8-m04", skill: "u8", type: "mcq", set: "u8-s1", topic: "8.3", reasoning: "Continuity and Change", difficulty: "easy",
    question: "Which of the following later developments best continued the policy stated in the third paragraph of the excerpt?",
    choices: [
      "American wars in Korea and Vietnam to keep communist forces from taking power",
      "The Soviet invasion of Czechoslovakia to end the Prague Spring reforms in 1968",
      "American détente and arms control talks with the Soviet Union in the 1970s",
      "The Non-Aligned Movement's pledge to stay out of both Cold War alliances",
    ],
    why: [
      "Correct. Supporting governments that resisted communist forces, as Truman proposed for Greece and Turkey, became the policy of containment that led the United States into wars in Korea and Vietnam.",
      "The Soviet invasion kept a communist government in power by force, the opposite of Truman's policy of supporting peoples who resist outside pressure.",
      "Détente eased tension with the Soviet Union through negotiation. It was a turn away from confrontation, not a continuation of Truman's pledge.",
      "Non-alignment was the policy of states such as India that refused to take sides, not of the United States.",
    ],
    answer: 0 },

  // ===== Multiple choice: Set 2, NSC 68 =====
  { id: "u8-m05", skill: "u8", type: "mcq", set: "u8-s2", topic: "8.1", reasoning: "Causation", difficulty: "moderate",
    question: "According to the second paragraph of the excerpt, which of the following most directly caused power to gravitate to the United States and the Soviet Union?",
    choices: [
      "The defeat of Germany and Japan and the decline of the British and French empires",
      "The collapse of the Ottoman and Austro-Hungarian empires at the end of the First World War",
      "The founding of the United Nations, which gave both countries a Security Council veto",
      "The Soviet Union's success in building a larger nuclear arsenal than the United States",
    ],
    why: [
      "Correct. The authors name the defeat of Germany and Japan and the decline of Britain and France, all results of the Second World War, as the first factor that left two centers of power.",
      "The first paragraph lists these empires among those that collapsed, but the second paragraph's explanation for the two centers of power points to the defeat of Germany and Japan and the decline of Britain and France.",
      "Both states did hold a veto from 1945, but the excerpt never mentions the United Nations.",
      "The Soviet Union had tested its first atomic bomb only in 1949, and its stockpile did not pass the American one until the late 1970s. The excerpt does not make this claim.",
    ],
    answer: 0 },

  { id: "u8-m06", skill: "u8", type: "mcq", set: "u8-s2", topic: "8.2", reasoning: "Sourcing and Situation", difficulty: "moderate",
    question: "The document was most likely written in order to",
    choices: [
      "persuade the President that a worldwide Soviet threat required a far larger American buildup",
      "explain to the American public, in newspapers and on radio, why troops had been sent to Korea",
      "propose that both superpowers place their atomic weapons under international control",
      "argue that American forces could leave Europe and Asia now that Germany and Japan were defeated",
    ],
    why: [
      "Correct. It was a secret report written for Truman, and its picture of a \"fanatic faith\" seeking \"absolute authority\" over the world built the case for a large, lasting buildup of American strength.",
      "The report was secret until 1975, so its audience was the President and his advisers, not the public. It was also completed in April 1950, before the Korean War began in June.",
      "The excerpt calls conflict with the Soviet Union \"endemic,\" which argues against expecting a deal to share control of atomic weapons.",
      "The authors stress danger from the Soviet Union, which points toward more American commitment abroad, not withdrawal.",
    ],
    answer: 0 },

  { id: "u8-m07", skill: "u8", type: "mcq", set: "u8-s2", topic: "8.3", reasoning: "Causation", difficulty: "difficult",
    question: "Which of the following most directly shaped the authors' concern about \"increasingly terrifying weapons of mass destruction\"?",
    choices: [
      "The first Soviet atomic test in 1949, which ended the American monopoly on nuclear weapons",
      "The American atomic bombings of Hiroshima and Nagasaki in 1945, which ended the war with Japan",
      "The Soviet placement of nuclear missiles in Cuba in 1962, which set off a crisis over the island",
      "The Soviet launch of Sputnik in 1957, which showed that it could build long-range rockets",
    ],
    why: [
      "Correct. The Soviet test in August 1949 meant that both sides now had atomic weapons, so a total war between them threatened \"annihilation\" for every individual.",
      "Hiroshima showed what atomic weapons could do, but in 1945 only the United States had them. The fear that every individual faced annihilation in a total war between the two powers came once the Soviet Union could strike back.",
      "The missiles in Cuba led to the crisis of 1962, twelve years after this report.",
      "Sputnik was launched in 1957, seven years after this report.",
    ],
    answer: 0 },

  { id: "u8-m08", skill: "u8", type: "mcq", set: "u8-s2", topic: "8.3", reasoning: "Continuity and Change", difficulty: "moderate",
    question: "Which of the following developments of the 1950s most directly continued the view of the conflict expressed in the second paragraph of the excerpt?",
    choices: [
      "Defense spending soared in the Korean War and stayed high as the United States formed SEATO.",
      "The United States cut its army to prewar size and brought most troops home from Europe and Asia.",
      "The United States and the Soviet Union signed the SALT I treaty limiting nuclear missiles.",
      "Newly independent India and Indonesia refused to join either of the Cold War alliances.",
    ],
    why: [
      "Correct. Treating Soviet hostility as permanent led to a lasting military buildup, which the Korean War sped up, and to new alliances such as SEATO (1954).",
      "This is the opposite of the excerpt's view. The United States kept large forces in Europe and Asia throughout the 1950s.",
      "SALT I was signed in 1972, during détente, and it rested on easing the conflict, not on calling it endemic.",
      "Non-alignment was a response of other states to the Cold War, not a continuation of the American view in the excerpt.",
    ],
    answer: 0 },
  // ===== Multiple choice: Set 3, practice passage on Chinese communism =====
  { id: "u8-m09", skill: "u8", type: "mcq", set: "u8-s3", topic: "8.4", reasoning: "Causation", difficulty: "easy",
    question: "Which of the following best states the argument of the passage?",
    choices: [
      "Communist parties won peasants with promises of land, then used force to remake rural life.",
      "Communist revolutions succeeded mainly in industrial societies with large working classes, as Marx predicted.",
      "The Chinese Communist Party won power mainly because Soviet troops occupied China in 1945.",
      "Land reform in China weakened the Communist Party by turning peasants against the government.",
    ],
    why: [
      "Correct. The passage traces peasant support for the party, then land reform, collectivization, and a deadly famine, and ends by saying communist states \"often used force.\"",
      "The passage says the opposite: communist parties usually came to power in mostly rural societies, not the industrial ones Marx expected.",
      "Soviet troops did enter Manchuria in 1945, but the passage credits peasant support and the war against Japan for the party's victory.",
      "The passage presents land reform as a policy that built support, not one that weakened the party.",
    ],
    answer: 0 },

  { id: "u8-m10", skill: "u8", type: "mcq", set: "u8-s3", topic: "8.4", reasoning: "Causation", difficulty: "easy",
    question: "Which of the following best explains why communist movements often gained support in rural and colonized societies in the 20th century?",
    choices: [
      "They promised to give land to poor farmers and to end foreign control.",
      "The Marshall Plan sent aid to these societies, which helped communist parties organize.",
      "Factory workers outnumbered peasants in most of these societies by the 1930s.",
      "Colonial governments encouraged communist parties to weaken traditional local elites.",
    ],
    why: [
      "Correct. In China, Vietnam, and elsewhere, communist parties combined land reform with resistance to foreign powers, as the passage shows with the war against Japan.",
      "The Marshall Plan aided Western Europe and was designed to weaken communist parties, not help them.",
      "These societies were mostly rural, which is the point of the passage's first sentence.",
      "Colonial governments usually banned or jailed communists, seeing them as a threat to colonial rule.",
    ],
    answer: 0 },

  { id: "u8-m11", skill: "u8", type: "mcq", set: "u8-s3", topic: "8.4", reasoning: "Comparison", difficulty: "difficult",
    question: "Which of the following developments in the Soviet Union was most similar to the Great Leap Forward described in the passage?",
    choices: [
      "Stalin's Five-Year Plans and forced collectivization, which caused famine in Ukraine",
      "Lenin's New Economic Policy, which let peasants sell part of their harvest on the open market",
      "Khrushchev's Virgin Lands campaign to plow new farmland in Kazakhstan and Siberia",
      "Gorbachev's perestroika, which loosened central planning and allowed some private business",
    ],
    why: [
      "Correct. Like the Great Leap Forward, Stalin's plans pushed rapid industrialization, forced peasants onto collective farms, and led to a famine in the early 1930s that killed millions.",
      "The New Economic Policy relaxed state control over farming, the opposite of the Great Leap Forward.",
      "The Virgin Lands campaign (begun in 1954) was a mass farming drive, but it opened new land rather than forcing peasants into collectives to pay for industry, and it caused no famine like the one in the passage.",
      "Perestroika reduced central planning, the opposite of the mass campaigns in the passage.",
    ],
    answer: 0 },

  { id: "u8-m12", skill: "u8", type: "mcq", set: "u8-s3", topic: "8.4", reasoning: "Continuity and Change", difficulty: "moderate",
    question: "Which of the following later developments in China was the greatest change from the economic policies described in the passage?",
    choices: [
      "Deng Xiaoping's reforms after 1978, which let families farm their own plots for profit",
      "The Cultural Revolution of 1966 to 1976, in which Red Guards attacked people accused of opposing Mao",
      "The split with the Soviet Union in the early 1960s, which ended Soviet aid and advisers",
      "China's entry into the Korean War in 1950 to support North Korea against UN forces",
    ],
    why: [
      "Correct. Deng's reforms broke up collective farming and added market incentives, reversing the collectivization the passage describes.",
      "The Cultural Revolution continued Mao's mass campaigns rather than changing them, and it was mainly political, not a new economic policy.",
      "The Sino-Soviet split changed China's foreign relations and cost it Soviet aid, but it left the system of collective farms in place.",
      "Entering the Korean War was a military decision made before the collective farms and the Great Leap Forward.",
    ],
    answer: 0 },

  // ===== Multiple choice: Set 4, nuclear stockpile data =====
  { id: "u8-m13", skill: "u8", type: "mcq", set: "u8-s4", topic: "8.3", reasoning: "Causation", difficulty: "easy",
    question: "Which of the following best explains the change in the United States stockpile from 1950 to 1965 shown in the table?",
    choices: [
      "The United States relied on nuclear weapons to deter a Soviet attack on Western Europe.",
      "The United States dropped atomic bombs on Hiroshima and Nagasaki to end the war with Japan.",
      "The United States signed the Nuclear Non-Proliferation Treaty to stop the spread of weapons.",
      "The Soviet Union reached a larger stockpile than the United States by the early 1960s.",
    ],
    why: [
      "Correct. The stockpile rose from 299 to 31,139 as the United States relied on nuclear weapons to deter Soviet attack in Europe and elsewhere.",
      "Hiroshima and Nagasaki were bombed in 1945, before the period in the table.",
      "The Non-Proliferation Treaty was signed in 1968 and aimed to stop the spread of weapons to new countries, not to build up the United States stockpile.",
      "The table shows the Soviet stockpile far below the American one in 1960 (1,627 to 18,638) and in 1965 (6,144 to 31,139).",
    ],
    answer: 0 },

  { id: "u8-m14", skill: "u8", type: "mcq", set: "u8-s4", topic: "8.3", reasoning: "Comparison", difficulty: "easy",
    question: "Which of the following conclusions is best supported by the data in the table?",
    choices: [
      "The Soviet stockpile grew faster than the American one in the 1970s and was larger by 1980.",
      "The United States stockpile grew in every five-year period shown in the table.",
      "The two stockpiles were about the same size in 1960, before the Cuban Missile Crisis.",
      "Both stockpiles reached their largest size in 1990, just before the Soviet collapse.",
    ],
    why: [
      "Correct. The Soviet stockpile rose from 11,736 in 1970 to 30,665 in 1980, while the United States stockpile fell from 26,008 to 24,104.",
      "The United States stockpile peaked in 1965 and was lower in 1970 and in most later years.",
      "In 1960 the United States had 18,638 warheads and the Soviet Union had 1,627.",
      "The United States peak came in 1965 and the Soviet peak shown came in 1985.",
    ],
    answer: 0 },

  { id: "u8-m15", skill: "u8", type: "mcq", set: "u8-s4", topic: "8.8", reasoning: "Causation", difficulty: "difficult",
    question: "The decline in both stockpiles from 1990 to 2000 is best explained by which of the following?",
    choices: [
      "The end of the Cold War and arms reduction treaties such as START I",
      "The Limited Test Ban Treaty, which banned nuclear tests in the atmosphere",
      "The Soviet invasion of Afghanistan and the boycott of the Moscow Olympics",
      "The détente of the 1970s and the SALT I limits on missile launchers",
    ],
    why: [
      "Correct. With the Cold War over and the Soviet Union broken up in 1991, treaties such as START I (1991) required deep cuts in nuclear weapons.",
      "The Limited Test Ban Treaty (1963) restricted where tests could happen, and both stockpiles kept growing for decades after it.",
      "The invasion of Afghanistan (1979) and the Olympic boycott (1980) raised tensions, and the Soviet stockpile kept growing into the mid-1980s.",
      "SALT I (1972) capped some launchers, but the table shows the Soviet stockpile rising through the 1970s and early 1980s, not falling.",
    ],
    answer: 0 },

  { id: "u8-m16", skill: "u8", type: "mcq", set: "u8-s4", topic: "8.3", reasoning: "Continuity and Change", difficulty: "moderate",
    question: "The trend in both stockpiles from 1955 to 1985 is most closely connected to which of the following ideas?",
    choices: [
      "Mutually assured destruction, the idea that fear of total retaliation would prevent war",
      "Containment through economic aid, the idea that poverty made countries open to communism",
      "Détente, the idea that trade and arms talks would ease tension between the superpowers",
      "Non-alignment, the idea that new states should refuse to join either Cold War bloc",
    ],
    why: [
      "Correct. Both superpowers built thousands of warheads so that a first strike would bring certain destruction in return, which kept them from fighting each other directly.",
      "Containment through economic aid shaped the Marshall Plan, not the growth of nuclear stockpiles.",
      "Détente eased tension in the 1970s, but it did not explain building tens of thousands of warheads; the stockpiles grew because each side wanted enough to destroy the other after a first strike.",
      "Self-determination was the principle behind decolonization, not the arms race.",
    ],
    answer: 0 },

  // ===== Multiple choice: Set 5, Kennedy inaugural =====
  { id: "u8-m17", skill: "u8", type: "mcq", set: "u8-s5", topic: "8.5", reasoning: "Causation", difficulty: "easy",
    question: "Which of the following best describes the historical context of Kennedy's reference to \"new states\"?",
    choices: [
      "Many colonies in Africa and Asia had recently won independence from European empires.",
      "The breakup of the Soviet Union had created fifteen new independent republics.",
      "The Ottoman and Austro-Hungarian empires had collapsed at the end of a world war.",
      "Latin American states had broken free of Spanish rule in a wave of revolutions.",
    ],
    why: [
      "Correct. In 1960 alone, 17 African states became independent, and many more Asian and African states had gained independence since 1945.",
      "The Soviet Union broke apart in 1991, thirty years after this speech.",
      "Those empires collapsed in 1918, more than forty years before this speech.",
      "Most of Latin America won independence from Spain in the early 19th century, long before this speech.",
    ],
    answer: 0 },

  { id: "u8-m18", skill: "u8", type: "mcq", set: "u8-s5", topic: "8.3", reasoning: "Causation", difficulty: "moderate",
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

  { id: "u8-m19", skill: "u8", type: "mcq", set: "u8-s5", topic: "8.6", reasoning: "Continuity and Change", difficulty: "easy",
    question: "Kennedy's statement that the new states would not always support the views of the United States most directly anticipates which of the following?",
    choices: [
      "The decision of states such as India, Indonesia, and Egypt to join the Non-Aligned Movement",
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

  { id: "u8-m20", skill: "u8", type: "mcq", set: "u8-s5", topic: "8.3", reasoning: "Causation", difficulty: "easy",
    question: "The pledge in the second paragraph was most directly carried out through which of the following?",
    choices: [
      "The Peace Corps, which sent American volunteers to work in poorer countries from 1961",
      "The Marshall Plan, which sent economic aid to rebuild Western Europe after 1948",
      "The Truman Doctrine's military and economic aid to Greece and Turkey in 1947",
      "The Berlin Airlift, which flew food and fuel into West Berlin during a blockade",
    ],
    why: [
      "Correct. Kennedy created the Peace Corps weeks after this speech to help people in Asia, Africa, and Latin America, and his mention of \"the communists\" shows that the pledge was made in a Cold War setting.",
      "The Marshall Plan began in 1948 and aided industrial Europe, not \"huts and villages of half the globe.\"",
      "Aid to Greece and Turkey began in 1947, well before this speech.",
      "The Berlin Airlift (1948 to 1949) supplied one city during a Soviet blockade and came long before this speech.",
    ],
    answer: 0 },

  // ===== Multiple choice: Set 6, Reagan at the Brandenburg Gate =====
  { id: "u8-m21", skill: "u8", type: "mcq", set: "u8-s6", topic: "8.8", reasoning: "Causation", difficulty: "easy",
    question: "The \"new policy of reform and openness\" mentioned in the excerpt refers to",
    choices: [
      "Mikhail Gorbachev's policies of glasnost and perestroika",
      "Nikita Khrushchev's campaign to criticize Stalin in the 1950s",
      "Deng Xiaoping's market reforms and opening of China to foreign trade",
      "Vladimir Lenin's New Economic Policy, which allowed small private trade",
    ],
    why: [
      "Correct. Gorbachev, Soviet leader from 1985, introduced glasnost (openness) and perestroika (restructuring), which led to the economic changes Reagan lists.",
      "Khrushchev's de-Stalinization came three decades earlier, and Reagan names Gorbachev as the leader in charge.",
      "Deng's reforms were in China, and Reagan is describing policies coming \"from Moscow.\"",
      "The New Economic Policy dates from the 1920s, not the 1980s.",
    ],
    answer: 0 },

  { id: "u8-m22", skill: "u8", type: "mcq", set: "u8-s6", topic: "8.8", reasoning: "Continuity and Change", difficulty: "moderate",
    question: "Which of the following developments most directly followed the speech in the excerpt?",
    choices: [
      "The opening of the Berlin Wall and the fall of communist rule in Eastern Europe",
      "The building of the Berlin Wall to stop East Germans from fleeing to the West",
      "The crushing of the Prague Spring by Warsaw Pact troops sent into Czechoslovakia",
      "The founding of Solidarity, an independent trade union, in Poland's shipyards",
    ],
    why: [
      "Correct. Two years after the speech, East Germany opened the wall, and communist governments in Poland, Hungary, Czechoslovakia, and elsewhere fell.",
      "The wall was built in 1961, so it came before the speech, not after it.",
      "The invasion of Czechoslovakia came in 1968, nearly two decades before the speech.",
      "Solidarity was founded in 1980, seven years before the speech, so it could not have followed it.",
    ],
    answer: 0 },

  { id: "u8-m23", skill: "u8", type: "mcq", set: "u8-s6", topic: "8.9", reasoning: "Causation", difficulty: "difficult",
    question: "Reagan's description of \"technological backwardness\" and food shortages in the communist world best supports which argument about the end of the Cold War?",
    choices: [
      "Economic weakness in the Soviet system helped bring about the collapse of Soviet power.",
      "Decolonization in Africa ended the Cold War by removing the superpowers' reasons to compete.",
      "Reagan's military buildup forced the Soviets to spend more than their economy could bear.",
      "The Soviet Union collapsed because it lost a direct war with the United States.",
    ],
    why: [
      "Correct. A stagnant planned economy that could not match Western technology or feed its people pushed Gorbachev toward reforms that loosened Soviet control.",
      "Most African states had won independence by the mid-1970s, and superpower competition in Africa continued into the 1980s.",
      "Some historians make this argument, but the words in the question describe failures inside the communist economies themselves, not the cost of competing with American spending.",
      "The United States and the Soviet Union never fought a direct war, and the excerpt points to economic failure.",
    ],
    answer: 0 },

  { id: "u8-m24", skill: "u8", type: "mcq", set: "u8-s6", topic: "8.8", reasoning: "Sourcing and Situation", difficulty: "easy",
    question: "Reagan's main purpose in the final paragraph of the excerpt is to",
    choices: [
      "dare Gorbachev to prove his reforms were real by removing the Berlin Wall",
      "announce that American troops would soon leave West Germany and West Berlin",
      "celebrate the reunification of East and West Germany under one government",
      "warn West Germans that a Soviet invasion of West Berlin was about to begin",
    ],
    why: [
      "Correct. After describing Moscow's first reforms, Reagan calls on Gorbachev to tear down the Berlin Wall as a real sign of change.",
      "The excerpt says nothing about withdrawing troops.",
      "Germany reunified in 1990, three years after this speech.",
      "Reagan describes a Soviet Union that is starting to reform, not one about to attack.",
    ],
    answer: 0 },

  // ===== Multiple choice: Set 9, UN Resolution 181 =====
  { id: "u8-m25", skill: "u8", type: "mcq", set: "u8-s9", topic: "8.6", reasoning: "Contextualization", difficulty: "moderate",
    question: "Which of the following best explains why the \"mandatory Power\" was preparing to leave Palestine in 1947?",
    choices: [
      "Britain, weakened by the war and facing Arab and Jewish violence, handed the issue to the United Nations.",
      "The League of Nations had ordered Britain to give up its mandates in the Middle East by 1948 at the latest.",
      "The Balfour Declaration of 1917 had promised that British rule in Palestine would end within thirty years.",
      "The United States had agreed to buy Palestine from Britain and govern it as a trust territory.",
    ],
    why: [
      "Correct. Britain held Palestine under a mandate from 1920, and by 1947 it could not afford to keep order between Arab and Jewish communities, so it turned to the United Nations and announced its withdrawal.",
      "The League of Nations had been dissolved in 1946, and its place was taken by the United Nations, which the excerpt names.",
      "The Balfour Declaration promised British support for a Jewish \"national home\" in Palestine. It set no date for British rule to end.",
      "No such purchase took place. The excerpt describes independent Arab and Jewish states, not American rule.",
    ],
    answer: 0 },

  { id: "u8-m26", skill: "u8", type: "mcq", set: "u8-s9", topic: "8.6", reasoning: "Causation", difficulty: "easy",
    question: "The plan for a \"Jewish State\" in the excerpt most directly reflected which of the following earlier developments?",
    choices: [
      "Zionism, a movement for a Jewish homeland in Palestine that gained support after the Holocaust",
      "Pan-Arab nationalism, which called for uniting all Arabic-speaking peoples of the Middle East in a single state",
      "The Bolshevik Revolution, which spread the idea of states run by and for the working class",
      "The Treaty of Versailles, which created a Jewish state in Central Europe after the First World War",
    ],
    why: [
      "Correct. Zionists had organized immigration and land purchase in Palestine for decades, Britain's Balfour Declaration of 1917 backed a Jewish \"national home,\" and the Holocaust strengthened support for a Jewish state.",
      "Pan-Arab nationalism opposed a Jewish state in Palestine, so it does not explain the plan for one.",
      "The Bolshevik Revolution shaped communist states, not the plan for Arab and Jewish states in Palestine.",
      "The Treaty of Versailles created no Jewish state. Its settlement included the mandate system under which Britain later ruled Palestine.",
    ],
    answer: 0 },

  { id: "u8-m27", skill: "u8", type: "mcq", set: "u8-s9", topic: "8.6", reasoning: "Causation", difficulty: "moderate",
    question: "Which of the following most directly followed the resolution in the excerpt?",
    choices: [
      "Israel declared independence, Arab states invaded, and about 700,000 Palestinians became refugees.",
      "The Arab and Jewish states formed the economic union the plan called for and lived peacefully side by side.",
      "Jerusalem was placed under an international government that ruled the city for the next fifty years.",
      "Britain kept its mandate over Palestine until the 1960s to keep the peace between Arabs and Jews.",
    ],
    why: [
      "Correct. Arab leaders rejected the plan, fighting broke out as Britain withdrew, and after Israel declared independence in May 1948 neighboring Arab states invaded. The war left Israel with more land than the plan gave it and about 700,000 Palestinian Arabs as refugees.",
      "The plan did call for an economic union, but war, not union, followed. Using the plan's own terms as the outcome is a trap.",
      "The international regime for Jerusalem never took effect. After 1948 the city was divided between Israel and Jordan.",
      "Britain ended its mandate in May 1948, as the excerpt's deadline required.",
    ],
    answer: 0 },

  { id: "u8-m28", skill: "u8", type: "mcq", set: "u8-s9", topic: "8.6", reasoning: "Claims and Evidence in Sources", difficulty: "easy",
    question: "The final paragraph of the excerpt best supports which of the following claims about the plan?",
    choices: [
      "Its authors tried to protect people who would be minorities in the new states.",
      "Its authors required every Arab inhabitant to leave the area of the Jewish State.",
      "Its authors made Jerusalem the capital of the Jewish State under a British governor.",
      "Its authors gave the United Kingdom lasting authority over both of the new states.",
    ],
    why: [
      "Correct. The ban on discrimination by \"race, religion, language or sex\" was meant to protect Arabs living in the Jewish State and Jews living in the Arab State.",
      "The excerpt bans discrimination between inhabitants, which contradicts any plan to expel them.",
      "The excerpt places Jerusalem under a \"Special International Regime,\" separate from both states.",
      "The excerpt ends the mandate by 1 August 1948, which ends British authority.",
    ],
    answer: 0 },

  // ===== Multiple choice: Set 10, Eisenhower on Suez =====
  { id: "u8-m29", skill: "u8", type: "mcq", set: "u8-s10", topic: "8.6", reasoning: "Causation", difficulty: "moderate",
    question: "Which of the following most directly explains why the Egyptian government \"seized the Universal Suez Canal Company\" in July 1956?",
    choices: [
      "After Britain and the United States withdrew offers to fund the Aswan Dam, Nasser wanted the canal's income.",
      "Egypt had joined the Warsaw Pact, and the Soviet Union ordered it to close the canal to Western ships.",
      "Israel had occupied the canal zone, and Egypt took over the company to drive Israeli forces out.",
      "The company's ninety-nine-year concession had run out, so control of the canal passed to Egypt.",
    ],
    why: [
      "Correct. The United States withdrew its offer to help fund the Aswan High Dam on July 19, Britain followed, and a week later Nasser nationalized the company to use its income and end foreign control, an act of economic nationalism by a newly independent state.",
      "Egypt never joined the Warsaw Pact. Nasser took arms from the Soviet bloc but stayed outside both alliances.",
      "The excerpt shows that the Israeli attack came in October, after the seizure, not before it.",
      "The company's concession ran to 1968. In 1956 nothing had expired: Egypt took the company early, by decree.",
    ],
    answer: 0 },

  { id: "u8-m30", skill: "u8", type: "mcq", set: "u8-s10", topic: "8.1", reasoning: "Causation", difficulty: "easy",
    question: "Which of the following was the most direct result of the events described in the excerpt?",
    choices: [
      "Under American, Soviet, and United Nations pressure, Britain, France, and Israel pulled out of Egypt.",
      "Britain and France took back the canal and ran it as an international waterway until 1968.",
      "Egypt joined the Baghdad Pact, a Western alliance, in exchange for American protection.",
      "The United States sent troops to fight alongside its NATO allies Britain and France in Egypt.",
    ],
    why: [
      "Correct. A United Nations force replaced the invaders, Egypt kept the canal, and the crisis showed that Britain and France could no longer act as imperial powers without American support.",
      "Egypt kept the canal after the crisis. This choice reverses the outcome.",
      "Egypt never joined the Baghdad Pact, which Nasser opposed, and it drew closer to the Soviet Union after the crisis.",
      "Eisenhower says the United States was \"not consulted\" and believes the attack was \"in error,\" so it did not join the fighting.",
    ],
    answer: 0 },

  { id: "u8-m31", skill: "u8", type: "mcq", set: "u8-s10", topic: "8.2", reasoning: "Contextualization", difficulty: "difficult",
    question: "Eisenhower's statement that the United States does \"not accept the use of force\" to settle disputes carried added weight in the autumn of 1956 because",
    choices: [
      "in the same weeks Soviet forces were crushing a revolt in Hungary",
      "the Korean War had just ended in a stalemate, and Americans opposed any new war overseas",
      "the Soviet Union had just placed nuclear missiles in Cuba, ninety miles from Florida",
      "the United States had just joined the Non-Aligned Movement and promised to stay neutral",
    ],
    why: [
      "Correct. As the cite's title shows, the speech covered Eastern Europe and the Middle East together. Soviet forces crushed the Hungarian uprising in early November, and backing Britain and France would have weakened American criticism of the Soviet Union.",
      "The Korean War ended in 1953, three years earlier, and Eisenhower ties his objection to the use of force itself, in the same weeks as the Soviet action in Hungary.",
      "The missiles in Cuba led to the crisis of 1962, six years later.",
      "The United States never joined the Non-Aligned Movement, which was formed in 1961 by states that refused to join either bloc.",
    ],
    answer: 0 },

  { id: "u8-m32", skill: "u8", type: "mcq", set: "u8-s10", topic: "8.6", reasoning: "Comparison", difficulty: "moderate",
    question: "Egypt's action described in the first paragraph of the excerpt was most similar to which of the following?",
    choices: [
      "Iran's nationalization of its oil industry, owned by a British company, in 1951",
      "China's opening of special economic zones to foreign investment after 1978",
      "Western Europe's acceptance of American aid under the Marshall Plan after 1948",
      "The Soviet Union's move toward private enterprise under perestroika in the 1980s",
    ],
    why: [
      "Correct. In both cases a government took over a key resource run by a Western company to gain its income and assert national control.",
      "China's special economic zones invited foreign companies in, the opposite of taking a foreign company over.",
      "The Marshall Plan was aid accepted from an ally, not a takeover of foreign property.",
      "Perestroika loosened state control of the economy, while Egypt expanded state control.",
    ],
    answer: 0 },

  // ===== Multiple choice: Set 11, Indian Independence Act =====
  { id: "u8-m33", skill: "u8", type: "mcq", set: "u8-s11", topic: "8.5", reasoning: "Causation", difficulty: "easy",
    question: "Which of the following most directly led Britain to set up two dominions rather than one?",
    choices: [
      "The Muslim League demanded a separate Muslim state, and its talks with the Congress failed.",
      "The Indian National Congress, led by Gandhi and Nehru, asked Britain to divide India by religion.",
      "The Government of India Act of 1935 had already divided British India into two separate states.",
      "The United Nations voted to divide India into Hindu and Muslim states, as it did in Palestine.",
    ],
    why: [
      "Correct. From the Lahore Resolution of 1940, the League called for Muslim-majority areas to become independent, and when communal violence grew in 1946 Britain agreed to partition.",
      "The Congress wanted a single united India and accepted partition only reluctantly in 1947.",
      "The Government of India Act of 1935 created provinces with elected governments inside one British India. It did not divide India into two states.",
      "The United Nations did vote on partition in Palestine in 1947, but India's partition was decided by Britain and Indian leaders.",
    ],
    answer: 0 },

  { id: "u8-m34", skill: "u8", type: "mcq", set: "u8-s11", topic: "8.6", reasoning: "Causation", difficulty: "easy",
    question: "The division of Bengal and Punjab described in the excerpt most directly led to which of the following?",
    choices: [
      "The migration of millions of Hindus, Sikhs, and Muslims across the new borders amid mass killings",
      "The departure of most British officials and soldiers from India and Pakistan by early 1948",
      "A peaceful exchange of land and people that both new states carried out under UN supervision",
      "The union of India and Pakistan into a single federation within a few years of partition",
    ],
    why: [
      "Correct. About 15 million people crossed the new borders in Punjab and Bengal, and communal killings took place on both sides.",
      "British officials did leave, but because independence ended British rule, not because Bengal and Punjab were split.",
      "The partition was violent, no United Nations body supervised it, and it left disputes that led to later wars.",
      "India and Pakistan stayed separate and fought several wars.",
    ],
    answer: 0 },

  { id: "u8-m35", skill: "u8", type: "mcq", set: "u8-s11", topic: "8.6", reasoning: "Causation", difficulty: "difficult",
    question: "The clause in Section 7 of the excerpt most directly contributed to which of the following?",
    choices: [
      "A war over Kashmir, whose Hindu ruler joined India although most of its people were Muslim",
      "The breakaway of East Pakistan, separated from West Pakistan by India, to form Bangladesh",
      "The adoption of India's 1950 constitution, which banned discrimination by caste",
      "India's decision to join the Non-Aligned Movement rather than a Cold War alliance",
    ],
    why: [
      "Correct. When British overlordship of the princely states lapsed, each ruler had to join India or Pakistan, and the Kashmir ruler's decision to join India in October 1947 led to war.",
      "Bangladesh grew out of the split of Bengal and the treatment of East Pakistan, not the end of British authority over princely states.",
      "India's constitution came from its own constituent assembly and is not connected to the princely states clause.",
      "Non-alignment was a foreign policy choice of Nehru's government, not a result of the princely states clause.",
    ],
    answer: 0 },

  { id: "u8-m36", skill: "u8", type: "mcq", set: "u8-s11", topic: "8.5", reasoning: "Comparison", difficulty: "easy",
    question: "The arrangement in the excerpt was most similar to which of the following?",
    choices: [
      "The United Nations plan of 1947 to divide the Mandate of Palestine into Arab and Jewish states",
      "The creation of the Federation of Rhodesia and Nyasaland to join three British colonies",
      "The creation of the European Economic Community to join six states in a common market",
      "Ghana's independence in 1957 as a single state that kept the colony's borders",
    ],
    why: [
      "Correct. In both places, in the same year, Britain prepared to leave a territory by dividing it between religious communities.",
      "The Central African Federation (1953) joined three colonies into one, the opposite of dividing a territory.",
      "The European Economic Community joined existing states in a trade group. It did not divide a colony.",
      "Ghana became independent as one state, without partition.",
    ],
    answer: 0 },

  // ===== Multiple choice: Set 12, NSC 5719/1 on Africa =====
  { id: "u8-m37", skill: "u8", type: "mcq", set: "u8-s12", topic: "8.5", reasoning: "Contextualization", difficulty: "moderate",
    question: "The reference to Ghana as one of the \"new states\" most directly reflects which of the following?",
    choices: [
      "Kwame Nkrumah's party used strikes, boycotts, and elections to win independence for the Gold Coast.",
      "Ghana won independence in 1957 after a long guerrilla war against a large population of British settlers.",
      "Ghana had been a Belgian colony and became independent after a United Nations military intervention.",
      "Ghana was granted independence by France after its people voted for it in de Gaulle's 1958 referendum.",
    ],
    why: [
      "Correct. Nkrumah's Convention People's Party organized strikes and boycotts and won elections in 1951, 1954, and 1956, and the Gold Coast became independent as Ghana in 1957, one of the first colonies in sub-Saharan Africa to do so.",
      "Long wars against settlers took place in Kenya and Algeria. The Gold Coast had few European settlers.",
      "This confuses Ghana with the Belgian Congo, where a United Nations force arrived in 1960.",
      "This describes Guinea, which voted to leave the French Community in 1958. Ghana, the former Gold Coast, was a British colony.",
    ],
    answer: 0 },

  { id: "u8-m38", skill: "u8", type: "mcq", set: "u8-s12", topic: "8.5", reasoning: "Sourcing and Situation", difficulty: "moderate",
    question: "The point of view of the excerpt is best explained by the fact that its authors",
    choices: [
      "hoped to keep European allies' support while keeping African states from turning to Moscow",
      "belonged to the Non-Aligned Movement and wanted to keep Africa out of the Cold War",
      "represented African nationalist parties that demanded immediate independence from Europe",
      "wanted Britain and France to keep their African colonies permanently for their minerals",
    ],
    why: [
      "Correct. As American security officials, they back independence \"in cooperation with the European powers\" and worry that frustrated nationalism would help \"Communists.\"",
      "The authors work for the United States government, which led one of the two blocs.",
      "The excerpt calls for an \"orderly\" path to independence in cooperation with Europe, not an immediate one.",
      "The authors note that Europe needs Africa's minerals, but they support movement \"towards self-government and independence,\" not permanent colonies.",
    ],
    answer: 0 },

  { id: "u8-m39", skill: "u8", type: "mcq", set: "u8-s12", topic: "8.5", reasoning: "Continuity and Change", difficulty: "difficult",
    question: "Which of the following later developments most clearly went against the hope for an \"orderly\" transition expressed in the excerpt?",
    choices: [
      "Angola and Mozambique won independence from Portugal in 1975 only after long wars.",
      "Most of France's colonies in West Africa won independence through negotiation in 1960.",
      "Nigeria won independence from Britain in 1960 after a series of constitutional conferences.",
      "Ghana kept close trade ties with Britain after independence and joined the Commonwealth.",
    ],
    why: [
      "Correct. Portugal refused to give up its colonies, so independence came only after years of armed struggle, the kind of disorder the authors hoped to avoid.",
      "Negotiated independence in French West Africa fits the orderly path the authors hoped for.",
      "Nigeria's negotiated independence also fits the orderly path, even though civil war came later.",
      "Ghana's ties with Britain match the authors' hope that ties between Europe and Africa would continue.",
    ],
    answer: 0 },

  { id: "u8-m40", skill: "u8", type: "mcq", set: "u8-s12", topic: "8.5", reasoning: "Causation", difficulty: "moderate",
    question: "Which of the following best shows how many new African states responded to the concern about \"political alignment\" in the first paragraph?",
    choices: [
      "Many joined the Non-Aligned Movement and worked together in the Organization of African Unity.",
      "Most joined NATO or SEATO to receive American weapons and military protection.",
      "Most joined the Warsaw Pact to receive Soviet weapons, advisers, and economic aid.",
      "They merged into a single African federal state, as Pan-Africanists such as Nkrumah had urged.",
    ],
    why: [
      "Correct. Leaders such as Nkrumah and Nasser tried to keep their independence from both superpowers, and the Organization of African Unity, founded in 1963, worked against remaining colonial rule and apartheid.",
      "No African state joined NATO or SEATO, which were North Atlantic and Southeast Asian alliances.",
      "No African state joined the Warsaw Pact, which was limited to the Soviet Union and Eastern Europe.",
      "Nkrumah did call for a united Africa, but the Organization of African Unity kept the separate states and their colonial borders.",
    ],
    answer: 0 },

  // ===== Multiple choice: Set 13, Carter on Afghanistan =====
  { id: "u8-m41", skill: "u8", type: "mcq", set: "u8-s13", topic: "8.8", reasoning: "Contextualization", difficulty: "easy",
    question: "Which of the following best describes the context of the \"Soviet invasion of Afghanistan\" mentioned in the excerpt?",
    choices: [
      "Soviet troops entered to prop up a communist government facing a revolt by Muslim rebels.",
      "Soviet troops entered to overthrow the Taliban government after a terrorist attack.",
      "Soviet troops entered to help Iran's new Islamic government in its conflict with the United States.",
      "Soviet troops entered to take back territory the Russian Empire had lost to Britain in the 1800s.",
    ],
    why: [
      "Correct. A communist party had seized power in 1978, and when its rule began to collapse, Soviet leaders sent troops in December 1979 to save it.",
      "The Taliban took power in the 1990s, and the invasion that removed them was led by the United States in 2001.",
      "Iran's revolution in 1979 created an Islamic Republic that was hostile to both superpowers.",
      "Britain and Russia competed for influence in Afghanistan in the 19th century, but Afghanistan was never Russian territory.",
    ],
    answer: 0 },

  { id: "u8-m42", skill: "u8", type: "mcq", set: "u8-s13", topic: "8.9", reasoning: "Contextualization", difficulty: "moderate",
    question: "Carter's concern about \"the free movement of Middle East oil\" was most directly shaped by which of the following?",
    choices: [
      "The Arab oil embargo of 1973, which showed how a cutoff of Gulf oil could hurt the West",
      "Egypt's seizure of the Suez Canal in 1956, which briefly blocked tanker traffic to Europe",
      "The discovery of North Sea oil in the 1960s, which gave Western Europe new supplies",
      "The Soviet Union's growing need to import oil from Persian Gulf producers such as Iraq",
    ],
    why: [
      "Correct. Arab members of OPEC cut oil shipments to the United States and other states after the 1973 Arab-Israeli war, prices quadrupled, and Americans waited in long lines for gasoline.",
      "The Suez Crisis did threaten oil shipping, but it came more than two decades earlier. The embargo of 1973 was the recent, direct lesson.",
      "North Sea oil added to Western supplies, so it would have lessened, not caused, Carter's concern.",
      "The Soviet Union was a major oil producer and exporter, not an importer from the Persian Gulf.",
    ],
    answer: 0 },

  { id: "u8-m43", skill: "u8", type: "mcq", set: "u8-s13", topic: "8.9", reasoning: "Continuity and Change", difficulty: "easy",
    question: "The policy stated in the final paragraph of the excerpt most directly continued which earlier approach?",
    choices: [
      "Containment, as in the Truman Doctrine's pledge to help states resist outside pressure",
      "Détente, the easing of tensions through arms control and trade with the Soviet Union",
      "Isolationism, the policy of avoiding military commitments outside the Western Hemisphere",
      "Non-alignment, the refusal of states such as India to take sides in the Cold War",
    ],
    why: [
      "Correct. Like Truman in 1947, Carter promised to resist Soviet expansion into a new region, here the Persian Gulf, with force if necessary.",
      "The excerpt ends détente: Carter cuts trade and promises military force.",
      "Carter commits the United States to defend a region on the other side of the world, the opposite of isolationism.",
      "Non-alignment was the policy of states such as India, not of a superpower leading one bloc.",
    ],
    answer: 0 },

  { id: "u8-m44", skill: "u8", type: "mcq", set: "u8-s13", topic: "8.8", reasoning: "Causation", difficulty: "easy",
    question: "The war that began with the invasion described in the excerpt most directly contributed to the end of the Cold War because it",
    choices: [
      "drained Soviet lives, money, and prestige for a decade until Gorbachev pulled out in 1989",
      "ended in a Soviet victory that convinced the United States to accept Soviet control of the Persian Gulf",
      "led American and Soviet troops to fight each other directly in Central Asia for ten years",
      "brought Afghanistan into the Warsaw Pact, which stretched Soviet forces too thin",
    ],
    why: [
      "Correct. About 15,000 Soviet soldiers died fighting mujahideen rebels armed by the United States and others, and the costly war added to the strains that pushed Gorbachev toward reform.",
      "The Soviet Union withdrew without winning, and it never controlled the Persian Gulf.",
      "The United States armed the rebels but never fought Soviet forces directly.",
      "Afghanistan never joined the Warsaw Pact.",
    ],
    answer: 0 },

  // ===== Multiple choice: Set 14, Limited Test Ban Treaty =====
  { id: "u8-m45", skill: "u8", type: "mcq", set: "u8-s14", topic: "8.3", reasoning: "Causation", difficulty: "difficult",
    question: "Which of the following most directly led the United States and the Soviet Union to sign the treaty in 1963?",
    choices: [
      "The Cuban Missile Crisis of 1962, which brought the superpowers close to nuclear war",
      "The Soviet launch of Sputnik in 1957, which showed it could build long-range missiles",
      "The Berlin crisis of 1961, which ended with East Germany building the Berlin Wall",
      "The atomic bombing of Hiroshima and Nagasaki, which ended the Second World War",
    ],
    why: [
      "Correct. After the missile crisis, both governments sought ways to lower the danger, including a telephone hotline and this treaty the next year.",
      "Sputnik raised fears of Soviet missiles, but it came six years earlier and sped up the arms race rather than leading to limits on it.",
      "The Berlin crisis of 1961 raised tension, but the wall settled it without bringing the superpowers to the edge of nuclear war. The missile crisis the next year was the scare that pushed both sides toward limits.",
      "The atomic bombings came in 1945, eighteen years before the treaty, and the arms race grew for years after them.",
    ],
    answer: 0 },

  { id: "u8-m46", skill: "u8", type: "mcq", set: "u8-s14", topic: "8.3", reasoning: "Claims and Evidence in Sources", difficulty: "moderate",
    question: "The terms of the treaty in the excerpt best support which of the following claims?",
    choices: [
      "It banned some kinds of tests but did not stop either side from building more weapons.",
      "It required all three parties to destroy their nuclear weapons under strict international control.",
      "It set up a United Nations agency to inspect the nuclear sites of all three parties.",
      "It was signed by every state that had tested a nuclear weapon by 1963, including France.",
    ],
    why: [
      "Correct. Article I bans tests in the air, in space, and under water, while the preamble shows that \"complete disarmament\" remained only an aim. Underground testing and the arms buildup went on.",
      "Complete disarmament is called an aim, not a requirement of the treaty.",
      "The excerpt mentions \"strict international control\" only as a goal for a future agreement, and it sets up no inspection agency.",
      "Only three states are named as the original parties. France, which had tested nuclear weapons since 1960, did not sign.",
    ],
    answer: 0 },

  { id: "u8-m47", skill: "u8", type: "mcq", set: "u8-s14", topic: "8.3", reasoning: "Continuity and Change", difficulty: "easy",
    question: "Which of the following later developments most directly continued the aim stated in the second paragraph of the excerpt?",
    choices: [
      "The Nuclear Non-Proliferation Treaty of 1968, meant to stop the spread of nuclear weapons",
      "The Strategic Defense Initiative of 1983, a plan for a missile defense system in space",
      "The Warsaw Pact of 1955, a military alliance of the Soviet Union and Eastern Europe",
      "The Soviet decision in 1962 to place medium-range nuclear missiles in Cuba, near the United States",
    ],
    why: [
      "Correct. Like the test ban, the Non-Proliferation Treaty tried to slow the arms race through an international agreement.",
      "The Strategic Defense Initiative was a new weapons program that raised tensions, not an agreement to limit arms.",
      "The Warsaw Pact was a military alliance formed before the treaty, not a step toward disarmament.",
      "Placing missiles in Cuba came before the treaty and expanded the arms race.",
    ],
    answer: 0 },

  // ===== Multiple choice: Set 15, map of land reform =====
  { id: "u8-m48", skill: "u8", type: "mcq", set: "u8-s15", topic: "8.4", reasoning: "Claims and Evidence in Sources", difficulty: "easy",
    question: "The map best supports which of the following claims about land reform after 1945?",
    choices: [
      "Governments on both sides of the Cold War carried out land reform.",
      "Only communist governments carried out land reform after 1945.",
      "Land reform came only in states that had fought wars of independence.",
      "Land reform gave most of the land it took to foreign companies.",
    ],
    why: [
      "Correct. The map shows communist and socialist governments in Cuba, Ethiopia, and North Vietnam and an anticommunist monarch allied with the United States in Iran all redistributing land.",
      "The map shows the Shah of Iran, an anticommunist monarch allied with the United States, carrying out the White Revolution.",
      "Iran and Ethiopia were never European colonies, and Cuba's reform followed a revolution against its own government, not a war of independence.",
      "The map shows land taken from landlords and estates, including American-owned ones in Cuba, and given to peasants or the state.",
    ],
    answer: 0 },

  { id: "u8-m49", skill: "u8", type: "mcq", set: "u8-s15", topic: "8.4", reasoning: "Comparison", difficulty: "moderate",
    question: "According to the map, Iran's land reform differed from Ethiopia's in that Iran's was",
    choices: [
      "carried out by a monarch, while Ethiopia's followed the overthrow of a monarch",
      "a nationalization of all land, while Ethiopia's sold land to individual farmers",
      "led by Iran's Communist Party, while Ethiopia's was led by Haile Selassie",
      "carried out after a war of independence, while Ethiopia's followed peaceful decolonization",
    ],
    why: [
      "Correct. The Shah used reform to win rural support for his own rule, while the Derg nationalized land after overthrowing Emperor Haile Selassie in 1974.",
      "This reverses the two cases: the map shows the Derg nationalizing all rural land and the Shah selling land to peasants.",
      "The map shows the Shah carrying out Iran's reform and officers who overthrew the emperor carrying out Ethiopia's.",
      "Neither reform followed a war of independence. Iran was never a colony, and Ethiopia was occupied by Italy only from 1936 to 1941.",
    ],
    answer: 0 },

  { id: "u8-m50", skill: "u8", type: "mcq", set: "u8-s15", topic: "8.4", reasoning: "Causation", difficulty: "moderate",
    question: "The Derg's turn to socialism, shown on the map, most directly led to which of the following?",
    choices: [
      "Soviet arms and Cuban troops helped Ethiopia fight Somalia in the Ogaden War of 1977 and 1978.",
      "The United States sent troops to restore Emperor Haile Selassie to his throne in 1976.",
      "China became Ethiopia's main ally and built a railway like the one it built in Tanzania.",
      "Italy reoccupied Ethiopia and ruled it again as a colony until the end of the Cold War.",
    ],
    why: [
      "Correct. Ethiopia became a Soviet ally, and Cuban troops helped it defeat Somalia's invasion of the Ogaden region, a Cold War conflict in Africa.",
      "The United States did not send troops, and Haile Selassie died in 1975.",
      "China built the TAZARA railway for Tanzania and Zambia, but Ethiopia's socialist government relied on the Soviet Union and Cuba, not China.",
      "Italy occupied Ethiopia only from 1936 to 1941, decades before the Derg.",
    ],
    answer: 0 },

  { id: "u8-m51", skill: "u8", type: "mcq", set: "u8-s15", topic: "8.4", reasoning: "Continuity and Change", difficulty: "moderate",
    question: "Which of the following later developments best shows a limit of the Iranian reform shown on the map?",
    choices: [
      "The revolution of 1979, led by clerics who had opposed the Shah's reforms, overthrew him.",
      "Iran nationalized its British-owned oil industry under Prime Minister Mossadegh in 1951.",
      "The Shah remained a close ally of the United States until the end of the Cold War in 1991.",
      "A communist government took power in Iran after the Shah fled the country in 1979.",
    ],
    why: [
      "Correct. The White Revolution did not win lasting support, and clerics such as Ruhollah Khomeini, who had denounced it in 1963, led the revolution that ended the monarchy.",
      "The oil nationalization came twelve years before the White Revolution, so it cannot show the reform's results.",
      "The Shah was overthrown in 1979 and died in 1980, and the Islamic Republic that followed was hostile to the United States.",
      "The 1979 revolution created an Islamic Republic, which suppressed Iran's communists.",
    ],
    answer: 0 },

  // ===== Multiple choice: Set 16, practice passage on South America =====
  { id: "u8-m52", skill: "u8", type: "mcq", set: "u8-s16", topic: "8.7", reasoning: "Claims and Evidence in Sources", difficulty: "easy",
    question: "The passage best supports which of the following claims?",
    choices: [
      "Military governments and leftist rebels alike used violence against civilians.",
      "Military governments in South America came to power mainly through free elections.",
      "The Shining Path attacked only the Peruvian army and avoided harming civilians.",
      "The United States opposed the military governments of Chile and Argentina throughout the Cold War.",
    ],
    why: [
      "Correct. The passage describes torture and disappearances by the Chilean and Argentine regimes and attacks on peasants and local leaders by the Shining Path.",
      "The passage says officers \"seize[d] power,\" and in Chile they overthrew an elected president.",
      "The passage says the Shining Path attacked peasants, local leaders, and rival leftists.",
      "The passage says the United States \"often supported them as allies against communism.\"",
    ],
    answer: 0 },

  { id: "u8-m53", skill: "u8", type: "mcq", set: "u8-s16", topic: "8.7", reasoning: "Causation", difficulty: "difficult",
    question: "Which of the following most directly increased the \"fear of revolution\" that the passage describes?",
    choices: [
      "The Cuban Revolution of 1959, after which Castro allied with Moscow and aided other revolutionaries",
      "The Mexican Revolution of 1910, which overthrew Porfirio Díaz and promised land to peasants",
      "The Sandinista Revolution of 1979, which brought a leftist government to power in Nicaragua",
      "The Chinese Communist victory of 1949, which made the world's most populous country communist",
    ],
    why: [
      "Correct. Cuba showed that a revolution could create a communist state in the Americas, which alarmed military officers and the United States in the 1960s and 1970s.",
      "The Mexican Revolution came half a century earlier and was not a communist revolution.",
      "The Sandinista victory alarmed military rulers, but it came after the coups in Chile (1973) and Argentina (1976), so it could not have caused them.",
      "The Chinese revolution raised fears of communism worldwide, but the revolution that showed South American officers a communist state could arise in their own hemisphere, and that backed guerrillas there, was Cuba's.",
    ],
    answer: 0 },

  { id: "u8-m54", skill: "u8", type: "mcq", set: "u8-s16", topic: "8.7", reasoning: "Comparison", difficulty: "easy",
    question: "The actions of the Chilean and Argentine governments described in the passage were most similar to which of the following?",
    choices: [
      "South Africa's banning of the ANC and jailing of its leaders, such as Nelson Mandela",
      "Gandhi's Salt March of 1930, a mass protest that defied the British tax on salt",
      "Solidarity's strikes in Poland's shipyards against the communist government",
      "India's practice of holding regular national elections after independence in 1947",
    ],
    why: [
      "Correct. Like the South American regimes, South Africa's government used police power, bans, and imprisonment to crush opposition to its rule.",
      "The Salt March was a protest against a government, not a government's repression of opponents.",
      "Solidarity was a movement resisting a government, not a government crushing its critics.",
      "Regular elections are the opposite of rule by a military government.",
    ],
    answer: 0 },

  { id: "u8-m55", skill: "u8", type: "mcq", set: "u8-s16", topic: "8.7", reasoning: "Continuity and Change", difficulty: "easy",
    question: "Which of the following later developments marked the greatest change from the situation described in the passage?",
    choices: [
      "Argentina (1983) and Chile (1990) returned to civilian rule and investigated past abuses.",
      "Military officers seized power in more South American countries during the 1990s.",
      "The Shining Path won its war and took control of Peru's government in 1990.",
      "General Pinochet kept ruling Chile as president until his death in 2006.",
    ],
    why: [
      "Correct. The return to civilian rule ended the military regimes, and truth commissions such as Chile's in 1990 documented the killings and disappearances.",
      "South America moved away from military rule in the 1980s and 1990s.",
      "The Shining Path never took power, and its leader, Abimael Guzmán, was captured in 1992.",
      "Pinochet gave up the presidency in 1990 after losing a 1988 vote on his rule.",
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
