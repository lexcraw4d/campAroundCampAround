const router = require('express').Router();
const  { apiController, createCampground } = require('../../controllers/apiController');

router
    .route('/campgrounds')
    .post(createCampground);

 module.exports = router;