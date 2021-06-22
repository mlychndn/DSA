// Selection sorting: Sorts an array by repeatedly finding the minimum element from unsorted part putting it at the
// beginning.


// Here time complexity will O(n^2) and space complexity = O(1);
function selectionSort(arr){
    for(let i=0; i<arr.length; i++){
         let lowest = i;
        for(let j= i+1; j<arr.length; j++){
            if(arr[lowest] > arr[j]){
                let temp = arr[lowest];
                arr[lowest] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

console.log(selectionSort([64, 25, 12, 22, 11]));