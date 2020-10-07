const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors') // corsポリシーに抵触するため、その対策としてcorsを利用する

const app = express()
app.use(bodyParser.json())
app.use(cors())

const ranking = require("./api/totalize"); //集計結果計算ファイル

app.post('/',(req, res) => {
  ranking.totalScoreList(req.body.text).then(totalList => {
    res.send(totalList);
  })
})

app.listen(process.env.PORT || 3000)
  
