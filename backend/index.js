const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors') // corsポリシーに抵触するため、その対策としてcorsを利用する

const app = express()
app.use(bodyParser.json())
app.use(cors())

const axios = require("axios");
const url = "https://app.rakuten.co.jp/services/api/IchibaItem/Search/20170706?";
const api = require("./password/apiID"); //apiID取得用ファイル


app.post('/',function(req, res) {
  axios.get(url,{
    params:{ //paramを追加
      "applicationId" : api.id, //楽天APIのIDを/password/apiIDから取得
      "keyword" : req.body.text //キーワードを取得
    }
  })
    .then((response) => {
      res.send(response.data); 
    })
    .catch((e) => {
      res.send(e);
    });
})

app.listen(process.env.PORT || 3000)
  
