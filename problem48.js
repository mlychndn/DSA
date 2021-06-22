// find pivot and pivot index for insertion sorting.

console.log(quickSort([28, 41, 4, 11, 16, 1, 40, 14, 36, 37, 42, 18]));
console.log(quickSort([12,56,8,0,78,64,56,23,21,56]))

function pivot(arr, start=0, end=arr.length-1){
        let pivot = arr[start];
        let pivotIdx = start;

        for(let i=start+1; i<arr.length; i++){
           if(pivot>arr[i]){
               pivotIdx++;
               [arr[i], arr[pivotIdx]] = [arr[pivotIdx], arr[i]]
           }
        }
        [arr[start], arr[pivotIdx]] = [arr[pivotIdx], arr[start]]
        return pivotIdx;
}

function quickSort(arr, left=0, right=arr.length-1){
if(left<right){
    let pivotIdx = pivot(arr,left,right)
    //left
    quickSort(arr, left, pivotIdx-1);
    //right
    quickSort(arr,pivotIdx+1,right);
    
}
return arr;
    
    
}



