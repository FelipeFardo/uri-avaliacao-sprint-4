const User = require('../models/User');
const TOKEN_SECRET = ' 1321sda65s4a6d54dsa987dsa351c98sad654' ;
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

module.exports = {
    save: async function(req, res) {
        const selectUser = await User.findOne({where: {email: req.body.email}}); 
        if(selectUser) return res.status(409).send('Email already exists!');
        const user = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password)
        })
        console.log(user);
        try {
            const savedUser = await user.save();
            savedUser.password = null; 
            res.send(savedUser);
        } catch (error) {
            res.status(400).send(error)
        }
    },

    list: async function(req, res) {
        const users = await User.findAll();
        return res.json(users);
    },

    login: async function (req, res) {
        const selectUser = await User.findOne({where: {email: req.body.email}});
        if(!selectUser) return res.status(403).send('Email or pass incorrect');
        
        const passwordAndUserMatch = bcrypt.compareSync(req.body.password, selectUser.password);
        if(!passwordAndUserMatch) return res.status(403).send('Email or pass incorrect');
        var token;
        if(req.body.remember){
            token = jwt.sign({userId: selectUser.id}, TOKEN_SECRET);
        }else token = jwt.sign({userId: selectUser.id}, TOKEN_SECRET, {expiresIn: 172800});
        res.header('authorization_token', token);
        res.send("User logged!");
    }
}