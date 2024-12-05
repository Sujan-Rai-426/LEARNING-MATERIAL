
// Similar like dictionary in python
// Objects consist the key and value of a character 


// item = { key1:value1, key2:value2, key3:value3, key4:value4 , ....}

let items ={
    "sujan": true,
    "hari": 44,
    21: "sita"
}
console.log(items)
console.log(typeof items)
console.log(items["sujan"], items[21])


// loop to extract each object character:
console.log("\nLoop to get key")
for(let char in items){
    console.log(items[char]) //for loop to get value of above object'items'
}


console.log("\nLoop to get value")
for(let char in items){
    console.log(char) //for loop to get key of above object'items'
}


// loop using 'of' 
console.log('\nTo get the each character of an item')
for (let char of "Sujan"){
    console.log(char)
}

console.log('\nGet each character of an item value in key 21')
for (let char of items[21]){
    console.log(char)
}
