var express = require('express')
var app = express()
var router = express.Router()

app.get('/deleted', (req, res) => {
  req.header('User-Agent')
})