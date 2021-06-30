/**
 * @author WMXPY
 * @namespace Words
 * @description Util
 */

export const getRandomElementIndex = (length: number): number => {

    const randomNumber: number = Math.random();
    return Math.floor(randomNumber * length);
};
