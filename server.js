const express = require("express");
const bodyParser = require("body-parser");
const router = require("./app/routes");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT || 5000;
const weatherApi = process.env.REACT_APP_WEATHER_API_KEY;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(function(req, res, next) {
//   console.log(req);
//   next();
// });
app.use(router);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
