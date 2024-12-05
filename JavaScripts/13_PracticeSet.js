

// Extract the amount out of the string " Please give Rs.1000 "
let str = "Please give Rs.1000"
let amount1 = str.slice(15)
let amount2 = str.slice("Please give Rs.".length)
console.log(amount1)
console.log(amount2)


console.log(typeof amount2)  // string
//Now converting above string amount in number amount
let amount3 = parseInt(amount2)
console.log(typeof amount3) // number



// Try to change the fourth character of the string " Please give Rs.1000 "

//NOTE:- We can make newstring with changed string value but we cannot change same existing string because string is immutable 
let new_str = str.replace(str[3],"F")
console.log(new_str)  //PleFse give Rs.1000