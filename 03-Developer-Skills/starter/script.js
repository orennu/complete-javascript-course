// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const x = 23;
const calcAge = birthYear => new Date().getFullYear() - birthYear;
// console.log(calcAge(1980));

// TODO BUG GOOD_CODE BAD_CODE

/*
///////////////////////////////////////
// Using Google, StackOverflow and MDN

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it
*/

/*
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
// const temperatures = ['error', 3, -2, -10, -1, 'error', 9, 13, 'error', 19, 15, 14, 9, 5];
// const temperatures = ['error', 'error', 'error', 'error', 'error', 'error'];
// const temperatures = [0, 0, 0, 0, 0];

const calcTempAmplitude = function (temps) {
  const maxMinTemps = findMaxMin(temps); // using another fuction to return max adn min as array [max, min]
  const max = maxMinTemps[0];
  const min = maxMinTemps[1];

  return typeof max === 'number' || typeof min === 'number' ? max - min : 'error'; // return amplitude if no errors in min or max, otherwise return 'error' (edge case if all temperatures are errors)
};

const findMaxMin = function (arr) {
  let max = arr[0];
  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {
    const curTemp = arr[i];

    // ignore errors even if 1st element of array is error (not handled in course solution)
    if (typeof max !== 'number' || typeof min !== 'number') {
      if (typeof arr[i] !== 'number') {
        continue;
      } else {
        max = arr[i];
        min = arr[i];
      }
    }

    if (curTemp > max) max = curTemp; // find max value in array
    if (curTemp < min) min = curTemp; // find min value in array
  }

  console.log(max, min);
  return [max, min];
};

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);
*/

/*
// PROBLEM 2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays

// 2) Breaking up into sub-problems
// - Merge 2 arrays

const calcTempAmplitude2 = function (temps1, temps2) {
  const temps = temps1.concat(temps2); // merge 2 arrays

  // everything else is the same
  const maxMinTemps = findMaxMin(temps);
  const max = maxMinTemps[0];
  const min = maxMinTemps[1];

  return typeof max === 'number' || typeof min === 'number' ? max - min : 'error';
};

const temperatures1 = ['error', -2, -7, -1, 'error', 9, 13, 11, 15, 14, 9, 5];
const temperatures2 = [3, -2, -6, -1, 'error', 9, 13, 17, 25, 14, 9, 'error'];
const amplitude2 = calcTempAmplitude2(temperatures1, temperatures2);

console.log(amplitude2);
*/
