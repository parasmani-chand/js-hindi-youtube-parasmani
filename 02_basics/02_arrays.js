const marvel_heros = ["Thor","Spiderman", "Ironman"]
const dc_heros = ["superman","flash","batman"]

const mahabharat_heros = ["arjun","karna","abhimannew"]


//by using push but dc_heros acts as the seperate arry inside the array but as an element of the outter array
// marvel_heros.push(dc_heros)
// console.log(marvel_heros)


//by using concatinate 
// const allHeros = marvel_heros.concat(dc_heros).concat(mahabharat_heros);
// console.log(allHeros)

//by using spread (generally this is used in programmer world )
const all_new_heros = [...marvel_heros,...dc_heros,...mahabharat_heros]
// console.log(all_new_heros)


console.log(Array.isArray ("Parasmani"))  //Checking is it array
console.log(Array.from("Parasmani")) // Converting this string to array with the charaters

console.log(Array.from({name: "Parasmai"}))    // intresting       //yole chai empty array dinxa 



let score1 = 123
let score2 = 134
let score3 = 145
let score4 = 156

console.log(Array.of(score1,score2,score3,score4))