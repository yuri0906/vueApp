const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
app.use(bodyParser.json())
app.use(cors())

app.get('/', function(req, res) {
    res.send({
      message: 'test'
    })
  })
  
  app.listen(process.env.PORT || 3000)