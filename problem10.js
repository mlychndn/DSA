// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and check wheteher
// there are any duplicates among the arguments passed in. You can solve this using the frequency counter pattern or
// multiple pointers pattern.
// areThereDuplicate(1,2,3);
// areThereDuplicates(1,2,2);
// areThereDuplicates('a', 'b', 'c', 'a')


// 1. By using Frequency counter pattern.
// time complexity O(n) and space complexity O(n).
function areThereDuplicate(...params){
    if(params.length === 0) return true;
     

     let obj = {};

     for(let values of params){
         obj[values] = ((obj[values] || 0) + 1)
     };

     for(let key in obj){
         if(obj[key] !== 1){
             return false;
         }
     }
  return true;
}

console.log(areThereDuplicate(1,2,3));
console.log(areThereDuplicate(1,2,2));
console.log(areThereDuplicate('a', 'b', 'c', 'a'));

//2. By using multiple pointers pattern

