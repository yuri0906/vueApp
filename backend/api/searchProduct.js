/*
楽天商品検索API呼び出し処理実装（未テスト）
*/
const axios = require("axios");
const url = "https://app.rakuten.co.jp/services/api/IchibaItem/Search/20170706?";
const apiKey = require("../password/apiID"); //apiID取得用ファイル

//商品を検索する
exports.searchProduct = async(keyword) => {
    await axios.get(url,{
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