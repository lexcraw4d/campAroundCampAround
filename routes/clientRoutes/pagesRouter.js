const express = require('express');
const router = express.Router();
const { ensureAuth, ensureGuest} = require('../../middleware/auth');
const { getCampgrounds, createCampground, editCampground, updateCampgroundById, deleteCampgroundById} = require('../../controllers/browserController');
router

.get('/', ensureGuest, (req, res) => {
  res.render('home',  {isAuthenticated: req.isAuthenticated()})
})
.get('/dashboard', ensureAuth, (req, res) => {
  res.render('dashboard', {isAuthenticated: req.isAuthenticated()}) 
})
.get('/addCampground', ensureAuth, (req, res) => {
  res.render('add');
})
.get('/campgrounds', ensureAuth, getCampgrounds)
.get('/campgrounds/edit/:id', ensureAuth, editCampground)
.post('/createCampground', ensureAuth, createCampground)
.put('/campgrounds/:id', ensureAuth, updateCampgroundById)
.delete('/campgrounds/:id', ensureAuth, deleteCampgroundById)

module.exports = router;