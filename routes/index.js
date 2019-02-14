var express = require('express');
var router = express.Router();
function makeid() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 40; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}
/* GET home page. */
router.get('/', function(req, res, next) {
  buildMsg = {
    resultCode: 200,
    resultData: {
      ref1: '0307030053000166         ',
      ref2: '0307030053000166         ',
      systemCode: '03',
      systemAmount: 5300000,
      systemTransactionCode: makeid()
    }
  }

  res.send(buildMsg)
});




module.exports = router;
