// Write a function called productOfArray which takes an Array of numbers  and returns the product  of them all.
//  productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function productOfArray(arr){
    let storeValue = 1;
    for(let i=0; i<arr.length; i++){
        storeValue = storeValue * arr[i];
    }

    return storeValue;
}

console.log(productOfArray([1,2,3]));
console.log(productOfArray([1,2,3,10]));

// for above solution timeComplexity(linear) // O(n).

function recursionProductOfArray(arr){
    if (arr.length === 0) return 1;
     const a = arr.pop();
     let storeValue = a;
     return storeValue*recursionProductOfArray(arr);                                                                                          
}

console.log(recursionProductOfArray([1,2,3]))
console.log(recursionProductOfArray([1,2,3,10]))
console.log(recursionProductOfArray([1,2,3,7,9,4]))
console.log(recursionProductOfArray([7,6,2]))


// some Array properties revision:
function props(arr){
    console.log(arr.splice(1));
    console.log(arr);

}

props([1,2,3])
props([1,2,3,10])
props([1,2,3,7,9,4])
props([7,6,2])
