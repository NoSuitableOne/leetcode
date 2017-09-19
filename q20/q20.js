/**
 * @param {string} s
 * @return {boolean}
 */

function isValid (s) {
    let result = false,
        cache = [];

    for (let letter of s) {
        switch (letter) {
            case '(':
                cache.push(letter);
                break;
            case '[':
                cache.push(letter);
                break;
            case '{':
                cache.push(letter);
                break;
            case ')':
                if (cache.length === 0) {
                    return false;
                }
                if (cache[cache.length - 1] !== '(') {
                    return false;
                } else {
                    cache.pop();
                }
                break;
            case ']':
                if (cache.length === 0) {
                    return false;
                }
                if (cache[cache.length - 1] !== '[') {
                    return false;
                } else {
                    cache.pop();
                }
                break;
            case '}':
                if (cache.length === 0) {
                    return false;
                }
                if (cache[cache.length - 1] !== '{') {
                    return false;
                } else {
                    cache.pop();
                }
                break;
        }
    }

    if (cache.length === 0) {
        result = true;
    }
    return result;
}

let str = '{q(wee){[223]}}0i[]';
console.log(isValid(str));
