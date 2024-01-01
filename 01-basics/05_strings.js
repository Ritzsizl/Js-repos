const name = "Ritam"
const repoCount = 50

// console.log(name + repoCount + " Value");
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hi-jy-un') //it is similar to const gameName = "hijyun" just another way to write it

console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.charAt(2));  //2=index
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4) //character at the 4th index will not be shown only character at the index 0,1,2,3 will be the output
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringOne = "   Ritam   "
console.log(newStringOne);
console.log(newStringOne.trim()); //this trim will remove the spaces

const url = "https://ritam.com/ritam%20eltorado"

console.log(url.replace('%20', '-'));
console.log(url.includes('damn'));
console.log(gameName.split('-'));