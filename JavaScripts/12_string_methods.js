

let name = 'Sujan'
console.log(name.length)  // length of the strings name

console.log(name.toUpperCase()) // function to convert all character in string into upper case
console.log(name.toLowerCase()) // convert all character in string to lower case
console.log(name.slice(2, 4)) //slice character from 2nd index to 3rd index
console.log(name.slice(2)) // slice from second index to end 
console.log(name.replace("Suj", "Mish"))  //replace 'Suj' with 'Mish' in name string


//Concate to combine the string or concatinate the str
let friend1 = "Mishan"
let friend2 = "Newson"
console.log(friend1.concat( ` is a friend of ${friend2}`))  //Mishan is a friend of Newson
console.log(friend1 + friend2) //We can also use '+' sign to concatinate or combine strings



//trim() help to trim or remove any things that is inside bracket ()  , 
let friend3 = "         Bharat          "
console.log(friend3)  //      Bharat          
console.log(friend3.trim())  //Bharat
