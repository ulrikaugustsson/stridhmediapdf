var Express = require('express');
var BodyParser = require('body-parser');

var router = require('./router');

var app = Express();

app.use(BodyParser.json());

router(app);

var port = process.env.PORT || 3000;

var server = app.listen(port, function(){

  console.log('App listening at http:/%a:%s', server.address().address, server.address().port);
});
