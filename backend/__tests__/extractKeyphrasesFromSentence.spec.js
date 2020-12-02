const { extractKeyphrasesFromSentence } = require("../api/extractKeyphrasesFromSentence");

describe("extractKeyphrasesFromSentence正常テスト",() => {
    jest.setTimeout(30000);

    test("正常ケース①", async()=>{
        const sentence1 = "樹木が灌木も含めて大好きですが、それらの名称を覚えるのは苦手です。";
        const obj = await extractKeyphrasesFromSentence(sentence1);
        expect.objectContaining(obj);
        Object.keys(obj).forEach((key)=>{
            expect(typeof(obj[key])).toBe("number");
        });

    });

    test("正常ケース②", async()=>{
        const sentence2 = "オレはこれが出たときに、小学生のゲイの詩があるんだっていばったんですけどね。";
        const obj = await extractKeyphrasesFromSentence(sentence2);
        expect.objectContaining(obj);
        Object.keys(obj).forEach((key)=>{
            expect(typeof(obj[key])).toBe("number");
        });
    });   
});

describe("extractKeyphrasesFromSentence異常テスト",() => {
    jest.setTimeout(30000);

    test("異常ケース：空文", async()=>{
        const obj = await extractKeyphrasesFromSentence(" ");
        expect(Object.keys(obj).length).toBe(0);
    });
});