/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."
Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console. Try it with both test datasets.
2. Use the problem-solving framework: Understand the problem and break it up into sub-problems!
Test data:
§ Data 1: [17, 21, 23]
§ Data 2: [12, 5, -5, 0, 4]
*/

// 1) Understanding the problem
// - how to create a one line string of all temperatures ? concat string in a loop
// - how to add the celsius sign to the string ? use unicode in string
// - how to track day number ? use counter in loop

// 2) Breaking up into sub-problems
// - intialize variable with empty string
// - loop through the array and concat the temperature along with the symbol and string on each interation
// - keep counter variable or use the index + 1 as day number
// - log the final concat string from the function

// console.log('\u00B0');
temperaturesArr1 = [17, 21, 23];
temperaturesArr2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let forcast = '';
  const celsiusSymbol = '\u00B0';

  for (let i = 0; i < arr.length; i++) {
    let dayNum = i + 1;
    forcast += `... ${arr[i]}${celsiusSymbol}C in ${dayNum} days `;
  }

  forcast += '...';

  console.log(forcast);
};

printForecast(temperaturesArr1);
printForecast(temperaturesArr2);
