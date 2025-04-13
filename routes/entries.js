// routes/items.js
const express = require('express');
const router = express.Router();
const Item = require('../models/Entry');

router.get('/', async (req, res) => {
  try {
    const entries = await Entry.find();
    res.json(entries);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err });
  }
});

module.exports = router;
