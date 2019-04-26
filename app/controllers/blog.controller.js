const { Blog } = require("../models/Blog");

const postBlog = (req, res) => {
  let blog = new Blog({
    title: req.body.title,
    body: req.body.body
  });
  blog
    .save()
    .then(response => {
      res.send(response);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send(err);
    });
};
module.exports = { postBlog };
