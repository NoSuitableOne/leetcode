'use strict';

/**
 * @param {string} s
 * @return {number}
 */
function romanToInt(s) {
    let number = 0;

    for (let i = 0; i < s.length; i++) {
    	const getNumber = (i) => {
    	    let value;
    	    switch (i) {
                case 'I':
                    value = 1; 
                    break;
                case 'V':
                    value = 5;
                    break;
                case 'X':
                    value = 10;
                    break;
                case 'L':
                   value = 50;
                    break;    
                case 'C':
                    value = 100;
                    break;
                case 'D':
                    value = 500;
                    break; 
                case 'M': 
                    value = 1000;
                    break;
                default:
                    value = NaN;
    	    }
            return value;
    	}

    	if (getNumber(s[i]) >= getNumber(s[i + 1]) || i === s.length - 1) {
            number += getNumber(s[i]);
    	} else {
            number -= getNumber(s[i]);
    	}
    }

    return number;
}

let roman = 'XLII';
console.log(romanToInt(roman));