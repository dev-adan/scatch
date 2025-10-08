const mongoose = require('mongoose');
const config = require('config');
const dbgr = require("debug")("development:mongoose")
const dotenv = require('dotenv');
dotenv.config();
mongoose.connect((`${config.get("MONGODB_URI")}/scatch`)).then(() => {
    dbgr('Connected to MongoDB');
}).catch((err) => {
    dbgr('Error connecting to MongoDB', err);
});

module.exports = mongoose.connection;