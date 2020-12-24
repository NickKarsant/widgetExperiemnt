var express = require('express');
var router = express.Router();

router.get('/yelpcamp/campgrounds/new', function(req, res, next) {
    res.show('API is working properly');
    console.log("hitting");
});

module.exports = router;