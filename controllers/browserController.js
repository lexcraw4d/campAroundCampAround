const Campground = require("../models/Campgrounds");
// const ObjectId = require("mongodb").ObjectID;
const User = require("../models/User");
const bcrypt = require("bcrypt");
const LocalUser = require("../models/LocalUser");

const browserController = {
  getCampgrounds: async (req, res) => {
    // console.log(req.isAuthenticated());
    let campgrounds;

    try {
      campgrounds = await Campground.find({}).lean();
      // console.log('nammme' ,req.user.displayName)
    } catch (err) {
      console.log(err);
    }
    res.render("campgrounds", {
      isAuthenticated: req.isAuthenticated(),
      name: req.user.displayName,
      campgrounds,
    });
  },
  getUserCampgroundById: async (req, res) => {
    let campgrounds;
    
    try {
      campgrounds = await Campground.find({ user: req.user.id }).lean();
      console.log(campgrounds);
    } catch (err) {
      console.log(err);
      
    }
    res.render("dashboard", {
      isAuthenticated: req.isAuthenticated(),
      name: req.user.displayName,
      localUser: req.user.email,
      campgrounds,
    });
  },
  createCampground: async (req, res) => {
    try {
      await Campground.create({
        user: req.user.id,
        name: req.body.name,
        image: req.body.image,
        description: req.body.description,
        isAuthenticated: req.isAuthenticated(),
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
      res.render("editCampground", {
        isAuthenticated: req.isAuthenticated(),
        campground,
      });
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
    } catch (err) {
      console.log(err);
    }
  },
  createUser: async (req, res) => {
    // console.log('user', req.body)
    const saltRounds = 10;
    const hashPassword = await bcrypt.hash(req.body.password, saltRounds);
    try {
      await LocalUser.create({
        // user: req.user.id,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: hashPassword,
        isAuthenticated: req.isAuthenticated(),
      });
      res.status(200).redirect("/campgrounds");
    } catch (err) {
      console.log(err);
    }
  },
};
module.exports = browserController;
