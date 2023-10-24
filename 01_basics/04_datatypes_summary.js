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


// ++++++++++++++++++++++++++++++++

// Memory -> Stack, Heap 
// primitive types -> Stack
// non primitives -> heap 

let myYoutubeName = "Pankaj"
let anotherName = myYoutubeName

anotherName = "chai aur code"

console.log(myYoutubeName)
console.log(anotherName)

let user = {
    email: "user@google.com",
    upi: "user@ybl"
}

console.log(user)

let user2 = user

user2.email = "user2@google.com"

//value change in both
console.log(user)
console.log(user2)









