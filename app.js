var express = require('express');
var app = express();

var staticdir = __dirname + '/public';
console.log('Directory: ' + staticdir);

app.use(express.favicon());
app.use(express.static(staticdir));
app.use(app.router);

app.get('/', function(req, res, next) {
  res.sendfile('public/index.html');
});

var port = process.env.PORT || 8080;
app.listen(port);

console.log('Listening on port ' + port); 

