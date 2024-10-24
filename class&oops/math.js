// const descriptor = Object.getOwnPropertyDescriptor(Math, 'PI');

// console.log(descriptor);

// let myObj = {
//     name : 'kunal',
//     age: 26,
//     password : 'abc',
// };


// let myDescriptor = Object.getOwnPropertyDescriptor(myObj, 'name');
// console.log(myDescriptor);


// console.log(Object.defineProperty(myObj,'name', {
//     // enumerable :false , // means it will not be displayed
//     // writable : ;
//     configurable : false // when set to true the value can be deleted or re-define
// }));

// myObj.name = 'Londhe'
// console.log(myObj.name = 'ABC', "value here is changed"); // here the value is changed

// Object.defineProperty(myObj, 'name', {
//     value: "newName",
//     configurable: true,
//     writable: true,
//     enumerable : true
// }) 

// delete myObj.name
// console.log(myObj,"value here is deleted");

let Heros = {
    spiderman : 'Web',
    thor : 'Hammer',
    flash : 'Speed',
};

let power = Object.getOwnPropertyDescriptor(Heros, 'spiderman');
console.log(power);

let Avenger = Object.defineProperty(Heros, "Batman", {
    value : 'Rich',
    writable : false,
    enumerable : true,
    configurable : true,
});

delete Heros.Batman

Object.defineProperty(Heros , "Batman" , {
    value : "Rich as Hell",
    enumerable : true,
    configurable : true,
    writable : true,
})

console.log(Heros.Batman);

console.log(Object.getOwnPropertyDescriptor(Heros, "Batman"));
