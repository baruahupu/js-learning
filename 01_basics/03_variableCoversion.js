let score1 = "22"
let score2 = "22abc"

let valueInNumber = Number(score1) //converted to number
let valueInNumber2 = Number(score2) //give NaN, as score2 is not a pure number
console.log(typeof valueInNumber2) //but it will show as number giving a value NaN
//for boolean, true => 1, false => 0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn) //true

// "" => converted to boolean gives false, "some value" => converted to boolean gives true