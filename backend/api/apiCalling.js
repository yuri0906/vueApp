/*
API呼び出し処理実装
*/

const axios = require("axios"); 
const apiURL = require("../secret/url"); 
const apiKey = require("../secret/apiID"); 

//商品を検索し、その説明文(itemCaptionを抽出する)
exports.searchProduct = async(keyword) => { 
  const captionList = new Array(); 
  const result = await axios.get(apiURL.rakuten,{
      params:{ 
        "applicationId" : apiKey.rakuten, 
        "keyword" : keyword 
      }
    }).catch((err) => {
      console.log('楽天APIエラー' + err);
      return; 
    });
  
  //各商品の説明文を配列に追加
  const items = result.data["Items"]; 
  for(let i in items){
      captionList[i] = items[i].Item["itemCaption"]; 
  }
  return captionList;
}

//与えられたテキスト(商品説明)中のキーフレーズを抽出する
exports.extractKeyphrase = async(sentence) => {
  const result = await axios.get(apiURL.yahoo,{
    params:{ 
      "appid" : apiKey.yahoo, 
      "sentence" : sentence, 
      "output" : "json" 
    }
  }).catch((err) => {
    console.log('YahooAPIエラー' + err);
    return; 
  });
  return result.data;
}