const user = {
    username: "ritam",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
    }
}
user.welcomeMessage()

const chai = () => {
    let username = "ritam"
    console.log(this);
}

chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2     //in curly bracket return is mandatory to use
// }
//const addTwo = (num1, num2) => (num1 + num2)  //here return is not required

const addTwo = (num1, num2) => ({username})

console.log(addTwo(3,4));

