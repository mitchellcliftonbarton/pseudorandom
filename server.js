var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
// var server = require('http').createServer(app);
// var io = require('socket.io')(server);
var path = require('path');
var fs = require('fs');
var tokenRouter = express.Router();
// var http = require('http');
// var winston = require('winston');

// winston.add(winston.transports.File, { filename: 'winston.log' });
// winston.info('Logging');

// var nsp = io.of('/web-performance');
// nsp.on('connection', function(socket) {
//   console.log('socketed');
// });

var corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200
}

// enables pre-flight requests
app.options('*', cors());
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({limit: '10mb', extended: true}));
app.use(bodyParser.raw({limit: '10mb'}));
app.listen(3000);

app.get('/', function (req, res) {
  res.sendFile('index.html');
  // winston.info('GET - /');
});

app.get('/web-performance', function (req, res) {
  res.sendFile('performance.html', { root: path.join(__dirname, 'public') });
  // winston.info('GET - /web-performance');
});

app.get('/grid', function(req, res, next) {
  res.sendFile('grid.html', { root: path.join(__dirname, 'public') });
  // winston.info('GET - /grid');
});

app.get('/loop', function(req, res, next) {
  res.sendFile('lg-view.html', { root: path.join(__dirname, 'public') });
  // winston.info('GET - /loop');
});

app.get('/show', function(req, res, next) {
  res.sendFile('new-show.html', { root: path.join(__dirname, 'public') });
  // winston.info('GET - /show-2');
});

app.get('/group', function(req, res, next) {
  res.sendFile('group.html', { root: path.join(__dirname, 'public') });
  // winston.info('GET - /group');
});

app.get('/info', function(req, res, next) {
  res.sendFile('info.html', { root: path.join(__dirname, 'public') });
  // winston.info('GET - /info');
});

app.get('/images', function(req, res, next) {
  // winston.info('GET - /images');
  fs.readdir('public/new-images', function(err, files) {
    if (err) {
      console.log(err);
    }

    console.log(files);
    res.send(files);
  });
});

app.get('/less-images', function(req, res, next) {
  // winston.info('GET - /images');
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
  // winston.info('GET - /group');
});

app.get('/new-grid', function(req, res, next) {
  res.sendFile('new-grid.html', { root: path.join(__dirname, 'public') });
  // winston.info('GET - /group');
});

app.post('/save', function(req, res, next) {
  // winston.info('POST - /save');
  // winston.info('starting save');

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
    // winston.info('Writing: ' + imgName);
    fs.writeFile('public/new-images/' + imgName + '.jpg', decodedImage, function(err) {
      // if (err) winston.info('Error: ' + err);
      // else winston.info('Success: Saved ' + imgName);
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
      // if (err) winston.info('Error: ' + err);
      // else winston.info('Success: Saved ' + imgName);
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

/******* 2MASS API *********/

app.get('/api/shows/:id', cors(corsOptions), function(req, res) {
  // res.status(200).send('You got shows!');
  res.status(200).json({
    data: [
      {
        type: 'show', 
        id: 'geminii',
        title: 'Geminii',
        date: 'June 2, 2017',
        artists: 'Featuring - Pearl Corry, Julian Harper, Mykaela Rogers',
        link: 'geminii',
        status: 'archive',
        text: null,
        imageIds: [ 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27 ]
      }, {
        type: 'show', 
        id: 'zone-of-avoidance',
        title: 'Zone of Avoidance',
        date: 'April 14, 2017',
        artists: 'Featuring - Eric Edvalson, Ellie Goldrup, Tanner Halversen, Jonathan Frioux, Hannah Pardoe, Jane Christensen',
        link: 'zone-of-avoidance',
        status: 'archive',
        text: 'The Zone of Avoidance is the area of sky hidden from our view by the Milky Way galaxy. Multiple surveys have been done in the last century in order to attain new knowledge about the Zone of Avoidance, giving more complete pictures of the space and increasing our understanding of its content. But even with this new information, much of the area remains incomplete in our understanding — stars and objects in the foreground are confused with galaxies that lay in the background, coming forward and shifting back, thus limiting our knowledge of the space.',
        imageIds: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14 ]
      }

    ]
  })
});

app.post('/api/token', cors(corsOptions), function(req, res) {
  if (req.body.grant_type === 'password') {
    if (req.body.username === 'letme' && req.body.password === 'in') {
      res.status(200).send('{ "access_token": "secret token!" }');
      console.log('someone logged in!');
    } else {
      res.status(400).send('{ "error": "Invalid username or password" }');
      console.log('someone failed to log in with the wrong password!');
    }
  } else {
    res.status(400).send('{ "error": "Unsupported Grant Type" }');
    console.log('someone failed to log in!');
  }
  console.log('this is the request body ' + req.body);
});
