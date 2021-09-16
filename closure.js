"use strict";

//whatever we put in parameters and ... they continue to excist ...that closure
function createAddingFunction(num1, num2) {
  let num3 = 2;
  return function () {
    return num1 + num2 + num3;
  };
}

let AddingFunction = createAddingFunction(1, 2);

console.log(AddingFunction());

console.log();
