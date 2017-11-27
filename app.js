var express = require("express");
var app = express();

app.get('/', function(req, res) {
  res.send('Hello World');
});

// public资源目录
app.use('/public', express.static('public'));

var server = app.listen(8000, function() {
  let host = server.address().address;
  let port = server.address().port;
  console.log('server running at http://%s:%s', host, port);
})