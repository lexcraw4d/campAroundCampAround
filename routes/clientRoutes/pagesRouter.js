const express = require('express');
const router = express.Router();
const { ensureAuth, ensureGuest} = require('../../middleware/auth');
const { getCampgrounds, getUserCampgroundById, createCampground, editCampground, updateCampgroundById, deleteCampgroundById, createUser} = require('../../controllers/browserController');
// const { getCampgroundById } = require('../../controllers/apiController');
router
.get('/', ensureGuest, (req, res) => {
  // req.flash('success_msg', 'Sucessfully registered! Please log in.')
  // then

  res.render('home', {
    isAuthenticated: req.isAuthenticated(),
    messages: req.flash('error'),
    success_msg: req.flash('success_msg')
  })
})
.get('/dashboard', ensureAuth, getUserCampgroundById)
.get('/addCampground', ensureAuth, (req, res) => {
  res.render('add', {isAuthenticated: req.isAuthenticated()})
})
.get('/register', ensureGuest, (req, res) => {
  // console.log(req.isAuthenticated())
  console.log('req.body', req.body.firstName)
  // if (req.body.firstName.length < 1) {
  //   req.flash('error', 'Please enter a valid name')
  //   return res.render('register', { messages: req.flash('error'),
  //   success_msg: req.flash('success_msg')})
  // }
  res.render('register', {
    isAuthenticated: req.isAuthenticated(),
    messages: req.flash('error'),
    success_msg: req.flash('success_msg')
  }
  )
})
.get('/campgrounds', ensureAuth, getCampgrounds)
.get('/campgrounds/edit/:id', ensureAuth, editCampground)
.post('/register', ensureGuest, createUser)
.post('/createCampground', ensureAuth, createCampground)
.put('/campgrounds/:id', ensureAuth, updateCampgroundById)
.delete('/campgrounds/:id', ensureAuth, deleteCampgroundById)

module.exports = router;