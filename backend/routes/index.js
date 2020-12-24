var express = require('express');
var router = express.Router();
const Campground = require('../models/campground');


/* GET home page. */
router.get('/', function(req, res, next) {
  
const allCamps = Campground.find();

  res.send("API is working properly");
  // res.send(allCamps);
});

module.exports = router;
