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

// take 1st and 3rd element
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

/*
// short circuiting (&& and ||)
console.log('=== short circuiting (&& and ||) ===');

console.log('=== short circuiting OR (||) ===');
// logical operator can:
// - use ANY date type
// - return ANY data type
// - short-circuiting evaluation

// short-circuiting evaluation || - if the left operand is truthy JS will return it and will not evaluate the right operand
console.log(3 || 'Oren'); // 3 is truthy so it will be returned and 'Oren' will not be evaluated

console.log('' || 'Oren'); // Oren
console.log(true || 0); // true
console.log(undefined || null); // null
console.log(null || undefined); // undefined
console.log(false || 0); // 0
console.log(undefined || 0 || '' || 'Hello' || 23 || null); // Hello
// so short circuiting will stop evaluation on 1st truthy operand starting from left to right and return 1st truthy value or last value if they are all falsy

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

const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1); // 10

restaurant.numGuests = 23;
const guests2 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests2); // 23

const guests3 = restaurant.numGuests || 10;
console.log(guests3); // 23

console.log('=== short circuiting AND (&&) ===');
// short circuiting AND works the oposite of the OR operator, meaning it will stop evaluation on 1st falsy value from left to right and return it or return last value if they are all truthy

console.log(0 && 'Oren'); // 0
console.log(7 && 'Oren'); // Oren
console.log('Hello' && 23 && null && 'Oren'); // null
console.log('Hello' && 23 && true && 'Oren'); // Oren

// practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrums', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrum', 'spinach');
*/

/*
// the nullish coalescing operator (??)
console.log('=== the nullish coalescing operator (??) ===');

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

// problem: 0 is falsy value so guests will be assigned to 10, our initial assumption was to assign 10 if the property is undefined
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests); // 10

// solution - nullish coalescing operator (??)
const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect); // 0

// nullish operator works with nullish values instead of falsy values
// null
// undefined
// 0 and '' are treated as NON nullish

const tables = restaurant.numTables ?? 20; // numTables is undefined
console.log(tables); // 20
*/

/*
// logical assignment operators (||=/&&=/??=)
console.log('=== logical assignment operators (||=/&&=) ===');

const rest1 = {
  name: 'Capri',
  numGuests: 20,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

const rest3 = {
  name: 'Steak House',
  numGuests: 0,
  address: '21 Jump st.',
};

// OR assignment operator
// pre ES 2021
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

rest1.numGuests ||= 10;
rest2.numGuests ||= 10;
rest3.numGuests ||= 10; // unexpected result 0 override by 10

console.log(rest1); // 20
console.log(rest2); // 10
console.log(rest3); // 10


// nullish assignment operator

rest1.numGuests ??= 10;
rest2.numGuests ??= 10;
rest3.numGuests ??= 10;

console.log(rest1); // 20
console.log(rest2); // 10
console.log(rest3); // 0


// AND assignment operator
// pre ES 2021
// rest1.owner = rest1.owner && '<ANONYMOUS>'; // owner: undefined
// rest2.owner = rest2.owner && '<ANONYMOUS>';

rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1); // no owner property
console.log(rest2); // <ANONYMOUS>
*/

/*
// the for-of loop
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

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

// getting array entries
// each entry is array of index and the element, so we can destructure this array to variables and use them in our loop
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

// see the entries as arrays
console.log([...menu.entries()]);
*/
