//const tinderUser = new Object()  //singleton
const tinderUser = {}  //non-singleton
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
console.log(tinderUser) //{ id: '123abc', name: 'Sammy', isLoggedIn: false }

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "ritam",
            lastname: "raha"
        }
    }
}

console.log(regularUser.fullname);  //{ userfullname: { firstname: 'ritam', lastname: 'raha' } }
console.log(regularUser.fullname.userfullname.firstname);  //ritam

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2}
// console.log(obj3) //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }   
// const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj3 = {...obj1, ...obj2}
console.log(obj3); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

console.log(tinderUser);

console.log(Object.keys(tinderUser)); //[ 'id', 'name', 'isLoggedIn' ] //array

console.log(Object.values(tinderUser)); //[ '123abc', 'Sammy', false ]

console.log(Object.entries(tinderUser)); //[ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]
// console.log(tinderUser.hasOwnProprty('isLoggedIn'));
// console.log(tinderUser.hasOwnProprty('isLogged'));

const course = {
    coursename: "js in hindi",
    price: 999,
    courseInstructor: "ritam"
}

//course.courseInstructor

const {courseInstructor} = course
console.log(courseInstructor); //ritam

const {courseInstructor: instructor} = course
console.log(courseInstructor);  //ritam
console.log(instructor); //ritam
