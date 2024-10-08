let description  = "Hello World this is my world";
let name = "Kunal";

// console.log(`hey there ${name} ,you are welcome to ${description}`);

// console.log(description.slice(2, 8));
// console.log(description.toUpperCase());
// console.log(description.indexOf("ld"));
// console.log(description.charAt(10));
// console.log(description.split(' '));
console.log(description.split(" ").map((word) => {
    return word.charAt(0).toLowerCase() + word.slice(1).toUpperCase()
}).join(" "))