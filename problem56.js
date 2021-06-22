/* Given two sorted arrays arr1[] of size N and arr2[] of size M. Each array is sorted in non-decreasing order. 
Merge the two arrays into one sorted array in non-decreasing order without using any extra space.*/

// arr1 = [1, 3, 5, 7]
// arr2 = [0, 2, 6, 8, 9]

function merge(arr1, arr2){
    let results = [];
   let i=0; let j=0;
   while(i<arr1.length && j<arr2.length){
       if(arr1[i]<arr2[j]){
           results.push(arr1[i]);
           i++
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

console.log(merge([1, 3, 5, 7], [0, 2, 6, 8, 9]));