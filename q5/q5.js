/**
/* @params str
/* return palindromicStr
**/

function longestPalindromicSubstring (str) {
    let strLength = str.length,
        strArr = str.split(''),
        result = '';

    for (let i = 0; i < strLength; i++) {
        let edgeLength = Math.min(i, strLength - i),
            tempResult = '';

        tempResult = tryOddCase(i, strArr, edgeLength);
        result = result.length < tempResult.length? tempResult : result;

        tempResult = tryOddCase(i, strArr, edgeLength);
        result = result.length < tempResult.length? tempResult : result;           
        
    }
    
    return result;
    
}

function tryEvenCase (index, strArr, edgeLength) {
    let result = '';
	for (let j = 0; j < edgeLength; j++) {
        if (strArr[index - j] !== strArr[index + j]) {
            return result; 
        } else {
            result = strArr.slice(index - j, index + j + 1).join('');
        }
    }
    return result;
}

function tryOddCase (index, strArr, edgeLength) {
	let result = '';
    for (let k = 1; k < edgeLength; k++) {
        if (strArr[index - k] !== strArr[index + k]) {
            return result;
        } else {
            result = strArr.slice(index - k, index + k + 1).join('');	
        }
    }
    return result;	
}

let str = 'sccskiikkbbmooomb';
console.log(longestPalindromicSubstring(str));