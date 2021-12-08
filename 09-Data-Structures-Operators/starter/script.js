'use strict';
/*
console.log('=== destructuring arrays ===');
// the naive way of unpacking array elements to seperate variables
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

// destructuring array
const [x, y, z] = arr;

console.log(x, y, z);

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // destructuring arguments on function
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
};

// take first 2 elements
const [first, second] = restaurant.categories;

console.log('take first 2 elements: ', first, second);

// take 1sta and 3rd element
const [el1, , el3] = restaurant.categories;

console.log('take 1st and 3rd element: ', el1, el3);

// switch variables
let [main, , secondary] = restaurant.categories;

console.log('before switch: ', main, secondary);

[main, secondary] = [secondary, main];

console.log('after switch: ', main, secondary);

// receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);

console.log('receive 2 return values from a function: ', starter, mainCourse);

// nested array destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;

// console.log(i, j);
const [i, , [j, k]] = nested;

console.log('nested destructuring: ', i, j, k);

// set default for variables when extracting when we don't know the length of array
const [p = 1, q = 1, r = 1] = [8, 9];

console.log('destructuring with default values: ', p, q, r);
*/

/*
// destructuring object
console.log('=== destructuring objects ===');
const { name, openingHours, categories } = restaurant;

console.log('destructuring object: ', name, openingHours, categories);

// rename unpacked variables
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log('rename unpacked variables: ', restaurantName, hours, tags);

// set default values
const { menu = [], starterMenu: starters = [] } = restaurant;

console.log('set default values: ', menu, starters);

// mutating variables
let v = 111;
let w = 999;
const obj = { v: 23, w: 7, u: 14 };
({ v, w } = obj);

console.log('mutating variables: ', v, w);

// nested objects
const {
  fri: { open: openHour, close: closeHour },
} = openingHours;
console.log('nested object destructuring: ', openHour, closeHour);

// calling object method that unpacks properties from object passed as argument
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

// using default values
restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
});
*/

/*
// the spread operator (...)
console.log('=== the spread operator (...) ===');

const arr = [7, 8, 9];
const badNewArray = [1, 2, arr[0], arr[1], arr[2]];

console.log(badNewArray);

// the spread operator spreads the array elements
const newArr = [1, 2, ...arr];

console.log(newArr); // [1, 2, 7, 8, 9]
console.log(...newArr); // 1 2 7 8 9

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
};

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// shallow copy of array
const mainMenuCopy = [...restaurant.mainMenu];

// join 2 (or more) arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// iterable are arrays, strings, maps, sets but NOT objects
const str = 'Oren';
const letters = [...str, ' ', 'N.'];
console.log(letters);

// real world example
const ingredients = [
  prompt("Let's make pasta! ingredient 1?"),
  prompt('ingredient 2?'),
  prompt('ingredient 3?'),
];

console.log(ingredients);

restaurant.orderPasta(...ingredients);

// spread objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };

console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';

console.log(restaurant.name);
console.log(restaurantCopy.name);
*/

/*
// rest pattern and parameters
console.log('=== rest pattern and parameters ===');

// spread, on right side of the assignment (=) operator
const arr = [1, 2, ...[3, 4]];

// rest, on left side of the assignment (=) operator
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngredients, ...otherIngredients) {
    console.log(mainIngredients);
    console.log(otherIngredients);
  },
};

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// rest element must be the last element
// const [dish1, , dish3, ...otherDishes, dish] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ]; // error Rest element must be last element

// objects
const { sat, ...weekDays } = restaurant.openingHours;
console.log(weekDays);

// functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 3, 1, 4, 9, 23);

const x = [6, 3, 4];
add(...x);

restaurant.orderPizza('mushrum', 'onion', 'olives');
restaurant.orderPizza('pineapple');
*/
