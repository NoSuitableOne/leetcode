/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
	let prefixStr = '',
	    strsAll = [];
    strs.map(
    	(item,index,array) => {
    		let arr = [];
            for (let i of item) {
            	arr.push(i);
            }
            strsAll.push(arr);
    	}
    );

    for (let i = 0; ; i++) {
    	for (let j = 0; j < strsAll.length; j++) {
    	    let temp = strsAll[0][i]; 
            if ( i > strsAll[j].length - 1 || strsAll[j][i] !== temp) {
                return prefixStr;
            }
    	}
    	prefixStr += strsAll[0][i];
    }  
};

let strs = ['etage','etc','etalate','ethic', 'etalon'];
console.log(longestCommonPrefix(strs));