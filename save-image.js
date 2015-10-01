// var http = require('http');

// const PORT=3001;

// function handleRequest(request, response) {
  
// }

// var server = http.createServer(handleRequest);

// server.listen(PORT, function() {
//   console.log("server listening", PORT);
// });

var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.sendfile('index.html');
});

var server = app.listen(4000, function() {
  
}); 

app.get('/', function(req, res, next) {
    console.log('frontend')
});
