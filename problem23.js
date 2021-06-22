// Write a function called binary search which accepts a sorted array and a value and returns the index at which the value 
// exists. Otherwise return -1;

// binarySearch([1, 2, 3, 4, 5], 2)   //1
// binarySearch([1, 2, 3, 4, 5], 3)   //2
// binarySearch([1, 2, 3, 4, 5], 5)   //4
// binarySearch([1, 2, 3, 4, 5], 6)   //-1


function binarySearch(arr, num){
    let min =0;
    let max = arr.length -1;

    while(min<=max){
        let middleIndex = Math.floor((min+max)/2);
        if(arr[middleIndex] < num){
            min = middleIndex + 1;
        }else if(arr[middleIndex] > num){
            max = middleIndex-1;
        }else{
            return middleIndex;
        }
    }
    return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 2))   //1
console.log(binarySearch([1, 2, 3, 4, 5], 3))   //2
console.log(binarySearch([1, 2, 3, 4, 5], 5))   //4
console.log(binarySearch([1, 2, 3, 4, 5], 6))   //-1