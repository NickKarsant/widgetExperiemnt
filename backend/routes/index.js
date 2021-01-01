var express = require('express');
var router = express.Router();
const Campground = require('../models/campground');


/* GET home page. */
router.get('/', function(req, res, next) {
  
  // const getCamps = async () => { 
    // const data = await Campground.find()
    // console.log(data);
    // res.send(data);
  // }

});

module.exports = router;
