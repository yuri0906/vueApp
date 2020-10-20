import {searchProduct,extractKeyphrase} from '../api/apiCalling'
import {calcScore} from '../api/totalizing';

describe("1.検索キーワードに関する商品説明リストの取得できる",() => {
    test("1-1", ()=>{
        const list = searchProduct("ドッグフード");
        expect.arrayContaining(list);
        for(i in list){
            expect.stringContaining(list[i]);
        }
    });
    
    test("1-2", ()=>{
        const list = searchProduct("村上春樹");
        expect.arrayContaining(list);
        for(i in list){
            expect.stringContaining(list[i]);
        }
    });
    
    test("1-3", ()=>{
        const list = searchProduct("鬼滅の刃");
        expect.arrayContaining(list);
        for(i in list){
            expect.stringContaining(list[i]);
        }
    });
});

describe("2.入力した文章からキーワードを抽出できる",() => {
    test("2-1", ()=>{
        
    });
});

describe("3.検索キーワードに関するキーワードのランキングが取得できる",() => {
    test("3-1", ()=>{
        
    });
});
