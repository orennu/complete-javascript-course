'use strict';
// this keyword pitfalls
console.log('=== regular vs. arrow functions ===');

// this will cause greet method inside person object to use 'George' as the value of this.first, because variables decalred with var keyword are added as global object properties
var first = 'George';

const person = {
  first: 'Oren',
  year: 1980,
  calcAge: function () {
    console.log(this);
    console.log(new Date().getFullYear() - this.year);

    // solution #1 to below (pre ES6)
    const self = this;
    // this points to isMillenial which is a undefined, hence this.year will be undefined too and will result in error
    // const isMillenial = function () {
    //   console.log(this);
    //   //   console.log(this.year >= 1981 && this.year <= 1996);
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    // solution #2 - use arrow function
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMillenial();
  },
  greet: () => {
    console.log(this);
    console.log(`Hey ${this.first}`); // this points to the global object since it's the parent outer scope of the function, so window.first will be undefined
    // after adding the var statement in line 5 window.first will be 'George'
  },
};

person.greet();
person.calcAge();

/* key takeaways:
1. don't use var to declare variables
2. don't use arrow functions as methods
*/

// arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
  // arguments keyword doesn't exist in arrow functions
  console.log(arguments);
  return a + b;
};

addArrow(3, 7, 6);
