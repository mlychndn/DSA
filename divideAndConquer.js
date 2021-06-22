// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

function divideAndConqurer(arr, num){
    let min = 0;
    let max = arr.length-1;

    while(min<=max){
        let middleIndex = Math.floor((min+max)/2);

        if(num < arr[middleIndex]){
            max = middleIndex-1;
         }else if(num > arr[middleIndex]){
             min = middleIndex+1;
         }else{
             return middleIndex;
         }

        }
        return -1;

}

const index = divideAndConqurer([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 5);
console.log(index);