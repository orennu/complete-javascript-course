/*
Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
*/

// test data 1
const massMarkTestDataOne = 78;
const heightMarkTestDataOne = 1.69;
const massJohnTestDataOne = 92;
const heightJohnTestDataOne = 1.95;
const bmiMarkTestDataOne = massMarkTestDataOne / heightMarkTestDataOne ** 2;
const bmiJohnTestDataOne = massJohnTestDataOne / heightJohnTestDataOne ** 2;
const markHigherBMITestDataOne = bmiMarkTestDataOne > bmiJohnTestDataOne;

console.log(bmiMarkTestDataOne, bmiJohnTestDataOne, markHigherBMITestDataOne);

// test data 2
const massMarkTestDataTwo = 95;
const heightMarkTestDataTwo = 1.88;
const massJohnTestDataTwo = 85;
const heightJohnTestDataTwo = 1.76;
const bmiMarkTestDataTwo = massMarkTestDataTwo / heightMarkTestDataTwo ** 2;
const bmiJohnTestDataTwo = massJohnTestDataTwo / heightJohnTestDataTwo ** 2;
const markHigherBMITestDataTwo = bmiMarkTestDataTwo > bmiJohnTestDataTwo;

console.log(bmiMarkTestDataTwo, bmiJohnTestDataTwo, markHigherBMITestDataTwo);