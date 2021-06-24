const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userName: {type: String, required: true},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true}, 
    email: {type: String, required: true, unique: true, match: /.+\@.+\..+/,},
    country: String,
    locale: {type: String, required: true},
    photoLoc: String
})

const User = mongoose.model('User', userSchema);
module.exports = User;