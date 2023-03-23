// Memoization

function addTo80(n) {
  console.log("taking long time!⛔⛔");
  return n + 80;
}

/*console.log(addTo80(5));
console.log(addTo80(5));
console.log(addTo80(5)); */

let cache = {};
