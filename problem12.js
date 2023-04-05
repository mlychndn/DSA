// Example of closures. here b is forming closures with outer lexical scopes.
// combination of functions with its surrounding state(lexical enivornment) is called closures.

function a() {
  const b = 10;
  console.log(b);

  setTimeout(() => {
    console.log("Value of b is : ", b);
  }, 5000);

  console.log("While loop is implemented");

  let startDate = new Date().getTime();
  let endDate = startDate;
  while (endDate < startDate + 10000) {
    endDate = new Date().getTime();
  }

  console.log("While loop completes");
}

a();
