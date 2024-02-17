const balance = new Number(100)

console.log(balance);
console.log(balance.toString().length);

//gives a precise value of the variable as defined by the count
const otherNum = 23.5677
console.log(otherNum.toPrecision(3))  //23.6
console.log(otherNum.toPrecision(2)) //24

const num = 100000000
console.log(num.toLocaleString('en-IN'))

console.log(Math.abs(-4)) //absolute value
console.log(Math.round(4.66)) 
console.log(Math.ceil(4.2))
console.log(Math.floor(4.6))
console.log(Math.min(-4, 5, 7, 3)) //find min value from array
console.log(Math.max(-4, 6, 5, 9)) //find max value from array
console.log(Math.exp(1)) //it returns e raised to the power of a number.
console.log(Math.pow(7, 3)) //it returns the value of a base raised to a power.
console.log(Math.sqrt(4, 2)) //static method returns the square root of a number.
console.log(Math.trunc(14.4662))//it returns the integer part of a number by removing any fractional digits.

console.log((Math.random() * 10) + 1)

const min = 10
const max = 20

console.log(Math.floor((Math.random() * (max - min + 1) + min)))
