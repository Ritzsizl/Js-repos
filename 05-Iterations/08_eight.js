const myNums = [1,2,3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0) //here 0 is the initial value of the acc

// console.log(myTotal);

// acc: 0 and currval: 1
// acc: 1 and currval: 2
// acc: 3 and currval: 3
// 6

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 2)

console.log(myTotal);  //8 {here initial value is taken as 2}

const shoppingCart = [
    {
        itemName: "js course",
        price: 999
    },
    {
        itemName: "python course",
        price: 1999
    },
    {
        itemName: "web dev course",
        price: 2999
    },
    {
        itemName: "app dev course",
        price: 3999
    },
    {
        itemName: "AI and ML course",
        price: 4999
    },
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)

console.log(priceToPay); //999+1999+2999+3999+4999 =14995