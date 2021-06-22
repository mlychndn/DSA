// Write a function called minSubArrayLen which accepts two parameter - an array of positive integers and positive integer
// This function should return the minimal length of contiguos subarray of which the sum is greater than or equual
// to the integer passed to the function. If there isn't one, return 0 instead.

// minSubArrayLen([2,3,1,2,4,3], 7) // 2  because [4, 3] is the smallest array.
// minSubArrayLen([2,1,6,5,4], 9) // 2  because [5, 4] is the smallest array.
// minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52) //1 because [62] is greter than 1
// minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39) //3
// minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55) //5
// minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
// minSubArrayLen([1,4,16,22,5,7,8,9,10], 95) //0


// Brute force method: Here time complexity will be O(n^2);
// space complexity: O(1)

/* function minSubArrayLen(arr, sum){
    let minLen = Infinity;
    for(let start = 0; start<arr.length; start++){
        let total = arr[start];
         if(total >= sum) return 1;
        for(let end=start+1; end<arr.length; end++){
            total = total + arr[end];
            if(total>=sum && (end-start+1)<minLen){
                minLen = (end-start+1)
            }
        }
    }

    if(minLen === Infinity) return 0;
    
    return minLen; 
    

}

*/

// function minSubArrayLen(arr, num){
//     let minlength = Infinity;
//     for(let i=0; i<arr.length; i++){
//       let sum = arr[i];
//       if(sum>=num) return 1;
//       for(let j= i+1; j<arr.length; j++){
//          sum = sum + arr[j];
//          if(sum>=num && (j-i+1)<minlength){
//            minlength = (j-i+1);
//          }
//       }
      
//     }
    
//     if(minlength === Infinity) return 0;
//     return minlength; 
//   }
  

// Window sliding approach
// Here the timecomplexity will be O(n).
// space complexity will be = O(1).
function minSubArrayLen(arr, sum){
    let start = 0;
    let end = 0;
    let total =0;
    let minLen = Infinity;

    while(start<arr.length){
        
        if(total<sum && end < arr.length){
            total = total + arr[end];
           
            end++
        }else if(total >= sum){
            minLen = Math.min(end-start, minLen)
            
            total = total - arr[start];
            start++
        }else{
            break;
        }
    }

    return minLen === Infinity ? 0 : minLen;

}

 console.log(minSubArrayLen([2,3,1,2,4,3], 7)); // 2  because [4, 3] is the smallest array.
 console.log(minSubArrayLen([2,1,6,5,4], 9)); // 2  because [5, 4] is the smallest array.
 console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); //1 because [62] is greter than 1
 console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); //3
 console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); //5
 console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)); // 2
 console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10], 95)); //0
