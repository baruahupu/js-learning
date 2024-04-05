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

