// Promises are a mechanism in JavaScript that helps us manage asynchronous operations. They provide a cleaner and more organized way to handle asynchronous code compared to traditional callback functions. 

// A promise represents the eventual completion or failure of an asynchronous operation, and it can be in one of three states: 'pending', 'fulfilled', or 'rejected'.

// Handling Promise States:

// Pending: The initial state of a promise.

// Fulfilled: The asynchronous operation completed successfully. You call 'resolve(value)' to fulfill the promise.

// Rejected: The asynchronous operation failed. You call 'reject(error)' to reject the promise.


const promiseOne = new Promise(function(resolve, reject) {

    setTimeout(function() {
        
        resolve();          // resolve section execute only after the execution of the async code.

        console.log("Promise has been done.");
    }, 1000);
});

promiseOne.then(function() {

    console.log("Promise has been resolved.");
});

const promiseTwo = new Promise(function(resolve, reject) {

    setTimeout(function() {

        console.log("Second Promise has been done.");

        resolve();
    }, 1000);

}).then(function() {

    console.log("Second promise has been resolved.");
})

const promiseThree = new Promise(function(resolve, reject){
    
    setTimeout(() => {
        
        let userError = false;

        if (!userError) {

            resolve({userName: "Sachin Kumar", userId: 12447858});
        } else {

            reject("ERROR: Something Went Wrong !");
        }

    }, 1000);
})
.then(function(userDetails) {

    console.log("Username:", userDetails.userName);

    return userDetails;
})
.then((details) => {

    console.log("UserId:", details.userId);
})
.catch((errorMsg) => {

    console.log(errorMsg);
})
.finally(() => {

    console.log("The Promise is either resolve or reject.");
});


const promiseFour = new Promise(function(resolve, reject) {

    let userError = true;

    setTimeout(() => {
        
        if (!userError) {

            resolve({user: "Sachin", Id: 215487});
        }
        else {

            reject("Error: Something went wrong to fetch data of the user.");
        }
    }, 1000);
})

async function consumePromiseFour() {

    try {
        const response = await promiseFour;

        console.log("Name: ", response.user, ", Id: ", response.Id);

    } catch (error) {
        
        console.log(error);
    }
}

consumePromiseFour();


async function gitHubData() {

    try {
        
        const response = await fetch("https://api.github.com/users/azaadmottan");
    
        const data = await response.json();
    
        console.log(data);

    } catch (error) {
        console.log(error);
    }
} 

gitHubData();


fetch("https://api.github.com/users/azaadmottan")
.then((response) => {

    return response.json();
})
.then((userData) => {

    console.log(userData);
})
.catch((error) => {

    console.log(error);
});