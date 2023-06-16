var express = require('express');
var router = express.Router();
// import { toJavanese } from 'carakanjs';
const { toJavanese } = require('carakanjs');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Aksara Jawa Translation API' });
});

router.post('/reversetrans', function (req, res) {
  var postData = req.body;
  var sections = postData.text.split(/\\n/); // Split postData into sections using \n as the delimiter

  var javaneseSections = [];
  for (var i = 0; i < sections.length; i++) {
    var section = sections[i];
    var javaneseSection = toJavanese(section, {
      useAccents: true,
      useSwara: false,
      useMurda: false,
    });
    javaneseSections.push(javaneseSection);
  }

  res.json({ hasil: javaneseSections });
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
