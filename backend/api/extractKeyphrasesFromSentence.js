const axios = require("axios"); 
const yahoo = require("../secret/yahoo"); 
const _ = require("lodash")

exports.extractKeyphrasesFromSentence = async(itemCaption) => {
    const params = new URLSearchParams();
    params.append("appid",yahoo.id);
    params.append("sentence",itemCaption);
    params.append("output","json");

    const result = await axios.post(yahoo.url, params
        ).catch((err) => {
        console.log(err.response.data);
        throw new Error("error occured in YahooAPI");
    });
    return result.data;
}