const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors') // corsポリシーに抵触するため、その対策としてcorsを利用する

const app = express()
app.use(bodyParser.json())
app.use(cors())

const axios = require("axios");
const url = "https://app.rakuten.co.jp/services/api/IchibaItem/Search/20170706?";
const api = require("./api/callAPI");
const apiKey = require("./password/apiID"); //apiID取得用ファイル


app.post('/',(req, res) => {
  api.searchProduct(req.body.text).then(result => {
    res.send(result);
  })
})

app.listen(process.env.PORT || 3000)
  
