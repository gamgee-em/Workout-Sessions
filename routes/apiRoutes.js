const router = require('express').Router();
const Workout = require('../models/Workout.js');

router.post('/api/workouts', (req, res) => {
    Workout.create({})
        .then(workoutData => {
            console.log('Req Body:', bod);

            res.status(200).json(workoutData);
        }).catch(err => {
            res.status(400).json(err);
        });
});

/* router.get('api/workouts/', (req, res) => {
    Workout.aggregate ([
        {

        }
    ])
}) */

/* router.put('/api/workouts/:id', ({ body, params }, res) => {
    Workout.findByIdAndUpdate( params.id,
        {
            $push: { exercies: body },
        },
        {
            new: true,
        },    
    ).then(workoutData => res.status(200).json(workoutData))
        .catch(err => res.status(400).json(err));
}); */

module.exports = router;