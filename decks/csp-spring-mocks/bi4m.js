// AP CSP · spring mock quiz · Big Idea 4: Computer Systems and Networks
// Written only for the mock: no item, setup, or number here is in review. Every computed key was recomputed in Python.
// In a multiple-choice item the right choice is always written first; the site arranges the keys.

export default {
  form: true,
  items: [
    {
      id: "bi4m-01", skill: "internet", type: "mcq", difficulty: "moderate",
      stem: "A 36 megabyte audio file is sent over a connection with a bit rate of 12 megabits per second. Use 1 byte = 8 bits.",
      question: "How long does the transfer take?",
      choices: [
        "24 seconds",
        "3 seconds",
        "0.375 seconds",
        "432 seconds",
      ],
      why: [
        "36 megabytes is 288 megabits, and 288 ÷ 12 = 24 seconds.",
        "3 seconds divides megabytes by megabits per second. The size must be changed to bits first.",
        "0.375 seconds divides by 8 instead of multiplying. Each byte is 8 bits, so the bit count is larger.",
        "432 multiplies the size by the rate. Time is size divided by rate.",
      ],
      answer: 0,
    },
    {
      id: "bi4m-02", skill: "internet", type: "mcq", difficulty: "moderate",
      stem: "A family's movies play smoothly when one person streams, but they pause to load when four people stream at the same time.",
      question: "What is the most likely cause?",
      choices: [
        "The bandwidth is not enough for four streams",
        "The movies are stored on the family's own devices",
        "The latency goes down when more people stream",
        "The Internet is closed to more than one device",
      ],
      why: [
        "Each stream needs a share of the connection. Four streams together ask for more data per second than the bandwidth allows.",
        "Streamed movies come from a server over the Internet, which is why the connection matters.",
        "Lower latency would make delays shorter, not cause pauses.",
        "Many devices in one home can use the Internet at once. The limit is how much data the connection carries.",
      ],
      answer: 0,
    },
    {
      id: "bi4m-03", skill: "internet", type: "mcq", difficulty: "easy",
      question: "Which of the following uses the Internet but is not part of the World Wide Web?",
      choices: [
        "An email sent from a mail app",
        "A news article read in a browser",
        "A video page opened from a link",
        "A school website's home page",
      ],
      why: [
        "A mail app sends email over the Internet with email protocols, not as linked web pages.",
        "An article opened in a browser is a web page, so it is part of the web.",
        "A page reached by a link is a web page, which is the web.",
        "A website's home page is part of the web.",
      ],
      answer: 0,
    },
    {
      id: "bi4m-04", skill: "ip-routing", type: "mcq", difficulty: "difficult",
      stem: "A network has these direct connections between devices G through N.",
      code: `G-H   G-I   G-J   H-I
I-J   H-K   J-L   K-L
K-M   L-M   L-N   K-N
M-N`,
      question: "What is the fewest number of connections that must fail before G can no longer reach N?",
      choices: [
        "2",
        "1",
        "3",
        "4",
      ],
      why: [
        "Every path from G to N crosses either H-K or J-L. If both fail, G, H, I, and J are cut off from the rest.",
        "No single connection is on every path. If H-K fails, the path G-J-L-N still works.",
        "G and N each have three connections, but cutting the two links H-K and J-L in the middle is enough.",
        "Two failures already cut every path, so four are more than the fewest needed.",
      ],
      answer: 0,
    },
    {
      id: "bi4m-05", skill: "ip-routing", type: "mcq", difficulty: "moderate",
      stem: "A router in the middle of a busy network stops working, but messages keep reaching their destinations by other routes.",
      question: "Which property of the network does this show?",
      choices: [
        "Fault tolerance",
        "Bandwidth",
        "Latency",
        "Data compression",
      ],
      why: [
        "A fault tolerant network keeps working when a part fails, because redundant paths let data go around the failure.",
        "Bandwidth is how much data a connection can carry per second. It says nothing about surviving a failure.",
        "Latency is the time data takes to arrive, not the ability to keep working after a failure.",
        "Compression makes data smaller. It does not create other routes.",
      ],
      answer: 0,
    },
    {
      id: "bi4m-06", skill: "ip-routing", type: "mcq", difficulty: "moderate",
      stem: "A network has these direct connections between devices V, W, X, and Y.",
      code: `V-W   V-X   W-X
W-Y   X-Y`,
      question: "How many different paths from V to Y visit no device more than once?",
      choices: [
        "4",
        "2",
        "3",
        "5",
      ],
      why: [
        "The paths are V-W-Y, V-X-Y, V-W-X-Y, and V-X-W-Y.",
        "Two counts only the short paths. V-W-X-Y and V-X-W-Y also reach Y without repeating a device.",
        "Three misses one of the longer paths. Both V-W-X-Y and V-X-W-Y count.",
        "There is no fifth path. Any other route would visit a device twice.",
      ],
      answer: 0,
    },
    {
      id: "bi4m-07", skill: "packets-web", type: "mcq", difficulty: "moderate",
      stem: "A student downloads a program installer. If any part of the file is missing, the installer will not run.",
      question: "Which protocol fits this download best, and why?",
      choices: [
        "TCP, since it makes sure every packet arrives",
        "UDP, since it is faster and skips lost packets",
        "DNS, since it checks that the file is complete",
        "IP, since it puts the packets back in order",
      ],
      why: [
        "TCP checks that all packets arrive and resends any that are lost, so the file is complete.",
        "Skipping lost packets would leave holes in the installer, and it would not run.",
        "DNS only finds IP addresses for domain names. It does not check files.",
        "IP addresses and routes packets. Putting them in order and resending lost ones is TCP's job.",
      ],
      answer: 0,
    },
    {
      id: "bi4m-08", skill: "packets-web", type: "mcq", difficulty: "difficult",
      stem: "A student can open a website by typing its IP address into the browser, but not by typing its domain name.",
      question: "Which part of the system is most likely failing?",
      choices: [
        "DNS",
        "HTTP",
        "The website's server",
        "The student's connection",
      ],
      why: [
        "DNS turns a domain name into an IP address. Since the IP address works, the name lookup is what fails.",
        "HTTP works, since the page loads when the IP address is typed.",
        "The server is running, since the page loads by its IP address.",
        "The connection works, since the page loads by its IP address.",
      ],
      answer: 0,
    },
    {
      id: "bi4m-09", skill: "packets-web", type: "mcq", difficulty: "easy",
      question: "Why is data on the Internet sent in packets instead of as one large block?",
      choices: [
        "Packets can take different routes and be resent alone",
        "Packets cannot be read by anyone except the receiver",
        "A single block would be too large to store on a server",
        "Packets always arrive in the same order they were sent",
      ],
      why: [
        "Small packets share the network well, can each take an open route, and only a lost packet has to be sent again.",
        "Packets are not hidden by being packets. Encryption is what keeps data private.",
        "Servers store large files all the time. Packets are about sending data, not storing it.",
        "Packets often arrive out of order and are put back in order at the receiver.",
      ],
      answer: 0,
    },
    {
      id: "bi4m-10", skill: "protocols", type: "mcq", difficulty: "difficult",
      stem: "A small company builds a new web browser. Its programmers write code for HTTP but none for routing or delivering packets, and the browser works on networks around the world.",
      question: "Why does this work?",
      choices: [
        "HTTP relies on TCP and IP to deliver its messages",
        "HTTP sends each message over its own private cable",
        "The browser's company owns the routers it connects to",
        "Web pages are stored inside the browser in advance",
      ],
      why: [
        "Protocols are layered. HTTP passes its messages to TCP and IP, which already handle delivery and routing on any network.",
        "HTTP is a set of rules, not a cable. Messages share the same networks as all other traffic.",
        "No browser maker owns the Internet's routers. Open protocols let the browser use networks run by others.",
        "Pages come from servers over the network each time they are requested.",
      ],
      answer: 0,
    },
    {
      id: "bi4m-11", skill: "protocols", type: "mcq", difficulty: "easy",
      question: "Which of the following is an open protocol used on the Internet?",
      choices: [
        "TCP",
        "A router",
        "A web browser",
        "A domain name",
      ],
      why: [
        "TCP is a published set of rules for delivering packets reliably, open for anyone to use.",
        "A router is a device that follows protocols, not a protocol itself.",
        "A browser is a program that uses protocols such as HTTP.",
        "A domain name is a label for a site, not a set of rules.",
      ],
      answer: 0,
    },
    {
      id: "bi4m-12", skill: "protocols", type: "mcq", difficulty: "moderate",
      stem: "Over ten years, billions of phones, watches, and home sensors joined the Internet without a redesign of how it works.",
      question: "Which property of the Internet does this show?",
      choices: [
        "Scalability",
        "Low latency",
        "Data privacy",
        "Sequential computing",
      ],
      why: [
        "Scalability is the ability to grow to meet new demand. The Internet's open protocols let new devices join without changing its design.",
        "Latency is how long data takes to arrive. It says nothing about adding devices.",
        "Privacy is about who can see data, not about how many devices can connect.",
        "Sequential computing runs steps one at a time. It is not a property of how a network grows.",
      ],
      answer: 0,
    },
    {
      id: "bi4m-13", skill: "parallel", type: "mcq", difficulty: "moderate",
      stem: "Five independent tasks run on two processors. Processor 1 runs tasks of 16, 28, and 14 seconds. Processor 2 runs tasks of 36 and 18 seconds.",
      question: "How long does it take for all five tasks to finish?",
      choices: [
        "58 seconds",
        "54 seconds",
        "36 seconds",
        "112 seconds",
      ],
      why: [
        "The processors work at the same time, so the work is done when the slower one finishes. Processor 1 needs 16 + 28 + 14 = 58 seconds.",
        "54 seconds is when processor 2 finishes, but processor 1 is still working until 58.",
        "36 seconds is the longest single task. Each processor runs its tasks one after another.",
        "112 seconds is the time on one processor. Two processors running at once take less time.",
      ],
      answer: 0,
    },
    {
      id: "bi4m-14", skill: "parallel", type: "mcq", difficulty: "difficult",
      stem: "Five independent tasks run on three processors. Processor 1 runs a 54 second task, processor 2 runs tasks of 32 and 26 seconds, and processor 3 runs tasks of 38 and 17 seconds.",
      question: "What is the speedup compared with running all five tasks on one processor?",
      choices: [
        "About 2.88",
        "About 3.09",
        "Exactly 3.00",
        "About 0.35",
      ],
      why: [
        "Sequential time is 167 seconds. The slowest processor, number 2, takes 58 seconds. 167 ÷ 58 ≈ 2.88.",
        "3.09 is 167 ÷ 54, which uses the fastest processor. All work is done only when the slowest one finishes.",
        "A speedup of 3 needs all three processors to finish at the same time, and here they do not.",
        "0.35 is 58 ÷ 167, the ratio upside down. Speedup is sequential time divided by parallel time.",
      ],
      answer: 0,
    },
    {
      id: "bi4m-15", skill: "parallel", type: "mcq", difficulty: "easy",
      question: "Which is the main advantage of a parallel solution over a sequential one?",
      choices: [
        "It can finish large jobs in less time",
        "It always uses less electricity in total",
        "It removes every error from the program",
        "It needs only one processor to run",
      ],
      why: [
        "Running parts of a job at the same time lets the whole job finish sooner.",
        "Several processors running at once often use as much power or more. The gain is in time.",
        "Splitting work across processors does not fix errors in the code.",
        "Parallel computing needs more than one processor, or the parts could not run at the same time.",
      ],
      answer: 0,
    },
  ],
};
