const express = require('express');
const router = express.Router();
const { getCampgrounds, createCampground, editCampground, updateCampgroundById, deleteCampgroundById} = require('../../controllers/browserController');
router
.get('/', (req, res) => {
  res.render('home')
})
.get('/addCampground', (req, res) => {
  res.render('add');
})
.get('/campgrounds', getCampgrounds)
.get('/campgrounds/edit/:id', editCampground)
.post('/createCampground', createCampground)
.put('/campgrounds/:id', updateCampgroundById)
.delete('/campgrounds/:id', deleteCampgroundById)

module.exports = router;