// AP World History: Modern, Unit 9 (Globalization) unit assessment, form w9a.
// Every stimulus is new: none of these documents or data tables appears in the Unit 9 review bank.
import { maps } from "../whap/maps.js";
export const sets = {
  "w9a-s1": {
    id: "w9a-s1", name: "The last cases of smallpox, 1971 to 1977", intro: "Use the map below to answer the questions that follow.", label: "Map",
    sources: [
      { title: "Map", blocks: [
        { svg: maps["u9-smallpox"], caption: "The last cases of smallpox in each region, 1971 to 1977, and the headquarters of the World Health Organization" },
        { cite: "Map drawn for this review from Natural Earth land outlines (public domain). Places and dates checked against Frank Fenner and others, Smallpox and Its Eradication (World Health Organization, 1988), and Centers for Disease Control, \"Smallpox Surveillance, Worldwide,\" MMWR (1978, reprinted 1999).", kind: "map" },
      ] },
    ],
  },
  "w9a-s2": {
    id: "w9a-s2", name: "Carbon dioxide, 1970 to 2023", intro: "Use the table below to answer the questions that follow.",
    sources: [
      { title: "Source", blocks: [
        { p: "Carbon dioxide in the atmosphere and carbon dioxide emissions, selected years. The first column gives the yearly average concentration of carbon dioxide measured at Mauna Loa, Hawaii, in parts per million (ppm). The other columns give carbon dioxide emissions in millions of metric tons." },
        { table: {
          head: ["Year", "Concentration at Mauna Loa (ppm)", "World emissions", "China", "United States", "India"],
          rows: [
            ["1970", "325.68", "15,751", "912", "4,595", "213"],
            ["1990", "354.45", "22,660", "2,414", "4,984", "601"],
            ["2000", "369.71", "25,695", "3,648", "5,929", "997"],
            ["2010", "390.10", "33,969", "9,106", "5,521", "1,730"],
            ["2023", "421.08", "39,113", "13,021", "4,618", "3,015"],
          ],
        } },
        { cite: "Concentration: National Oceanic and Atmospheric Administration (NOAA), Global Monitoring Laboratory, \"Mauna Loa CO2 annual mean data\" (co2_annmean_mlo.txt), annual mean carbon dioxide as a mole fraction in dry air, in ppm, file created October 5, 2024.", url: "https://gml.noaa.gov/webdata/ccgg/trends/co2/co2_annmean_mlo.txt", kind: "data" },
        { cite: "Emissions: World Bank, World Development Indicators, \"Carbon dioxide (CO2) emissions (total) excluding LULUCF (Mt CO2e)\" (indicator EN.GHG.CO2.MT.CE.AR5), data last updated October 8, 2026. Figures rounded to the nearest million metric tons.", url: "https://api.worldbank.org/v2/country/CHN;USA;IND;WLD/indicator/EN.GHG.CO2.MT.CE.AR5?format=json&date=1970:2023&per_page=1000", kind: "data" },
      ] },
    ],
  },
  "w9a-s3": {
    id: "w9a-s3", name: "The United Nations Charter, 1945", intro: "Use the source below to answer the questions that follow.",
    sources: [
      { title: "Source", blocks: [
        { p: "WE THE PEOPLES OF THE UNITED NATIONS DETERMINED" },
        { p: "to save succeeding generations from the scourge of war, which twice in our lifetime has brought untold sorrow to mankind, and" },
        { p: "to reaffirm faith in fundamental human rights, in the dignity and worth of the human person, in the equal rights of men and women and of nations large and small, and" },
        { p: "to establish conditions under which justice and respect for the obligations arising from treaties and other sources of international law can be maintained, and" },
        { p: "to promote social progress and better standards of life in larger freedom," },
        { p: "AND FOR THESE ENDS" },
        { p: "... to unite our strength to maintain international peace and security, and ..." },
        { p: "to employ international machinery for the promotion of the economic and social advancement of all peoples," },
        { p: "HAVE RESOLVED TO COMBINE OUR EFFORTS TO ACCOMPLISH THESE AIMS." },
        { cite: "United Nations, Charter of the United Nations, Preamble, signed at San Francisco, June 26, 1945.", url: "https://www.un.org/en/about-us/un-charter/full-text", kind: "primary" },
      ] },
    ],
  },
  "w9a-s4": {
    id: "w9a-s4", name: "Clinton on China and the WTO, 2000", intro: "Use the source below to answer the questions that follow.",
    sources: [
      { title: "Source", blocks: [
        { p: "By joining the WTO, China is not simply agreeing to import more of our products; it is agreeing to import one of democracy's most cherished values, economic freedom. The more China liberalizes its economy, the more fully it will liberate the potential of its people, their initiative, their imagination, their remarkable spirit of enterprise. And when individuals have the power not just to dream but to realize their dreams, they will demand a greater say. ..." },
        { p: "In the new century, liberty will spread by cell phone and cable modem. ... When China joins the WTO, by 2005, it will eliminate tariffs on information technology products, making the tools of communication even cheaper, better, and more widely available. ..." },
        { p: "Now, there's no question China has been trying to crackdown on the Internet. ... That's sort of like trying to nail Jell-O to the wall. ... But I would argue to you that their effort to do that just proves how real these changes are and how much they threaten the status quo." },
        { cite: "William J. Clinton, President of the United States, \"Remarks at the Paul H. Nitze School of Advanced International Studies,\" Washington, D.C., March 8, 2000, in Public Papers of the Presidents of the United States: William J. Clinton (2000, Book I).", url: "https://www.govinfo.gov/content/pkg/PPP-2000-book1/html/PPP-2000-book1-doc-pg404.htm", kind: "primary" },
      ] },
    ],
  },
  "w9a-s5": {
    id: "w9a-s5", name: "Internet use, 2005 to 2023", intro: "Use the table below to answer the questions that follow.",
    sources: [
      { title: "Source", blocks: [
        { p: "Individuals using the Internet, as a percentage of the population" },
        { table: {
          head: ["Country or group", "2005", "2010", "2015", "2020", "2023"],
          rows: [
            ["World", "15.6", "28.4", "39.9", "60.1", "69.2"],
            ["High-income countries", "52.9", "69.0", "78.3", "88.4", "91.9"],
            ["Low-income countries", "1.0", "4.3", "7.9", "17.6", "22.0"],
            ["Sub-Saharan Africa", "2.0", "6.0", "16.2", "26.7", "32.3"],
            ["China", "8.5", "34.3", "50.3", "70.1", "90.6"],
            ["India", "2.4", "7.5", "14.9", "43.4", "60.3"],
          ],
        } },
        { cite: "World Bank, World Development Indicators, \"Individuals using the Internet (% of population)\" (indicator IT.NET.USER.ZS), data last updated October 8, 2026. Figures rounded to one decimal place.", url: "https://api.worldbank.org/v2/country/WLD;HIC;LMC;LIC;SSF;CHN;IND/indicator/IT.NET.USER.ZS?format=json&date=1995:2024&per_page=1000", kind: "data" },
      ] },
    ],
  },
  "w9a-s6": {
    id: "w9a-s6", name: "Convention against racial discrimination, 1965", intro: "Use the source below to answer all parts of the question that follows.",
    sources: [
      { title: "Source", blocks: [
        { p: "The States Parties to this Convention, ..." },
        { p: "Convinced that any doctrine of superiority based on racial differentiation is scientifically false, morally condemnable, socially unjust and dangerous, and that there is no justification for racial discrimination, in theory or in practice, anywhere, ..." },
        { p: "Alarmed by manifestations of racial discrimination still in evidence in some areas of the world and by governmental policies based on racial superiority or hatred, such as policies of apartheid, segregation or separation," },
        { p: "Resolved to adopt all necessary measures for speedily eliminating racial discrimination in all its forms and manifestations, and to prevent and combat racist doctrines and practices in order to promote understanding between races and to build an international community free from all forms of racial segregation and racial discrimination, ..." },
        { cite: "United Nations General Assembly, International Convention on the Elimination of All Forms of Racial Discrimination, Preamble, adopted by resolution 2106 (XX), December 21, 1965. Text as reproduced by the University of Minnesota Human Rights Library.", url: "https://hrlibrary.umn.edu/instree/d1cerd.htm", kind: "primary" },
      ] },
    ],
  },
};

export default {
  forms: [
    { id: "w9a", name: "Unit 9 Assessment", group: "Unit 9: Globalization",
      items: [
        // Set 1: The last cases of smallpox (map)
        { id: "w9a-m01", skill: "u9", type: "mcq", set: "w9a-s1", topic: "9.2", reasoning: "Developments and processes",
          question: "The map best illustrates which of the following developments of the period after 1945?",
          choices: [
            "An international campaign coordinated by the World Health Organization ended smallpox one region at a time, until the last natural case in 1977.",
            "Smallpox spread to new regions of the world along air travel routes in the 1970s.",
            "Smallpox disappeared first from Africa and last from the Americas.",
            "New antibiotics allowed doctors in each region to cure smallpox after it had spread.",
          ],
          why: [
            "Correct. The map marks the last case in each region, from Brazil in 1971 to Somalia in 1977, and the WHO in Geneva ran the campaign that found cases and vaccinated the people around them. Smallpox was declared eradicated in 1980.",
            "The map shows where smallpox ended, not where it spread, and each place is the last case in its region.",
            "The map shows the reverse: the last case in the Americas was in Brazil in 1971, and the last cases in the world were in Ethiopia and Somalia in 1976 and 1977.",
            "Smallpox is caused by a virus, which antibiotics do not kill; it was ended by vaccination.",
          ],
          answer: 0 },
        { id: "w9a-m02", skill: "u9", type: "mcq", set: "w9a-s1", topic: "9.2", reasoning: "Causation",
          question: "Which of the following best explains why the last cases shown on the map were in Ethiopia and Somalia?",
          choices: [
            "Few roads, herding families who moved often, and war between the two countries made it hard to find every case and vaccinate the people around it.",
            "Ethiopia and Somalia refused to allow vaccination teams from the World Health Organization to enter.",
            "No vaccine against smallpox existed until the campaign reached East Africa in the 1970s.",
            "Smallpox first reached East Africa in the 1970s, carried by travelers from South Asia.",
          ],
          why: [
            "Correct. In the Horn of Africa many people were nomadic herders far from roads, and fighting in the Ogaden region in 1977 disrupted the work, so the disease lasted there after it was gone from Asia.",
            "Both governments took part in the campaign, which is how the last cases were found and recorded.",
            "Edward Jenner developed a smallpox vaccine in 1796, and the same kind of vaccine was used everywhere on the map.",
            "Smallpox had been present in Africa for centuries; the map shows where it ended, not where it arrived.",
          ],
          answer: 0 },
        { id: "w9a-m03", skill: "u9", type: "mcq", set: "w9a-s1", topic: "9.2", reasoning: "Contextualization",
          question: "The campaign whose results the map shows is best understood in the context of which of the following?",
          choices: [
            "Cooperation through a United Nations agency during the Cold War, when both the United States and the Soviet Union supplied vaccine and experts",
            "The League of Nations' efforts to control disease in the years between the two world wars",
            "Vaccination programs run by European colonial governments in their African and Asian empires",
            "The response to the HIV/AIDS epidemic, which led governments to build new clinics in Africa and Asia",
          ],
          why: [
            "Correct. The WHO, a UN agency based in Geneva, ran the campaign, and the two Cold War rivals both supported it; the Soviet Union donated much of the vaccine.",
            "The League of Nations had ended by 1946, decades before the cases on the map.",
            "By the 1970s Indonesia, Bangladesh, Ethiopia, Somalia, and Brazil were all independent, so their own governments worked with the WHO.",
            "HIV/AIDS was first identified in 1981, after the last case of smallpox shown on the map.",
          ],
          answer: 0 },

        // Set 2: Carbon dioxide table
        { id: "w9a-m04", skill: "u9", type: "mcq", set: "w9a-s2", topic: "9.3", reasoning: "Causation",
          question: "Which of the following best explains the change in China's emissions between 2000 and 2010 shown in the table?",
          choices: [
            "Rapid industrialization, powered largely by coal, after China opened its economy to foreign investment and world trade",
            "The backyard steel furnaces built during the Great Leap Forward",
            "The collectivization of farmland under Mao Zedong",
            "Population growth caused by the end of the one-child policy",
          ],
          why: [
            "Correct. After the market reforms that began under Deng Xiaoping and China's entry into the World Trade Organization in 2001, Chinese factories expanded quickly and burned large amounts of coal, so emissions more than doubled.",
            "The Great Leap Forward took place from 1958 to 1962, decades before the change shown between 2000 and 2010.",
            "Collectivization took place in the 1950s and did not cause the jump in industrial emissions after 2000.",
            "The one-child policy ended in 2015, after the period in question, and China's population grew only slowly between 2000 and 2010.",
          ],
          answer: 0 },
        { id: "w9a-m05", skill: "u9", type: "mcq", set: "w9a-s2", topic: "9.3", reasoning: "Claims and evidence in sources",
          question: "Which of the following claims is best supported by the data in the table?",
          choices: [
            "The concentration of carbon dioxide in the atmosphere rose in every period shown as world emissions grew.",
            "Emissions from the United States rose in every period shown.",
            "India produced more emissions than the United States by 2023.",
            "China produced more emissions than the United States in every year shown.",
          ],
          why: [
            "Correct. World emissions rose from 15,751 to 39,113 million metric tons, and the concentration at Mauna Loa rose in every period, from 325.68 to 421.08 ppm.",
            "United States emissions peaked in 2000 at 5,929 and were lower in 2010 and 2023.",
            "In 2023 India emitted 3,015 million metric tons, less than the 4,618 emitted by the United States.",
            "China emitted less than the United States in 1970, 1990, and 2000, and passed it only by 2010.",
          ],
          answer: 0 },
        { id: "w9a-m06", skill: "u9", type: "mcq", set: "w9a-s2", topic: "9.4", reasoning: "Comparison",
          question: "Which of the following best explains the difference between the change in China's emissions and the change in United States emissions from 2000 to 2023?",
          choices: [
            "Manufacturing for world markets grew rapidly in China, while the United States economy depended more on services and shifted some electricity production away from coal.",
            "China returned to a fully state-planned economy, while the United States ended almost all of its manufacturing.",
            "The population of the United States fell sharply, while the population of China doubled.",
            "China joined international climate agreements, while the United States never took part in any.",
          ],
          why: [
            "Correct. Many factories that produce goods for export were located in China, while the United States lost manufacturing jobs, grew its service sector, and replaced much of its coal power with natural gas and renewable energy.",
            "China moved away from central planning after the late 1970s, and the United States still has large manufacturing industries.",
            "The United States population grew between 2000 and 2023, and China's population grew only slightly.",
            "The United States joined the Paris Agreement in 2016, so the claim that it never took part is false, and climate agreements do not explain why China's emissions rose.",
          ],
          answer: 0 },

        // Set 3: United Nations Charter
        { id: "w9a-m07", skill: "u9", type: "mcq", set: "w9a-s3", topic: "9.8", reasoning: "Contextualization",
          question: "The Charter's reference to war that \"twice in our lifetime has brought untold sorrow to mankind\" most directly reflects which of the following contexts?",
          choices: [
            "The Allied powers wanted a new organization because the League of Nations had failed to prevent a second world war.",
            "The Soviet Union's first test of an atomic bomb had started a nuclear arms race.",
            "Newly independent African states demanded a voice in world affairs.",
            "The collapse of the gold standard had spread an economic depression around the world.",
          ],
          why: [
            "Correct. The Charter was signed in June 1945, at the end of the Second World War, by states that hoped to build a stronger body than the League of Nations, which had not stopped the aggression of the 1930s.",
            "The Soviet Union first tested an atomic bomb in 1949, four years after the Charter was signed.",
            "Most African states won independence after 1957, more than ten years after the Charter was signed, and only a few, such as Egypt, Ethiopia, and Liberia, took part in writing it.",
            "The Great Depression shaped the 1930s, but the phrase refers to the two world wars, not to an economic crisis.",
          ],
          answer: 0 },
        { id: "w9a-m08", skill: "u9", type: "mcq", set: "w9a-s3", topic: "9.5", reasoning: "Making connections",
          question: "In the decades after 1945, the Charter's support for \"the equal rights of men and women and of nations large and small\" was most directly used by which of the following groups to support their demands?",
          choices: [
            "Anticolonial leaders who argued that colonized peoples had a right to govern themselves",
            "European governments that wanted to keep their overseas colonies",
            "Fascist parties that wanted to restore the governments of the 1930s",
            "Supporters of the Bretton Woods system who wanted fixed exchange rates",
          ],
          why: [
            "Correct. Leaders of independence movements in Asia and Africa pointed to the UN's promise of equal rights for all nations, and in 1960 the General Assembly declared that colonial rule should end.",
            "Colonial powers were defending their empires, which went against the principle of equal rights for nations \"large and small.\"",
            "Fascist parties rejected human rights and equality, so they would not have used this principle.",
            "The Bretton Woods system dealt with currencies and loans, not with equal rights for peoples and nations.",
          ],
          answer: 0 },
        { id: "w9a-m09", skill: "u9", type: "mcq", set: "w9a-s3", topic: "9.8", reasoning: "Continuity and change",
          question: "The goal \"to employ international machinery for the promotion of the economic and social advancement of all peoples\" is best reflected in the later work of which of the following?",
          choices: [
            "United Nations agencies such as the World Health Organization and UNICEF, which ran health and child welfare programs in many countries",
            "The North Atlantic Treaty Organization, which created a military alliance among the United States and Western European states",
            "The Warsaw Pact, which joined the Soviet Union and the communist states of Eastern Europe",
            "The Organization of the Petroleum Exporting Countries, which coordinated oil policy to raise its members' income",
          ],
          why: [
            "Correct. The WHO (1948) and UNICEF (1946) are parts of the UN system that worked across borders on vaccination, disease control, nutrition, and children's health.",
            "NATO was a Cold War military alliance, not an agency for the social advancement of all peoples.",
            "The Warsaw Pact was a military alliance of the Soviet bloc, not a body for worldwide economic and social progress.",
            "OPEC worked for the benefit of its own member states, not for \"all peoples,\" and it is not part of the United Nations.",
          ],
          answer: 0 },

        // Set 4: Clinton on China and the WTO
        { id: "w9a-m10", skill: "u9", type: "mcq", set: "w9a-s4", topic: "9.4", reasoning: "Causation",
          question: "Which of the following developments most directly made China's planned entry into the World Trade Organization possible?",
          choices: [
            "The market reforms that Deng Xiaoping began in the late 1970s, which opened China to foreign investment and trade",
            "The Cultural Revolution, which attacked people accused of supporting capitalism",
            "The breakup of the Soviet Union into fifteen independent states",
            "The Japanese occupation of Manchuria in the 1930s",
          ],
          why: [
            "Correct. Deng's reforms, such as special economic zones that welcomed foreign companies, turned China into a major trading economy that could seek membership in the WTO.",
            "The Cultural Revolution (1966 to 1976) closed China off from the world economy, the opposite of the opening that WTO membership required.",
            "The Soviet breakup in 1991 changed Cold War politics but did not reform China's economy.",
            "The Japanese occupation of Manchuria was decades earlier and did not lead to China's economic opening.",
          ],
          answer: 0 },
        { id: "w9a-m11", skill: "u9", type: "mcq", set: "w9a-s4", topic: "9.4", reasoning: "Sourcing and situation",
          question: "Clinton's purpose in the excerpt was most likely to",
          choices: [
            "persuade Americans, including members of Congress, that normal trade with China would serve both American economic interests and the spread of freedom",
            "warn the Chinese government that the United States would raise tariffs on Chinese goods unless China opened its markets",
            "announce a military alliance between the United States and China against the Soviet Union and its allies in Asia",
            "criticize the World Trade Organization for lowering trade barriers too quickly and putting American workers at risk",
          ],
          why: [
            "Correct. In 2000 Clinton was asking Congress to approve permanent normal trade relations with China, and the excerpt argues that trade would bring both markets for \"our products\" and political change.",
            "Clinton describes China lowering its own tariffs and does not threaten new American tariffs.",
            "The Soviet Union had broken up in 1991, nine years before this speech.",
            "Clinton praises the effects of joining the WTO rather than criticizing the organization.",
          ],
          answer: 0 },
        { id: "w9a-m12", skill: "u9", type: "mcq", set: "w9a-s4", topic: "9.7", reasoning: "Making connections",
          question: "China's effort \"to crackdown on the Internet,\" as Clinton describes it, is best understood as an example of",
          choices: [
            "a government limiting the spread of outside ideas and information while still taking part in the global economy",
            "a popular protest against the World Trade Organization like the demonstrations in Seattle in 1999",
            "a nonaligned state refusing to trade with either side in the Cold War",
            "a return to the high tariffs that many states adopted during the Great Depression",
          ],
          why: [
            "Correct. China joined the WTO in 2001 and grew through trade, yet it censored websites and blocked many foreign services, resisting the political side of globalization.",
            "The Seattle protests were organized by citizens and activist groups, while the excerpt describes the actions of a government.",
            "The Cold War had ended by 2000, and China was seeking more trade, not refusing it.",
            "The excerpt says China would eliminate tariffs on information technology, so it was lowering trade barriers, not raising them.",
          ],
          answer: 0 },

        // Set 5: Internet use table
        { id: "w9a-m13", skill: "u9", type: "mcq", set: "w9a-s5", topic: "9.1", reasoning: "Claims and evidence in sources",
          question: "Which of the following statements is best supported by the data in the table?",
          choices: [
            "Internet use grew in every country and group shown, but a large gap remained between high-income and low-income countries in 2023.",
            "By 2023, most people in Sub-Saharan Africa used the Internet.",
            "A larger share of people used the Internet in India than in China in every year shown.",
            "Internet use in high-income countries declined after 2015.",
          ],
          why: [
            "Correct. Every row rises from 2005 to 2023, yet in 2023 the figure was 91.9 percent in high-income countries and only 22.0 percent in low-income countries.",
            "Only 32.3 percent of people in Sub-Saharan Africa used the Internet in 2023, less than half.",
            "China's share was higher than India's in every year shown, for example 90.6 percent against 60.3 percent in 2023.",
            "Internet use in high-income countries rose from 78.3 percent in 2015 to 91.9 percent in 2023.",
          ],
          answer: 0 },
        { id: "w9a-m14", skill: "u9", type: "mcq", set: "w9a-s5", topic: "9.6", reasoning: "Causation",
          question: "The trend shown in the table most directly contributed to which of the following developments in global culture?",
          choices: [
            "Music, films, and videos from many countries, such as South Korean pop music, reaching worldwide audiences through streaming and social media",
            "American jazz spreading to Europe for the first time through radio broadcasts and phonograph records sold in city shops",
            "The revival of the Olympic Games as an international sporting event held every four years in a different host city",
            "English losing its place as a common language of international business and science to other world languages",
          ],
          why: [
            "Correct. As billions of people went online, video sites and social media let artists outside the United States, such as South Korean pop groups, build global fan bases.",
            "Jazz spread through radio and records in the 1920s and 1930s, long before the Internet trend shown in the table.",
            "The modern Olympic Games were revived in 1896, more than a century before the period in the table.",
            "English became more widely used in business and online as the Internet spread, not less.",
          ],
          answer: 0 },
        { id: "w9a-m15", skill: "u9", type: "mcq", set: "w9a-s5", topic: "9.9", reasoning: "Continuity and change",
          question: "The data in the table best support which of the following arguments about the period from 1900 to the present?",
          choices: [
            "New technologies spread around the world, but people in wealthier states usually gained access to them first.",
            "Globalization ended the differences in wealth between world regions.",
            "Developing states rejected new technologies in order to protect traditional ways of life.",
            "New communication technologies spread mainly through state-planned economies.",
          ],
          why: [
            "Correct. The table shows Internet use spreading in every group, while high-income countries stayed far ahead, a pattern also seen with earlier technologies such as cars, telephones, and new medicines.",
            "The gap between high-income and low-income countries shows that differences in wealth and access remained.",
            "Internet use rose quickly in developing states such as India and in Sub-Saharan Africa, so they did not reject the technology.",
            "The highest rates of use are in high-income countries, which mostly have market economies.",
          ],
          answer: 0 },

        // SAQ 1: with a source
        { id: "w9a-q1a", skill: "u9", type: "fr", set: "w9a-s6", part: "SAQ 1", sub: "a", topic: "9.5",
          lead: "Use the source below to answer all parts of the question that follows.",
          prompt: "Identify ONE historical development that provided the context for the adoption of the convention in 1965.",
          earns: "The response names a development before or around 1965 that relates to the convention's attack on racial discrimination.",
          yes: [
            "The civil rights movement in the United States, which won the Civil Rights Act of 1964",
            "The apartheid system in South Africa, which the convention names, and international outrage after the Sharpeville massacre of 1960",
            "Decolonization in Africa and Asia, which brought many newly independent states into the United Nations",
          ],
          no: [
            "\"The end of apartheid in 1994.\" This came almost thirty years after the convention.",
            "\"The fall of the Berlin Wall.\" This happened in 1989 and has no clear tie to racial discrimination.",
            "\"People were racist.\" This is too general to identify a specific development.",
          ],
          example: "The decolonization of Africa provided context, because by 1965 many newly independent African states had joined the United Nations and pushed it to condemn racial discrimination and apartheid.",
          notExample: "The convention was about being fair to everyone." },
        { id: "w9a-q1b", skill: "u9", type: "fr", set: "w9a-s6", part: "SAQ 1", sub: "b", topic: "9.5",
          lead: "Use the source below to answer all parts of the question that follows.",
          prompt: "Describe ONE movement in the period after 1945 that challenged \"policies of apartheid, segregation or separation.\"",
          earns: "The response describes, not only names, a movement after 1945 that opposed legal racial separation or discrimination.",
          yes: [
            "The African National Congress, led by figures such as Nelson Mandela, organized protests and resistance against apartheid laws in South Africa.",
            "The civil rights movement in the United States used boycotts, sit-ins, and marches, such as the Montgomery Bus Boycott, to end segregation laws.",
            "An international anti-apartheid campaign pressed governments and companies to boycott and sanction South Africa in the 1980s.",
          ],
          no: [
            "\"Gandhi's Salt March.\" It took place in 1930 and challenged British rule, not racial segregation laws after 1945.",
            "\"The African National Congress.\" Naming the group without describing what it did does not earn the point.",
            "\"The Universal Declaration of Human Rights.\" It is a document, not a movement.",
          ],
          example: "In the United States, the civil rights movement challenged segregation through nonviolent protest, such as the Montgomery Bus Boycott of 1955 to 1956, in which Black residents refused to ride segregated city buses.",
          notExample: "Many people did not like segregation." },
        { id: "w9a-q1c", skill: "u9", type: "fr", set: "w9a-s6", part: "SAQ 1", sub: "c", topic: "9.5",
          lead: "Use the source below to answer all parts of the question that follows.",
          prompt: "Explain how the claim that \"any doctrine of superiority based on racial differentiation is scientifically false\" challenged ideas that had been used to justify imperialism in the nineteenth century.",
          earns: "The response names an idea used to justify imperialism and explains how calling racial superiority false undercut it.",
          yes: [
            "Social Darwinism claimed that some races were more advanced, which Europeans used to justify ruling Africa and Asia; calling racial superiority false removed that justification.",
            "The idea of a \"civilizing mission\" or the \"white man's burden\" rested on the belief that colonized peoples were inferior and needed European rule, which the convention rejects.",
            "Scientific racism was used to argue that colonized peoples could not govern themselves, so declaring it false supported their right to independence and equal treatment.",
          ],
          no: [
            "\"Imperialism was bad.\" This does not name an idea used to justify it or explain the connection.",
            "\"Social Darwinism.\" Naming the idea without explaining how the convention challenged it does not earn the point.",
            "\"Europeans wanted raw materials.\" This is an economic motive, not an idea about race that the claim challenges.",
          ],
          example: "In the nineteenth century, Social Darwinists argued that Europeans were a superior race and that this gave them the right to rule Africans and Asians. By calling any doctrine of racial superiority \"scientifically false,\" the convention attacked the basis of that argument and supported equal rights for formerly colonized peoples.",
          notExample: "The convention said racism is false, so imperialism was wrong." },

        // SAQ 2: no source
        { id: "w9a-q2a", skill: "u9", type: "fr", part: "SAQ 2", sub: "a", topic: "9.4",
          lead: "Answer all parts of the question that follows.",
          prompt: "Identify ONE policy associated with free-market economic reforms in the period from 1970 to the present.",
          earns: "The response names a specific policy that reduced the government's role in the economy or opened markets.",
          yes: [
            "Privatization of state-owned industries, such as under Margaret Thatcher in Britain",
            "Deregulation of businesses and tax cuts, such as under Ronald Reagan in the United States",
            "Lowering tariffs and opening to foreign investment, such as in India's reforms of 1991",
          ],
          no: [
            "\"Five-Year Plans.\" These are central planning, the opposite of free-market reform.",
            "\"Nationalizing the oil industry.\" This increases state control of the economy.",
            "\"Capitalism.\" This names an economic system, not a specific policy.",
          ],
          example: "Privatization, such as the sale of state-owned companies like British Telecom under Margaret Thatcher in the 1980s.",
          notExample: "The government made the economy better." },
        { id: "w9a-q2b", skill: "u9", type: "fr", part: "SAQ 2", sub: "b", topic: "9.4",
          lead: "Answer all parts of the question that follows.",
          prompt: "Describe ONE way that a state in Asia achieved rapid economic growth in the period from 1950 to the present.",
          earns: "The response names an Asian state and describes a policy or strategy that produced fast growth.",
          yes: [
            "South Korea built export industries, such as steel, cars, and electronics made by firms like Samsung and Hyundai, with government support.",
            "China created special economic zones, such as Shenzhen, where foreign companies could invest and manufacture goods for export.",
            "India lowered tariffs and reduced licensing rules in 1991, which helped its information technology and service industries grow.",
          ],
          no: [
            "\"China's Great Leap Forward.\" It caused famine and economic collapse, not growth.",
            "\"Japan grew.\" This does not describe how growth was achieved.",
            "\"South Korea joined the Warsaw Pact.\" This is false; South Korea was allied with the United States.",
          ],
          example: "Beginning in the 1960s, South Korea's government supported large companies that made goods for export, such as ships, cars, and electronics, and selling these goods abroad made the country one of the fastest-growing economies in the world.",
          notExample: "Asia has a lot of people, so it grew." },
        { id: "w9a-q2c", skill: "u9", type: "fr", part: "SAQ 2", sub: "c", topic: "9.9",
          lead: "Answer all parts of the question that follows.",
          prompt: "Explain ONE way that economic globalization affected workers in industrialized countries in the period from 1970 to the present.",
          earns: "The response explains a cause and effect connecting global trade or investment to the lives of workers in industrialized countries.",
          yes: [
            "Companies moved factories to countries with lower wages, so many manufacturing workers in places such as the American Midwest lost their jobs.",
            "Firms outsourced services such as call centers and software work to countries like India, which reduced some jobs in the United States and Britain.",
            "Cheaper imported goods lowered prices for consumers, while competition from imports weakened labor unions in industries like steel and autos.",
          ],
          no: [
            "\"Workers were affected.\" This does not explain how.",
            "\"Workers in the Industrial Revolution worked long hours.\" This refers to the nineteenth century, not the period after 1970.",
            "\"Globalization created the assembly line.\" The assembly line dates to the early twentieth century and was not caused by globalization after 1970.",
          ],
          example: "As trade barriers fell, American car and steel companies moved production to Mexico and Asia, where wages were lower, so many factory workers in the United States lost their jobs and industrial cities declined.",
          notExample: "Globalization made things different for workers." },

        // Section II: long essay
        { id: "w9a-leq", skill: "u9", type: "essay", kind: "leq", topic: "9.6", reasoning: "Continuity and change",
          prompt: "In the period from 1900 to the present, new technologies of communication and transportation increased contact among the world's peoples. Develop an argument that evaluates the extent to which popular culture became globalized in the period from 1900 to the present.",
          rows: [
            { name: "Thesis/Claim", max: 1, levels: [
              "0 points: The response restates the prompt, makes a claim that is not historically defensible, or does not take a position on how far popular culture became globalized.",
              "1 point: The response makes a historically defensible claim that takes a position on the extent to which popular culture became globalized, such as arguing that films, music, sports, and consumer goods spread worldwide to a great extent, but that local cultures adapted or resisted them rather than simply copying them.",
            ] },
            { name: "Contextualization", max: 1, levels: [
              "0 points: The response gives no context, or only a phrase or passing mention.",
              "1 point: The response describes a broader context relevant to the prompt, such as the spread of steamships, railroads, and the telegraph before 1900, the role of empires in carrying languages and sports such as cricket around the world, or the growth of mass consumer markets in industrial societies.",
            ] },
            { name: "Evidence", max: 2, levels: [
              "0 points: The response gives no specific examples relevant to the globalization of popular culture.",
              "1 point: The response gives at least two specific examples relevant to the topic, such as Hollywood films and the FIFA World Cup.",
              "2 points: The response uses specific and relevant examples, such as radio and film, Bollywood, reggae, K-pop, the World Cup, or McDonald's, to support an argument about the extent to which popular culture became globalized.",
            ] },
            { name: "Analysis and Reasoning", max: 2, levels: [
              "0 points: The response does not use historical reasoning to frame an argument.",
              "1 point: The response uses continuity and change to frame the argument, for example by explaining how new technologies changed the speed and reach of cultural exchange while some local traditions continued.",
              "2 points: The response shows a complex understanding, for example by explaining that culture flowed in many directions and not only from the West, that global products were changed to fit local tastes, or that governments and religious groups resisted foreign culture even as it spread.",
            ] },
          ],
          evidence: [
            "Radio and motion pictures spread from the 1920s, carrying Hollywood films and American jazz to audiences around the world.",
            "The first FIFA World Cup was held in Uruguay in 1930, and soccer became the most widely followed sport in the world, with television carrying later tournaments to global audiences.",
            "Cricket, spread through the British Empire, became a national passion in India, Pakistan, and the West Indies, and India's Indian Premier League (2008) drew players from many countries.",
            "India's Hindi film industry in Mumbai, known as Bollywood, became one of the largest film industries in the world, with audiences in South Asia, the Middle East, Africa, and the South Asian diaspora.",
            "Reggae from Jamaica, made famous by Bob Marley in the 1970s, gained listeners worldwide.",
            "Hip hop began in New York in the 1970s and was adapted by artists in other languages, for example in France and Senegal.",
            "Japanese anime and South Korean pop music (K-pop) won global fan bases; \"Gangnam Style\" in 2012 became the first video on YouTube to pass one billion views.",
            "McDonald's opened in Moscow in 1990, and in India it sold menus without beef, showing how global brands adapted to local customs.",
            "The World Wide Web, created in the early 1990s, and later social media spread music and video instantly; by 2023 about 69 percent of the world's people used the Internet (World Bank).",
            "After the Iranian Revolution of 1979, the new government restricted Western music and films as a threat to Islamic values.",
            "France required radio stations, beginning in 1996, to play a minimum share of French-language songs to protect its culture from English-language music.",
            "China blocked foreign websites and services such as Google and Facebook while promoting its own platforms.",
          ],
          model: "Thesis: From 1900 to the present, radio, film, television, air travel, and the Internet made popular culture global to a great extent, but culture flowed in many directions and was often adapted or resisted locally, so globalization mixed cultures more than it made them the same. Outline: (1) Context: before 1900, steamships, the telegraph, and empires had already spread languages, goods, and sports such as cricket. (2) Change in reach: Hollywood films and jazz spread through radio and movies in the 1920s and 1930s, and the World Cup, first held in 1930, made soccer a global sport. (3) Many directions: Bollywood, reggae, anime, and K-pop show that culture also spread from India, Jamaica, Japan, and South Korea, and the Internet sped this up after the 1990s. (4) Adaptation and resistance: McDonald's changed its menu in India, hip hop was remade in French and Wolof, Iran restricted Western media after 1979, France set quotas for French-language songs, and China blocked foreign websites. (5) Complexity: the same technologies that spread global culture also let local artists reach the world, so local cultures continued while changing, and access remained uneven between rich and poor regions.",
        },
      ] },
  ],
};
