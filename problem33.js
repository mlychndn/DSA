// Quick sort: Like merge sort, exploits the fact that arrays of 0 and 1 elements are always sorted.
// Works by selecting one element(called the pivot) and finding the index where the pivot shopuld end up in the sorted
// array.

// [34, 47, 15, 11, 13, 76, 23, 99, 8, 1]
// [28, 41, 11, 16, 1, 40, 14, 36, 37, 42, 18]

function pivot(arr, start=0, end=arr.length-1){
    console.log(arr);
     function swap(arr, i, j){
         let temp = arr[i];
         arr[i] = arr[j];
         arr[j] = temp;
         }
      let pivot = arr[start];
      let pivotIdx = start;
for(let i = start+1; i<arr.length; i++){
    if(pivot>arr[i]){
        pivotIdx++;
        swap(arr, pivotIdx, i);
        console.log(arr);
    }
    
}
swap(arr, start, pivotIdx);
console.log(arr);
return pivotIdx;
}


// console.log(pivot([28, 41, 11, 16, 1, 40, 14, 36, 37, 42, 18]));
console.log(pivot([34, 47, 15, 11, 13, 76, 23, 99, 8, 1]));