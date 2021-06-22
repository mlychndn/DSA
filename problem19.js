// Given an array of size N containing only 0s, 1s, and 2s; sort the array in ascending order.
// arr= [0 2 1 2 0]
// Output:
// [0 0 1 2 2]

// using javcaScript inbuilt sort method. 
// time complexity = O(nlog(n));
function ascending(arr){
    arr.sort((num1, num2) => {
        return num1 - num2;
    })

    console.log(arr);
}

ascending([0, 2, 1, 2, 0]);

// using bubble sorting;

function bubbleSort(arr){
    let isSwaped;
    for(let i=arr.length; i>0; i--){
        for(let j=0; j<i-1; j++){
            if(arr[j] > arr[j+1]){
                let swap = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = swap;

                isSwaped = true;
            }
           
        }
        if(!isSwaped){
            break;
        }
    }
    return arr;
}

bubbleSort([0, 2, 1, 2, 0]);