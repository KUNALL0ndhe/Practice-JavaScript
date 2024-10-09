const num = 10;
const val = 20;

// console.log(num,val);

const balance = new Number(100);
// console.log(balance.toString().length);
// console.log(balance.toFixed(2)); // in the eCommerce the value of the digit post he decimal should be how many , this method difines 1/2 digit

//toFixed(1) output = 100.0
//toFixed(2) output = 100.00 


const otherNumber = 123.4567
// console.log(otherNumber.toPrecision(5));

// toPrecision makes the number round of as given the limit
// in above example suppose 
// toPrecision(1)= output will be in exponention form 
// toPrecision(2)= output will be in exponention form 
// toPrecision(3)= output will be 123 it will round off
// toPrecision(4)= output will be 123.5 the last digit will give the ceil value.
// toPrecision(5)= output will be 123.46 here the last digit will become ceil when range is 5 it will count 5 digit and the last digit will be ceil.


// const hundred = 100000000000;

// console.log(hundred.toLocaleString('en-US'));  // output 100,000,000,000  millions format of america (commas are different)
// console.log(hundred.toLocaleString('en-IN'));  // output 1,00,00,00,00,000  based on the indian based on crore (commas are different)

//+++++++++++++++++++++++++++++++++++++++ Math ++++++++++++++++++++++++++++++++++++++++++++++++++++

// console.log(Math.random()); // this provide the random number between 0 to 1 
// console.log(Math.floor(4.9)); // this will give you the least value ++++output 4
// console.log(Math.ceil(4.1)); // this will provide the uppermost value ++++output 5
// console.log(Math.PI); // 3.14.....
// console.log(Math.abs(-2.234)); // this will covert only negative number to a positive number. but no vice versa
// console.log(Math.round(222.7)); // this will genreally convert the number to absolute value limit is 5.
// console.log(Math.min(12,13,14,15,16)); // 12
// console.log(Math.max(12,13,14,15,16)); // 16

// console.log(Math.floor((Math.random() *10))+1);

const min = 1;
const max = 6;

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // by setting the limit we can playn between the number

// decoded line by line floor wil convert to lowest value
//random will generate any number
// max-min will be the range and +1 is applied just 0 should not occur if 0 then it will be added to 1.
// last the min is added just in the statement if we want he minimun number to be applied in the format.
// thus all this will provide the dice game result from 1-6.
