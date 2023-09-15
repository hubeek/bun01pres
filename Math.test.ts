import { expect, test, describe, it } from "bun:test";

test("2 + 2", () => {
    expect(2 + 2).toBe(4);
});

describe("nog een test groepje",()=>{
    it("eerste",()=>{
        expect(1+1).toBe(2)
    })
    it("tweede",()=>{
        expect(1+2).toBe(3)
    })
})
