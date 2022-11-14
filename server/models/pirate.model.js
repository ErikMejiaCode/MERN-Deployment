const mongoose = require('mongoose')

const PirateSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, '{PATH} is required.'],
            minlength: [2, '{PATH} must be at least {MINLENGTH} characters long.']
        }, 
        imageUrl: {
            type: String,
            required: [true, '{PATH} is required.'],
            minlength: [2, '{PATH} must be at least {MINLENGTH} characters long.']
        },
        treasureChests: {
            type: Number,
            required: [true, '{PATH} is required.'],
            min: [1, '{PATH} must be at least {MIN} characters long.']
        },
        catchPhrase: {
            type: String,
            required: [true, '{PATH} is required.'],
            minlength: [2, '{PATH} must be at least {MINLENGTH} characters long.']
        },
        crewPosition: {
            type: String,
            required: [true, '{PATH} is required.'],
            minlength: [2, '{PATH} must be at least {MINLENGTH} characters long.']
        },
        pegLeg : {
            type: Boolean,
            default: true
        },
        eyePatch : {
            type: Boolean,
            default: true
        },
        hookHand : {
            type: Boolean,
            default: true
        }
    },
    {timestamps: true}
);


/*
Register schema with mongoose and provide a string to name the collection. 
This also returns a reference to our model that we can use for DB operations.
*/
const Pirate = mongoose.model("Pirate", PirateSchema);

module.exports = {Pirate : Pirate};