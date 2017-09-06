'use strict';

/**
/* @params numberArr  
/* return size 
**/
function maxArea (numberArr) {
	let size = 0;
    numberArr.map(
        (i, idi) => { 
            numberArr.map(
                (j, idj) => {
                	if (idj > idi) {
                        let tempSize = 0;
                        tempSize = (idj - idi) * Math.min(i, j);
                        size = (tempSize > size)? tempSize : size;
                	}
                }
            );
        }
    );
    return size;
}

let number = [1,8,6,2,5,4,8,3,7];

console.log(maxArea(number));
