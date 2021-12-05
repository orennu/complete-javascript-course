'use strict';
// this
console.log('=== the this keyword ===');

// this in global scope will point to 'window' object (in browser)
console.log('this in global scope');
console.log(this);

// this in function will point to undefined when in strict mode and to outer parent scope (window object in browser)
const calcThisAge = function (birthYear) {
  console.log('function expression in global scope');
  console.log(new Date().getFullYear() - birthYear);
  console.log(this);
};

calcThisAge(1980);

// this in arrow function will point to outer parent scope (in this case global, hence the window object in browser)
const calcThisAgeArrow = birthYear => {
  console.log('arrow function in global scope');
  console.log(new Date().getFullYear() - birthYear);
  console.log(this);
};

calcThisAgeArrow(1980);

// this in object method will point to the object calling the method
const oren = {
  name: 'oren',
  year: 1980,
  calcAge: function () {
    console.log('method in an object');
    console.log(this);
  },
};

oren.calcAge();

const valery = {
  name: 'valery',
  year: 1977,
};

valery.calcAge = oren.calcAge;
valery.calcAge();

const f = oren.calcAge;
f();
