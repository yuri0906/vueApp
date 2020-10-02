const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors') // corsポリシーに抵触するため、その対策としてcorsを利用する

const app = express()
app.use(bodyParser.json())
app.use(cors())

const axios = require("axios");
const url = "https://app.rakuten.co.jp/services/api/IchibaItem/Search/20170706?";
const api = require("./password/apiID");


app.post('/',function(req, res) {
  axios.get(url,{
    params:{ //paramを追加
      "applicationId" : api.id,
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
  
