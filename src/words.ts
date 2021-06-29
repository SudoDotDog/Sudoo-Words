/**
 * @author WMXPY
 * @namespace Words
 * @description Words
 */

export class Words {

    public static create(): Words {

        return new Words();
    }

    public static extends(parent: Words): Words {

        return new Words(parent);
    }

    private readonly _adjectives: string[];
    private readonly _nouns: string[];
    private readonly _verbs: string[];

    private readonly _parent?: Words;

    private constructor(parent?: Words) {

        this._adjectives = [];
        this._nouns = [];
        this._verbs = [];

        this._parent = parent;
    }

    public addAdjectives(adjectives: string[]): this {

        this._adjectives.push(...adjectives);
        return this;
    }

    public addNouns(nouns: string[]): this {

        this._nouns.push(...nouns);
        return this;
    }

    public addVerbs(verbs: string[]): this {

        this._verbs.push(...verbs);
        return this;
    }
}
