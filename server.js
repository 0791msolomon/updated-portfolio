const express = require("express");
const bodyParser = require("body-parser");
const router = require("./app/routes");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT || 5000;
const weatherApi = process.env.REACT_APP_WEATHER_API_KEY;
app.use(cors);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(function(req, res, next) {
//   console.log(req);
//   next();
// });
app.use(router);
mongoose.connect("mongodb://127.0.0.1:27017/todos", { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once("open", function() {
  console.log("MongoDB database connection established successfully");
});
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
