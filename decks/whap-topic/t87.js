// Topic 8.7 Quiz: Global Resistance to Established Power Structures
// Sources: every stimulus this quiz uses, keyed by id. Written only for this quiz: no source or item here is in review or a unit assessment.
const PRACTICE = { cite: "Practice passage written for this review, summarizing an interpretation held by many historians.", kind: "practice" };
const ONE = "Use the source below to answer the questions that follow.";
const SAQ = "Use the passage below to answer all parts of the question that follows.";
const M = (n, set, reasoning, question, choices, why) => ({ id: "t87-m0" + n, skill: "u8", type: "mcq", set, topic: "8.7", reasoning, question, choices, why, answer: 0 });
const Q = (sub, prompt, earns, yes, no, example, notExample) => ({ id: "t87-q1" + sub, skill: "u8", type: "fr", set: "t87-s3", part: "SAQ 1", sub, topic: "8.7", lead: SAQ, prompt, earns, yes, no, example, notExample });

export const sets = {
  "t87-s1": {
    id: "t87-s1", name: "Martin Luther King Jr. accepts the Nobel Peace Prize, 1964", intro: ONE,
    sources: [{ title: "Source", blocks: [
      { p: "I accept the Nobel Prize for Peace at a moment when 22 million Negroes of the United States of America are engaged in a creative battle to end the long night of racial injustice. ... I am mindful that only yesterday in Birmingham, Alabama, our children, crying out for brotherhood, were answered with fire hoses, snarling dogs and even death. I am mindful that only yesterday in Philadelphia, Mississippi, young people seeking to secure the right to vote were brutalized and murdered. ..." },
      { p: "After contemplation, I conclude that this award which I receive on behalf of that movement is a profound recognition that nonviolence is the answer to the crucial political and moral question of our time – the need for man to overcome oppression and violence without resorting to violence and oppression. Civilization and violence are antithetical concepts. Negroes of the United States, following the people of India, have demonstrated that nonviolence is not sterile passivity, but a powerful moral force which makes for social transformation. ..." },
      { p: "I refuse to accept the cynical notion that nation after nation must spiral down a militaristic stairway into the hell of thermonuclear destruction. ..." },
      { cite: "Martin Luther King Jr., acceptance speech for the Nobel Peace Prize, Oslo, December 10, 1964, as published by NobelPrize.org. In 1963, police in Birmingham used fire hoses and dogs on young marchers, and a bombing of a church there killed four girls. In 1964, three civil rights workers registering Black voters were murdered near Philadelphia, Mississippi. Congress had passed the Civil Rights Act in July 1964.", url: "https://www.nobelprize.org/prizes/peace/1964/king/acceptance-speech/", kind: "primary" },
    ] }],
  },
  "t87-s2": {
    id: "t87-s2", name: "The Iranian Revolution", intro: "Use the passage below to answer the questions that follow.",
    sources: [{ title: "Source", blocks: [
      { p: "Many historians argue that the Iranian Revolution of 1979 showed that religion could be a powerful force against established power. Mohammad Reza Shah Pahlavi, who had been restored to power with American and British help in a 1953 coup, used oil wealth to modernize Iran, but his secret police jailed and tortured opponents, and many Iranians resented his close ties to the United States and the gap between rich and poor. The Shi'a cleric Ayatollah Ruhollah Khomeini, exiled in 1964, sent sermons home on cassette tapes calling for the shah's overthrow. In 1978, millions of Iranians, including students, merchants, workers, and leftists, joined strikes and mass marches. The shah fled in January 1979, and Khomeini returned to lead an Islamic republic in which clerics held final authority. Later that year, students seized the American embassy and held its staff hostage for 444 days." },
      PRACTICE,
    ] }],
  },
  "t87-s3": {
    id: "t87-s3", name: "The protests of 1968", intro: SAQ,
    sources: [{ title: "Source", blocks: [
      { p: "Many historians argue that 1968 was a year of global protest. In France, student protests in May led to a general strike by millions of workers that nearly toppled President Charles de Gaulle's government. In the United States, students protested the Vietnam War, and riots followed the assassination of Martin Luther King Jr. in April. In Czechoslovakia, Communist leader Alexander Dubček allowed more free speech in what was called the Prague Spring, until Soviet and Warsaw Pact troops invaded in August and ended the reforms. In Mexico City, ten days before the Olympic Games opened, soldiers fired on a student rally at Tlatelolco and killed many protesters. Television and the spread of universities helped young people in different countries see and inspire one another." },
      PRACTICE,
    ] }],
  },
};

export default {
  forms: [
    { id: "t87", name: "Topic 8.7 Quiz: Global Resistance to Established Power Structures", group: "Unit 8: Cold War and Decolonization",
      items: [
        // ===== Set 1: King =====
        M(1, "t87-s1", "Claims and evidence in sources", "King's main claim in the speech is that",
          ["nonviolence is a powerful moral force that can overcome oppression", "violence is the only way to end injustice", "the civil rights movement had already ended racial injustice", "the Nobel Prize should go to the government of the United States"],
          ["Correct. He says nonviolence is \"a powerful moral force which makes for social transformation.\"",
            "He calls civilization and violence \"antithetical.\"",
            "He describes ongoing violence and injustice.",
            "He accepts it on behalf of the movement."]),
        M(2, "t87-s1", "Continuity and change", "King's reference to \"following the people of India\" shows that",
          ["the American civil rights movement drew on Gandhi's methods of nonviolent resistance", "India had colonized the United States", "the civil rights movement began in India", "Indian soldiers fought in Alabama"],
          ["Correct. King studied Gandhi and visited India in 1959.",
            "This is false.",
            "It began in the United States.",
            "This is false."]),
        M(3, "t87-s1", "Sourcing and situation", "King's audience in Oslo most likely led him to",
          ["connect the American struggle to world issues such as war and nuclear weapons", "speak only about local politics in Alabama", "avoid mentioning violence against marchers", "criticize the Nobel committee"],
          ["Correct. Before a world audience, he links civil rights to peace and the danger of \"thermonuclear destruction.\"",
            "He speaks of humanity as a whole.",
            "He mentions fire hoses, dogs, and murder.",
            "He thanks the committee by accepting."]),
        M(4, "t87-s1", "Comparison", "The civil rights movement described in the speech is most similar to which other movement?",
          ["The campaign against apartheid in South Africa", "The Khmer Rouge seizure of power in Cambodia", "Mussolini's March on Rome", "Japan's invasion of Manchuria"],
          ["Correct. Both fought legal racial segregation and drew worldwide support.",
            "That was a violent revolution that created a dictatorship.",
            "That brought fascism to power.",
            "That was imperial conquest."]),
        // ===== Set 2: Iran =====
        M(5, "t87-s2", "Causation", "According to the passage, which factor contributed to opposition to the shah?",
          ["Resentment of his close ties to the United States and his use of secret police", "His refusal to modernize Iran", "His alliance with the Soviet Union", "His support for Khomeini"],
          ["Correct. Repression and dependence on the United States angered many Iranians.",
            "He used oil wealth to modernize.",
            "He was allied with the United States.",
            "He exiled Khomeini."]),
        M(6, "t87-s2", "Developments and processes", "The Iranian Revolution best illustrates which development of the late 1900s?",
          ["The rise of religious movements as a force against secular governments", "The spread of communism in the Middle East", "The return of monarchy in Iran", "The end of oil production in Iran"],
          ["Correct. Khomeini built an Islamic republic led by clerics.",
            "The revolution was led by clerics, not communists.",
            "The monarchy ended.",
            "Oil production continued."]),
        M(7, "t87-s2", "Claims and evidence in sources", "Which evidence from the passage best supports the claim that the revolution drew support from many groups?",
          ["Students, merchants, workers, and leftists joined strikes and mass marches.", "Khomeini was exiled in 1964.", "The shah fled in January 1979.", "Students seized the American embassy."],
          ["Correct. The passage names many groups taking part.",
            "This concerns one leader.",
            "This is a result.",
            "This came after the revolution."]),
        M(8, "t87-s2", "Contextualization", "The 1953 coup mentioned in the passage is best understood in the context of",
          ["Cold War fears that Iran might nationalize its oil and drift toward the Soviet Union", "the First World War", "the Iranian Revolution of 1979", "the Arab-Israeli war of 1973"],
          ["Correct. Britain and the United States helped overthrow Prime Minister Mosaddegh after he nationalized oil.",
            "That ended in 1918.",
            "That came later.",
            "That came later."]),
        // ===== SAQ: 1968 =====
        Q("a", "Identify ONE protest movement of 1968 described in the passage.",
          "The response names one movement from the passage.",
          ["Student protests and a general strike in France.", "Protests against the Vietnam War in the United States.", "The Prague Spring reforms in Czechoslovakia, or the student rally at Tlatelolco in Mexico City."],
          ["\"The Olympic Games.\" This was not a protest.", "\"The Soviet invasion.\" This crushed a movement.", "\"The Iranian Revolution.\" This came in 1979."],
          "The passage says student protests in France in May 1968 led to a general strike by millions of workers.",
          "There were protests."),
        Q("b", "Explain ONE way governments responded to resistance movements in 1968.",
          "The response explains a specific response.",
          ["Soviet and Warsaw Pact troops invaded Czechoslovakia to end the Prague Spring.", "Mexican soldiers fired on students at Tlatelolco, killing many.", "In France, de Gaulle called new elections and won, ending the crisis."],
          ["\"Governments responded.\" This is too vague.", "\"The Soviet Union supported the Prague Spring.\" This is false.", "\"All governments resigned.\" This is false."],
          "In August 1968, Soviet and Warsaw Pact troops invaded Czechoslovakia, removed Dubček from power, and ended the Prague Spring's freedom of speech, showing that the Soviet Union would use force to keep control of eastern Europe.",
          "Governments cracked down."),
        Q("c", "Explain ONE way resistance movements in the period 1945 to 1991 used violent OR nonviolent methods to challenge established power.",
          "The response names a specific movement and explains its methods.",
          ["Nonviolent: the American civil rights movement used marches, boycotts, and sit-ins to end segregation.", "Violent: the Shining Path in Peru used armed attacks to try to overthrow the government.", "Nonviolent: Solidarity in Poland used strikes to win recognition from the communist government."],
          ["\"People resisted.\" This names no movement.", "\"The Prague Spring invasion.\" This was a government action, not resistance.", "\"The civil rights movement used terrorism.\" This is false."],
          "The civil rights movement used nonviolent methods such as the Montgomery bus boycott of 1955 and 1956, when Black residents refused to ride segregated buses for more than a year, until the courts ended segregation on the city's buses.",
          "Movements had methods."),
      ] },
  ],
};
