'use strict';
// scoping

// calcAge is defined in the global scope (aka global function)
function calcAge(birthYear) {
  // age is defined in the function scope therefore it's a local variable
  const age = new Date().getFullYear() - birthYear;
  // firstName is found during variable lookup in the outer scope (global scope in this case)
  console.log(firstName);

  // printAge is defined in the calcAge function scope
  function printAge() {
    // output is defined in the printAge function scope, it cannot be accessed anywhere besides printAge scope
    // age and birthYear are found during variable lookup in the outer scope (calcAge function scope in this case)
    // firstName is also found during variable lookup in the outer scope, but in the global scope
    const output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);
  }
  // printAge can be called only from the scope where it's defined (calcAge function scope in this case)
  printAge();

  // trying to use output variable here will result in ReferenceError since this variable is defined in printAge which is inner scope to calcAge and not in the scope chainc(scope chain is one way from inner scope to outer scope and not the other way around)
  //   console.log(output);

  return age;
}

// firstName is defined in the global scope (aka global variable)
const firstName = 'Oren';
calcAge(1980);

// calling printAge from this scope will fail with ReferenceError
// printAge();
