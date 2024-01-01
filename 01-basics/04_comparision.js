// console.log(2>1);
// console.log(2>=1);

//console.log("2">1);
console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true

//The reason is that an equality check == and comparisions ><>=<= works differently.
//Comparisons convert null to a number, treating it as zero.
//That's why null>=0 is true and null>0 is false

console.log(undefined == 0); //false
console.log(undefined > 0); //false
console.log(undefined < 0); //false

// ===
console.log("2"===2); //false because "2" is a string and 2 is a number
