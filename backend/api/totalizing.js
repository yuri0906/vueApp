/*
集計結果計算を実装
返し値のオブジェクトリテラルはindex.jsで使用
*/

const api = require("./apiCalling"); 
const _ = require("lodash"); 
const { result } = require("lodash");

exports.totalScoreList = async(searchWord) => {
    const captionList = await api.searchProduct(searchWord).then(result => {
        return result;
    })
    const calcList = await joinlist(captionList); //各captionあたりのキーフレーズの集合体
    const scoreList = []; 

    //トータルスコアの計算処理
    //ソートを行うため、オブジェクト配列に変更
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
    //todo:リストのソート

    return scoreList; 
}

//オブジェクト結合処理
async function joinlist(captionList) {
    let calcList = new Array();
    for(caption in captionList){
        const list = await api.extractKeyphrase(captionList[caption]).then(result => {
            return result;
        })
        calcList = _.concat(calcList,list);
    }
    return calcList;
}

//トータルスコアの計算処理

//リストソート処理
