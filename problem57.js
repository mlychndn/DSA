/* Given an array arr of N integers. Find the contiguous sub-array with maximum sum. */
// N = 5
// arr = [1,2,3,-2,5] //9

// console.log(kadanesAlgo([1,2,3,-2,5]));
// console.log(kadanesAlgo([-2,-3,-4,-1]));
// console.log(kadanesAlgo([74, -72, 94, -53, -59, -3, -66, 36, -13, 22, 73, 15, -52, 75]))
// console.log(kadanesAlgo([-5, 4, 6, -3, 4, -1]));


function maxSumSubArr(arr){
    let maxSum = -Infinity;
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        for(let j=i; j<arr.length; j++){
            sum = sum + arr[j];
            if(maxSum < sum){
                maxSum = sum;
            }
           
        }
        sum = 0;
    }
    return maxSum;

}


console.log(maxSumSubArr([1,2,3,-2,5]));
console.log(maxSumSubArr([-2,-3,-4,-1]));
console.log(maxSumSubArr([74, -72, 94, -53, -59, -3, -66, 36, -13, 22, 73, 15, -52, 75]))
console.log(maxSumSubArr([-5, 4, 6, -3, 4, -1]));

function kadanesAlgo(arr){
    let maxSum = -Infinity;
    let currSum = 0;
    for(let i=0; i<arr.length; i++){
        currSum = currSum + arr[i];
        if(maxSum < currSum) maxSum = currSum;
        if(currSum < 0){
            currSum = 0;
        }
    }
    return maxSum;
}

console.log(kadanesAlgo([1,2,3,-2,5]));
console.log(kadanesAlgo([-2,-3,-4,-1]));
console.log(kadanesAlgo([74, -72, 94, -53, -59, -3, -66, 36, -13, 22, 73, 15, -52, 75]))
console.log(kadanesAlgo([-5, 4, 6, -3, 4, -1]));