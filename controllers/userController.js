const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require('../models');

module.exports = {
    // Get all users
    async getUsers(req, res) {
        try {
          const users = await User.find();

          res.json(users);
        } catch (err) {
          console.log(err);
          return res.status(500).json(err);
        }
    },

    // Get a single user
    async getSingleUser(req, res) {
        try {
          const user = await User.findOne({ _id: req.params.userId })
            .select('-__v');
    
          if (!user) {
            return res.status(404).json({ message: 'No user with that ID' })
          }
    
          console.log("user", user);
          console.log("user.thoughts", user.thoughts);
          console.log("user.friends", user.friends);

          res.json({
            user,
            thoughts: user.thoughts,
            friends: user.friends,
          });
        } catch (err) {
          console.log(err);
          return res.status(500).json(err);
        }
      },
}