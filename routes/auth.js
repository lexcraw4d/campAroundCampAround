const express = require('express');
const passport = require('passport');
const auth = require('../middleware/auth');
const router = express.Router();

//@desc Authinticate Google
//@route GET auth/google
router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}))
//@desc Google Callback
//@route GET auth/google/callback
router.get('/google/callback', passport.authenticate('google', {
    failureRedirect: '/',
    successRedirect: '/dashboard',
    successFlash: true
}))

router.post('/login', passport.authenticate( 'local', {
    failureRedirect: '/',
    failureFlash: true,
    successRedirect: '/dashboard',
    successFlash: true
    
})
)
//@desc logout user
//@route /auth/logout
router.get('/logout', (req,res) => {
    req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('/');
      });
})

module.exports = router;