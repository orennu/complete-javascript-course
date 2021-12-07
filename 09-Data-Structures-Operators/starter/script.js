'use strict';

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
