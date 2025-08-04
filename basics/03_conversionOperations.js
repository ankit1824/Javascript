let score = "33abc"
// let score = null   #will return 0 after converting to Number
// let score = undefined   # undefined will be printed after coversion
// let score = true/false   # 1/0 will be returned

console.log(typeof score)
console.log(typeof (score))

let valueInNumber = Number(score) // capital N 
console.log(typeof valueInNumber) 
console.log(valueInNumber) // will output NaN i.e. not a number. Insted of this, type is a Number.

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn) 
// 1 => true ; 0=> false
// "" => false ; "Ankit" => true

let somenumber = 33
let stringNumber = String(somenumber)
console.log(stringNumber); // will output 33. Type will be string.

//   ******** Operations *********

let value = 3
let negvalue = -value
console.log(negvalue);  // will print -3.

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/2);
// console.log(2%2);

let str1 = "hello"
let str2 = " Ankit"
let str3 = str1 + str2
console.log(str3); // will print hello Ankit 

console.log("1"+2); // will output 12
console.log(1+"2"); // will output 12
console.log("1"+ 2 + 2); // will output 122
console.log(1+2+"3"); // will output 33

console.log(+true); // will output 1
console.log(+""); // will output 0

let num1, num2, num3
num1=num2=num3=2+2 // not a good practice

let gameCounter = 100
console.log(gameCounter++) // output = 100
// now gameCounter becomes 101
console.log(++gameCounter) // output = 102









