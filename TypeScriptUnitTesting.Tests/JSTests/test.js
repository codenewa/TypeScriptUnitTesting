/// <reference path="../scripts/typings/jasmine/jasmine.d.ts" />
/// <chutzpah_reference path="jasmine.js" />
/// <reference path="../../typescriptunittesting/app/mathlibrary.ts" />
var TestBase;
(function (TestBase) {
    describe("Generic Tests", function () {
        it("A basic test", function () {
            expect(true).toBeTruthy();
            var value = "hello";
            expect("hello").toEqual(value);
        });
        describe("some other test", function () {
            it("1+1=2", function () {
                expect(1 + 1).toEqual(2);
            });
        });
    });
    describe("StringLib tests", function () {
        var stringplus = null;
        beforeEach(function () {
            stringplus = new TestBase.StringPlus("abcdefghijklmnopqrstuvwxyz");
        });
        it("will get vowel count", function () {
            var count = stringplus.countVowels();
            expect(count).toEqual(5);
        });
    });
    describe("MathLib tests", function () {
        var mathLib = null;
        beforeEach(function () {
            mathLib = new TestBase.MathLib();
        });
        it("will add 5 to number", function () {
            var res = new TestBase.MathLib().add5(10);
            expect(res).toEqual(15);
        });
        it("will multiply 5 to number", function () {
            var res = new TestBase.MathLib().mult5(10);
            expect(res).toEqual(50);
        });
    });
})(TestBase || (TestBase = {}));
//# sourceMappingURL=test.js.map