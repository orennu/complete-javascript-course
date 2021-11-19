/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks 😉
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/

// task #1
let dolphinsAverageScore = (96 + 108 + 89) / 3;
let koalasAverageScore = (88 + 91 + 110) / 3;

if (dolphinsAverageScore > koalasAverageScore) {
    console.log(`Dolphins average score (${dolphinsAverageScore}) is greater than Koalas average score (${koalasAverageScore}), Dolphins won!`);
} else if (dolphinsAverageScore === koalasAverageScore) {
    console.log(`Dolphins average score (${dolphinsAverageScore}) and Koalas average score (${koalasAverageScore}) are equal, it's a draw!`);
} else {
    console.log(`Koalas average score (${koalasAverageScore}) is greater than Dolphins average score (${dolphinsAverageScore}), Koalas won!`);
}

// task #2
dolphinsAverageScore = (97 + 112 + 101) / 3;
koalasAverageScore = (109 + 95 + 123) / 3;

if (dolphinsAverageScore > koalasAverageScore && dolphinsAverageScore >= 100) {
    console.log(`Dolphins average score (${dolphinsAverageScore}) is greater than Koalas average score (${koalasAverageScore}) and greater or equal than minimum score of 100, Dolphins won!`);
} else if (koalasAverageScore > dolphinsAverageScore && koalasAverageScore >= 100) {
    console.log(`Koalas average score (${koalasAverageScore}) is greater than Dolphins average score (${dolphinsAverageScore}) and greater or equal than minimum score of 100, Koalas won!`);
} else {
    console.log(`Dolphins average score (${dolphinsAverageScore}) and Koalas average score (${koalasAverageScore}) are less than minimum score of 100, no team won 😔`)
}

// task #3
dolphinsAverageScore = (97 + 112 + 101) / 3;
koalasAverageScore = (109 + 95 + 106) / 3;

if (dolphinsAverageScore > koalasAverageScore && dolphinsAverageScore >= 100) {
    console.log(`Dolphins average score (${dolphinsAverageScore}) is greater than Koalas average score (${koalasAverageScore}) and greater or equal than minimum score of 100, Dolphins won!`);
} else if (koalasAverageScore > dolphinsAverageScore && koalasAverageScore >= 100) {
    console.log(`Koalas average score (${koalasAverageScore}) is greater than Dolphins average score (${dolphinsAverageScore}) and greater or equal than minimum score of 100, Koalas won!`);
} else if (dolphinsAverageScore === koalasAverageScore && dolphinsAverageScore >= 100) {
    console.log(`Dolphins average score (${dolphinsAverageScore}) and Koalas average score (${koalasAverageScore}) are equal and greater or equal than minimum score of 100, it's a draw!`);
} else {
    console.log(`Dolphins average score (${dolphinsAverageScore}) and Koalas average score (${koalasAverageScore}) are less than minimum score of 100, no team won 😔`)
}
