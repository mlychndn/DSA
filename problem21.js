// Given an array of integers, Write a function called  maxSubarraySum, which finds the maximum  sum of subarray
// with the length of the number passed to the function.
// Note that  a subarray must consist of consecutive elements from the original array.
// maxSubarraySum([100,200,300,400],2) //700
// maxSubarraySum([1,4,2,10,23,3,1,0,20], 4) // 39
// maxSubarraySum([-3,4,0,-2,6,-1],2)  //5
// maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2) //5
// maxSubarraySum([2,3], 3) //null

//Window sliding approach

function maxSubarraySum(arr, num){
    let maxSum = 0;
    let tempSum = 0;
    if(arr.length < num) return null;
    for(let i=0; i<num; i++){
        maxSum = maxSum + arr[i];
    }
    tempSum = maxSum;

    for(let i=num; i<arr.length; i++){
        tempSum = tempSum - arr[i-num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}

console.log(maxSubarraySum([100,200,300,400],2)); //700
console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)); // 39
console.log(maxSubarraySum([-3,4,0,-2,6,-1],2));  //5
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); //5
console.log(maxSubarraySum([2,3], 3)); //null