const express = require('express');
const router = express.Router();
const campRoutes = require('./camp')


// api/camp
router.use('/camp', campRoutes);

module.exports = router