const { model, Schema } = require("mongoose");
const User = require("../models/User");
const mongoose = require("mongoose");
const campgroundSchema = new Schema({
  // _id: Schema.Types.ObjectId,
  name: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
},
createdAt: {
    type: Date,
    default: Date.now
}
});

const Campground = model("Campground", campgroundSchema);

module.exports = Campground;
