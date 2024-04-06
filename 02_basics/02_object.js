//object literals

const mySym = Symbol("key 1")

const jsUser = {
    name: "user 1",
    "full name": "user full name",
    [mySym] : "user key 1", //symbol can be defined as a key in an object using [] 
    email: "user1@gmail.com",
    isLoggedIn: false,
    loggedDay: ["monday", "tuesday"]
}

console.log(jsUser.name)
console.log(jsUser["name"])
console.log(jsUser["full name"])
console.log(jsUser[mySym])
console.log(jsUser)

jsUser.greeting = function(){
    console.log("hello js user")
}

jsUser.greetingTwo = function(){
    console.log(`hello js user ${this.name}`)
}

console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())

jsUser.name = "user 2"
Object.freeze(jsUser) // it will freeze the values of the key so that the values can't be changed again
jsUser.name = "user 3"
// console.log(jsUser)


//singleton object

const myObj = new Object() //when an object declared through a constructor

myObj.name = "Object User"
myObj.email = "ouser@gmail.com"
myObj.isLoggedIn = false

console.log(myObj)

const regularUser = {
    name: "user",
    fullname: {
        userfullname: {
            firstname: "upashana",
            lastname: "baruah"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname) //object within object can be access using . operator

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}

// const obj3 = {obj1, obj2}
const obj3 = Object.assign({}, obj1, obj2) // assign(target, ...source), more than 1 source can be added
console.log(obj3)
const obj4 = {...obj1, ...obj2} //spread operator can be used to merge multiple arrays
console.log(obj4) 

console.log(Object.keys(myObj)) //it gives all the keys in the object in an array
console.log(Object.values(myObj)) //it gives all the values in the object in an array
console.log(Object.entries(myObj)) //it gives all the key:values pairs as array in the object
console.log(myObj.hasOwnProperty("isLoggedIn")) //it gives all the key:values pairs as array in the object

const course = {
    courseName: "JS",
    coursePrice: "999",
    courseInstructor: "Upashana Baruah"
}

const {courseInstructor: instructor} = course //deconstruction of an object

console.log(instructor)