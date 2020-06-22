const express = require('express');
const User = require('./models/users.model');
const router = express.Router();

router.get('/users/:id?', async (req, res) => {
    try {
        let filter = req.params.id ? {_id: req.params._id} : {isDeleted: false};
        let users = await User.find(filter);
        return res.status(200).json(users)
    }catch (error) {
        return res.status(500).json({error: true, msg: error.message})
    }
});


router.post('/users', async (req, res) => {
    try {
        let {email} = req.body;
        let user = await User.findOne({email:email});
        if(user){
            return res.status(400).json({error: true, msg: "user already exists"});
        }
        else {
            let newUser = new User(req.body);
            await newUser.save();
            return res.status(200).json({status: true, newUser});
        }
    }catch (error) {
        return res.status(500).json({error: true, msg: error.message})
    }
});

router.put('/users/:id', async (req, res) => {
    try {
        let filter = {_id: req.params._id, isDeleted:false};
        let user = await User.findOne(filter);
        if(user){
            await User.updateOne(filter, req.body);
            return res.status(200).json({status: true});
        }
        return res.status(400).json({error: true, msg: "user not exists"});
    }catch (error) {
        return res.status(500).json({error: true, msg: error.message})
    }
});

router.delete('/users/:id', async (req, res) => {
    try {
        let filter = {_id: req.params._id, isDeleted: false};
        let user = await User.findOne(filter);
        if(user){
            user.isDeleted = true;
            await user.save();
            return res.status(200).json({status: true});
        }

        return res.status(200).json({error: true, msg: "user not exists"});
    }catch (error) {
        return res.status(500).json({error: true, msg: error.message})
    }
});

module.exports = router;