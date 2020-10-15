/*
集計結果計算を実装
返し値のオブジェクトリテラルはindex.jsで使用
*/
const api = require("./apiCalling"); 
const _ = require("lodash"); 
const { result } = require("lodash");

exports.calcScore = async(searchWord) => {
    const itemCaptionList = await api.searchProduct(searchWord).then(result => {
        return result;
    }) 

    const keyphraseList = await joinKeyphraseList(itemCaptionList);  

    let scoreList = [];
    for(i in keyphraseList){ 
        const currentList = keyphraseList[i];
        for(j in currentList){ 
            const element = scoreList.find(result=>result.word===j); 
            if(element){ 
                element.score += currentList[j];
            }else{ 
                scoreList.push({word: j, score: currentList[j]}); 
            }
        }
    }
    return _.sortBy(scoreList,"score").reverse();
}

//各説明文からキーワード抽出し、配列にまとめる
async function joinKeyphraseList(itemCaptionList) {
    let keyphraseList = [];
    for(itemCaption in itemCaptionList){
        const keyphrases = await api.extractKeyphrase(itemCaptionList[itemCaption]
            ).then(result => {
                return result;
        })
        keyphraseList = _.concat(keyphraseList,keyphrases);
    }
    return keyphraseList; 
}

