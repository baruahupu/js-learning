const user = {
    username: "upashana",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`)
    }
}
 
user.welcomeMessage()

const one = () => {
    let username="upashana"
    console.log(this)
}
one()

//explicit return method
const addTwo = (num1, num2) =>{
    return num1+num2
}
console.log(addTwo(4, 7))

//implicit return method
const addTwoDiff = (num1, num2) => (num1+num2)
console.log(addTwoDiff(4, 5))

const userDetail = () => ({name: "upashana"}) //in case of object {} can't be used to return an object. hence, implicit return is used in case of object
console.log(userDetail());

//Immediately Invoked Function Expressions(IIFE)
/* sometimes IIFE doesn't excute as it doesn't know where to start and where to end while invoking the function. In that case the whatever excuted before
that function needs to end by putting a semicolon  */

//named iife as the function has a name user1
(function user1() {
    console.log("User connected")
})();

//unnamed iife as the function doesn't have any name 
( (name) => {
    console.log(`${name} connected`);
})("upashana")