const router = require('express').Router();
const Workout = require('../models/Workout.js');

//! try using destructuring syntax on req parameter
router.post('/api/workouts', (req, res) => {
    Workout.create( req.body )
        .then(workoutData => {
            res.status(200).json(workoutData);
        }).catch(err => {
            res.status(400).json(err);
        });
});

//! try using destructuring syntax on req parameter
router.put('/api/workouts/:id', ({ body, params }, res) => {
    Workout.findByIdAndUpdate(params.id,
        { $push: { exercises: body } },
        { 
            new: true,
            runValidators: true,
         },
    ).then(workoutData => res.status(200).json(workoutData))
        .catch(err => res.status(400).json(err));
});

router.get('/api/workouts', (req, res) => {
    Workout.aggregate ([
        {
            $addFields: {
                totalDuration: {
                    $sum: '$exercies.duration',
                },
            },
        },
    ]).then(workoutData => res.status(200).json(workoutData))
        .catch(err => res.status(400).json(err))
});

router.get('/api/workouts/range', (req, res) => {
    Workout.find({})
    .then(workoutData => res.status(200).json(workoutData))
        .catch(err => res.status(400).json(err));
});

module.exports = router;