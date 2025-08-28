const promiseOne = new Promise(function(resolve,reject){
    // Do an Async task
    // DB calls, Cryptography, Network
    setTimeout(function(){
        console.log('Async task completed');
        resolve();
    },1000)
})

promiseOne.then(function(){
    console.log('Promise Consumed');
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task 2');
        resolve();
    },1000)
}).then(function(){
    console.log('Async task 2 resolved');
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "Abhishek", email: "abhi@gmail.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
    return user.username;
}).then((username) => {
    console.log(username);  
})

const promiseFour = new Promise((resolve,reject) => {       // can also use arrow function like this.
    setTimeout(function(){
        let error = true;           // if error is set to true, then the reject part will get executed via catch.
        if(!error){
            resolve({username: "Abhi", password: "1234"})
        }
        else{
            reject("ERROR: Something went wrong!")
        }
    },1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.password;
}).then((password) => {
    console.log(password);
}).catch((error) => {
    console.log(error);    
}).finally(() => console.log('The promise is either resolved or rejected.'));

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.