const name = "Parasmani"
const repoCount = 5
// console.log("This"+ name +"has"+ repoCount + "repos in github")  // no need to write this 
// console.log(`${name} is the person who have ${repoCount} repos in the github`)


const gameName = new String("Mario")
// console.log(gameName.length)
// console.log(gameName.toUpperCase()) 

const newString = gameName.substring(0,4)
// console.log(newString)

// console.log(gameName.charAt(4))
// console.log(gameName.indexOf("i"))

const anotherString = gameName.slice(-10,4)
console.log(anotherString)


// console.log(gameName.substring(4,1))

const newStringOne = "    Socialiable     "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://parsmani.com/parasmani%20chand"
console.log(url.replace('%20','-'))


console.log(url.includes('parasmani'))
console.log(url.includes('ikigai'))



