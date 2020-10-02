const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
app.use(bodyParser.json())
app.use(cors())

const axios = require("axios");
const url = "https://app.rakuten.co.jp/services/api/IchibaItem/Search/20170706?";

app.post('/',function(req, res) {
  axios.get(url,{
    params:{
      "applicationId" : "XXXXXXXXX",
      "keyword" : req.body.text
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
  
