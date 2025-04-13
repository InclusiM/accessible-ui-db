const express = require('express');
const mongodb = require('mongodb');
require('dotenv').config();

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
        const url = `mongodb+srv://jnhugh23:${process.env.MONGO_DB_KEY}@cluster0.kdegi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
        // Remove the deprecated useNewUrlParser option
        client = await mongodb.MongoClient.connect(url);
        
        // Log database and collection names for debugging
        const dbName = process.env.MONGO_DB_NAME || 'InclusiM';
        const collectionName = process.env.MONGO_COLLECTION_NAME || 'cluster0';
        console.log(`Using database: ${dbName}, collection: ${collectionName}`);
        
        return client.db(dbName).collection(collectionName);
    } catch (error) {
        console.error('MongoDB connection error:', error);
        if (client) client.close();
        throw error;
    }
}

// Add a route to check connection and list collections
router.get('/check', async (req, res) => {
    let client;
    try {
        const url = `mongodb+srv://jnhugh23:${process.env.MONGO_DB_KEY}@cluster0.kdegi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
        client = await mongodb.MongoClient.connect(
            url, {useNewUrlParser: true}
        )
        
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
        if (client) client.close();
    }
});

module.exports = router;