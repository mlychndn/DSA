// const arr1 = [14, 10, 50, 1, 100, 99, 2]

function division(arr){
    console.log(arr);
     console.log(arr.slice(0,3)); //[14,10,50]
    console.log(arr.slice(3,arr.length)) //[1, 100, 99, 2]
    console.log(arr.length);
}



function division1(arr){
    middleIndex = Math.floor(arr.length/2);
    console.log(middleIndex);
    let arr1 = arr.slice(0, middleIndex);
    let arr2 = arr.slice(middleIndex);
    console.log(arr1, arr2);
}

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


console.log(mergeSort([14, 10, 50, 1, 100, 99, 2]));  //7/2==== 3.5 ===== 4)
console.log(mergeSort([12,6,10,2,5,4,1]))