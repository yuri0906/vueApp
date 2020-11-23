const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors') // corsポリシーに抵触するため、その対策としてcorsを利用する

const app = express()
app.use(bodyParser.json())
app.use(cors())

const scoreList = require("./api/totalizing"); //集計結果計算ファイル

//TODO2:api以下のファイル名の変更

app.post('/', async(req, res) => {
  const ranking = await scoreList.calcScore(req.body.text)
    .then(result => {
      return result;
    })
    .catch(err =>{
      return err;
    })
  res.send(ranking);
})

app.listen(process.env.PORT || 3000)