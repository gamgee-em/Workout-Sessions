const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date(),
    },
exercises: [
    {
        type: {
            type: String,
            trim: true,
            required: true,
        },
        name: {
            type: String,
            trim: true,
            required: true,
        },
        duration: {
            type: Number,
            required: 'Enter minute interval',
        },
        weight: {
            type: Number,
            default: 0,
        },
        reps: {
            type: Number,
        },
        sets: {
            type: Number,
            default: 0,
        },
        distance: {
            type: Number,
            default: 0,
        },
    },
]
})

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;