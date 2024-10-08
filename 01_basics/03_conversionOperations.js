//let score = "33";

//console.log(typeof score); // string

//let no = Number(score);
//console.log(no);
//console.log(typeof score); // string
//console.log(typeof no); // number conversion

let bool = null;

//console.log(typeof bool); // Object
//console.log(Boolean(bool)); // false
//console.log(bool); 

/* 
1 => true
"kunal" => true
"" => false
null => object, false 
*/

// let score =  NaN

// let convertScore = String(score);
// console.log(convertScore);
// console.log(typeof(convertScore));

/*
everything gets converted to string
*/


//***************************************Increment***********************************************************

let x = 3;
const y = x++;
const z = ++x

console.log(x,y,z)

//here output  is 5 ,3, 5
/*
++x increment opertaor in prefix is firest incremented and then assigned
x++ here the value is assigned and then incremented. 
*/


/* Comparision;
sameDatatype is fine on both side  */

 a = 2 == 2;
b = 2 > 2;
c = 2 <= 2;
console.table([a,b,c]);


// above is fine
// below is not ok, Avoid it;

null > 0;
null = "1";
undefined => abc;
