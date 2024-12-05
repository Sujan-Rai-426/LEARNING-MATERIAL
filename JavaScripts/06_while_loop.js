

// while loop is use to iterate throught the objets or items or number 
// while loop is used when we don't know exact number of iteration but instead we loop till the condition is satisfied 

const prompt = require('prompt-sync')();

let s = prompt("Enter the start point of loop :")
let e = prompt("Enter the end point of loop :")
s = parseInt(s)
e = parseInt(e)


console.log(`\nLoop from ${s} to ${e} : `)
while(s <= e){
    console.log(s);
    s++
}

