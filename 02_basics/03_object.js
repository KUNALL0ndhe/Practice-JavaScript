let odd = { a : "1", c: "3" , e: "5" };
let even = { b : "2", d: "4", f: "6"};

// let merge = Object.assign({}, odd, even); // one way to merge the object
let merge = { ...odd,...even}
console.log(merge); // Most common method to merge the object 

const tinderUSer = {
    id: "123abc",
    name:"Kunal",
    isLoggedIn:true,
    point: null,
};

console.log(Object.keys(tinderUSer),"keys"); // gives all the Keys in the given object
console.log(Object.values(tinderUSer),"values"); // give all the values in the given object
console.log( Object.entries(tinderUSer),"entries"); // it merge the key and the value into and array and returns an array of object
console.log(tinderUSer.hasOwnProperty("point")); // returns boolean , while the propertyKey is provided
// in the hasOwnProperty it checks whether the key is present or not

console.log(tinderUSer.hasOwnProperty("point"),"check point")
// ++++++++++++++++++++++++ Onject destructuring ++++++++++++++

// suppose i want to access one key of an object i can destructure it and use it for further usecase

const {isLoggedIn : online, name } = tinderUSer;
console.log(`is ${name} online ? ${online}`);
