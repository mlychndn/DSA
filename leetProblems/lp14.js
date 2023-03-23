/* 
Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".

Input: strs = ["flower","flow","flight"]
Output: "fl"

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
*/

//Brute force method:

function longestCommonPrefix(strs) {
  if (strs.length === 1) return strs[0];
  if (strs.length === 0) return "";
  let firstStr = strs[0];
  let matchPrefix = "";
  for (let i = 1; i < strs.length; i++) {
    for (let j = 0; j < firstStr.length; j++) {
      if (firstStr[j] === strs[i][j]) {
        matchPrefix += firstStr[j];
      } else {
        break;
      }
    }
    firstStr = matchPrefix;
    matchPrefix = "";
  }
  return firstStr;
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));

// effecient way

function effecientLongestCommonPrefix(strs) {
  if (strs.length === 0) return "";
  if (strs.length === 1) return strs[0];
  let prefixStr = "";
  let sortedStr = strs.sort();
  console.log(sortedStr);
  for (let i = 0; i < sortedStr[0].length; i++) {
    if (sortedStr[0][i] === sortedStr[sortedStr.length - 1][i]) {
      prefixStr += sortedStr[0][i];
    } else {
      break;
    }
  }
  // console.log("str", prefixStr);
  return prefixStr;
}

effecientLongestCommonPrefix(["flower", "flow", "flight"]);
