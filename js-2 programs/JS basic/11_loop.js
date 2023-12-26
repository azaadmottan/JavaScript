// if we want to return value from 'foreach-loop' is not  possible through immediate method. we have to return value explicitly!.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const arrResp = [];

const response = arr.forEach(items => {
    
    if (items > 5) {
        
        arrResp.push(items);
    }
});

console.log(`Explicitly return values from 'foreach-loop':  ${arrResp}`);

// we have another method to return values from loop using method called 'filter'

const arrFilt = arr.filter( (items) => items > 5 )
// filter method return value implicitly, we don't have need to return values explicitly.

console.log(`Filter return values implicitly: ${arrFilt}`);
