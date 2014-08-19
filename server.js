var express = require('express');
var http = require('http');
var app = express();

app.use(express.static(__dirname + '/dist'));

var server = http.createServer(app);

server.listen(3000, function() {
  console.log('Server running on port 3000.');
});