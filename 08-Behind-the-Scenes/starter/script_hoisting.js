'use strict';
// hoisting
console.log('=== this is hoisting ===');

/*
// variables hoisting
console.log(me); // undefined
console.log(job); // ReferenceError: Cannot access 'job' before initialization
console.log(year); // ReferenceError: Cannot access 'year' before initialization

var me = 'Oren';
let job = 'developer';
const year = 1980;
*/

/*
// functions hoisting
console.log(addDecl(2, 3)); // 5
console.log(addExpr(2, 3)); // ReferenceError: Cannot access 'addExpr' before initialization
console.log(addArrow(2, 3)); // ReferenceError: Cannot access 'addArrow' before initialization
console.log(addExprVar(2, 3)); // TypeError: addExprVar is not a function, this is because var is hoisted and assigned with undefined, then we try to call undefined (same with arrow function declared with var and hoisted)

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

var addExprVar = function (a, b) {
  return a + b;
};
*/

/*
// pitfall example
// we may assume that at this point numProducts is hoisted with the 10 value, so we expect it to be truthy and therefor deleteShoppingCart will not be called. but in fact numProducts is hoisted as undefined and is falsy, therefor deleteShoppingCart is actually called unintentionally
console.log(numProducts);

if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}
*/

/*
// best practices
1. avoid using var to declare variables and functions
2. declare most variables with const and use let only if you intend to re-assign values to a variable
3. always declare arrays and objects with const
4. declare function expressions and arrow functions with const
5. always declare your variables and functions at the beginning of the scope (don't rely on hoisting), even with function declarations
*/

/*
var x = 1;
let y = 2;
const z = 3;

// because of hoisting x is property of window, but y & z are not
console.log(x === window.x); // true
console.log(y === window.y); // false
console.log(z === window.z); // false
*/
