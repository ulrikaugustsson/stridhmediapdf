var Express = require('express');
var BodyParser = require('body-parser');

var router = require('./router');

var app = Express();

app.use(BodyParser.json());

router(app);

var server = app.listen(3000, function(){

  console.log('App listening at http:/%a:%s', server.address().address, server.address().port);
});
