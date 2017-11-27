var express = require("express");
var formidable = require('formidable');
var fs = require("fs");
var app = express();

app.get('/', function(req, res) {
  res.send('Hello World');
});

// public资源目录
app.use('/public', express.static('public'));

// 处理post请求
app.post('/upload', function(req, res) {
  var form = new formidable.IncomingForm();
  form.parse(req, function(err, fields, file) {
    fs.writeFileSync('public/test.png', fs.readFileSync(file.upload.path));
    res.redirect('/public/upload.html');
  })
  
})

var server = app.listen(8000, function() {
  let host = server.address().address;
  let port = server.address().port;
  console.log('server running at http://%s:%s', host, port);
})