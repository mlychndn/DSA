// Maximum and minimum of an array using minimum number of comprasions.
// const arr = [18, 27, 4, 29, 14]

function maxAndMin(arr){
    let max = arr[0];
    let min = arr[0];

    for(let i=0; i<arr.length; i++){
        if(arr[i]>max){
            max = arr[i];
        }

        if(arr[i]<min){
            min= arr[i];
        }
    }

    console.log(`max: ${max}, min: ${min}`);
}

maxAndMin([18, 27, 4, 29, 14]);