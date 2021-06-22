/* Given an array of integers. Find the Inversion Count in the array. 

Inversion Count: For an array, inversion count indicates how far (or close) the array is from being sorted. If array is already sorted then the inversion count is 0. If an array is sorted in the reverse order then the inversion count is the maximum. 
Formally, two elements a[i] and a[j] form an inversion if a[i] > a[j] and i < j. */

// Brute force method
// time complexity = O(n^2);

function  inversionCount(arr){
    let count = 0;
    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i] > arr[j]){
                count++;
                [arr[j], arr[i]] = [arr[i], arr[j]]
                
            }
            console.log(arr);
        }
    }
    console.log(arr)
    
}


// console.log(inversionCount([7, 6, 8, 5, 4, 2, 1]));


// [8, 11, 13, 19]  [1, 9, 12]   [1, 8, 9, 11, 12, 13, 19]


function mergeSort(arr){
    function merge(arr1, arr2){
        let i=0; 
        let j=0;
        let count =0;
        let result = [];
        while(i<arr1.length && j<arr2.length){
            if(arr[i]<arr2[j]){
                result.push(arr1[i]);
                i++
            }else{
                result.push(arr2[j]);
                j++
                count++;
            }
        }

        while(i<arr1.length){
            result.push(arr1[i]);
            i++;
        }

        while(j<arr2.length){
            result.push(arr2[j]);
            j++;
        }
        console.log(count);
        return result;

    }

    if(arr.length ===1) return arr;
      let count = 0;
    let middleIndex = Math.floor(arr.length/2);
    let left = arr.slice(0,middleIndex);
     count += mergeSort(left);
    let right = arr.slice(middleIndex);
     count  += mergeSort(right);

     count += merge(mergeSort(left),mergeSort(right));
     return count;
    
}


console.log(mergeSort([7, 6, 8, 5, 4, 2, 1]));