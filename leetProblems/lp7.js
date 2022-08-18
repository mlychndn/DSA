//alert("Malay");
function reverseString(x) {
  let minlimit = Math.pow(2, 31) * -1;
  let maxlimit = Math.pow(2, 31) - 1;
  console.log(minlimit, maxlimit);
  if (x === 0) return 0;
  let num;
  if (x > 0) {
    num = String(x).split("").reverse().join("");
  }

  if (x < 0) {
    num = `-${String(x)
      .split("")
      .slice(1, String(x).split("").length)
      .reverse()
      .join("")}`;
  }

  if (num > maxlimit || num < minlimit) {
    return 0;
  }
  return +num;
}

console.log(reverseString(-123));
console.log(reverseString(123));
console.log(reverseString(120));
