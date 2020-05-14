var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World!\n');
});

app.get('/rafa', function (req, res) {
  res.send('Hello rafa!\n');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

