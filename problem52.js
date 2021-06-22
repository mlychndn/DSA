/* function minSubArrayLength(arr, num){
  let minLength = Infinity;
  let total = 0;
  for(let i=0; i<arr.length; i++){
      total = arr[i];
      if(total >= num) return 1;
    for(let j= i+1; j<arr.length; j++){
      total = total + arr[j];
      if(total>=num && (j+i-1)<minLength){
          minLength = (j+i-1);
      }
    }
  }
  return minLength = Infinity ? 0 : minLength;
}


console.log(minSubArrayLength([2, 3, 1, 2, 4, 3], 7)); //2
console.log(minSubArrayLength([2, 1, 6, 5, 4], 9)); // 2
console.log(minSubArrayLength([3, 1, 7, 11, 2, 9, 8, 21, 62, 13, 19], 52));//1
console.log(minSubArrayLength([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); //5
console.log(minSubArrayLength([4, 3, 3, 8, 1, 2, 3], 11));//2
console.log(minSubArrayLength([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)); //0
*/

// Given an array arr of N integers. Find the contiguous sub-array with maximum sum.

// Brute force:
// time complexity = O(n^2);
function maximumSum(arr){
  let maxSum = -Infinity;
  let sum = 0;
  for(let i=0; i<arr.length; i++){
    for(let j=i; j<arr.length; j++){
      sum = sum + arr[j];
      if(sum>maxSum) maxSum = sum;
    }
    sum = 0;
  }
  return maxSum;
}

console.log(maximumSum([1,2,3,-2,5]));
console.log(maximumSum([-2,-3,-4,-1]));
console.log(maximumSum([74, -72, 94, -53, -59, -3, -66, 36, -13, 22, 73, 15, -52, 75]))
console.log(maximumSum([-5, 4, 6, -3, 4, -1]));

function kadanesAlgo(arr){
  let maxSum = -Infinity;
  let currSum = 0;
  for(let i=0; i<arr.length; i++){
    currSum = currSum + arr[i];
    if(maxSum<currSum) maxSum = currSum;
    if(currSum<0) currSum =0;
  }
  return maxSum;
}

console.log(kadanesAlgo([1,2,3,-2,5]));
console.log(kadanesAlgo([-2,-3,-4,-1]));
console.log(kadanesAlgo([74, -72, 94, -53, -59, -3, -66, 36, -13, 22, 73, 15, -52, 75]))
console.log(kadanesAlgo([-5, 4, 6, -3, 4, -1]));