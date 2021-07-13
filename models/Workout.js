const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date(),
    },
    exercise_type: {
        type: String,
        enum: {
            values: [ 'Resistance', 'Cardio' ],
            // not necessary but playing around with {VALUE}
            message: '{VALUE} is not valid'
        },
        required: true,
    },
    exercise_name: {
        type: String,
        trim: true,
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
    },
},{ timestamp: true });

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;