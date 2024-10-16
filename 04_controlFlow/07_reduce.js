let myarr = [1,2,3];

let reducer = myarr.reduce( (acc,currVal) => {
    return acc+currVal
},0);

// console.log(reducer);


let shoppingCart = [
    {
        course: 'js',
        price : 1999
    },
    {
        course: 'py',
        price : 4999
    },
    {
        course: 'mobile dev',
        price : 12099
    },
];

let cart = shoppingCart.reduce( (acc, item) => {
    return acc + item.price
},0);

console.log(cart);
