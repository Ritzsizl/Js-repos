//Dates

let myDate = new Date()

console.log(myDate.toString());
console.log(myDate.toDateString());
//console.log(myDate.toLocalString());
console.log(typeof myDate);

//let myCreatedDate = new Date(2024, 0, 23) //yera, month, date
let myCreatedDate = new Date ("01-04-2024")
console.log(myCreatedDate.toDateString());

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday: "long"
}) //press Ctrl + Space to get suggestions