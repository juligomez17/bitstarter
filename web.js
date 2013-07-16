var express = require('express');
var fs = require('fs'); 

var app = express.createServer(express.logger());
var file = fs.readFileSync('index.html');
var stringFile = file.toString(); 
app.get('/', function(request, response) {
  response.send(stringFile);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
