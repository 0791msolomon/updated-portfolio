const router = require("express").Router();

const blogRoutes = require("./blog.routes");
const contactFormRoutes = require("./contactForm.routes");
const todoRoutes = require("./todo.routes");
const weatherRoutes = require("./weather.routes");
module.exports = router;

router.use("/api/blog", blogRoutes);
router.use("/api/contactForm", contactFormRoutes);
router.use("/api/todo", todoRoutes);
router.use("/api/weather", weatherRoutes);
