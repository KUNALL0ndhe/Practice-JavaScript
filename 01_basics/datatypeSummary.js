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

func();

// above type of
console.log("Data Type _______________________________");

console.log(typeof score);
console.log(typeof Vname);
console.log(typeof isLoggedIn);
console.log(typeof temperature);
console.log(typeof valueProvided);
console.log(typeof stock);
console.log(typeof MySymbol);
console.log(typeof hero);
console.log(typeof obj);
console.log(typeof func);