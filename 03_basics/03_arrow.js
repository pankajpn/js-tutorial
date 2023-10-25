const user = {
    username: "pankaj",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`)
        console.log(this)
    }
}

user.welcomeMessage()
user.username = 'Sam'
user.welcomeMessage()

console.log(this) // here will be empty - the current context 

const addTwo = (num1, num2) => num1 + num2

console.log(addTwo(3,4))

// we need to use parenthesis when returning an object 
const getUser = () => ({username: "pankaj", age: 24})
console.log(getUser())