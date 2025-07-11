// only campare when the datatype are same sometime js give the answer for differnt datatype also but 
// we should go with the normla programming rune

// console.log("2" > 1); // here it gives true 
// console.log("02" > 1); // here also it gives ture

// console.log(null > 0);
// console.log(null == 0);       // equality check work differently than the comparions ones
// console.log(null >= 0);       // the comparion ones null acts as the number 0 where as not in == case
// console.log(null <= 0);



//   ===                //strict check check the data type also not only the value  not work like ==
console.log("2" === 2)      


let myobj = {
    name : "parasmani",
}

console.log(typeof myobj.name)