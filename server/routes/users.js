const router = require('express').Router();
const User = require('../models/user.model.js');

router.get('/' ,(req,res) => {
    try {
        User.find().then((users) => {
            res.status(200).json(users);
        })

    } catch (error) {
        console.log(error)
    }
})

router.post('/add' , (req,res) => {
    const username = req.body.username;
    const newUser = new User({username:username});

    try {
        newUser.save().then(() => {res.status(200).json("user added");});
    } catch (err) {
        res.status(400).json(err);
    }
});

router.get('/:id',(req,res) =>{
    try {
        const id = req.params.id;
        User.find({_id:id}).then((user) => {res.status(200).json(user)});
    } catch (error) {
        console.log(error)
    }
});

router.delete('/remove/:id', (req,res) => {
   try {
       const id = req.params.id;
       User.remove({_id:id}).then(() => {res.status(200).json("removed user")});
   } catch (error) {
       console.log(error);
   }
});


module.exports = router