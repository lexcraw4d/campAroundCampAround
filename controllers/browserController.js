const Campground = require("../models/Campgrounds");

const browserController = {
getCampgrounds: async (req, res) => {
    let campgrounds;;
    try{
        campgrounds = await Campground.find({});
    }
    catch(err){
        console.log(err);
    }
    res.render("campgrounds", {campgrounds});
}

}
module.exports = browserController;