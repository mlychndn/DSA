/* Given a string s, return the longest palindromic substring in s.

A string is called a palindrome string if the reverse of that string is the same as the original string.

Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.

*/

function isPalindrome(str) {
  if (str.length === 0) return false;
  if (str.length === 1) return true;
  let i = 0;
  let j = str.length - 1;
  let flag = true;
  while (i < j) {
    if (str[i] === str[j]) {
      flag = true;
      i++;
      j--;
    } else {
      return false;
    }
  }
  return flag;
}

function longestPalindrome(str) {
  let subStrArr = [];
  let countArr = [];
  let palindromeStr = "";
  let max = 0;
  for (let i = 0; i < str.length; i++) {
    let subStr = str[i];
    for (let j = i + 1; j < str.length; j++) {
      subStr += str[j];
      if (isPalindrome(subStr)) {
        let count = subStr.length;
        subStrArr.push(subStr);
        countArr.push(count);
      }
    }
  }

  subStrArr.forEach((str, i) => {
    if (str.length > max) {
      max = str.length;
      palindromeStr = str;
    }
  });

  return palindromeStr;
}

// longestPalindrome("babad");
// console.log(isPalindrome("babab"));
// console.log(isPalindrome("a"));
// console.log(isPalindrome("abc"));

console.log(longestPalindrome("babad"));
console.log(longestPalindrome("cbbd"));
