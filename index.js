var express = require('express'),
  bodyParser = require('body-parser');

// var childProcess = require('child_process');

var app = express();

var http = require('http').Server(app);
var io = require('socket.io')(http);

var ms = require('mediaserver');

var fs = require('fs');

var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

streamingRouter = require('./routes/streamingRoutes')();

app.use('/api/streaming', streamingRouter);

app.get('/streams/kauna', function(req, res) {

  // http.createServer(function (req, res) {

    ms.pipe(req, res, "music/brave_new_world_side_1.mp3");

  // });
});


app.get('/test', function(req, res) {

	res.sendFile(__dirname + '/index.html');
});

app.get('/', function(req, res) {
  res.send('Welcome to my Bi-Sound API');
});


app.listen(port, function() {
  console.log('Running on PORT: ' + port);
});

// io.listen(http);

module.exports = app;
