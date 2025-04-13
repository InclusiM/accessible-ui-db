const express = require('express');
const mongodb = require('mongodb');
require('dotenv').config();

const router = express.Router();

// Get UIscreenshots
router.get('/', (req, res) => {
    res.send('UIscreenshots test');
});

async function loadUIscreenshots() {
    const url = `mongodb+srv://jnhugh23:${process.env.MONGO_DB_KEY}@cluster0.kdegi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
    const client = await mongodb.MongoClient.connect(
        url, {useNewUrlParser: true}
    )
    
    return client.db(process.env.MONGO_DB_NAME).collection(process.env.MONGO_COLLECTION_NAME)
}

module.exports = router;