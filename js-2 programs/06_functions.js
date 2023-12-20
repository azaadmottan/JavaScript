function userFunct(userData) {

    return `Username: ${userData.name} and UserId: ${userData.id}`; 
}

let user = { 
    name: "Sachin Kumar",
    id: "210458"
}

console.log("Pass object to the function:\n", userFunct(user));

function arrFunct(...params) {
    
    return params;
}

console.log("\nPass array to the function:\n", arrFunct(10, 20, 30, 40));