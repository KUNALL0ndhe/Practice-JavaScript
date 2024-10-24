class User {
    constructor ( username ) {
        this.username = username;
    }

    callMe () {
        return `This is the UserName : ${this.username}`
    }
};

class Teacher extends User {
    constructor ( username, email, password) {
        
        super(username);
        this.email = email;
        this.password = password
    }

    addCourse () {
        console.log(`The inheritated username is : ${this.username}`);
        
    };
};

const Kunal = new User("KUNAL VINOD LONDHE");
console.log(Kunal.callMe());

const Children = new Teacher("kunal",'email.com',12345);

Children.addCourse();

console.log(Children instanceof Teacher); // level 1
console.log(Kunal instanceof User ); // level 2
console.log(Children instanceof User); // level 3

/*
        User       User                     // level 3
         :          :
         :          :
         :          :
         V          V

      new(Kunal)  Teacher                   //level 2

       
           Teacher
             :
             :
             :
             V

         new(Children)                      //level 1





*/
