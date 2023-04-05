

  if (str1.length !== str2.length) return false;

  let obj = {};
  let obj2 = {};

  for (let values of str1)
      return false;
    } else if (obj[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}

console.log(sameFrequency1(182, 281));
console.log(sameFrequency1(34, 14));
console.log(sameFrequency1(3589578, 5879385));
console.log(sameFrequency1(22, 222));

//2. using only two for loop in frequency method.
// Linear time complexity.

function sameFrequency1(num1, num2) {
  str1 = String(num1);
  str2 = String(num2);

  if (str1.length !== str2.length) return false;

  let obj = {};

  for (let values of str1) {
    obj[values] = (obj[values] || 0) + 1;
  }

  for (let i = 0; i < str1.length; i++) {
    if (!obj[str2[i]]) {
      return false;
    } else {
      obj[str2[i]] = obj[str2[i]] - 1;
    }
  }
  return true;
}
