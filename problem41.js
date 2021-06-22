/* 
Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

There is only one repeated number in nums, return this repeated number.

You must solve the problem without modifying the array nums and uses only constant extra space.

Input: nums = [1,3,4,2,2]
Output: 2

Input: nums = [3,1,3,4,2]
Output: 3

Input: nums = [1,1]
Output: 1

Input: nums = [1,1,2]
Output: 1
 
*/

function findDuplicates(nums){
    let obj1 = {};

    for(let values of nums){
        obj1[values] = ((obj1[values] || 0)+1)
    }

    console.log(obj1)

    for(let key in obj1){
        if(obj1[key] > 1){
            return key;
        }
    }
}

//console.log(findDuplicates([1,3,4,2,2]));
console.log(findDuplicates([3,1,3,4,2]));

