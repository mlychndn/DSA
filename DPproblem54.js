/*
Given an array of N integers arr[] where each element represents the max number of steps that can be made forward 
from that element. Find the minimum number of jumps to reach the end of the array (starting from the first element). If an element is 0, then you cannot move through that element.
*/

function minJumps(arr){
    let jump = 0;
    let idx = 0;

    //return jump;
     while(idx < arr.length-1){
         if(arr[idx] === 0) return 'not possible';
         idx = idx + arr[idx];
         jump++;
         console.log(`jump: ${jump}, idx: ${idx}, arr: ${arr[idx]}`);
         
     }
     return jump;
}

console.log(minJumps([1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9]));
console.log(minJumps([2, 3, 1, 1, 2, 4, 2, 0, 1, 1]));
                            // 1 2  3      4      5 6