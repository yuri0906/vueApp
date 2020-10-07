/*
集計結果計算を実装
返し値のオブジェクトリテラルはindex.jsで使用
（※動作テスト未完了）
*/

const api = require("./apiCalling"); //API呼び出し処理ファイル
const _ = require("lodash"); //配列結合用集計ライブラリ

exports.totalScoreList = async(searchWord) => {
    const scoreList = {}; //トータルスコアのオブジェクトリテラル
    const calcList = new Array(); // スコア計算用配列

    //検索キーワードにヒットした商品の説明リストを作成する
    await api.searchProduct(searchWord).then(captionList => {
        for(caption in captionList){
            //各商品説明からキーワードを抽出する
            await api.extractKeyphrase(captionList[caption]).then(result => { 
                //トータルスコア計算用リストに結合
                _.concat(calcList,result);
            });
        }
    })

    for(listkey in list){
        const currentList = list[listkey];
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