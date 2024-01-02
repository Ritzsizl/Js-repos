let a = 300
let b = 324
if(true){
    let a = 10
    const b = 20
    var c =30  //so we do not use var bcoz it is inside the scope {} but yet the answer otside the scope is showing the value of c but let and const are not showing such error
}

console.log(a);
console.log(b);
console.log(c);


function one(){
    const username = "Ritam"

    function two(){
        const website = "youtube"
        console.log(username);
    }
  //  console.log(website);

    two()
}

//one()