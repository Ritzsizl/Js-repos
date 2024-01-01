//Primitive 
//7 types: String, Number, Boolean, Null(empty), undefined, Symbol(make any values unique), BigInt(big values)
 
//Reference Type/Non-Primitive
//Arrays, Objects, functions

//Array
const heros = ["shaktiman", "naagraj", "doga"]

//Objects
let myObj = {
    name: "Ritam",
    age: 22
}

//function
const myFunction = function(){
    console.log("Hello World")
}

//+++++++++++++++++++++++++++++++++++++++++++
//Types of memories
//Stack(Primitive) and Heap(Non-Primitive)

let myYoutubeName = "htcdotcom"
let anothername = "Cacdotcom"

console.log(myYoutubeName)
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}
let userTwo = userOne

userTwo.email = "htc@googlecom"
console.log(userOne.email);
console.log(userTwo.email);