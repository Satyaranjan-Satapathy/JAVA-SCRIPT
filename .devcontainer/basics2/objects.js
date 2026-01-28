//objebbct literals



const mysym = Symbol("key1")

const jsuser = {
    name: "satya",
    [mysym]: "mykey1",
    email: "satya@gmail.com",
    age: 22,
    loccation: "jajpur",
    isLoggedIn: false,
    lastLoginDays: ["monday","tuesday"]

}

// console.log(jsuser.name); //access the object by dot
// console.log(jsuser["name"]);  // access the object by square bracket
// console.log(jsuser[mysym]);


jsuser.name = "chandan"
// Object.freeze(jsuser)  // not override value agian........
jsuser.name = "balaram"
// console.log(jsuser);

jsuser.greeting = function(){
    console.log("hello js user");
    
}
jsuser.greetingtwo = function(){
    console.log(`hello js user ${this.name}`); //syntax of print name within function
    
}
 console.log(jsuser.greeting());
 console.log(jsuser.greetingtwo());
 
 