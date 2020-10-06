/*
API呼び出し処理実装
*/

const axios = require("axios");
const rakuten_url = "https://app.rakuten.co.jp/services/api/IchibaItem/Search/20170706?"; //楽天APIのURL
const yahoo_url = "https://jlp.yahooapis.jp/KeyphraseService/V1/extract"; //YahooAPIのURL
const apiKey = require("../password/apiID"); //apiID取得用ファイル

//商品を検索する
exports.searchProduct = async(keyword) => {
    await axios.get(rakuten_url,{
        params:{ //paramを追加
          "applicationId" : apiKey.rakuten, //楽天APIのID取得
          "keyword" : keyword //キーワードを取得
        }
      })
        .then((response) => {
          return response;
        })
        .catch((e) => {
          return e;
        });
}

//キーフレーズを抽出する
exports.extractKeyphrase = async(sentence) => {
    await axios.get(yahoo_url,{
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

/*
グラフ化処理（未完成）
*/