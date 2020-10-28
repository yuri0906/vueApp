import {searchProduct,extractKeyphrase} from '../api/apiCalling'
import {calcScore} from '../api/totalizing';

describe("1.検索キーワードに関する商品説明リストの取得できる",() => {
    jest.setTimeout(30000);

    test("1-1:「Vue」", async()=>{
        const list = await searchProduct("Vue");
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

describe("2.検索キーワードに異常値を入力するとエラーが発生する",() => {
    jest.setTimeout(30000);

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
    jest.setTimeout(30000);

    test("3-1", async()=>{
        const sentence1 = "樹木が灌木も含めて大好きですが、それらの名称を覚えるのは苦手です。";
        const obj = await extractKeyphrase(sentence1);
        expect.objectContaining(obj);
        Object.keys(obj).forEach((key)=>{
            expect(typeof(obj[key])).toBe("number");
        });

    });

    test("3-2", async()=>{
        const sentence2 = "オレはこれが出たときに、小学生のゲイの詩があるんだっていばったんですけどね。";
        const obj = await extractKeyphrase(sentence2);
        expect.objectContaining(obj);
        Object.keys(obj).forEach((key)=>{
            expect(typeof(obj[key])).toBe("number");
        });
    });   
});

describe("4.空の値（文章）を入力するとプロパティが空のオブジェクトが返される",() => {
    jest.setTimeout(30000);

    test("4:空文", async()=>{
        const obj = await extractKeyphrase(" ");
        expect(Object.keys(obj).length).toBe(0);
    });
});

describe("5.検索キーワードに関するキーワードのランキングが取得できる",() => {
    jest.setTimeout(30000);

    test("5-1:鬼滅の刃", async()=>{
        const list = await calcScore("鬼滅の刃");
        expect.arrayContaining(list);
        list.forEach((element) => {
            expect.objectContaining(element);
        });
    });

    test("5-2:プロテイン", async()=>{
        const list = await calcScore("プロテイン");
        expect.arrayContaining(list);
        list.forEach((element) => {
            expect.objectContaining(element);
        });
    });
});

describe("6.検索キーワードに異常値を入力するとエラーが発生する",() => {
    jest.setTimeout(30000);

    test("6-1:空欄", async()=>{
        return await calcScore(" ").catch(e => {
            expect(e.message).toBe('error occured in rakutenAPI');
        }); 
    });
    
    test("6-2:記号", async()=>{
        return await calcScore("ふぁsg；fjbdcxdげ").catch(e => {
            expect(e.message).toBe('error occured in rakutenAPI');
        }); 
    });
});
