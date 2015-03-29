var express = require('express');
var wkhtmltopdf = require('wkhtmltopdf');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/create', function (req, res) {

    res.setHeader("content-type", "application/pdf");

    wkhtmltopdf('http://google.com/', { pageSize: 'letter' })
        .pipe(res);
});

module.exports = router;