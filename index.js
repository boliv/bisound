var express = require('express'),
  bodyParser = require('body-parser');

var childProcess = require('child_process');

var app = express();

var http = require('http').Server(app);
var io = require('socket.io')(http);

var fs = require('fs');
 
var port = process.env.PORT || 3000;


function runScript(scriptPath, callback) {

    // keep track of whether callback has been invoked to prevent multiple invocations
    var invoked = false;

    var process = childProcess.fork(scriptPath);

    // listen for errors as they may prevent the exit event from firing
    process.on('error', function (err) {
        if (invoked) return;
        invoked = true;
        callback(err);
    });

    // execute the callback once the process has finished running
    process.on('exit', function (code) {
        if (invoked) return;
        invoked = true;
        var err = code === 0 ? null : new Error('exit code ' + code);
        callback(err);
    });

}

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

streamingRouter = require('./routes/streamingRoutes')();

app.use('/api/streaming', streamingRouter);

// io.on('connection', function(socket){
	  // console.log("connection");
      // var raw = fs.readFileSync('music/test.mp3');
     
      // for (var i = 0; i < raw.length; i++) {
      //   var audio = raw[i];
      //   io.emit('binary', audio);
      // }
// });

 
app.get('/test', function(req, res) {

	// Now we can run a script and invoke a callback when complete, e.g.
	runScript('./lib/node-streams-master/rename.js', function (err) {
	    if (err) throw err;
	    console.log('finished running rename.js');
	});

	// Now we can run a script and invoke a callback when complete, e.g.
	runScript('./lib/node-streams-master/stream.js', function (err) {
	    if (err) throw err;
	    console.log('finished running stream.js');
	});

	res.sendFile(__dirname + '/index.html');
});

app.get('/', function(req, res) {
  res.send('Welcome to my Bi-Sound API');
});
 
app.listen(port, function() {
  console.log('Running on PORT: ' + port);
});

io.listen(http);

module.exports = app;