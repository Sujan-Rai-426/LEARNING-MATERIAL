

//Method of array 2

////delete is use to delete the delete element in the list without affecting the length of array, so the length of the array is same
console.log("delete() method")
let num1 = [1, 2, 3]

delete(num1[0])  // delete num1 element in 0th index  
console.log(num1)  // [<1 empty item>, 2, 3]
console.log(num1.length) //3




//// concatinate is done by using concat and return new array
console.log("concat() method")
let num2 = [4, 5, 6]
let num3 = [7, 8, 9]
let num4 = [10, 11, 12]

let new_nums = num2.concat(num3)
console.log(new_nums)  // [ 4, 5, 6, 7, 8, 9 ]

let a = num2.concat(num3, num4) // can concatinate more than 2 array list  also
console.log(a)  // [  4, 5, 6, 7, 8, 9, 10, 11, 12 ]




//// sort help to sort the array alphabetically i.e sort according to first number
console.log("sort() method")
let num5 = [55, 32, 44, 77, 200]

num5.sort()
console.log(num5)  //[200, 32, 44, 55, 77 ]




///if we want to sort in numeric order we need to pass any compare function to the sort
console.log("sort() using compare function")
let num6 = [20, 1, 500, 6, 201]

let compare = (a, b) =>{
    return a-b  //for lowest to highest
    //return b-a for highest to lowest
} 
num6.sort(compare) 
console.log(num6) // [ 1, 6, 20, 201, 500 ]

// reverse function is used just to reverse the array
console.log("reverse() method")
num6.reverse()
console.log(num6) // [ 500, 201, 20, 6, 1 ]



//splice is used to add new element between the array list
//  array.splice( index from where to add, no. for elemet to be removed, elements to be added)
console.log("splice() method")
let num7 = [25, 5, 6, 77, 6, 887, 86]

num7.splice(2, 3, 1000, 5468)
console.log(num7)  // [ 25, 5, 1000, 5468, 887, 86 ]
let deletedValues = num7.splice(2, 3, 1000, 5468) //return deleted values //[ 1000, 5468, 887 ]
console.log(deletedValues) //[1000, 5468, 887]


// slice is use to slice elements in array
// slice(from where to slice, just after the slice position)  // it does't modify original array but create new array
console.log("slice() method")
let num8 = [1, 2, 3, 4, 8, 9]
let b = num8.slice(2, 4)
console.log(b) // [3, 4]
console.log(num8) // [ 1, 2, 3, 4, 8, 9 ]