const mongoose = require("mongoose");

const Blog = mongoose.model("blogs", {
  title: {
    type: String,
    required: true,
    trim: true,
    minLength: 2
  },
  body: {
    type: String,
    required: true,
    trime: true,
    minLength: 5
  }
});

module.exports = { Blog };
