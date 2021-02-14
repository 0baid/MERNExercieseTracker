const router = require('express').Router();
const Exercise = require('../models/exercise.model.js');


//get all
router.get('/', (req,res) => {
    try {
        Exercise.find().then((exercises) => {
            res.status(200).json(exercises);
        })
    } catch (error) {
        console.log(error);
    }
});

//add new
router.post('/add', (req,res) => {
    try {
        const username = req.body.username;
        const description = req.body.description;
        const duration = Number(req.body.duration);
        const date = Date.parse(req.body.date);

        const newExercise = new Exercise({
            username:username,
            description:description,
            duration:duration,
            date:date,
        })

        newExercise.save().then(() => {res.status(200).json("exercise added")});

    } catch (error) {
        console.log(error);
    }
});


//remove
router.delete('/remove/:id', (req,res) => {
    try {
        const id = req.params.id;
        Exercise.remove({_id:id}).then(() => {res.status(200).json("removed execise")});
    } catch (error) {
        console.log(error);
    }
});


//get one
router.get('/:id', (req,res) => {
    try {
        const id = req.params.id;
        Exercise.find({_id:id}).then((exercise) => {res.status(200).json(exercise)});

    } catch (error) {
        console.log(error);
    }
});

//update
router.put('/update/:id' ,(req,res) => {
    try {
        const id = req.params.id;
        Exercise.findById(id).then((exercise) =>{
            exercise.username = req.body.username;
            exercise.description = req.body.description;
            exercise.duration = Number(req.body.duration);
            exercise.date = Date.parse(req.body.date)
            exercise.save().then(() => {res.status(200).json("updated")})
        })
        
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;