const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new Schema(
    {
        day: {
            type: Date,
            default: () => new Date(),
        },
        exercises: [
            {
                type: {
                    type: String,
                    required: true,
                },
                name: {
                    type: String,
                    trim: true,
                },
                duration: {
                    type: Number,
                    default: 0,
                },
                weight: {
                    type: Number,
                    required: true,
                    default: 0,
                },
                reps: {
                    type: Number,
                    default: 0,
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
        ],
    },
    {
        toObject: { virtuals: true, },
        toJSON: { virtuals: true, },
    },
);

workoutSchema.virtual('totalDuration').get(function() {
    return this.exercises.reduce((sum, workouts) => {
        return sum += workouts.duration;
    }, 0);
});
    
const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;