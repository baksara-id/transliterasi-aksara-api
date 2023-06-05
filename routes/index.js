var express = require('express');
var router = express.Router();
// import { toJavanese } from 'carakanjs';
const { toJavanese } = require('carakanjs');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/tojavanese', function (req, res) {
  var postData = req.body;
  var javaneseText = toJavanese(postData.text);
  var bug = 'bug';
  console.log(bug);
  var bug2 = 'bug2';
  console.log(bug2);
  res.json({ hasil: javaneseText });
});

module.exports = router;
