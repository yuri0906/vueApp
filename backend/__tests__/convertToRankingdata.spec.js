const { convertToRankingdata } = require("../api/convertToRankingdata");

describe("convertToRankingdata正常テスト",() => {
    jest.setTimeout(30000);

    test("正常ケース①", async()=>{
        const list = await convertToRankingdata("鬼滅の刃");
        expect.arrayContaining(list);
        list.forEach((element) => {
            expect.objectContaining(element);
        });
    });

    test("正常ケース②", async()=>{
        const list = await convertToRankingdata("進撃の巨人");
        expect.arrayContaining(list);
        list.forEach((element) => {
            expect.objectContaining(element);
        });
    });
});

describe("convertToRankingdata異常テスト",() => {
    jest.setTimeout(30000);

    test("異常ケース①：空欄", async()=>{
        return await convertToRankingdata(" ").catch(e => {
            expect(e.message).toBe('error occured in rakutenAPI');
        }); 
    });
    
    test("異常ケース②：記号", async()=>{
        return await convertToRankingdata("ふぁsg；fjbdcxdげ").catch(e => {
            expect(e.message).toBe('error occured in rakutenAPI');
        }); 
    });
});