const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const companySchema = new Schema({
    name: {type: String, required: true},
    photoLoc: String,
    street: {type: String, required: true},
    city: {type: String, required: true},
    country: {type: String, required: true},
    phone: {type: String, required: true},
    email: {type: String, required: true, unique: true, match: /.+\@.+\..+/,},
    users: {
        type:[mongoose.Schema.Types.ObjectId],
        ref: 'User',
        unique: true,
        "_id" : false
    }
})

const Company = mongoose.model('Company', companySchema);
module.exports = Company;