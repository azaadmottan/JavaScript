// Immediately Invoked Function Expression (IIFE)

// An Immediately Invoked Function Expression (IIFE) is a JavaScript design pattern where a function is defined and executed immediately after its creation. This pattern helps create a private scope for variables, preventing them from polluting the global scope. 

(function IIFE() {
    // named IIFE

    console.log("Immediately Invoked Function Expression !");
})();           // if we use IIFE then we have to terminate the IIFE function before starting the another IIFE function 

( (name) => {
    // unnamed IIFE
    
    console.log(`Welcome ${name} to the codeMaster !`);
} )('Sachin Kumar');
