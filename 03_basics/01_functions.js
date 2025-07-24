function sayMyName() {
  console.log("P");
  console.log("A");
  console.log("R");
  console.log("A");
  console.log("S");
  console.log("M");
  console.log("A");
  console.log("N");
  console.log("I");
}

// sayMyName()

function addTwoNumber(number1, number2) {
  // let result = number1 + number2
  // return result;

  return number1 + number2;
}

// const result = addTwoNumber(4,6)

// console.log("Result is ",result);

// function loginUserMessage(username){

//   if(username===undefined){
//     console.log("Please enter a username")
//     return
//   }
//   return `${username} just logged in`
// }

// console.log(loginUserMessage("Parasmani"))
// console.log(loginUserMessage())

function loginUserMessage(username = "chatara") {
  if (!username) {
    console.log("Enter username please");
    return;
  }
  return `${username} is logged in`;
}

// console.log(loginUserMessage())   // the default value is print as i already gave "chatara"
// console.log(loginUserMessage("soluble"))

// function calculateCartPrice(...num1){  //... this is rest operator here on funciton ma chai used to wrapp in array
//   return num1
// }
// console.log(calculateCartPrice(200,400,500))

function calculateCartPrice(var1, var2, ...num1) {
  return num1;
}
// console.log(calculateCartPrice(200,400,500,700,800))

const user = {
  username: "Parasmani",
  price: 199,
};

function handleObject(anyObject) {
  // console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject(user);

handleObject({
  username: "sakara",
  price: 499,
});

const myNewArray = [344, 563, 756, 500, 333];

function returnSecondValue(arrayDeyHai) {
  return arrayDeyHai[1];
}

// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([344, 563, 756, 500, 333]));
