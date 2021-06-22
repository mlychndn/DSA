// Given an array of size N containing only 0s, 1s, and 2s; sort the array in ascending order.


// time complexity O(n);
// space complexity O(1);


function ascending(arr){
    let lower = 0;
    let middle = 0;
    let higher = arr.length-1;

    while(middle <= higher){
        if(arr[middle] === 0){
            [arr[middle], arr[lower]] = [arr[lower], arr[middle]];
            middle++;
            lower++;
        }else if(arr[middle] === 1){
            middle++

        }else if(arr[middle] === 2){
            [arr[middle], arr[higher]] = [arr[higher], arr[middle]];
            higher--
        }
    }
    return arr;
}

console.log(ascending([0,2,1,2,0]));

