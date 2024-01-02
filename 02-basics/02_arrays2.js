const marvel_heroes = ["thor", "spiderman", "Ironman"]
const dc_heroes = ["superman", "flash", "batman"]

marvel_heroes.push(dc_heroes)

console.log(marvel_heroes); //[ 'thor', 'spiderman', 'Ironman', [ 'superman', 'flash', 'batman' ] ]
console.log(marvel_heroes[3][0]);

const allHeroes = marvel_heroes.concat(dc_heroes)
console.log(allHeroes) //[ 'thor', 'spiderman', 'Ironman', 'superman', 'flash', 'batman' ]

const all_new_heroes = [...marvel_heroes, ...dc_heroes] //spread operator

console.log(all_new_heroes);  //[ 'thor', 'spiderman', 'Ironman', 'superman', 'flash', 'batman' ]

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)

console.log(real_another_array);
 //   [1, 2, 3, 4, 5,
  //  6, 7, 6, 7, 4,
  //  5             ]

console.log(Array.isArray("ritam")) //false
console.log(Array.from("ritam")); //[ 'r', 'i', 't', 'a', 'm' ]
console.log(Array.from({name: "ritam"})); //[] 9empty

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); //[ 100, 200, 300 ]