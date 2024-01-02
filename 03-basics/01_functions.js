

// function sayMyName(){
//     console.log("R");
//     console.log("I");
//     console.log("T");
//     console.log("A");
//     console.log("M");
// }

// sayMyName()

// function addTwoNumbers(number1, Number2){
//     console.log(number1 + Number2);
// }
// addTwoNumbers() //NaN
// addTwoNumbers(3,4) //7
// addTwoNumbers(3,a)  //3a
// addTwoNumbers(3, null)  //3 

// const result1 = addTwoNumbers(3,5)
// console.log("Result: ", result1);  //undefinedd

// function addTwoNumbers(number1, Number2){
//     console.log(number1 + Number2);
//     return result
// }

// const result = addTwoNumbers(3,5)
// console.log("Result: ", result); //8

function loginUserMessage(username){
    if(username === undefined){
console.log("Please enter a username");
return
}
    return `${username} just logged in`
}

// console.log(loginUserMessage("Ritam"));
console.log(loginUserMessage());

function calculateCartPrice(...num1){
    return num1
}
//console.log(calculateCartPrice(200, 400, 500));

const user = {
    username: "Ritam",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)

const myNewArray = [200, 300, 400, 500]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray))