const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    isAdmin: {type: Boolean, default: false},
    fullname: {type: String, required: true},
    contact: {type: Number},
    picture: {type: String},
    cart: {type: Array, default: []},
    orders: {type: Array, default: []},

});

module.exports = mongoose.model('userModel', userSchema);
