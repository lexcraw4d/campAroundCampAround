const express = require('express');
const router = express.Router();
const { getCampgrounds, createCampground, editCampgroundById } = require('../../controllers/browserController');
router
.get('/', (req, res) => {
  res.render('home');
})
.get('/campgrounds', getCampgrounds)
.post('/createCampground', createCampground)
.get('/campgrounds/edit/:id', editCampgroundById)
module.exports = router;