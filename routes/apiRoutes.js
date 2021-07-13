const router = require('express').Router();
const Workout = require('../models/Workout');

router.post('/api/workouts', (req, res) => {
    Workout.create({})
        .then(workoutData => {
            res.status(200).json(workoutData);
        }).catch((err) => {
            res.status(400).json(err);
        });
    console.log('Req Body:', req.body);
});

module.exports = router;