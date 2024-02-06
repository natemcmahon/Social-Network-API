const names = [
  'Aaran',
  'Aaren',
  'Aarez',
  'Aarman',
  'Aaron',
  'Aaron-James',
  'Aarron',
  'Aaryan',
  'Aaryn',
  'Aayan',
  'Aazaan',
  'Abaan',
  'Abbas',
  'Abdallah',
  'Abdalroof',
  'Abdihakim',
  'Abdirahman',
  'Abdisalam',
  'Abdul',
  'Abdul-Aziz',
  'Abdulbasir',
  'Abdulkadir',
  'Abdulkarem',
  'Smith',
  'Jones',
  'Coollastname',
  'enter_name_here',
  'Ze',
  'Zechariah',
  'Zeek',
  'Zeeshan',
  'Zeid',
  'Zein',
  'Zen',
  'Zendel',
  'Zenith',
  'Zennon',
  'Zeph',
  'Zerah',
  'Zhen',
  'Zhi',
  'Zhong',
  'Zhuo',
  'Zi',
  'Zidane',
  'Zijie',
  'Zinedine',
  'Zion',
  'Zishan',
  'Ziya',
  'Ziyaan',
  'Zohaib',
  'Zohair',
  'Zoubaeir',
  'Zubair',
  'Zubayr',
  'Zuriel',
  'Xander',
  'Jared',
  'Courtney',
  'Gillian',
  'Clark',
  'Jared',
  'Grace',
  'Kelsey',
  'Tamar',
  'Alex',
  'Mark',
  'Tamar',
  'Farish',
  'Sarah',
  'Nathaniel',
  'Parker',
];

const content = [
  'Happy Earth Day',
  'Lets go Chiefs!',
  'I love to code',
  'Jet fuel doesnt melt steel beams',
  'Can we get more shots of Taylor Swift during the game?',
  'Should the Bears draft Caleb Williams or keep Justin Fields?',
  'Remember Bloons Tower Defense? That game rocked',
  'Why doesnt the world ever say hello back',
  'If X is formerly known as Twitter, then what did Y used to be known as?',
  'Bear down!',
  'Is the Super Bowl rigged?',
  'Coffee, tea or energy drink?',
  'JavaScript is a fun language to code in',
  'I wonder if Guy McPerson is okay with us using him as an example all the time',
  'What time does it stop being night and start being morning?',
  'I sure hope Alabama is finished being a dynasty now that Saban retired',
  'Setting up all these links between models for non relational databases is confusing',
  'I got an empty package in the mail from Amazon the other day, I wonder what the delivery driver was thinking lol',
];

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random full name
const getRandomName = () =>
  `${getRandomArrItem(names)} ${getRandomArrItem(names)}`;

// Function to generate random assignments that we can add to student object.
const getRandomThoughts = (int) => {
  const results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      thoughtText: getRandomArrItem(content),
    });
  }
  return results;
};

const getRandomFriends = (int) => {
  const results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      username: getRandomArrItem(names),
    });
  }
  return results;
};

// Export the functions for use in seed.js
module.exports = { getRandomName, getRandomThoughts, getRandomFriends };
