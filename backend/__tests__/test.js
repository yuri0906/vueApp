import {searchProduct,extractKeyphrase} from '../api/apiCalling'
import {calcScore} from '../api/totalizing';

describe("検索キーワードに関する商品説明リストの取得できる",() => {
    test("(1)", ()=>{
        expect.arrayContaining(searchProduct("ドッグフード"));
    });
    
    test("(2)", ()=>{
        expect.arrayContaining(searchProduct("村上春樹"));
    });
    
    test("(3)", ()=>{
        expect.arrayContaining(searchProduct("鬼滅の刃"));
    });
});

describe("入力した文章からキーワードを抽出できる",() => {
    test("(1)", ()=>{
        
    });
});

describe("検索キーワードに関するキーワードのランキングが取得できる",() => {
    test("(1)", ()=>{
        
    });
});