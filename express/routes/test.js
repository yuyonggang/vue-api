var express = require('express');
var router = express.Router();
 
/* GET users listing. */
router.get('/', function (req, res, next) {
    res.json({data:{ name: 'gavinget', pwd: 'get123' },code:200});
});
router.post('/', function (req, res, next) {
     res.json({ data:{ name: 'gavinpost', pwd: 'post123' },code:200});//返回给前端的代码
         console.log(req.body);//前端传过来的参数
});
module.exports = router;
