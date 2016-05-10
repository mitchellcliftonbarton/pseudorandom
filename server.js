var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var path = require('path');
var fs = require('fs');
var winston = require('winston');

winston.add(winston.transports.File, { filename: 'winston.log' });
winston.info('Logging');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({limit: '10mb', extended: true}));

app.get('/', function (req, res) {
  res.sendFile('index.html');
  winston.info('GET - /');
});

app.get('/grid', function(req, res, next) {
  res.sendFile('grid.html', { root: path.join(__dirname, 'public') });
  winston.info('GET - /grid');
});

app.get('/loop', function(req, res, next) {
  res.sendFile('lg-view.html', { root: path.join(__dirname, 'public') });
  winston.info('GET - /loop');
});

app.get('/show', function(req, res, next) {
  res.sendFile('new-show.html', { root: path.join(__dirname, 'public') });
  winston.info('GET - /show-2');
});

app.get('/group', function(req, res, next) {
  res.sendFile('group.html', { root: path.join(__dirname, 'public') });
  winston.info('GET - /group');
});

app.get('/info', function(req, res, next) {
  res.sendFile('info.html', { root: path.join(__dirname, 'public') });
  winston.info('GET - /info');
});

app.get('/images', function(req, res, next) {
  winston.info('GET - /images');
  fs.readdir('public/new-images', function(err, files) {
    if (err) {
      console.log(err);
    }

    console.log(files);
    res.send(files);
  });
});

app.post('/save', function(req, res, next) {
  winston.info('POST - /save');
  winston.info('starting save');

  var body = "";

  req.on('data', function(data) {
    body += data;
    // winston.info('your body = ' + body);
  });

  req.on('end', function (){
    var split = body.indexOf('data');
    var imgName = body.slice(0, split);
    var dataStart = body.toString().indexOf(',') + 1;
    var decodedImage = new Buffer(body.substring(dataStart), 'base64');
    winston.info('Writing: ' + imgName);
    fs.writeFile('public/new-images/' + imgName + '.jpg', decodedImage, function(err) {
      if (err) winston.info('Error: ' + err);
      else winston.info('Success: Saved ' + imgName);
    });
  });

  function callback(err) {
    if(err) console.log('broken');
    else console.log("yay")
  }

  res.send("Done");

});

app.post('/sand', function(req, res, next) {

  var body = "";

  req.on('data', function(data) {
    body += data;
  });

  req.on('end', function (){
    var split = body.indexOf('-');
    var imgName = body.slice(0, split);

    var t = new Date();
    var times = t.toUTCString();
    times = times.replace(/\s+/g, '-');
    imgName = times + '-' + imgName;
    imgName = imgName.replace(',', '');

    var dataStart = body.toString().indexOf(',') + 1;
    var decodedImage = new Buffer(body.substring(dataStart), 'base64');
    fs.writeFile('public/gray-sand/' + imgName + '.jpg', decodedImage, function(err) {
      if (err) winston.info('Error: ' + err);
      else winston.info('Success: Saved ' + imgName);
    });
  });

  function callback(err) {
    if(err) console.log('broken');
    else console.log("yay")
  }

  res.send("Done");

});

app.post('/shapes', function(req, res, next) {
  //get a random number
  var random = Math.floor((Math.random() * 50) + 1);

  //get all files in shapes folder
  fs.readdir('public/shapes', function(err, files) {
    if (err) {
      console.log(err);
    }
    
    //get a random file from shapes array and send it as base64 png
    fs.readFile(path.join(__dirname, 'public') + '/shapes/' + files[random % files.length], 'base64', function(err, data) {
      res.send('data:image/png;base64,' + data);
    });
  });

  res.send('yep' + data);
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
