var express = require('express')
var app = express()
var puerto = "5050";

app.get('/tecnologiasWeb', function (req, res) {
  res.send('Hello World!')
})

app.listen(5050s, function () {
  console.log('Example app listening on port 3000!')
})