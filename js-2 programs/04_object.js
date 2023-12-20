let users = {
    userId: 1,
    userName: {
        nickName: {
            name: "Rohit",
            fullName: "Rohit Kumar"
        },
        realName: {
            name: "Sachin",
            fullName: "Sachin Kumar"
        }
    },
    userSalary: "80k"
}

// console.log("Nested Object: ", users);

console.log(`Access nested object value: ${users.userName.nickName.fullName}`);
console.log(`Access nested object value: ${users.userName.realName.fullName}`);


let obj2 = { 1: "first value", 2: "second value" };
let obj3 = { 3: "third value", 4: "fourth value" };

// let obj4 = Object.assign({ obj2, obj3 });

let obj4 = { ...obj2, ...obj3 };
console.log("Concat two objects using 'spread' or 'assign' operator: ", obj4);


console.log("Access keys of the object: ", Object.keys(users));

console.log("Access values of the object: ", Object.values(users));

console.log("Access entries of the object: ", Object.entries(users));
