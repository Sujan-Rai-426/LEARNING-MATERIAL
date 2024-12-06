

// Variables is used to store the the value .
// ------Variables--------------prefred to use let over var keyword because let is block bounded  

// Variables is declared by using key word by var or let and its value can be changed

var x= 20;
console.log("value of x:",x);
console.log(`value of x is ${x}\n`); // pass value directly inside the strings


let y =25;
console.log("y:",y);
console.log(`Value of y is ${y}\n`);  //pass value directly inside the string


    // ABOVE value of variable x and y is changed
x=36;
y=46;
console.log("new x:", x, "new y:",y);
console.log(`new value of x is ${x}, And new value of y is ${y} \n`)


// Eg why let is recomeded over var
var a = 10;
    {
        var a=20;
        console.log("var Inside bracket a:",a);
    }
console.log(`var Outside baracket a: ${a} \n`); //value of a=20 inside bracket also affect the value outside the bracket, because var is not block bounded


let b = 10;
    {
        let b = 20;
        console.log("Let Inside bracket b:", b);
    }
console.log(`var Outside bracket b: ${b} \n`) // value of b inside bracket doesn't affect the value outside the bracket, Because let is block bounded


// ---------Constant denoted by using 'const' keyword and it value cannot be changed later
const password = "abcde123"
// password ='1an'      <----- this line will give and error because we cannot change constant value later
console.log(password)
