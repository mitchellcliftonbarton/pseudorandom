var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('hey');
});

var server = app.listen(5000, function() {
  
}); 

app.get('/frontend', function(req, res, next) {
    console.log('frontend')
});