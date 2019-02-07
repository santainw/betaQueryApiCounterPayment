var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  buildMsg = {
    resultCode: 200,
    resultData: {
      ref1: '0307030053000166    ',
      systemCode: '03',
      systemAmount: 53000
    }
  }

  res.send(buildMsg)
});

module.exports = router;
