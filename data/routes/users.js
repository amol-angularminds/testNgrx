var express = require("express");
var router = express.Router();
const userSchema = require("../public/models/userModel");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/reg", function (req, res, next) {
  console.log(req.body);
  res.send("respond with a resource");
});

module.exports = router;
