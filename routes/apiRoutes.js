const router = require('express').Router();
const Workout = require('../models/Workout.js');

router.get('/', (req, res) => {
    Workout.aggregate ([
        {
            $addFields: {
                totalDuration: {
                    $sum: '$exercies.duration',
                }
            }
        }
    ]).then(workoutData => res.json(workoutData))
        .catch(err => res.json(err))
});

router.post('/', ({ body }, res) => {
    Workout.create({ body })
        .then(workoutData => {
            console.log('Req Body:', bod);

            res.status(200).json(workoutData);
        }).catch(err => {
            res.status(400).json(err);
        });
});

router.put('/:id', ({ body, params }, res) => {
    Workout.findByIdAndUpdate( params.id,
        {
            $push: { exercies: body },
        },
        {
            new: true,
        },    
    ).then(workoutData => res.status(200).json(workoutData))
        .catch(err => res.status(400).json(err));
});

router.get('/range', (req, res) => {
    Workout.find({})
    .then(workoutData => res.status(200).json(workoutData))
        .catch(err => res.status(400).json(err));
});

module.exports = router;