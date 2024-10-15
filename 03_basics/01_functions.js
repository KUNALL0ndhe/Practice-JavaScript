const myName = function () {
    console.log("my name is Kunal");
    
}

myName; // this will point out only the reference towards the function

// myName();

const addNumber = function (num1, num2) {
    num1 + num2 // without the return keyword , it will only point towards the function but he value will be undefined
    return num1 + num2 // after return none other line will execute.
};

// console.log(addNumber(2,5));

const isLoggedIn = function (username){
    return `is user ${username} logged?`
};

// console.log(isLoggedIn("Kunal"));

// ++++++++++++++ REST operator +++++++++++++++++++++++++++

// let gather = [100,200,300,400,500];

let getGather = function(val1, val2, ...values){
    return console.log(val1, val2, values);
    
};

// console.log(getGather(100,200,300,2000, 500))

const object = {
    name: "Kunal",
    age: "25",
};

const handleObject = function(obj){
    return `hey there ${obj.name} your age is ${obj.age}`
};

// console.log(handleObject(object)); 
// console.log(handleObject({
//     name: "Londhe",
//     age : "twenty-five"
// }));

let arreh = [1,2,3,4,5];

let handleSecondValue = function(anyArray){ // in the defining function ( inside this is called) parameters
    return `value of second arg is ${anyArray[1]}`
};

// console.log(handleSecondValue(arreh)); // while passing this same is known as Argument. (indisde this)


// console.log(handleSecondValue([80,90,100,200]));

// +++++++++++++++++++++++++++++++++++  SCOPE +++++++++++++++++++++++++

// two type of scope 1 block or Lexical scope another is global scope. braces is the scope {}

let outerFunc = function(){
    let song1 = "ABCD"
    let innerFunc = function(){
        let movie = 1
       return console.log(movie + song1, "inner")
    };
    innerFunc()
    console.log(song1, "outer");
    
};
// outerFunc()// here child element can access the parent element but not vice versa.

// if (true) {
//     console.log("hello outer");
//     let a = 10;
//     if(true){
//         let b = 20
//         console.log(`a is ${a} and b is ${b} level 3`);
//     }
//     console.log(`a is ${a} and b is  level 2 `);
    
// }
// console.log(`a is  and b is  level 1`);

 console.log(typeof(+"1" + '2' + "3"));