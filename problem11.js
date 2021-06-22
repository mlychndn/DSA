// Recursion: When function is calling itself again and again, It is called recursion.

// Find factorial of number n
function factorial(num){
    let storeValue = num;
    for(let i=num-1; i>=1; i--){
        storeValue = storeValue*i;
    }
    console.log(storeValue);
}

factorial(5);
factorial(6);
factorial(4);

// now using recursion;

function factorialRecursion(num){
    if (num === 1) return 1;

    let storeValue = num;
      console.log(storeValue);
     return storeValue*factorialRecursion(num-1);


}

console.log(factorialRecursion(5));
// factorialRecursion(6);
// factorialRecursion(4);