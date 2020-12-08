const { fetchItemCaptionList } = require("../api/fetchItemCaptionList");

describe("fetchItemCaptionList正常テスト",() => {
    jest.setTimeout(30000);

    test("正常ケース①", async()=>{
        const list = await fetchItemCaptionList("Vue");
        expect.arrayContaining(list);
        list.forEach(element => {
            expect.stringContaining(element);
        });
    });
    
    test("正常ケース②", async()=>{
        const list = await fetchItemCaptionList("村上春樹");
        expect.arrayContaining(list);
        list.forEach(element => {
            expect.stringContaining(element);
        });
    }); 
});

describe("fetchItemCaptionList異常テスト",() => {
    jest.setTimeout(30000);

    test("異常ケース：空欄", async()=>{
        return await fetchItemCaptionList(" ").catch(e => {
            expect(e.message).toBe('error occured in rakutenAPI');
        });
    });
    
    test("異常ケース：記号", async()=>{
        return await fetchItemCaptionList("ふぁsg；fjbdcxdげ").catch(e => {
            expect(e.message).toBe('error occured in rakutenAPI');
        }); 
    });
});