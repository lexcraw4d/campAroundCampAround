const express = require('express');
const router = express.Router();
const { ensureAuth, ensureGuest} = require('../../middleware/auth');
const { getCampgrounds, getUserCampgroundById, createCampground, editCampground, updateCampgroundById, deleteCampgroundById, createUser} = require('../../controllers/browserController');
// const { getCampgroundById } = require('../../controllers/apiController');
router
.get('/', ensureGuest, (req, res) => {
  res.render('home',{isAuthenticated: req.isAuthenticated()});
})
.get('/dashboard', ensureAuth, getUserCampgroundById)
// .post('/dashboard', )
.get('/addCampground', ensureAuth, (req, res) => {
  res.render('add', {isAuthenticated: req.isAuthenticated()})
})
.get('/signup', ensureGuest, (req, res) => {
  // console.log(req.isAuthenticated())
  res.render('signup', {isAuthenticated: req.isAuthenticated()})
})
.get('/campgrounds', ensureAuth, getCampgrounds)
.get('/campgrounds/edit/:id', ensureAuth, editCampground)
.post('/register', ensureGuest, createUser )
.post('/createCampground', ensureAuth, createCampground)
.put('/campgrounds/:id', ensureAuth, updateCampgroundById)
.delete('/campgrounds/:id', ensureAuth, deleteCampgroundById)

module.exports = router;