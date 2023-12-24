const obj = [

    {
        title: "Book 1st", genre: "Physics", publish: 1885, edition: 2000 
    },
    {
        title: "Book 2nd", genre: "Chemistry", publish: 2000, edition: 2020  
    },
    {
        title: "Book 3rd", genre: "BEEE", publish: 1700, edition: 2016 
    },
    {
        title: "Book 4th", genre: "ED", publish: 1800, edition: 2014
    },
    {
        title: "Book 5th", genre: "COA", publish: 1888, edition: 2002 
    },
    {
        title: "Book 6th", genre: "OS", publish: 1995, edition: 2006 
    },
];


const response = obj.filter( (items) => items.publish <= 1995 );

// console.log(response);


// map function: The map() method is an iterative method. It calls a provided callbackFn function once for each element in an array and constructs a new array from the results.

const perSquare = [ 1, 4, 9, 16, 25, 36 ];

let roots = perSquare.map( (root) => Math.sqrt(root) ); 

// console.log(`Roots of the given numbers: ${roots}`);


// reduce method: The reduce() method is an iterative method. It runs a "reducer" callback function over all elements in the array, in ascending-index order, and accumulates them into a single value. Every time, the return value of callbackFn is passed into callbackFn again on next invocation as accumulator. The final value of accumulator (which is the value returned from callbackFn on the final iteration of the array) becomes the return value of reduce().


const shopCart = [

    { item: "T-Shirt", price: 2000 },
    { item: "Shirt", price: 2500 },
    { item: "Pent", price: 1800 },
    { item: "Pent-Jeans", price: 4000 },
    { item: "Top", price: 2500 },
    { item: "Pent-Top", price: 8000 }
];

let items = shopCart.reduce( (accumulates, currentValue) => {

    console.log(`Acc: ${accumulates}, Curr: ${currentValue.price} & Next Acc value: ${accumulates} + ${currentValue.price}\n`);

    return accumulates + currentValue.price;
}, 0 );


// let items = shopCart.reduce( (accumulates, currentValue) => (accumulates + currentValue.price), 0 )

// console.log(`Total price : ${items}`);

