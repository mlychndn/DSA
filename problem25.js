// Insertion sorting: Array is virtually split into a sorted and unsorted part.
// Values from unsorted part are picked and placed at the correct position in the second part.
// 1. Iterate from arr[1] to arr[n] over the array
// 2. Compare the current element(key) to its predecessor
// 3. If the key elements is smaller than predecessor compare it to the elements before.
/* 

[4, 3, 2, 10, 12, 1, 5, 6]
    -
[3,4,2,10,12,1,5,6]
     -
 [2, 3, 4, 10, 12, 1, 5, 6]    
*/

function insertionSort(arr){
    let i, currVal, j;
    for(i=1; i<arr.length; i++){
        currVal = arr[i];
        for(j=i-1; j>=0 && arr[j]> currVal; j--){
            arr[j+1] = arr[j];
        }
        console.log(j);
        arr[j+1] = currVal;
        console.log(arr);
    }
    return arr;
}

console.log(insertionSort([4, 3, 2, 10, 12, 1, 5, 6]));