const marvel_heros = ["Thor", "IronMan", "Spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros)
// console.log(marvel_heros[3])

const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros)


// spread operator 

const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros)

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)

console.log(Array.isArray("Pankaj"))
console.log(Array.from("Pankaj"))
console.log(Array.from({name:"Pankaj"})) // interesting -> we need to specify whether we want o create array of key or values

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2,score3))

