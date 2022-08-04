const router = require('express').Router();
const  { apiController, createCampground, getCampgrounds, getCampgroundById } = require('../../controllers/apiController');
//api routes
router
    .route('/campgrounds')
    .post(createCampground)
    .get(getCampgrounds)
    
router
    .route('/campgrounds/:id')
    .get(getCampgroundById)

 module.exports = router;