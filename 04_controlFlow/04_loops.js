let myArr = ["Spiderman", "batman", "superman", "WonderWoman", "Flash"];



// let map = new Array(myArr);


// for (const [key,val] of map) {
    // console.log(key,val);
    
// }



// console.log("node".split('').sort().join(''));


// const greeting = 'Hello wrold!';

// for (const greet of greeting) {
//         if (greet === ' ') {
//             continue
            
//         }        
//     console.log(greet);

// }

const map = new Map ()
map.set("IN", "India")
map.set("MH", "Maharashtra")
map.set("TN", "Tamil Nadu")
map.set("PN", "Punjab")

for (const statement of map) {
    console.log(statement);
    
}
for (const [pin,area] of map) {
    // console.log(`pincode of ${area}, is ${pin}`);
    
}

let myObj = {
    language: 'JavaScript',
    type: 'js',
    engine: 'v8',
    runtime:'Node',
    dev: 'ryan dhal',
}

// for (const key in Object(myObj)) {
//     console.log(`${key} is the key and ${myObj[key]} is the value`);
    
// }

for (const item in myObj) {
    console.log(item+"   :>   "+myObj[item]);
    
};