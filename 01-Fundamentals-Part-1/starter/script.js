/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log("Oren");
console.log(23);

let firstName = "Liron";
console.log(firstName);
console.log(firstName);
console.log(firstName);
*/

/*
let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "oren");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1980;
console.log(typeof year);

let nul = null;
console.log(nul);
console.log(typeof nul);
*/

/*
let age = 30;
age = 31;

console.log(age);

const birthYear = 1980;
// birthYear = 1990; // error

const job; // error
*/

/*
// math operators
const now = 2021;
const ageOren = now - 1980;
const ageValery = now - 1977;

console.log(ageOren, ageValery);
console.log(ageOren * 2, ageOren / 10, 2 ** 3);

// + operator can also be used to concatenate strings
const firstName = "Oren";
const lastName = "Nudelman";

console.log(firstName + " " + lastName);

// assignment operators
let x = 10 + 5; // the equal operator // 15
x += 10; // x = x + 10 // 25
x *= 4 // x = x * 4 // 100
x++; // x = x + 1 // 101
x--; // x = x - 1 // 100
x--; // 99

console.log(x);

// comparison operators
console.log(ageValery > ageOren);
console.log(ageOren >= 18);

const isLegalAge = ageOren >= 18;
*/

/*
const now = 2021;
const ageOren = now - 1980;
const ageValery = now - 1977;

console.log(now - 1980 > now - 1977);

// math opertors operate left to right
console.log(25 - 10 - 5);

// assignment operator operate right to left
let x, y;
x = y = 28 - 9 - 7; // x = y = 12 => y = 12 => x = y
console.log(x, y);

const averageAge = (ageOren + ageValery) / 2;
console.log(ageOren, ageValery, averageAge);
*/

/*
const firstName = "Oren";
const job = "developer";
const birthYear = 1980;
const year = 2021;

// create sentence with concatenation
const catSentence = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";

console.log(catSentence);

// create sentence with template literal
const templateSentence = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`
console.log(templateSentence);

// multi line string with backtics ``
console.log(`string
with
multi
line`);
*/


const age = 15;

if (age >= 18) {
    console.log("Sarah can start driving license 😄")
} else {
    const yearsLeftForLicense = 18 - age;
    console.log(`Sarah has ${yearsLeftForLicense} years left for license 😩`)
}

const birthYear = 1980;
let century;

if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century);