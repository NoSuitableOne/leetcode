/**
 * @param {number} n
 * @return {string[]}
 */
function generateParenthesis (n) {
    let result = [];

    if (n === 1) {
        result.push('()');
    } else {
        result = addParenthesis(generateParenthesis (n - 1), n);
    }

    return result;
}

function addParenthesis(base, n) {
    let result = [],
        temp = new Set();
    const parenthesis = '()';

    base.map(
        (item) => {
            for (let i = 0; i < item.length; i++) {
                temp.add(`${item.substring(0, i + 1)}${parenthesis}${item.substring(i + 1)}`);
            }
        }
    );
    temp.add(parenthesis.repeat(n));
    result = Array.from(temp);

    return result;
}

const num = 4;
console.log(generateParenthesis(num));