const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.json({
    "hey" : "NodeJs"
  })
})

app.listen(8000)