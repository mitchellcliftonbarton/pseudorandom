var express = require('express');
var bodyParser = require('body-parser');
var app = express();
// var server = require('http').createServer(app);
// var io = require('socket.io')(server);
var path = require('path');
var fs = require('fs');
// var http = require('http');
var winston = require('winston');

winston.add(winston.transports.File, { filename: 'winston.log' });
winston.info('Logging');

// var nsp = io.of('/web-performance');
// nsp.on('connection', function(socket) {
//   console.log('socketed');
// });

app.use(express.static('public'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({limit: '10mb', extended: true}));
app.use(bodyParser.raw({limit: '10mb'}));
app.listen(3000);

app.get('/', function (req, res) {
  res.sendFile('index.html');
  winston.info('GET - /');
});

app.get('/web-performance', function (req, res) {
  res.sendFile('performance.html', { root: path.join(__dirname, 'public') });
  winston.info('GET - /web-performance');
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

app.get('/less-images', function(req, res, next) {
  winston.info('GET - /images');
  fs.readdir('public/less-new-images', function(err, files) {
    if (err) {
      console.log(err);
    }

    console.log(files);
    res.send(files);
  });
});

app.get('/new-loop', function(req, res, next) {
  res.sendFile('new-loop.html', { root: path.join(__dirname, 'public') });
  winston.info('GET - /group');
});

app.get('/new-grid', function(req, res, next) {
  res.sendFile('new-grid.html', { root: path.join(__dirname, 'public') });
  winston.info('GET - /group');
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
    else console.log("yay");
  }

  res.send("Done");

});

app.post('/shapes', function(req, res, next) {
  //get a random number
  var random = Math.floor((Math.random() * 100) + 1);

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
});

app.post('/web-performance', function(req, res, next) {
  // var msg = req.body.stringify();

  res.send('i got it github ' + data);
});

app.get('/basic-pages/:id', function(req, res, next) {
  res.send('hi');
});
