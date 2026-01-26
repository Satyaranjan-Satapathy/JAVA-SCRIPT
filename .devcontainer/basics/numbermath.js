const score = 200
//console.log(score);

const balance = new Number(150)
//console.log(balance);

//console.log(balance.toString().length);
//console.log(balance.toFixed(2));

const otherNumber = 23.697

//console.log(otherNumber.toPrecision(4));

const hundreds = 100000000
//console.log(hundreds.toLocaleString('en-IN'));

//++++++++++++++++++++++++  MATHS  +++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-6));
// console.log(Math.round(3.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.2));

console.log(Math.random());
// return value within 0 to 1 means {0.1, 0.2) etc
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random() * 10) + 1);
//return value within 1 to 9 because of adding 1.. and math.floor give integer value not decimal


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min +1) + min )) 

// here to give range we multiply (max-min+1) into math.random and to fix minimum value
// we add min variable











