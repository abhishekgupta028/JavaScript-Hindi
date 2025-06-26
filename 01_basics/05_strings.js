// String is an Object in JavaScript

const name = "Abhishek"
const age = 20

console.log(name + age + " hello"); // generally outdated way to print or do strings operations like this in JS

console.log(`Hello my name is ${name} and my age is ${age}`);  // it is preffered way in JS to print string operations because we can also use string methods directly inside the console through its variables.method_name

console.log(`Hello my name is ${name.toUpperCase()} and my age is ${age}`);  // like here name.toUpperCase() we've used

const gameName = new String("Abhishek-Gupta-com")

console.log(gameName);

console.log(gameName.__proto__);
console.log(gameName[0]);

console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName);

console.log(gameName.charAt(2));
console.log(gameName.indexOf('i'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-19, 4)
console.log(anotherString)

const newStringOne = "   Ajay    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://abhishek.com/abhi%20gupta"
console.log(url.replace('%20', '-'));

console.log(url.includes('sharma'));

console.log(gameName.split('-'))









