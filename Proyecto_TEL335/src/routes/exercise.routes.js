const express = require('express');
const router = express.Router();

const Exercise = require('../models/exercise');
router.get('/', async (req, res) => {
    const exercises = await Exercise.find();
    console.log(exercises);
    res.json(exercises);
});

router.post('/', async (req, res) =>{
    const{user, type, total, date, description} = req.body;
    const newExcercise = new Exercise({user, type, total, date, description});
    await newExcercise.save();
    console.log(newExcercise);
    res.json({status: 'Excercise Saved'});
});

router.get('/:id', async (req, res) =>{
    const exercise = await Exercise.findById(req.params.id);
    res.json(exercise);
})

router.delete('/:id', async (req, res) => {
    await Exercise.findByIdAndDelete(req.params.id);
    res.json({status: 'Exercise Removed'});
}) 

router.put('/update/:id', async (req, res) => {
    const exercise = await Exercise.findById(req.params.id);
    exercise.user = req.body.user;
    exercise.type = req.body.type;
    exercise.total = Number(req.body.total);
    exercise.date = Date.parse(req.body.date);
    exercise.description = req.body.description;
    await exercise.save();
    res.json('Exercise updated')
}) 


module.exports = router;