// Stack (Primitive )  , Heap (Non-Primitive)

 let myStudentIdNumber = 12344
 let myNewStudentIdNumber = myStudentIdNumber
 myNewStudentIdNumber = 27990

 console.log(myStudentIdNumber)
 console.log(myNewStudentIdNumber)



 let studentOne = {
    name: "Gagan Upadhaya",
    age: 23,
    address: "Kapilvastu"

 }

 let studentTwo = studentOne

 studentTwo.address = "Kathmandu"

 console.log(studentOne.address)
 console.log(studentTwo.address)

