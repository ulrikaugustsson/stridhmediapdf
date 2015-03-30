var wkhtmltopdf = require('wkhtmltopdf');

module.exports = function (app) {
    app.post('/create', function (req, res) {

        if(req.body.type === 'url') {
            res.setHeader('Content-disposition', 'inline; filename="file.pdf"');
            res.setHeader('Content-type', 'application/pdf');

            return wkhtmltopdf(req.body.url, { pageSize: 'letter', loadErrorHandling: 'ignore' })
                .pipe(res);
        } else {

            res.setHeader('Content-disposition', 'inline; filename="file.pdf"');
            res.setHeader('Content-type', 'application/pdf');
            wkhtmltopdf(req.body.html, { pageSize: 'letter' })
                .pipe(res);
        }
    });
};
