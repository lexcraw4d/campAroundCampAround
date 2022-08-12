const { model, Schema } = require("mongoose");

const campgroundSchema = new Schema({
  _id: Schema.Types.ObjectId,
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
});

const Campground = model("Campground", campgroundSchema);

module.exports = Campground;
