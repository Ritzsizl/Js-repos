//array
const myHeroes = ["shaktiman", "naagraj"];

const myarr2 = new Array(1, 2, 3, 4);
// /console.log(myArr[0]);

//Array Methods
const myArr = [0, 1, 2, 3, 4, 5];
myArr.push(6); //0,1,2,3,4,5,6
myArr.push(7); //0,1,2,3,4,5,6,7
myArr.pop(); //0,1,2,3,4,5,6 will remove the last element

myArr.unshift(9); //9,0,1,2,3,4,5 it will add the number in first
myArr.shift(); //1,2,3,4,5 it will remove the first element

console.log(myArr.includes(9)); // false bcoz 9 is not included in the array

const newArr = myArr.join();
console.log(myArr); //[0,1,2,3,4,5]
console.log(newArr); //0,1,2,3,4,5
console.log(typeof newArr); //string after the join is used

//slice, splice

console.log("A", myArr); //[0,1,2,3,4,5]
const myn1 = myArr.slice(1, 3);

console.log(myn1); //[1,2]
console.log("B ", myArr); //[0,1,2,3,4,5]

const myn2 = myArr.splice(1, 3);
console.log("C ", myArr); //[0,4,5] here the original array is changed
console.log(myn2); //[1,2,3]
