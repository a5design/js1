firstName = prompt("What is your first name please?");
console.log(firstName);
lastName = prompt("..and your last name is?");
console.log(lastName);

alert(lastName + " is confirmed as your last name.");
const usersBirthday = prompt("Please enter your birthdate below");
console.log(usersBirthday);

let bday = new Date(usersBirthday);
alert(bday + " is your birthday!");
alert("GOOD BYE");
