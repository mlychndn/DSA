function windowSlide(arr, num){
  console.log(arr);
    let maxSum = 0;
    let tempSum = 0;
    for(let i=0; i<num; i++){
        maxSum = maxSum + arr[i];
        
    }
    tempSum = maxSum;
    for(let j=num; j<arr.length; j++){
      tempSum = tempSum - arr[j-num] + arr[j];
      maxSum = Math.max(maxSum, tempSum);
      return maxSum;
    }
}

// console.log(windowSlide([1, 2, 5, 2, 8, 1, 5], 2));
// console.log(windowSlide([1, 2, 5, 2, 8, 1, 5], 4));



//2. 
function minSubArrayLen(arr, num){
  let minlength = Infinity;
  for(let i=0; i<arr.length; i++){
    let sum = arr[i];
    if(sum>=num) return 1;
    for(let j= i+1; j<arr.length; j++){
       sum = sum + arr[j];
       if(sum>=num && (j-i+1)<minlength){
         minlength = (j-i+1);
       }
    }
    
  }
  return minlength;
}

console.log(minSubArrayLen([2,3,1,2,4,3],7));
console.log(minSubArrayLen([2,1,6,5,4], 9));
console.log(minSubArrayLen([3,1,7,11,2,9,8,21,62,13,19],52));
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],55));
console.log(minSubArrayLen([4,3,3,8,1,2,3],11));
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],95));
