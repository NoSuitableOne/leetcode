'use strict';

/* 
/* @params arr,sum
/* return [index1, index2]
*/

function twoAdd (arr = [], sum = 0) {
    let result = [];
    for (let item of arr) {
        let target = sum - item,
            index2 = arr.indexOf(target);
        if(item !== target && index2 !== -1) {
        	result.push(arr.indexOf(item),index2);
            return result; 
        }
    }
}

twoAdd([1,2,4,6],8);
