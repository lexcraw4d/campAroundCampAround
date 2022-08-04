const router = require('express').Router();
const  { apiController, createCampground, getCampgrounds, getCampgroundById, updateCampgroundById } = require('../../controllers/apiController');
//api routes
router
    .route('/campgrounds')
    .post(createCampground)
    .get(getCampgrounds)
    
router
    .route('/campgrounds/:id')
    .get(getCampgroundById)
    .put(updateCampgroundById)

 module.exports = router;