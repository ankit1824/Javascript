const Myname = "Ankit"
const repoCount = 50
// console.log(Myname + repoCount + "Value");

//    `` -> backticks(String interpolation) : Here we introduce placeholders and then inject values
console.log(`Hello my name is ${Myname} and my repo count is ${repoCount}`); 
// output -> Hello my name is Ankit and my repo count is 50

// Another method of declaring a string
const gameName = new String('ankit') // will invoke the constructor -> string i.e. access it as an object
// Here this string is stored in form of key value pair: 0->A, 1->N, 2->K ...
//  Also there are several prototypes as well and prototype's method and we can access those
// go to console to see those protos and methods
console.log(gameName[0]);

console.log(gameName.__proto__); // Accessing prototype.. will return object -> {}
console.log(gameName.length); // output -> 5

console.log(gameName.toUpperCase); // output ANKIT.. Accessing methods under proto.. Also it won't change the oririnal gameName(due to Stack)

console.log(gameName.charAt(2)) // will output character at index 2 i.e. -> k
console.log(gameName.indexOf('t')) // output = 4

// Go to console and see different methods


