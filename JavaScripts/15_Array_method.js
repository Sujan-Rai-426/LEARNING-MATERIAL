// Arrays methods


let array1 = [1,2,3,4]

//converting array to the strings
console.log(typeof array1[2]) //number
let b = array1.toString() ////converting array to the strings using toString
console.log(b, typeof b)  //1, 2, 3, 4 string


//.join is used to create join each element in array 
let c = array1.join("-") //use - as join element
console.log(c, typeof c) // 1-2-3-4 string

let d = array1.join(" and ") //use ' and '  as join element
console.log(d, typeof d) // 1 and 2 and 3 and 4 string


// pop is used to pop out the last element in the same array and return popped value
array1.pop()
console.log(array1) // [ 1, 2, 3 ]  //4 is removed

let r = array1.pop()
console.log(array1, r) // r return the popped element  // [ 1, 2 ]   3


///Similarly push() help to push new element in the array or list and return new array length
array1.push(8)
console.log(array1) //[ 1, 2, 8 ]

s = array1.push(9)
console.log(array1, s) // [ 1, 2, 8, 9 ] 4  //s=4 says new length of array list is 4


///shift remove first element from  the array and return shifted value  
let num1=[5, 6, 7, 8]
num1.shift()
console.log(num1)  // [ 6, 7, 8 ]

// unshift add new element to the begining of the array and return the new array length
num1.unshift(4)
console.log(num1)  // [4, 6, 7, 9]

