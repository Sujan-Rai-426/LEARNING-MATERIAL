// Arrays methods


//converting array to the strings
let array1 = [1,2,3,4]
console.log(typeof array1[2]) //number
let b = array1.toString() ////converting array to the strings using toString
console.log(b, typeof b)  //1, 2, 3, 4 string



//.join is used to create join each element in array 
let array2 = [3, 4, 5, 6]
let c = array2.join("-") //use - as join element
console.log(c, typeof c) // 3-4-5-6 string string
let d = array2.join(" and ") //use ' and '  as join element
console.log(d, typeof d) // 3 and 4 and 5 and 6 string



// pop is used to pop out the last element in the same array and return popped value
let array3 = [4, 5, 6, 7]
array3.pop()
console.log(array3) // [ 4, 5 ] 6  //6 is removed

let r = array3.pop()
console.log(array3, r) // r return the popped element  // [ 1, 2 ]   3




///Similarly push() help to push new element in the end of the array or list and return new array length
let array4 = [7, 8, 6, 8]
array4.push(8)
console.log(array4) //[ 7, 8, 6, 8, 8 ]

s = array4.push(9)
console.log(array4, s) //[ 7, 8, 6, 8, 8, 9 ] 6  //s=6 says new length of array list is 4


///shift remove first element from  the array and return shifted value  
let num1=[5, 6, 7, 8]
num1.shift()
console.log(num1)  // [ 6, 7, 8 ]

// unshift add new element to the begining of the array and return the new array length
num1.unshift(4)
console.log(num1)  // [4, 6, 7, 9]

