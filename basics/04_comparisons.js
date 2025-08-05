console.log("2" > 1) // will output true
console.log("02" > 1) // will output true
console.log("2" == 2) // return true


console.log(null == 0) // return false
console.log(null > 0) // return false
console.log(null >= 0) // return true
// in javascript comparison and equality checks works differently
// comparisons(<,>,<=,>=) converts null into 0 and then compare
// but equality check doesn't converts
// sometimes null is converted into 0, sometimes NaN

// in all above three cases if undefined was there in place of null then all would have returned false

// === (Strict Check) -> not only checks the value, but the datatype also
console.log("2"===2) // return false
