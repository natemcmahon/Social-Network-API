const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require('../models');

module.exports = {
    async createThought(req, res) {
        try {
            const thought = await Thought.create(req.body);
            const user = User.findOneAndUpdate({ _id: req.body._id }, { $push: {thoughts: thought._id }});
            res.json(user);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },
}