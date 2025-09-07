class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){          // if we don't want to give the access of this method to the instance then we can use static keyword
        return `123`
    }
}

const hitesh = new User("hitesh")
console.log(hitesh.createId())  // instance ke through hum static method ko call nahi kar sakte hai

// console.log(User.createId());  // static method ko hum class ke through hi call kar sakte hai

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.createId());

console.log(User.createId());
console.log(Teacher.createId());

