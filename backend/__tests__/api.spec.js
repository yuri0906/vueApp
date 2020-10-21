import {searchProduct,extractKeyphrase} from '../api/apiCalling'
import {calcScore} from '../api/totalizing';

describe("1.検索キーワードに関する商品説明リストの取得できる",() => {
    test("1-1", async()=>{
        const list = await searchProduct("ドッグフード");
        expect.arrayContaining(list);
        list.forEach(element => {
            expect.stringContaining(element);
        });
    });
    
    test("1-2", async()=>{
        const list = await searchProduct("村上春樹");
        expect.arrayContaining(list);
        list.forEach(element => {
            expect.stringContaining(element);
        });
    }); 
});

describe("2.入力した文章からキーワードを抽出できる",() => {
    test("2-1", async()=>{
        const list = await searchProduct("ドッグフード");
        for(i in list){
            const b = await extractKeyphrase(list[i])
            expect.objectContaining(b);
        }
    });

    test("2-2", async()=>{
        const list = await searchProduct("村上春樹");

    });
});

describe("3.検索キーワードに関するキーワードのランキングが取得できる",() => {
    test("3-1", ()=>{
        
    });
});
