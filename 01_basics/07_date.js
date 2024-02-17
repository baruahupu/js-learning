//Date is an object in JS
let myDate = new Date()

console.log(myDate) //2024-02-17T10:30:41.327Z
console.log(myDate.toString()) //Sat Feb 17 2024 10:30:41 GMT+0000 
console.log(myDate.toDateString()) //Sat Feb 17 2024
console.log(myDate.toLocaleString()) // 2/17/2024, 10:30:41 AM

let myCurrentDate = new Date(2023, 0, 23)
console.log(myCurrentDate.toDateString()) //Mon Jan 23 2023

let myTimeStamp = Date.now()
console.log(myTimeStamp) //1708165841345
console.log(myCurrentDate.getTime()) //1674432000000
console.log(myDate.getMonth()) //1
console.log(myDate.getDay()) //6

let dayValue = myDate.toLocaleString('default', {
    weekday: "long"
})
console.log(dayValue) //Saturday