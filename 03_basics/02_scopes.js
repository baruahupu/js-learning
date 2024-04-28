//let is a block scoped variable, whereas var is a global scope variable

function one(){
    const username="upashana"
    function two(){
        const website="youtube"
        console.log(username)
    }
    // console.log(website) //cannot access website as it is defined inside the function two and it's scope is limited to function only
    two()
}
one()

if(true){
    const name="upashana"
    if(name === 'upashana'){
        const website = " youtube"
        console.log(name + website)
    }
}