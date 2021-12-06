'use strict';

console.log('=== primitives vs. objects ===');

// primitive types
let age = 30;
let oldAge = age;
age = 31;

console.log(age); // 31
console.log(oldAge); // 30

// reference types
const me = {
  name: 'Oren',
  age: 30,
};

const friend = me;
friend.age = 27;

console.log('friend: ', friend.age); // 27
console.log('me: ', me.age); // 27

// reference types
const arr1 = [1, 2, 3, 4];
const arr2 = arr1;

arr2[1] = 0;

console.log('arr1: ', arr1); // [1, 0, 3, 4]
console.log('arr2: ', arr2); // [1, 0, 3, 4]

// primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';

console.log(`lastName: ${lastName}, oldLastName: ${oldLastName}`); // lastName: Davis, oldLastName: Williams

// reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';

console.log('before marriage: ', jessica); // {firstName: 'Jessica', lastName: 'Davis', age: 27}
console.log('after marriage: ', marriedJessica); // {firstName: 'Jessica', lastName: 'Davis', age: 27}

// copying objects
const mia = {
  firstName: 'Mia',
  lastName: 'James',
  age: 25,
  family: ['Alice', 'Bob'],
};

// shallow copy - nested objects are not copied but preserved
const miaCopy = Object.assign({}, mia);
miaCopy.lastName = 'Clinton';
miaCopy.family.push('Mary');
miaCopy.family.push('John');

console.log('before marriage: ', mia); // {firstName: 'Mia', lastName: 'James', age: 25, family: ['Alice', 'Bob', 'Mary', 'John']}
console.log('after marriage: ', miaCopy); // {firstName: 'Mia', lastName: 'Clinton', age: 25, family: ['Alice', 'Bob', 'Mary', 'John']}
