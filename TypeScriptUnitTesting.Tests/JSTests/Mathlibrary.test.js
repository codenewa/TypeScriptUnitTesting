/// <reference path="..\scripts\jasmine.js" />
/// <chutzpah_reference path = "..\..\typescriptunittesting\app\mathlibrary.js"/>

describe("base test ->", function () {

    describe("Inner test 1 ->", function () {
        it("adds 1 and 1 ", function () {
            expect(1 + 1).toBe(2);
        })
    });
});

describe("string lib test =>", function () {

    it("counts vowels", function () {
        var strPlus = new TestBase.StringPlus("abcdefghijklmnopqrstuvwxyz");
        var result = strPlus.countVowels();

        expect(result).toEqual(5);

    });

});


describe("math lib test =>", function () {

    it("can add", function () {
        var math = new TestBase.MathLib();

        var result = math.add5(10);

        expect(result).toEqual(15);

    });


    it("can multiply", function () {
        var math = new TestBase.MathLib();

        var result = math.mult5(10);

        expect(result).toEqual(50);

    });
});