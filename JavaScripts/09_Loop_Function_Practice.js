

// Practice set for loop and functions 
let marks ={
    'sujan' : 99,
    'newson' : 45,
    'mishan' : 89,
    'bharat' : 100,
    'anushka' : 3,
}


// Object.keys(marks) give the  key of object 'mark'  and length give the length 
for (let i=0; i<Object.keys(marks).length; i++){
    console.log("The mark of " + Object.keys(marks)[i] + "are" + marks[Object.keys(marks)[i]])
}