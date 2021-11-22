'use strict';

/*
// strict mode
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true; // this will throw ReferenceError in console since hasDriverLicense is not defined (typo)
if (hasDriversLicense) console.log('I can drive :D');

const interface = 'audio'; // this will throw syntaxError in console due to usage of reserved word (interface) for variable name
const private = 'Ryan'; // this is the same as above with different reserved word (private)
*/

/*
// functions
// use of functions (like variables) is justified by the DRY (Don't Repeat Yourself) principle
// define function
function logger() {
    console.log('My name is Oren');
}

// calling / running / invoking function
logger();
logger();
logger();

// define function with parameters and return value
function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;

    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
*/

/*
// function declarations vs. expressions
// function declaration
function calcAge1(birthYear) {
    return new Date().getFullYear() - birthYear;
}

const age1 = calcAge1(1980);

// function expression
const calcAge2 = function (birthYear) {
    return new Date().getFullYear() - birthYear;
}

const age2 = calcAge2(1980);

console.log(`function declaration: ${age1}
function expression: ${age2}`);
*/

/*
// arrow function
// syntax:
// option1 - no parameters: () => <return value>;
// option2 - single parameter: param => <return value>; or (param) => <return value>;
// option3 - multiple parameters: (param1, param2) => <return value>;
// option4 - multiple statements in body: (param1, param2) => {
//     const param1Plus5 = param1 + 5;
//     const param2Minus5 = param2 - 5;

//     return param1Plus5 * param2Minus5;
// }
const calcAge3 = birthYear => new Date().getFullYear() - birthYear;

const age3 = calcAge3(1980);

console.log(`arrow function: ${age3}`);

const yearsUntilRetirement = birthYear => {
    const age = new Date().getFullYear() - birthYear;
    const retirement = 65 - age;

    return retirement;
}

console.log(yearsUntilRetirement(1980));


const yearsUntilRetirementWithName = (birthYear, firstName) => {
    const age = new Date().getFullYear() - birthYear;
    const retirement = 65 - age;

    return `${firstName} has ${retirement} years until retirement`;
}

console.log(yearsUntilRetirementWithName(1980, 'Oren'));
console.log(yearsUntilRetirementWithName(1977, 'Valery'));
*/

/*
// functions calling other functions
const cutFruitPieces = function (fruit) {
    return fruit * 4;
}

const fruitProcessor = function (apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;

    return juice;
}

console.log(fruitProcessor(2, 3));
*/

/*
// reviewing functions
const calcAge = (birthYear) => new Date().getFullYear() - birthYear; // arrow function


const getYearsUntilRetirement = function (birthYear) { // function expression
    const age = calcAge(birthYear); // function calling another function
    const yearsToRetirement = 65 - age;

    return yearsToRetirement > 0 ? yearsToRetirement : -1; // return value using ternary operator
}

console.log(getYearsUntilRetirement(1980));
console.log(getYearsUntilRetirement(1940));
*/

/*
// arrays intro
// storing values into variables - not scalable and fun
const friend1 = 'Tomer';
const friend2 = 'Arik';
const friend3 = 'David';
const friend4 = 'Mia';

// storing the values into an array - create array literally
const friends = ['Tomer', 'Arik', 'David', 'Mia'];

console.log(friends);

// another way of creating an array
const years = new Array(1980, 1990, 2000, 2010, 2020);

console.log(years);

// get element of an array
console.log(friends[0]); // 1st element of friends array
console.log(friends[2]); // 3rd elemnent of friends array

// get length of array
console.log(friends.length);

// get last element of an array
console.log(friends[friends.length - 1]);

// change / mutate element in an array
friends[2] = 'Jony';

console.log(friends);

// array elements are mutable but array declared with const is still not changeable
// friends = ['Bob', 'Alice']; // this will raise an error

// arrays can hold different types of values and even expressions
const firstName = 'Oren';
const oren = [firstName, 'Nudelman', new Date().getFullYear() - 1980, friends, 'developer'];

console.log(oren);

// exercise
const calcAge = birthYear => new Date().getFullYear() - birthYear;

const yearsArray = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(yearsArray[0]);
const age2 = calcAge(yearsArray[1]);
const ageLast = calcAge(yearsArray[yearsArray.length - 1]);

console.log(age1, age2, ageLast);

const ages = [calcAge(yearsArray[0]), calcAge(yearsArray[1]), calcAge(yearsArray[yearsArray.length - 1])]

console.log(ages);
*/

/*
// array methods
const friends = ['Tomer', 'Arik', 'David', 'Mia'];

// push - add element to end of array and return array new length
let newLength = friends.push('Yulia');

console.log(friends, newLength);

// unshift - add element to begining of an array and return array new length
newLength = friends.unshift('Gilad');

console.log(friends, newLength);

// pop - removes last element of an array and returns the removed element
const poped = friends.pop();

console.log(friends, poped);

// shift - remove first element of an array and return the removed element
const shifted = friends.shift();

console.log(friends, shifted);

// indexOf - return the first index of an element in array, if element not found returns -1
const indexOfDavid = friends.indexOf('David');

console.log(friends, indexOfDavid);
console.log(friends, friends.indexOf('Bill'));

// includes - returns true if element is included in array, otherwise returns false. uses strict equality (===)
friends.push(11);
const isDavidInFriends = friends.includes('David');
const isBillInFriends = friends.includes('Bill');

console.log(friends, isDavidInFriends, friends.includes(11), isBillInFriends, friends.includes('11'));

if (friends.includes('Tomer')) {
    console.log('You have a friend called Tomer');
}
*/

/*
// objects intro
const orenArray = [
    'Oren',
    'Nudelman',
    new Date().getFullYear() - 1980,
    'developer',
    [
        'Tomer',
        'John',
        'Mia'
    ]
];

// create object literally
const oren = {
    firstName: 'Oren',
    lastName: 'Nudelman',
    age: new Date().getFullYear() - 1980,
    job: 'developer',
    friends: ['Tomer', 'John', 'Mia']
};

console.log(oren);
*/

/*
// retrieve values from objects - dot vs. bracket notation
const oren = {
    firstName: 'Oren',
    lastName: 'Nudelman',
    age: new Date().getFullYear() - 1980,
    job: 'developer',
    friends: ['Tomer', 'John', 'Mia']
};

console.log(oren);

// get object property value using the dot notation
console.log(oren.lastName);

// get object property value using the bracket notation
console.log(oren['lastName']);

const nameKey = 'Name';
console.log(oren['first' + nameKey], oren[`last${nameKey}`]);

const interestedIn = prompt('What do you want to know about Oren? Choose between firstName, lastName, age, job and friends');

console.log(oren[interestedIn]);

if (oren[interestedIn]) {
    console.log(oren[interestedIn]);
} else {
    console.log('wrong request!');
}

// add properties to object
oren.location = 'Israel';
oren['twitter'] = '@orennu';

console.log(oren);

// challenge
// "Oren has 3 friends and his best friend is called Tomer"

console.log(`${oren.firstName} has ${oren.friends.length} friends and his best friend name is ${oren.friends[0]}`);
*/

/*
// object methods
const oren = {
    firstName: 'Oren',
    lastName: 'Nudelman',
    birthYear: 1980,
    job: 'developer',
    friends: ['Tomer', 'John', 'Mia'],
    hasDriversLicense: true,
    // function as object property
    calcAge: function () {
        console.log(this);  // this keyword is pointing to the object where this resides (i.e. oren in this case)
        this.age = new Date().getFullYear() - this.birthYear; // create new object property inside the object method
        return this.age;
    },
    fullName: function () {
        return `${this.firstName} ${this.lastName}`;
    },
    getSummary: function () {
        this.summary = `${this.firstName} is a ${this.calcAge()} years old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`;
        return this.summary;
    }
};

// calling the object's function property
console.log(oren.calcAge()); // need to call the calcAge at least once to create age property
console.log(oren['age']); // now we can get the age property
console.log(oren.age);
console.log(oren.age);
console.log(oren.age);
console.log(oren.fullName());

// challenge
// "Oren is a 41 years old developer, and he has a/no driver's license"
oren.getSummary();

console.log(oren.summary);
*/

/*
// the for loop
// world without loop 😢
// console.log('Lifting weights repetition 1 🏋️');
// console.log('Lifting weights repetition 2 🏋️');
// console.log('Lifting weights repetition 3 🏋️');
// console.log('Lifting weights repetition 4 🏋️');
// console.log('Lifting weights repetition 5 🏋️');
// console.log('Lifting weights repetition 6 🏋️');
// console.log('Lifting weights repetition 7 🏋️');
// console.log('Lifting weights repetition 8 🏋️');
// console.log('Lifting weights repetition 9 🏋️');
// console.log('Lifting weights repetition 10 🏋️');

// for loop syntax: for (initial value (of counter); logical condition evalutated before each iteration; do something after each iteration (increase counter))
// for loop keeps running while condition is true
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep} 🏋️`);
}
*/

/*
// looping arrays
const orenArray = [
    'Oren',
    'Nudelman',
    new Date().getFullYear() - 1980,
    'developer',
    [
        'Tomer',
        'John',
        'Mia'
    ],
    true
];

const types = [];

for (let i = 0; i < orenArray.length; i++) {
    // reading from orenArray array
    console.log(orenArray[i], typeof orenArray[i]);
    // filling types array
    // types[i] = typeof orenArray[i]; // method 1
    types.push(typeof orenArray[i]); // method 2
}

console.log(types);

const years = [1980, 1990, 2000, 2010, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(new Date().getFullYear() - years[i]);
}

console.log(ages);

// continue and break
// continue - exit the current iteration and continue to next one
// break - stop the loop
console.log('--- ONLY STRINGS ---');

for (let i = 0; i < orenArray.length; i++) {
    if (typeof orenArray[i] !== 'string') continue;

    console.log(`${orenArray[i]} -> type: ${typeof orenArray[i]}`);
}

console.log('--- BREAK WITH NUMBER ---');
for (let i = 0; i < orenArray.length; i++) {
    if (typeof orenArray[i] === 'number') break;

    console.log(`${orenArray[i]} -> type: ${typeof orenArray[i]}`);
}
*/