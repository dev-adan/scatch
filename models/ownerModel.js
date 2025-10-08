const mongoose = require('mongoose');

const ownerSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    fullname: {type: String, required: true},
    picture: {type: String},
    products: {type: Array, default: []},
    gstin : String

});

module.exports = mongoose.model('ownerModel', ownerSchema);

