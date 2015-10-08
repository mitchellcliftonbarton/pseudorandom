var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile('index.html');

});

app.get('/grid', function(req, res, next) {
  res.sendFile('grid.html', { root: path.join(__dirname, 'public') });
});

app.get('/loop', function(req, res, next) {
  res.sendFile('lg-view.html', { root: path.join(__dirname, 'public') });
  
});
app.get('/images', function(req, res, next) {
  fs.readdir('public/new-images', function(err, files) {
    if (err) {
      console.log(err);
    }

    console.log(files);
    res.send(JSON.stringify(files));
  });
});

app.post('/save', function(req, res, next) {
  var body = "";

  req.on('data', function(data) {
    body += data;
  });

  req.on('end', function (){
    var split = body.indexOf('data');
    var imgName = body.slice(0, split);
    var dataStart = body.toString().indexOf(',') + 1;
    var decodedImage = new Buffer(body.substring(dataStart), 'base64');
    fs.writeFile('public/new-images/' + imgName + '.jpg', decodedImage, function(err) {});
  });

  function callback(err) {
    if(err) console.log('broken');
    else console.log("yay")
  }

  res.send("Done");
  
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});

