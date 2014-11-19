//Write a program that will take a hardcoded string, 
//and console log the reversed version of it.
//Use a for loop

// var inputString = "building";
// var toReverse = inputString.split("");
// var reverse = toReverse.reverse();
// var reversing = reverse.toString();
// var reversed = reversing.join();
// console.log(reversed);


var inputString = "building";
console.log(inputString);

var emptyString = "";

for (var i = inputString.length; i >= 0; i-=1) {
	emptyString = emptyString + inputString.charAt(i);
}

console.log(emptyString);




//SCRATCH:

//for (var i = 0; i < reverse.length; i++){
//	console.log(reverse.toString());

// var length = inputString.length

// for (var i = 0; i < inputString.length; i++) {
// 	console.log(i);
// 	console.log(inputString)
// }

// var friends = "Moe,Larry,Curly,Jane,Emma,Elizabeth,Elinor,Mary,Darcy,Grey,Lydia,Harriet";

// var newFriends = friends.split(",");

// newFriends.sort();
// console.log(newFriends);

