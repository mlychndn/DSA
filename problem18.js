//Given an array  and a number K where K is smaller than size of array, the task is to find the Kth smallest element
// in the given array. It is given that all array elements are distinct.

// kSmallestElement([7,10,4,3,20,15],3) =====> 7
// kSmallestElement([7,10,4,3,20,15],4) =====> 10


// time complexity of inbuilt js sort method is O(nlog(n));
/*function kSmallestElement(arr, num){
    arr.sort((num1, num2)=>{
        return num1-num2;
    })
    console.log(arr);

    console.log(arr[num-1]);
}

kSmallestElement([7,10,4,3,20,15],3);
kSmallestElement([7,10,4,3,20,15],4);
*/

function bubbleSorting(arr, num){
  for(let i=arr.length; i>0; i--){
      for(let j=0; j<i-1; j++){
          if(arr[j]>arr[j+1]){
              [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
          }
      }
  }
  return arr[num-1];
}

console.log(bubbleSorting([7,10,4,3,20,15],3));
console.log(bubbleSorting([7,10,4,3,20,15],4));