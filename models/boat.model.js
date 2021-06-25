const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const waypointStyleSchema = new Schema({
    name: { type: String, default: "waymarker", required: true },
    icon: { type: String, default: "marker", require: true },
    data: { type: Object }
})

const waypointSchema = new Schema({
    title: { type: String, required: true },
    date: { type: Date, required: true },
    description: { type: String, required: true },
    style: { type: waypointStyleSchema, required: true },
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
    title: { type: String, required: true },
    description: { type: String },
    style: { type: String, default: 'dot' },
    x: { type: Number, required: true },
    y: { type: Number, required: true }
})

const logSchema = new Schema({
    title: { type: String, required: true },
    skippersBrief: { type: String, required: true },
    captainsLog: { type: String },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    flag: { type: String },
    rating: { type: String },
    waypoints: { type: [waypointSchema], required: true }
})

const ownerSchema = new Schema({
    date: {
        type: Date,
        required: true
    },
    company: {
        type: mongoose.Schema.Types.ObjectId,
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
    serial: {
        type: String
    },
    year: {
        type: Number, required: true
    },
    overhaulDates: { type: [Date] },
    owners: {
        type: [ownerSchema],
        "_id": false
    },
    logs: {
        type: [logSchema]
    }
})

const Boat = mongoose.model('Boat', boatSchema);
module.exports = Boat;