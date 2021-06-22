//SLIDING WINDOW APPROACH
// Write a function called maxSubarraySum which accepts an array of integers and a number called n.
// The function should calculate the maximum sum of n consecutive elements in the array

// maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2) //10
// maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4) //7
// maxSubarraySum([4, 2, 1, 6],1) //6
// maxSubarraySum([4, 2, 1, 6, 2], 4) //13
// maxSubarraySum([], 4) //null

//1. General Approach:

function maxSubarraySum(arr, num){
        if(arr.length < num) return null;

        let max = -Infinity;
        
        for(let i=0; i<arr.length-num+1; i++){
                let temp = 0;
                for(let j=0; j<num; j++){
                        temp = temp + arr[i+j];
                }

                if(max<temp) max=temp;
        }
        return max;
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); 
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); 
console.log(maxSubarraySum([4, 2, 1, 6],1));
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4));
console.log(maxSubarraySum([], 4)); 

// In above approach the time complexity will O(n^2);

// Sliding Window approach
// This pattern involves a window which can either be an array or number from one position to another./
// Depending on certain condition, the window either increases or closes (and a new window is created)
// Very useful for keeping track of a subset of data in an array/string etc.

