const axios = require("axios"); 
const rakuten = require("../secret/rakuten"); 
const _ = require("lodash")

//商品を検索し、その説明文(itemCaptionを抽出する)
exports.fetchItemCaptionList = async(keyword) => { 
    const result = await axios.get(rakuten.url,{
        params:{ 
            "applicationId": rakuten.id, 
            "keyword": keyword 
        }
        }).catch((err) => {
            console.log(err.response.data);
            throw new Error("error occured in rakutenAPI");
    });

    const items = result.data["Items"]; 

    const itemCaptionList = _.reduce(items,(result,item)=>{
        let itemCaption = item.Item["itemCaption"]; 
        if(!itemCaption){ //空文判定
            return result;
        }
        result.push(itemCaption);
        return result;
    },[])

    return itemCaptionList;
}