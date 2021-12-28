var express = require('express');
var app = express();
var path = require('path');

var staticdir = __dirname + '/public';
console.log('Directory: ' + staticdir);

app.get('/tjk', function(req, res, next) {
  res.sendFile('tjk.html', {root: path.join(__dirname, 'public')});
});

app.get('/', function(req, res, next) {
  res.sendFile('index.html', {root: path.join(__dirname, 'public')});
});

app.use(express.static(staticdir));

var port = process.env.PORT || 8080;
app.listen(port);

console.log('Listening on port ' + port); 

