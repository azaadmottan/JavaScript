// foreach loop 

let arr = ["c", "cpp", "java", "py", "js"];

arr.forEach( (item, index, arr) => {

    console.log(item, index, arr);
} )

// foreach loop with array-object

let arr2 = [
    {
        langName: "C-Plus-Plus",
        langFileName: "cpp"
    },
    {
        langName: "java",
        langFileName: "java"
    },
    {
        langName: "python",
        langFileName: "py"
    },
    {
        langName: "javascript",
        langFileName: "js"
    },
]

arr2.forEach( (item) => {
    
    console.log(item.langName,": ", item.langFileName);
} )