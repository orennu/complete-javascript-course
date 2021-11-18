/*
// values and variables
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
data types
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
// let, const and var
let age = 30;
age = 31;

console.log(age);

const birthYear = 1980;
// birthYear = 1990; // error

const job; // error
*/

/*
// basic operators
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
// operator precedence
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
// strings and template literals
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

/*
// if / else statements
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
*/

/*
// type conversion and coercion
// type conversion
// conversion to number
const inputYear = '1980';

console.log(Number(inputYear), inputYear);
console.log(inputYear + 18);
console.log(Number(inputYear) + 18);

console.log(Number("Oren"));
console.log(typeof NaN);

// conversion to string
console.log(23, String(23));

// type coercion
console.log("I am " + 23 + " years old");
console.log("23" - "10" - 3);
console.log("23" + "10" + 3);
console.log("23" * "2");
console.log("23" / "2");

let n = '1' + 1; // '11'
n = n - 1; // 10
console.log(n);

const x = 2 + 3 + 4 + '5' // => 2 + 3 = 5 => 5 + 4 = 9 => 9 + '5' = '95'
console.log(x);
*/

/*
// truthy and falsy values
// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(''));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean('Oren'));
console.log(Boolean({}));

let money = 0; // falsy
// money = 1000; // truthy

// conversion to truthy and falsy is done implictly by javascript by coercion
if (money) {
    console.log("don't spend it all");
} else {
    console.log("You should get a job!");
}

let height; // falsy
// height = 191; // truthy

console.log(typeof height);
if (height) {
    console.log('YAY! Height is defined');
} else {
    console.log('Height is UNDEFINED');
}
*/

