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
    const calcList = await joinlist(itemCaptionList); 

    const scoreList = []; 

    for(listkey in calcList){
        const currentList = calcList[listkey];
        for(wordkey in currentList){
            if(scoreList.some(result=>result.word===wordkey)){ 
                scoreList.find(result=>result.word===wordkey).score += currentList[wordkey];
            }else{ 
                scoreList.push({word: wordkey, score: currentList[wordkey]}); 
            }
        }
    }
    return _.sortBy(scoreList,"score").reverse();
}

//オブジェクト結合処理
async function joinlist(itemCaptionList) {
    let calcList = new Array();
    for(itemCaption in itemCaptionList){
        const keyphrases = await api.extractKeyphrase(itemCaptionList[itemCaption]).then(result => {
            return result;
        })
        calcList = _.concat(calcList,keyphrases);
    }
    
    return calcList; 
}

