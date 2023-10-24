const myArray = [0,1,2,3,4]
const myHeros = ["Shaktiman", "Naagraj"]
console.log(myArray[0])
console.log(myHeros[1])

const myArr2 = new Array(1,2,3,4)
console.log(myArr2[1])

//array methods 
myArr2.push(5)
myArr2.push(6)
console.log(myArr2)

myArr2.pop()
console.log(myArr2)

myArr2.unshift(9)
console.log(myArr2)

myArr2.shift()
console.log(myArr2)

console.log(myArr2.includes(9))

const newArr = myArr2.join();
console.log(myArr2)
console.log(newArr)

// slice and splice 

console.log("A", myArr2)
myna1 = myArr2.slice(1,3)
console.log(myna1)
console.log("B", myArr2)

console.log("A", myArr2)
myna2 = myArr2.splice(1,3)
console.log(myna2)
console.log("B", myArr2)
