// server.js
const express = require('express');
const app = express();
const itemsRoute = require('./routes/items');

app.use(express.json());
app.use('/api/items', itemsRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
