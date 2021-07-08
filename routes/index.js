const express = require("express");
const router = express.Router();

const { BlogPost } = require("../models/BlogPost");

// get all BlogPosts
router.get("/api/blogPosts", (req, res) => {
  BlogPost.find({}, (err, data) => {
    if (!err) {
      res.send(data);
    } else {
      console.log(err);
    }
  });
});

// Save BlogPosts
router.post("/api/blogPosts/add", (req, res) => {
  const emp = new BlogPost({
    author: req.body.author,
    title: req.body.title,
    content: req.body.content,
  });
  emp.save((err, data) => {
    res.status(200).json({
      code: 200,
      message: "BlogPosts Added Successfully",
      addBlogPosts: data,
    });
  });
});

// Get single blogPost
router.get("/api/blogPost/:id", (req, res) => {
  BlogPost.findById(req.params.id, (err, data) => {
    if (!err) {
      res.send(data);
    } else {
      console.log(err);
    }
  });
});

//udate blogPost
router.put("/api/blogPost/edit/:id", (req, res) => {
  const emp = {
    author: req.body.author,
    title: req.body.title,
    content: req.body.content,
  };
  BlogPost.findByIdAndUpdate(
    req.params.id,
    { $set: emp },
    { new: true },
    (err, data) => {
      if (!err) {
        res.status(200).json({
          code: 200,
          message: "blogPost updated successfully",
          updateBlogPost: data,
        });
      } else {
        console.log(err);
      }
    }
  );
});

// delete blogPost
router.delete("/api/blogPost/:id", (req, res) => {
  BlogPost.findByIdAndRemove(req.params.id, (err, data) => {
    if (!err) {
      res.status(200).json({
        code: 200,
        message: "BlogPost Deleted Successfully",
        deleteBlogPost: data,
      });
    }
  });
});

module.exports = router;
