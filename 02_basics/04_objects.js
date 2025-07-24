const finTechNepalUser = new Object();
finTechNepalUser.id = 235;
finTechNepalUser.name = "parasmai Chand";
finTechNepalUser.isLoggedIn = true;

// console.log(finTechNepalUser);

const regularUser = {
  email: "soical@weilbing.org",
  fullName: {
    userName: {
      userFullName: {
        firstName: "Parasmani",
        secondName: "Chand",
      },
    },
  },
};

// console.log(regularUser.fullName.userName.userFullName.firstName);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
const obj3 = { 5: "e", 6: "f" };

// obj3 = {obj1,obj2}   // tei array ko jasto duitaa xuttai object inside one object
// console.log(obj3)    //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

// const obj4 = Object.assign({}, obj1, obj2, obj3);   // another way to merge the object
// console.log(obj1);  // if we shouldn't use {} in the first then as the target all should be transfer to obj1

const obj4 = { ...obj1, ...obj2, ...obj3 };
// console.log(obj4);

const user = [
  {
    id: 1,
    email: "one@gmail.com",
  },
  {
    id: 2,
    email: "two@gmail.com",
  },
  {
    id: 3,
    email: "three@gmail.com",
  },
  {
    id: 4,
    email: "four@gmail.com",
  },
  {
    id: 5,
    email: "five@gmail.com",
  },
  {
    id: 6,
    email: "six@gmail.com",
  },
  {
    id: 7,
    email: "seven@gmail.com",
  },
];

// console.log(user[1].email);

// console.log(finTechNepalUser);

// console.log(Object.keys(finTechNepalUser)); //array ma dinxa sabai keys lai //important
// console.log(Object.values(finTechNepalUser));

// console.log(finTechNepalUser.hasOwnProperty("subject"));
// console.log(finTechNepalUser.hasOwnProperty("id"));






// Object De-structuring 

const course ={
  courseName: "JavaScript with Chai",
  price: "999",
  courseInstructor: "Hitesh Sir"

}
// course.courseInstructor

// const {courseInstructor} = course
// console.log(courseInstructor)   //which gives the same 


const {courseInstructor: instructor} = course    // rename variable
console.log(instructor)