const Prime = (n) => {
    if (n < 2) {
        return false
    };
    for ( i = 2 ; i < n ; i++ ) {
        if (n%i === 0) {
            return console.log('is not prime');       
        }
        
    };
    console.log('is  prime');

}
Prime(4);
Prime(5)

