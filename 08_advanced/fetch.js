// fetch('https://api.github.com/users/hiteshchoudhary')
// .then( (response)=> {
//     return response.json()
// }).then( (data) => {
//     console.log( data );  
// }).catch( (error) => console.log('you are in the catch phase',error))



const promiseOne = new Promise ( function ( resolve, reject) {
    setTimeout( function (){
        let error = false;

        if (!error) {
           setTimeout( ()=> {
            console.log('Okay promise is processing... wait 2 seconds');
            return resolve()
           }, 5000)
        } else {
            setTimeout ( () => {
            console.log('Oops!! Well Something Wrong !... ');
            return reject()
            }, 5000)
        }
    })
});

async function CallThem(){
    try {
        const response = await promiseOne
        console.log('Promise Fullfiled.')
        return response
    } catch (error) {
        return error
    }
} 

CallThem()