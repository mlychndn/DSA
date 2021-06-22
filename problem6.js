//Write a function called sumZero which accepts a sorted array of integers. The functions should find the first pair
// where the sum is 0. Return an array that includes both values that sum to zero or undefined, if a pair does not
// exist.

// sumZero([-3, -2, -1, 0, 1, 2, 3])  //[-3, 3]
// sumZero([-2, 0, 1, 2, 3]) //undefined
// sumZero([-4,-3, -2,-1,0, 1,2,3])  //undefined

function sumZero(array){
    let left = 0;
    let right = array.length-1;

    while(left < right){
         let pointer1 = array[left];
         let pointer2 = array[right];
         if(pointer1 + pointer2 === 0){
             return [pointer1, pointer2];
         }else if(pointer1 + pointer2 >0){
              right--;
         }else{
              left++;
         }
    }
    return 'not found!'
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));
console.log(sumZero([-2, 0, 1, 2, 3]));
console.log(sumZero([-4,-3, -2,-1,0, 1,2,3]));

// linear time complexity O(n);