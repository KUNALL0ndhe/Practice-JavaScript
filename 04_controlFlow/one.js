// Arithmetic operator

// <,>,==,<=,>=,!=,===, || , &&

// let temperature = 51

let debitCard = true;
let loggedinEmailGoogle = false;
let loggedinEmail = true;

// if(true) {
//     console.log(`condition run`);    
// };

// if (temperature > 50 ) {
//     console.log('its hot out there');
// } else{
//     console.log(" Increase the tempreature");
    
// };

if(debitCard && loggedinEmailGoogle) {
    console.log(`user has debit card and logged in via google`);
}else if(debitCard && loggedinEmail){
    console.log(`user has debit card but logged in via email`);
} else if (debitCard || loggedinEmail || loggedinEmail) {
    console.log(`get user as he want he only has debit card`);
};