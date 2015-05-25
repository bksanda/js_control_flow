// pluralizer.js

// Take an input like

// thing = "cat"
// count = "5"
// and output the pluralized form of the word like "5 cats" or "1 dog"..



var thing = "cat";
var count = "5";

for (var i = 1; i < count; i+=1) {
	if (i > 1) {
		newThing = thing + "s";
		console.log (i + " " + newThing);
	} 
	else {
		console.log(i + " " + thing);
	};
}; 

