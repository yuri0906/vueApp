const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors') // corsポリシーに抵触するため、その対策としてcorsを利用する

const app = express()
app.use(bodyParser.json())
app.use(cors())

const api = require("./api/callAPI"); //API呼び出し処理ファイル

app.post('/',(req, res) => {
  api.searchProduct(req.body.text).then(captionList => {
    api.extractKeyphrase(captionList[0]).then(result => { //テスト用に最初の値だけ処理
      res.send(result);
    });
  })
})

app.listen(process.env.PORT || 3000)
  
