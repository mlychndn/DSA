// merge([[1, 10, 50], [2, 14, 99,100]]) ====> [1, 2, 10, 14, 50, 99, 100]

function merge(arr1, arr2){
    let i=0;
    let j=0;
    let result = [];

    while(i<arr1.length && j<arr2.length){
        if(arr1[i]<arr2[j]){
            result.push(arr1[i]);
            i++;
        }else{
            result.push(arr2[j]);
            j++;
        }
    };

    while(i<arr1.length){
        result.push(arr1[i]);
        i++
    }
    while(j<arr2.length){
        result.push(arr2[j]);
        j++;
    }

    return result;
}

console.log(merge([1, 10, 50], [2, 14, 99,100]));