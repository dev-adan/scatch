const {MongoClient} = require('mongodb');
const url = process.env.mongodb;
const dbName = 'scatch';

const client = new MongoClient(url);

async function connectDB(){
    if(!client.isConnected()){
        await client.connect();
        console.log('Connected to MongoDB');
    }
    return client.db(dbName);
};

module.exports = connectDB;