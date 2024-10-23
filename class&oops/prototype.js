let myArray = ["One", "Two", "Three"];
let myHeros = {
    charizad: "fire",
    bulbasaur : 'speed',
    pikachu : 'electricity',
};

let pokemon = "psyduck      ";

Object.prototype.display = function () {
    console.log(`My fav cartoon : ${this}`);
};


Array.prototype.arr = function () {
    console.log('this is the array context');
};

String.prototype.str = function () {
    console.log('this is the string context');
}

myArray.display(); // Object Prototype Inheritance
myHeros.display(); // Object Prototype Inheritance
pokemon.display(); // Object Prototype Inheritance


myArray.arr() //Array prototype Inheritence
// myHeros.arr() // Strictly Array prototype Inheritence
// pokemon.arr() // Strictly Array prototype Inheritence

// myArray.str() //Strictly String prototype Inheritence 
// myHeros.str() //Strictly String prototype Inheritence 
pokemon.str() //String prototype Inheritence