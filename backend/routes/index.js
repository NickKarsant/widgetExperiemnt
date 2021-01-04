var express = require('express');
var router = express.Router();
const Campground = require('../models/campground');


/* GET home page. */
router.get('/', async (req, res) => {
  
  const campgrounds = await Campground.find({});
  res.send(campgrounds);

});

module.exports = router;
