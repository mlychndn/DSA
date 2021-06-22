// Write a program to reverse an array or String.
// Input: arr[] = [1, 2, 3]
// output: arr[] = [3, 2, 1]

// .            .
// [1, 2, 3, 4, 5]

function reverse(arr1){
    if(arr1.length === 1){
        console.log(arr1);
        return;
    }
    let n = Math.ceil(arr1.length/2);
    
    for(let i=0; i<n; i++){
       let pointer1 = arr1[i];
       let pointer2 = arr1[arr1.length-1-i];
       let c = pointer1;
       pointer1 = pointer2
       arr1[i] = pointer1;
       pointer2 = c;
       arr1[arr1.length-1-i] = pointer2;
    }
    console.log(arr1);
}

reverse([1, 2, 3, 4, 5]);
reverse([1,2, 3, 4]);
reverse([1]);

