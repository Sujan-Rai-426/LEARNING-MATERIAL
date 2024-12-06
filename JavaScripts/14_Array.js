// Arrays are mutable and can be changed unlike strings

// This is just like list in python
// Arrays are the varriables that can holds multiple values of multiple types

let array_values = [1, 2, 4, 'sujan', true, 5.5, null]


console.log(array_values)  // [ 1, 2, 4, 'sujan', true, 5.5, null ]
console.log(array_values[2]) //4
console.log(array_values[15]) //undefined
console.log(array_values.length) //7
console.log(typeof array_values[3])  //strings
console.log(typeof array_values)  //objects


array_values[7] =8  // adding new value 8 to the index 7
array_values[0] = 3 //changing the values of 0 index from 1 to 3
console.log(array_values,'\n')  //  [ 3, 2, 4, 'sujan', true, 5.5, null, 8 ]


// for loop to print the every element in array
console.log(`for loop to print the every element in array ${array_values} :`)
for (i=0; i<array_values.length;  i++){
    console.log(array_values[i])
}