//for(let i =0; i < 10; i++) {
//  console.log(i);
// }

/* Declare a var and set it equal to any string.
Declare a second var and call new String() on the same string (this will create an instance of a JS string object.)
Use the logical operators and a third var to determine if they are strictly equal.
Now use the logical operators and a fourth var to determine if they are loosely equal.
Why did you get the result you got?

var favoriteBook = "Lord of the Flies";
var aBook = "lord of the flies"
var isEqual = (string favoriteBook == aBook);
console.log(isEqual);

isEqual = (string favoriteBook === aBook);
console.log(isEqual); */


//var yourName = prompt(`What's your name?`);
//console.log(yourName.length);

/* let obj1 = {
  name: "Aaron"
};

let obj2 = {
  name: "Aaron"
};
console.log(obj1 === obj2); */

//console.log(typeof("three" * 15));




//let myNumber = prompt("Give me a number!!!");
//alert(
//  isNAN((parseInt(myNumber) /2))
//);
/* let string = prompt("Tell me your fav number.");

string.toString();

alert(`Your fav number is ${string}`); */

// 1. Prompt user for a number
// 2. Convert returned value into an integer
// 3. Return values for
  // a. their value + 42
  // b. their value - 42
  // c. their value * 42
  // d. their value / 42

let theirValue = prompt("Give me a number...and then...");
theirValue parseInt(theirValue);

alert(theirValue + 42, theirValue - 42, theirValue * 42, theirValue / 42);
