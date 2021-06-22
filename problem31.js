// Sorting Revision

function insertSort(arr){
    let i, j, currVal;
    for(i=1; i<arr.length; i++){
       currVal =arr[i];
        for(j=i-1; j>=0 && arr[j]>currVal; j--){
            arr[j+1] = arr[j];
        }
        arr[j+1] = currVal;
    }
    return arr;
}

console.log(insertSort([5,4,3,1,2]));
console.log(insertSort([19,22,11,67,5,4,78,90]));

function merge(arr1, arr2){
    let i=0;
    let j=0;
    let result = [];
    while(i<arr1.length && j<arr2.length){
        if(arr1[i]<arr2[j]){
            result.push(arr1[i]);
            i++;
        }else{
            result.push(arr2[j]);
            j++;
        }
    }

    while(i<arr1.length){
        result.push(arr1[i]);
        i++
    }

    while(j<arr2.length){
        result.push(arr2[j])
    }

    return result;
}

console.log(merge([1,4,10,12], [2,5,6]));