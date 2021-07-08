const mongoose = require("mongoose");

//BlogPosts Schema

const BlogPost = mongoose.model("BlogPost", {
  author: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

module.exports = { BlogPost };
