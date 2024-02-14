//primitive (uses STACK memory)

//symbol : it defines all the variables as unique even if the variables given the same value
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id == anotherId)

//bigInt: add n at the last of a number to define it as bigint
let bigNumber = 65641265454554545n

//non primitive (uses HEAP memory : whenever a variable is declared in Non Primitive DT, it gives a reference of the heap memory)

//array
const heros = ["shaktiman", "superman", "spiderman"]

//object
let myObj = {
    name: "upashana",
    age: 20
}

//functions 
const myFunc = function(){
    console.log("hello")
}

//java script is a dynamically typed language as we don't need to define the data type of a variable while declaring or defining the variable

//example of call by value & call by refernce

let name1 = "upashana"
let name2 = name1 //value of name1 copied to name2
name1 = "raktim"

console.table([name1, name2]) 

let obj1 = {
    name: "upashana"
}
let obj2 = obj1 // the reference of the memory of obj1 is assigned to obj2, hence any changes made in any object will be stored in the same memory, so it will reflect the changes in both the object
obj1.name = "raktim"
console.table([obj1, obj2])