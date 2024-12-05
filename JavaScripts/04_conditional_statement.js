

// Conditional statements are the statement to check the conditions like if, else if, else, 

const prompt = require('prompt-sync')();

let age = prompt("Enter your age here: "); // taking user input as string
age = parseInt(age); // converting that string into integer value

console.log(`your age is ${age}`)

if(0<age && age<18){
    console.log(`you cannot vote because your age is under 18.`);
}else if (age<0){
    console.log(`Error because age cannot be negative.`);
}else {
    console.log(`You are fully elidigible to give your vote.`);
}