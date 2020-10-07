/*
集計結果計算を実装
計算結果の連想配列はindex.jsで使用
（アルゴリズム結合未完成）
*/

const api = require("./callAPI"); //API呼び出し処理ファイル

exports.totalScoreList = async(searchWord) => {
    const scoreList = {};  
    api.searchProduct(searchWord).then(captionList => {
        for(caption in captionList){
            api.extractKeyphrase(captionList[caption]).then(result => { 
                
            });
        }
    })
    return scoreList;
}

/*
各スコアリストを結合
_.concat(result1,result2);

async function totalization(result3){
    const list = await result3;
    const newList = {};
    for(listkey in list){
        const currentList = list[listkey];
        for(wordkey in currentList){
            if(wordkey in newList){
                newList[wordkey] += currentList[wordkey];
            }else{
                newList[wordkey] = currentList[wordkey];
            }
        }
    }
    console.log(newList);
}

totalization(testAsync());
*/