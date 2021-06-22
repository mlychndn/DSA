// Merge Sort: time complexity= O(nlogn);
// space complexity: O(n);

function mergeSort(arr){
    function merge(arr1, arr2){
        let i=0; 
        let j=0;
        let result = [];
        while(i<arr1.length && j<arr2.length){
            if(arr[i]<arr2[j]){
                result.push(arr1[i]);
                i++
            }else{
                result.push(arr2[j]);
                j++
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
        return result;
    }

    if(arr.length ===1) return arr;

    let middleIndex = Math.floor(arr.length/2);
    let left = arr.slice(0,middleIndex);
     let arr3 = mergeSort(left);
    let right = arr.slice(middleIndex);
     let arr4 = mergeSort(right);

     return merge(arr3,arr4);
    
}



console.log(mergeSort([12,10,6,5,4,2,1]));


//                                              32
//                           16                                  16
//                  8                8                  8                   8
//             4        4        4      4           4       4          4          4
//         2      2  2     2   2   2  2   2       2   2   2   2      2   2      2    2
//      1    1   1 1 1 1  1 1 1 1  1 1 1 1 1 1   1 1 1 1 1 1 1 1    1  1 1 1   1 1  1 1
// log2^5  for decomposition
// n  for comprasion per decomposition
// total time complexity = O(nlogn) 