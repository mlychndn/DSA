// Radix Sort Helpers

// In order to implement radix sort, It's helpful to build a few helper functions first:
// getDigit(num, place)- returns the digit in num at the given place value.

// getDigit(12345, 0); //5
// getDigit(12345, 1); //4
// getDigit(12345, 2); //3
// getDigit(12345, 3); //2
// getDigit(12345, 4); //1
// getDigit(12345, 5); //0

function getDigit(num, place){
    // let digit = Math.floor((Math.abs(num)/(10**place))%10);
      let digit = Math.floor((Math.abs(num)/Math.pow(10,place))%10);
       return digit;
}


function digitCount(num){
    let count = Math.floor(Math.log10(num)) + 1;
    return count;
}
// console.log(digitCount(12345, 0)); //5
// console.log(digitCount(12345, 1)); //4
// console.log(digitCount(12345, 2)); //3
// console.log(digitCount(12345, 3)); //2
// console.log(digitCount(12345, 4)); //1
// console.log(digitCount(12345, 5)); //0

// mostDigits([13, 43, 56, 89, 12, 34, 21, 19, 345, 6789, 123456, 9807678]);   // 7
// mostDigits([45, 890, 786, 2345, 6789, 12345, 78908798]);   //8
// mostDigits([1, 23, 456, 1234, 56789, 908]) //5

function mostDigits(arr){
    let max = -Infinity;
    for(let i=0; i<arr.length; i++){
        let count = digitCount(arr[i]);
        if(count>max) max = count;
    }
    return max;
}

// console.log(digitCount(12345));
// console.log(digitCount(13));
// console.log(digitCount(43));
// console.log(digitCount(56));
// console.log(digitCount(89));
// console.log(digitCount(12));
// console.log(digitCount(34));
// console.log(digitCount(21));
// console.log(digitCount(19));
// console.log(digitCount(345));
// console.log(digitCount(6789));
// console.log(digitCount(123456));
// console.log(digitCount(9807678));

console.log(mostDigits([13, 43, 56, 89, 12, 34, 21, 19, 345, 6789, 123456, 9807678]));   // 7
console.log(mostDigits([45, 890, 786, 2345, 6789, 12345, 78908798]));   //8
console.log(mostDigits([1, 23, 456, 1234, 56789, 908])); //5
