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

const { userId: id, userName: name, userSalary: salary } = users;

console.log(`Destructuring of an object: \nId: ${id}, Name: ${name.realName.fullName}, Salary: ${salary}`);