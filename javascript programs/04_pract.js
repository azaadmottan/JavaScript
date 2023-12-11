let sum = 0, n = 5

for (let i = 0; i <= n; i++)                    // for loop
{
    sum += i
}
console.log("The sum of first n natural number is",sum)

let obj = {
    key1 : 10,
    key2 : 20,
    key3 : 30,
    key4 : 40,
    key5 : 50
}

for (let a in obj)                              // for in loop
{
    console.log("The value of",a,":",obj[a])
}

for (let a of "String")                         // for of loop
{
    console.log(a, " ")
}

let marks = {
    mark1 : 100,
    mark2 : 880,
    mark3 : 90,
    mark4 : 700,
    mark5 : 80,

}

for (let i = 0; i < Object.keys(marks).length; i++)
{
    console.log("The value of",Object.keys(marks)[i],":",marks[Object.keys(marks)[i]])
}

console.log("\nUsing for in loop\n")
for (let key in marks)
{
    console.log("The value of",key,":",marks[key])
}