
// For loop to loop through the items or number
// for loop is used when we know the number of iteration that need to be taken


// loop to  get number from index 0  to 5 in increment order 
let i
for(i=0; i<=5; i++){
    console.log(i)
}


// loop to extract the obj form objects
let objects = {
    1:'sujan', 2:'hari', 3:'sita'
}

console.log("\nLoop to get key")
for(let obj in objects){
    console.log(objects[obj]) //for loop to get value of above object'items'
}


console.log("\nLoop to get value")
for(let obj in objects){
    console.log(obj) //for loop to get key of above object'items'
}


// loop using 'of' 
console.log('\nTo get the each character of an object')
for (let obj of "Sujan"){
    console.log(obj)
}

console.log('\nGet each character of an object value in key 2')
for (let obj of objects[2]){
    console.log(obj)
}
