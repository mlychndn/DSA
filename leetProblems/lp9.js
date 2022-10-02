/* 
Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward.

For example, 121 is a palindrome while 123 is not.
*/

function palindrome(num) {
  const numArr = String(num).split("");
  let flag = true;
  let i = 0;
  let j = numArr.length - 1;

  if (numArr.length === 0) return false;
  if (numArr.length === 1) return true;

  while (i < j) {
    if (numArr[i] === numArr[j]) {
      flag = true;
      i++;
      j--;
    } else if (numArr[i] !== numArr[j]) {
      return false;
    }
  }

  return flag;
}

console.log(palindrome(123));
console.log(palindrome(121));
