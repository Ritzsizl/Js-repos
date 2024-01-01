const score = 400

console.log(score);


const balance = new Number(100)

console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));  //decimal value upto 2 digits

const otherNumber = 23.8966

console.log(otherNumber.toPrecision(3));

const hundreds = 10000000
console.log(hundreds.toLocaleString('en-IN'));  //'en-IN' it signifies the value in indian standard

//++++++++++++Maths+++++++++++++++

console.log(Math);
console.log(Math.abs(-4)); //4 {it makes the negative sign positive but vice versa is not possible in it}
console.log(Math.round(4.6));  //5
console.log(Math.ceil(4.2));  //5
console.log(Math.floor(4.9)); //4
console.log(Math.max(4,5,6,7)); //7
console.log(Math.min(4,5,6,7));  //4

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);


const min = 10
const max = 20


console.log(Math.floor(Math.random()*(max-min+1))+ min);  //this equation will always give an answer between the min and max number