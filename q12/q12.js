'use strict';

/**
 * @param {number} num
 * @return {string}
 */

/**
/* 1.罗马单个数字共有7个，即I（1）、V（5）、X（10）、L（50）、C（100）、D（500）和M（1000）
/* 2.一个罗马数字重复几次，就表示这个数的几倍。但同一数码不能出现三次以上。
/* 3.遵循右加左减的规则。左减的数字有限制，仅限于I、X、C。比如45不可以写成VL，只能是XLV。
     但是，左减时不可跨越一个位数。比如，99不可以用IC（100 - 1）表示，
     而是用XCIX（[100 - 10] + [10 - 1]）表示（等同于阿拉伯数字每位数字分别表示）
     左减数字必须为一位，比如8写成VIII，而非IIX。
 */ 
function intToRoman (num) {
	if (num > 3999 || num < 1) {
		return undefined;
	}
    
    let roman = '';
    const romanNum = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'LC', 'C', 'CD', 'D', 'DM', 'M'],
          baseNum = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000],
          baseMax = baseNum[baseNum.length - 1],

        findBase = (num) => {
            for (let i = 0; i < baseNum.length; i++) {
    	        if ((num >= baseNum[i] && num < baseNum[i + 1]) || i === baseNum.length - 1) {
                    return {
            	        'base': baseNum[i],
                        'index': i
                    };
    	        }
            }
        };
    
    while (num > 0) {
        let str = romanNum[findBase(num).index];
        roman += str;
        num -= findBase(num).base;
    }
	return roman;
} 


console.log(intToRoman(2850));