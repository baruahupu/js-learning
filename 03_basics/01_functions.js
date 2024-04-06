 function sayMyName(){
    console.log("Upashana")
 }
 sayMyName()
 
 function addNumbers(num1, num2) //here num1 & num2 called parameters
 {
    console.log(num1 + num2)
 }
 addNumbers(4, 5) //here 4, 5 called arguments

 function addNumbers1(num1, num2) //here num1 & num2 called parameters
 {
    return num1 + num2
 }
console.log("result ", addNumbers1(4, 4))

function printUser(username){
    if(!username){
        console.log("Please pass an argument")
        return 
    }
    return `${username} is just logged in`
}
console.log(printUser("upashana"))
console.log(printUser()) //if no arguments passed, it will be taken as undefined

function printUser1(username = "upashanan"){ // a defult value is assigned to the parameter
    if(!username){
        console.log("Please pass an argument")
        return 
    }
    return `${username} is just logged in`
}
console.log(printUser1())  //when a defult value is assigned, even if we don't pass any argument, the default value will be printed

//rest operator
function calculateCartPrice(...num1){
    return num1;
}
console.log(calculateCartPrice(200, 500, 400))

function calculateCartPrice1(val1, val2, ...num1){
    return num1;
}
console.log(calculateCartPrice1(200, 500, 400, 600, 800))

const user = {
    name: "upashana",
    price: 199
}
function handleObject(obj){
    console.log(`User name is ${obj.name} and price ${obj.price}`)
}
handleObject(user)
handleObject({
    name: "raktim",
    price: 1999
})

const myNewArray = [100, 200, 300, 400]
function returnValue(getArray){
    console.log(getArray[0])
}
returnValue(myNewArray)