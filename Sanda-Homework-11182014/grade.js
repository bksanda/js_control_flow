// grade.js

// Output the following letter grade from a variable with with a test score.
// Display either "A", "B", "C", "D", or "F", for an 
// score that is an integer between 0 and 100. **Bonus: Try it again with a switch statement **

// var testScore = Math.floor(Math.random()*100);

// console.log("Your score is: " + testScore);
// console.log("Your letter grade is: ");

// if (testScore >= 90 && testScore <=100) {
// 	console.log("A");
// } else if (testScore > 79) {
// 	console.log("B");
// } else if (testScore > 69) {
// 	console.log("C");
// } else if (testScore > 59) {
// 	console.log("D");
// } else {
// 	console.log("F");
// };


//BONUS SWTICH

var testScore = Math.floor(Math.random()*100);

switch(true){
  case testScore > 89:
    console.log("You got " + testScore + "%");
    console.log("Your grade is A -- YOU ARE AWESOME!");
    break;
  case testScore > 79:
    console.log("You got " + testScore + "%");
    console.log("Your grade is B -- KIND OF SO-SO");
    break;
  case testScore > 69:
    console.log("You got " + testScore + "%");
    console.log("Your grade is C -- NEEDS IMPROVEMENT");
    break;
  case testScore > 59:
    console.log("You got " + testScore + "%");
    console.log("Your grade is D -- WARNING!");
    break;
  default:
    console.log("You got " + testScore + "%");
    console.log("Your grade is F -- YOU FAIL!");
}

// WHY is switch more efficient?