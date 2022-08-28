const Campground = require("../models/Campgrounds");
// const ObjectId = require("mongodb").ObjectID;

const browserController = {
  getCampgrounds: async (req, res) => {
    console.log(req.user)
    let campgrounds;
    try {
      campgrounds = await Campground.find({user: req.user.id}).lean();
      // console.log('nammme' ,req.user.displayName)
    } catch (err) {
      console.log(err);
    }
    res.render("campgrounds", { 
      name: req.user.displayName,
      campgrounds });
  },

  createCampground: async (req, res) => {
    try {
      await Campground.create({
        user: req.user.id,
        name: req.body.name,
        image: req.body.image,
        description: req.body.description,
      });
      res.status(200).redirect("/campgrounds");
    } catch (err) {
      console.log(err);
    }
  },
  editCampground: async (req, res) => {
    try {
      let campground = await Campground.findById(req.params.id).lean();
      if (!campground) {
        res.status(404).send("Campground not found");
      }
      res.render("editCampground", { campground });
    } catch (err) {
      console.log(err);
    }
  },
  updateCampgroundById: async (req, res) => {
    //   ytfdc <---Acorn typed
    try {
      let campground = await Campground.findById(req.params.id).lean();
      if (!campground) {
        res.status(404).send("Campground not found");
      }
      campground = await Campground.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        {
          new: true,
          runValidators: true,
        }
      );

      res.redirect("/campgrounds");
    } catch (err) {
      // }
      console.error(err);
    }
    },
    deleteCampgroundById: async (req, res) => {
        try {
            let campground = await Campground.findById(req.params.id).lean();
            if (!campground) {
                res.status(404).send("Campground not found");
            }
            campground = await Campground.findByIdAndDelete(req.params.id);    
            res.redirect("/campgrounds");   
    }
    catch (err) {
        console.log(err);
    }
}}
module.exports = browserController;
