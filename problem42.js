// Given an array (or string), the task is to reverse the array/string.
// Examples : 
 

// Input  : arr = [1, 2, 3]
// Output : arr = [3, 2, 1]

// Input :  arr = [4, 5, 1, 2]
// Output : arr = [2, 1, 5, 4]



//ES2015 
function reverse(arr){
     
     let pointer1 = 0;
     let pointer2 = arr.length-1;
     while(pointer1<pointer2){
         [arr[pointer1], arr[pointer2]] = [arr[pointer2], arr[pointer1]];
         pointer1++;
         pointer2--;
     }
     return arr;
}

//General method;

function reverseArray(arr){
    let pointer1 = 0;
    let pointer2 = arr.length-1;
    
    function swap(arr,i,j){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] =temp;
    }
    while(pointer1<pointer2){
        swap(arr,pointer1,pointer2);
        pointer1++;
        pointer2--
    }
    return arr;
}

console.log(reverseArray([1, 2, 3]));
console.log(reverseArray([4, 5, 1, 2]));