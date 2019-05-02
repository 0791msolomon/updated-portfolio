const router = require("express").Router();
const triviaController = require("../controllers/trivia.controller.js");

router.get("/", triviaController.findWord);
router.get("/number", triviaController.getNumber);

module.exports = router;
