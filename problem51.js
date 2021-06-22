/* 
 Given an array, rotate the array by one position in clock-wise direction.
 Input:
  N = 5
  let A = [1, 2, 3, 4, 5];
  output: [5, 1, 2, 3, 4]
*/

function clockWise(arr){
    let n = arr.length-1;
    let x= arr[n];
    for(let i=n-1; i>=0; i--){
        arr[i+1] = arr[i];
        }
        arr[0]=x;
    return arr;
}

console.log(clockWise([1, 2, 3, 4, 5]));
console.log(clockWise([9, 8, 7, 6, 4, 2, 1, 3]));
console.log(clockWise([12, 17, 19, 34, 56, 78, 82]));