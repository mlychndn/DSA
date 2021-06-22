/* 
   Given an array and a number k where k is smaller than the size of the array, we need to find the k’th smallest 
   element in the given array. It is given that all array elements are distinct.
*/

// Merge Sort = It's a combination of two things: merging and sorting;
// exploits the fact that arrays of 0 or 1 elements are always sorted.

// [1, 2, 4, 10] [3, 8, 9,11] ===> [1, 2, 3, 4, 8, 9, 10, 11]

function merge(arr1, arr2){
    let i=0;
    let j=0;
    let results = [];

    
    while(i<arr1.length && j<arr2.length){
        if(arr1[i]< arr2[j]) {
            results.push(arr1[i]);
            i++;
        }else{
            results.push(arr2[j]);
            j++;
        }
    }

    while(i<arr1.length){
        results.push(arr1[i]);
        i++;
    }

    while(j<arr2.length){
        results.push(arr2[j]);
        j++;
    }
    
    return results;
}




function mergeSort(arr){
    if(arr.length === 1) return arr;
    let n = Math.floor(arr.length/2);
    let left= mergeSort(arr.slice(0,n));
    let right = mergeSort(arr.slice(n));
    return merge(left,right);
    
}

console.log(mergeSort([11,9,7,34,78,90,56,43]));

function kthMax(arr, k){
    let kthMax = mergeSort(arr)[k-1];
    return kthMax;
}

console.log(kthMax([11,9,7,34,78,90,56,43], 6));