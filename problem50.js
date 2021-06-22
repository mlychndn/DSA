// sorting revision

//Bubble Sorting: Time complexity O(n^2);
// space complexity = O(1);
let arr1 = [7, 10, 4, 3, 20, 15];

function bubbleSort(arr){
    for(let i= arr.length-1; i>0; i--){
        let isSwaped;
        for(let j=0; j<arr.length;j++){
            if(arr[j]>arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
                isSwaped = true;
            }
            
        }
        if(!isSwaped){
            break;
        }
    }
    return arr;
}

//console.log(bubbleSort([7,10,4,3,20,15]));


// Selection sort:

function selectionSort(arr){
   for(let i=0; i<arr.length; i++){
       for(let j=0; j<arr.length; j++){
           if(arr[j] > arr[j+1]){
               [arr[j+1], arr[j]] = [arr[j], arr[j+1]];
               
           }
           console.log(arr);
       }
   }
   return arr;
}

// console.log(selectionSort([7,10,4,3,20,15]));

// minSubArrayLength;
console.log(minSubArrayLength([2, 3, 1, 2, 4, 3], 7)); //2
console.log(minSubArrayLength([2, 1, 6, 5, 4], 9)); // 2
console.log(minSubArrayLength([3, 1, 7, 11, 2, 9, 8, 21, 62, 13, 19], 52));//1
console.log(minSubArrayLength([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); //5
console.log(minSubArrayLength([4, 3, 3, 8, 1, 2, 3], 11));//2
console.log(minSubArrayLength([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)); //0

function minSubArrayLength(arr, sum){
    let start = 0;
    let end = 0;
    let total = 0;
    let arrLen = Infinity;
while(start < arr.length){
    
    if(total<sum && end<arr.length){
        total += arr[end];
        end++;
    }else if(total >= sum){
        if(arrLen > (end-start)) arrLen = (end-start);
        total = total - arr[start];
        start++
   }else{
       break;
   }
}

return arrLen === Infinity ? 0 : arrLen;

}
