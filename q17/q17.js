'use strict';

/**
 * @param {string} digits
 * @return {string[]}
 */
function letterCombinations (digits) {
    const dict = initDict();
    let result = [];

    if (digits.length === 0) {
        return result;
    } else if (digits.length === 1) {
        result = combineStr(dict.get(digits[digits.length - 1]), result);
    } else {
        result = combineStr(dict.get(digits[digits.length - 1]), letterCombinations(digits.substring(0, digits.length - 1)));
    }

    return result;
}

function initDict() {
    let dict = new Map();

    dict.set('1', []);
    dict.set('2', ['a', 'b', 'c']);
    dict.set('3', ['d', 'e', 'f']);
    dict.set('4', ['g', 'h', 'i']);
    dict.set('5', ['j', 'k', 'l']);
    dict.set('6', ['m', 'n', 'o']);
    dict.set('7', ['p', 'q', 'r', 's']);
    dict.set('8', ['t', 'u', 'v']);
    dict.set('9', ['w', 'x', 'y', 'z']);
    dict.set('0', []);

    return dict;
}

function combineStr (array, originArray) {
    let result = [];

    if (array.length === 0) {
        result = originArray;
        return result;
    }

    if (originArray.length === 0) {
        array.map(
            (arrayItem) => {
                result.push(arrayItem);
            }
        );
    } else {
        array.map(
            (arrayItem) => {
                originArray.map(
                    (originItem) => {
                        result.push(originItem + arrayItem);
                    }
                );
            }
        );
    }

    return result;
}

let str = '40132';
console.log(letterCombinations(str));