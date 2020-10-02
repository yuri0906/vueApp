const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
app.use(bodyParser.json())
app.use(cors())

app.post('/', function(req, res) {
    res.send({
      message: req.body.text
    })
})

//API呼び出し処理実装する
  
app.listen(process.env.PORT || 3000)
