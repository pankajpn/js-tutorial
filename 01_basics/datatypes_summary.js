// Primitive - call by value
//  7 types: String, Number, Boolean, null, undefined, Symbol , BigInt

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId) // false

// Reference Type  (Non Primitive)
// Arrays, Objects, Functions 

const heros = ["shaktiman", "naagraj", "doga"]

let myObj = {
    name: "Pankaj",
    age: 22
}

const myFunction = function(){
    console.log("Hello World!")
}

console.log(typeof bigNumber) // undefined

console.log(typeof myFunction) // function

console.log(typeof id) // symbol 






