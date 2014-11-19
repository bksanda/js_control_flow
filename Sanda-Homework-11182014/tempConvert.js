// tempConvert.js
// Convert a temperature from F to C.
// Convert it to fahrenheit and output "NN°C is NN°F".

//var fDegree = prompt("What is the temperature? ");
//var cDegree = 

//F = (C x 2) + 30
//(25C x 2) + 30 = 80F. 

// Celsius to Fahrenheit:   (°C × 9/5) + 32 = °F
// Fahrenheit to Celsius:   (°F − 32) x 5/9 = °C

var degreeCelsius = Math.ceil(Math.random()*100);
var degreeFahrenheit = (degreeCelsius * 9/5) + 32;
console.log(degreeCelsius + "°C" + " is " + degreeFahrenheit + "°F");

