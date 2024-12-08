
// Iterate througheach element in Array list using loop
console.log("\nIterate through each element in Array list using loop :")

Array_list = [1, 2, 3, 4, 'Sujan', 5]
for (i=0; i<Array_list.length; i++){
    console.log(Array_list[i])
}




// Opertaion performed (elenemt * element) for each element we use foreach function
console.log("\nForeach loop :")

num=[1, 2, 3, 4, 5]
num.forEach(element => {
    console.log(element*element)
});   




// Converting into array using Array.from
console.log("\nArray.from() :")

let name = "Sujan"
let a = Array.from(name)
console.log(a)  //op--> ['S', 'u', 'j', 'a', 'n']




// for...of loop
console.log("\nFor...of loop :")

let nums = [10, 12, 33, 40, 55]
for(let n of nums){
    console.log(n)
}



// for...in loop  ---> 'n' give key and 'num1[n]' give value of n key
console.log("\nFor...in loop :")

let num1 = [10, 12, 33, 40, 55]
for(let n in num1){
    console.log(`Key: ${n} ---> Value: ${num1[n]}`)
}
