const router = require("express").Router();

const blogController = require("../controllers/blog.controller");

module.exports = router;

router.post("/", blogController.postBlog);
