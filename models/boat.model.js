const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const travelPointSchema = new Schema({
    title: {type: String, required: true},
    date: {type: Date, required: true},
    description: {type: String, required: true},
    location: {
        type: {
            type: String,
            default: 'Point,'
        },
        coordinates: {
            type: [Number],
            default: undefined,
            required: true
          },
    }
})

const xyCaptionSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String},
    style: {type: String, default : 'dot'},
    x: {type:Number, required: true},
    y: {type:Number, required: true}
})

const photoSchema = new Schema({
    title: {type: String, required: true},
    date: {type: Date},
    description: {type: String, required: true},
    photoLoc: {type: String, required: true},
    location: {
        type: {
            type: String,
            default: 'Point,'
        },
        coordinates: {
            type: [Number],
            required: true
          },
    },
    xyCaptions: {
        type: [xyCaptionSchema]
    }
})

const logSchema = new Schema({
    title: {type: String, required: true},
    captainsLog: {type: String, required: true},
    flag: {type: String, required: true},
    rating:{type: String},
    photos: {type: [photoSchema]},
    travelPoints: {type: [travelPointSchema], required: true} 
})

const ownerSchema = new Schema({
    date: {
        type: Date, 
        required: true
    },
    company : {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Company',
        required: true,
        unique: true
    }
})

const boatSchema = new Schema({
    name: {
        type: String, 
        required: true
    },
    photoLoc: String,
    make: {
        type: String, required: true
    },
    model: {
        type: String, required: true
    },
    length: {
        type: String, required: true
    },
    overhaulDates: {type: [Date]},
    owners: {
        type:[ownerSchema],
        "_id" : false
    },
    logs: {
        type: [logSchema]
    }
})

const Boat = mongoose.model('Boat', boatSchema);
module.exports = Boat;