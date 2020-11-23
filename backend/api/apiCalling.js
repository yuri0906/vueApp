/*
API呼び出し処理実装
*/

const axios = require("axios"); 
const apiURL = require("../secret/apiURL"); 
const apiID = require("../secret/apiID"); 
const _ = require("lodash")


//商品を検索し、その説明文(itemCaptionを抽出する)
exports.searchProduct = async(keyword) => { 
  const result = await axios.get(apiURL.rakuten,{
    params:{ 
      "applicationId": apiID.rakuten, 
      "keyword": keyword 
    }
  }).catch((err) => {
      console.log(err.response.data);
      throw new Error("error occured in rakutenAPI");
  });
  
  //各商品の説明文を配列に追加
  const items = result.data["Items"]; 

  const itemCaptionList = _.reduce(items,(result,item)=>{
    let itemCaption = item.Item["itemCaption"];
    if(itemCaption){
      result.push(itemCaption);
    }
    return result;
  },[])

  return itemCaptionList;
}

//与えられたテキスト(商品説明)中のキーフレーズを抽出する
exports.extractKeyphrase = async(itemCaption) => {
  const params = new URLSearchParams();
  params.append("appid",apiID.yahoo);
  params.append("sentence",itemCaption);
  params.append("output","json");

  const result = await axios.post(apiURL.yahoo, params
    ).catch((err) => {
      console.log(err.response.data);
      throw new Error("error occured in YahooAPI");
    });

  return result.data;
}