function sayMyName(){
    console.log("Pankaj")
}

sayMyName()
sayMyName()

// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2)
// }

function addTwoNumbers(number1, number2) {
    return number1 + number2
}

let result = addTwoNumbers(3,4)
console.log(result)

function loginUserMessage(username){
    if(username == undefined){
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("pankajpn"))

console.log(loginUserMessage())

function calculateCartPrice(...prices){
    return prices
}

console.log(calculateCartPrice(200, 400, 500))