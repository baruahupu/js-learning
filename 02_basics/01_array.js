const myNum = [0, 1, 2, 3, 4]
const myNum2 = new Array(5, 7, 9, 11)

//array methods
myNum.push(8) // pushes value to the last of the array
console.log(myNum) // [0, 1, 2, 3, 4, 8]

myNum.pop() //remove value from the last of the array
console.log(myNum) // [0, 1, 2, 3, 4]

myNum.unshift(9) // pushes value to the start of the array
console.log(myNum) //[ 9, 0, 1, 2, 3, 4 ]

myNum.shift() // remove value from the start of the array
console.log(myNum) //[ 0, 1, 2, 3, 4 ]

console.log(myNum.includes(9)) //false
console.log(myNum.indexOf(2)) // 2
console.log(myNum.indexOf(9)) //-1, if a value doesn't exist it returns -1

const newNum = myNum.join()
console.log(newNum) //convert the array to string

const myA1 = myNum.slice(1, 3)
console.log(myA1) //[ 1, 2 ]

const myA2 = myNum.splice(1, 3)
console.log(myNum) //[ 0, 4 ]
console.log(myA2) //[ 1, 2, 3 ]

//slice doesn't manipulate the original array but splice manipulate the original array and removes the splice portion from the original array.
//slice doesn't include the last index, splice includes the last index