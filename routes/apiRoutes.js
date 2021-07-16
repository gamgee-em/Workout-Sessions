const router = require('express').Router();
const Workout = require('../models/Workout.js');

router.post('/', ({ body }, res) => {
    Workout.create( body )
        .then(workoutData => {
            res.status(200).json(workoutData);
        }).catch(err => {
            res.status(400).json(err);
        });
});

router.put('/:id', ({ body, params }, res) => {
    Workout.findByIdAndUpdate(params.id,
        { 
            $push: { exercises: body, }, 
        },
        { 
            new: true,
            runValidators: true, 
        },
    ).then(workoutData => res.status(200).json(workoutData))
        .catch(err => res.status(400).json(err));
});

router.get('/', (req, res) => {
    Workout.aggregate ([
        {
            $addFields: {
                totalDuration: { $sum: '$exercises.duration', },
            },
        },
    ])
    .then(workoutData => res.status(200).json(workoutData))
        .catch(err => res.status(400).json(err));
});

router.get('/range', (req, res) => {
    Workout.find({})
    .then(workoutData => res.status(200).json(workoutData))
        .catch(err => res.status(400).json(err));
});

module.exports = router;