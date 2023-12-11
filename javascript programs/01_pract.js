let a = "Hello World !"

console.log(a)

// JavaScript Variable


// There are some rules while declaring a JavaScript variable (also known as identifiers).

// 1. Name must start with a letter (a to z or A to Z), underscore( _ ), or dollar( $ ) sign.
// 2. After first letter we can use digits (0 to 9), for example "value1".
// 3. JavaScript variables are case sensitive, for example "x" and "X" are different variables.

var b = 20                          // "var" is keyword that is used to declare a variable
var c = null

let d = "String"                    // "let" is keyword that is used to declare a variable
let e = Symbol("#")

var f = BigInt("20000")
var g = undefined

console.log("Intiger value: ",b)
console.log("Null value: ",c)
console.log("String value: ",d)
console.log("Symbols: ",e)
console.log("BigInt: ",f)
console.log("Undefined value: ",g)
const objectVariable = {
    key1: "value 1",
    key2: "value 2",
    key3: "value 2",
    key4: "value 2",
}
objectVariable.key4 = "value 4"
objectVariable.key5 = "value 5"
console.log("Value of object variable: ",objectVariable.key3)

console.log("\n\nIntiger value: ",typeof(b))
console.log("Null value: ",typeof(c))
console.log("String value: ",typeof(d))
console.log("Symbols: ",typeof(e))
console.log("BigInt: ",typeof(f))
console.log("Undefined value: ",typeof(g))

