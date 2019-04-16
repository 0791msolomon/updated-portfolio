const router = require("express").Router();

const contactFormRoutes = require("./contactForm.routes");
const todoRoutes = require("./todo.routes");

module.exports = router;

router.use("/api/contactForm", contactFormRoutes);
router.use("/api/todo", todoRoutes);
