const userEmail = "pn@pannkaj.ai"

if (userEmail) {
    console.log("Got userEmail")
} else {
    console.log("Don't have userEmail")
}

//falsy values 

/*

false
0
-0
BignInt 0n
""
null 
undefined 
NaN

*/

//truthy values 
/*
"0"
'false'
" "
[]
function(){}

*/

const myArr = []

if (myArr.length === 0) {
    console.log("Array is empty.")
}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty")
}

// Nullish Coalescing Operator (??):null undefined 

let val1
// val1 = 5 ?? 10
// val1 = null ?? 10

// val1 = undefined ?? 15

val1 = null ?? 10 ?? 15

console.log(val1)

// Ternary Operator 

// condition ? true: false 

