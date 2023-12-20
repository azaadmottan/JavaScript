// Arrays in JavaScript

let arr1 = [1, 2, 3, 4, 5, 6];

console.log("Array-1: ", arr1);

// Arrays can be created by using array constructor

let arr2 = new Array();
arr2.push(10, 20, 30, "string value-1", "string value-2");          // Arrays in js also contain string, boolean, numbers value also.
                                                                    // Arrays in js behave like Object    
console.log("Array-2: ", arr2);

arr2.pop(20);
console.log("Array-2 after pop operation: ", arr2);

// Array Shift operation

let arr3 = [2, 4, 6, 8, 10];

arr3.unshift(10);                               // 'unshift' operation add new value in beginning of the array
console.log("Array unshift operation: ", arr3);

arr3.shift();                                   // 'shift' operation remove start value from the beginning of the array
console.log("Array shift operation: ", arr3)


let arr4 = [1, 2, 3, 4, 5, 6];

console.log("Slice array: ", arr4.slice(2, 4));                             // 'slice (start-index, end-index)'  return value from the array
                                                                            // 'slice' doesn't alter the original array  

let arr5 = [1, 2, 3, 4, 5, 6];

let spliceArr = arr5.splice(2, 4);                                          // 'splice (start-index, range)' alter the original array and also they return new array 

console.log("Original array: ", arr5);
console.log("Splice array: ", spliceArr);

