var express = require('express');
var router = express.Router();
function makeid() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 40; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}
var reqSingle = {
  systemId: 'WSS',
  userName: 'wss001',
  password: '123456',
  ipAddress: '10.11.1.10',
  requestData: {
    docNoList: [
      {
        docNo: '256100000060'
      }
    ]
  } 
}
var reqGroup = {
  systemId: 'WSS',
  userName: 'wss001',
  password: '123456',
  ipAddress: '10.11.1.10',
  requestData: {
    docNoList: [
      {
        docNo: '256100000205'
      },
      {
        docNo: '256100000060'
      },
      {
        docNo: '256100000510'
      }
    ]
  } 
}
var respSingle = {
  responseCode: "OK", responseMessage: "SUCCESS", responseData: {
  licenseList: [ {
  docNo: "256100000060", cusName: "นํางเง็กลั้ง แซ่เอี้ย", comName: "นํางเง็กลั้ง แซ่เอี้ย ", licNum: "2",
  licPrice: "530",
  offcode: "100300" } ]
  } }
var respGroup = {
  responseCode: "OK", responseMessage: "SUCCESS", responseData: {
  licenseList: [ {
  docNo: "256100000060", cusName: "นํางเง็กลั้ง แซ่เอี้ย", comName: "นํางเง็กลั้ง แซ่เอี้ย ", licNum: "2",
  licPrice: "530",
  offcode: "100300" },
  {
  DocNo: "256100000510", CusName: "นํายชลอ เทพํานิช", "ComName": "นํายชลอ เทพํานิช ", "LicNum": "2",
  "LicPrice": "430",
  "Offcode": "100300"
  }, {
  "DocNo": "256100000205",
  "CusName": "นํางกร ละครล่ํา", "ComName": "นํางกร ละครล่ํา ละครล่ํา", "LicNum": "2",
  "LicPrice": "430",
  "Offcode": "100300"
  } ]
  } }

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

router.post('/EDRestServicesUAT/lic/LicFri0130', (req, res, next)=> {
  console.log(req.body)
  console.log(req.body.requestData.docNoList)
  console.log(reqSingle)
  console.log(reqSingle.requestData.docNoList)
  if(JSON.stringify(req.body) == JSON.stringify(reqGroup))
  {
    console.log('GroupReconcile')
    res.json(respGroup)
  }

  if(JSON.stringify(req.body) == JSON.stringify(reqSingle))
  {
    console.log('SingleReconcile')
    res.json(respSingle)
  }
})




module.exports = router;
