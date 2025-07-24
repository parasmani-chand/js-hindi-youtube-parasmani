// singleton
//Object.create

// object literals
const mySymb = Symbol("key1");
const jsUser = {
  name: "Parasmani",
  [mySymb]: "myKey1",
  "full-name": "Parasmani Chand",
  age: 23,
  location: "Baitadi",
  email: "parasmanichand260@gmail.com",
  isLoggedIn: true,
  lastLoginDays: ["Tuesday", "Wednesday"],
};

// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser[mySymb])
// console.log(typeof mySymb)
// console.log(jsUser["full-name"])

jsUser.email = "parasmanichand09@gmail.com";
// Object.freeze(jsUser.email);   //only to lock email in object
// Object.freeze(jsUser);   //lock whole object

jsUser.age = 24;

// console.log(jsUser);

jsUser.greeting = function () {
  console.log("Ke xa ho guys");
};

console.log(jsUser.greeting());
