// Recursion: When a function is calling itself again and again, It is called Recursion.
// In recursion we have to take care of two things.
// 1. base case
// 2. Different Input.

// craete a function which gives the factorial of any number.

// Method 1. Using loop:

function factorail(num){
    let factorial = num;
    for(let i= num-1; i>1; i--){
        factorial = factorial * i;
    }
    return factorial;

}

console.log(factorail(5));
console.log(factorail(3));


// Method 2: Using Recursion
function factorialRecursion(num){
    if(num === 1) return 1;
    let storeValue = num;

    return storeValue * factorialRecursion(num-1);


}

console.log(factorialRecursion(5));


// Write a function called power which accepts a base and exponent. The function should return power of the base
// to the exponent. This function should mimic the functionality of Math.pow()
// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(num1, num2){
    if(num1 === 0) return undefined;
    
    if(num2 === 0) return 1;
     let storeValue = num1;
     return storeValue * power(num1, num2-1);

}

console.log(power(2,0));
console.log(power(2,2));
console.log(power(2,4));