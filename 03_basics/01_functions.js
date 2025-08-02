function sayMyName(){
    console.log("A")
    console.log("b")
    console.log("h")
    console.log("i")
}
// sayMyName()

// function addTwoNumbers(number1, number2){
//      console.log(number1 + number2)
// }

// addTwoNumbers(2,4)

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(4,6)

//console.log("Result: ", result)

function userLoginMessage(username){
    if(!username){
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}

// console.log(userLoginMessage("Abhishek"))
// console.log(userLoginMessage())

function userLoginMessage(username = "Tushar"){
    if(!username){
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}

// console.log(userLoginMessage("Abhishek"))
// console.log(userLoginMessage())

function calculatePrice(val1, val2, ...num1){
    return num1
}

console.log(calculatePrice(200,300,400,500))

console.log(typeof calculatePrice(200,300,400,500))


const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and Price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));

