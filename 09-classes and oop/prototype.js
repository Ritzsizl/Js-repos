let myName = "ritam   " //length = 8

// console.log(myName.length); // if we add space after the name then also it will count the space length alongwith it so we add true length after it to count the actual length and not the spaces along with it

console.log(myName.trueLength);

let myHeroes = ["thor", "spiderman"]

let heroPower = {
    thor:"hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.ritam = function()
{
    console.log(`ritam is present in all object`);
}

Array.prototype.heyRitam = function(){
    console.log(`Ritam says hello`);
}

myHeroes.ritam()
myHeroes.heyRitam()

//inheritance

const User = {
    name: "Chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

//modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode    "
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"ritam".trueLength()
"iceTea".trueLength()
// ChaiAurCode
// True length is: 11
// ritam
// True length is: 5
// iceTea
// True length is: 6