var express = require('express')
 
var app = express()
 
app.get('/test', function(req, res) {
  res.json({notes: "This is a test"})
})
 
app.listen(3000)