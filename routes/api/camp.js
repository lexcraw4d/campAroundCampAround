const express = require('express');
const router = express.Router();
// const Campground = require('../models/Campground');
router
    .route('/')
    .post((req, res) => {
        console.log(req.body);
        res.send('POST request to the received!');
    });
module.exports = router;