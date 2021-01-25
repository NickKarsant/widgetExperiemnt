var express = require('express');
var router = express.Router();
const Campground = require('../../models/campground');


/* GET home page. */
router.get('/yelpcamp/campgrounds', async (req, res) => {
  
  const campgrounds = await Campground.find({});
  console.log(campgrounds)
  res.send(campgrounds);

});

module.exports = router;
