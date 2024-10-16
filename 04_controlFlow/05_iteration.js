const coding = ["JavaScript", "Python", "Ruby", "Rust", "Cpp"];

coding.forEach( (lang)=> {
// console.log(`These are the types of languages ${lang}`);
});

const callbackfn = (num) => {
    // console.log(`print ${num}`);
}

// coding.forEach(callbackfn,);

coding.forEach( (val,index,arr) => {
    console.log(val,index,arr.sort());
    
});

const myCoding = [
    {
        languageName : 'JavaScript',
        languageExt : 'js'
    },
    {
        languageName : 'Python',
        languageExt : 'py'
    },
    {
        languageName : 'java',
        languageExt : 'java'
    },
];

myCoding.forEach( (item) => {
console.log(item.languageName);

})