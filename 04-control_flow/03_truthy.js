////falsy value : false, 0, -0, BigInt 0n, "", null, undefined , NaN
//truthy values : "0", 'false, " ", [], {}, function (){}

//Nullish Coalescing Operator (??): null, undefined

let val1;
let val2;
let val3;
let val4;
val1 = 5 ?? 10
val2 = null ?? 10
val3 = undefined ?? 15
val4 = null ?? 10 ?? 20

console.log(val1);//5
console.log(val2);//10
console.log(val3);//15
console.log(val3);//15


//Terniary Operator

//condition  ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80"); //more than 80