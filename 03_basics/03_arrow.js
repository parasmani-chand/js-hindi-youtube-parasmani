//  ++++++++ this +++++++             //this gives the current context 
//  this gives current context

// const user ={
//     username: " Parasmani",
//     price: 999,

//     welcomeMessage: function (){
//         console.log(`${this.username} , welcome to website`)
//         console.log(this)
//     }

// }

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this)

// function chai() {

//   let username = "soluble Parameter"
//   console.log(this.username);            //undefined aayo
// }

// chai();

// const chai = function(){
//   let username = "soluble Parameter"
//   console.log(this.username); 
// }

// chai()


// ++++++++++++++++++++arrow function+++++++++++++++++++++

// const chai = () =>{
//   let username = "soluble Parameter"
//   console.log(this); 
// }

// chai()


// +++++++++++++++Explicit return: curly braces and 'return' keyword are used
// const addTwo = (num1, num2) => {
    // return num1 + num2; // explicit return
// }

// +++++++++++++++Implicit return: no curly braces, value is returned automatically
// const addTwoImplicit = (num1, num2) => num1 + num2; // implicit return

// console.log(addTwo(3,4))


// const multTwo = (numb1,numb2)=> (numb1*numb2)   //implicit return  
// console.log(multTwo(6,8))


// for the object to return in arrow function

const myObjLai = () => ({username: "Parasmani Chand"})

console.log(myObjLai ()) 

