declare module TestBase {
    class StringBase {
        content: string;
        vowels: string;
        constructor(content: string);
    }
    class StringPlus extends StringBase {
        content: string;
        vowels: string;
        constructor(content: string);
        countVowels(): number;
    }
    class MathLib {
        add5: (a: number) => number;
        mult5: (a: number) => number;
    }
}
