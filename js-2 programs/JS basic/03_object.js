const symbol = Symbol("Symbol");
    // Symbol is a built-in object whose constructor returns a symbol primitive — also called a Symbol value

let obj1 = {

    "key": "value",
    "name": "Sachin",
    "full name": "Sachin Kumar",
    "Course": "B.tech",
    [symbol]: "Set Symbol value"
}

// console.log("Object data: ", obj1);

// console.log("Access object data using dot operator: ", obj1.name);
// console.log("Access object data using square bracket: ", obj1["full name"]);
// console.log("Access object symbol value using square bracket: ", obj1[symbol]);

obj1.objfunct1 = function () {

    console.log("Create a function in the object !");
}

// obj1.objfunct1();

obj1.objfunct2 = function () {

    console.log(`Access object value outside the object through the function: ${this["full name"]}`);
}

obj1.objfunct2();