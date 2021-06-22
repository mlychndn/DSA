//Write a function called recursiveRange which accepts a number and adds up all the numbers
//from 0 to the number passed to the function.
// recursiveRange(6)
// recursiveRange(10)

function recursiveRange(num){
    return (num*(num+1))/2;
}

console.log(recursiveRange1(6));
console.log(recursiveRange1(10));
// time complexity: linear;
// spaceComplexity: O(1);


function recursiveRange1(num){
    if(num === 0) return 0;
     let sum = num;
     return sum+recursiveRange1(num-1);

}
