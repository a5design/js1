/*console.log(myName)
var myName = "Aaron";//Declared and Defined
myName = new String(myName);
console.log(myName.toUpperCase());



var test;//declared
test = "My test is that I am tired"//Defined
console.log(test);*/
const myName = "Aaron";

console.log(myName, "one");
{
  const myName = "Trishan";
  console.log(myName, "two");
};
console.log(myName, "three");
let birthday = "12.23.76"
let rightNow = new Date(birthday);
alert(rightNow);



//Math Object

let myString = "Hello World";
alert(myString.length);

//let myArray = {"Sam", "Bryan"};

let myObject = {
  studentCount: 0,
  teacherRating: 99999999999
};

//alert 1 otion for telling your user something

alert("Hey you forgot your socks");

//Confirm gives options

const userStory = confirm("Are you 21 or older?");
console.log(userStory);

//confirm
const isOfAge = confirm("Are you 21 or older?");
console.log(isOfAge);
//PROMPT

prompt("tell me, do you take walks?");
