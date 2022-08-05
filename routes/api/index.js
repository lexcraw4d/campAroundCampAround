const router = require('express').Router();
const  { deleteCampgroundById, createCampground, getCampgrounds, getCampgroundById, updateCampgroundById } = require('../../controllers/apiController');
//api routes
router
    .route('/campgrounds')
    .post(createCampground)
    .get(getCampgrounds)
    
router
    .route('/campgrounds/:id')
    .get(getCampgroundById)
    .put(updateCampgroundById)
    .delete(deleteCampgroundById)

 module.exports = router;