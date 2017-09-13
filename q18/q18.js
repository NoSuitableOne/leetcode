/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
function fourSum (nums, target) {
    let result,
        tempResult;

    nums = nums.sort();

    tempResult = addEachTwo(nums);
    result = findTwoSum(tempResult, target);

    let temp = new Set();
    for (let arr of result) {
        temp.add(JSON.stringify(arr));
    }
    result = Array.from(temp);
    return result;
}

function addEachTwo (arr) {
    let result = new Map();

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            let key = arr[i] + arr[j];
            if (result.has(key)) {
                let value = result.get(key),
                    flag = true;
                for (let subarr of value) {
                    if (JSON.stringify(subarr) === JSON.stringify([arr[i], arr[j]])) {
                        flag = false;
                        break;
                    }
                }
                if (flag) {
                    value.push([arr[i], arr[j]]);
                    result.set(key, value);
                }
            } else {
                result.set(key, [[arr[i], arr[j]]]);
            }
        }
    }

    return result;
}

function findTwoSum (map, sum) {
    let result = [];
    for (let [key, value] of map) {
        if (map.has(sum - key)) {
            let gap = map.get(sum - key);
            for (let subarr1 of value) {
                for (let subarr2 of gap) {
                    result.push(subarr1.concat(subarr2).sort());
                }
            }
        }
    }
    return result;
}

let numbers = [-2, 8, -6, 18, 4, -2, -6, 1, 11, -1, -1],
    target = 12;

console.log(fourSum(numbers, target));
