// strings
console.log("this is a string.");
let email = "pravesh@gmail.com";
console.log(email);

// stirng concatenation

let firstName = "Brandon";
let lastName = "Sanderson";
let fullName = firstName + " " + lastName;
console.log(fullName);

//getting characters
console.log(fullName[2]);

//string length
console.log(fullName.length);

//string methods
console.log(fullName.toUpperCase());
let result = fullName.toLowerCase();
console.log(result, fullName);

let index = email.indexOf('@');
console.log(index);

//common string methods
let email = 'mario@thenetninja.co.uk';

let result = email.lastIndexOf('n');

let result = email.slice(0, 5);

let result = email.substr(4, 10);

let result = email.replace('m', 'w');

let result = email.replace('n', 'w'); //replace the first n it comes through

console.log(result);
