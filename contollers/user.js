const auth = require("../middlewares/auth");
const bcrypt = require("bcrypt");
const User = require("../models/user").model;
const validate = require("../models/user").validate;

module.exports = {
    signUp: async (req, res) => {
        // validate the req body
        if(!validate(req.body)) {
            res.status(400).send(error.details[0].message); 
            return;
        }

        // find an existing user
        let user = await User.findOne({email: req.body.email})
        if(user) {
            res.status(400).send("User already registered");
            return;
        }

        // create new user
        user = new User({
            name: req.body.name,
            password: req.body.password,
            email: req.body.email
        });
        // hash password before saving
        user.password = await bcrypt.hash(user.password, 10);
        await user.save();

        // generate authentication token
        const token = user.generateAuthToken(user.password, 10);
        res.header("authorization", token).json({
            _id: user._id,
            name: user.name,
            email: user.email
        })

    },

    login: async (req, res) => {
        // validate the req
        if(!req.body.email || !req.body.password) {
            res.status(400).send("Email and password cannot be empty.");
            return;
        }

        // find the user with specified email
        let user = await User.findOne({email: req.body.email});
        if(!user) {
            res.status(401).send("Invalid email");
            return;
        }

        // match the password
        const passwordMatch = await bcrypt.compare(req.body.password, user.password);
        if(!passwordMatch) {
            res.status(401).send("Password did not match");
            return;
        }

        // login user by sending authentication token
        const token = user.generateAuthToken(user.password, 10);
        res.header("authorization", token).json({
            _id: user._id,
            name: user.name,
            email: user.email
        })

    }
}