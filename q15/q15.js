/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function threeSum (nums) {
    let result = [];

    const twoSum = (arr, sum, base) => {
        let result = [],
            temp;
        
        arr.map(
            (item, index, array) => {
                let target = sum - item,
                    flag = false;

                if (array.indexOf(target) !== -1 && item !== target) {
                    temp = [item, array[array.indexOf(target)], base].sort();
                    for (let i of result) {;
                        if (JSON.stringify(temp) === JSON.stringify(i)) {
                        	flag = true;
                        }   
                    }
                    if (!flag) {
                        result.push(temp);
                    }
                }
            }
        );
        
        console.log('2sum result:' + result + '----------------------------')
        return result;
    },
    
    checkRepeat = (arr1, arr2) => {
    	console.log(arr1)
        for (let item1 of arr1) {
            let flag = true;
            console.log('item1"'+item1)
            for (let item2 of arr2) {
                if (JSON.stringify(item1) === JSON.stringify(item2)) {
                	flag = false;
                	break;     
                }
            }

            if (flag) {
            	console.log('true flag')
            	arr2.push(item1);
            }
        }
       // console.log(arr2)
        return arr2;
    }; 

    nums.map(
        (item, index, array) => {
    	    let target = 0 - item,
    	        tempResult = [];

            nums.splice(index, 1);
        	tempResult = twoSum(nums, target, item);
        	nums.splice(index, 0, item);
            
            console.log('when:item:' + item + ' ;tempResult:' + tempResult + ' result:' + result)
            if (tempResult.length) {
            	console.log('caonimaxxxxx')
                result = checkRepeat(tempResult, result);
            }
        }
    );

    return result; 
};

let numbers = [-5, -3, 3, 4, 2, -2, 0];

console.log(threeSum(numbers));