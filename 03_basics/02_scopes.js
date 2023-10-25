let a  = 300
var c = 200
if(true) {
    let a = 10
    const b = 20
    var c = 30
    console.log("Inner a : ", a)
}

console.log(a) // a will be 300
// console.log(b)
console.log(c) // here c is 200

function one(){
    username = "pankaj"

    function two(){
        website = "youtube"
        console.log(username)
    }

    // console.log(website) //error wesite is not in scope

    two()
}

one()


console.log(addone(5)) //it is accesible here 
function addone(num){
    return num+1
}

console.log(addone(5))

//console.log(addTwo(5)) // this is error - hoisting - we cannot use functions before their declaration
const addTwo = function(num){
    return num+2
}

console.log(addTwo(5))



