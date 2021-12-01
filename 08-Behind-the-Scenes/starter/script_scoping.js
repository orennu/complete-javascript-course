'use strict';
// scoping
console.log('=== this is scoping ===');

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
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1980 && birthYear <= 1996) {
      // millenial is considered a function scope variable, because it is defined with the var keyword, therefor it can be accessed from the function scope (printAge)
      var millenial = true;
      // it is possible to create new variable with the same name as out scope, the new variable is local to it's scope
      const firstName = 'James';
      // str is defined in the if scope with const, therefor it can only be accessed from this scope
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);
      // functions in strict mode are blocked scope
      function add(a, b) {
        return a + b;
      }

      // it is possible to re-assign values to variables from outer scope, be carefull with this
      output = 'NEW OUTPUT';
    }
    // str cannot be accessed from an outer scope and below line will raise ReferenceError
    // console.log(str);
    // millenial can be accessed from printAge function scope since it's a function scope variable
    console.log(millenial);
    // calling add in strict mode will raise a ReferenceError, if strict mode is disabled, add's scope becomes function scope and calling it from outside the if block and inside the printAge function scope will work
    // console.log(add(2, 3));
    // here we log the new output because we re-assigned it in the if block scope
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
