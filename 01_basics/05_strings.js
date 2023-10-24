const name = "Pankaj"
const repoCount = 50
// console.log(name + repoCount) //not recommended to use like this
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String('Pankaj-PN')

console.log(gameName[0])
console.log(gameName.__proto__)

console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(1))
console.log(gameName.indexOf('a'))

const newString = gameName.substring(0, 4)
console.log(newString)

const anotherString = gameName.slice(0, 4)
console.log(anotherString)

const newString1 = "   Pankaj     "
console.log(newString1)
console.log(newString1.trim())

const url = "https://pankaj.com/pankaj%20nargesh"
console.log(url.replace('%20', '-'))
console.log(url.includes("pankaj"))

console.log(gameName.split('-'))



