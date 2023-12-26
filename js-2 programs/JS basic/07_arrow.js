// Arrow functions in js

const arrowFunct = () => {

    console.log("Arrow function in js !\n");
}

arrowFunct();

const obj = {

    userName: "Sachin",
    greetUserName: function () {
        
            // In arrow functions, the value of this is lexically scoped, meaning it is determined by the surrounding code and does not have its own this context. This behavior is different from regular functions, which have their own this context that is dynamically determined at runtime.

        console.log(`Welcome ${this.userName} to the codeWorld !\n`);
    }
}

obj.greetUserName();

obj.userName = "Rohit Kumar";
obj.greetUserName();