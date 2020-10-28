/*
集計結果計算を実装
返し値のオブジェクトはindex.jsで使用
*/
const api = require("./apiCalling"); 
const _ = require("lodash"); 
const { result } = require("lodash");

exports.calcScore = async(searchWord) => {
    const itemCaptionList = await api.searchProduct(searchWord
        ).then(result => {
            return result;
        });

    let keyphraseList = [];
    for(var itemCaption in itemCaptionList){ 
        const keyphrases = await api.extractKeyphrase(itemCaptionList[itemCaption]
            ).then(result => {
                return result;
            });
        keyphraseList = _.concat(keyphraseList,keyphrases);
    }
    
    const scoreList = _.chain(keyphraseList)
        .map(_.toPairs)
        .flatten()
        .groupBy(_.head)
        .toPairs()
        .map((it) => [{word:it[0], score:_.sumBy(it[1], _.last)}])
        .flatten()
        .value();

    return _.sortBy(scoreList,"score").reverse();
}


