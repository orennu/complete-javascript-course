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

