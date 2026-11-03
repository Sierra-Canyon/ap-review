export default [
  {
    "id": "u3-01",
    "skill": "net-basics",
    "type": "mcq",
    "meeting": "M28",
    "stem": "A drawing of Kestrel's Cafe 1 shows two boxes in the back closet. The notes describe what each box does.",
    "log": "Box A: eight cables, one to each register, the payment terminal, the office laptop, and the printer.\n       It sends each packet only to the device the packet is labeled for.\nBox B: one cable to Box A and one cable to the internet provider's line.\n       Every packet going to or from the internet passes through it.",
    "question": "What are Box A and Box B?",
    "choices": [
      "Box A is a switch and Box B is a router",
      "Box A is a router and Box B is a switch",
      "Box A is a LAN and Box B is a protocol",
      "Both boxes are switches on one LAN"
    ],
    "why": [
      "A switch connects the devices on one LAN and delivers each packet only to the device it is addressed to. A router connects one network to another, here the cafe's LAN and the internet.",
      "Reversed. The box with a cable to every device in the cafe is the switch. The box between the cafe and the internet is the router.",
      "A LAN is the group of devices in one small area, not a box, and a protocol is a set of rules, not a device. Neither one can be plugged into a closet.",
      "A switch only connects devices on one LAN. Box B is the only path between the cafe and the internet, which is a router's job."
    ],
    "answer": 0
  },
  {
    "id": "u3-02",
    "skill": "net-basics",
    "type": "mcq",
    "meeting": "M28",
    "stem": "A bakery's front counter tablet sends orders to the kitchen tablet over the shop's Wi-Fi. The rule both tablets follow: every packet starts with a \"from\" label, and the kitchen prints any order labeled \"from: front counter.\" A customer's phone joins the same Wi-Fi and sends a packet labeled \"from: front counter\" ordering 40 croissants. The kitchen prints it.",
    "question": "What weakness in the bakery's protocol does this show?",
    "choices": [
      "The kitchen trusts the \"from\" label and never checks who really sent the packet",
      "The packet was too large for the switch, so it was delivered to the wrong tablet",
      "The bakery's router let the phone's packet in from the internet without a label",
      "The two tablets follow different protocols, so the kitchen cannot read real orders"
    ],
    "why": [
      "Every agreement in a protocol is something an attacker can lie about. The label is written by the sender, so anyone on the LAN can write any label.",
      "The packet reached the tablet it was meant for. Nothing about its size went wrong; its label was false.",
      "The phone was on the bakery's own Wi-Fi, so the packet never came from the internet. The problem is inside the LAN.",
      "The kitchen printed the forged order, so it understood it perfectly. Both devices followed the same protocol; one of them lied inside it."
    ],
    "answer": 0
  },
  {
    "id": "u3-03",
    "skill": "net-basics",
    "type": "mcq",
    "meeting": "M28",
    "stem": "A student describing Kestrel writes: \"All three cafes and the roastery belong to Kestrel, so they are all one LAN.\"",
    "question": "What is wrong with the student's reasoning?",
    "choices": [
      "Each building's devices form their own LAN, and routers join the LANs to each other",
      "A LAN can have only one switch, and Kestrel has a switch in every building",
      "Nothing is wrong: having one owner is what makes a group of devices a LAN",
      "A LAN must have a router in it, and only the roastery has one"
    ],
    "why": [
      "A LAN is the devices in one small area, such as one cafe. Kestrel has a switch and a router in every building, so it has four LANs joined through routers.",
      "A LAN can have several switches. The reason the buildings are separate LANs is distance: each is its own small area.",
      "One owner is part of the definition, but so is one small area. Four buildings across town are not one small area.",
      "Kestrel has a router in every building, not only at the roastery. And the router is what joins a LAN to other networks; it does not decide what a LAN is."
    ],
    "answer": 0
  },
  {
    "id": "u3-04",
    "skill": "net-basics",
    "type": "mcq",
    "meeting": "M29",
    "stem": "Kestrel's bookkeeper's laptop, 192.168.10.47, is on the roastery's subnet, 192.168.10.0/24. Its default gateway is 192.168.10.1.",
    "log": "DEVICE              WHERE     IP ADDRESS\nRoaster controller  Roastery  192.168.10.60\nPayment terminal    Cafe 1    192.168.20.11\nOnline store        Internet  203.0.113.10\nRouter              Roastery  192.168.10.1",
    "question": "Which device can the laptop reach without sending the packet to the default gateway first?",
    "choices": [
      "The roaster controller at 192.168.10.60",
      "The payment terminal at 192.168.20.11",
      "The online store at 203.0.113.10",
      "None, since every packet goes to the gateway"
    ],
    "why": [
      "It starts 192.168.10, the same subnet as the laptop, so the packet goes straight through the switch.",
      "It starts 192.168.20, not 192.168.10. Matching only the first two numbers is the trap; Cafe 1 is a different subnet, so the packet goes to the gateway.",
      "203.0.113.10 is outside the roastery's subnet, so the laptop hands the packet to the default gateway.",
      "The gateway is only for destinations outside the laptop's own subnet. Devices on the same subnet are reached through the switch."
    ],
    "answer": 0
  },
  {
    "id": "u3-05",
    "skill": "net-basics",
    "type": "mcq",
    "meeting": "M29",
    "stem": "A dentist office laptop's table of IP addresses and MAC addresses is shown before and after one reply arrives. The reply was sent by the front desk computer, 192.168.1.23.",
    "log": "[1] Before:       192.168.1.1  is at  00:1d:7e:4a:10:01\n[2] Reply heard:  192.168.1.1  is at  3c:52:82:9f:e6:07\n[3] After:        192.168.1.1  is at  3c:52:82:9f:e6:07",
    "question": "192.168.1.1 is the laptop's default gateway. Where will the laptop's next packet for the internet go first?",
    "choices": [
      "To the front desk computer, because the table now links the gateway to its MAC address",
      "To the router, because the gateway's IP address is still 192.168.1.1 in the table",
      "Nowhere, because ARP rejects any reply that does not come from the real router",
      "To every device on the LAN, because a reply to ARP is sent as a broadcast"
    ],
    "why": [
      "Inside a LAN, the MAC address decides which card gets the packet. Line 3 shows the laptop now uses the front desk computer's MAC address for its gateway.",
      "The IP address says which device a packet is for, but the switch delivers by MAC address. Line 3 points the gateway's IP address at a different card.",
      "ARP never checks who replied. Line 3 shows the laptop believed the reply and wrote it down.",
      "The question \"Who has 192.168.1.1?\" is the broadcast. The reply goes to the one device that asked, and it changed only that laptop's table."
    ],
    "answer": 0
  },
  {
    "id": "u3-06",
    "skill": "net-basics",
    "type": "mcq",
    "meeting": "M29",
    "stem": "A student checks her laptop's addresses at the school library and again at home. She says, \"The library recognizes my laptop because its IP address never changes.\"",
    "log": "[1] Library:  IP address 10.0.5.37      MAC address 3c:22:fb:91:0a:7e   default gateway 10.0.5.1\n[2] Home:     IP address 192.168.1.14   MAC address 3c:22:fb:91:0a:7e   default gateway 192.168.1.1",
    "question": "What does the output show about her claim?",
    "choices": [
      "She is wrong: the IP address changed, and only the MAC address stayed the same",
      "She is right: the IP address is built into the card, so it matches on both lines",
      "She is wrong: the MAC address changed, and only the IP address stayed the same",
      "She is right: the default gateway is the same, so the library knows the laptop"
    ],
    "why": [
      "The network a device joins assigns its IP address, so it changed from 10.0.5.37 to 192.168.1.14. The MAC address is built into the network card and is the same on both lines.",
      "That is the common mistake. The MAC address is built in; the IP address is assigned by each network the laptop joins.",
      "Reversed. Both lines show 3c:22:fb:91:0a:7e as the MAC address, while the IP address is different on each.",
      "The default gateway changed too, from 10.0.5.1 to 192.168.1.1. Each network has its own router address."
    ],
    "answer": 0
  },
  {
    "id": "u3-07",
    "skill": "net-basics",
    "type": "mcq",
    "meeting": "M30",
    "stem": "These lines come from the roastery router's log for the night of Thursday, November 5. The roastery's public address is 203.0.113.40.",
    "log": "     TIME      SOURCE          SPORT  DESTINATION    DPORT  PROTO  ACTION\n[1]  01:12:08  203.0.113.77    48211  203.0.113.40   23     TCP    BLOCK\n[2]  03:22:31  192.168.10.47   50914  198.51.100.23  443    TCP    ACCEPT\n[3]  05:09:44  203.0.113.77    39102  203.0.113.40   3389   TCP    BLOCK\n[4]  06:41:17  198.51.100.140  61530  203.0.113.40   3389   TCP    ACCEPT",
    "question": "Which line shows a connection from outside Kestrel that the router let in?",
    "choices": [
      "Line 4, from 198.51.100.140 to port 3389",
      "Line 2, from 192.168.10.47 to port 443",
      "Line 3, from 203.0.113.77 to port 3389",
      "Line 1, from 203.0.113.77 to port 23"
    ],
    "why": [
      "198.51.100.140 is not a Kestrel address, the destination is the roastery, and the action is ACCEPT. Port 3389 is remote desktop, so someone outside reached a computer inside.",
      "This line was accepted, but 192.168.10.47 is the bookkeeper's laptop, inside the roastery. The connection started inside and went out.",
      "Same port as line 4, but read the last column: BLOCK. The router turned it away.",
      "Port 23 was the door knocked on most that night, but this line ends in BLOCK. Nothing got in."
    ],
    "answer": 0
  },
  {
    "id": "u3-08",
    "skill": "net-basics",
    "type": "mcq",
    "meeting": "M30",
    "stem": "A student captures three short exchanges on her own VM.",
    "log": "[A] [S], then [S.], then [.], then numbered data, with one lost piece sent again\n[B] One question to port 53, one answer back, no setup before it\n[C] Echo request, then echo reply",
    "question": "Which exchange was carried by TCP?",
    "choices": [
      "Exchange A",
      "Exchange B",
      "Exchange C",
      "All three, since each one got an answer"
    ],
    "why": [
      "TCP sets up a connection with three packets before any data, numbers the data, and resends anything lost. Exchange A shows all three.",
      "One question and one answer with no setup is UDP, the way DNS asks for an address on port 53.",
      "An echo request and echo reply is a ping, carried by ICMP.",
      "Getting an answer does not make an exchange TCP. UDP and ICMP get answers too; only TCP sets up a connection first and resends lost pieces."
    ],
    "answer": 0
  },
  {
    "id": "u3-09",
    "skill": "net-basics",
    "type": "mcq",
    "meeting": "M30",
    "stem": "Searching the same night's roastery log for the bookkeeper's laptop gives 105 lines like these, from 00:02 until the log ends. Nobody was at the roastery.",
    "log": "     TIME      SOURCE         SPORT  DESTINATION    DPORT  PROTO  ACTION\n[1]  01:34:31  192.168.10.47  50211  198.51.100.23  443    TCP    ACCEPT\n[2]  01:38:31  192.168.10.47  50236  198.51.100.23  443    TCP    ACCEPT\n[3]  01:42:31  192.168.10.47  50262  198.51.100.23  443    TCP    ACCEPT\n[4]  01:46:31  192.168.10.47  50289  198.51.100.23  443    TCP    ACCEPT",
    "question": "What does this pattern most likely show?",
    "choices": [
      "Command and control: the laptop checks in with an outside server every four minutes",
      "Reconnaissance: an outside server is knocking on the laptop's port 443 all night",
      "DNS lookups: the laptop is asking for the store's address every four minutes",
      "Nothing unusual: ACCEPT means the router already checked these connections"
    ],
    "why": [
      "The laptop starts every connection itself, to the same outside address, on a fixed schedule, with no one there. That is Unit 2's command and control, seen in a log.",
      "Read the source column. Every line starts at 192.168.10.47, inside Kestrel; the outside server is the destination, not the one knocking.",
      "DNS uses port 53. These connections go to port 443, secure web pages, at an address that is not Kestrel's store.",
      "ACCEPT only means no rule stopped it. The evidence is the pattern: the same outside server, every four minutes, all night, from an empty office."
    ],
    "answer": 0
  },
  {
    "id": "u3-10",
    "skill": "net-attacks",
    "type": "mcq",
    "meeting": "M31",
    "stem": "A packet capture from a fictional library's Wi-Fi shows a patron signing in to the library catalog with a card number and password.",
    "log": "[1] 10.0.5.37 to 10.0.5.1       DNS    question: catalog.lakeviewlibrary.example\n[2] 10.0.5.37 to 198.51.100.80  HTTPS  site name: catalog.lakeviewlibrary.example\n[3] 10.0.5.37 to 198.51.100.80  HTTPS  encrypted data, 412 bytes\n[4] 198.51.100.80 to 10.0.5.37  HTTPS  encrypted data, 1,380 bytes",
    "question": "What can someone eavesdropping on this Wi-Fi learn from these packets?",
    "choices": [
      "Which site the laptop visited, but not the card number or password",
      "The card number and password, because the capture saved every packet",
      "Nothing at all, because HTTPS hides every part of the connection",
      "The password only, because HTTPS encrypts the card number but not passwords"
    ],
    "why": [
      "Lines 1 and 2 show the site's name in readable form. Lines 3 and 4 are encrypted, so what was typed cannot be read.",
      "Saving a packet is not the same as reading it. HTTPS encrypts the page and what was typed; capturing it gives only scrambled data.",
      "HTTPS still shows the site's name, as line 2 does, and the DNS question in line 1 is readable too.",
      "HTTPS encrypts everything typed into the page, password included. What it leaves readable is the site's name."
    ],
    "answer": 0
  },
  {
    "id": "u3-11",
    "skill": "net-attacks",
    "type": "mcq",
    "meeting": "M31",
    "stem": "In the lab's packet capture from Kestrel, jrivera's password could be read in the first half of the file but not in the second half. Both halves show the same sign-in page.",
    "question": "What was different about the second half?",
    "choices": [
      "It used HTTPS, which encrypts what is typed, instead of HTTP, which sends it in plain text",
      "It used HTTP, which encrypts what is typed, instead of HTTPS, which sends it in plain text",
      "It used Telnet, which hides passwords, instead of HTTP, which shows them to anyone",
      "It used UDP instead of TCP, so the password packets were lost before they were saved"
    ],
    "why": [
      "HTTP carries web pages in plain text, so anyone capturing the traffic can read the form. HTTPS is HTTP protected by encryption.",
      "Reversed. HTTP is the plain text one; the S in HTTPS is the protection.",
      "Telnet sends everything, passwords included, in plain text. It is worse than HTTP, not better.",
      "Web sign-ins use TCP in both halves. The packets were captured; in the second half they were encrypted."
    ],
    "answer": 0
  },
  {
    "id": "u3-12",
    "skill": "net-attacks",
    "type": "mcq",
    "meeting": "M31",
    "stem": "The roastery router's policy says: \"Services that send passwords in the clear are turned off.\" A line from the router's log for November 5:",
    "log": "     TIME      SOURCE        SPORT  DESTINATION   DPORT  PROTO  ACTION\n[1]  02:51:13  203.0.113.77  41877  203.0.113.40  23     TCP    BLOCK",
    "question": "Which service was this connection looking for, and why does the policy turn it off?",
    "choices": [
      "Telnet, because it sends everything, passwords included, in plain text",
      "HTTPS, because anyone capturing it can read the passwords typed in",
      "DNS, because it turns names into addresses without checking passwords",
      "Telnet, because it uses UDP and so cannot confirm a password arrived"
    ],
    "why": [
      "Port 23 is Telnet, remote control of a computer with no encryption. Anyone sniffing the traffic reads the password.",
      "HTTPS is port 443, and it encrypts what is typed. It is the safe choice, not the one the policy turns off.",
      "DNS is port 53. This connection asked for port 23.",
      "The service is right but the reason is wrong: the line shows TCP. Telnet is turned off because it sends passwords in plain text."
    ],
    "answer": 0
  },
  {
    "id": "u3-13",
    "skill": "net-attacks",
    "type": "mcq",
    "meeting": "M32",
    "stem": "Kestrel's break room has a wall data port connected to the roastery switch. Suppose a stranger plugs in a laptop there and sends the switch thousands of fake MAC addresses, until the switch starts sending every packet out every port.",
    "question": "Which switch setting stops this attack?",
    "choices": [
      "Port security that limits how many MAC addresses may use that port",
      "MAC spoofing that copies a trusted device's address onto the port",
      "Turning off Telnet on the router so nobody can sign in to it",
      "A new IP address for the switch so the stranger cannot find it"
    ],
    "why": [
      "This is MAC flooding. Port security caps the number of MAC addresses on each port, so the flood is shut out after the first few.",
      "MAC spoofing is an attack, not a setting. It is the stranger's other option from the same wall port.",
      "Turning off Telnet protects sign-ins to the router. The flood never signs in to anything; it fills the switch's table.",
      "The attack works by sending fake MAC addresses through the port, not by finding the switch's IP address. A new address changes nothing."
    ],
    "answer": 0
  },
  {
    "id": "u3-14",
    "skill": "net-attacks",
    "type": "mcq",
    "meeting": "M32",
    "stem": "A small library's switch keeps a table of which MAC addresses it has seen on each port. These lines are from one morning.",
    "log": "[1] 09:58  Port 3   1 MAC address    (circulation desk computer)\n[2] 09:58  Port 7   1 MAC address    (meeting room wall jack)\n[3] 10:00  Port 7   4,812 MAC addresses, table full\n[4] 10:01  Switch now sending packets for unknown devices out every port",
    "question": "Which attack do these lines show?",
    "choices": [
      "MAC flooding from the meeting room jack",
      "MAC spoofing of the circulation desk",
      "A rogue access point on port 3",
      "A broadcast from the circulation desk"
    ],
    "why": [
      "Line 3 shows one port going from 1 to 4,812 MAC addresses in two minutes, and line 4 shows the switch repeating everything. That is MAC flooding.",
      "MAC spoofing copies one trusted address. Nothing in the log shows the circulation desk's address appearing anywhere else.",
      "Port 3 still shows one device. The change is on port 7, and it is thousands of addresses, not one new box.",
      "A broadcast is one message to every device. The log shows a full table caused by fake addresses on port 7."
    ],
    "answer": 0
  },
  {
    "id": "u3-15",
    "skill": "net-attacks",
    "type": "mcq",
    "meeting": "M32",
    "stem": "A dentist office uses one rule on its switch: only devices on its approved list of MAC addresses may connect. The office printer is on the list.",
    "log": "[1] 08:30  Port 4   00:80:77:2c:51:9a   printer (approved)\n[2] 12:15  Port 4   link down           printer unplugged for repair\n[3] 12:21  Port 11  00:80:77:2c:51:9a   waiting room wall jack (approved)",
    "question": "What does line 3 most likely show?",
    "choices": [
      "MAC spoofing: a device in the waiting room copied the printer's address",
      "MAC flooding: the waiting room jack sent the switch a fake address",
      "A rogue access point: the printer was moved to the waiting room",
      "Port security working: the printer was approved, so it was let in"
    ],
    "why": [
      "The printer was unplugged at 12:15, and six minutes later its exact address appears on a different port. Something copied a trusted device's MAC address to get past the list.",
      "Flooding sends thousands of fake addresses to fill the table. Line 3 is one address, copied from a real device.",
      "A rogue access point is a wireless box added without permission. Nothing shows Wi-Fi, and a printer under repair is not in the waiting room.",
      "The list let it in because it only checks the address, and the address was copied. That is why the approved list alone is weak."
    ],
    "answer": 0
  },
  {
    "id": "u3-16",
    "skill": "net-attacks",
    "type": "mcq",
    "meeting": "M33",
    "stem": "A packet capture from a fictional accounting office. Its default gateway is 192.168.1.1, and the router's MAC address is 00:0c:29:5b:aa:01.",
    "log": "[1] 08:59:58  ARP request  Who has 192.168.1.1? Tell 192.168.1.23\n[2] 08:59:58  ARP reply    192.168.1.1 is at 00:0c:29:5b:aa:01\n[3] 09:03:12  ARP reply    192.168.1.1 is at 9c:b6:d0:71:3e:4f\n[4] 09:03:14  ARP reply    192.168.1.1 is at 9c:b6:d0:71:3e:4f",
    "question": "At which line does the ARP poisoning begin?",
    "choices": [
      "Line 3, a reply nobody asked for with a new MAC address",
      "Line 1, a question sent to every device on the LAN",
      "Line 2, a reply that came right after the question",
      "Line 4, the second reply with the attacker's address"
    ],
    "why": [
      "Line 3 is the first false reply: no one asked, and it links the gateway to a MAC address that is not the router's. Devices that believe it send their internet traffic to the attacker.",
      "An ARP request is a normal broadcast. Every device asks this way; nothing false is said yet.",
      "Line 2 gives the router's own MAC address, answering the question in line 1. That is ARP working as designed.",
      "Line 4 repeats the lie to keep it in the tables. The poisoning began with the first false reply, at 09:03:12."
    ],
    "answer": 0
  },
  {
    "id": "u3-17",
    "skill": "net-attacks",
    "type": "mcq",
    "meeting": "M33",
    "stem": "Suppose the laptop in Kestrel's break room, 192.168.10.66, poisons the bookkeeper's laptop's ARP table so that 192.168.10.1 points to the break room laptop. The break room laptop then passes each packet on to the real router, so the bookkeeper notices nothing.",
    "question": "What is the break room laptop doing once it passes the traffic along?",
    "choices": [
      "An on-path attack, relaying traffic it can read or change",
      "MAC flooding, filling the switch's table with fake addresses",
      "A rogue access point, adding Wi-Fi the owner never approved",
      "MAC spoofing, copying the router's address onto its own card"
    ],
    "why": [
      "It sits between the bookkeeper's laptop and the router and relays their traffic. That is an on-path attack, and ARP poisoning is how it got there.",
      "MAC flooding fills the switch's table so it repeats everything. Here the switch works normally; one laptop's ARP table was lied to.",
      "No wireless device was added. The break room laptop is plugged into the network and lying about the gateway.",
      "The trick here is a false ARP reply, not a copied MAC address. The router's IP address now points to the break room laptop's own MAC address."
    ],
    "answer": 0
  },
  {
    "id": "u3-18",
    "skill": "net-attacks",
    "type": "mcq",
    "meeting": "M33",
    "stem": "At a small credit union, an attacker on path between a teller's computer and the bank's server catches a transfer form on its way. The attacker changes the account number in it before passing it on, and the server accepts it.",
    "question": "Which leg of the CIA triad did changing the form break?",
    "choices": [
      "Integrity, because the data was changed without anyone knowing",
      "Confidentiality, because the attacker was able to read the form",
      "Availability, because the server could not reach the real account",
      "Non-repudiation, because the teller cannot prove who sent the form"
    ],
    "why": [
      "Integrity means data is accurate and has not been changed by anyone unauthorized. The account number arrived different from what the teller typed.",
      "Reading the form during interception breaks confidentiality, but the question asks about changing it. Changing data is integrity.",
      "The server was reachable and accepted the form. Nothing was kept from anyone.",
      "The teller did send a form. The problem is that what arrived was not what was sent, which is integrity."
    ],
    "answer": 0
  },
  {
    "id": "u3-19",
    "skill": "net-attacks",
    "type": "mcq",
    "meeting": "M34",
    "stem": "Kestrel's online store is at 203.0.113.10. Suppose a cafe laptop asks DNS for the store's address and receives this answer.",
    "log": "[1] Question:      Kestrel online store, address?\n[2] Answer:        198.51.100.77\n[3] Answered by:   198.51.100.77   (not Kestrel's name server)",
    "question": "What happens to a staff member who follows this answer and signs in?",
    "choices": [
      "The browser goes to 198.51.100.77, where a fake sign-in page can collect the password",
      "The browser goes to 203.0.113.10, because the real store's address cannot be changed",
      "The laptop is flooded with replies until it can no longer reach any site at all",
      "The laptop's ARP table links the store to the attacker's MAC address on the LAN"
    ],
    "why": [
      "This is DNS poisoning: the name now leads to an address the attacker controls. A copy of the sign-in page there is credential harvesting.",
      "The browser connects to whatever address DNS returns. The real store's address is unchanged, but the laptop never asks for it again.",
      "That would be a DoS. One false answer does not flood anything; it sends the user somewhere else.",
      "ARP poisoning lies about MAC addresses inside a LAN. This lie is about which IP address a name belongs to."
    ],
    "answer": 0
  },
  {
    "id": "u3-20",
    "skill": "net-attacks",
    "type": "mcq",
    "meeting": "M34",
    "stem": "A community college's lab LAN is 10.0.7.0/24, and 10.0.7.255 is its broadcast address. A server outside the college, 198.51.100.50, stops answering. The college router logged this.",
    "log": "[1] 09:14:02.001  198.51.100.50  to 10.0.7.255     ICMP  echo request\n[2] 09:14:02.004  10.0.7.12      to 198.51.100.50  ICMP  echo reply\n[3] 09:14:02.004  10.0.7.13      to 198.51.100.50  ICMP  echo reply\n[4] 09:14:02.005  10.0.7.14      to 198.51.100.50  ICMP  echo reply\n[5]                (87 more echo replies to 198.51.100.50 in the same second)",
    "question": "Which detail shows this is a smurf attack?",
    "choices": [
      "Line 1: one ping to the broadcast address with the victim's address forged as sender",
      "Lines 2 to 4: the replies come from many computers, so the attack is a DDoS",
      "Line 1: the ping uses ICMP, and any ICMP traffic toward a server is an attack",
      "Lines 2 to 4: the lab computers were hijacked and are attacking on purpose"
    ],
    "why": [
      "The victim did not send line 1; its address was forged. Sent to the broadcast address, one ping makes every lab computer reply to the victim.",
      "Many senders alone would be a DDoS. What makes it a smurf attack is how the senders were triggered: one forged ping to a broadcast address.",
      "Pings are ordinary ICMP. The problem is the forged sender and the broadcast destination.",
      "The lab computers were not hijacked; they answered a ping, as computers do. They were tricked by the forged sender address."
    ],
    "answer": 0
  },
  {
    "id": "u3-21",
    "skill": "net-attacks",
    "type": "mcq",
    "meeting": "M34",
    "stem": "Suppose Kestrel's online store, 203.0.113.10, receives about 9,000 connection requests in one minute from 2,400 different addresses. Customers trying to buy coffee get no page at all.",
    "question": "Which attack is this, and which leg of the CIA triad does it break?",
    "choices": [
      "DDoS, breaking availability, because real customers cannot reach the store",
      "DoS, breaking availability, because the requests come from one computer",
      "DDoS, breaking integrity, because the store's pages were changed by the flood",
      "Smurf attack, breaking confidentiality, because the requests read the store"
    ],
    "why": [
      "Thousands of sources flooding one server at once is a DDoS. It keeps real users from reaching the system, which is availability.",
      "Availability is right, but 2,400 different addresses is not one computer. A flood from many computers at once is a DDoS.",
      "A flood makes the store unreachable; nothing says a page was changed. Integrity is about data being altered.",
      "A smurf attack uses pings sent to a broadcast address, and nothing here shows that. A flood does not read data either."
    ],
    "answer": 0
  },
  {
    "id": "u3-22",
    "skill": "net-attacks",
    "type": "mcq",
    "meeting": "M35",
    "stem": "A packet capture from a fictional dentist office shows a port scan of its server, 192.168.1.20. In the reply column, [S.] means the port agreed to start a connection, and [R.] means it refused.",
    "log": "     PORT  SENT  REPLY\n[1]  21    [S]   [R.]\n[2]  22    [S]   [S.]\n[3]  23    [S]   [R.]\n[4]  80    [S]   [S.]\n[5]  443   [S]   [S.]\n[6]  3306  [S]   [R.]\n[7]  3389  [S]   [S.]",
    "question": "Which ports are open on the server?",
    "choices": [
      "22, 80, 443, and 3389",
      "21, 23, and 3306",
      "All seven ports listed",
      "80 and 443 only"
    ],
    "why": [
      "An open port has a program listening that will accept connections. Those four answered [S.], the second step of setting up a TCP connection.",
      "Reversed. [R.] is a refusal: nothing is listening on 21, 23, or 3306.",
      "Every port answered, but answering with [R.] means closed. Only [S.] means open.",
      "80 and 443 are the web ports, but 22 and 3389 answered [S.] too. Lines 2 and 7 show two more open ports, and 3389 is remote desktop."
    ],
    "answer": 0
  },
  {
    "id": "u3-23",
    "skill": "net-attacks",
    "type": "mcq",
    "meeting": "M35",
    "stem": "Suppose a vulnerability scanner report on Kestrel's store server, 203.0.113.10, lists these findings.",
    "log": "[1] Port 23 open to the whole internet. Telnet sign-in, sent in plain text.\n[2] Web page footer shows the store software's version number.\n[3] Port 443 open to the whole internet. HTTPS store pages.\n[4] Port 3306 open, but only to the roastery's address, 203.0.113.40.",
    "question": "Which finding should be rated high, and why?",
    "choices": [
      "Finding 1, because anyone online can reach a sign-in that sends passwords readable",
      "Finding 3, because every open port on a server is a door an attacker can knock on",
      "Finding 2, because showing a version number lets anyone sign in to the server",
      "Finding 4, because an open database port is high no matter who can reach it"
    ],
    "why": [
      "Telnet sends passwords in plain text, and the whole internet can reach it. The store does not need it to sell coffee.",
      "Port 443 is how customers reach the store, so it has to be open. A rating needs a weakness, not just a door.",
      "A version number helps an attacker look up known weaknesses, which is worth fixing, but it does not let anyone sign in. That makes it lower than finding 1.",
      "Who can reach a port matters. Only one known address, Kestrel's own roastery, can reach 3306."
    ],
    "answer": 0
  },
  {
    "id": "u3-24",
    "skill": "net-attacks",
    "type": "mcq",
    "meeting": "M35",
    "stem": "A drawing of Kestrel's Cafe 1 lists every device and which switch it plugs into. It shows the guest Wi-Fi and the payment terminal, 192.168.20.11, on the same switch.",
    "question": "What is this drawing, and what does it reveal?",
    "choices": [
      "A network map, showing customers' devices share a switch with the terminal",
      "A port scan, showing which ports on the payment terminal answer customers",
      "A vulnerability scanner report, rating the payment terminal high severity",
      "A packet capture, recording what customers' phones sent to the terminal"
    ],
    "why": [
      "A network map shows every device and how the devices connect. It is how the problem was found: customers and payments sit on one switch.",
      "A port scan checks one device's ports one after another. This drawing lists devices and connections, not ports.",
      "A vulnerability scanner report lists known weaknesses with severity ratings. A drawing of connections is not a report.",
      "A packet capture is a recording of packets. This is a drawing of devices; nothing was recorded."
    ],
    "answer": 0
  },
  {
    "id": "u3-25",
    "skill": "wireless",
    "type": "mcq",
    "meeting": "M36",
    "stem": "Suppose Kestrel's guest Wi-Fi at Cafe 1 is named KestrelGuest and has no password, and both of the cafe's WAPs have MAC addresses that start 3c:84:6a. A customer's phone lists these networks.",
    "log": "     SSID          SECURITY  WAP MAC ADDRESS    SIGNAL\n[1]  KestrelGuest  none      3c:84:6a:10:22:01  70%\n[2]  KestrelStaff  password  3c:84:6a:10:22:02  68%\n[3]  KestrelGuest  none      7a:13:9e:44:05:bf  96%\n[4]  Pixel_7731    password  d2:41:08:7c:19:33  40%",
    "question": "Which line is most likely the evil twin?",
    "choices": [
      "Line 3",
      "Line 1",
      "Line 2",
      "Line 4"
    ],
    "why": [
      "It copies the guest SSID exactly, but its MAC address does not match Kestrel's WAPs, and its signal is the strongest, so phones pick it first. That is an evil twin.",
      "This is the real guest network: the expected name from one of Kestrel's own WAPs.",
      "A different SSID from Kestrel's own WAP, with a password. An evil twin copies the name of the network people already trust.",
      "This is somebody's phone sharing its connection. It uses its own name and copies nothing."
    ],
    "answer": 0
  },
  {
    "id": "u3-26",
    "skill": "wireless",
    "type": "mcq",
    "meeting": "M36",
    "stem": "A cafe manager suggests leaving WPS turned on for Kestrel's staff Wi-Fi so new tablets can join with an eight-digit PIN instead of the long password.",
    "question": "What is the best response to the proposal?",
    "choices": [
      "Turn WPS off, because the eight-digit PIN can be guessed from outside the cafe",
      "Leave WPS on, because an eight-digit PIN is longer than most staff passwords",
      "Turn WPS off, because it makes the WAP send beacon frames to everyone nearby",
      "Leave WPS on, but change the SSID so attackers cannot find the staff network"
    ],
    "why": [
      "WPS joins devices with a PIN that can be guessed, so anyone within range, even outside, can try. That is why it is usually turned off.",
      "The PIN is the weakness. It can be guessed far faster than a long password, from the sidewalk.",
      "Every WAP sends beacon frames whether WPS is on or off. That is how phones learn a network is there.",
      "Changing the SSID changes only the network's name. The guessable PIN still works under any name."
    ],
    "answer": 0
  },
  {
    "id": "u3-27",
    "skill": "wireless",
    "type": "mcq",
    "meeting": "M36",
    "stem": "Suppose these notes come from a busy afternoon at Kestrel's Cafe 1.",
    "log": "[1] 2:10 p.m.  Every phone and laptop on the guest and staff Wi-Fi drops off at once.\n[2] 2:11 p.m.  Both WAPs show power on and are sending beacon frames.\n[3] 2:12 p.m.  The wired payment terminal is still taking cards.\n[4] 2:40 p.m.  Wi-Fi comes back on its own. Nothing was changed.",
    "question": "Which attack best fits these notes?",
    "choices": [
      "Jamming",
      "An evil twin",
      "MAC flooding",
      "WPS PIN guessing"
    ],
    "why": [
      "Jamming floods the wireless channel with noise. Every wireless device drops at once, the WAPs still look healthy, and wired devices keep working.",
      "An evil twin pulls some devices onto a fake network. It does not knock every device off at once while the wired terminal works.",
      "MAC flooding hits the switch, and the wired payment terminal is on the switch. Line 3 shows the wired side is fine.",
      "Guessing the PIN would let an attacker join. It would not knock everyone else off."
    ],
    "answer": 0
  },
  {
    "id": "u3-28",
    "skill": "wireless",
    "type": "mcq",
    "meeting": "M37",
    "stem": "Kestrel's wireless policy has four lines. Kestrel has 34 employees.",
    "log": "[1] The staff network uses WPA3, which encrypts traffic with AES.\n[2] Each employee signs in to the staff network through EAP with their own account.\n[3] The staff network does not send beacon frames.\n[4] Staff laptops working from home use the VPN, with split tunneling off.",
    "question": "When a barista leaves the company, which line lets Kestrel cut off that one person without changing anything for the other 33?",
    "choices": [
      "Line 2",
      "Line 1",
      "Line 3",
      "Line 4"
    ],
    "why": [
      "With EAP, each person signs in with their own account, so disabling one account removes one person. With one shared password, everyone would need the new one.",
      "WPA3 and AES protect the traffic once someone is on. They do not decide which person may join.",
      "Hiding the network from the Wi-Fi list does nothing to someone who already knows it is there and can sign in.",
      "The VPN rule is for working from home. It does not control who joins the staff Wi-Fi in the cafe."
    ],
    "answer": 0
  },
  {
    "id": "u3-29",
    "skill": "wireless",
    "type": "mcq",
    "meeting": "M37",
    "stem": "A family shelter offers Wi-Fi to residents and runs a separate staff network for its case files. A volunteer proposes MAC filtering as the staff network's only protection: just the staff's six laptops on the approved list, and no password.",
    "question": "What is the main weakness in the proposal?",
    "choices": [
      "A resident's device can copy an approved laptop's MAC address and join",
      "MAC filtering blocks only wired devices, so any phone can join the staff network",
      "MAC filtering turns on WPS, so residents could guess the eight-digit PIN",
      "Six laptops is too many for one list, so the WAP would start to drop them"
    ],
    "why": [
      "MAC spoofing defeats MAC filtering, and the approved addresses can be seen in the air. With no password and no encryption, the case files have nothing else in the way.",
      "MAC filtering works on wireless devices too; that is the point of the list. Its weakness is that the address it checks can be copied.",
      "MAC filtering and WPS are separate settings. One does not turn on the other.",
      "Six addresses is a short list. The problem is that the list checks something easy to fake."
    ],
    "answer": 0
  },
  {
    "id": "u3-30",
    "skill": "wireless",
    "type": "mcq",
    "meeting": "M37",
    "stem": "Suppose Dana Whitfield's laptop shows these VPN settings while she works from home.",
    "log": "[1] VPN: connected to Kestrel roastery\n[2] Traffic to 192.168.10.0/24: through the tunnel\n[3] All other traffic: straight to the home internet",
    "question": "Which setting is on, and why does Kestrel's policy forbid it?",
    "choices": [
      "Split tunneling, so her web traffic skips Kestrel's protections",
      "Split tunneling, so her roastery traffic travels without encryption",
      "WPA3, so the tunnel cannot reach the roastery's office network",
      "EAP, so she signs in to the VPN with one password shared by all"
    ],
    "why": [
      "Only some traffic goes through the tunnel, which is split tunneling. Everything else, including any malicious site she visits, goes around Kestrel's protections.",
      "The setting is right, but line 2 shows the roastery traffic does go through the encrypted tunnel. The risk is the traffic that does not.",
      "WPA3 secures Wi-Fi, not a VPN, and line 2 shows the tunnel reaching the roastery's subnet.",
      "EAP gives each person their own account; that is the opposite of a shared password. The log shows a tunnel setting, not a sign-in method."
    ],
    "answer": 0
  },
  {
    "id": "u3-31",
    "skill": "segmentation",
    "type": "mcq",
    "meeting": "M38",
    "stem": "A drawing of Kestrel's Cafe 1 showed customers' phones on the same switch as the payment terminal. The cafe has room for only one switch.",
    "question": "Which change keeps the customers away from the terminal using the switch the cafe already has?",
    "choices": [
      "Put the guest Wi-Fi and the payment terminal on separate VLANs",
      "Turn on MAC filtering for the guest Wi-Fi so only phones can join",
      "Change the payment terminal's SSID so customers cannot see it",
      "Move the payment terminal to the same subnet as the guest Wi-Fi"
    ],
    "why": [
      "A VLAN is a separate network created in a switch's settings, so devices on one switch are kept apart. That is network segmentation without new hardware.",
      "MAC filtering decides who joins, and customers still need to join. Once on, they would still share the terminal's network.",
      "The terminal is wired; it has no SSID. Hiding a name would not separate anything.",
      "That puts them closer together. The goal is separate segments, not one shared subnet."
    ],
    "answer": 0
  },
  {
    "id": "u3-32",
    "skill": "segmentation",
    "type": "mcq",
    "meeting": "M38",
    "stem": "Adams County Hospital is adding a patient portal: a web server the public must reach from the internet. Its patient records server must stay unreachable from outside.",
    "question": "Where should the portal server go?",
    "choices": [
      "In a screened subnet (DMZ), with a filter on each side of it",
      "On the internal network, next to the patient records server",
      "On the guest Wi-Fi, since that is where outside visitors connect",
      "On the internet side of the hospital, with nothing in front of it"
    ],
    "why": [
      "A screened subnet sits between the internet and the internal network, with a filter on each side, for servers the public must reach. If the portal is broken into, the attacker is still outside the internal network.",
      "Anyone who breaks into the portal would already be next to the records server. Public servers do not belong in the most trusted segment.",
      "Guest Wi-Fi is for people inside the building. Internet users do not connect through it, and it is not built to protect a server.",
      "With nothing in front of it, every attack on the internet reaches the portal directly."
    ],
    "answer": 0
  },
  {
    "id": "u3-33",
    "skill": "segmentation",
    "type": "mcq",
    "meeting": "M38",
    "stem": "A small hotel divides its network into security zones. Each row says which other zones a zone may reach.",
    "log": "     ZONE      DEVICES                     MAY REACH\n[1]  Payments  card terminals              card processor on the internet\n[2]  Office    front desk, manager         Payments, internet\n[3]  Cameras   camera recorder             Office\n[4]  Guest     guests' phones and laptops  Internet, Office",
    "question": "Which row breaks the idea of security zones most?",
    "choices": [
      "Row 4, because the least trusted zone may reach the office",
      "Row 1, because the payment zone can reach the internet",
      "Row 3, because cameras should never reach any other zone",
      "Row 2, because the office should not reach the internet"
    ],
    "why": [
      "Guests are the least trusted devices. A security zone groups devices that need the same trust, and the rules between zones should keep guests out of the office.",
      "Card terminals have to reach the card processor to work, and the row limits them to that one destination.",
      "Sending video to the office so staff can watch it is a reason to allow one path. It is a weaker problem than strangers reaching the office.",
      "Front desk staff need the internet for bookings. Office to internet is ordinary traffic."
    ],
    "answer": 0
  },
  {
    "id": "u3-34",
    "skill": "firewalls",
    "type": "mcq",
    "meeting": "M39",
    "stem": "A practice ACL for the firewall in front of Kestrel's store server, 203.0.113.10. The roastery's address is 203.0.113.40. One packet arrives: TCP from 198.51.100.140 (port 51022) to 203.0.113.10, port 22.",
    "log": "RULE  ACTION  PROTO  SOURCE        SPORT  DESTINATION   DPORT\n1     Block   TCP    203.0.113.77  any    any           any\n2     Allow   TCP    any           any    203.0.113.10  443\n3     Allow   TCP    any           any    203.0.113.10  80\n4     Allow   TCP    203.0.113.40  any    203.0.113.10  22\n5     Block   TCP    any           any    203.0.113.10  3306\n6     Block   Any    any           any    any           any",
    "question": "What happens to the packet?",
    "choices": [
      "Blocked by rule 6",
      "Allowed by rule 4",
      "Blocked by rule 5",
      "Allowed by rule 2"
    ],
    "why": [
      "Rules are read from the top. Rule 1 needs 203.0.113.77, rules 2, 3, and 5 need other ports, and rule 4 needs the roastery's address. Nothing matches until rule 6, Block Any.",
      "Rule 4 is for port 22, but only from 203.0.113.40. Matching the port and skipping the source is the trap.",
      "Rule 5 is for port 3306. The packet asks for port 22.",
      "Rule 2 is for port 443, secure web pages. This packet asks for port 22."
    ],
    "answer": 0
  },
  {
    "id": "u3-35",
    "skill": "firewalls",
    "type": "mcq",
    "meeting": "M39",
    "stem": "A school laptop, 10.0.5.20, visits a website. The firewall has no rule allowing traffic from 198.51.100.80 to come in.",
    "log": "     TIME      SOURCE         SPORT  DESTINATION    DPORT  PROTO  ACTION\n[1]  10:02:11  10.0.5.20      51500  198.51.100.80  443    TCP    ACCEPT\n[2]  10:02:11  198.51.100.80  443    10.0.5.20      51500  TCP    ACCEPT\n[3]  10:05:40  198.51.100.80  443    10.0.5.20      51877  TCP    BLOCK",
    "question": "Which kind of firewall lets line 2 in and blocks line 3 with no rule written for either one?",
    "choices": [
      "A stateful firewall",
      "A stateless firewall",
      "A switch with port security",
      "An ACL that allows port 443"
    ],
    "why": [
      "A stateful firewall tracks connections. Line 2 answers the conversation the laptop started in line 1; line 3 belongs to no conversation, so it is blocked.",
      "A stateless firewall judges each packet alone, with no memory of line 1. It would treat lines 2 and 3 the same, since both come from 198.51.100.80 port 443.",
      "Port security limits MAC addresses on a switch port. It does not decide which internet traffic gets in.",
      "A rule allowing traffic from port 443 would let lines 2 and 3 both in. Only remembering line 1 tells them apart."
    ],
    "answer": 0
  },
  {
    "id": "u3-36",
    "skill": "firewalls",
    "type": "mcq",
    "meeting": "M39",
    "stem": "Suppose a file-sharing app is running on computers on Kestrel's office network. It sends its traffic to port 443, the same port the online store and every secure website use. Luis Ortega wants the app blocked without breaking anyone's web browsing.",
    "question": "Which kind of firewall can do this?",
    "choices": [
      "An NGFW, because it recognizes the application, not just the port",
      "A stateless firewall with a rule that blocks all traffic to port 443",
      "A stateful firewall, because it tracks which inside device started it",
      "Any firewall with an ACL, because ACLs list addresses and ports"
    ],
    "why": [
      "An NGFW recognizes applications and inspects content. It can tell the file-sharing app from a web page even when both use port 443.",
      "Blocking port 443 stops the app, but it also stops every secure website, including Kestrel's own store.",
      "The office computers start these connections themselves, so a stateful firewall sees ordinary conversations and lets them out.",
      "Addresses and ports are the same for the app and the web, so a rule on addresses and ports cannot separate them."
    ],
    "answer": 0
  },
  {
    "id": "u3-37",
    "skill": "firewalls",
    "type": "mcq",
    "meeting": "M40",
    "stem": "Kestrel's store ACL starts with the first list below. Someone swaps rules 1 and 2, giving the second list. A packet arrives: TCP from 203.0.113.77 (port 49800) to 203.0.113.10, port 443.",
    "log": "Before the swap:\nRULE  ACTION    PROTO  SOURCE        SPORT  DESTINATION   DPORT\n1     Block     TCP    203.0.113.77  any    203.0.113.10  any\n2     Allow     TCP    any           any    203.0.113.10  443\n3     Allow     TCP    any           any    203.0.113.10  80\n4     Deny All\n\nAfter the swap:\nRULE  ACTION    PROTO  SOURCE        SPORT  DESTINATION   DPORT\n1     Allow     TCP    any           any    203.0.113.10  443\n2     Block     TCP    203.0.113.77  any    203.0.113.10  any\n3     Allow     TCP    any           any    203.0.113.10  80\n4     Deny All",
    "question": "After the swap, what happens to the packet?",
    "choices": [
      "Allowed by the new rule 1, because it matches first",
      "Blocked by the new rule 2, because blocks come first",
      "Blocked by Deny All, because no allow rule names it",
      "Allowed by rule 3, because port 443 is a web port"
    ],
    "why": [
      "Rule order: the first rule that matches decides. Any source to port 443 matches, so the block on 203.0.113.77 is never reached. That is what the swap broke.",
      "A firewall does not jump to block rules. It reads from the top and stops at the first match, which is now an allow.",
      "The new rule 1 matches it, so the firewall never reads Deny All.",
      "Rule 3 is for port 80, and the packet never gets that far. The new rule 1 already decided."
    ],
    "answer": 0
  },
  {
    "id": "u3-38",
    "skill": "firewalls",
    "type": "mcq",
    "meeting": "M40",
    "stem": "Lines from the roastery router's log for November 5. The roastery's public address is 203.0.113.40.",
    "log": "     TIME      SOURCE          SPORT  DESTINATION    DPORT  PROTO  ACTION\n[1]  01:12:08  203.0.113.77    48211  203.0.113.40   23     TCP    BLOCK\n[2]  01:38:31  192.168.10.47   50236  198.51.100.23  443    TCP    ACCEPT\n[3]  05:09:44  203.0.113.77    39102  203.0.113.40   3389   TCP    BLOCK\n[4]  06:41:17  198.51.100.140  61530  203.0.113.40   3389   TCP    ACCEPT",
    "question": "Which line is outbound?",
    "choices": [
      "Line 2",
      "Line 4",
      "Line 1",
      "Line 3"
    ],
    "why": [
      "Outbound traffic leaves the network toward the outside. Line 2 starts at the bookkeeper's laptop, inside, and goes to an outside server.",
      "Line 4 was accepted, but it comes from an outside address into the roastery. That is inbound.",
      "Line 1 comes from outside to the roastery's address. Inbound, and blocked.",
      "Same source as line 1, coming in from outside. Inbound, and blocked."
    ],
    "answer": 0
  },
  {
    "id": "u3-39",
    "skill": "firewalls",
    "type": "mcq",
    "meeting": "M40",
    "stem": "A dentist office's firewall protects its patient booking server, 203.0.113.150. Its settings say: \"When no rule matches: ALLOW.\" A packet arrives: TCP from 198.51.100.200 (port 61000) to 203.0.113.150, port 3389.",
    "log": "RULE  ACTION  PROTO  SOURCE  SPORT  DESTINATION    DPORT\n1     Allow   TCP    any     any    203.0.113.150  443\n2     Allow   TCP    any     any    203.0.113.150  80\n3     Block   TCP    any     any    203.0.113.150  23",
    "question": "What happens to the packet, and what one change fixes the problem?",
    "choices": [
      "Allowed by default; add Deny All as the last rule",
      "Blocked by rule 3; no change is needed at all",
      "Allowed by default; add Deny All as rule 1",
      "Allowed by default; add a rule allowing 3389"
    ],
    "why": [
      "No rule names port 3389, so the default lets remote desktop in from anywhere. Deny All at the bottom blocks anything no earlier rule allowed.",
      "Rule 3 is for port 23. The packet asks for 3389, so no rule matches it.",
      "Rule order: a Deny All on top matches every packet first and blocks the booking pages too.",
      "That writes down the problem instead of fixing it. The goal is to block what the office never meant to allow."
    ],
    "answer": 0
  },
  {
    "id": "u3-40",
    "skill": "firewalls",
    "type": "mcq",
    "meeting": "M41",
    "stem": "The roastery log for November 5 shows 105 lines like these, every four minutes all night.",
    "log": "     TIME      SOURCE         SPORT  DESTINATION    DPORT  PROTO  ACTION\n[1]  03:22:31  192.168.10.47  50914  198.51.100.23  443    TCP    ACCEPT\n[2]  03:26:31  192.168.10.47  50940  198.51.100.23  443    TCP    ACCEPT",
    "question": "Which rule on the roastery's perimeter firewall would have stopped these connections?",
    "choices": [
      "Egress: block TCP from 192.168.10.47 to 198.51.100.23, port 443",
      "Ingress: block TCP from any address to 203.0.113.10, port 443",
      "Ingress: block TCP from 203.0.113.77 to any address, port 23",
      "Egress: block UDP from 192.168.10.47 to any address, port 53"
    ],
    "why": [
      "The laptop starts each connection, so the traffic is leaving. An egress rule filters traffic as it leaves, and this one names the exact source, destination, and port.",
      "203.0.113.10 is the web store server. Filtering what comes in to it does nothing to traffic leaving the office for 198.51.100.23.",
      "That rule stops an outside address reaching port 23 (Telnet). None of these lines use port 23.",
      "Port 53 with UDP is DNS. These lines are TCP to port 443."
    ],
    "answer": 0
  },
  {
    "id": "u3-41",
    "skill": "firewalls",
    "type": "mcq",
    "meeting": "M41",
    "stem": "A submarine has three LANs that must be kept apart, and one link to the outside world. Each LAN connects to the others through a single router.",
    "question": "Where do the firewalls go?",
    "choices": [
      "Internal firewalls where the LANs meet, and a perimeter firewall at the outside link",
      "A perimeter firewall where the LANs meet, and internal firewalls at the outside link",
      "One perimeter firewall at the outside link, since the LANs are all on the same boat",
      "Internal firewalls inside each LAN, one in front of each device, and none at the edge"
    ],
    "why": [
      "A perimeter firewall sits at the edge, where the network meets the outside. Internal firewalls control traffic between segments, so each place two LANs meet gets one.",
      "Reversed. Perimeter means the edge; internal means between segments.",
      "Being on one boat does not make the LANs one trust level. With only an edge firewall, a problem in one LAN spreads to the others.",
      "The edge is the most exposed place on the network. Leaving it open and guarding every device is more work and less protection."
    ],
    "answer": 0
  },
  {
    "id": "u3-42",
    "skill": "firewalls",
    "type": "mcq",
    "meeting": "M41",
    "stem": "Suppose the roastery's perimeter firewall sees this packet arrive from the internet side.",
    "log": "     TIME      SOURCE         SPORT  DESTINATION   DPORT  PROTO  ACTION\n[1]  04:12:07  192.168.10.47  40221  203.0.113.40  3389   TCP    ?",
    "question": "What should an ingress rule do with it, and why?",
    "choices": [
      "Block it, because an inside address cannot really arrive from the internet",
      "Allow it, because 192.168.10.47 is the bookkeeper's own trusted laptop",
      "Allow it, because ingress rules only filter traffic that is leaving",
      "Block it, because port 3389 is never used by any program at all"
    ],
    "why": [
      "192.168.10.47 lives inside the roastery. A packet with that source arriving from outside has a forged sender, and ingress rules block outside traffic that claims an inside address.",
      "The address is trusted only when it comes from inside. Arriving from the internet, it is a lie about who sent it.",
      "Ingress is traffic entering the network. Egress is the one that filters traffic leaving.",
      "Port 3389 is remote desktop, a real service. The giveaway here is the source address, not the port."
    ],
    "answer": 0
  },
  {
    "id": "u3-43",
    "skill": "net-logs",
    "type": "mcq",
    "meeting": "M42",
    "stem": "Suppose Dana Whitfield, working from home at 198.51.100.61, cannot connect to Kestrel's store server. The roastery is 203.0.113.40.",
    "log": "Network log\n     TIME      SOURCE         SPORT  DESTINATION   DPORT  PROTO  ACTION\n[1]  20:14:02  198.51.100.61  50114  203.0.113.10  22     TCP    BLOCK\n\nStore firewall ACL\nRULE  ACTION  PROTO  SOURCE        SPORT  DESTINATION   DPORT\n1     Allow   TCP    any           any    203.0.113.10  443\n2     Allow   TCP    any           any    203.0.113.10  80\n3     Allow   TCP    203.0.113.40  any    203.0.113.10  22\n4     Block   Any    any           any    any           any",
    "question": "Which rule blocked her, and why?",
    "choices": [
      "Rule 4, because rule 3 allows port 22 only from the roastery",
      "Rule 3, because rule 3 is the one written for port 22",
      "Rule 1, because she asked for port 22 instead of port 443",
      "No rule; her source port 50114 is not allowed anywhere"
    ],
    "why": [
      "The destination port is 22, so rules 1 and 2 do not match. Rule 3 needs source 203.0.113.40, and hers is 198.51.100.61. Rule 4 blocks everything left.",
      "Rule 3 is an allow rule. It does not match her packet, because her source address is not the roastery's.",
      "A rule that does not match does not block. Rule 1 is skipped, and the firewall reads on.",
      "50114 is the source port, a random high number her laptop picked. The rules check the destination port, 22."
    ],
    "answer": 0
  },
  {
    "id": "u3-44",
    "skill": "net-logs",
    "type": "mcq",
    "meeting": "M42",
    "stem": "A line from the network log at Adams County Hospital:",
    "log": "     TIME      SOURCE     SPORT  DESTINATION    DPORT  PROTO  ACTION\n[1]  13:05:22  10.2.0.15  51734  198.51.100.80  443    TCP    ACCEPT",
    "question": "A student says the computer at 10.2.0.15 is running a service on port 51734. What is wrong?",
    "choices": [
      "51734 is the source port, a random number; 443 names the service",
      "51734 is the destination port, so the service is at 198.51.100.80",
      "Nothing is wrong; the first port number in a line is the service",
      "443 is the source port, so 10.2.0.15 is running a secure web server"
    ],
    "why": [
      "The source port is where the connection leaves the sending device, usually a random high number. The destination port, 443, names the service it wants: a secure web page.",
      "The column order is source port, then destination port. 51734 sits right after the source address.",
      "The first port number is the source port. A service is named by the destination port.",
      "Reversed. 443 is in the destination port column, so the service is at 198.51.100.80, not 10.2.0.15."
    ],
    "answer": 0
  },
  {
    "id": "u3-45",
    "skill": "net-logs",
    "type": "mcq",
    "meeting": "M42",
    "stem": "A town library's catalog server is 10.0.3.20. Its authentication log and network log for one night:",
    "log": "Authentication log\n[1] 02:41:10  FAILED   user admin    from 203.0.113.99\n[2] 02:41:12  FAILED   user admin    from 203.0.113.99\n[3] 02:46:58  FAILED   user test     from 203.0.113.99\n[4] 02:47:03  SUCCESS  user backup   from 203.0.113.99\n[5] 08:02:15  SUCCESS  user circdesk from 10.0.3.15\n     (26 more FAILED lines from 203.0.113.99 between 02:41:12 and 02:46:58)\n\nNetwork log\n     TIME      SOURCE        SPORT  DESTINATION  DPORT  PROTO  ACTION\n[1]  02:47:02  203.0.113.99  53311  10.0.3.20    22     TCP    ACCEPT",
    "question": "Which authentication log line shows the outside address got in?",
    "choices": [
      "Line 4, the 02:47:03 success for backup",
      "Line 1, the first failure for admin",
      "Line 5, the 08:02:15 success for circdesk",
      "Line 3, the last failure, for test"
    ],
    "why": [
      "Line 4 is a successful sign-in from the same address that failed 29 times, one second after the network log accepted its connection on port 22.",
      "Line 1 shows guessing began. It failed, so nobody got in yet.",
      "10.0.3.15 is inside the library, at opening time. That is a staff sign-in.",
      "Line 3 is still a failure. The first success comes five seconds later."
    ],
    "answer": 0
  },
  {
    "id": "u3-46",
    "skill": "net-logs",
    "type": "mcq",
    "meeting": "M43",
    "stem": "Four facts from the roastery's network on November 5.",
    "log": "[1] The router's log file grew by 173 lines overnight.\n[2] The bookkeeper's laptop connected to 198.51.100.23 on port 443 every four minutes, 105 times, with nobody at the roastery.\n[3] The router blocked 48 connections from outside addresses.\n[4] The printer, 192.168.10.30, is on the same subnet as the bookkeeper's laptop.",
    "question": "Which fact is an indicator of compromise for the bookkeeper's laptop?",
    "choices": [
      "Fact 2",
      "Fact 3",
      "Fact 1",
      "Fact 4"
    ],
    "why": [
      "A strange connection leaving on a fixed schedule from an empty office is evidence the laptop itself is under someone else's control. That is an IoC.",
      "Blocked connections show someone knocking, but the router turned them away. They say nothing about the laptop being compromised.",
      "A log file grows every night. The number of lines is not evidence of anything until you read them.",
      "Sharing a subnet is how the roastery is built. It is a fact about the design, not evidence of an attack."
    ],
    "answer": 0
  },
  {
    "id": "u3-47",
    "skill": "net-logs",
    "type": "mcq",
    "meeting": "M43",
    "stem": "Suppose a practice free response gives these lines from Kestrel's store server, 203.0.113.10. jrivera is the store manager's account.",
    "log": "Network log\n     TIME      SOURCE          SPORT  DESTINATION   DPORT  PROTO  ACTION\n[1]  06:12:40  198.51.100.140  52001  203.0.113.10  443    TCP    ACCEPT\n[2]  06:13:05  198.51.100.140  52040  203.0.113.10  22     TCP    ACCEPT\n\nAuthentication log\n[3] 06:13:06  SUCCESS  user jrivera  from 198.51.100.140  port 52040\n[4] 09:01:12  SUCCESS  user jrivera  from 203.0.113.40    port 49371",
    "question": "Which evidence is the strongest indicator of compromise?",
    "choices": [
      "Lines 2 and 3: one outside address connects on port 22 and signs in as jrivera",
      "Line 1: an outside address loaded the store's secure web page at 6:12 a.m.",
      "Line 4: jrivera signed in from the roastery's address at 9:01 a.m.",
      "Line 2 alone: any connection to port 22 shows the server was attacked"
    ],
    "why": [
      "The same address and the same port, 52040, appear in both logs one second apart. An unknown outside address signing in as the manager is evidence of compromise.",
      "Loading the store page is what customers do, at any hour. Alone, it shows nothing.",
      "203.0.113.40 is the roastery, at the start of the workday. That is the expected sign-in.",
      "Port 22 is how staff sign in remotely. Line 2 becomes evidence only when line 3 shows who signed in."
    ],
    "answer": 0
  },
  {
    "id": "u3-48",
    "skill": "net-logs",
    "type": "mcq",
    "meeting": "M43",
    "stem": "Lines from the network log at Adams County Hospital. 10.20.0.15 is the patient records server.",
    "log": "     TIME      SOURCE        SPORT  DESTINATION     DPORT  PROTO  ACTION\n[1]  03:10:44  10.20.0.15    49822  198.51.100.150  21     TCP    ACCEPT\n[2]  03:11:02  203.0.113.66  40001  10.20.0.15      3389   TCP    BLOCK\n[3]  08:15:03  10.20.0.31    51200  10.20.0.15      443    TCP    ACCEPT\n[4]  14:30:19  10.20.0.31    51388  10.20.0.15      443    TCP    ACCEPT",
    "question": "Which line is the strongest sign that the records server itself has been compromised?",
    "choices": [
      "Line 1",
      "Line 2",
      "Line 3",
      "Line 4"
    ],
    "why": [
      "The records server starts a connection at 3:10 a.m. to an unknown outside address on port 21, file transfer. A server sending files out in the night is an IoC.",
      "Line 2 is an outside attempt, and it was blocked. It shows someone knocking, not that the server is compromised.",
      "An inside computer opening the records server's secure page at 8:15 a.m. is a nurse's ordinary work.",
      "The same ordinary daytime traffic as line 3, from an inside computer to the records server."
    ],
    "answer": 0
  },
  {
    "id": "u3-49",
    "skill": "net-logs",
    "type": "mcq",
    "meeting": "M44",
    "stem": "A review table pairs each Kestrel finding from the fall with the control that answers it.",
    "log": "     FINDING                                             CONTROL\n[1]  Customers' phones on the payment terminal's switch  Separate VLANs for guests and payments\n[2]  Open data port in the break room                    Unused data ports off, port security on\n[3]  Port 23 knocked on all night                        Telnet turned off on the router\n[4]  Laptop calling 198.51.100.23 every four minutes     MAC filtering on the staff Wi-Fi",
    "question": "Which row pairs a finding with a control that does not answer it?",
    "choices": [
      "Row 4, which needs an egress rule",
      "Row 1, which needs a stateful firewall",
      "Row 2, which needs WPA3 with AES",
      "Row 3, which needs split tunneling"
    ],
    "why": [
      "The laptop is already an approved device; MAC filtering would let it in. An egress rule blocking 198.51.100.23 stops the traffic leaving.",
      "Separate VLANs are network segmentation, which is exactly what keeps customers off the payment terminal's network.",
      "WPA3 protects Wi-Fi. A wall data port is wired, so turning it off and limiting MAC addresses is the right answer.",
      "Split tunneling is a VPN setting. Turning off Telnet removes the service that sends passwords in plain text."
    ],
    "answer": 0
  },
  {
    "id": "u3-50",
    "skill": "net-logs",
    "type": "mcq",
    "meeting": "M44",
    "stem": "Suppose Kestrel adds these rules for traffic leaving the roastery, and the network log then shows the line below.",
    "log": "RULE  ACTION    PROTO  SOURCE           SPORT  DESTINATION    DPORT\n1     Block     TCP    192.168.10.0/24  any    198.51.100.23  any\n2     Allow     TCP    192.168.10.0/24  any    any            443\n3     Allow     UDP    192.168.10.0/24  any    any            53\n4     Deny All\n\nNetwork log\n     TIME      SOURCE         SPORT  DESTINATION    DPORT  PROTO  ACTION\n[1]  02:14:31  192.168.10.47  51877  198.51.100.23  443    TCP    BLOCK",
    "question": "Which rule blocked the line in the network log?",
    "choices": [
      "Rule 1, the egress rule for 198.51.100.23",
      "Rule 4, Deny All at the end of the list",
      "Rule 2 would allow it, so it was not blocked",
      "Rule 3, because it limits the office to DNS"
    ],
    "why": [
      "The packet starts on the roastery's subnet and goes to 198.51.100.23, so rule 1 matches. The first rule that matches decides.",
      "Rule 1 matched first, so the firewall never read Deny All.",
      "Rule 2 would allow port 443, but rule order means it is never reached. The log's last column says BLOCK.",
      "Rule 3 is for UDP to port 53. This packet is TCP to port 443, so rule 3 does not match."
    ],
    "answer": 0
  },
  {
    "id": "u3-51",
    "skill": "net-logs",
    "type": "mcq",
    "meeting": "M44",
    "stem": "A family shelter finds a small box plugged into the wall jack of its empty meeting room. It is sharing the shelter's network as a Wi-Fi network named Shelter-Free. The switch shows it on port 14.",
    "question": "What is the box, and which controls would have stopped it?",
    "choices": [
      "A rogue access point; unused data ports off and port security on",
      "A rogue access point; WPA3 with AES on the shelter's own WAPs",
      "An evil twin; a VPN with no split tunneling for every resident",
      "A WAP doing jamming; turning off WPS on the shelter's own WAPs"
    ],
    "why": [
      "A wireless box connected without permission is a rogue access point. It got in through a wired jack, so turning off unused data ports and limiting MAC addresses per port stops it.",
      "The name is right, but WPA3 protects the shelter's own Wi-Fi. The box joined through a cable and runs its own network.",
      "An evil twin copies the name of a network people trust. Shelter-Free copies nothing, and a VPN does not stop a box in a wall jack.",
      "Jamming knocks devices off Wi-Fi with noise. This box is adding a network, not drowning one."
    ],
    "answer": 0
  }
];
