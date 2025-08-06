// while and do while loop

let index = 0
while (index <= 10) {
    console.log(`Value of index is ${index}`)
    index = index+2
}

let myArray = ['flash','superman','batman']

let arr = 0
while (arr < myArray.length) {
    console.log(`Array value is ${myArray[arr]}`)
    arr = arr + 1
}

let score = 1

do {
    console.log(`Score value is ${score}`);
    score++
} while (score <= 10);

let score2 = 11

do {
    console.log(`Score value is ${score2}`);
    score2++
} while (score2 <= 10);