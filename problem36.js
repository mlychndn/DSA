// quick sorting

function quickSort(arr, left=0, right=arr.length-1){
    function pivot(arr, start=0, end=arr.length-1){
        function swap(arr, i, j){
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }

        let pivot = arr[start];
        let pivotIdx = start;

        for(let i=start+1; i<=end; i++){
            if(pivot>arr[i]){
                pivotIdx++;
                swap(arr, pivotIdx, i);
            }
        }
        swap(arr, pivotIdx, start);
        console.log(arr);
        return pivotIdx;
    }
  if(left<right){

    let pivotIndex = pivot(arr, left, right);
    //left
    quickSort(arr, left, pivotIndex-1);
    //right
    quickSort(arr, pivotIndex+1, right);

  }

  return arr;
    
}


console.log(quickSort([34, 47, 15, 11, 13, 76, 23, 99, 8, 1]));