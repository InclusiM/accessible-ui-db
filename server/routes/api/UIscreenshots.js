const express = require('express');
const mongodb = require('mongodb');
const path = require('path')
require('dotenv').config({path: path.resolve(__dirname, '../../.env')});
// console.log(path.resolve(__dirname, '../../.env'));
const MONGO_DB_KEY = process.env.MONGO_DB_KEY ;
const dbName = process.env.MONGO_DB_NAME ;
const collectionName = process.env.MONGO_COLLECTION_NAME ;
// console.log(MONGO_DB_KEY);
// console.log(dbName);
// console.log(collectionName);  


const router = express.Router();

// Get UIscreenshots
router.get('/', (req, res) => {
    loadUIscreenshots()
        .then((UIscreenshotsCollection) => {
            return UIscreenshotsCollection.find({}).toArray()
        })
        .then((results) => {
            res.status(200).json(results)
        })
        .catch((error) => {
            console.log(error)
            res.status(500).json({ error: 'Database error', message: error.message })
        })
});

async function loadUIscreenshots() {
    let client;
    try {
        const url = `mongodb+srv://jnhugh23:${MONGO_DB_KEY}@cluster0.kdegi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
        
        const options = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            ssl: true,
            tls: true,
            serverSelectionTimeoutMS: 5000,
            maxPoolSize: 10
        };
        
        client = await mongodb.MongoClient.connect(url, options);
        console.log(`Using database: ${dbName}, collection: ${collectionName}`);
        
        return client.db(dbName).collection(collectionName);
    } catch (error) {
        console.error('MongoDB connection error:', error);
        if (client) client.close();
        throw error;
    }
}

router.get('/check', async (req, res) => {
    let client;
    try {
        const url = `mongodb+srv://jnhugh23:${MONGO_DB_KEY}@cluster0.kdegi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
        
        const options = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            ssl: true,
            tls: true,
            serverSelectionTimeoutMS: 5000,
            maxPoolSize: 10
        };
        
        client = await mongodb.MongoClient.connect(url, options);
        
        // Ping the database to check connection
        await client.db("admin").command({ ping: 1 });
        
        // Get list of databases
        const dbInfo = await client.db().admin().listDatabases();
        
        res.json({
            connection: 'successful',
            databases: dbInfo.databases.map(db => db.name)
        });
    } catch (error) {
        console.error('MongoDB connection check error:', error);
        res.status(500).json({ error: 'Connection error', message: error.message });
    } finally {
        if (client) await client.close();
    }
});

module.exports = router;