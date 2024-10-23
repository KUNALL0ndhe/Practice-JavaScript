function multiplyby5(num) {
    return num *5
};

multiplyby5.power = 2;
// console.log(multiplyby5(5));
// console.log(multiplyby5.power);
// console.log(multiplyby5.prototype)


function Shop (product, price) {
    this.product = product;
    this.price = price;
};

Shop.prototype.increment = function () {
    this.price++
    console.log(`increased amount is ${this.price}`);
};

Shop.prototype.brand = function () {
    console.log(this.product,' is consumable')
};

const chai = new Shop("chai", 25);


console.log(chai.increment());
console.log(chai.brand());


/*

{
what has happened is that
we have created a method like in the prototype of object we see in the window, here 
we have created it abut not known to the global object / to the context that fresh new method is created and it has to be injected in the 
function , so to do this we use the " new " keyword so that the new object / newe instance is created and all the protoype is inserted inside
that alse the freshly created object/instance 
after that we can use it the . method() property
}




Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/