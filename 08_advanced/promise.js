const promiseOne = new Promise( function ( resolve, reject ) {
    setTimeout( function() {
        console.log('Hello Kunal this is promise one');
        return resolve()     
    }, 1000)
}).then( () => {
    console.log('your promise has been resolved')
}).catch( () => {
    console.log('your Promise has been rejected')
}).finally( ()=> {
    console.log('Your Promise has been in final phase')
});

const promiseTwo = new Promise( function ( resolve, reject) {
    setTimeout( () => {
        let err = false;

        if (!err) {
            console.log(' Promise @2 Safe place');
            resolve();
        } else {
            console.log('Promise @2 Error place');
            reject();
        }
    }, 6000);
})

async function oncallPromise  () {
    try {
        const response = await promiseTwo;
        console.log("Here you are in try block");
    } catch (error) {
        console.log("you are in catch block");
        
    }
};

oncallPromise()