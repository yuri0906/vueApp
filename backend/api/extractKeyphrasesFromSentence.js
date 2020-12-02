/*
文章から重要語句とそのスコア（重要度）を算出する
*/

const axios = require("axios"); 
const _ = require("lodash")
const yahoo = require("../secret/yahoo"); //YahooAPIのIDとURL

exports.extractKeyphrasesFromSentence = async(sentence) => {
    const params = new URLSearchParams();
    params.append("appid",yahoo.apiID);
    params.append("sentence",sentence);
    params.append("output","json");

    const result = await axios.post(yahoo.apiURL, params
        ).catch((err) => {
        console.log(err.response.data);
        throw new Error("error occured in YahooAPI");
    });
    return result.data;
}