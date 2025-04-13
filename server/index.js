const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
// Configure CORS with specific options
app.use(cors({
  origin: ['http://localhost:8080'], 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true 
}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json({
    appName: 'InclusiM API',
    version: '1.0.0',
    endpoints: [
      { path: '/api/UIscreenshots', methods: ['GET', 'POST', 'PUT', 'DELETE'], description: 'UI screenshots management' }
    ],
    status: 'online',
    timestamp: new Date()
  });
});

const UIscreenshots = require('./routes/api/UIscreenshots');

app.use('/api/UIscreenshots', UIscreenshots);


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});