// Bubble sorting: We basically try to bubbles up largest value to the end of the array.

function bubbleSort(arr){
    let isSwapped ;
    for(let i= arr.length-1; i>0; i--){
        for(let j=0; j<arr.length; j++){
            if(arr[j] > arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                 isSwaped = true;
            }
        }
        if(!isSwaped){
            break;
        }
    }
    return arr;
}

console.log(bubbleSort([7, 10, 4, 3, 20, 15]));
console.log(bubbleSort([15,81,76,89,3,12,18,0,78,56,11,90,43]));

// selection sorting : here basically we sort data from starting of the elements. 
// similar to bubble sort, but instead of first placing large values in sorted position it places small values into
// sorted position

function selectionSort(arr){
    for(let i=0; i<arr.length; i++){
       
        for(let j=i+1; j<arr.length; j++){
            if(arr[i] > arr[j]){
                [arr[i], arr[j]] = [arr[j], arr[i]]
            }
        }
    }
    return arr;
}

console.log('Below are selection sort result=============================================')
console.log(selectionSort([7, 10, 4, 3, 20, 15]));
console.log(selectionSort([15,81,76,89,3,12,18,0,78,56,11,90,43]));


// for both of the sorting whether it's a bubble sorting or selection sorting, time complexity for both will be O(n^2);
// space Complexity: O(n);