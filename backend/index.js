const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
app.use(bodyParser.json())
app.use(cors())

const url = require("./password/id-pwd");
const axios = require("axios");

app.post('/', function(req, res) {
  axios.get(url)
    .then((response) => {
      res.send(response);
    })
    .catch((e) => {
      console.log(e);
      res.send(e);
    });
})

  
app.listen(process.env.PORT || 3000)
