const router = require('express').Router();
const  { deleteCampgroundById, createCampground, getCampgrounds, getCampgroundById, updateCampgroundById, updateCampground } = require('../../controllers/apiController');
//api routes
router
    .route('/campgrounds')
    .post(createCampground)
    .get(getCampgrounds)
    .put(updateCampground)
    
router
    .route('/campgrounds/:id')
    .get(getCampgroundById)
    .put(updateCampgroundById)
    .delete(deleteCampgroundById)

 module.exports = router;