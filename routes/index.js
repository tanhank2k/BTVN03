var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {


  res.render('index', { title: 'Bé Tập Tính'});

});

router.post('/',function(req,res) {
  const num1= req.body.fnum;
  const num2= req.body.snum;
  var result = 0;

  var multiNode = req.body.calc;
  if(req.body.calc=='1') {
    multiNode = 'checked';
    result = Number(num1) * Number(num2);
  };

  var divideNode = req.body.calc;
  if(req.body.calc=='2') {
    divideNode = 'checked';
    result = Number(num1) / Number(num2);};

  var plusNode = req.body.calc;
  if(req.body.calc=='3') {
    plusNode = 'checked';
    result = Number(num1) + Number(num2);};

  var subNode = req.body.calc;
  if(req.body.calc=='4') {
    subNode = 'checked';
    result = Number(num1) - Number(num2);};


  console.log(req.body);
  console.log("Post");
  res.render('index',{title: 'Bé Tập Tính',number1:num1, number2: num2,
  check_multi: multiNode, check_divide: divideNode,check_plus: plusNode,check_sub: subNode, result_value: result});
})
module.exports = router;
