'use strict';

/**
/* @params nums1, nums2
/* return median
**/

function calculateMedian (nums1, nums2) {
    let m = nums1.length,
        n = nums2.length,
        sumLen = m + n,
        result = 0,
        tempArr = [];
        
    tempArr = findFirstHalf(nums1, nums2);

    if (sumLen % 2) {
        result = tempArr[0];
    } else {
        result = (tempArr[0] + tempArr[1]) / 2;        
    }

    return result;
}

function findFirstHalf (nums1, nums2) {
    let target = Math.floor((nums1.length + nums2.length) / 2) + 1,
        shoterArr = nums1.length <= nums2.length ? nums1 : nums2,
        longerArr = nums1.length > nums2.length ? nums1 : nums2,
        tempArr = [];
    for (let i  = 0; i < target; i++) {
        if (shoterArr.length > 0) {
            if (shoterArr[0] <= longerArr[0]) {
            	tempArr.unshift(shoterArr[0]);
            	shoterArr.shift(0);
            } else {
            	tempArr.unshift(longerArr[0]);
            	longerArr.shift(0);
            }
        } else {
            tempArr.unshift(longerArr[0]);
            longerArr.shift(0);
        }
        
    }

    return tempArr;
}

let nums1 = [1, 2],
    nums2 = [3, 4];

 console.log(calculateMedian(nums1, nums2));