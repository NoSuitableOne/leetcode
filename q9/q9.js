'use strict';

/**
/* @params number
/* return true/false 
**/
function isPalindromenumber (number) {
    if (number > 0 && number % 10 === 0) {
    	return true;
    } else if (number >= 0) {
        let remainder = 0;
        while (number > remainder) {
        	remainder = number % 10 + remainder * 10;
            number = Math.floor(number / 10);
        }
        return (number === remainder || number === Math.floor(remainder / 10));
    } else if (number < 0) {
        number *= -1;
        arguments.callee(tempNumber);
    }
}

let number = 32588523;
console.log(isPalindromenumber(number));




