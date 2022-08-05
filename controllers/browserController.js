const Campground = require("../models/Campgrounds");
const { createCampground } = require("./apiController");

const browserController = {
getCampgrounds: async (req, res) => {
    let campgrounds;
    try{
        campgrounds = await Campground.find({});
    }
    catch(err){
        console.log(err);
    }
    res.render("campgrounds", {campgrounds});
},
createCampground: async (req, res) => {
    try{ await Campground.create({
            name: req.body.name,
            image: req.body.image,
            description: req.body.description
        })
        res.status(200).redirect('/campgrounds');
    }
    catch(err){
        console.log(err);
    }}
}
module.exports = browserController;