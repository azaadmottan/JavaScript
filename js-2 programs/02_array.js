// Concatenation of two array

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];

let newArr1 = arr1.concat(arr2);             // when we concatenate two array using 'concat' they return new array 
                                            // and also they concate only 'one' array at a time 
console.log("Concate two array using concat: ", newArr1);                        

let arr3 = [11, 12, 13, 14, 15];

let newArr2 = [...arr1, ...arr2, ...arr3];

console.log("Concat more than two array using spread operator: ", newArr2);


let strVal = "Sachin";

let strArr = Array.from(strVal);            // convert string to array

console.log("Convert string to array: ", strArr);

let num1 = 10, num2 = 20, num3 = 30;

console.log("Create array using 'of' operator: ", Array.of(num1, num2, num3));      // create an array