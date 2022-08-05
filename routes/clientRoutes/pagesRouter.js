const express = require('express');
const router = express.Router();
const { getCampgrounds, createCampground } = require('../../controllers/browserController');
router
.get('/', (req, res) => {
  res.render('index');
})
.get('/campgrounds', getCampgrounds)
.post('/createCampground', createCampground)

module.exports = router;