// # Datatypes are divided into two categories- Primitive, Non-primitive
// on the basis of how these data's are stored in memory and how we can access them(call by value/reference)

// PRIMITIVE : call by value
// 7 types -> String, Number, Boolean, null, undefined, Symbol(to make unique), BigInt

// JavaScript is a dynamically typed language. 
// This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. 
// You can assign different types of values to a variable during its lifetime.
const score = 100
const scoreValue = 100.3
const isLoggedIn = true
const outsidetemp = null
let userEmail; // undefined right now

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id == anotherId); // return false
console.log(id === anotherId) // return false

const bigNumber = 4578379376487232323n // using n in the last converts into bigInt


// NON- PRIMITIVE (REFERENCE TYPE) : Array, objects, functions

const heros = ["shaktiman","hatori","shishimanu"];

let myObj = {
    name : "Ankit",
    age : 21,
}

const myFunction = function(){
    console.log("Hello World")
}

// all non-primitive type have typeof -> object
console.log(typeof myFunction); // print function, but known as function object


// ************* MEMORY ***********

// Stack (Primitive) => we get copy of variables
// Heap (Non-Primitive) => By reference

let Myname = "Ankit"
let anotherName = Myname
console.log(anotherName); // output Ankit
anotherName = "Ankuu"
console.log(Myname); // output Ankit
console.log(anotherName); // output Ankuu
// These are stored in stack

let userOne = {
    email : "user@google.com",
    upi : "user@ybl"
}
let userTwo = userOne // will also take reference to the same object pointer by userOne in the heap memory
userTwo.email  = "ankit@google.com"

console.log(userOne.email); // ankit@google.com
console.log(userTwo.email); // ankit@google.com



