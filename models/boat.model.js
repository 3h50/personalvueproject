const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const companySchema = new Schema({
    date: {
        type: Date,
        required: true
    },
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company',
        required: true,
    }
})

// matt what the fuck why if required is here but parent isnt does it fuck up
const ownerSchema = new Schema({
    date: {
        type: Date,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
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
    loa: {
        type: String, required: true
    },
    loaUnits: {
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
        required: false
    },
    companies: {
        type: [companySchema],
        required: false
    }
})

const Boat = mongoose.model('Boat', boatSchema);
module.exports = Boat;