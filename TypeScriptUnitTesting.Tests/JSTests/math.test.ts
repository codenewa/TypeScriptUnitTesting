/// <reference path="../scripts/typings/jasmine/jasmine.d.ts" />
/// <chutzpah_reference path="../scripts/jasmine.js"/>

/// <reference path="../../typescriptunittesting/app/mathlibrary.ts" />
/// <chutzpah_reference path="../../typescriptunittesting/app/mathlibrary.js"/>


module TestBase {

    describe(" TS base test ->", function () {

        describe("Inner test 1 ->", function () {
            it("adds 1 and 1 ", function () {
                expect(1 + 1).toBe(2);
            })
        });
    });

    describe("TS string lib test =>", function () {

        it("counts vowels", function () {
            var strPlus = new StringPlus("abcdefghijklmnopqrstuvwxyz");
            var result = strPlus.countVowels();

            expect(result).toEqual(5);

        });

    });


    describe("TS math lib test =>", function () {

        it("can add", function () {
            var math = new MathLib();

            var result = math.add5(10);

            expect(result).toEqual(15);

        });


        it("TS can multiply", function () {
            var math = new MathLib();

            var result = math.mult5(10);

            expect(result).toEqual(50);

        });
    });
}