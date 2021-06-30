const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const waypointStyleSchema = new Schema({
    name: {
        type: String,
        default: "waymarker",
        required: "true"
    },
    icon: {
        type: String,
        default: "marker",
        required: "true"
    },
    data: {
        type: Object
    }
})

const waypointSchema = new Schema({
    title: { type: String, required: true },
    date: { type: Date, required: true },
    description: { type: String, required: true },
    status: {
        type: String,
        default: "draft"
    },
    style: {
        type: waypointStyleSchema,
        required: true,
        _id: false
    },
    location: {
        type: {
            type: String,
            default: 'Point,'
        },
        coordinates: {
            type: [Number],
            default: undefined,
        },
    }
})

// const xyCaptionSchema = new Schema({
//     title: { type: String, required: true },
//     description: { type: String },
//     style: { type: String, default: 'dot' },
//     x: { type: Number, required: true },
//     y: { type: Number, required: true }
// })

const logSchema = new Schema({
    title: { type: String, required: true },
    boat: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Boat',
        required: true
    },
    skippersBrief: { type: String, required: true },
    captainsLog: { type: String },
    tripType: { type: String },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company',
    },
    flag: { type: String },
    rating: { type: String },
    waypoints: { type: [waypointSchema], required: true }
})

const Log = mongoose.model('Log', logSchema);
module.exports = Log;