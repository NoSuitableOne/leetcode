'use strict';

/**
/* @params number
/* return reverseNumber 
**/
function reverseInteger (number) {
    let str = number.toString(),
        reverseStr = '';
    if (number === 0) {
    	return 0;
    } else if (number > 0) {
    	reverseStr = [...`${str}`].reverse().join('');
        if (parseFloat(reverseStr).toString(2).length > 32) {
        	return 0;
        } else {
        	return parseInt(reverseStr);
        }
    } else if (number < 0) {
    	reverseStr = [...`${str}`].reverse().splice(0, str.length - 1).join('');
        if (parseFloat(reverseStr).toString(2).length > 31) {
        	return 0;
        } else {
            return parseInt(`-${reverseStr}`);	
        }
    }
}

let number = -2580;
console.log(reverseInteger(number));