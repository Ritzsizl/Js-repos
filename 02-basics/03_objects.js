// singleton

//object literals
const mySym = "mykey1" //its a symbol

const JsUser = {
    name: "Ritam",
    age: 18,
    mySym: "myKey1",
    [mySym]: "mykey1",
    location: "Jaipur",
    email: "ritam@google.com",
    isLoggedIn: false,
    lastLoggedIn: ["Monday", "Saturday"]
}
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(typeof mySym); //string
console.log(JsUser[mySym]);
console.log(typeof JsUser[mySym]);
//console.log(typeof [mySym]); //objects

JsUser.email = "ritam@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email = "ritam@microsoft.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js User");
}
console.log(JsUser.greeting());

JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`);
}
console.log(JsUser.greetingTwo);