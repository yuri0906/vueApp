/*
集計結果計算を実装
返し値のオブジェクトリテラルはindex.jsで使用
*/

const api = require("./apiCalling"); //API呼び出し処理ファイル
const _ = require("lodash"); //配列結合用集計ライブラリ

exports.totalScoreList = async(searchWord) => {
    const scoreList = {}; //トータルスコアのオブジェクトリテラル
    const calcList = new Array(); // スコア計算用配列

    //検索キーワードにヒットした商品の説明リストを作成する
    api.searchProduct(searchWord).then(captionList => {
        for(caption in captionList){
            //各商品説明からキーワードを抽出する
            api.extractKeyphrase(captionList[caption]).then(result => { 
                //トータルスコア計算用リストに結合
                _.concat(calcList,result);
            });
        }
    })

    //トータルスコアの計算処理
    for(listkey in calcList){
        const currentList = calcList[listkey];
        for(wordkey in currentList){
            if(wordkey in scoreList){ //すでにキーワードが存在する場合
                scoreList[wordkey] += currentList[wordkey]; //スコアを加算する
            }else{ //キーワードが存在しない場合
                scoreList[wordkey] = currentList[wordkey]; //新しくキーワードとスコアを挿入する
            }
        }
    }
    return scoreList; 
}