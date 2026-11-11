// AP CSP spring mock quiz · Big Idea 2: Data
// 15 items across the six Data skills. None of these setups or numbers appear in review.
// Every computed key was checked in Python. The key is always written first (answer: 0).

export default {
  form: true,
  items: [
    {
      id: "bi2m-01", skill: "bits", type: "mcq", difficulty: "easy",
      question: "What is the decimal value of the binary number 110011?",
      choices: ["51", "49", "25", "102"],
      why: [
        "The 1s sit in the 32, 16, 2, and 1 places. 32 + 16 + 2 + 1 = 51.",
        "49 is 110001. It leaves out the 2 place, which is also a 1 here.",
        "25 is 11001, only five digits. 110011 has six, so its leftmost 1 is worth 32.",
        "102 is 1100110, which is 110011 with a 0 added on the right. That doubles the value.",
      ],
      answer: 0,
    },
    {
      id: "bi2m-02", skill: "bits", type: "mcq", difficulty: "moderate",
      stem: "A museum wants to give each of its 1,000 artworks a different code stored in binary.",
      question: "What is the fewest bits each code can use?",
      choices: ["10", "9", "500", "1,000"],
      why: [
        "9 bits give 512 codes, which is too few. 10 bits give 1,024, which is enough.",
        "9 bits give only 512 different codes, so 488 artworks would have none.",
        "500 is half of 1,000. The number of codes is 2 raised to the number of bits, not double the bits.",
        "1,000 bits would work, but each bit doubles the codes, so only 10 are needed.",
      ],
      answer: 0,
    },
    {
      id: "bi2m-03", skill: "bits", type: "mcq", difficulty: "difficult",
      stem: "A system that used 5 bits for each value switches to 8 bits for each value.",
      question: "How does the number of values it can represent change?",
      choices: [
        "It becomes 8 times as many.",
        "It becomes 3 times as many.",
        "It goes up by exactly 3 values.",
        "It goes up by 60 percent.",
      ],
      why: [
        "5 bits give 32 values and 8 bits give 256. Three more bits double the count three times: 2 × 2 × 2 = 8.",
        "Each added bit doubles the count. Three bits multiply it by 8, not 3.",
        "Each added bit doubles the count, so the change is far more than 3. It goes from 32 to 256.",
        "60 percent is 8 ÷ 5 as a growth in bits. The count of values grows much faster than the count of bits.",
      ],
      answer: 0,
    },
    {
      id: "bi2m-04", skill: "limits", type: "mcq", difficulty: "moderate",
      stem: "A game stores the number of lives as a whole number that cannot be negative, in 6 bits. A player has 60 lives and earns one more life at a time.",
      question: "Which extra life causes an overflow error?",
      choices: ["The fourth", "The third", "The first", "The sixty-fourth"],
      why: [
        "6 bits hold 0 to 63. Three extra lives reach 63, and the fourth would make 64, which does not fit.",
        "The third extra life makes 63, which is 111111, the largest value 6 bits hold.",
        "61 fits in 6 bits. Overflow only happens after the count passes 63.",
        "64 is the number of values 6 bits hold. The player starts at 60, so overflow comes much sooner.",
      ],
      answer: 0,
    },
    {
      id: "bi2m-05", skill: "limits", type: "mcq", difficulty: "moderate",
      question: "Which of these values can a computer store exactly in binary, with no roundoff?",
      choices: ["0.5", "0.1", "0.2", "0.3"],
      why: [
        "0.5 is 1/2, the value of the first place after the binary point, so it is stored exactly.",
        "0.1 is 1/10. Its binary digits repeat forever, so it must be rounded to fit.",
        "0.2 is 1/5. It has no exact binary form, so it is stored as an approximation.",
        "0.3 is 3/10. Like 0.1, its binary digits never end, so it is rounded.",
      ],
      answer: 0,
    },
    {
      id: "bi2m-06", skill: "text-analog", type: "mcq", difficulty: "easy",
      stem: "In ASCII, the digit characters 0 to 9 have the codes 48 to 57 in order.",
      question: "What is the ASCII code for the character 7?",
      choices: ["55", "7", "54", "56"],
      why: [
        "0 is 48, and 7 is seven characters later, so its code is 48 + 7 = 55.",
        "7 is the number the character shows. The character itself is stored with the code 55.",
        "54 is the code for the character 6.",
        "56 is the code for the character 8.",
      ],
      answer: 0,
    },
    {
      id: "bi2m-07", skill: "text-analog", type: "mcq", difficulty: "difficult",
      stem: "A heart monitor samples a patient's heartbeat signal 500 times per second and stores each sample in 12 bits. It records for 60 seconds. Assume no compression and 8 bits in a byte.",
      question: "How many bytes does the recording use?",
      choices: ["45,000", "360,000", "30,000", "6,000"],
      why: [
        "500 × 60 = 30,000 samples. 30,000 × 12 = 360,000 bits, and 360,000 ÷ 8 = 45,000 bytes.",
        "360,000 is the number of bits. Dividing by 8 converts it to bytes.",
        "30,000 is the number of samples. Each sample takes 12 bits, which is 1.5 bytes.",
        "6,000 is the bits for one second (500 × 12). The recording lasts 60 seconds, and the answer is in bytes.",
      ],
      answer: 0,
    },
    {
      id: "bi2m-08", skill: "text-analog", type: "mcq", difficulty: "easy",
      stem: "A program stores text using standard 7-bit ASCII only.",
      question: "Which character can this program NOT store?",
      choices: ["ñ", "?", "Z", "7"],
      why: [
        "Standard ASCII has 128 characters, mostly English letters, digits, and symbols. ñ is not one of them, so it needs Unicode.",
        "The question mark is in ASCII, with code 63.",
        "Capital Z is in ASCII, with code 90.",
        "The digit 7 is in ASCII, with code 55.",
      ],
      answer: 0,
    },
    {
      id: "bi2m-09", skill: "compression", type: "mcq", difficulty: "moderate",
      stem: "A genetics lab stores DNA letters with a run-length encoding that writes each run as a count followed by the letter. It encodes the 14-letter sequence GGGGGGGTTCCCCC.",
      question: "How many characters shorter is the encoding than the original?",
      choices: ["8", "3", "11", "0"],
      why: [
        "The encoding is 7G2T5C, which is 6 characters. 14 − 6 = 8.",
        "3 is the number of runs. Each run takes 2 characters, so the encoding is 6 long.",
        "11 would mean the encoding is 3 characters. Each run needs a count and a letter.",
        "The long runs of G and C make the encoding shorter, so the saving is not 0.",
      ],
      answer: 0,
    },
    {
      id: "bi2m-10", skill: "compression", type: "mcq", difficulty: "moderate",
      stem: "A hospital stores X-ray images that doctors zoom into to look for very small fractures.",
      question: "Which compression choice fits best?",
      choices: [
        "Lossless, so no image detail is lost",
        "Lossy, so the images load as fast as possible",
        "Lossy, since the images are only black and white",
        "No compression, since images cannot be compressed",
      ],
      why: [
        "A tiny fracture could be the detail that lossy compression removes. Lossless keeps every pixel exact.",
        "Faster loading is not worth losing detail a doctor needs to see.",
        "Black and white images can still lose important detail when lossy compression is used.",
        "Images can be compressed with both lossless and lossy methods.",
      ],
      answer: 0,
    },
    {
      id: "bi2m-11", skill: "compression", type: "mcq", difficulty: "difficult",
      question: "Which statement about lossless compression is true?",
      choices: [
        "Some files cannot be made any smaller by it.",
        "It always cuts a file to half its size or less.",
        "It works by removing details people do not notice.",
        "It can be used on text files but not on images.",
      ],
      why: [
        "Lossless compression needs patterns or repeats to remove. A file with few repeats may not shrink at all.",
        "How much a file shrinks depends on its content. No lossless method guarantees half.",
        "Removing details people do not notice is lossy compression. Lossless keeps all the data.",
        "Lossless methods work on images too, such as the PNG format.",
      ],
      answer: 0,
    },
    {
      id: "bi2m-12", skill: "data-use", type: "mcq", difficulty: "moderate",
      stem: "A bike rental company records rentals at three stations on two days.",
      code: `Station   Day   Rentals   Rain
North     Mon     34      No
North     Tue     12      Yes
South     Mon     41      No
South     Tue     19      Yes
East      Mon     27      No
East      Tue      8      Yes`,
      question: "What is the average number of rentals per station on the days with rain?",
      choices: ["13", "34", "23.5", "39"],
      why: [
        "The rainy rows have 12, 19, and 8 rentals. (12 + 19 + 8) ÷ 3 = 13.",
        "34 is the average of the rows without rain. The question asks about the rows with rain.",
        "23.5 is the average of all six rows. The data must be filtered to rainy rows first.",
        "39 is the total for the rainy rows. An average divides that total by 3.",
      ],
      answer: 0,
    },
    {
      id: "bi2m-13", skill: "data-use", type: "mcq", difficulty: "moderate",
      stem: "A city finds that neighborhoods with more coffee shops tend to have higher rents.",
      question: "Which conclusion is NOT justified by this finding alone?",
      choices: [
        "Opening a coffee shop raises the rent in a neighborhood.",
        "Coffee shops and higher rents tend to appear together.",
        "Some neighborhoods with few coffee shops may still have high rents.",
        "Another factor may affect both coffee shops and rents.",
      ],
      why: [
        "This claims cause. The data shows only a correlation, so it is not justified and is the answer.",
        "This restates the correlation the city found, so it is justified.",
        "\"Tend to\" describes a pattern with exceptions, so this is consistent with the finding.",
        "A correlation leaves room for a third factor, such as busy streets, so this is reasonable.",
      ],
      answer: 0,
    },
    {
      id: "bi2m-14", skill: "bigdata", type: "mcq", difficulty: "moderate",
      stem: "A city has 500 buses. Each bus sends a 200-byte location message every 10 seconds.",
      question: "How many bytes do the buses send in one hour?",
      choices: ["36,000,000", "100,000", "180,000", "360,000,000"],
      why: [
        "An hour has 3,600 ÷ 10 = 360 messages per bus. 500 × 360 × 200 = 36,000,000 bytes.",
        "100,000 is one round of messages, 500 × 200. Each bus sends 360 rounds in an hour.",
        "180,000 is the number of messages, 500 × 360. Each message is 200 bytes.",
        "360,000,000 assumes a message every second. The buses send one every 10 seconds.",
      ],
      answer: 0,
    },
    {
      id: "bi2m-15", skill: "bigdata", type: "mcq", difficulty: "easy",
      stem: "A city uses step counts from a fitness app to estimate how active all of its residents are.",
      question: "What is the most likely problem with this data?",
      choices: [
        "App users may be more active than other residents.",
        "Step counts are numbers, so they cannot be stored in binary.",
        "The data is too small to show any pattern about the city.",
        "Step counts cannot be combined with any other data set.",
      ],
      why: [
        "The data comes only from app users, who may exercise more. That bias makes the estimate too high.",
        "Numbers are stored in binary all the time. That is not a problem.",
        "An app with many users produces a large data set. The issue is who is missing from it.",
        "Step data can be combined with other data, such as weather, when the sets share a field like the date.",
      ],
      answer: 0,
    },
  ],
};
