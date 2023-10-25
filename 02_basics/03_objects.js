// singleton -> single instance of an object is used, it is created using constructor method


const mySymb = Symbol("key1")

// object literals
const jsUser = {
    name: "Pankaj",
    "full name": "Pankaj Nargesh",
    age: 24,
    location: "Pune",
    email: "pankaj@google.com",
    isLoggedIn: false,
    lastLoggedInDays: ["Monday", "Saturday"],
    [mySymb]: "mykey1"
}

console.log(jsUser)
console.log(jsUser.name)
console.log(jsUser["email"])

// console.log(typeof jsUser.mySymb)
console.log(jsUser[mySymb])

jsUser.email = "pankaj@chatgpt.com"

// Object.freeze(jsUser)
console.log(jsUser)

jsUser.email = "pankaj@microsoft.com"
console.log(jsUser)

jsUser.greeting = function(){
    console.log("Hello, JS User!")
}


console.log(jsUser.greeting)