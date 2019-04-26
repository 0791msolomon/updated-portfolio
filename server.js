const express = require("express");
const bodyParser = require("body-parser");
const router = require("./app/routes");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const mongo = require("mongodb").MongoClient;
const url =
  process.env.MONGODB_URI ||
  process.env.REACT_APP_MONGOURL ||
  "mongodb://localhost:27017";
const port = process.env.PORT || 5000;
const weatherApi = process.env.REACT_APP_WEATHER_API_KEY;
// app.use(cors);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(router);

// mongo.connect(url, { useNewUrlParser: true }, (err, client) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   app.listen(port, () => {
//     console.log(`Listening on port ${port}, database successfully connected  `);
//   });
// });
// mongoose.connect(url, { useNewUrlParser: true });
mongoose.connect(url, { useNewUrlParser: true }, function(err) {
  if (err) {
    console.log(err);
    return;
  } else {
    console.log("Connected to the database");
  }
});
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});
app.listen(port, () => {
  console.log(`Listening on port ${port} `);
});
