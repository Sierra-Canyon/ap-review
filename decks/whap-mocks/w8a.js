// Unit 8 Assessment (mock): Cold War and Decolonization, c. 1900 to the present
// Sources: every stimulus this form uses, keyed by id.
import { maps } from "../whap/maps.js";
const MAP = "Map drawn for this review from Natural Earth land outlines (public domain). Places, dates, and routes checked against ";
const map = (id, caption, refs) => [{ svg: maps[id], caption }, { cite: MAP + refs + ".", kind: "map" }];

export const sets = {
  "w8a-s1": {
    id: "w8a-s1", name: "Byrnes on the future of Germany", intro: "Use the source below to answer the questions that follow.",
    sources: [
      { title: "Source", blocks: [
        { p: "The carrying out of the Potsdam Agreement has, however, been obstructed by the failure of the Allied Control Council to take the necessary steps to enable the German economy to function as an economic unit. ..." },
        { p: "The United States is firmly of the belief that Germany should be administered as an economic unit and that zonal barriers should be completely obliterated so far as the economic life and activity in Germany are concerned. ... The time has come when the zonal boundaries should be regarded as defining only the areas to be occupied for security purposes by the armed forces of the occupying powers and not as self-contained economic or political units. ..." },
        { p: "It [the American Government] has formally announced that it is its intention to unify the economy of its own zone with any or all of the other zones willing to participate in the unification. So far only the British Government has agreed to let its zone participate. ..." },
        { p: "... Security forces will probably have to remain in Germany for a long period. I want no misunderstanding. We will not shirk our duty. We are not withdrawing. We are staying here. As long as there is an occupation army in Germany, the American armed forces will be part of that occupation army." },
        { cite: "James F. Byrnes, United States Secretary of State, \"Restatement of Policy on Germany,\" speech to German and American officials at Stuttgart, September 6, 1946. Text published by the United States Embassy in Germany.", url: "https://usa.usembassy.de/etexts/ga4-460906.htm", kind: "primary" },
      ] },
    ],
  },

  "w8a-s2": {
    id: "w8a-s2", name: "The Southeast Asia Collective Defense Treaty", intro: "Use the source below to answer the questions that follow.",
    sources: [
      { title: "Source", blocks: [
        { p: "ARTICLE IV" },
        { p: "1. Each Party recognizes that aggression by means of armed attack in the treaty area against any of the Parties or against any State or territory which the Parties by unanimous agreement may hereafter designate, would endanger its own peace and safety, and agrees that it will in that event act to meet the common danger in accordance with its constitutional processes. Measures taken under this paragraph shall be immediately reported to the Security Council of the United Nations. ..." },
        { p: "UNDERSTANDING OF THE UNITED STATES OF AMERICA" },
        { p: "The United States of America in executing the present Treaty does so with the understanding that its recognition of the effect of aggression and armed attack and its agreement with reference thereto in Article IV, paragraph 1, apply only to communist aggression but affirms that in the event of other aggression or armed attack it will consult under the provisions of Article IV, paragraph 2." },
        { cite: "Southeast Asia Collective Defense Treaty (the Manila Pact, which created SEATO), signed at Manila, September 8, 1954, by Australia, France, New Zealand, Pakistan, the Philippines, Thailand, the United Kingdom, and the United States. The Avalon Project, Yale Law School.", url: "https://avalon.law.yale.edu/20th_century/usmu003.asp", kind: "primary" },
      ] },
    ],
  },

  "w8a-s3": {
    id: "w8a-s3", name: "Revolutions, coups, and interventions in Latin America", intro: "Use the map below to answer the questions that follow.", label: "Map",
    sources: [{ title: "Map", blocks: map("u8-latin-america", "Revolutions, coups, and United States interventions in Latin America, 1954 to 1983", "the Office of the Historian, U.S. Department of State (Milestones: the Bay of Pigs; Allende and Chile), and Encyclopaedia Britannica's entries for each event") }],
  },

  "w8a-s4": {
    id: "w8a-s4", name: "The United Nations arms embargo on South Africa", intro: "Use the source below to answer the questions that follow.",
    sources: [
      { title: "Source", blocks: [
        { p: "Recognizing that the military build-up by South Africa and its persistent acts of aggression against the neighbouring States seriously disturb the security of those States, ..." },
        { p: "Strongly condemning the South African Government for its acts of repression, its defiant continuance of the system of apartheid and its attacks against neighbouring independent States, ..." },
        { p: "Acting therefore under Chapter VII of the Charter of the United Nations," },
        { p: "1. Determines, having regard to the policies and acts of the South African Government, that the acquisition by South Africa of arms and related matériel constitutes a threat to the maintenance of international peace and security;" },
        { p: "2. Decides that all States shall cease forthwith any provision to South Africa of arms and related matériel of all types, including the sale or transfer of weapons and ammunition, military vehicles and equipment, ..." },
        { cite: "United Nations Security Council, Resolution 418 (1977), adopted at the 2046th meeting, November 4, 1977. United Nations Digital Library (scanned official text).", url: "https://digitallibrary.un.org/record/66633/files/S_RES_418%281977%29-EN.pdf", kind: "primary" },
      ] },
    ],
  },

  "w8a-s5": {
    id: "w8a-s5", name: "American deaths in the Vietnam War by year", intro: "Use the table below to answer the questions that follow.",
    sources: [
      { title: "Source", blocks: [
        { p: "United States military deaths in the Vietnam War, by year of death, 1962 to 1973" },
        { table: {
          head: ["Year", "Deaths"],
          rows: [
            ["1962", "53"],
            ["1963", "122"],
            ["1964", "216"],
            ["1965", "1,928"],
            ["1966", "6,350"],
            ["1967", "11,363"],
            ["1968", "16,899"],
            ["1969", "11,780"],
            ["1970", "6,173"],
            ["1971", "2,414"],
            ["1972", "759"],
            ["1973", "68"],
          ],
        } },
        { cite: "United States National Archives, \"Vietnam War U.S. Military Fatal Casualty Statistics,\" record counts by year of incident or death from the Defense Casualty Analysis System Vietnam Conflict Extract File, current as of April 29, 2008. The National Archives notes that these counts are for informational purposes and are not official statistics.", url: "https://www.archives.gov/research/military/vietnam-war/casualty-statistics", kind: "data" },
      ] },
    ],
  },

  "w8a-s6": {
    id: "w8a-s6", name: "Bush on the end of the Soviet Union", intro: "Use the source below to answer all parts of the question that follows.",
    sources: [
      { title: "Source", blocks: [
        { p: "For over 40 years, the United States led the West in the struggle against communism and the threat it posed to our most precious values. ..." },
        { p: "That confrontation is now over. ... Eastern Europe is free. The Soviet Union itself is no more. This is a victory for democracy and freedom. It's a victory for the moral force of our values. ..." },
        { p: "New, independent nations have emerged out of the wreckage of the Soviet empire. Last weekend, these former Republics formed a Commonwealth of Independent States. This act marks the end of the old Soviet Union, signified today by Mikhail Gorbachev's decision to resign as President. ..." },
        { p: "Mikhail Gorbachev's revolutionary policies transformed the Soviet Union. His policies permitted the peoples of Russia and the other Republics to cast aside decades of oppression and establish the foundations of freedom." },
        { cite: "George H. W. Bush, President of the United States, Address to the Nation on the Commonwealth of Independent States, December 25, 1991. Public Papers, George H. W. Bush Presidential Library and Museum.", url: "https://www.bush41library.gov/digital-research-room/finding-aid/public-papers/address-nation-commonwealth-independent-states", kind: "primary" },
      ] },
    ],
  },
};

export default {
  forms: [
    { id: "w8a", name: "Unit 8 Assessment", group: "Unit 8: Cold War and Decolonization",
      items: [
        // ===== Set 1: Byrnes at Stuttgart =====
        { id: "w8a-m01", skill: "u8", type: "mcq", set: "w8a-s1", topic: "8.1", reasoning: "Contextualization",
          question: "Which of the following best describes the historical context of the speech?",
          choices: [
            "After the Second World War, Germany was divided into four occupation zones run by the United States, Britain, France, and the Soviet Union, and the wartime allies disagreed about its future.",
            "The Soviet Union had just built the Berlin Wall to stop East Germans from fleeing to the West.",
            "West Germany had just joined NATO, and the Soviet Union had answered by forming the Warsaw Pact.",
            "East and West Germany had just been reunified after the fall of communist rule in Eastern Europe.",
          ],
          why: [
            "Correct. By 1946 the four occupying powers could not agree on how to run Germany's economy, which is the failure of the \"Allied Control Council\" that Byrnes describes.",
            "The Berlin Wall went up in 1961, fifteen years after the speech.",
            "West Germany joined NATO in 1955, and no separate West German state existed in 1946.",
            "Reunification came in 1990, and Byrnes is describing an occupied Germany divided into zones.",
          ],
          answer: 0 },

        { id: "w8a-m02", skill: "u8", type: "mcq", set: "w8a-s1", topic: "8.2", reasoning: "Sourcing",
          question: "Byrnes's main purpose in the final paragraph of the excerpt is to",
          choices: [
            "assure Germans and warn the Soviet Union that the United States would keep its forces in Germany instead of leaving Europe as it had after the First World War",
            "announce that American forces would leave Germany as soon as a peace treaty was signed",
            "threaten the Soviet Union with immediate war unless it left its zone of Germany",
            "promise the Soviet Union a larger share of reparations from the western zones",
          ],
          why: [
            "Correct. \"We are not withdrawing. We are staying here\" told both Germans and Soviet leaders that the United States meant to stay involved in Europe for a long time.",
            "Byrnes says the opposite: security forces will \"remain in Germany for a long period.\"",
            "Byrnes speaks of keeping an occupation army, not of starting a war.",
            "The excerpt does not discuss reparations. It is about unifying the economy and keeping troops in Germany.",
          ],
          answer: 0 },

        { id: "w8a-m03", skill: "u8", type: "mcq", set: "w8a-s1", topic: "8.9", reasoning: "Causation",
          question: "The policy described in the third paragraph of the excerpt most directly contributed to which of the following?",
          choices: [
            "The division of Germany in 1949 into a Western-backed Federal Republic and a Soviet-backed German Democratic Republic",
            "The reparations that the Treaty of Versailles required Germany to pay after the First World War",
            "The withdrawal of all four occupying armies from Germany in 1947",
            "Détente, the easing of tensions between the superpowers in the 1970s",
          ],
          why: [
            "Correct. Joining the American and British zones, which France's zone later joined, laid the economic base for West Germany, and the Soviet zone became East Germany.",
            "The Versailles reparations date from 1919, a generation before this speech.",
            "Occupying forces stayed in Germany for decades, as Byrnes predicts in the last paragraph.",
            "Détente came a quarter century later, while merging the western zones deepened the East-West split.",
          ],
          answer: 0 },

        // ===== Set 2: The Southeast Asia Collective Defense Treaty =====
        { id: "w8a-m04", skill: "u8", type: "mcq", set: "w8a-s2", topic: "8.2", reasoning: "Contextualization",
          question: "Which of the following most directly provides the context for the treaty?",
          choices: [
            "France's defeat at Dien Bien Phu and the Geneva Accords of 1954, which divided Vietnam and left a communist government in the North",
            "The Soviet invasion of Afghanistan, which threatened American allies in South Asia",
            "Japan's occupation of Southeast Asia during the Second World War, which the treaty's members joined together to end",
            "The founding of the Association of Southeast Asian Nations, which the treaty replaced",
          ],
          why: [
            "Correct. The treaty was signed weeks after the Geneva conference, as the United States tried to stop communism from spreading beyond North Vietnam.",
            "The Soviet invasion of Afghanistan came in 1979, twenty-five years after the treaty.",
            "Japan's occupation ended in 1945, nine years before the treaty, which was aimed at \"communist aggression.\"",
            "The Association of Southeast Asian Nations was founded in 1967, after this treaty, and was not a Western-led military alliance.",
          ],
          answer: 0 },

        { id: "w8a-m05", skill: "u8", type: "mcq", set: "w8a-s2", topic: "8.2", reasoning: "Comparison",
          question: "Article IV of the treaty is most similar to which of the following?",
          choices: [
            "The North Atlantic Treaty's pledge that an armed attack against one member would be treated as an attack against all members",
            "The Non-Aligned Movement's refusal to join the military alliance of either superpower",
            "The Truman Doctrine's offer of economic and military aid to Greece and Turkey",
            "The United Nations General Assembly's declaration that colonized peoples had a right to independence",
          ],
          why: [
            "Correct. Both treaties set up collective defense, with each member agreeing that an attack on another member would endanger its own safety.",
            "The Non-Aligned Movement rejected the kind of bloc alliance that Article IV creates.",
            "The Truman Doctrine was a one-sided offer of aid, not a mutual defense pact among members.",
            "That declaration concerned decolonization, not military defense among allies.",
          ],
          answer: 0 },

        { id: "w8a-m06", skill: "u8", type: "mcq", set: "w8a-s2", topic: "8.9", reasoning: "Claims and evidence",
          question: "The \"Understanding of the United States of America\" in the excerpt best supports which of the following claims?",
          choices: [
            "The United States joined alliances in Asia mainly to contain communism, not to settle other regional conflicts, such as the one between Pakistan and India.",
            "The United States intended to defend former colonies against attempts by France and Britain to take them back.",
            "The United States wanted to stay neutral in the Cold War.",
            "The United States planned to fight the Soviet Union directly in Southeast Asia.",
          ],
          why: [
            "Correct. The United States limits its pledge to \"communist aggression,\" so a member such as Pakistan could not count on American help in a war with India.",
            "France and Britain were themselves members of the treaty, and the excerpt says nothing about defending colonies against them.",
            "Joining an alliance against \"communist aggression\" is the opposite of neutrality.",
            "The treaty pledges to \"meet the common danger\" in the treaty area. It does not plan a direct war with the Soviet Union, which the superpowers never fought.",
          ],
          answer: 0 },

        // ===== Set 3: Map of Cold War Latin America =====
        { id: "w8a-m07", skill: "u8", type: "mcq", set: "w8a-s3", topic: "8.4", reasoning: "Claims and evidence",
          question: "The map best supports which of the following claims about the spread of communism and other leftist movements in Latin America from 1954 to 1983?",
          choices: [
            "Leftist movements took power by revolution in a few states, but elected left-leaning governments in other states were overthrown by military coups.",
            "Communist parties won control of most of the largest states of South America by 1983.",
            "Leftist revolutions took place mainly in South America, far from the United States.",
            "After the Cuban Revolution of 1959, no other leftist movement in Latin America came to power.",
          ],
          why: [
            "Correct. The map shows revolutions bringing leftist governments to power in Cuba (1959) and Nicaragua (1979), and coups ousting elected left-leaning governments in Guatemala (1954), Brazil (1964), and Chile (1973).",
            "The map marks Brazil, the largest state in South America, and Chile as places where left-leaning governments were overthrown, not where communists took power.",
            "Both revolutions on the map, in Cuba and Nicaragua, took place in the Caribbean and Central America, close to the United States.",
            "The map shows a second leftist revolution in Managua, Nicaragua, in 1979.",
          ],
          answer: 0 },

        { id: "w8a-m08", skill: "u8", type: "mcq", set: "w8a-s3", topic: "8.3", reasoning: "Comparison",
          question: "The United States actions marked with an X on the map are most similar to which of the following?",
          choices: [
            "The Soviet invasions of Hungary in 1956 and Czechoslovakia in 1968, which ended governments the Soviet Union saw as a threat in its own sphere",
            "The British and French attack on Egypt in 1956, which aimed to take back control of the Suez Canal",
            "The Berlin airlift of 1948 and 1949, which supplied a blockaded city without fighting",
            "The Marshall Plan, which gave economic aid to rebuild western Europe after the Second World War",
          ],
          why: [
            "Correct. The map's X marks show the United States using or backing armed force in the Caribbean, its own sphere of influence, against governments it saw as communist, as the Soviet Union did in eastern Europe.",
            "Suez was an attempt by former colonial powers to regain a canal from a newly independent state, and the United States pressed them to withdraw; it was not a superpower acting in its own sphere against a communist threat.",
            "The airlift avoided the use of force, while the map marks invasions and armed landings.",
            "The Marshall Plan was economic aid, while the map marks invasions and armed landings.",
          ],
          answer: 0 },

        { id: "w8a-m09", skill: "u8", type: "mcq", set: "w8a-s3", topic: "8.4", reasoning: "Continuity and change",
          question: "Which of the following best describes a continuity shown on the map from 1954 to 1983?",
          choices: [
            "The United States repeatedly sent or backed armed forces in the Caribbean to stop or remove governments it feared were communist.",
            "Military coups against left-leaning governments took place only in Central America.",
            "The United States stopped using armed force in the region after the Cuban Missile Crisis of 1962.",
            "Leftist revolutions spread steadily south from Cuba until they reached Chile.",
          ],
          why: [
            "Correct. The map marks armed actions at the Bay of Pigs in 1961, in Santo Domingo in 1965, and in Grenada in 1983, so the pattern lasted more than two decades.",
            "The map marks coups in Brazil (1964) and Chile (1973), in South America.",
            "The map marks United States landings in Santo Domingo in 1965 and Grenada in 1983, after the Missile Crisis.",
            "Chile is marked for a coup that ousted a left-leaning government in 1973, not for a leftist revolution.",
          ],
          answer: 0 },

        // ===== Set 4: UN Security Council Resolution 418 =====
        { id: "w8a-m10", skill: "u8", type: "mcq", set: "w8a-s4", topic: "8.7", reasoning: "Contextualization",
          question: "Which of the following most directly provides the context for the \"acts of repression\" condemned in the resolution?",
          choices: [
            "The South African government's violent response to Black protest, including police shootings of students in the Soweto uprising of 1976 and the death of Steve Biko in police custody in 1977",
            "The release of Nelson Mandela from prison and the start of talks between the government and the African National Congress to end apartheid",
            "The founding of the African National Congress by Black lawyers, ministers, and chiefs to defend the rights of Black South Africans",
            "The passage of economic sanctions against South Africa by the United States Congress over the objections of the president",
          ],
          why: [
            "Correct. Police killings at Soweto and Biko's death in detention drew worldwide outrage and led directly to the mandatory arms embargo in 1977.",
            "Mandela was released in 1990, thirteen years after the resolution.",
            "The African National Congress was founded in 1912, long before the repression the resolution describes.",
            "Congress passed the Comprehensive Anti-Apartheid Act in 1986, nine years after the resolution.",
          ],
          answer: 0 },

        { id: "w8a-m11", skill: "u8", type: "mcq", set: "w8a-s4", topic: "8.6", reasoning: "Contextualization",
          question: "The resolution's reference to South African \"attacks against neighbouring independent States\" most likely refers to which of the following?",
          choices: [
            "South African military action against states in southern Africa that had recently won independence, such as its intervention in Angola as Angola won independence from Portugal in 1975",
            "The South African War of 1899 to 1902 between Britain and the Afrikaner republics",
            "South Africa's role in the Second World War as an ally of Britain",
            "The Rwandan genocide of 1994, in which Hutu extremists killed hundreds of thousands of Tutsi",
          ],
          why: [
            "Correct. As Portuguese rule ended in Angola in 1975, South Africa sent forces into the country and kept up cross-border raids against guerrilla bases there.",
            "That war took place before South Africa or its neighbors were independent states.",
            "South Africa's part in the Second World War was not an attack on its neighbors.",
            "The Rwandan genocide came seventeen years later and did not involve South Africa.",
          ],
          answer: 0 },

        { id: "w8a-m12", skill: "u8", type: "mcq", set: "w8a-s4", topic: "8.5", reasoning: "Comparison",
          question: "The struggle against apartheid that the resolution supported differed from most independence movements in Africa after 1945 in that it",
          choices: [
            "opposed a white minority government of an already independent state rather than rule by a European colonial power",
            "used only violent methods rather than strikes, boycotts, and protests",
            "received no support from the United Nations or other international organizations",
            "aimed mainly to create a communist economy rather than to win political rights",
          ],
          why: [
            "Correct. South Africa had been self-governing since the early 20th century, so its Black majority faced a minority government at home, not a colonial government in Europe.",
            "The anti-apartheid movement used boycotts, strikes, and mass protest as well as armed resistance.",
            "The resolution itself shows United Nations support for the movement.",
            "The movement's central goal was equal political rights and majority rule.",
          ],
          answer: 0 },

        // ===== Set 5: American deaths in Vietnam =====
        { id: "w8a-m13", skill: "u8", type: "mcq", set: "w8a-s5", topic: "8.3", reasoning: "Causation",
          question: "The change in the number of deaths from 1964 to 1968 shown in the table is best explained by which of the following?",
          choices: [
            "After the Gulf of Tonkin Resolution, President Lyndon Johnson sent more than 500,000 American troops to defend South Vietnam against communist forces.",
            "After the French defeat at Dien Bien Phu, the United States took over France's colonial government in Vietnam.",
            "The United States invaded and occupied North Vietnam in order to reunify the country.",
            "The Soviet Union sent its own combat troops to fight American forces in South Vietnam.",
          ],
          why: [
            "Correct. American combat troops began arriving in 1965, and their number passed 500,000 by 1968, so deaths rose sharply.",
            "The French defeat came in 1954, and the United States backed an independent South Vietnamese government rather than ruling Vietnam as a colony.",
            "American ground forces never invaded and occupied North Vietnam.",
            "The Soviet Union supplied weapons and advisers to North Vietnam but did not send combat troops to fight Americans.",
          ],
          answer: 0 },

        { id: "w8a-m14", skill: "u8", type: "mcq", set: "w8a-s5", topic: "8.3", reasoning: "Continuity and change",
          question: "The trend in the table from 1969 to 1973 most directly reflects which of the following?",
          choices: [
            "President Richard Nixon's policy of Vietnamization, which withdrew American troops and shifted the fighting to South Vietnamese forces until the Paris Peace Accords of 1973",
            "The victory of North Vietnam and the fall of Saigon, which ended the war",
            "The success of the American bombing campaign in forcing North Vietnam to surrender",
            "An agreement between the United States and the Soviet Union to divide Vietnam into two states",
          ],
          why: [
            "Correct. Nixon took office in 1969 and steadily brought troops home, and the last American combat forces left after the 1973 peace accords.",
            "Saigon fell in 1975, after the period of decline shown in the table.",
            "North Vietnam never surrendered, and it won the war in 1975.",
            "Vietnam was divided by the Geneva Accords of 1954, not by a superpower agreement in this period.",
          ],
          answer: 0 },

        { id: "w8a-m15", skill: "u8", type: "mcq", set: "w8a-s5", topic: "8.5", reasoning: "Continuity and change",
          question: "The war shown in the table is best understood as a continuation of which earlier conflict?",
          choices: [
            "The war that Vietnamese nationalists and communists led by Ho Chi Minh fought against French colonial rule from 1946 to 1954",
            "The Korean War of 1950 to 1953 between North Korea and South Korea",
            "The Chinese Civil War between the Communists and the Nationalists",
            "The Boxer Rebellion against foreign influence in China in 1900",
          ],
          why: [
            "Correct. After the Viet Minh defeated France, Vietnam was split at Geneva, and the fight to unite the country under Ho Chi Minh's government continued against South Vietnam and the United States.",
            "The Korean War was a separate Cold War conflict on another peninsula.",
            "The Chinese Civil War ended in 1949, and China later aided North Vietnam, but the Vietnam War grew out of Vietnam's own anticolonial struggle.",
            "The Boxer Rebellion took place in China more than half a century earlier.",
          ],
          answer: 0 },

        // ===== SAQ 1: Bush on the end of the Soviet Union =====
        { id: "w8a-q1a", skill: "u8", type: "fr", set: "w8a-s6", part: "SAQ 1", sub: "a", topic: "8.8",
          lead: "Use the source below to answer all parts of the question that follows.",
          prompt: "Identify ONE development in the period 1985 to 1991 that led to what Bush calls \"the end of the old Soviet Union.\"",
          earns: "The point goes to a specific, accurate development from 1985 to 1991 that helped bring about the breakup of the Soviet Union.",
          yes: [
            "Gorbachev's policy of glasnost (openness) allowed open criticism of the Communist Party.",
            "Nationalist movements in the Baltic republics of Lithuania, Latvia, and Estonia demanded independence.",
            "Hard-line communists tried and failed to overthrow Gorbachev in a coup in August 1991.",
          ],
          no: [
            "\"Gorbachev resigned.\" The source already names this, and it marked the end rather than causing it.",
            "\"The Cuban Missile Crisis.\" This came in 1962, outside the period.",
            "\"Communism was bad.\" This is an opinion, not a development.",
          ],
          example: "Under perestroika, Gorbachev loosened central control of the Soviet economy, but shortages grew worse, which weakened support for the Communist Party.",
          notExample: "The Soviet Union ended because the Cold War was over." },

        { id: "w8a-q1b", skill: "u8", type: "fr", set: "w8a-s6", part: "SAQ 1", sub: "b", topic: "8.8",
          lead: "Use the source below to answer all parts of the question that follows.",
          prompt: "Describe ONE way Bush's position as President of the United States shaped how he explains the end of the Cold War in the source.",
          earns: "The point goes to a response that ties Bush's role, audience, or purpose to a specific feature of how he presents the end of the Cold War.",
          yes: [
            "As the American president speaking to Americans, Bush presents the end of the Cold War as \"a victory for democracy and freedom\" won by the United States and its \"values.\"",
            "Because he is a leader who must work with the new governments, Bush praises Gorbachev's \"revolutionary policies,\" which supports good relations with Moscow and the new states.",
            "As a Cold War president, Bush describes the conflict as a moral struggle in which American values won.",
          ],
          no: [
            "\"Bush was the president.\" This states his position but does not describe how it shaped the source.",
            "\"Bush says the Soviet Union is no more.\" This restates the source without connecting it to his point of view.",
            "\"Bush was against the Soviet Union because he was a Democrat.\" This is inaccurate; Bush was a Republican.",
          ],
          example: "Because Bush is the American president addressing the nation on Christmas, he frames the collapse of the Soviet Union as \"a victory for democracy and freedom\" that every American can be proud of, which presents the United States as the winner of the Cold War.",
          notExample: "Bush gave a speech about the Soviet Union in 1991." },

        { id: "w8a-q1c", skill: "u8", type: "fr", set: "w8a-s6", part: "SAQ 1", sub: "c", topic: "8.8",
          lead: "Use the source below to answer all parts of the question that follows.",
          prompt: "Explain ONE way a historian could use evidence from the period 1989 to 2000 to challenge Bush's claim that the end of the Cold War was \"a victory for democracy and freedom.\"",
          earns: "The point goes to an accurate, specific development and an explanation of how it shows that the end of the Cold War did not bring democracy or freedom everywhere.",
          yes: [
            "Several former Soviet republics, such as Belarus and Turkmenistan, came under authoritarian rulers in the 1990s, so the breakup of the Soviet Union did not always bring democracy.",
            "China's government crushed the Tiananmen Square protests in 1989 and stayed under one-party Communist rule, so communism did not end everywhere.",
            "The breakup of Yugoslavia in the 1990s led to wars and ethnic cleansing in Bosnia, which shows that the end of communist rule also brought violence.",
          ],
          no: [
            "\"Not everyone became free.\" This is too vague to count as evidence.",
            "\"Eastern Europe held free elections.\" This supports Bush's claim instead of challenging it.",
            "\"Belarus.\" This names a place but does not explain how it challenges the claim.",
          ],
          example: "After 1991, Russia fought a brutal war in Chechnya from 1994 to 1996 to stop the region from breaking away. This challenges Bush's claim because the end of the Soviet Union led to new wars and the use of force against civilians, not only to freedom.",
          notExample: "Bush was wrong because the Cold War was bad." },

        // ===== SAQ 2: no source =====
        { id: "w8a-q2a", skill: "u8", type: "fr", part: "SAQ 2", sub: "a", topic: "8.1",
          lead: "Answer all parts of the question that follows.",
          prompt: "Identify ONE way the world wars weakened European colonial empires.",
          earns: "The point goes to a specific, accurate way the First or Second World War reduced Europe's ability or will to hold its colonies.",
          yes: [
            "The Second World War left Britain deeply in debt and unable to afford to hold India by force.",
            "Japan's conquest of British, French, and Dutch colonies in Southeast Asia, such as the fall of Singapore in 1942, showed that European powers could be defeated.",
            "Millions of colonial soldiers, including more than two million Indians in the Second World War, fought for the empires and returned home expecting more rights.",
          ],
          no: [
            "\"The wars were very expensive.\" This does not connect the cost to the empires.",
            "\"The United States became a superpower.\" This is true but does not say how the empires were weakened.",
            "\"Germany lost its colonies in Africa after the Second World War.\" Germany lost its colonies after the First World War, and they passed to other powers as League of Nations mandates.",
          ],
          example: "The Second World War drained Britain's money and military strength, so it could no longer afford to keep India under control and agreed to independence in 1947.",
          notExample: "The wars changed the world." },

        { id: "w8a-q2b", skill: "u8", type: "fr", part: "SAQ 2", sub: "b", topic: "8.5",
          lead: "Answer all parts of the question that follows.",
          prompt: "Describe ONE reason some colonies in Africa or Asia won independence only through armed struggle.",
          earns: "The point goes to a specific reason, tied to an accurate example, that a colonial power or settler population refused to give up control peacefully.",
          yes: [
            "In Algeria, about a million European settlers and a French government that treated Algeria as part of France refused to give up control, so the National Liberation Front fought a war from 1954 to 1962.",
            "In Kenya, white settlers held the best farmland in the highlands, and British refusal to return it helped lead to the Mau Mau uprising of the 1950s.",
            "Portugal's dictatorship refused to give up its colonies, so Angola and Mozambique fought long wars until a 1974 revolution in Portugal ended its empire.",
          ],
          no: [
            "\"Because they wanted freedom.\" Every independence movement wanted freedom, so this does not explain why some had to fight.",
            "\"India fought a war against Britain to win independence.\" India won independence mainly through mass protest and negotiation.",
            "\"Because of the Cold War.\" This names a context without describing how it led to armed struggle.",
          ],
          example: "In Algeria, a large population of French settlers did not want to lose their land and power, and France claimed Algeria as part of France itself, so Algerian nationalists turned to a war of independence that lasted from 1954 to 1962.",
          notExample: "Some countries had wars and some did not." },

        { id: "w8a-q2c", skill: "u8", type: "fr", part: "SAQ 2", sub: "c", topic: "8.6",
          lead: "Answer all parts of the question that follows.",
          prompt: "Explain ONE way decolonization changed patterns of migration in the period 1945 to 1990.",
          earns: "The point goes to an accurate migration that came from decolonization and an explanation of why decolonization caused it.",
          yes: [
            "The partition of British India in 1947 led millions of Hindus and Sikhs to move to India and millions of Muslims to move to Pakistan, because each group feared violence as a minority in the other state.",
            "Many people from former British colonies in South Asia and the Caribbean moved to Britain after 1945, because their colonial ties gave them a right to enter and Britain needed workers.",
            "After Algeria won independence in 1962, most of its European settlers left for France, because they no longer held power and feared reprisals.",
          ],
          no: [
            "\"People moved to Europe.\" This does not name who moved or explain why.",
            "\"Millions of people migrated during partition.\" This identifies a migration but does not explain how decolonization caused it.",
            "\"Europeans moved to Africa to rule colonies.\" This describes migration under colonialism, not after it ended.",
          ],
          example: "After independence, many people from former colonies moved to the countries that had ruled them, such as Algerians to France and Indians and Pakistanis to Britain. Decolonization caused this because colonial rule had left language and citizenship ties, and the former colonial powers recruited workers to rebuild their economies after the Second World War.",
          notExample: "Decolonization made people move." },

        // ===== Section II: Long essay =====
        { id: "w8a-leq", skill: "u8", type: "essay", kind: "leq", topic: "8.3", reasoning: "Comparison",
          prompt: "In the period 1945 to 1991, the United States and the Soviet Union each tried to extend its influence in Asia, Africa, and Latin America. Develop an argument that evaluates the extent to which the methods the United States and the Soviet Union used to extend their influence in these regions were similar.",
          rows: [
            { name: "Thesis/Claim", max: 1, levels: [
              "0 points: restates the prompt, gives no claim, or makes a claim that is not historically defensible, such as \"only the Soviet Union interfered in other countries.\"",
              "1 point: makes a historically defensible claim about how similar the superpowers' methods were that sets up a line of reasoning, for example that both used economic aid, arms, and proxy wars, but that the United States more often backed anti-communist rulers while the Soviet Union backed revolutionary movements.",
            ] },
            { name: "Contextualization", max: 1, levels: [
              "0 points: gives no context, or only a phrase such as \"during the Cold War.\"",
              "1 point: describes a broader context relevant to the prompt, for example how the end of European empires after the Second World War created dozens of new states, and how nuclear weapons made direct war between the superpowers too dangerous, so their rivalry moved to the developing world.",
            ] },
            { name: "Evidence", max: 2, levels: [
              "0 points: gives no specific evidence relevant to superpower methods in Asia, Africa, or Latin America.",
              "1 point: names at least two specific examples relevant to the topic, such as the 1953 coup in Iran and Soviet funding of the Aswan High Dam.",
              "2 points: uses specific and relevant examples of both superpowers' methods to support an argument about similarity and difference.",
            ] },
            { name: "Analysis and Reasoning", max: 2, levels: [
              "0 points: describes actions of each superpower without comparing them.",
              "1 point: uses comparison to frame the argument, explaining at least one similarity or difference between American and Soviet methods.",
              "2 points: shows a complex understanding, for example by explaining both similarities and differences, by explaining why the methods differed (the United States defending existing governments and markets, the Soviet Union backing anticolonial revolution), or by showing that newly independent states used superpower rivalry to win aid from both sides.",
            ] },
          ],
          evidence: [
            "The United States fought the Korean War (1950 to 1953) and the Vietnam War, sending more than 500,000 troops to Vietnam by 1968.",
            "The Soviet Union invaded Afghanistan in 1979 to prop up a communist government and fought there until 1989.",
            "The United States backed covert operations that overthrew Mohammad Mosaddegh in Iran (1953) and Jacobo Árbenz in Guatemala (1954).",
            "The Soviet Union placed nuclear missiles in Cuba in 1962, leading to the Cuban Missile Crisis.",
            "The United States formed regional alliances such as the Southeast Asia Treaty Organization (SEATO) in 1954.",
            "The United States offered economic aid through programs such as the Alliance for Progress (1961) in Latin America and sent volunteers abroad through the Peace Corps.",
            "The Soviet Union agreed in 1958 to help finance the Aswan High Dam in Egypt after the United States withdrew its offer.",
            "The Soviet Union and Cuba backed the MPLA in Angola's civil war after 1975, while the United States and South Africa backed its rivals.",
            "The United States armed the mujahideen in Afghanistan and the Contras in Nicaragua in the 1980s.",
            "The United States supported anti-communist dictators such as Mobutu Sese Seko in Zaire and Augusto Pinochet in Chile.",
            "The Soviet Union trained students from Asia, Africa, and Latin America at Patrice Lumumba Peoples' Friendship University in Moscow, founded in 1960.",
            "India and Egypt took part in the Non-Aligned Movement and accepted aid from both superpowers.",
          ],
          model: "Thesis: The United States and the Soviet Union used very similar tools to win influence in Asia, Africa, and Latin America, including economic aid, weapons for proxy forces, and at times direct military intervention, but they differed in whom they supported, since the United States usually defended existing anti-communist governments while the Soviet Union backed revolutionary and anticolonial movements. Outline: (1) Context: decolonization after 1945 created many new states, and the danger of nuclear war pushed superpower rivalry into these regions. (2) Similarity in aid and arms: the United States offered the Alliance for Progress and the Peace Corps, while the Soviet Union funded the Aswan High Dam and trained students in Moscow; both sold or gave weapons to allies. (3) Similarity in proxy and direct war: the United States fought in Korea and Vietnam and armed the Contras and the Afghan mujahideen, while the Soviet Union invaded Afghanistan and, with Cuba, backed the MPLA in Angola. (4) Difference: the United States backed coups in Iran and Guatemala and supported dictators such as Mobutu and Pinochet to stop leftist reform, while the Soviet Union presented itself as the friend of anticolonial revolution. (5) Complexity: nonaligned states such as India and Egypt played the superpowers against each other, which shows that both sides' methods depended on the choices of local leaders.",
        },
      ] },
  ],
};
