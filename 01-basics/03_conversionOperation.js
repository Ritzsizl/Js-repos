let score = 33

console.log(typeof score);  //number
console.log(typeof (score));  //number

let scoree = "33"

console.log(typeof scoree);  //string
console.log(typeof (scoree));  //string

let valueInNumber = Number(scoree)

console.log(typeof valueInNumber);  //number
console.log(typeof (valueInNumber));  //number

//"33" => 33
// "33abc" => NaN
// true => 1; false => 0;

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)
//1=> true, 0=> false
//" " => false
// "Ritam" => true