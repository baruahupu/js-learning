//string interpolation

let name = "upashana"
let age = 27
console.log(`Hi, my name is ${name} and my age is ${age}`)

const anotherName = new String('Raktim') //it creates a string object and reprsent the value in key=>value pair

console.log(anotherName.length) //length of string
console.log(anotherName.toUpperCase()) //convert to upper case
console.log(anotherName.charAt(2)) //to find the character by index
console.log(anotherName.indexOf("k")) //to find the position of a letter
console.log(anotherName.substring(0, 4)) //substring of a string, cannot give negative value, 
console.log(anotherName.slice(-5, -2)) //can give negative values at the start and end position, it will start counting in reverse

const greeting = '   Hello world!   ';
console.log(greeting.trim()); //trim removes whitespace from both its beginning and end. Whitespace is defined as white space characters plus line terminators.

// trimStart()=> trim the whitespace in the start 
// trimEnd()=> trim the whitespace in the end 

const url = "https://google.com/binge%20watching"
console.log(url.replace("%20", "-")) //replace the string given in the 1st position to the string given in the 2nd position

//charCodeAt(index) => The charCodeAt() method of String values returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.
//endsWith(searchString) => It determines whether a string ends with the characters of this searchString, returning true or false as appropriate.
//endsWith(searchString, endPosition) => The end position at which searchString is expected to be found (the index of searchString's last character plus 1).
//includes() => it performs a case-sensitive search to determine whether a given string may be found within this string, returning true or false as appropriate.
//padEnd(targetLength, padString) => it pads the string with the padString (repeated, if needed || if padString not given add blank space) so that the resulting string reaches targetLength. The padding is applied from the end of this string.
//padStart() => same as above just pads at the start
//repeat(count) => it returns a new string which contains the specified number (count) of copies of this string, concatenated together.
/*
    replace(pattern, replacement) => it returns a new string with one, some, or all matches of a pattern replaced by a replacement. 
                                        The pattern can be a string or a RegExp, and the replacement can be a string or a function called for each match. 
                                        If pattern is a string, only the first occurrence will be replaced. The original string is left unchanged.
*/
//replaceAll(pattern, replacement) => it returns a new string with all matches of a pattern replaced by a replacement. 

const msg = 'Hello world!'
console.log(msg.split('')) //it takes a pattern and divides this string into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.




