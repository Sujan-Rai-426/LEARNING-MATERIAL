
// Function is used to create a block of the code the can be reused later multiple times by calling it again and again

// Syntax is :

// function func_name(paramater){
//     # code
//     return #output value
// }


// Normal Function
function Sum (a, b){
    c = a + b;
    return c
}

// Arrow Function
const Multiple = (a,b) =>{
    c = a*b
    return c
}

n1 = 5;
n2 = 6;

console.log(`\nSum of ${n1} and ${n2} is : `, Sum(n1,n2)); //calling Sum function
console.log(`\nMultiplication of ${n1} and ${n2} is :`, Multiple(n1, n2));  //Calling Multiple function