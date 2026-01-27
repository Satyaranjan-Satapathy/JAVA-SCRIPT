let myArr = [1,2,3,4,5]
// console.log(myArr[2]);
// console.log(myArr.length);


// myArr.push(6)
// //myArr.pop(6)
// console.log(myArr);

// console.log(myArr.includes(8));
// console.log(myArr.indexOf(4));

// const newArr = myArr.join()
// console.log(newArr);

//slice $ splice

// console.log("A",myArr);

// const mynew1 = myArr.slice(1,3)
// console.log(mynew1);
// console.log("B",myArr);

// const mynew2 = myArr.splice(1,3)
// console.log("C",myArr);
// console.log(mynew2);
//this method manipulate the original array (splice method)

const marvel_heros = ["thor","ironman","hulk"]
const dc_heros = ["superman",'batman',"me"]

//marvel_heros.push(dc_heros)
let all_heros = marvel_heros.concat(dc_heros)

// console.log(all_heros);

// const all_new_heros = [...marvel_heros,...dc_heros]

// console.log(all_new_heros);

const another_array = [1,2,3,[6,7,8],5,4,[6,9,7,[8,3,2]]]
const rea_another_array = another_array.flat(Infinity)

console.log(rea_another_array);

console.log(Array.isArray("satya"));
console.log(Array.from("satya"));
console.log(Array.from({name:"satya"}));//intresting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));











