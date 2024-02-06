const connection = require('../config/connection');
const { User } = require('../models');
const { getRandomName, getRandomThoughts, getRandomFriends } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
    // Delete the collections if they exist
    let thoughtCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
    if (thoughtCheck.length) {
      await connection.dropCollection('thoughts');
    }

    let usersCheck = await connection.db.listCollections({ name: 'users' }).toArray();
    if (usersCheck.length) {
      await connection.dropCollection('users');
    }


  // Create empty array to hold the users
  const users = [];

  // Loop 20 times -- add users to the users array
  for (let i = 0; i < 20; i++) {
    // Get some random assignment objects using a helper function that we imported from ./data
    const thoughts = getRandomThoughts(2);
    const friends = getRandomFriends(3);

    console.log("thoughts: ", thoughts);
    console.log("friends: ", friends);

    const username = getRandomName();
    const first = username.split(' ')[0];
    const email = `${first}${Math.floor(Math.random() * (99 - 18 + 1) + 18)}@gmail.com`;

    users.push({
      username,
      email,
      thoughts,
      friends,
    });
  }

  console.log("users: ", users);

  // Add users to the collection and await the results
  await User.collection.insertMany(users);

  // Log out the seed data to indicate what should appear in the database
  console.table(users);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
