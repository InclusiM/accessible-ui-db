// test
console.log("Hello world");

// load the env variables
require('dotenv').config()

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// MongoDB connection
const MONGO_DB_KEY = process.env.MONGO_DB_KEY
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://jnhugh23:${MONGO_DB_KEY}@cluster0.kdegi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient 
const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

// MongoDB connection function
async function connectToMongo() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
}

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB before starting the server
connectToMongo().then(() => {
    app.listen(process.env.PORT || 5000, () => {
        console.log(`Server is running on port ${process.env.PORT || 5000}`);
    });
}).catch(console.dir);

app.get('/status', (req, res) => {
    res.send('Server is running');
});