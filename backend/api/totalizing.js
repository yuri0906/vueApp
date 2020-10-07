/*
集計結果計算を実装
返し値のオブジェクトリテラルはindex.jsで使用
*/

const api = require("./apiCalling"); 
const _ = require("lodash"); 

exports.totalScoreList = async(searchWord) => {
    const scoreList = {}; 

    const captionList = await api.searchProduct(searchWord).then(result => {
        return result;
    })

    const calcList = await joinlist(captionList);


    //トータルスコアの計算処理
    for(listkey in calcList){
        const currentList = calcList[listkey];
        for(wordkey in currentList){
            if(wordkey in scoreList){ 
                scoreList[wordkey] += currentList[wordkey]; 
            }else{ 
                scoreList[wordkey] = currentList[wordkey]; 
                
            }
        }
    }
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