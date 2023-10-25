const tinderUser = new Object()

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser)

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj3 = {5:"a", 6:"b"}

const obj4 = Object.assign({}, obj1, obj2, obj3)

console.log(obj4)

const obj5 = {...obj1, ...obj2,  ...obj3}
console.log(obj5)

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedIn'))

const course = {
    courseName: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

//destructuring object
const {courseInstructor: instructor} = course
console.log(instructor)

