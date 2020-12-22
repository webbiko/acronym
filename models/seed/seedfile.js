var mongoose = require("mongoose");

require("../all-models").toContext(global);
var acronym = require("../Acronym");

  acronym
    .create([
      {
        acronym: "?",  definition: "I don't understand what you mean",
      },
      {
        acronym: "?4U",  definition: "I have a question for you",
      },
      {
        acronym: ";S",  definition: "Gentle warning, like 'Hmm? What did you say?'",
      },
      {
        acronym: "^^",  definition: "Meaning 'read line' or 'read message' above",
      },
      {
        acronym: "&lt;3",  definition: "Meaning 'sideways heart' (love, friendship)",
      },
      {
        acronym: "&lt;33",  definition: "Meaning 'heart or love' (more 3s is a bigger heart)",
      },
      {
        acronym: "@TEOTD",  definition: "At the end of the day",
      },
      {
        acronym: ".02",  definition: "My (or your) two cents worth",
      },
      {
        acronym: "1TG, 2TG",  definition: "Meaning number of items needed for win (online gaming)",
      },
      {
        acronym: "1UP",  definition: "Meaning extra life (online gaming)",
      },
      {
        acronym:121,  definition:"One-to-one (private chat initiation)",
      },
      {
        acronym:1337,  definition:"Leet, meaning 'elite'",
      },
      {
        acronym:143,  definition:"I love you",
      },
      {
        acronym:1432,  definition:"I love you too",
      },
      {
        acronym: "14AA41",  definition: "One for all, and all for one",
      },
      {
        acronym:182,  definition:"I hate you",
      },
      {
        acronym:19,  definition:"Zero hand (online gaming)",
      },
      {
        acronym: "10M",  definition: "Ten man (online gaming)",
      },
      {
        acronym: "10X",  definition: "Thanks",
      },
      {
        acronym: "10Q",  definition: "Thank you",
      },
      {
        acronym: "1CE",  definition: "Once",
      },
      {
        acronym: "1DR",  definition: "I wonder",
      },
      {
        acronym: "1NAM",  definition: "One in a million",
      },
      {
        acronym:2,  definition:"Meaning 'to' in SMS",
      },
      {
        acronym:20,  definition:"Meaning 'location'",
      },
      {
        acronym: "2B",  definition: "To be",
      },
      {
        acronym: "2EZ",  definition: "Too easy",
      },
      {
        acronym: "2G2BT",  definition: "Too good to be true",
      },
      {
        acronym: "2M2H",  definition: "Too much too handle",
      },
      {
        acronym: "2MI",  definition: "Too much information",
      },
      {
        acronym: "2MOR",  definition: "Tomorrow",
      },
      {
        acronym: "2MORO",  definition: "Tomorrow",
      },
      {
        acronym: "2M2H",  definition: "Too much to handle",
      },
      {
        acronym: "2N8",  definition: "Tonight",
      },
      {
        acronym: "2NTE",  definition: "Tonight",
      },
      {
        acronym:4,  definition:"Short for 'for' in SMS",
      },
      {
        acronym:411,  definition:"Meaning 'information'",
      },
      {
        acronym:404,  definition:"I don't know",
      },
      {
        acronym:411,  definition:"Meaning 'information'",
      },
      {
        acronym:420,  definition:"Lets get high",
      },
      {
        acronym:420,  definition:"Meaning 'Marijuana'",
      },
      {
        acronym:459,  definition:"Means I love you (ILY is 459 using keypad numbers)",
      },
      {
        acronym: "4AO",  definition: "For adults only",
      },
      {
        acronym: "4COL",  definition: "For crying out loud",
      },
      {
        acronym: "4EAE",  definition: "Forever and ever&nbsp;",
      },
      {
        acronym: "4EVA",  definition: "Forever",
      },
      {
        acronym: "4NR",  definition: "Foreigner&nbsp;",
      },
      {
        acronym: "4SALE",  definition: "For sale",
      },
      {
        acronym: "^5",  definition: "High-five",
      },
      {
        acronym:511,  definition:"Too much information (more than 411)",
      },
      {
        acronym:555,  definition:"Sobbing, crying. (Mandarin Chinese txt msgs)",
      },
      {
        acronym:55555,  definition:"Crying your eyes out (Mandarin Chinese txt msgs)",
      },
      {
        acronym:55555,  definition:"Meaning Laughing (In Thai language the number 5 is pronounced 'ha'.)",
      },
      {
        acronym: "6Y",  definition: "Sexy",
      },
      {
        acronym: "7K",  definition: "Sick",
      },
      {
        acronym:81,  definition:"Meaning Hells Angels (H=8th letter of alphabet, A=1st letter of alphabet)",
      },
      {
        acronym:831,  definition:"I love you (8 letters, 3 words, 1 meaning)",
      },
      {
        acronym:86,  definition:"Over",
      },
      {
        acronym:88,  definition:"Bye-bye (Mandarin Chinese txt msgs)&nbsp;",
      },
      {
        acronym:88,  definition:"Hugs and kisses",
      },
      {
        acronym:9,  definition:"Parent is watching&nbsp;",
      },
      {
        acronym: "*s*",  definition: "Meaning 'smile'",
      },
      {
        acronym: "*w*",  definition: "Meaning 'wink'",
      },
      {
        acronym: "A3" ,  definition: "Anytime, anywhere, anyplace",
      },
      {
        acronym: "AA" ,  definition: "As above",
      },
      {
        acronym: "AA" ,  definition: "Ask about",
      },
      {
        acronym: "AAF" ,  definition: "As a matter of fact",
      },
      {
        acronym: "AAF" ,  definition: "As a friend",
      },
      {
        acronym: "AAK" ,  definition: "Asleep at keyboard",
      },
      {
        acronym: "AAK" ,  definition: "Alive and kicking",
      },
      {
        acronym: "AAMOF" ,  definition: "As a matter of fact",
      },
      {
        acronym: "AAMOI" ,  definition: "As a matter of interest",
      },
      {
        acronym: "AAP" ,  definition: "Always a pleasure",
      },
      {
        acronym: "AAR" ,  definition: "At any rate",
      },
      {
        acronym: "AAS" ,  definition: "Alive and smiling",
      },
      {
        acronym: "AASHTA" ,  definition: "As always, Sheldon has the answer (Bike mechanic Sheldon Brown)",
      },
      {
        acronym: "AATK" ,  definition: "Always at the keyboard",
      },
      {
        acronym: "AAYF" ,  definition: "As always, your friend",
      },
      {
        acronym: "ABBR" ,  definition: "Meaning abbreviation",
      },
      {
        acronym: "ABC" ,  definition: "Already been chewed",
      },
      {
        acronym: "ABD" ,  definition: "Already been done",
      },
      {
        acronym: "ABT" ,  definition: "About",
      },
      {
        acronym: "ABT2" ,  definition: "Meaning 'About to'",
      },
      {
        acronym: "ABTA" ,  definition: "Meaning Good-bye (signoff)",
      },
      {
        acronym: "ABU" ,  definition: "All bugged up",
      },
      {
        acronym: "AC" ,  definition: "Acceptable content",
      },
      {
        acronym: "ACC" ,  definition: "Anyone can come",
      },
      {
        acronym: "ACD" ,  definition: "ALT / CONTROL / DELETE",
      },
      {
        acronym: "ACDNT" ,  definition: "Accident (e-mail, Government)",
      },
      {
        acronym: "ACE" ,  definition: "Meaning marijuana cigarette",
      },
      {
        acronym: "ACK" ,  definition: "Acknowledge",
      },
      {
        acronym: "ACPT" ,  definition: "Accept (e-mail, Government)",
      },
      {
        acronym: "ACQSTN" ,  definition: "Acquisition (e-mail, Government)",
      },
      {
        acronym: "ADAD" ,  definition: "Another day, another dollar",
      },
      {
        acronym: "ADBB" ,  definition: "All done, bye-bye",
      },
      {
        acronym: "ADD" ,  definition: "Address",
      },
      {
        acronym: "ADDY" ,  definition: "Address",
      },
      {
        acronym: "ADIH" ,  definition: "Another day in hell",
      },
      {
        acronym: "ADIP" ,  definition: "Another day in paradise",
      },
      {
        acronym: "ADMIN" ,  definition: "Administrator",
      },
      {
        acronym: "ADMINR" ,  definition: "Administrator (Government)",
      },
      {
        acronym: "ADN" ,  definition: "Any day now",
      },
      {
        acronym: "ADR" ,  definition: "Address",
      },
      {
        acronym: "AE" ,  definition: "Area effect (online gaming)",
      },
      {
        acronym: "AEAP" ,  definition: "As early as possible",
      },
      {
        acronym: "AF" ,  definition: "April Fools",
      },
      {
        acronym: "AF" ,  definition: "As *Freak*",
      },
      {
        acronym: "AF" ,  definition: "Aggression factor (online gaming)",
      },
      {
        acronym: "AFC" ,  definition: "Away from computer",
      },
      {
        acronym: "AFAIAA" ,  definition: "As far as I am aware",
      },
      {
        acronym: "AFAIC" ,  definition: "As far as I am concerned",
      },
      {
        acronym: "AFAIK" ,  definition: "As far as I know",
      },
      {
        acronym: "AFAIUI" ,  definition: "As far as I understand it",
      },
      {
        acronym: "AFAP" ,  definition: "As far as possible",
      },
      {
        acronym: "AFFA" ,  definition: "Angels Forever, Forever Angels",
      },
      {
        acronym: "AFJ" ,  definition: "April Fool's joke",
      },
      {
        acronym: "AFK" ,  definition: "Away from keyboard",
      },
      {
        acronym: "AFZ" ,  definition: "Acronym Free Zone",
      },
      {
        acronym: "AFPOE" ,  definition: "A fresh pair of eyes",
      },
      {
        acronym: "AGI" ,  definition: "Meaning 'agility' (online gaming)",
      },
      {
        acronym: "AH" ,  definition: "At home",
      },
      {
        acronym: "AIAMU" ,  definition: "And I am a money's uncle",
      },
      {
        acronym: "AIGHT" ,  definition: "Alright",
      },
      {
        acronym: "AIR" ,  definition: "As I remember",
      },
      {
        acronym: "AISB" ,  definition: "As it should be",
      },
      {
        acronym: "AISB" ,  definition: "As I said before",
      },
      {
        acronym: "AISI" ,  definition: "As I see it",
      },
      {
        acronym: "AITR" ,  definition: "Adult in the room",
      },
      {
        acronym: "AKA" ,  definition: "Also known as",
      },
      {
        acronym: "ALCON" ,  definition: "All concerned",
      },
      {
        acronym: "ALOL" ,  definition: "Actually laughing out loud",
      },
      {
        acronym: "AMA" ,  definition: "Ask me anything (Reddit)",
      },
      {
        acronym: "AMAP" ,  definition: "As much as possible",
      },
      {
        acronym: "AMBW" ,  definition: "All my best wishes",
      },
      {
        acronym: "AML" ,  definition: "All my love",
      },
      {
        acronym: "AMOF" ,  definition: "As a matter of fact",
      },
      {
        acronym: "A/N",  definition: "Author's note",
      },
      {
        acronym: "AO" ,  definition: "Anarchy Online (online gaming)",
      },
      {
        acronym: "AOC" ,  definition: "Available on cell",
      },
      {
        acronym: "AOE" ,  definition: "Area of effect (online game)",
      },
      {
        acronym: "AOM" ,  definition: "Age of majority",
      },
      {
        acronym: "AOM" ,  definition: "Age of Mythology (online gaming)",
      },
      {
        acronym: "AOTA" ,  definition: "All of the above",
      },
      {
        acronym: "AOYP" ,  definition: "Angel on your pillow",
      },
      {
        acronym: "APAC" ,  definition: "All praise and credit",
      },
      {
        acronym: "APP" ,  definition: "Application",
      },
      {
        acronym: "APP" ,  definition: "Appreciate",
      },
      {
        acronym: "AQAP" ,  definition: "As quick (or quiet) as possible",
      },
      {
        acronym: "ARC" ,  definition: "Archive (compressed files)",
      },
      {
        acronym: "ARE" ,  definition: "Acronym rich environment",
      },
      {
        acronym: "ARG" ,  definition: "Argument",
      },
      {
        acronym: "ASIG" ,  definition: "And so it goes",
      },
      {
        acronym: "ASAP" ,  definition: "As soon as possible",
      },
      {
        acronym: "A/S/L",  definition: "Age/sex/location",
      },
      {
        acronym: "ASL" ,  definition: "Age/sex/location",
      },
      {
        acronym: "ASLA" ,  definition: "Age/sex/location/availability",
      },
      {
        acronym: "AT" ,  definition: "At your terminal",
      },
      {
        acronym: "ATB" ,  definition: "All the best",
      },
      {
        acronym: "ATEOTD" ,  definition: "At the end of the day",
      },
      {
        acronym: "ATM" ,  definition: "At the moment",
      },
      {
        acronym: "ATSITS" ,  definition: "All the stars in the sky",
      },
      {
        acronym: "ATSL" ,  definition: "Along the same line (or lines)",
      },
      {
        acronym: "AWC" ,  definition: "After awhile crocodile",
      },
      {
        acronym: "AWESO" ,  definition: "Awesome",
      },
      {
        acronym: "AWOL" ,  definition: "Away without leaving",
      },
      {
        acronym: "AWOL" ,  definition: "Absent without leave",
      },
      {
        acronym: "AYDY" ,  definition: "Are you done yet?",
      },
      {
        acronym: "AYBABTU" ,  definition: "All your base are belong to us (online gaming)",
      },
      {
        acronym: "AYEC" ,  definition: "At your earliest convenience",
      },
      {
        acronym: "AYOR" ,  definition: "At your own risk",
      },
      {
        acronym: "AYSOS" ,  definition: "Are you stupid or something?",
      },
      {
        acronym: "AYS" ,  definition: "Are you serious?",
      },
      {
        acronym: "AYT" ,  definition: "Are you there?",
      },
      {
        acronym: "AYTMTB" ,  definition: "And you're telling me this because",
      },
      {
        acronym: "AYV" ,  definition: "Are you vertical?",
      },
      {
        acronym: "AYW" ,  definition: "As you were",
      },
      {
        acronym: "AYW" ,  definition: "As you want / As you wish",
      },
      {
        acronym: "AZN" ,  definition: "Asian",
      },
      {
        acronym: "B" ,  definition: "Back",
      },
      {
        acronym: "B" ,  definition: "Be",
      },
      {
        acronym: "B&amp;",  definition: "Banned",
      },
      {
        acronym: "B2W" ,  definition: "Back to work",
      },
      {
        acronym: "B8" ,  definition: "Bait (person teased or joked with, or under-aged person/teen)",
      },
      {
        acronym: "B9" ,  definition: "Boss is watching",
      },
      {
        acronym: "B/F",  definition: "Boyfriend",
      },
      {
        acronym: "B/G",  definition: "Background (personal information request)",
      },
      {
        acronym: "B4" ,  definition: "Before",
      },
      {
        acronym: "B4N" ,  definition: "Bye for now",
      },
      {
        acronym: "BAG" ,  definition: "Busting a gut",
      },
      {
        acronym: "BA" ,  definition: "Bad *a*",
      },
      {
        acronym: "BAE" ,  definition: "Before anyone else",
      },
      {
        acronym: "BAE" ,  definition: "Meaning Babe or baby",
      },
      {
        acronym: "BAFO" ,  definition: "Best and final offer",
      },
      {
        acronym: "BAK" ,  definition: "Back at keyboard",
      },
      {
        acronym: "BAM" ,  definition: "Below average mentality",
      },
      {
        acronym: "BAMF" ,  definition: "Bad *a* mother *f*",
      },
      {
        acronym: "BAO" ,  definition: "Be aware of",
      },
      {
        acronym: "BAS" ,  definition: "Big 'butt' smile",
      },
      {
        acronym: "BASIC" ,  definition: "Meaning anything mainstream",
      },
      {
        acronym: "BASOR" ,  definition: "Breathing a sigh of relief",
      },
      {
        acronym: "BAU" ,  definition: "Business as usual",
      },
      {
        acronym: "BAY" ,  definition: "Back at ya",
      },
      {
        acronym: "BB" ,  definition: "Be back",
      },
      {
        acronym: "BB" ,  definition: "Big brother",
      },
      {
        acronym: "BB" ,  definition: "Bebi / Baby (Spanish SMS)",
      },
      {
        acronym: "BBC" ,  definition: "Big bad challenge",
      },
      {
        acronym: "BBIAB" ,  definition: "Be back in a bit",
      },
      {
        acronym: "BBIAF" ,  definition: "Be back in a few",
      },
      {
        acronym: "BBIAM" ,  definition: "Be back in a minute",
      },
      {
        acronym: "BBIAS" ,  definition: "Be back in a sec",
      },
      {
        acronym: "BBL" ,  definition: "Be back later",
      },
      {
        acronym: "BBN" ,  definition: "Bye, bye now",
      },
      {
        acronym: "BBQ" ,  definition: "Barbeque, 'Ownage', shooting score/frag (online gaming)",
      },
      {
        acronym: "BBS" ,  definition: "Be back soon",
      },
      {
        acronym: "BBT" ,  definition: "Be back tomorrow",
      },
      {
        acronym: "BC" ,  definition: "Because",
      },
      {
        acronym: "B/C",  definition: "Because",
      },
      {
        acronym: "BC" ,  definition: "Be cool",
      },
      {
        acronym: "BCNU" ,  definition: "Be seeing you",
      },
      {
        acronym: "BCOS" ,  definition: "Because",
      },
      {
        acronym: "BCO" ,  definition: "Big crush on",
      },
      {
        acronym: "BCOY" ,  definition: "Big crush on you",
      },
      {
        acronym: "BD" ,  definition: "Big deal",
      },
      {
        acronym: "BDAY" ,  definition: "Birthday",
      },
      {
        acronym: "B-DAY",  definition: "Birthday",
      },
      {
        acronym: "BDN" ,  definition: "Big darn number",
      },
      {
        acronym: "BEG" ,  definition: "Big evil grin",
      },
      {
        acronym: "BELF" ,  definition: "Meaning 'Blood Elf' (online gaming)",
      },
      {
        acronym: "BF" ,  definition: "Boyfriend",
      },
      {
        acronym: "BF" ,  definition: "Brain fart",
      },
      {
        acronym: "BFAW" ,  definition: "Best friend at work",
      },
      {
        acronym: "BF2" ,  definition: "Battlefield 2 (online gaming)",
      },
      {
        acronym: "BF" ,  definition: "Best friend",
      },
      {
        acronym: "BFF" ,  definition: "Best friends forever",
      },
      {
        acronym: "BFFL" ,  definition: "Best friends for life",
      },
      {
        acronym: "BFFLNMW" ,  definition: "Best friends for life, no matter what",
      },
      {
        acronym: "BFD" ,  definition: "Big freaking deal",
      },
      {
        acronym: "BFG" ,  definition: "Big&nbsp; freaking grin",
      },
      {
        acronym: "BFFN" ,  definition: "Best friend for now",
      },
      {
        acronym: "BFN" ,  definition: "Bye for now",
      },
      {
        acronym: "BG" ,  definition: "Big grin",
      },
      {
        acronym: "BGWM" ,  definition: "Be gentle with me",
      },
      {
        acronym: "BHL8" ,  definition: "Be home late",
      },
      {
        acronym: "BIB" ,  definition: "Boss is back",
      },
      {
        acronym: "BIBO" ,  definition: "Beer in, beer out",
      },
      {
        acronym: "BIC" ,  definition: "Butt in chair",
      },
      {
        acronym: "BIF" ,  definition: "Before I forget",
      },
      {
        acronym: "BIH" ,  definition: "Burn in hell",
      },
      {
        acronym: "BIL" ,  definition: "Brother in law",
      },
      {
        acronym: "BIO" ,  definition: "Meaning 'I'm going to the bathroom' (or) 'Bathroom break'",
      },
      {
        acronym: "BION" ,  definition: "Believe it or not",
      },
      {
        acronym: "BIOYA" ,  definition: "Blow it out your *a*",
      },
      {
        acronym: "BIOYN" ,  definition: "Blow it out your nose",
      },
      {
        acronym: "BIS" ,  definition: "Best in slot (online gaming)",
      },
      {
        acronym: "BISFLATM" ,  definition: "Boy, I sure feel like a turquoise monkey! (unverified)",
      },
      {
        acronym: "BITMT" ,  definition: "But in the meantime",
      },
      {
        acronym: "BL" ,  definition: "Belly laugh",
      },
      {
        acronym: "BLNT" ,  definition: "Better luck next time",
      },
      {
        acronym: "Bloke" ,  definition: "Meaning Man (Discord)",
      },
      {
        acronym: "BM" ,  definition: "Bite me",
      },
      {
        acronym: "BME" ,  definition: "Based on my experience",
      },
      {
        acronym: "BM&amp;Y",  definition: "Between me and you",
      },
      {
        acronym: "BOB" ,  definition: "Back off *buddy*",
      },
      {
        acronym: "BN" ,  definition: "Bad news",
      },
      {
        acronym: "BOE" ,  definition: "Meaning 'bind on equip' (online gaming)",
      },
      {
        acronym: "BOHICA" ,  definition: "Bend over here it comes again",
      },
      {
        acronym: "BOL" ,  definition: "Best of luck",
      },
      {
        acronym: "BOM" ,  definition: "*b* of mine",
      },
      {
        acronym: "BOLO" ,  definition: "Be on the look out",
      },
      {
        acronym: "BOOMS" ,  definition: "Bored out of my skull",
      },
      {
        acronym: "BOP" ,  definition: "Meaning 'bind on pickup' (online gaming)",
      },
      {
        acronym: "BOSMKL" ,  definition: "Bending over smacking my knee laughing",
      },
      {
        acronym: "BOT" ,  definition: "Back on topic",
      },
      {
        acronym: "BOT" ,  definition: "Be on that",
      },
      {
        acronym: "BMS" ,  definition: "Broke my scale, used when rating someone",
      },
      {
        acronym: "BOYF" ,  definition: "Boyfriend",
      },
      {
        acronym: "BPLM" ,  definition: "Big person little mind",
      },
      {
        acronym: "BRB" ,  definition: "Be right back",
      },
      {
        acronym: "BR" ,  definition: "Best regards",
      },
      {
        acronym: "BRBB" ,  definition: "Be right back *b*",
      },
      {
        acronym: "BRNC" ,  definition: "Be right back, nature calls",
      },
      {
        acronym: "BRD" ,  definition: "Bored",
      },
      {
        acronym: "BRH" ,  definition: "Be right here",
      },
      {
        acronym: "BRT" ,  definition: "Be right there",
      },
      {
        acronym: "BSF" ,  definition: "But seriously folks",
      },
      {
        acronym: "BSOD" ,  definition: "Blue screen of death",
      },
      {
        acronym: "BSTS" ,  definition: "Better safe than sorry",
      },
      {
        acronym: "BT" ,  definition: "Bite this",
      },
      {
        acronym: "BT" ,  definition: "Between technologies",
      },
      {
        acronym: "BTA" ,  definition: "But then again",
      },
      {
        acronym: "BTDT" ,  definition: "Been there, done that",
      },
      {
        acronym: "BTW" ,  definition: "By the way&nbsp;",
      },
      {
        acronym: "BTYCL" ,  definition: "Meaning 'Bootycall'",
      },
      {
        acronym: "BUBU" ,  definition: "Slang term for the most beautiful of women",
      },
      {
        acronym: "BURN" ,  definition: "Used to reference an insult",
      },
      {
        acronym: "Buff" ,  definition: "Meaning 'changed and is now stronger' (online gaming)",
      },
      {
        acronym: "BWL" ,  definition: "Bursting with laughter&nbsp;",
      },
      {
        acronym: "BYOB" ,  definition: "Bring your own beer&nbsp;",
      },
      {
        acronym: "BYOC" ,  definition: "Bring your own computer",
      },
      {
        acronym: "BYOH" ,  definition: "Bat you on (the) head",
      },
      {
        acronym: "BYOP" ,  definition: "Bring your own paint (paintball)",
      },
      {
        acronym: "BYTM" ,  definition: "Better you than me",
      },
      {
        acronym: "C&amp;G",  definition: "Chuckle &amp; grin",
      },
      {
        acronym: "C4N" ,  definition: "Ciao for now",
      },
      {
        acronym: "CAD" ,  definition: "Control + Alt + Delete",
      },
      {
        acronym: "CAD" ,  definition: "Short for Canada/Canadian",
      },
      {
        acronym: "Cakeday" ,  definition: "Meaning Birthday (Reddit)",
      },
      {
        acronym: "CAM" ,  definition: "Camera (SMS)",
      },
      {
        acronym: "CB" ,  definition: "Coffee break",
      },
      {
        acronym: "CB" ,  definition: "Chat break",
      },
      {
        acronym: "CB" ,  definition: "Crazy *b*",
      },
      {
        acronym: "CD9" ,  definition: "Code 9, Meaning 'parents are around'",
      },
      {
        acronym: "CFS" ,  definition: "Care for secret?",
      },
      {
        acronym: "CFY" ,  definition: "Calling for you",
      },
      {
        acronym: "CHK" ,  definition: "Check",
      },
      {
        acronym: "CIAO" ,  definition: "Good-bye (Italian word)",
      },
      {
        acronym: "CICO" ,  definition: "Coffee in, coffee out",
      },
      {
        acronym: "CID" ,  definition: "Crying in disgrace",
      },
      {
        acronym: "CID" ,  definition: "Consider it done",
      },
      {
        acronym: "CLAB" ,  definition: "Crying like a baby",
      },
      {
        acronym: "CLD" ,  definition: "Could",
      },
      {
        acronym: "CLK" ,  definition: "Click",
      },
      {
        acronym: "CM" ,  definition: "Call me",
      },
      {
        acronym: "CMAP" ,  definition: "Cover my *a* partner (online gaming)",
      },
      {
        acronym: "CMB" ,  definition: "Call me back",
      },
      {
        acronym: "CMGR" ,  definition: "Meaning 'Community manager'",
      },
      {
        acronym: "CMIIW" ,  definition: "Correct me if I'm wrong",
      },
      {
        acronym: "CMON" ,  definition: "Come on",
      },
      {
        acronym: "CNP" ,  definition: "Continued (in) next post",
      },
      {
        acronym: "COB" ,  definition: "Close of business",
      },
      {
        acronym: "COH" ,  definition: "City of Heroes (online gaming)",
      },
      {
        acronym: "COS" ,  definition: "Because",
      },
      {
        acronym: "C/P",  definition: "Cross post",
      },
      {
        acronym: "CP" ,  definition: "Chat post (or continue in IM)",
      },
      {
        acronym: "CR8" ,  definition: "Create",
      },
      {
        acronym: "Cray" ,  definition: "Meaning crazy",
      },
      {
        acronym: "CRE8" ,  definition: "Create",
      },
      {
        acronym: "CRA CRA",  definition: "Slang term meaning 'crazy'",
      },
      {
        acronym: "CRAFT" ,  definition: "Can't remember a *freaking* thing",
      },
      {
        acronym: "CRB" ,  definition: "Come right back",
      },
      {
        acronym: "CRBT" ,  definition: "Crying really big tears",
      },
      {
        acronym: "CRIT" ,  definition: "Meaning 'critical hit' (online gaming)",
      },
      {
        acronym: "CRZ" ,  definition: "Crazy",
      },
      {
        acronym: "CRS&nbsp;",  definition: "Can't remember *stuff*",
      },
      {
        acronym: "CSG" ,  definition: "Chuckle, snicker, grin",
      },
      {
        acronym: "CSL" ,  definition: "Can't stop laughing",
      },
      {
        acronym: "CSS" ,  definition: "Counter-Strike Source (online gaming)",
      },
      {
        acronym: "CT" ,  definition: "Can't talk",
      },
      {
        acronym: "CTC" ,  definition: "Care to chat?",
      },
      {
        acronym: "CTHU" ,  definition: "Cracking the *heck* up",
      },
      {
        acronym: "CTN" ,  definition: "Can't talk now",
      },
      {
        acronym: "CTO" ,  definition: "Check this out",
      },
      {
        acronym: "CU" ,  definition: "See you too",
      },
      {
        acronym: "CU" ,  definition: "See you",
      },
      {
        acronym: "CU2" ,  definition: "See you",
      },
      {
        acronym: "CUA" ,  definition: "See you around",
      },
      {
        acronym: "CUL" ,  definition: "See you later",
      },
      {
        acronym: "CULA" ,  definition: "See you later alligator",
      },
      {
        acronym: "CUL8R" ,  definition: "See you later",
      },
      {
        acronym: "CUMID" ,  definition: "See you in my dreams",
      },
      {
        acronym: "CURLO" ,  definition: "See you around like a donut",
      },
      {
        acronym: "CWD" ,  definition: "Comment when done",
      },
      {
        acronym: "CWOT" ,  definition: "Complete waste of time",
      },
      {
        acronym: "CWYL" ,  definition: "Chat with you later",
      },
      {
        acronym: "CX" ,  definition: "Meaning 'Correction'",
      },
      {
        acronym: "CYA" ,  definition: "See you",
      },
      {
        acronym: "CYAL8R" ,  definition: "See you later",
      },
      {
        acronym: "CYE" ,  definition: "Check your e-mail",
      },
      {
        acronym: "CYEP" ,  definition: "Close your eyes partner (online gaming)",
      },
      {
        acronym: "CYO" ,  definition: "See you online",
      },
      {
        acronym: "D2" ,  definition: "Dedos / fingers (Spanish SMS)",
      },
      {
        acronym: "D46?",  definition: "Down for sex?",
      },
      {
        acronym: "DA" ,  definition: "Meaning 'The'",
      },
      {
        acronym: "DAE" ,  definition: "Does anyone else?",
      },
      {
        acronym: "DAFUQ" ,  definition: "(What) the *Freak*?",
      },
      {
        acronym: "DAM" ,  definition: "Don't annoy me",
      },
      {
        acronym: "DAoC" ,  definition: "Dark Age of Camelot (online gaming)",
      },
      {
        acronym: "DBAU" ,  definition: "Doing business as usual",
      },
      {
        acronym: "DBEYR" ,  definition: "Don't believe everything you read",
      },
      {
        acronym: "DC" ,  definition: "Disconnect",
      },
      {
        acronym: "DD" ,  definition: "Dear (or Darling) daughter",
      },
      {
        acronym: "DD" ,  definition: "Due diligence",
      },
      {
        acronym: "DDG" ,  definition: "Drop dead gorgeous",
      },
      {
        acronym: "DEEZ NUTZ", definition: "A phrase used in online chat to annoy or frustrate those involved in the conversation.",
      },
      {
        acronym: "DEGT" ,  definition: "Dear (or Darling) daughter",
      },
      {
        acronym: "DERP" ,  definition: "Meaning stupid or silly",
      },
      {
        acronym: "DF" ,  definition: "Don't even go there",
      },
      {
        acronym: "DFL" ,  definition: "Dead *freaking* last (online gaming)",
      },
      {
        acronym: "DGA" ,  definition: "Don't go anywhere",
      },
      {
        acronym: "DGAF" ,  definition: "Don't give a *freak*",
      },
      {
        acronym: "DGT" ,  definition: "Don't go there",
      },
      {
        acronym: "DGTG" ,  definition: "Don't go there, girlfriend",
      },
      {
        acronym: "DGYF" ,  definition: "Dang, girl you fine",
      },
      {
        acronym: "DH" ,  definition: "Dear (or Darling) husband",
      },
      {
        acronym: "DHU" ,  definition: "Dinosaur hugs (used to show support)",
      },
      {
        acronym: "DIIK" ,  definition: "Darned if I know",
      },
      {
        acronym: "DIKU" ,  definition: "Do I know you?",
      },
      {
        acronym: "DILLIGAF" ,  definition: "Do I look like I give a *freak*?",
      },
      {
        acronym: "DILLIGAS" ,  definition: "Do I look like I give a sugar?",
      },
      {
        acronym: "DIS" ,  definition: "Did I say?",
      },
      {
        acronym: "DITYID" ,  definition: "Did I tell you I'm distressed?",
      },
      {
        acronym: "DIY" ,  definition: "Do it yourself",
      },
      {
        acronym: "DKDC" ,  definition: "Don't know, don't care",
      },
      {
        acronym: "DKP" ,  definition: "Dragon kill points (online gaming)",
      },
      {
        acronym: "D/L",  definition: "Download",
      },
      {
        acronym: "DL" ,  definition: "Download",
      },
      {
        acronym: "DL" ,  definition: "Down low",
      },
      {
        acronym: "DL" ,  definition: "Dead link",
      },
      {
        acronym: "DLBBB" ,  definition: "Don't let (the) bed bugs bite",
      },
      {
        acronym: "DLTBBB" ,  definition: "Don't let the bed bugs bite",
      },
      {
        acronym: "DM" ,  definition: "Doesn't matter",
      },
      {
        acronym: "DMNO" ,  definition: "Dude Man No Offense",
      },
      {
        acronym: "DMY" ,  definition: "Don't mess yourself",
      },
      {
        acronym: "DN" ,  definition: "Down",
      },
      {
        acronym: "DNC" ,  definition: "Do not compute (meaning I do not understand)",
      },
      {
        acronym: "DNR" ,  definition: "Dinner (SMS)",
      },
      {
        acronym: "DNT" ,  definition: "Don't",
      },
      {
        acronym: "d00d" ,  definition: "Dude",
      },
      {
        acronym: "DOE" ,  definition: "Daughter of Eve",
      },
      {
        acronym: "DORBS" ,  definition: "Meaning 'Adorable'",
      },
      {
        acronym: "DOT" ,  definition: "Damage over time (online gaming)",
      },
      {
        acronym: "Downvote" ,  definition: "Voting negatively on a thread using Reddit’s voting system (Reddit)",
      },
      {
        acronym: "DPS" ,  definition: "Damage per second (online gaming)",
      },
      {
        acronym: "DQMOT" ,  definition: "Don't quote me on this",
      },
      {
        acronym: "DR" ,  definition: "Didn't read",
      },
      {
        acronym: "DS" ,  definition: "Dear (or Darling) son",
      },
      {
        acronym: "DTR" ,  definition: "Define the relationship",
      },
      {
        acronym: "DTRT" ,  definition: "Do the right thing",
      },
      {
        acronym: "DTS" ,  definition: "Don't think so",
      },
      {
        acronym: "DTTD" ,  definition: "Don't touch that dial",
      },
      {
        acronym: "DUPE" ,  definition: "Duplicate",
      },
      {
        acronym: "DUR" ,  definition: "Do you remember?",
      },
      {
        acronym: "DV8" ,  definition: "Deviate",
      },
      {
        acronym: "DW" ,  definition: "Dear (or Darling) wife",
      },
      {
        acronym: "DWF" ,  definition: "Divorced white female",
      },
      {
        acronym: "DWM" ,  definition: "Divorced white male",
      },
      {
        acronym: "DXNRY" ,  definition: "Dictionary",
      },
      {
        acronym: "DYNWUTB" ,  definition: "Do you know what you are talking about?",
      },
      {
        acronym: "DYFI" ,  definition: "Did you find it?",
      },
      {
        acronym: "DYFM" ,  definition: "Dude, you fascinate me",
      },
      {
        acronym: "DYJHIW" ,  definition: "Don't you just hate it when...?",
      },
      {
        acronym: "DYOR" ,  definition: "Do your own research (common stock market chat slang)",
      },
      {
        acronym: "E" ,  definition: "Ecstasy",
      },
      {
        acronym: "E" ,  definition: "Enemy (online gaming)",
      },
      {
        acronym: "E1" ,  definition: "Everyone",
      },
      {
        acronym: "E123" ,  definition: "Easy as one, two, three",
      },
      {
        acronym: "E2EG" ,  definition: "Ear to ear grin",
      },
      {
        acronym: "EAK" ,  definition: "Eating at keyboard",
      },
      {
        acronym: "EBKAC" ,  definition: "Error between keyboard and chair",
      },
      {
        acronym: "ED" ,  definition: "Erase display",
      },
      {
        acronym: "EF4T" ,  definition: "Effort",
      },
      {
        acronym: "EG" ,  definition: "Evil grin",
      },
      {
        acronym: "EI" ,  definition: "Eat it",
      },
      {
        acronym: "EIP" ,  definition: "Editing in progress",
      },
      {
        acronym: "ELI5" ,  definition: "Explain like I'm 5",
      },
      {
        acronym: "EM" ,  definition: "E-mail",
      },
      {
        acronym: "EMA" ,  definition: "E-mail address",
      },
      {
        acronym: "EMBAR" ,  definition: "Meaning 'Embarassing'",
      },
      {
        acronym: "EMFBI" ,  definition: "Excuse me for butting in",
      },
      {
        acronym: "EMFBI" ,  definition: "Excuse me for jumping in",
      },
      {
        acronym: "EMSG" ,  definition: "E-mail message",
      },
      {
        acronym: "ENUF" ,  definition: "Enough",
      },
      {
        acronym: "EOD" ,  definition: "End of day",
      },
      {
        acronym: "EOD" ,  definition: "End of discussion",
      },
      {
        acronym: "EOL" ,  definition: "End of lecture",
      },
      {
        acronym: "EOL" ,  definition: "End of life",
      },
      {
        acronym: "EOM" ,  definition: "End of message",
      },
      {
        acronym: "EOS" ,  definition: "End of show",
      },
      {
        acronym: "EOT" ,  definition: "End of transmission",
      },
      {
        acronym: "EQ" ,  definition: "EverQuest (online gaming)",
      },
      {
        acronym: "ERP" ,  definition: "Meaning 'Erotic Role-Play' (online gaming)",
      },
      {
        acronym: "ERS2" ,  definition: "Eres tz / are you (Spanish SMS)",
      },
      {
        acronym: "ES" ,  definition: "Erase screen",
      },
      {
        acronym: "ESAD" ,  definition: "Eat *S* and die!",
      },
      {
        acronym: "ETA" ,  definition: "Estimated time (of) arrival",
      },
      {
        acronym: "ETA" ,  definition: "Edited to add",
      },
      {
        acronym: "EVA" ,  definition: "Ever",
      },
      {
        acronym: "EVO" ,  definition: "Evolution",
      },
      {
        acronym: "EWG" ,  definition: "Evil wicked grin (in fun, teasing)",
      },
      {
        acronym: "EWI" ,  definition: "Emailing while intoxicated",
      },
      {
        acronym: "EXTRA" ,  definition: "Meaning over the top",
      },
      {
        acronym: "EYC" ,  definition: "Excitable, yet calm",
      },
      {
        acronym: "EZ" ,  definition: "Easy",
      },
      {
        acronym: "EZY" ,  definition: "Easy",
      },
      {
        acronym: "F" ,  definition: "Meaning female",
      },
      {
        acronym: "F2F" ,  definition: "Face to face",
      },
      {
        acronym: "F2P" ,  definition: "Free to play (online gaming)",
      },
      {
        acronym: "F4F" ,  definition: "Follow for follow (Instagram)",
      },
      {
        acronym: "FAAK" ,  definition: "Falling asleep at keyboard",
      },
      {
        acronym: "FAB" ,  definition: "Fabulous",
      },
      {
        acronym: "Facepalm" ,  definition: "Used to represent the gesture of 'smacking your forehead with your palm' to express embarrassment or frustration",
      },
      {
        acronym: "FAF" ,  definition: "Funny as *freak*",
      },
      {
        acronym: "FAM" ,  definition: "FFamily, but not limited to actual family members. Could mean friends.",
      },
      {
        acronym: "FAQ" ,  definition: "Frequently asked questions",
      },
      {
        acronym: "FAY" ,  definition: "*Freak* all you",
      },
      {
        acronym: "FB" ,  definition: "Facebook",
      },
      {
        acronym: "FBB" ,  definition: "Meaning 'Facebook buddy'",
      },
      {
        acronym: "FBC" ,  definition: "Facebook chat",
      },
      {
        acronym: "FBF" ,  definition: "Flashback Friday",
      },
      {
        acronym: "FBF" ,  definition: "Meaning 'Facebook friend'",
      },
      {
        acronym: "FBF" ,  definition: "Fat boy food (e.g. pizza, burgers, fries)",
      },
      {
        acronym: "FBFR" ,  definition: "FaceBook friend",
      },
      {
        acronym: "FBM" ,  definition: "Fine by me",
      },
      {
        acronym: "FBO" ,  definition: "Facebook official (An official update from Facebook)",
      },
      {
        acronym: "FBOW" ,  definition: "For better or worse",
      },
      {
        acronym: "FC" ,  definition: "Fingers crossed",
      },
      {
        acronym: "FC" ,  definition: "Full card (online gaming)",
      },
      {
        acronym: "FC'INGO",  definition: "For crying out loud",
      },
      {
        acronym: "FCOL" ,  definition: "For crying out loud",
      },
      {
        acronym: "Feelsbadman" ,  definition: "A social meme that means to feel negative.",
      },
      {
        acronym: "Feelsbatman" ,  definition: "A social meme taking 'feelsbadman' to the extreme. This references the DC super hero Batmanbecause he witnessed the murder of his parents.",
      },
      {
        acronym: "Feelsgoodman" ,  definition: "A social meme that means to feel positive.",
      },
      {
        acronym: "FEITCTAJ" ,  definition: "*Freak* 'em if they can't take a joke",
      },
      {
        acronym: "FF" ,  definition: "Follow Friday",
      },
      {
        acronym: "FFA" ,  definition: "Free for all (online gaming)",
      },
      {
        acronym: "FFS" ,  definition: "For *freak'*sakes",
      },
      {
        acronym: "FICCL" ,  definition: "Frankly I couldn't care a less",
      },
      {
        acronym: "FIF" ,  definition: "*Freak* I'm funny",
      },
      {
        acronym: "FIIK" ,  definition: "*Freaked* if I know",
      },
      {
        acronym: "FIIOOH" ,  definition: "Forget it, I'm out of here",
      },
      {
        acronym: "FIL" ,  definition: "Father in law",
      },
      {
        acronym: "FIMH" ,  definition: "Forever in my heart",
      },
      {
        acronym: "Finna" ,  definition: "Means 'Going to'",
      },
      {
        acronym: "Finsta" ,  definition: "A second Instagram account where someone can post things that they're too afraid to post on their main account.",
      },
      {
        acronym: "FISH" ,  definition: "First in, still here",
      },
      {
        acronym: "FITB" ,  definition: "Fill in the blank",
      },
      {
        acronym: "FML" ,  definition: "*Freak* My Life",
      },
      {
        acronym: "FOMC" ,  definition: "Falling off my chair",
      },
      {
        acronym: "FOMO" ,  definition: "Fear of missing out",
      },
      {
        acronym: "FOAD" ,  definition: "*Freak* off and die",
      },
      {
        acronym: "FOAF" ,  definition: "Friend of a friend",
      },
      {
        acronym: "FOMCL" ,  definition: "Falling off my chair laughing",
      },
      {
        acronym: "FRT" ,  definition: "For real though",
      },
      {
        acronym: "FTBOMH" ,  definition: "From the bottom of my heart",
      },
      {
        acronym: "FTFY" ,  definition: "Fixed that for you",
      },
      {
        acronym: "FTL" ,  definition: "For the loss",
      },
      {
        acronym: "FTW" ,  definition: "For the win",
      },
      {
        acronym: "FU" ,  definition: "*Freak* you",
      },
      {
        acronym: "FUBAR" ,  definition: "Fouled up beyond all recognition",
      },
      {
        acronym: "FUBB" ,  definition: "Fouled up beyond belief",
      },
      {
        acronym: "FUD" ,  definition: "Face up deal (online gaming)",
      },
      {
        acronym: "FUTAB" ,  definition: "Feet up, take a break",
      },
      {
        acronym: "FW" ,  definition: "Forward",
      },
      {
        acronym: "FWB" ,  definition: "Friend with benefits",
      },
      {
        acronym: "FWIW" ,  definition: "For what it's worth",
      },
      {
        acronym: "FWM" ,  definition: "Fine with me",
      },
      {
        acronym: "FWP" ,  definition: "First world problems",
      },
      {
        acronym: "FYE" ,  definition: "Fire, something that is cool",
      },
      {
        acronym: "FYEO" ,  definition: "For your eyes only",
      },
      {
        acronym: "FYA" ,  definition: "For your amusement",
      },
      {
        acronym: "FYI" ,  definition: "For your information",
      },
      {
        acronym: "G" ,  definition: "Grin",
      },
      {
        acronym: "G" ,  definition: "Giggle",
      },
      {
        acronym: "G+",  definition: "Google+",
      },
      {
        acronym: "G/F",  definition: "Girlfriend",
      },
      {
        acronym: "G2CU" ,  definition: "Good to see you",
      },
      {
        acronym: "G2G" ,  definition: "Got to go",
      },
      {
        acronym: "G2GICYAL8ER" ,  definition: "Got to go I'll see you later",
      },
      {
        acronym: "G2R" ,  definition: "Got to run",
      },
      {
        acronym: "G2TU" ,  definition: "Got to tell u (you)",
      },
      {
        acronym: "G4C" ,  definition: "Going for coffee",
      },
      {
        acronym: "G9" ,  definition: "Genius",
      },
      {
        acronym: "GA" ,  definition: "Go ahead",
      },
      {
        acronym: "GAC" ,  definition: "Get a clue",
      },
      {
        acronym: "GAFC" ,  definition: "Get a *freaking* clue",
      },
      {
        acronym: "GAL" ,  definition: "Get a life",
      },
      {
        acronym: "GANK" ,  definition: "Meaning a player ambush or unfair player kill (online gaming)",
      },
      {
        acronym: "GAS" ,  definition: "Got a second?",
      },
      {
        acronym: "GAS" ,  definition: "Greetings and salutations",
      },
      {
        acronym: "GB" ,  definition: "Goodbye",
      },
      {
        acronym: "GBTW" ,  definition: "Get back to work",
      },
      {
        acronym: "GBU" ,  definition: "God bless you",
      },
      {
        acronym: "GD" ,  definition: "Good",
      },
      {
        acronym: "GDR" ,  definition: "Grinning, ducking, and running",
      },
      {
        acronym: "GD/R",  definition: "Grinning, ducking, and running",
      },
      {
        acronym: "GFI" ,  definition: "Go for it",
      },
      {
        acronym: "GF" ,  definition: "Girl friend",
      },
      {
        acronym: "GFN" ,  definition: "Gone for now",
      },
      {
        acronym: "GG" ,  definition: "Gotta Go",
      },
      {
        acronym: "GG" ,  definition: "Good Game (online gaming)",
      },
      {
        acronym: "GG" ,  definition: "Brother (Mandarin Chinese txt msgs)",
      },
      {
        acronym: "GGA" ,  definition: "Good game, all (online gaming)",
      },
      {
        acronym: "GGE1" ,  definition: "Good game, everyone (online gaming)",
      },
      {
        acronym: "GGU2" ,  definition: "Good game, you too",
      },
      {
        acronym: "GGMSOT" ,  definition: "Gotta get me some of that",
      },
      {
        acronym: "GGOH" ,  definition: "Gotta Get Outa Here",
      },
      {
        acronym: "GGP" ,  definition: "Got to go pee",
      },
      {
        acronym: "GH" ,  definition: "Good hand (online gaming)",
      },
      {
        acronym: "GIAR" ,  definition: "Give it a rest",
      },
      {
        acronym: "GIC" ,  definition: "Gift in crib (online gaming)",
      },
      {
        acronym: "GIGO" ,  definition: "Garbage in, garbage out",
      },
      {
        acronym: "GIRL" ,  definition: "Guy in real life",
      },
      {
        acronym: "GJ" ,  definition: "Good job",
      },
      {
        acronym: "GL" ,  definition: "Good luck",
      },
      {
        acronym: "GL2U" ,  definition: "Good luck to you (online gaming)",
      },
      {
        acronym: "GLA" ,  definition: "Good luck all (online gaming)",
      },
      {
        acronym: "GL/HF",  definition: "Good luck, have fun&nbsp; (online gaming)",
      },
      {
        acronym: "GLE" ,  definition: "Good luck everyone (online gaming)",
      },
      {
        acronym: "GLE1" ,  definition: "Good luck everyone (online gaming)",
      },
      {
        acronym: "GLNG" ,  definition: "Good luck next game (online gaming)",
      },
      {
        acronym: "GMBA" ,  definition: "Giggling my butt off",
      },
      {
        acronym: "GMTA" ,  definition: "Great minds think alike",
      },
      {
        acronym: "GMV" ,  definition: "Got my vote",
      },
      {
        acronym: "GN" ,  definition: "Good night",
      },
      {
        acronym: "GNA" ,  definition: "Good night all",
      },
      {
        acronym: "GNE1" ,  definition: "Good night everyone",
      },
      {
        acronym: "GNIGHT" ,  definition: "Good night",
      },
      {
        acronym: "GNITE" ,  definition: "Good night",
      },
      {
        acronym: "GNSD" ,  definition: "Good night, sweet dreams",
      },
      {
        acronym: "GOAT" ,  definition: "Greatest of all Time(s)",
      },
      {
        acronym: "GOI" ,  definition: "Get over it",
      },
      {
        acronym: "GOL" ,  definition: "Giggling out loud",
      },
      {
        acronym: "GOMB" ,  definition: "Get off my back",
      },
      {
        acronym: "GPOY" ,  definition: "Gratuitous picture of yourself",
      },
      {
        acronym: "GR8" ,  definition: "Great",
      },
      {
        acronym: "GRATZ" ,  definition: "Congratulations",
      },
      {
        acronym: "GRL" ,  definition: "Girl",
      },
      {
        acronym: "GRWG" ,  definition: "Get right with God",
      },
      {
        acronym: "GR&amp;D",  definition: "Grinning, running and ducking",
      },
      {
        acronym: "GS" ,  definition: "Good shot",
      },
      {
        acronym: "GS" ,  definition: "Good split (online gaming)",
      },
      {
        acronym: "GT" ,  definition: "Good try",
      },
      {
        acronym: "GTFO" ,  definition: "Get the *freak* out",
      },
      {
        acronym: "GTFOH" ,  definition: "Get the *freak* outta here",
      },
      {
        acronym: "GTG" ,  definition: "Got to go",
      },
      {
        acronym: "GTM" ,  definition: "Giggling to myself",
      },
      {
        acronym: "GTRM" ,  definition: "Going to read mail&nbsp;",
      },
      {
        acronym: "GTSY" ,  definition: "Great (or good) to see you",
      },
      {
        acronym: "GUCCI" ,  definition: "Good",
      },
      {
        acronym: "GUD" ,  definition: "Good&nbsp;",
      },
      {
        acronym: "GWHTLC" ,  definition: "Glad we had this little chat",
      },
      {
        acronym: "H" ,  definition: "Hug",
      },
      {
        acronym: "H8" ,  definition: "Hate",
      },
      {
        acronym: "H8TTU" ,  definition: "Hate to be you",
      },
      {
        acronym: "HAG1" ,  definition: "Have a good one",
      },
      {
        acronym: "HAK" ,  definition: "Hug and kiss",
      },
      {
        acronym: "HALP" ,  definition: "Help (Discord)",
      },
      {
        acronym: "HAU" ,  definition: "How about you?",
      },
      {
        acronym: "H&amp;K",  definition: "Hugs &amp; kisses",
      },
      {
        acronym: "H2CUS" ,  definition: "Hope to see you soon",
      },
      {
        acronym: "HAGN" ,  definition: "Have a good night",
      },
      {
        acronym: "HAGO" ,  definition: "Have a good one",
      },
      {
        acronym: "HAND" ,  definition: "Have a nice day",
      },
      {
        acronym: "HAWT" ,  definition: "Have a wonderful day (out-dated, see next in list)",
      },
      {
        acronym: "HAWT" ,  definition: "Meaning 'sexy' or 'attractive'",
      },
      {
        acronym: "HB" ,  definition: "Hurry back",
      },
      {
        acronym: "HB" ,  definition: "Hug back",
      },
      {
        acronym: "HBD" ,  definition: "Happy birthday",
      },
      {
        acronym: "H-BDAY",  definition: "Happy Birthday",
      },
      {
        acronym: "HBU" ,  definition: "How about you?",
      },
      {
        acronym: "HF" ,  definition: "Have fun",
      },
      {
        acronym: "HFAC" ,  definition: "Holy flipping animal crackers",
      },
      {
        acronym: "H-FDAY",  definition: "Happy Father's Day",
      },
      {
        acronym: "HHIS" ,  definition: "Head hanging in shame",
      },
      {
        acronym: "HIFW" ,  definition: "How I felt when... (Used with photo or gif)",
      },
      {
        acronym: "HL" ,  definition: "Half Life (online gaming)",
      },
      {
        acronym: "HLA" ,  definition: "Hola / hello (Spanish SMS)",
      },
      {
        acronym: "H-MDAY",  definition: "Happy Mother's Day",
      },
      {
        acronym: "HMU" ,  definition: "Hit me up",
      },
      {
        acronym: "HNL" ,  definition: "(w)Hole 'nother level",
      },
      {
        acronym: "HOAS" ,  definition: "Hold on a second",
      },
      {
        acronym: "HP" ,  definition: "Hit points / Health points (online gaming)",
      },
      {
        acronym: "HRU" ,  definition: "How are you?",
      },
      {
        acronym: "HTH" ,  definition: "Hope this helps",
      },
      {
        acronym: "HUB" ,  definition: "Head up butt",
      },
      {
        acronym: "HUYA" ,  definition: "Head up your *butt*",
      },
      {
        acronym: "HV" ,  definition: "Have&nbsp;",
      },
      {
        acronym: "HVH" ,  definition: "Heroic Violet Hold (online gaming)",
      },
      {
        acronym: "HW" ,  definition: "Homework",
      },
      {
        acronym: "HYFR" ,  definition: "Hell yeah, *Freaking* right!",
      },
      {
        acronym: "I2" ,  definition: "I too (me too)",
      },
      {
        acronym: "IA8" ,  definition: "I already ate",
      },
      {
        acronym: "IAAA" ,  definition: "I am an accountant",
      },
      {
        acronym: "IAAD" ,  definition: "I am a doctor",
      },
      {
        acronym: "IAAL" ,  definition: "I am a lawyer",
      },
      {
        acronym: "IAC" ,  definition: "In any case",
      },
      {
        acronym: "IAE" ,  definition: "In any event",
      },
      {
        acronym: "IANAC" ,  definition: "I am not a crook",
      },
      {
        acronym: "IANAL" ,  definition: "I am not a lawyer",
      },
      {
        acronym: "IAO" ,  definition: "I am out (of here)",
      },
      {
        acronym: "IB" ,  definition: "I'm back",
      },
      {
        acronym: "IB" ,  definition: "I'm back",
      },
      {
        acronym: "IC" ,  definition: "I see",
      },
      {
        acronym: "ICAM" ,  definition: "I couldn't agree more",
      },
      {
        acronym: "ICBW" ,  definition: "It could be worse",
      },
      {
        acronym: "ICEDI" ,  definition: "I can't even discuss it",
      },
      {
        acronym: "ICFILWU" ,  definition: "I could fall in love with you",
      },
      {
        acronym: "ICYMI" ,  definition: "In case you missed it (Twitter slang)",
      },
      {
        acronym: "IDBI" ,  definition: "I don't believe it",
      },
      {
        acronym: "IDC" ,  definition: "I don't care",
      },
      {
        acronym: "IDGAF" ,  definition: "&nbsp;I don't give a *freak*",
      },
      {
        acronym: "IDK" ,  definition: "I don't know",
      },
      {
        acronym: "IDTS" ,  definition: "I don't think so",
      },
      {
        acronym: "IDUNNO" ,  definition: "I don't know",
      },
      {
        acronym: "IFYP" ,  definition: "I feel your pain",
      },
      {
        acronym: "IG" ,  definition: "Instagram",
      },
      {
        acronym: "IG2R" ,  definition: "I got to run",
      },
      {
        acronym: "IGHT" ,  definition: "I got high tonight",
      },
      {
        acronym: "IGN" ,  definition: "I (I've) got nothing",
      },
      {
        acronym: "IGP" ,  definition: "I got to (go) pee",
      },
      {
        acronym: "IHNI" ,  definition: "I have no idea",
      },
      {
        acronym: "IIRC" ,  definition: "If I remember correctly",
      },
      {
        acronym: "IIIO" ,  definition: "Intel inside, idiot outside",
      },
      {
        acronym: "IK" ,  definition: "I know",
      },
      {
        acronym: "IKR" ,  definition: "I know, right?",
      },
      {
        acronym: "ILBL8" ,  definition: "I'll be late",
      },
      {
        acronym: "ILU" ,  definition: "I love you",
      },
      {
        acronym: "ILUM" ,  definition: "I love you man",
      },
      {
        acronym: "ILYSM" ,  definition: "I love you so much",
      },
      {
        acronym: "ILY" ,  definition: "I love you",
      },
      {
        acronym: "IM" ,  definition: "Instant message",
      },
      {
        acronym: "IMAO" ,  definition: "In my arrogant opinion",
      },
      {
        acronym: "IMHO" ,  definition: "In my humble opinion",
      },
      {
        acronym: "ImL" ,  definition: "(in Arial font) Means I love you (a way of using the American sign language in text)",
      },
      {
        acronym: "IMNSHO" ,  definition: "In my not so humble opinion",
      },
      {
        acronym: "IMO" ,  definition: "In my opinion",
      },
      {
        acronym: "IMS" ,  definition: "I am sorry",
      },
      {
        acronym: "IMSB" ,  definition: "I am so bored",
      },
      {
        acronym: "IMTM" ,  definition: "I am the man",
      },
      {
        acronym: "IMU" ,  definition: "I miss u (you)",
      },
      {
        acronym: "INAL" ,  definition: "I'm not a lawyer",
      },
      {
        acronym: "INC" ,  definition: "Meaning 'incoming' (online gaming)",
      },
      {
        acronym: "Inspoo" ,  definition: "Inspiration",
      },
      {
        acronym: "INV" ,  definition: "Meaning 'Invite'",
      },
      {
        acronym: "IOMH" ,  definition: "In over my head",
      },
      {
        acronym: "IOW" ,  definition: "In other words",
      },
      {
        acronym: "IRL" ,  definition: "In real life",
      },
      {
        acronym: "IRMC" ,  definition: "I rest my case",
      },
      {
        acronym: "ISLY" ,  definition: "I still love you",
      },
      {
        acronym: "ISO" ,  definition: "In search of",
      },
      {
        acronym: "ITAM" ,  definition: "It's The Accounting, Man (financial blogs)",
      },
      {
        acronym: "ITT" ,  definition: "In This Thread",
      },
      {
        acronym: "ITYK" ,  definition: "I thought you knew",
      },
      {
        acronym: "IUSS" ,  definition: "If you say so",
      },
      {
        acronym: "IWALU" ,  definition: "I will always love you",
      },
      {
        acronym: "IWAWO" ,  definition: "I want a way out",
      },
      {
        acronym: "IWIAM" ,  definition: "Idiot wrapped in a moron",
      },
      {
        acronym: "IWSN" ,  definition: "I want sex now",
      },
      {
        acronym: "IYKWIM" ,  definition: "If you know what I mean",
      },
      {
        acronym: "IYO" ,  definition: "In your opinion",
      },
      {
        acronym: "IYQ" ,  definition: "Meaning 'I like you'",
      },
      {
        acronym: "IYSS" ,  definition: "If you say so",
      },
      {
        acronym: "j00" ,  definition: "You",
      },
      {
        acronym: "j00r" ,  definition: "Your",
      },
      {
        acronym: "JAC" ,  definition: "Just a second",
      },
      {
        acronym: "JAM" ,  definition: "Just a minute",
      },
      {
        acronym: "JAS" ,  definition: "Just a second",
      },
      {
        acronym: "JC (J/C)",  definition: "Just checking",
      },
      {
        acronym: "JDI" ,  definition: "Just do it",
      },
      {
        acronym: "JELLY" ,  definition: "Meaning 'jealous'",
      },
      {
        acronym: "JFF" ,  definition: "Just for fun",
      },
      {
        acronym: "JFGI" ,  definition: "Just *freaking* Google it",
      },
      {
        acronym: "JIC" ,  definition: "Just in case",
      },
      {
        acronym: "JJ (J/J)",  definition: "Just joking",
      },
      {
        acronym: "JJA" ,  definition: "Just joking around",
      },
      {
        acronym: "JK (J/K)",  definition: "Just kidding",
      },
      {
        acronym: "JLMK" ,  definition: "Just let me know",
      },
      {
        acronym: "JMO" ,  definition: "Just my opinion",
      },
      {
        acronym: "JP" ,  definition: "Just playing&nbsp;",
      },
      {
        acronym: "JP" ,  definition: "Jackpot (online gaming, bingo games)",
      },
      {
        acronym: "JT (J/T)",  definition: "Just teasing",
      },
      {
        acronym: "JTLYK" ,  definition: "Just to let you know",
      },
      {
        acronym: "JV" ,  definition: "Joint venture",
      },
      {
        acronym: "JW" ,  definition: "Just wondering",
      },
      {
        acronym: "K" ,  definition: "Okay",
      },
      {
        acronym: "KK" ,  definition: "Knock, knock",
      },
      {
        acronym: "KK" ,  definition: "Okay, Okay!",
      },
      {
        acronym: "K8T" ,  definition: "Katie",
      },
      {
        acronym: "k/b",  definition: "Keyboard",
      },
      {
        acronym: "KB" ,  definition: "Keyboard",
      },
      {
        acronym: "KB" ,  definition: "Kick butt (online gaming)",
      },
      {
        acronym: "KDFU" ,  definition: "Means Cracking (K) the (D as in Da) *freak* up",
      },
      {
        acronym: "KEWL" ,  definition: "Cool",
      },
      {
        acronym: "KEYA" ,  definition: "I will key you later",
      },
      {
        acronym: "KEYME" ,  definition: "Key me when you get in",
      },
      {
        acronym: "KFY" ,  definition: "Kiss for you",
      },
      {
        acronym: "KIA" ,  definition: "Know it all",
      },
      {
        acronym: "KIR" ,  definition: "Keep it real",
      },
      {
        acronym: "KISS" ,  definition: "Keep it simple, stupid",
      },
      {
        acronym: "KIT" ,  definition: "Keep in touch",
      },
      {
        acronym: "KMA" ,  definition: "Kiss my *a*",
      },
      {
        acronym: "KMK" ,  definition: "Kiss my keister",
      },
      {
        acronym: "KMS" ,  definition: "Killing myself",
      },
      {
        acronym: "KMT" ,  definition: "Kiss my tushie",
      },
      {
        acronym: "KOC" ,  definition: "Kiss on cheek",
      },
      {
        acronym: "KOL" ,  definition: "Key opinion leader",
      },
      {
        acronym: "Koreaboo" ,  definition: "Someone obsessed with Korean culture",
      },
      {
        acronym: "KOS" ,  definition: "Kid over shoulder",
      },
      {
        acronym: "KOS" ,  definition: "Kill on sight (online gaming)",
      },
      {
        acronym: "KOW" ,  definition: "Knock on wood",
      },
      {
        acronym: "KOTC" ,  definition: "Kiss on the cheek",
      },
      {
        acronym: "KOTD" ,  definition: "Kicks of the day (Instagram)",
      },
      {
        acronym: "KOTL" ,  definition: "Kiss on the lips",
      },
      {
        acronym: "KNIM" ,  definition: "Know what I mean?",
      },
      {
        acronym: "KNOW" ,  definition: "Meaning 'knowledge'",
      },
      {
        acronym: "KPC" ,  definition: "Keeping parents clueless",
      },
      {
        acronym: "KS" ,  definition: "Kill then steal (online gaming)",
      },
      {
        acronym: "KSC" ,  definition: "Kind (of) sort (of) chuckle",
      },
      {
        acronym: "KT" ,  definition: "Katie",
      },
      {
        acronym: "KUTGW" ,  definition: "Keep up the good work",
      },
      {
        acronym: "KYS" ,  definition: "Kill yourself",
      },
      {
        acronym: "L2G" ,  definition: "Like to go?",
      },
      {
        acronym: "L2G" ,  definition: "(would) Love to go",
      },
      {
        acronym: "L2K" ,  definition: "Like to come",
      },
      {
        acronym: "L2P" ,  definition: "Learn to play",
      },
      {
        acronym: "l33t" ,  definition: "Leet, meaning 'elite'",
      },
      {
        acronym: "L4L" ,  definition: "Like for like (Instagram)",
      },
      {
        acronym: "L8R" ,  definition: "Later",
      },
      {
        acronym: "L8RG8R" ,  definition: "Later, gator",
      },
      {
        acronym: "LAB" ,  definition: "Life's a *b*",
      },
      {
        acronym: "LBAY" ,  definition: "Laughing back at you",
      },
      {
        acronym: "LBS" ,  definition: "Laughing, but serious",
      },
      {
        acronym: "LBVS" ,  definition: "Laughing, but very serious",
      },
      {
        acronym: "LD" ,  definition: "Later, dude",
      },
      {
        acronym: "LD" ,  definition: "Long distance",
      },
      {
        acronym: "LDO" ,  definition: "Like, duh obviously",
      },
      {
        acronym: "LEMENO" ,  definition: "Let me know",
      },
      {
        acronym: "LERK" ,  definition: "Leaving easy reach of keyboard",
      },
      {
        acronym: "LFD" ,  definition: "Left for day",
      },
      {
        acronym: "LFG" ,  definition: "Looking for group (online gaming)",
      },
      {
        acronym: "LFG" ,  definition: "Looking for guard (online gaming)",
      },
      {
        acronym: "LFM" ,  definition: "Looking for more (online gaming)",
      },
      {
        acronym: "LGH" ,  definition: "Lets get high",
      },
      {
        acronym: "LH6" ,  definition: "Lets have sex",
      },
      {
        acronym: "LHSX" ,  definition: "Lets have sex",
      },
      {
        acronym: "LHM" ,  definition: "Lord help me",
      },
      {
        acronym: "LHO" ,  definition: "Laughing head off",
      },
      {
        acronym: "LI" ,  definition: "LinkedIn",
      },
      {
        acronym: "LIC" ,  definition: "Like I care",
      },
      {
        acronym: "LIK" ,  definition: "Meaning liquor",
      },
      {
        acronym: "LIMT" ,  definition: "Laugh in my tummy",
      },
      {
        acronym: "LIT" ,  definition: "Meaning really good or something fun and exciting",
      },
      {
        acronym: "LIT" ,  definition: "Extremely intoxicated",
      },
      {
        acronym: "LLGB" ,  definition: "Love, later, God bless",
      },
      {
        acronym: "LLS" ,  definition: "Laughing like *silly*",
      },
      {
        acronym: "LMAO" ,  definition: "Laughing my *a* off",
      },
      {
        acronym: "LMBO" ,  definition: "Laughing my butt off",
      },
      {
        acronym: "LMFAO" ,  definition: "Laughing my freaking *a* off",
      },
      {
        acronym: "LMIRL" ,  definition: "Lets meet in real life",
      },
      {
        acronym: "LMK" ,  definition: "Let me know",
      },
      {
        acronym: "LMMFAO" ,  definition: "Laughing my mother freaking a** off",
      },
      {
        acronym: "LMNK" ,  definition: "Leave my name out",
      },
      {
        acronym: "LMS" ,  definition: "Like my status (Facebook)",
      },
      {
        acronym: "LNT" ,  definition: "Meaning lost in translation",
      },
      {
        acronym: "LOA" ,  definition: "List of acronyms",
      },
      {
        acronym: "LOL" ,  definition: "Laughing out loud",
      },
      {
        acronym: "LOLH" ,  definition: "Laughing out loud hysterically",
      },
      {
        acronym: "LOLO" ,  definition: "Lots of love",
      },
      {
        acronym: "LOLWTF" ,  definition: "Laughing out loud (saying) 'What the *freak*?'",
      },
      {
        acronym: "LOTI" ,  definition: "Laughing on the inside",
      },
      {
        acronym: "LOTR" ,  definition: "Lord of The Rings (online gaming)",
      },
      {
        acronym: "LQTM" ,  definition: "Laughing quietly to myself",
      },
      {
        acronym: "LSHMBH" ,  definition: "Laugh so hard my belly hurts",
      },
      {
        acronym: "LSV" ,  definition: "Language, sex and violence",
      },
      {
        acronym: "LTD" ,  definition: "Living the dream",
      },
      {
        acronym: "LTLWDLS" ,  definition: "Let's twist like we did last summer",
      },
      {
        acronym: "LTNS" ,  definition: "Long time no see",
      },
      {
        acronym: "LTOD" ,  definition: "Laptop of death",
      },
      {
        acronym: "LTS" ,  definition: "Laughing to self",
      },
      {
        acronym: "LULT" ,  definition: "Love you long time",
      },
      {
        acronym: "LULZ" ,  definition: "Meaning joke, or for laughs",
      },
      {
        acronym: "LVM" ,  definition: "Left voice mail",
      },
      {
        acronym: "LWOS" ,  definition: "Laughing without smiling",
      },
      {
        acronym: "LY" ,  definition: "Love ya&nbsp;",
      },
      {
        acronym: "LYLAS" ,  definition: "Love you like a sis",
      },
      {
        acronym: "LYLC" ,  definition: "Love you like crazy",
      },
      {
        acronym: "LYSM" ,  definition: "Love you so much",
      },
      {
        acronym: "M$",  definition: "Microsoft",
      },
      {
        acronym: "M8" ,  definition: "Mate",
      },
      {
        acronym: "MB" ,  definition: "Mamma's boy",
      },
      {
        acronym: "MBS" ,  definition: "Mom behind shoulder",
      },
      {
        acronym: "MC" ,  definition: "Merry Christmas",
      },
      {
        acronym: "MDIAC" ,  definition: "My Dad is a cop",
      },
      {
        acronym: "MEGO" ,  definition: "My eyes glaze over",
      },
      {
        acronym: "MEH" ,  definition: "Meaning a 'shrug' or shrugging shoulders",
      },
      {
        acronym: "MEH" ,  definition: "Meaning a 'so-so' or 'just okay'",
      },
      {
        acronym: "MEHH" ,  definition: "Meaning a 'sigh' or sighing",
      },
      {
        acronym: "MEZ" ,  definition: "Meaning 'mesmerize' (online gaming)",
      },
      {
        acronym: "MFI" ,  definition: "Mad for it",
      },
      {
        acronym: "MFW" ,  definition: "My face when... (Used with photo or gif)",
      },
      {
        acronym: "MGB" ,  definition: "May God bless",
      },
      {
        acronym: "MGMT" ,  definition: "Management",
      },
      {
        acronym: "MHOTY" ,  definition: "My hat (is) off to you",
      },
      {
        acronym: "MIRL" ,  definition: "Me in real life",
      },
      {
        acronym: "MIRL" ,  definition: "Meet in real life",
      },
      {
        acronym: "MISS.(number)", definition: "Meaning 'child and her age'. Miss.3 would be a 3-year old daughter",
      },
      {
        acronym: "MKAY" ,  definition: "Meaning 'Mmm, okay'",
      },
      {
        acronym: "MLM" ,  definition: "Meaning give the middle finger",
      },
      {
        acronym: "MM" ,  definition: "Sister (Mandarin Chinese txt msg)",
      },
      {
        acronym: "MMK" ,  definition: "Meaning okay? (as a question)",
      },
      {
        acronym: "MNC" ,  definition: "Mother nature calls",
      },
      {
        acronym: "MNSG" ,  definition: "Mensaje (message in Spanish)",
      },
      {
        acronym: "MOD" ,  definition: "Moderator",
      },
      {
        acronym: "MOD" ,  definition: "Modification (online gaming)",
      },
      {
        acronym: "MORF" ,  definition: "Male or female?",
      },
      {
        acronym: "MOMBOY" ,  definition: "Mamma's boy",
      },
      {
        acronym: "MOO" ,  definition: "My own opinion",
      },
      {
        acronym: "MOOS" ,  definition: "Member of the opposite sex",
      },
      {
        acronym: "MOS" ,  definition: "Mother over shoulder",
      },
      {
        acronym: "MOSS" ,  definition: "Member of same sex",
      },
      {
        acronym: "MP" ,  definition: "Mana points (online gaming)",
      },
      {
        acronym: "MR.(number)", definition: "Meaning 'child and his age'. Mr.3 would be a 3-year old son",
      },
      {
        acronym: "MRT" ,  definition: "Modified ReTweet",
      },
      {
        acronym: "MRW" ,  definition: "My reaction when... (Used with photo or gif)",
      },
      {
        acronym: "MSG" ,  definition: "Message",
      },
      {
        acronym: "MTF" ,  definition: "More to follow",
      },
      {
        acronym: "MTFBWU" ,  definition: "May the force be with you",
      },
      {
        acronym: "MU" ,  definition: "Miss U (you)",
      },
      {
        acronym: "MUAH" ,  definition: "Multiple unsuccessful attempts (at/to) humor",
      },
      {
        acronym: "MUSM" ,  definition: "Miss you so much",
      },
      {
        acronym: "MWAH" ,  definition: "Meaning 'kiss' (it is is the sound made when kissing through the air)",
      },
      {
        acronym: "MYO" ,  definition: "Mind your own (business)",
      },
      {
        acronym: "MYOB" ,  definition: "Mind your own business",
      },
      {
        acronym: "n00b" ,  definition: "Newbie",
      },
      {
        acronym: "N1" ,  definition: "Nice one",
      },
      {
        acronym: "N2M" ,  definition: "Nothing too much",
      },
      {
        acronym: "NADT" ,  definition: "Not a darn thing",
      },
      {
        acronym: "NALOPKT" ,  definition: "Not a lot of people know that",
      },
      {
        acronym: "NANA" ,  definition: "Not now, no need",
      },
      {
        acronym: "NBD" ,  definition: "No big deal",
      },
      {
        acronym: "NBFAB" ,  definition: "No bad for a beginner (online gaming)",
      },
      {
        acronym: "NC" ,  definition: "Nice crib (online gaming)",
      },
      {
        acronym: "ND" ,  definition: "Nice double (online gaming)",
      },
      {
        acronym: "NE" ,  definition: "Any",
      },
      {
        acronym: "NE1" ,  definition: "Anyone",
      },
      {
        acronym: "NERF" ,  definition: "Meaning 'Changed and is now weaker' (online gaming)",
      },
      {
        acronym: "NFM" ,  definition: "None for me / Not for me",
      },
      {
        acronym: "NFM" ,  definition: "Not for me",
      },
      {
        acronym: "NGL" ,  definition: "Not gonna (going to) lie",
      },
      {
        acronym: "NFS" ,  definition: "Need for Speed (online gaming)",
      },
      {
        acronym: "NFS" ,  definition: "Not for sale",
      },
      {
        acronym: "NFW" ,  definition: "No *freaking* way",
      },
      {
        acronym: "NFW" ,  definition: "Not for work",
      },
      {
        acronym: "NFWS" ,  definition: "Not for work safe",
      },
      {
        acronym: "NH" ,  definition: "Nice hand (online gaming)",
      },
      {
        acronym: "NIFOC" ,  definition: "Naked in front of computer",
      },
      {
        acronym: "NIGI" ,  definition: "Now I get it",
      },
      {
        acronym: "NIMBY" ,  definition: "Not in my back yard",
      },
      {
        acronym: "NIROK" ,  definition: "Not in reach of keyboard",
      },
      {
        acronym: "NLT" ,  definition: "No later than",
      },
      {
        acronym: "NM" ,  definition: "Nothing much",
      },
      {
        acronym: "NM" ,  definition: "Never mind",
      },
      {
        acronym: "NM" ,  definition: "Nice meld (online gaming)",
      },
      {
        acronym: "NMH" ,  definition: "Not much here",
      },
      {
        acronym: "NMJC" ,  definition: "Nothing much, just chilling",
      },
      {
        acronym: "NMU" ,  definition: "Not much, you?",
      },
      {
        acronym: "NO1" ,  definition: "No one",
      },
      {
        acronym: "NOOB" ,  definition: "Meaning someone who is bad at (online) games",
      },
      {
        acronym: "NOWL" ,  definition: "Meaning 'knowledge'",
      },
      {
        acronym: "NOYB" ,  definition: "None of your business",
      },
      {
        acronym: "NP" ,  definition: "No problem",
      },
      {
        acronym: "NPC" ,  definition: "Non-playing character (online gaming)",
      },
      {
        acronym: "NQT" ,  definition: "Newly qualified teacher",
      },
      {
        acronym: "NR" ,  definition: "Nice roll (online gaming)",
      },
      {
        acronym: "NRN" ,  definition: "No response/reply necessary",
      },
      {
        acronym: "NS" ,  definition: "Nice score (online gaming)",
      },
      {
        acronym: "NS" ,  definition: "Nice split (online gaming)",
      },
      {
        acronym: "NSA" ,  definition: "No strings attached",
      },
      {
        acronym: "NSFL" ,  definition: "Not safe for life",
      },
      {
        acronym: "NSFW" ,  definition: "Not safe for work",
      },
      {
        acronym: "NSISR" ,  definition: "Not sure if spelled right",
      },
      {
        acronym: "NT" ,  definition: "Nice try",
      },
      {
        acronym: "NTHING" ,  definition: "Nothing (SMS)",
      },
      {
        acronym: "NTS" ,  definition: "Note to self",
      },
      {
        acronym: "NVM" ,  definition: "Never mind",
      },
      {
        acronym: "NVR" ,  definition: "Never",
      },
      {
        acronym: "NW" ,  definition: "No way",
      },
      {
        acronym: "NWO" ,  definition: "No way out",
      },
      {
        acronym: "O4U" ,  definition: "Only for you",
      },
      {
        acronym: "O" ,  definition: "Opponent (online gaming)",
      },
      {
        acronym: "O" ,  definition: "Meaning 'hugs'",
      },
      {
        acronym: "O" ,  definition: "Over",
      },
      {
        acronym: "OA" ,  definition: "Online auctions",
      },
      {
        acronym: "OATUS" ,  definition: "On a totally unrelated subject",
      },
      {
        acronym: "OB" ,  definition: "Oh baby",
      },
      {
        acronym: "OB" ,  definition: "Oh brother",
      },
      {
        acronym: "OBV" ,  definition: "Obviously",
      },
      {
        acronym: "OFC" ,  definition: "Of course",
      },
      {
        acronym: "OG" ,  definition: "Original gangster",
      },
      {
        acronym: "OGIM" ,  definition: "Oh God, it's Monday",
      },
      {
        acronym: "OH" ,  definition: "Overheard",
      },
      {
        acronym: "OHHEMMGEE" ,  definition: "Meaning 'Oh My God' (alternate of OMG)",
      },
      {
        acronym: "OI" ,  definition: "Operator indisposed",
      },
      {
        acronym: "OIB" ,  definition: "Oh, I'm back",
      },
      {
        acronym: "OIC" ,  definition: "Oh, I see",
      },
      {
        acronym: "OJ" ,  definition: "Only joking",
      },
      {
        acronym: "OL" ,  definition: "Old lady",
      },
      {
        acronym: "OLL" ,  definition: "Online love",
      },
      {
        acronym: "OM" ,  definition: "Old man",
      },
      {
        acronym: "OM" ,  definition: "Oh, my",
      },
      {
        acronym: "OMAA" ,  definition: "Oh, my aching *A* (butt)",
      },
      {
        acronym: "OMDB" ,  definition: "Over my dead body",
      },
      {
        acronym: "OMFG" ,  definition: "Oh my *freaking* God",
      },
      {
        acronym: "omfglmaobbqrofl" ,  definition: "oh my *freaking* god, laugh my *a* off, owned, roll on floor spinning around I'm so sad",
      },
      {
        acronym: "OMG" ,  definition: "Oh my God",
      },
      {
        acronym: "OMG" ,  definition: "Oh my gosh",
      },
      {
        acronym: "OMGYG2BK" ,  definition: "Oh my God, you got to be kidding",
      },
      {
        acronym: "OMGYS" ,  definition: "Oh my gosh you suck&nbsp;",
      },
      {
        acronym: "OMS" ,  definition: "On my soul (meaning 'promise')",
      },
      {
        acronym: "OMW" ,  definition: "On my way",
      },
      {
        acronym: "ONL" ,  definition: "Online",
      },
      {
        acronym: "OO" ,  definition: "Over and out",
      },
      {
        acronym: "OOC" ,  definition: "Out of character",
      },
      {
        acronym: "OOH" ,  definition: "Out of here",
      },
      {
        acronym: "OOMF" ,  definition: "One of my followers",
      },
      {
        acronym: "OOTD" ,  definition: "One of these days",
      },
      {
        acronym: "OOTD" ,  definition: "Outfit of the day (Instagram)",
      },
      {
        acronym: "OOTO" ,  definition: "Out of the office",
      },
      {
        acronym: "OP" ,  definition: "On phone",
      },
      {
        acronym: "ORLY" ,  definition: "Oh really?",
      },
      {
        acronym: "OS" ,  definition: "Operating system",
      },
      {
        acronym: "OT" ,  definition: "Off topic (discussion forums)",
      },
      {
        acronym: "OTB" ,  definition: "Off to bed",
      },
      {
        acronym: "OTFL" ,  definition: "On the floor laughing",
      },
      {
        acronym: "OTL" ,  definition: "Out to lunch",
      },
      {
        acronym: "OTOH" ,  definition: "On the other hand",
      },
      {
        acronym: "OTP" ,  definition: "On the phone",
      },
      {
        acronym: "OTP" ,  definition: "One true pairing; two people you would love to see as a couple",
      },
      {
        acronym: "OTT" ,  definition: "Over the top",
      },
      {
        acronym: "OTTOMH" ,  definition: "Off the top of my head",
      },
      {
        acronym: "OTW" ,  definition: "Off to work",
      },
      {
        acronym: "OVA" ,  definition: "Over",
      },
      {
        acronym: "OYO" ,  definition: "On your own",
      },
      {
        acronym: "P" ,  definition: "Partner (online gaming)",
      },
      {
        acronym: "P2P" ,  definition: "Parent to parent",
      },
      {
        acronym: "P2P" ,  definition: "Peer to peer",
      },
      {
        acronym: "P2P" ,  definition: "Pay to play (online gaming)",
      },
      {
        acronym: "P911" ,  definition: "Parents coming into room alert",
      },
      {
        acronym: "PAP" ,  definition: "Post a picture",
      },
      {
        acronym: "PAT" ,  definition: "Meaning 'patrol' (online gaming)",
      },
      {
        acronym: "PAW" ,  definition: "Parents are watching",
      },
      {
        acronym: "PBOOK" ,  definition: "Phonebook (e-mail)",
      },
      {
        acronym: "PC" ,  definition: "Player character (online gaming)",
      },
      {
        acronym: "PCM" ,  definition: "Please call me",
      },
      {
        acronym: "PDA" ,  definition: "Personal display (of) affection",
      },
      {
        acronym: "PDH" ,  definition: "Pretty darn happy",
      },
      {
        acronym: "PDS" ,  definition: "Please don't shoot",
      },
      {
        acronym: "PDQ" ,  definition: "Pretty darn quick",
      },
      {
        acronym: "PEEPS" ,  definition: "People",
      },
      {
        acronym: "PFT" ,  definition: "Pretty *freaking* tight",
      },
      {
        acronym: "PIC" ,  definition: "Picture",
      },
      {
        acronym: "PIP" ,  definition: "Peeing in pants (laughing hard)",
      },
      {
        acronym: "PIR" ,  definition: "Parents in room",
      },
      {
        acronym: "PISS" ,  definition: "Put in some sugar",
      },
      {
        acronym: "PITA" ,  definition: "Pain in the *butt*",
      },
      {
        acronym: "PKMN" ,  definition: "Pokemon (online gaming)",
      },
      {
        acronym: "PL8" ,  definition: "Plate",
      },
      {
        acronym: "PLD" ,  definition: "Played",
      },
      {
        acronym: "PLMK" ,  definition: "Please let me know",
      },
      {
        acronym: "PLS" ,  definition: "Please",
      },
      {
        acronym: "PLU" ,  definition: "People like us",
      },
      {
        acronym: "PLZ" ,  definition: "Please",
      },
      {
        acronym: "PLZTLME" ,  definition: "Please tell me",
      },
      {
        acronym: "PM" ,  definition: "Private Message",
      },
      {
        acronym: "PMFI" ,  definition: "Pardon me for interrupting",
      },
      {
        acronym: "PMFJI" ,  definition: "Pardon me for jumping in",
      },
      {
        acronym: "PMSL" ,  definition: "Pee myself laughing",
      },
      {
        acronym: "POAHF" ,  definition: "Put on a happy face",
      },
      {
        acronym: "POIDH" ,  definition: "Picture, or it didn't happen",
      },
      {
        acronym: "POS" ,  definition: "Parent over shoulder",
      },
      {
        acronym: "POT" ,  definition: "Meaning 'potion' (online gaming)",
      },
      {
        acronym: "POTD" ,  definition: "Photo of the day (Instagram)",
      },
      {
        acronym: "POV" ,  definition: "Point of view",
      },
      {
        acronym: "POV" ,  definition: "Privately owned vehicle (originally used to differentiate an individual's vehicle from a military vehicle)",
      },
      {
        acronym: "PPL" ,  definition: "People",
      },
      {
        acronym: "PPU" ,  definition: "Pending pick-up",
      },
      {
        acronym: "PRESH" ,  definition: "Precious",
      },
      {
        acronym: "PROBS" ,  definition: "Probably"
      },
      {
        acronym: "PROLLY" ,  definition: "Probably",
      },
      {
        acronym: "PROGGY" ,  definition: "Meaning computer program",
      },
      {
        acronym: "PRON" ,  definition: "Meaning pornography",
      },
      {
        acronym: "PRT" ,  definition: "Party",
      },
      {
        acronym: "PRT" ,  definition: "Please Retweet",
      },
      {
        acronym: "PRW" ,  definition: "People/parents are watching",
      },
      {
        acronym: "PSA" ,  definition: "Public Service Announcement",
      },
      {
        acronym: "PSOS" ,  definition: "Parent standing over shoulder",
      },
      {
        acronym: "PSP" ,  definition: "Playstation Portable",
      },
      {
        acronym: "PST" ,  definition: "Please send tell (online gaming)",
      },
      {
        acronym: "PTFO" ,  definition: "Pass the *freak* out",
      },
      {
        acronym: "PTIYPASI" ,  definition: "Put that in your pipe and smoke it",
      },
      {
        acronym: "PTL" ,  definition: "Praise the Lord",
      },
      {
        acronym: "PTMM" ,  definition: "Please tell me more",
      },
      {
        acronym: "PTO" ,  definition: "Paid time off",
      },
      {
        acronym: "PTO" ,  definition: "Personal time off",
      },
      {
        acronym: "PTO" ,  definition: "Parent Teacher Organization",
      },
      {
        acronym: "PUG" ,  definition: "Pick up group (online gaming)",
      },
      {
        acronym: "PVE" ,  definition: "Player vs enemy, Player versus environment (online gaming)",
      },
      {
        acronym: "PVP" ,  definition: "Player versus player (online gaming)",
      },
      {
        acronym: "PWN" ,  definition: "Meaning 'own'",
      },
      {
        acronym: "PXT" ,  definition: "Please explain that",
      },
      {
        acronym: "PU" ,  definition: "That stinks!",
      },
      {
        acronym: "PUKS" ,  definition: "Pick up kids (SMS)",
      },
      {
        acronym: "PYT" ,  definition: "Pretty young thing",
      },
      {
        acronym: "PZ" ,  definition: "Peace&nbsp;",
      },
      {
        acronym: "PZA" ,  definition: "Pizza",
      },
      {
        acronym: "Q" ,  definition: "Queue",
      },
      {
        acronym: "Q4U" ,  definition: "(I have a) question for you",
      },
      {
        acronym: "QC" ,  definition: "Quality control",
      },
      {
        acronym: "QFE" ,  definition: "Question for everyone",
      },
      {
        acronym: "QFI" ,  definition: "Quoted for idiocy",
      },
      {
        acronym: "QFI" ,  definition: "Quoted for irony",
      },
      {
        acronym: "QFT" ,  definition: "Quoted for truth",
      },
      {
        acronym: "QIK" ,  definition: "Quick",
      },
      {
        acronym: "QL" ,  definition: "Quit laughing",
      },
      {
        acronym: "QOTD" ,  definition: "Quote of the day",
      },
      {
        acronym: "QQ (qq) (Q_Q)",  definition: "Meaning 'crying eyes'",
      },
      {
        acronym: "QQ" ,  definition: "Quick question",
      },
      {
        acronym: "QSL" ,  definition: "Reply&nbsp;",
      },
      {
        acronym: "QSO" ,  definition: "Conversation",
      },
      {
        acronym: "QT" ,  definition: "Cutie",
      },
      {
        acronym: "QTPI" ,  definition: "Cutie pie",
      },
      {
        acronym: "R" ,  definition: "Meaning 'are'",
      },
      {
        acronym: "R8" ,  definition: "Rate (SMS)",
      },
      {
        acronym: "RBAY" ,  definition: "Right back at you",
      },
      {
        acronym: "RFN" ,  definition: "Right *freaking* now",
      },
      {
        acronym: "RGR" ,  definition: "Roger (I agree, I understand)",
      },
      {
        acronym: "RHIP" ,  definition: "Rank has its privileges",
      },
      {
        acronym: "RIP" ,  definition: "Rest in peace",
      },
      {
        acronym: "RL" ,  definition: "Real life",
      },
      {
        acronym: "RLY" ,  definition: "Really",
      },
      {
        acronym: "RME" ,  definition: "Rolling my eyes",
      },
      {
        acronym: "RMLB" ,  definition: "Read my lips baby",
      },
      {
        acronym: "RMMM" ,  definition: "Read my mail man",
      },
      {
        acronym: "ROFL" ,  definition: "Rolling on floor laughing",
      },
      {
        acronym: "ROFLCOPTER" ,  definition: "Rolling on floor laughing and spinning around",
      },
      {
        acronym: "ROFLMAO" ,  definition: "Rolling on the floor, laughing my *butt* off",
      },
      {
        acronym: "ROTFL" ,  definition: "Rolling on the floor laughing",
      },
      {
        acronym: "ROTFLUTS" ,  definition: "Rolling on the floor laughing unable to speak",
      },
      {
        acronym: "RS" ,  definition: "Runescape (online gaming)",
      },
      {
        acronym: "RSN" ,  definition: "Real soon now",
      },
      {
        acronym: "RT" ,  definition: "Roger that",
      },
      {
        acronym: "RT" ,  definition: "Retweet"
      },
      {
        acronym: "RTBS" ,  definition: "Reason to be single",
      },
      {
        acronym: "RTFM" ,  definition: "Read the *freaking* manual",
      },
      {
        acronym: "RTFQ" ,  definition: "Read the *freaking* question",
      },
      {
        acronym: "RTHX" ,  definition: "Meaning 'Thanks for the RT (Retweet)'",
      },
      {
        acronym: "RTMS" ,  definition: "Read the manual, stupid",
      },
      {
        acronym: "RTNTN" ,  definition: "Retention (email, Government)",
      },
      {
        acronym: "RTRCTV" ,  definition: "Retroactive (email, Government)",
      },
      {
        acronym: "RTRMT" ,  definition: "Retirement (email, Government)",
      },
      {
        acronym: "RTSM" ,  definition: "Read the stupid manual",
      },
      {
        acronym: "RTWFQ" ,  definition: "Read the whole *freaking* question",
      },
      {
        acronym: "RU" ,  definition: "Are you?",
      },
      {
        acronym: "RUMOF" ,  definition: "Are you male or female?",
      },
      {
        acronym: "RUT" ,  definition: "Are u (you) there?",
      },
      {
        acronym: "RUOK" ,  definition: "Are you okay?",
      },
      {
        acronym: "RX" ,  definition: "Regards",
      },
      {
        acronym: "RW" ,  definition: "Real world",
      },
      {
        acronym: "RX" ,  definition: "Meaning drugs or prescriptions",
      },
      {
        acronym: "RYB" ,  definition: "Read your Bible&nbsp;",
      },
      {
        acronym: "RYO" ,  definition: "Roll your own",
      },
      {
        acronym: "RYS" ,  definition: "Read your screen&nbsp;",
      },
      {
        acronym: "RYS" ,  definition: "Are you single?",
      },
      {
        acronym: "S2R" ,  definition: "Send to receive (meaning send me your picture to get mine)",
      },
      {
        acronym: "S2S" ,  definition: "Sorry to say",
      },
      {
        acronym: "S4L" ,  definition: "Spam for life",
      },
      {
        acronym: "SAL" ,  definition: "Such a laugh",
      },
      {
        acronym: "SAT" ,  definition: "Sorry about that",
      },
      {
        acronym: "SAVAGE" ,  definition: "Slang for a shockingly careless expression or response to an event or message",
      },
      {
        acronym: "SB" ,  definition: "Snap back (Snapchat)",
      },
      {
        acronym: "SB" ,  definition: "Should be",
      },
      {
        acronym: "SB" ,  definition: "Smiling back",
      },
      {
        acronym: "SBIA" ,  definition: "Meaning Standing back in amazement",
      },
      {
        acronym: "SBT" ,  definition: "Sorry 'bout that",
      },
      {
        acronym: "SC" ,  definition: "Stay cool",
      },
      {
        acronym: "SD" ,  definition: "Sweet dreams",
      },
      {
        acronym: "SDMB" ,  definition: "Sweet dreams, my baby",
      },
      {
        acronym: "SENPAI" ,  definition: "Meaning someone older than you, someone you look up to",
      },
      {
        acronym: "SEO" ,  definition: "Search engine optimization",
      },
      {
        acronym: "SETE" ,  definition: "Smiling Ear-to-Ear",
      },
      {
        acronym: "SELFIE" ,  definition: "A photo that is taken of oneself for social media sharing",
      },
      {
        acronym: "SFAIK" ,  definition: "So far as I know",
      },
      {
        acronym: "SH" ,  definition: "Same here",
      },
      {
        acronym: "SH^",  definition: "Shut up",
      },
      {
        acronym: "SHID" ,  definition: "Slapping head in disgust",
      },
      {
        acronym: "SHIP" ,  definition: "Slang for 'wishing two people were in a relationship'",
      },
      {
        acronym: "SICNR" ,  definition: "Sorry, I could not resist",
      },
      {
        acronym: "SIG2R" ,  definition: "Sorry, I got to run",
      },
      {
        acronym: "SIHTH" ,  definition: "Stupidity is hard to take",
      },
      {
        acronym: "SIMYC" ,  definition: "Sorry I missed your call",
      },
      {
        acronym: "SIR" ,  definition: "Strike it rich",
      },
      {
        acronym: "SIS" ,  definition: "Snickering in silence",
      },
      {
        acronym: "SIS" ,  definition: "Meaning sister",
      },
      {
        acronym: "SIT" ,  definition: "Stay in touch",
      },
      {
        acronym: "SITD" ,  definition: "Still in the dark",
      },
      {
        acronym: "SJW" ,  definition: "Social justice warrior",
      },
      {
        acronym: "SK8" ,  definition: "Skate",
      },
      {
        acronym: "SK8NG" ,  definition: "Skating",
      },
      {
        acronym: "SK8R" ,  definition: "Skater",
      },
      {
        acronym: "SK8RBOI" ,  definition: "Skater Boy",
      },
      {
        acronym: "SLAP" ,  definition: "Sounds like a plan",
      },
      {
        acronym: "Slay" ,  definition: "To succeed at something",
      },
      {
        acronym: "SM" ,  definition: "Social media",
      },
      {
        acronym: "SMAZED" ,  definition: "Smoky haze (marijuana stoned)",
      },
      {
        acronym: "SMEXI" ,  definition: "Combination of sexy and Mexican, used to describe attractive people",
      },
      {
        acronym: "SMH" ,  definition: "Shaking my head",
      },
      {
        acronym: "SMHID" ,  definition: "Scratching my head in disbelief",
      },
      {
        acronym: "SNAFU" ,  definition: "Situation normal all fouled up",
      },
      {
        acronym: "SNERT" ,  definition: "Snot nosed egotistical rude teenager",
      },
      {
        acronym: "SNR" ,  definition: "Streaks and Recents (Snapchat)",
      },
      {
        acronym: "SO" ,  definition: "Significant other",
      },
      {
        acronym: "SOAB" ,  definition: "Son of a *B*",
      },
      {
        acronym: "S'OK",  definition: "Meaning It' (s) okay (ok)",
      },
      {
        acronym: "SOL" ,  definition: "Sooner or later",
      },
      {
        acronym: "SOMY" ,  definition: "Sick of me yet?",
      },
      {
        acronym: "SorG" ,  definition: "Straight or Gay?",
      },
      {
        acronym: "SOS" ,  definition: "Meaning help",
      },
      {
        acronym: "SOS" ,  definition: "Son of Sam",
      },
      {
        acronym: "SOT" ,  definition: "Short of time",
      },
      {
        acronym: "SOTMG" ,  definition: "Short of time, must go",
      },
      {
        acronym: "SOWM" ,  definition: "Someone with me",
      },
      {
        acronym: "SPK" ,  definition: "Speak (SMS)",
      },
      {
        acronym: "SRSLY" ,  definition: "Seriously",
      },
      {
        acronym: "SPST" ,  definition: "Same place, same time",
      },
      {
        acronym: "SPTO" ,  definition: "Spoke to",
      },
      {
        acronym: "SQ" ,  definition: "Square",
      },
      {
        acronym: "SRY" ,  definition: "Sorry",
      },
      {
        acronym: "SS" ,  definition: "So sorry",
      },
      {
        acronym: "SSDD" ,  definition: "Same stuff, different day",
      },
      {
        acronym: "SSIF" ,  definition: "So stupid it's funny",
      },
      {
        acronym: "SSINF" ,  definition: "So stupid it's not funny",
      },
      {
        acronym: "ST&amp;D",  definition: "Stop texting and drive",
      },
      {
        acronym: "Stan" ,  definition: "Meaning a die-hard fan of someone (Snapchat)",
      },
      {
        acronym: "STFU" ,  definition: "Shut the *freak* up",
      },
      {
        acronym: "STR8" ,  definition: "Straight",
      },
      {
        acronym: "STW" ,  definition: "Search the Web",
      },
      {
        acronym: "SU" ,  definition: "Shut up",
      },
      {
        acronym: "SUITM" ,  definition: "See you in the morning",
      },
      {
        acronym: "SUL" ,  definition: "See you later",
      },
      {
        acronym: "SUP" ,  definition: "What's up?",
      },
      {
        acronym: "SUTH" ,  definition: "So use(d) to haters (Facebook)",
      },
      {
        acronym: "SUX" ,  definition: "Meanings sucks or 'it sucks'",
      },
      {
        acronym: "SUYF" ,  definition: "Shut up you fool",
      },
      {
        acronym: "SWAG" ,  definition: "Meaning free stuff and giveaways from tech tradeshows",
      },
      {
        acronym: "SWAG" ,  definition: "Scientific wild *a* guess",
      },
      {
        acronym: "SWAK" ,  definition: "Sent (or sealed) with a kiss",
      },
      {
        acronym: "SWALK" ,  definition: "Sealed (or sealed) with a loving kiss",
      },
      {
        acronym: "SWAT" ,  definition: "Scientific wild *butt* guess",
      },
      {
        acronym: "SWL" ,  definition: "Screaming with laughter",
      },
      {
        acronym: "SWMBO" ,  definition: "She who must be obeyed. Meaning wife or partner",
      },
      {
        acronym: "SYL" ,  definition: "See you later&nbsp;",
      },
      {
        acronym: "SYS" ,  definition: "See you soon&nbsp;",
      },
      {
        acronym: "SYY" ,  definition: "Shut your yapper",
      },
      {
        acronym: "T+",  definition: "Think positive",
      },
      {
        acronym: "T4BU" ,  definition: "Thanks for being you",
      },
      {
        acronym: "T:)T",  definition: "Think happy thoughts",
      },
      {
        acronym: "TA" ,  definition: "Thanks a lot",
      },
      {
        acronym: "TAFN" ,  definition: "That's all for now",
      },
      {
        acronym: "TAM" ,  definition: "Tomorro a.m.",
      },
      {
        acronym: "TANK" ,  definition: "Meaning really strong",
      },
      {
        acronym: "TANKED" ,  definition: "Meaning 'owned'",
      },
      {
        acronym: "TANKING" ,  definition: "Meaning 'owning'",
      },
      {
        acronym: "TARFU" ,  definition: "Things Are Really *fouled* Up.",
      },
      {
        acronym: "TAU" ,  definition: "Thinking about u (you)",
      },
      {
        acronym: "TAUMUALU" ,  definition: "Thinking about you miss you always love you",
      },
      {
        acronym: "TBAG" ,  definition: "Process of disgracing a corpse, taunting a fragged/killed player (online gaming)",
      },
      {
        acronym: "TBBH" ,  definition: "To be brutally honest",
      },
      {
        acronym: "TBC" ,  definition: "To be continued",
      },
      {
        acronym: "TBD" ,  definition: "To be determined",
      },
      {
        acronym: "TBH" ,  definition: "To be honest",
      },
      {
        acronym: "TBL" ,  definition: "Text back later",
      },
      {
        acronym: "TBT" ,  definition: "Throwback Thursday",
      },
      {
        acronym: "TC" ,  definition: "Take care",
      },
      {
        acronym: "TCB" ,  definition: "Take care of business",
      },
      {
        acronym: "TCOY" ,  definition: "Take care of yourself",
      },
      {
        acronym: "TD" ,  definition: "Tower defense (online gaming)",
      },
      {
        acronym: "TD2M" ,  definition: "Talk dirty to me",
      },
      {
        acronym: "TDTM" ,  definition: "Talk dirty to me",
      },
      {
        acronym: "TEA" ,  definition: "Meaning gossip",
      },
      {
        acronym: "TFF" ,  definition: "Too *freaking* funny",
      },
      {
        acronym: "TFS" ,  definition: "Thanks for sharing",
      },
      {
        acronym: "TFTF" ,  definition: "Thanks for the follow",
      },
      {
        acronym: "TFTI" ,  definition: "Thanks for the invitation",
      },
      {
        acronym: "TFTT" ,  definition: "Thanks for this tweet",
      },
      {
        acronym: "TG" ,  definition: "Thank goodness",
      },
      {
        acronym: "TGIF" ,  definition: "Thank God it's Friday",
      },
      {
        acronym: "THNQ" ,  definition: "Thank-you (SMS)",
      },
      {
        acronym: "THNX" ,  definition: "Thanks",
      },
      {
        acronym: "THOT" ,  definition: "That wh*re over there",
      },
      {
        acronym: "THT" ,  definition: "Think happy thoughts",
      },
      {
        acronym: "THX" ,  definition: "Thanks",
      },
      {
        acronym: "TIA" ,  definition: "Thanks in advance",
      },
      {
        acronym: "TIAD" ,  definition: "Tomorrow is another day",
      },
      {
        acronym: "TIC" ,  definition: "Tongue-in-cheek",
      },
      {
        acronym: "TIL" ,  definition: "Today I learned",
      },
      {
        acronym: "TILIS" ,  definition: "Tell it like it is",
      },
      {
        acronym: "TIR" ,  definition: "Teacher in room",
      },
      {
        acronym: "TLK2UL8R" ,  definition: "Talk to you later",
      },
      {
        acronym: "TL" ,  definition: "Too long",
      },
      {
        acronym: "TL;DR",  definition: "Too long; didn't read",
      },
      {
        acronym: "TM" ,  definition: "Trust me",
      },
      {
        acronym: "TMA" ,  definition: "Take my advice",
      },
      {
        acronym: "TMB" ,  definition: "Text me back",
      },
      {
        acronym: "TMB" ,  definition: "Tweet me back",
      },
      {
        acronym: "TMI" ,  definition: "Too much information",
      },
      {
        acronym: "TMOT" ,  definition: "Trust me on this",
      },
      {
        acronym: "TMTH" ,  definition: "Too much to handle",
      },
      {
        acronym: "TMYL" ,  definition: "Tell me your location",
      },
      {
        acronym: "TMWFI" ,  definition: "Take my word for it",
      },
      {
        acronym: "TNSTAAFL" ,  definition: "There's no such thing as a free lunch",
      },
      {
        acronym: "TNT" ,  definition: "Til next time",
      },
      {
        acronym: "TOJ" ,  definition: "Tears of joy",
      },
      {
        acronym: "TOS" ,  definition: "Terms of service",
      },
      {
        acronym: "TOTES" ,  definition: "Totally",
      },
      {
        acronym: "TOU" ,  definition: "Thinking of you",
      },
      {
        acronym: "TOY" ,  definition: "Thinking of you",
      },
      {
        acronym: "TPM" ,  definition: "Tomorrow p.m.",
      },
      {
        acronym: "TPTB" ,  definition: "The powers that be",
      },
      {
        acronym: "TQ" ,  definition: "Te quiero / I love you (Spanish SMS)",
      },
      {
        acronym: "TSH" ,  definition: "Tripping so hard",
      },
      {
        acronym: "TSNF" ,  definition: "That's so not fair",
      },
      {
        acronym: "TSTB" ,  definition: "The sooner, the better",
      },
      {
        acronym: "TT" ,  definition: "Trending topic",
      },
      {
        acronym: "TTFN" ,  definition: "Ta ta for now",
      },
      {
        acronym: "TTLY" ,  definition: "Totally",
      },
      {
        acronym: "TTTT" ,  definition: "These things take time",
      },
      {
        acronym: "TTUL" ,  definition: "Talk to you later",
      },
      {
        acronym: "TU" ,  definition: "Thank you",
      },
      {
        acronym: "TUI" ,  definition: "Turning you in",
      },
      {
        acronym: "TURNT" ,  definition: "Meaning excitement, turned up",
      },
      {
        acronym: "TWSS" ,  definition: "That's what she said",
      },
      {
        acronym: "TTG" ,  definition: "Time to go",
      },
      {
        acronym: "TTYAFN" ,  definition: "Talk to you awhile from now",
      },
      {
        acronym: "TTYL" ,  definition: "Talk to you later",
      },
      {
        acronym: "TTYS" ,  definition: "Talk to you soon",
      },
      {
        acronym: "TY" ,  definition: "Thank you",
      },
      {
        acronym: "TYFC" ,  definition: "Thank you for charity (online gaming)",
      },
      {
        acronym: "TYFYC" ,  definition: "Thank you for your comment",
      },
      {
        acronym: "TYS" ,  definition: "Told you so",
      },
      {
        acronym: "TYT" ,  definition: "Take your time",
      },
      {
        acronym: "TYSO" ,  definition: "Thank you so much",
      },
      {
        acronym: "TYAFY" ,  definition: "Thank you and *freak* you",
      },
      {
        acronym: "TYVM" ,  definition: "Thank you very much",
      },
      {
        acronym: "TX" ,  definition: "Thanks",
      },
      {
        acronym: "^URS",  definition: "Up yours",
      },
      {
        acronym: "UCMU" ,  definition: "You crack me up",
      },
      {
        acronym: "UDI" ,  definition: "Unidentified drinking injury (meaning bruise, scratch, ache and so on)",
      },
      {
        acronym: "UDM" ,  definition: "U (You) da (the) man",
      },
      {
        acronym: "UDS" ,  definition: "Ugly domestic scene",
      },
      {
        acronym: "UFB" ,  definition: "Un *freaking* believable",
      },
      {
        acronym: "UFN" ,  definition: "Until further notice",
      },
      {
        acronym: "UFWM" ,  definition: "You *freaking* with me?",
      },
      {
        acronym: "UGTBK" ,  definition: "You've got to be kidding",
      },
      {
        acronym: "UHGTBSM" ,  definition: "You have got to be s#$t*ing me!",
      },
      {
        acronym: "UKTR" ,  definition: "You know that's right",
      },
      {
        acronym: "UL" ,  definition: "Upload",
      },
      {
        acronym: "U-L",  definition: "Meaning 'You will'",
      },
      {
        acronym: "UNA" ,  definition: "Use no acronyms",
      },
      {
        acronym: "UN4TUN8" ,  definition: "Unfortunate",
      },
      {
        acronym: "UNBLEFBLE" ,  definition: "Unbelievable",
      },
      {
        acronym: "UNCRTN" ,  definition: "Uncertain",
      },
      {
        acronym: "UNPC" ,  definition: "Un- (not) politically correct",
      },
      {
        acronym: "UOK" ,  definition: "(Are) You ok?",
      },
      {
        acronym: "UR" ,  definition: "You are / You're",
      },
      {
        acronym: "UR2YS4ME" ,  definition: "You are too wise for me",
      },
      {
        acronym: "URA*",  definition: "You are a star",
      },
      {
        acronym: "URH" ,  definition: "You are hot (U R Hot)",
      },
      {
        acronym: "URSKTM" ,  definition: "You are so kind to me",
      },
      {
        acronym: "URTM" ,  definition: "You are the man",
      },
      {
        acronym: "URW" ,  definition: "You are welcome",
      },
      {
        acronym: "USBCA" ,  definition: "Until something better comes along",
      },
      {
        acronym: "USU" ,  definition: "Usually",
      },
      {
        acronym: "UT" ,  definition: "Unreal Tournament (online gaming)",
      },
      {
        acronym: "UT2L" ,  definition: "You take too long",
      },
      {
        acronym: "UTM" ,  definition: "You tell me",
      },
      {
        acronym: "UV" ,  definition: "Unpleasant visual",
      },
      {
        acronym: "UW" ,  definition: "You're welcome",
      },
      {
        acronym: "UX" ,  definition: "User experience",
      },
      {
        acronym: "V" ,  definition: "Very",
      },
      {
        acronym: "VAT" ,  definition: "Value added tax",
      },
      {
        acronym: "VBL" ,  definition: "Visible bra line",
      },
      {
        acronym: "VBS" ,  definition: "Very big smile",
      },
      {
        acronym: "VC" ,  definition: "Voice chat",
      },
      {
        acronym: "VEG" ,  definition: "Very evil grin",
      },
      {
        acronym: "VFF" ,  definition: "Very freaking funny",
      },
      {
        acronym: "VFM" ,  definition: "Value for money",
      },
      {
        acronym: "VGC" ,  definition: "Very good condition",
      },
      {
        acronym: "VGG" ,  definition: "Very good game (online gaming)",
      },
      {
        acronym: "VGH" ,  definition: "Very good hand (online gaming)",
      },
      {
        acronym: "VIP" ,  definition: "Very important person",
      },
      {
        acronym: "VM" ,  definition: "Voice mail",
      },
      {
        acronym: "VN" ,  definition: "Very nice",
      },
      {
        acronym: "VNH" ,  definition: "Very nice hand (online gaming)",
      },
      {
        acronym: "VoIP" ,  definition: "Voice over Internet Protocol",
      },
      {
        acronym: "VRY" ,  definition: "Very",
      },
      {
        acronym: "VSC" ,  definition: "Very soft chuckle",
      },
      {
        acronym: "VSF" ,  definition: "Very sad face",
      },
      {
        acronym: "VWD" ,  definition: "Very well done (online gaming)",
      },
      {
        acronym: "VWP" ,  definition: "Very well played (online gaming)",
      },
      {
        acronym: "W@",  definition: "What?",
      },
      {
        acronym: "W/",  definition: "With",
      },
      {
        acronym: "W/B",  definition: "Welcome back",
      },
      {
        acronym: "W3" ,  definition: "WWW (Web address)",
      },
      {
        acronym: "W8" ,  definition: "Wait",
      },
      {
        acronym: "WAH" ,  definition: "Working at home",
      },
      {
        acronym: "WAJ" ,  definition: "What a jerk",
      },
      {
        acronym: "WAM" ,  definition: "Wait a minute",
      },
      {
        acronym: "WAN2" ,  definition: "Want to? (SMS)",
      },
      {
        acronym: "WAN2TLK" ,  definition: "Want to talk",
      },
      {
        acronym: "WAREZ" ,  definition: "Meaning pirated (illegally gained) software",
      },
      {
        acronym: "WAS" ,  definition: "Wait a second",
      },
      {
        acronym: "WAS" ,  definition: "Wild *a* guess",
      },
      {
        acronym: "WAT" ,  definition: "What",
      },
      {
        acronym: "WAWA" ,  definition: "Where are we at?",
      },
      {
        acronym: "WAYF" ,  definition: "Where are you from?",
      },
      {
        acronym: "W/B",  definition: "Write back",
      },
      {
        acronym: "WB" ,  definition: "Welcome back",
      },
      {
        acronym: "WBS" ,  definition: "Write back soon",
      },
      {
        acronym: "WBU" ,  definition: "What about you?",
      },
      {
        acronym: "WC" ,  definition: "Welcome",
      },
      {
        acronym: "WC" ,  definition: "Who cares",
      },
      {
        acronym: "WCA" ,  definition: "Who cares anyway",
      },
      {
        acronym: "W/E",  definition: "Whatever",
      },
      {
        acronym: "W/END",  definition: "Weekend",
      },
      {
        acronym: "WE" ,  definition: "Whatever",
      },
      {
        acronym: "WEBO" ,  definition: "Webopedia",
      },
      {
        acronym: "WEEBO" ,  definition: "Describes a person obsessed with of Japanese culture",
      },
      {
        acronym: "WEP" ,  definition: "Weapon (online gaming)",
      },
      {
        acronym: "WH5" ,  definition: "Who, what, when, where, why",
      },
      {
        acronym: "WHATEVES" ,  definition: "Whatever",
      },
      {
        acronym: "WIBNI" ,  definition: "Wouldn't it be nice if",
      },
      {
        acronym: "WDALYIC" ,  definition: "Who died and left you in charge",
      },
      {
        acronym: "WDYK" ,  definition: "What do you know?",
      },
      {
        acronym: "WDYT" ,  definition: "What do you think?",
      },
      {
        acronym: "WGACA" ,  definition: "What do you think?",
      },
      {
        acronym: "WIIFM" ,  definition: "What's in it for me?",
      },
      {
        acronym: "WISP" ,  definition: "Winning is so pleasurable",
      },
      {
        acronym: "WITP" ,  definition: "What is the point?",
      },
      {
        acronym: "WITW" ,  definition: "What in the world",
      },
      {
        acronym: "WIU" ,  definition: "Wrap it up",
      },
      {
        acronym: "WK" ,  definition: "Week",
      },
      {
        acronym: "WKD" ,  definition: "Weekend",
      },
      {
        acronym: "WRT" ,  definition: "With regard to",
      },
      {
        acronym: "WL" ,  definition: "Whatta loser",
      },
      {
        acronym: "W/O",  definition: "Without",
      },
      {
        acronym: "WOA" ,  definition: "Work of Art",
      },
      {
        acronym: "WOKE" ,  definition: "Slang for people who are aware of current social issues, and politics",
      },
      {
        acronym: "WOMBAT" ,  definition: "Waste of money, brains and time",
      },
      {
        acronym: "WOW" ,  definition: "World of Warcraft (online gaming)",
      },
      {
        acronym: "WRK" ,  definition: "Work",
      },
      {
        acronym: "WRU" ,  definition: "Where are you?",
      },
      {
        acronym: "WRU@",  definition: "Where are you at?",
      },
      {
        acronym: "WRUD" ,  definition: "What are you doing?",
      },
      {
        acronym: "WTB" ,  definition: "Want to buy (online gaming)",
      },
      {
        acronym: "WTF" ,  definition: "What the *freak* ?",
      },
      {
        acronym: "WTFE" ,  definition: "What the *freak* ever",
      },
      {
        acronym: "WTFO" ,  definition: "What the *freak* ?, over.",
      },
      {
        acronym: "WTG" ,  definition: "Way to go",
      },
      {
        acronym: "WTGP" ,  definition: "Want to go private (talk out of public chat area)",
      },
      {
        acronym: "WTH" ,  definition: "What the heck?",
      },
      {
        acronym: "WTM" ,  definition: "Who's the man?",
      },
      {
        acronym: "WTS" ,  definition: "Want to sell? (online gaming)",
      },
      {
        acronym: "WTT" ,  definition: "Want to trade? (online gaming)",
      },
      {
        acronym: "WU" ,  definition: "What's up?",
      },
      {
        acronym: "WUCIWUG" ,  definition: "What you see is what you get",
      },
      {
        acronym: "WUF" ,  definition: "Where are you from?",
      },
      {
        acronym: "WUP" ,  definition: "What's up?",
      },
      {
        acronym: "WUT" ,  definition: "Meaning 'what'",
      },
      {
        acronym: "WUW" ,  definition: "What u (you) want?",
      },
      {
        acronym: "WUU2" ,  definition: "What are you up to?",
      },
      {
        acronym: "WUZ" ,  definition: "Was",
      },
      {
        acronym: "WWJD" ,  definition: "What would Jesus do?",
      },
      {
        acronym: "WWJD, definition" ,  definition: "What Would Judd Do? (Artist Donald Judd, who was known to do things in his own compulsive way.)",
      },
      {
        acronym: "WWNC" ,  definition: "Will wonders never cease",
      },
      {
        acronym: "WWYC" ,  definition: "Write when you can",
      },
      {
        acronym: "WYCM" ,  definition: "Will you call me?",
      },
      {
        acronym: "WYD" ,  definition: "What (are) you doing?",
      },
      {
        acronym: "WYGAM" ,  definition: "When you get a minute",
      },
      {
        acronym: "WYHAM" ,  definition: "When you have a minute",
      },
      {
        acronym: "WYLEI" ,  definition: "When you least expect it",
      },
      {
        acronym: "WYSIWYG" ,  definition: "What you see is what you get&nbsp;",
      },
      {
        acronym: "WYWH" ,  definition: "Wish you were here",
      },
      {
        acronym: "X-1-10",  definition: "Meaning 'Exciting'",
      },
      {
        acronym: "X" ,  definition: "Kiss",
      },
      {
        acronym: "X!",  definition: "Meaning 'a typical woman'",
      },
      {
        acronym: "XD" ,  definition: "Meaning 'really hard laugh' (where D is a smiley mouth)",
      },
      {
        acronym: "XD" ,  definition: "Meaning a 'devilish smile'",
      },
      {
        acronym: "XME" ,  definition: "Excuse Me",
      },
      {
        acronym: "XOXOXO" ,  definition: "Hugs &amp; Kisses",
      },
      {
        acronym: "XLNT" ,  definition: "Excellent&nbsp;",
      },
      {
        acronym: "XLR8" ,  definition: "Meaning 'faster' or 'going faster'",
      },
      {
        acronym: "XPOST" ,  definition: "Meaning Cross-post. A link posted to a subreddit that was already shared on a different subreddit (Reddit)",
      },
      {
        acronym: "XYL" ,  definition: "Ex-young lady, meaning wife. (amateur radio)&nbsp;",
      },
      {
        acronym: "XYZ" ,  definition: "Examine your zipper",
      },
      {
        acronym: "Y?",  definition: "Why?",
      },
      {
        acronym: "Y" ,  definition: "Meaning Yawn",
      },
      {
        acronym: "Y2K" ,  definition: "You're too kind",
      },
      {
        acronym: "YA" ,  definition: "Your",
      },
      {
        acronym: "YAA" ,  definition: "Yet another acronym",
      },
      {
        acronym: "YABA" ,  definition: "Yet another bloody acronym",
      },
      {
        acronym: "YARLY" ,  definition: "Ya, really?",
      },
      {
        acronym: "YAS" ,  definition: "Meaning 'praise'",
      },
      {
        acronym: "YBIC" ,  definition: "Your brother in Christ",
      },
      {
        acronym: "YBS" ,  definition: "You'll be sorry",
      },
      {
        acronym: "YCDBWYCID" ,  definition: "You can't do business when your computer is down",
      },
      {
        acronym: "YCHT" ,  definition: "You can have them",
      },
      {
        acronym: "YCLIU" ,  definition: "You can look it up",
      },
      {
        acronym: "YCMU" ,  definition: "You crack me up",
      },
      {
        acronym: "YCT" ,  definition: "Meaning Your comment to?",
      },
      {
        acronym: "YD" ,  definition: "Yesterday",
      },
      {
        acronym: "YEET" ,  definition: "Meaning excitement, approval or display of energy (i.e. throwing something)",
      },
      {
        acronym: "YF" ,  definition: "Wife",
      },
      {
        acronym: "YG" ,  definition: "Young gentleman",
      },
      {
        acronym: "YGG" ,  definition: "You go girl",
      },
      {
        acronym: "YGTBKM" ,  definition: "You've got to be kidding me",
      },
      {
        acronym: "YGTR" ,  definition: "You got that right",
      },
      {
        acronym: "YHBT" ,  definition: "You have been trolled",
      },
      {
        acronym: "YHBW" ,  definition: "You have been warned",
      },
      {
        acronym: "YHL" ,  definition: "You have lost",
      },
      {
        acronym: "YIU" ,  definition: "Yes, I understand",
      },
      {
        acronym: "YKW" ,  definition: "You know what",
      },
      {
        acronym: "YKWYCD" ,  definition: "You know what you can do",
      },
      {
        acronym: "YL" ,  definition: "Young lady",
      },
      {
        acronym: "YMMV" ,  definition: "Your mileage may vary",
      },
      {
        acronym: "YNK" ,  definition: "You never know",
      },
      {
        acronym: "YOLO" ,  definition: "You only live once",
      },
      {
        acronym: "YR" ,  definition: "Your",
      },
      {
        acronym: "YR" ,  definition: "Yeah right",
      },
      {
        acronym: "YRYOCC" ,  definition: "You're running your own cuckoo clock",
      },
      {
        acronym: "YSIC" ,  definition: "Your sister in Christ",
      },
      {
        acronym: "YSYD" ,  definition: "Yeah sure you do",
      },
      {
        acronym: "YT" ,  definition: "YouTube",
      },
      {
        acronym: "YT" ,  definition: "You there?",
      },
      {
        acronym: "YTB" ,  definition: "You're the best",
      },
      {
        acronym: "YTB" ,  definition: "Youth talk back",
      },
      {
        acronym: "YTTL" ,  definition: "You take too long",
      },
      {
        acronym: "YTG" ,  definition: "You're the greatest",
      },
      {
        acronym: "YW" ,  definition: "You're welcome",
      },
      {
        acronym: "YWHNB" ,  definition: "Yes, we have no bananas",
      },
      {
        acronym: "YWHOL" ,  definition: "Yelling 'woohoo' out loud",
      },
      {
        acronym: "YWSYLS" ,  definition: "You win some, you lose some",
      },
      {
        acronym: "YYSSW" ,  definition: "Yeah, yeah, sure, sure, whatever",
      },
      {
        acronym: "Z" ,  definition: "Zero",
      },
      {
        acronym: "Z" ,  definition: "Z's are calling (meaning going to bed/sleep)",
      },
      {
        acronym: "Z" ,  definition: "Meaning 'Said'",
      },
      {
        acronym: "Z%",  definition: "Zoo",
      },
      {
        acronym: "ZH" ,  definition: "Sleeping Hour",
      },
      {
        acronym: "ZOMG" ,  definition: "Used in World of Warcraft to mean OMG (Oh My God)",
      },
      {
        acronym: "ZOT" ,  definition: "Zero tolerance",
      },
      {
        acronym: "ZUP" ,  definition: "Meaning 'What's up?'",
      },
      {
        acronym: "ZZZZ" ,  definition: "Sleeping (or bored)",
      },
    ])
    .catch((err) => {
      console.log(err);
    })
    .then(() => {
      console.log("Seed complete!");
      mongoose.connection.close();
    });