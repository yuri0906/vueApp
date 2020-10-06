/*
Yahooキーフレーズ抽出API呼び出し処理（未完成）
*/
const axios = require("axios");
const url = "https://jlp.yahooapis.jp/KeyphraseService/V1/extract?";
const apiKey = require("../password/apiID"); //apiID取得用ファイル

//キーフレーズを抽出する
exports.extractKeyphrase = async(sentence) => {
    await axios.get(url,{
        params:{ //paramを追加
          "applicationId" : apiKey.yahoo, //YahooAPIのID取得
          "sentence" : sentence, //キーワードを取得
          "output" : "json", //レスポンス形式指定
          "callback" : "" //コールバック関数
        }
      })
        .then((response) => {
          return response;
        })
        .catch((e) => {
          return e;
        });
}