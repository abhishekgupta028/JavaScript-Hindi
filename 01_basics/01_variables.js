const accountId = 845307
let accountName = "Abhishek"
var accountPass = "12345"
accountEmail = "akg@gmail.com"

//accountId = 2 //not allowed

accountName = "Tushar"
accountPass = "93042"
accountEmail = "tushar@gmail.com"

let accountState

console.log(accountId);
/*
Prefer not to use var 
because of its issue in block scpe and functional scope
*/

console.table([accountId,accountName,accountPass,accountEmail,accountState])