let myDate = new Date()
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toLocaleString())
console.log(myDate.toDateString())

console.log(typeof myDate)

let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate.toString())

let myCreatedDateWithTime = new Date(2023, 0, 23, 5, 3)
console.log(myCreatedDateWithTime.toString())
console.log(myCreatedDateWithTime.toLocaleString())
console.log(myCreatedDateWithTime.toDateString())

let myCreatedDateWithFormat = new Date("2023-01-14")
console.log(myCreatedDateWithFormat.toLocaleString())

let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(Math.floor(myTimeStamp/1000))

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth())  //month starts from 0

console.log(newDate.toLocaleString('default', {
    weekday: "long"
}))



