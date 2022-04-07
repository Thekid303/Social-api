const { User } = require('../models');
const { isEmail } = require('validator');

module.exports = {
    createUser: async (req, res) => {
        // const { username, email, thoughts, friends } = req.body;
        const { username, email } = req.body;
        if (!isEmail(email)) {
            return res.status(401).json({ error: 'Email must be a valid email'});
        }
        try {
            const newUser = await User.create({
                username,
                email,
            });
            res.json(newUser);
        } catch (e) {
            res.json(e);
        }
    },

    getAllUsers: async (req, res) => {
        try {
            const users = await User.find();
            res.json(users);
        } catch (e) {
            res.json(e);
        }
    },

    getUserById: async (req, res) => {
        const { userId } = req.params;
        try {
            const user = await User.findById(userId);
            res.json(user);
        } catch (e) {
            res.json(e);
        }
    },

    updateUserById: async (req, res) => {
        const { userId } = req.params;
        try {
            const updatedUser = await User.findByIdAndUpdate(
                userId,
                {...req.body},
                {
                    new: true,
                    runValidators: true,
                }
            );
            res.json(updatedUser);
        } catch (e) {
            res.json(e);
        }
    },

    deleteUserById: async (req, res) => {
        const { userId } = req.params;
        try {
            const deletedUser = await User.findByIdAndDelete(userId);
            res.json(deletedUser);
        } catch (e) {
            res.json(e);
        }
    },

    addFriendToUserById: async (req, res) => {
        const { userId, friendId } = req.params;
        try {
            const updatedUser = await User.findByIdAndUpdate(userId,
                {
                    $push: {
                        friends: friendId,
                    },
                },
                {
                    new: true,
                }
            );
            res.json(updatedUser);
        } catch (e) {
            res.json(e);
        }
    },

    deleteFriendToUserById: async (req, res) => {
        const { userId, friendId } = req.params;
        try {
            const updatedUser = await User.findByIdAndUpdate(userId,
                {
                    $pull: {
                        friends: friendId,
                    },
                },
                {
                    new: true,
                }
            );
            res.json(updatedUser);
        } catch (e) {
            res.json(e);
        }
    },
};