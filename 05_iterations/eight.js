const myNums  = [1,2,3]

const total = myNums.reduce(function (acc, currval) {
   // console.log(`accumulator: ${acc} and current value: ${currval}`);
    return acc + currval
}, 0 )

// console.log(total);

const myTotal = myNums.reduce( (acc, currval) => acc + currval, 0)

// console.log(myTotal);

const shoppingCart = [
    {
        itemName: "JS course",
        price: 1999
    },
    {
        itemName: "Python course",
        price: 999
    },
    {
        itemName: "Data Science course",
        price: 5999
    },
    {
        itemName: "AI course",
        price: 11999
    }
]

const totalPrice = shoppingCart.reduce( (acc, item) => acc + item.price, 0)

console.log(totalPrice);
