// singleton onject is created only in new created object.
//Object.create()
//above is how object is crated 

//in below object singleton is not created.

let myDetails = {} // here the object is defined but it is empty object
let sym = Symbol("Ball") // here we have defined the symbol and gave te key as Ball

let Details = {
    name : "Kunal", //string
    email: "kunal@js.com",
    [sym]: "Bat",
    age: 10,        //number
    isOnline : true,    //Boolean
    lastLogged : ["Mon", "Sat"],    //object
};

// console.log(Details); // output

// to traverse the  object we use dot to access it
// console.log(Details.email);
// console.log(typeof Details.email); //String
// console.log(typeof Details.lastLogged)
// console.log(typeof Details.sym); // value is Bat type is string but not Symbol
// console.log(typeof(Details[sym])); // here the type is string becaue if point the bat which is string but if u want he keys type then log below
// console.log(Details) //in the o/p: [Symbol(Ball)]: 'Bat' which shows the point out key symbol which is( ball )and the assigned value is" bat";
// console.log(myDetails.email = "kunal");
// console.log(myDetails);
Object.freeze(myDetails)
myDetails.email = 'Londhe';
// console.log(myDetails, "after freeze"); //here you cannot mutate any object inside myDetils when this method is applied.(it LOCKS the object)

console.log(Details["age"]); // apart from the dot method we can access the object using the  brackets with quotes this also one way of accessing it
console.log(Details[sym]); // to acces in symbol we use the bracket it coreectly display the Symbol
console.log(Details) 


Details.greetFunction = function() {
    console.log("hello JS World this is my code");
    console.log(`Hey ${this.name} Good Day`);
    
};

// console.log(Details.greetFunction); // here the function is only created but not called.
// console.log(Details.greetFunction());
