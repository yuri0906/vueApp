import {searchProduct,extractKeyphrase} from '../api/apiCalling'
import {calcScore} from '../api/totalizing';

describe("1.検索キーワードに関する商品説明リストの取得できる",() => {
    test("1-1:「ドッグフード」", async()=>{
        const list = await searchProduct("進撃の巨人");
        expect.arrayContaining(list);
        list.forEach(element => {
            expect.stringContaining(element);
        });
    });
    
    test("1-2:「村上春樹」", async()=>{
        const list = await searchProduct("村上春樹");
        expect.arrayContaining(list);
        list.forEach(element => {
            expect.stringContaining(element);
        });
    }); 
});

describe("2.検索キーワードに関する商品説明リストの取得できる（異常値ケース）",() => {
    test("2-1:空欄", async()=>{
        return await searchProduct(" ").catch(e => {
            expect(e.message).toBe('error occured in rakutenAPI');
        });
    });
    
    test("2-2:記号", async()=>{
        return await searchProduct("ふぁsg；fjbdcxdげ").catch(e => {
            expect(e.message).toBe('error occured in rakutenAPI');
        }); 
    });
});

describe("3.入力した文章からキーワードを抽出できる",() => {
    
});

describe("4.入力した文章からキーワードを抽出できる（異常値ケース）",() => {

});

describe("5.検索キーワードに関する商品説明リストの取得できる（異常値ケース）",() => {

});

describe("6.検索キーワードに関する商品説明リストの取得できる（異常値ケース）",() => {

});
