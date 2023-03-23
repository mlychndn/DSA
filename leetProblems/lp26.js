/*
Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).

Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
*/

// method 1: using bruteforce
function removeDuplicate(arr) {
  let uniqueArray = [...new Set(arr)];
  let uniqueIndexArray = [];
  console.log(uniqueArray);
  for (let i = 0; i < arr.length; i++) {
    if (uniqueIndexArray.indexOf(arr[i]) === -1) {
      uniqueIndexArray.push(arr[i]);
    }
  }

  console.log("index", uniqueIndexArray);
}

//removeDuplicate([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);

// window sliding approach

function optimalRemoveDuplicate(arr) {
  let i = 0;
  for (j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

console.log(optimalRemoveDuplicate([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
