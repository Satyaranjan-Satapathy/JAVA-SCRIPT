let name = "satya"
let age = 22

console.log(`hello my name is ${name} and my age is ${age}`);
// this method is known as string interpolation
const gameName = new String('satyach')

//console.log(gameName[0]);
console.log(gameName.__proto__);

//console.log(gameName.toUpperCase());


//console.log(gameName.charAt(6));


//console.log(gameName.indexOf('y'));

const newString = gameName.slice(2, 6)
console.log(newString);

const newStringone = '     satya    '
console.log(newStringone);
console.log(newStringone.trim());


const url  = "https://satya.com/satya%20chandan"

console.log(url.replace('%20','-'));

const nameGame = new String('satya-chandan-pratyusha')

console.log(nameGame.split('-'));



