/**
 * @author WMXPY
 * @namespace Words
 * @description Set
 */

import { getRandomElementIndex } from "./util";

export class WordsSet {

    public static of(words: string[]): WordsSet {

        return new WordsSet(words);
    }

    private readonly _words: string[];

    private constructor(words: string[]) {

        this._words = words;
    }

    public get length(): number {

        return this._words.length;
    }

    public getRandomWord(): string {

        const index: number = getRandomElementIndex(this.length);
        return this._words[index];
    }
}
