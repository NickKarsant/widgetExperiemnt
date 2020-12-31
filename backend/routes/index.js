var express = require('express');
var router = express.Router();
const Campground = require('../models/campground');


/* GET home page. */
router.get('/', function(req, res, next) {
  
  const allCamps = async () => { 
    const data = await Campground.find()

    console.log(typeof(data));
    console.log(data);
  }
  const something = allCamps();
  // console.log(`allCamps is:  ${allCamps}`);
  res.send("API is working properly but database query isnt");
  // res.send(allCamps);
});

module.exports = router;
