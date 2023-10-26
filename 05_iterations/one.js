// for of 
const arr = [1,2,3,4,5]

for (const num of arr) {
    console.log(num);
}

const superHeros = ["Shaktiman", "Nagraaj", "Spiderman", "Batman"]

for (const superHero of superHeros) {
    console.log(superHero);
}

// Maps 
const map = new Map()

map.set("IN", "India")
map.set("USA", "United States of America")
map.set("Fr", "France")
map.set("NZ", "Newzealand")

for (const [key, value] of map) {
    console.log(key, ':', value);
}

myObj = {
    username: "pankajpn",
    email: "pankaj@google.com",
    location: "pune"
}

for (const key in myObj) {
    console.log(`value for ${key}: ${myObj[key]}`);
}

// for each loop 

const coding = ["js", "ruby", "java", "python", "cpp"]

console.log(coding);
console.log('++++++++++++++++++++++++++++++++++++')
coding.forEach(function (val){
    console.log(val);
})
console.log('++++++++++++++++++++++++++++++++++++')
coding.forEach(element => {
    console.log(element);
});
console.log('++++++++++++++++++++++++++++++++++++')
function printMe(val){
    console.log(val);
}
coding.forEach(printMe)
console.log('++++++++++++++++++++++++++++++++++++')


// forEach doesn't return values
const values = coding.forEach( val => {
    return val
})

console.log(values) //undefined

const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNums.filter(num => num > 4)

console.log(newNums); //[ 5, 6, 7, 8, 9, 10 ]

const myNumbers = [1,2,3,4,5,6,7,8,9,10]

const newNumbers = myNumbers.map((num) => num + 10 )
console.log(newNumbers);


const myNewNums = myNumbers.map((num) => num*10).map((num) => num + 1).filter((num) => num > 40)
console.log(myNewNums);


const myArr = [1,2,3,4,5]

// const myTotal = myArr.reduce(function (acc, currVal){
//     console.log(`acc: ${acc} and currVal: ${currVal}`);
//     return acc + currVal
// }, 0)

const myTotal = myArr.reduce((acc, currVal) => acc+currVal,0)

console.log(myTotal);

const shoppingCart = [
    {
        itemName: "java",
        price: 999
    },
    {
        itemName: "mobile dev",
        price: 5999
    },
    {
        itemName: "data science ",
        price: 4999
    },
    {
        itemName: "dsa",
        price: 8999
    },
    {
        itemName: "web dev",
        price: 12999
    },
    {
        itemName: "Ios dev",
        price: 15999
    }
]

const totalPrice = shoppingCart.reduce((acc, item) => (acc + item.price), 0)
console.log(totalPrice);