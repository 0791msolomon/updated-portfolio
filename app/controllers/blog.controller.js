const { Blog } = require("../models/Blog");

const postBlog = (req, res) => {
  let blog = new Blog({
    title: req.body.title,
    body: req.body.body,
    time: Date.parse(new Date())
  });
  blog
    .save()
    .then(response => {
      res.status(201).send(response);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send(err);
    });
};

const getAll = (req, res) => {
  Blog.find()
    .then(response => {
      res.status(200).send(response);
    })
    .catch(err => {
      res.status(400).send(err);
    });
};
module.exports = { postBlog, getAll };
