const  Campground  = require("../models/Campgrounds");

//future additions to include:
// const Comment = require('../models/Comments');
// const User = require('../models/User');
const apiController = {
createCampground: async (req, res) => {
   await Campground.create({
        name: req.body.name,
        image: req.body.image,
        description: req.body.description
    })
    .then(campData => res.json(campData))
    .catch(err => res.json(err))
}}


module.exports =  apiController 
