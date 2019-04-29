const router = require("express").Router();

const weatherController = require("../controllers/weatherController.js");

router.get("/:id", weatherController.getForecast);

module.exports = router;
