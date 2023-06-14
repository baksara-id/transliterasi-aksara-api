var express = require('express');
var router = express.Router();
// import { toJavanese } from 'carakanjs';
const { toJavanese } = require('carakanjs');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/revtojavanese', function (req, res) {
  var postData = req.body;
  var sections = postData.text.split(/\\n/); // Split postData into sections using \n as the delimiter

  var javaneseText = '';
  for (var i = 0; i < sections.length; i++) {
    var section = sections[i];
    var javaneseSection = toJavanese(section, {
      useAccents: true,
      useSwara: false,
      useMurda: false,
    });
    javaneseText += javaneseSection;
    if (i < sections.length - 1) {
      javaneseText += '\n'; // Append \n delimiter if it's not the last section
    }
  }

  res.json({ hasil: javaneseText });
});

router.post('/tojavanese', function (req, res) {
  var postData = req.body;
  var javaneseText = toJavanese(postData.text, {
    useAccents: true,
    useSwara: false,
    useMurda: false,
  });
  res.json({ hasil: javaneseText });
});

module.exports = router;
