var express = require("express");
var router = express.Router();

// define the home page route
router.get("/", function (req, res) {
  res.render(__dirname + "index");
  console.log("Backend Server is running on port 3500");
});

router.get("/play", function (req, res) {
  res.send("<h1>let's play a game</h1>");
});

module.exports = router;
