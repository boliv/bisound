var express = require('express'),
  bodyParser = require('body-parser');
 
var app = express()

var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

musicRouter = require('./routes/musicRoutes')();

app.use('/api/music', musicRouter);
 
app.get('/test', function(req, res) {
  res.json({notes: "This is a test"})
});

app.get('/', function(req, res) {
  res.send('Welcome to my Bi-Sound API');
});
 
app.listen(port, function() {
  console.log('Running on PORT: ' + port);
});

module.exports = app;