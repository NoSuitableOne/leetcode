'use strict';

/* 
/* @params str
/* @return number
*/
function LongestSubstringLehgth(str) {
	let arr = str.split(''),
	    length = 1,
	    strLength = str.length;
	for (let i in arr) {
		let tempLength = 0;
		let tempStr = arr[parseInt(i)];
		if ((parseInt(i) + 1) < arr.length) {
			let j = parseInt(i);
			while (tempStr.indexOf(arr[parseInt(j) + 1]) === -1 && (j + 1 !== strLength)) {
                tempStr += arr[parseInt(j) + 1];
                j++;
			} 
			tempLength = tempStr.length;
			if (length <= tempLength) {
                length = tempLength;   
			}  
			continue; 
        }
	}
	return length;
}

let str = 'pwwkew';
console.log(LongestSubstringLehgth(str));