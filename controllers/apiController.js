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
},
// get all campgrounds from db
getCampgrounds: async (req, res) => {
    await Campground.find({})
    .then(campData => res.json(campData))
    .catch(err => res.json(err))
},
// get campground by id
getCampgroundById: async (req, res) => {
    await Campground.findById(req.params.id)
    .then(campData => res.json(campData))
    .catch(err => res.json(err))
}
}



module.exports =  apiController 
