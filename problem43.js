// Write a function to return minimum and maximum in an array. Your program should make the minimum number of 
//comparisons. 


// 1. Using javascript inbuilt sort method.
// time complexity = O(nlogn);\
// space complexity = O(n);
function ascending(arr){
    let newArr = arr.sort((a,b)=>{
        return a-b;
    })
    return newArr;
}

function descending(arr){
    let newArr = arr.sort((a,b)=>{
        return b-a;
    })
    return newArr;
}

function maxAndMin(arr){
    let max = descending(arr)[0];
    let min = ascending(arr)[0];
    return [max, min];
}

console.log(ascending([12,3,56,89,76,09,56]));
console.log(descending([12,3,56,89,76,09,56]));

console.log(maxAndMin([12,3,56,89,76,09,56]));

console.log(getMaxAndMin([12,3,56,89,76,09,56]));


//2. using loop
// time complexity = 0(n)
// space complexity = O(1);
function getMaxAndMin(arr){
    let min = arr[0];
    let max = arr[0];

    for(let i=0; i<arr.length; i++){
        if(arr[i]>max) max=arr[i];
        if(arr[i]<min) min = arr[i];

        
    }
    return [max, min];
}