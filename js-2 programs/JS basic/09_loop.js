// "for of" loop is working for arrays

let arr = [10, 20, 30, 40, 50];

for (const i of arr) {

    console.log(i);
}

const map = new Map();
// map hold key pair values and also contain only unique values.

map.set("in", "India")
map.set("usa", "United States of America")
map.set("rs", "Russia")
// map.set("rs", "Russia")      // unique value only

for (const [key, value] of map) {

    console.log(`${key} (key): ${key} (value)`);
}

// "for in" loop is working for both arrays & objects

const obj = {
    
    "in": "India",
    "usa": "United States of America",
    "fr": "France",
    "rs": "Russia"
}

for (const key in obj) {
    
    console.log(`${key} (key): ${obj[key]} (value)`);
}

for (const key in arr) {

   console.log(`${key} index value: ${arr[key]}`)
}