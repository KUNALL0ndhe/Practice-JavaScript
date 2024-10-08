// Primitive Data Type

let score = 33; // number
let Vname = "abc"; //string
let isLoggedIn = true; // Boolean
let temperature = null; // Null type of is Object
let valueProvided; // undefined
let stock = 1234567890987654321n; // bigint
let MySymbol = Symbol("abc"); // symbol

// Non Primitive Data type
// Array, Object, Function

const hero = ["shaktiman", "kilmada", "krish"]; // typeof is Object
const obj = {
    name : "kunal",
    age : 25
}; // typeOf is Object
const func = function() {
    console.log("hello world")
} ; // typeof is FunctionObject

// func();

// above type of
// console.log("Data Type _______________________________");

// console.log(typeof score);
// console.log(typeof Vname);
// console.log(typeof isLoggedIn);
// console.log(typeof temperature);
// console.log(typeof valueProvided);
// console.log(typeof stock);
// console.log(typeof MySymbol);
// console.log(typeof hero);
// console.log(typeof obj);
// console.log(typeof func);

//+++++++++++++++++++++++++++++++++++++++++++++++++ MEMORY +++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

//There are two types of memory 1) Stack & 2) Heap
/*
In Stack (primitive data types - 7 string, number, boolean, null, undefined , bigint , symbol );
in Heap (non - Primitive data type  -  Array, Object, function) refrence


*/
// ********STACK**********
let channelOne  = "youtube.com";
let buttonOne = channelOne; // here copy of the value is provided not the original value

buttonOne= "instagram.com"; // here new value is added in the Stack which is like bag

// console.log(buttonOne);

// console.log(channelOne);
// ********HEAP***********
let userOne = {
    name : 'Kunal',
    email: 'kunal.com'
};

let userTwo = userOne;
userTwo.name = "Londhe";

console.log(userOne);
console.log(userTwo);
/*
in the Above Stack we saw one variable is pointing the copy of the value to the second variable,
if the copy of that variable is modified that doesnt affect the original value,

here in the HEAP we saw that one Object naming userOne is assigned the another variable and here the copy of the object is not provided,
but the original reference is provided if any one of the object is changed then the original value is altered.

This is the difference between the STACK and HEAP
one is for primitve = STACK passes copy
one if  for Non Primitive = HEAP passes the original reference.
*/