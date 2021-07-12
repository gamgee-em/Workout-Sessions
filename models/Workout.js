const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    exercise_type: {
        type: String,
        required: 'Exercise Type Required',
    },
    exercise_name: {
        type: String,
        required: true,
    },
    duration: {
        type: Number,
        required: true,
    },
    weight: {
        type: Number,
        required: true,
    },
    reps: {
        type: Number,
        required: true,
    },
    sets: {
        type: Number,
        required: true,
    }
});

const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;