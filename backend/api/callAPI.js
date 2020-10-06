/*
API呼び出し処理実装
*/

const axios = require("axios"); 
const rakuten_url = "https://app.rakuten.co.jp/services/api/IchibaItem/Search/20170706?"; //楽天APIのURL
const yahoo_url = "https://jlp.yahooapis.jp/KeyphraseService/V1/extract?"; //YahooAPIのURL
const apiKey = require("../password/apiID"); //apiID取得用ファイル

//商品を検索し、その説明文(itemCaptionを抽出する)
exports.searchProduct = async(keyword) => { 
    const captionList = new Array(); //各商品の説明文を含む配列
    const result = await axios.get(rakuten_url,{
        params:{ //paramを追加
          "applicationId" : apiKey.rakuten, //楽天APIのID取得
          "keyword" : keyword //キーワードを取得
        }
      }).catch((err) => {
        console.log('error occured in rakuten api!!!');
        return; 
      });

    const items = result.data["Items"]; 
    for(let i in items){
        captionList[i] = items[i].Item["itemCaption"]; //各商品の説明文を配列に追加
    }
    return captionList;
}

//与えられたテキスト(商品説明)中のキーフレーズを抽出する
exports.extractKeyphrase = async(sentence) => {
    const result = await axios.get(yahoo_url,{
        params:{ //paramを追加
          "appid" : apiKey.yahoo, //YahooAPIのID取得
          "sentence" : sentence,
          "output" : "json"
        }
      }).catch((err) => {
        console.log('error occured in yahoo api!!!');
        return; 
      });
    return result.data;
}

/*
データ集計（未実装）
*/


/*
グラフ化処理（未実装）
*/