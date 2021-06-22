/* 
Given an array arr[] denoting heights of N towers and a positive integer K, you have to modify the height of each tower either by increasing or decreasing them by K only once. After modifying, height should be a non-negative integer. 
Find out what could be the possible minimum difference of the height of shortest and longest towers after you have modified each tower.
*/

function pivot(arr, start=0, end=arr.length-1){
    let pivot = arr[start];
    let pivotIdx = start;
    for(let i=start+1; i<arr.length; i++){
        if(pivot>arr[i]){
            pivotIdx++;
            [arr[i], arr[pivotIdx]] = [arr[pivotIdx], arr[i]];
        }
    }
    [arr[pivotIdx], arr[start]] = [arr[start], arr[pivotIdx]];
    
    return pivotIdx;
}



//console.log(getMinDiff([28, 41, 4, 11, 16, 1, 40, 14, 36, 37, 42, 18],2));
//console.log(getMinDiff([12,56,8,0,78,64,56,23,21,56],10))
//console.log(getMinDiff([1,5,8,10],2));
console.log(getMinDiff([2, 6, 3, 4, 7, 2, 10, 3, 2, 1,], 5));

function quickSort(arr, left=0, right=arr.length-1){
    if(left<right){
        let pivotIdx = pivot(arr, left, right);
        //left
        quickSort(arr,left,pivotIdx-1);
        //right
        quickSort(arr, pivotIdx+1, right);
    }
    return arr;
}

function getMinDiff(arr, k){
     
    quickSort(arr);
    console.log(arr);
    
    
    
    let n= Math.floor(arr.length/2);
    // console.log(n);;
    for(let i=0; i<arr.length; i++){
        if(i<=n){
            arr[i] = arr[i] +k;
            if(arr[i]<0){
                arr[i] = arr[i]-2*k;
            }
        }else if(i>n){
            arr[i] = arr[i] -k;
            if(arr[i]<0){
                arr[i] = arr[i]+2k;
            }
        }
    }
    console.log(arr);
    quickSort(arr);
    console.log(arr);
  return arr[arr.length-1] - arr[0];
}
    