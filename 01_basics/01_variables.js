const accountId = 144553
let accountEmail = "test@gmail.com"
var accountPassword = "1234"
accountCity = "Pune"
let accountState
// accountId = 2 // not allowed

accountEmail = "pn@google.com"
accountPassword = "123123"
accountCity = "Bhopal"

console.log(accountId)

/*

Prefer not to use var 
issue in block scope and functional scope 


*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
