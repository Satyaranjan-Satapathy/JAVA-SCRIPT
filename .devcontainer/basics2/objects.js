//objebbct literals



// const mysym = Symbol("key1")

// const jsuser = {
//     name: "satya",
//     [mysym]: "mykey1",
//     email: "satya@gmail.com",
//     age: 22,
//     loccation: "jajpur",
//     isLoggedIn: false,
//     lastLoginDays: ["monday","tuesday"]

// }

// console.log(jsuser.name); //access the object by dot
// console.log(jsuser["name"]);  // access the object by square bracket
// console.log(jsuser[mysym]);


// jsuser.name = "chandan"
// Object.freeze(jsuser)  // not override value agian........
// jsuser.name = "balaram"
// console.log(jsuser);

// jsuser.greeting = function(){
//     console.log("hello js user");
    
// }
// jsuser.greetingtwo = function(){
//     console.log(`hello js user ${this.name}`); //syntax of print name within function
    
// }
//  console.log(jsuser.greeting());
//  console.log(jsuser.greetingtwo());



 //........object singletone (constructor).............//

 const tinderuser = {}

 tinderuser.id = "123abs"
 tinderuser.name = "satya"
 tinderuser.isLoggedIn = false
 console.log(tinderuser);


 const regularuser = {
    email: "satya@gamil.comm",
    fullname: {
        userfullname:{
            firstname : "chandan",
            lastname : "pratyusha"
        }
    }
 }

//  console.log(regularuser.fullname);
 
//  const obj1 = {1:"a", 2:"b"}
//  const obj2 = {3:"c", 4:"d"}
 
// const obj3 = Object.assign({},obj1,obj2)

//  console.log(obj3);
 
const users = [
    {
        id:1,
        email:"h@gamil"
    },
    {
        id:2,
        email:"s@gamil.com"
    },
]

users[1].email

console.log(tinderuser);

console.log(Object.keys(tinderuser));  //give keys in array format....

console.log(tinderuser.hasOwnProperty('isLoggedIn')); // return boolean value.........

 
 