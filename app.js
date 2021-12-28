var express = require('express');
var app = express();
var path = require('path');

var staticdir = __dirname + '/public';
console.log('Directory: ' + staticdir);

app.get('/', function(req, res, next) {
  console.log(req.subdomains);
  var filename = 'index.html';
  if (req.subdomains.length == 1 && req.subdomains[0].toLowerCase() == 'tjk') {
    filename = 'tjk.html'
  }
  res.sendFile(filename, {root: path.join(__dirname, 'public')});
});

app.use(express.static(staticdir));

var port = process.env.PORT || 8080;
app.listen(port);

console.log('Listening on port ' + port); 

