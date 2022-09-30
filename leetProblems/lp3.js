let str = "abcaabcdba";
let str1 = "abcabcbb";
let str2 = "bbbbb";
let str3 = "pwwkew";

function lengthOfLongestSubstring(str) {
  let subStrArr = [];

  // let lengthCountOfSubstr;
  for (let i = 0; i < str.length; i++) {
    let substr = str[i];
    for (let j = i + 1; j < str.length; j++) {
      if (substr.indexOf(str[j]) === -1) {
        substr = substr + str[j];
      } else if (substr.indexOf(str[j]) !== -1) {
        break;
      }
    }
    subStrArr.push(substr.length);
  }

  console.log(Math.max(...subStrArr));
}

lengthOfLongestSubstring(str);
lengthOfLongestSubstring(str1);
lengthOfLongestSubstring(str2);
lengthOfLongestSubstring(str3);

function uniqueStr(str) {
  let mySet = new Set();
  for (let key of str) {
    mySet.add(key);
  }
  console.log(mySet);
}

uniqueStr(str);
