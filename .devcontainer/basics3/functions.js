function sayMyName(){
    console.log("s");
    
}

//sayMyName             //reference
//sayMyName()           //execution

// function addTwoNumbers(number1, number2){        //parameters
//     console.log(number1+number2);
    
// }

function addTwoNumbers(number1, number2){        //parameters
    //let result = number1+number2
    //return result
    return number1 + number2
    //when you return value then you store value in variable otherwise not.....
    
}
 
const result = addTwoNumbers(3,5)          //arguments
//console.log("Result:",result);


function loginUserMessage(username){
    if(!username){               //(!username) is same as username === undefined.........
        console.log("Please enter a username");
           return // if you write return then below return is not showed.......     
    }
    return `${username} just logged in`  // String interpolation formula .......
}

//console.log(loginUserMessage("satya"));
console.log(loginUserMessage());

