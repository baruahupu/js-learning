console.log(null > 0) //false
console.log(null == 0) //false
console.log(null >= 0) //true

/* equality check == and comparisions > < <= >= works differently. comparisions convert null to a number, treating it as 0, 
that's why null >= 0 is true, and null > 0 is false
*/