var express = require('express');
var router = express.Router();
const Campground = require('../../models/campground');


/* GET camp details. */
router.get('/', async (req, res) => {
  
  const campgrounds = await Campground.find({});
  console.log(campgrounds)
  res.send(campgrounds);

});

module.exports = router;
