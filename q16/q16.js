'use strict';

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {Set} num
 */
function threeSumCloset (nums, target) {
    let result = new Set(),
        lastGap;

    if (nums.length < 3) {
        return result;
    }

    nums = nums.sort();

    for (let i = 0; i < nums.length; i++) {
        for (let j = nums.length - 1; j > i; j--) {
            for (let index = i + 1; index < j; index++) {
                let gap = nums[i] + nums[j] + nums[index] - target;

                if (gap === 0) {
                    result.add(nums[i]);
                    result.add(nums[j]);
                    result.add(nums[index]);
                    return result;
                }

                if (gap > 0 || index + 1 < j) {
                    if (!lastGap) {
                        result.clear();
                        result.add(nums[i]);
                        result.add(nums[j]);
                        result.add(nums[index]);
                        lastGap = gap;
                    } else if (Math.abs(gap) < Math.abs(lastGap)) {
                        result.clear();
                        result.add(nums[i]);
                        result.add(nums[j]);
                        result.add(nums[index]);
                        lastGap = gap;
                        break;
                    }
                }
            }
        }
    }

    return result;
};

let nums = [22, -4, -2, -6, -10, 8, -7],
    target = 13;
console.log(threeSumCloset(nums, target));