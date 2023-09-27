var express = require("express");
// var route = express();
var router = express.Router();

// route.use()

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("localhost working");
});

module.exports = router;
