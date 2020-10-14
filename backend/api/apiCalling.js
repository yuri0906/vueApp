/*
API呼び出し処理実装
*/

const axios = require("axios"); 
const apiURL = require("../secret/url"); 
const apiKey = require("../secret/apiID"); 

//商品を検索し、その説明文(itemCaptionを抽出する)
exports.searchProduct = async(keyword) => { 
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
  const itemCaptionList = []; 
  for(let i in items){
      itemCaptionList[i] = items[i].Item["itemCaption"]; //=["~","~","~",....,"~"]
  }
  return itemCaptionList;
}

//与えられたテキスト(商品説明)中のキーフレーズを抽出する
exports.extractKeyphrase = async(itemCaption) => {
  const params = new URLSearchParams();
  params.append("appid",apiKey.yahoo);
  params.append("sentence",itemCaption);
  params.append("output","json");

  //414エラーが発生したため、POSTに変更
  const result = await axios.post(apiURL.yahoo, params
    ).catch((err) => {
      console.log('楽天APIエラー' + err);
      return; 
    });
  return result.data;
}