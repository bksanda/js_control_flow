// //filterLongWords.js

// Hardcode an array of words. Have a variable maxLength, 
// push words that are less than the maxLength into a new array, and console.log that.

var continents = ["Africa","Antarctica","Australia","North America", "South Africa", "Asia", "Europe"]
var maxLength = 5;
var shortContinents = [];

for (var i = 0; i < continents.length; i+=1) {
	if (continents[i].length < maxLength) {
		shortContinents.push(continents[i]);	
	};
	// } else {
	// 	console.log("Too bad, you are no longer a continent!");
	// }
}

console.log(shortContinents);