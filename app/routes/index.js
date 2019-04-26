const router = require("express").Router();

const blogRoutes = require("./blog.routes");
const contactFormRoutes = require("./contactForm.routes");
const todoRoutes = require("./todo.routes");

module.exports = router;

router.use("/api/blog", blogRoutes);
router.use("/api/contactForm", contactFormRoutes);
router.use("/api/todo", todoRoutes);
