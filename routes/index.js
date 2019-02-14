var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  buildMsg = {
    resultCode: 200,
    resultData: {
      ref1: '0307030053000166    ',
      ref2: '0307030053000166    ',
      systemCode: '03',
      systemAmount: 53000,
      systemTransactionCode: 'fv3^dfv*()4#$@FSA524BD'
    }
  }

  res.send(buildMsg)
});

module.exports = router;
