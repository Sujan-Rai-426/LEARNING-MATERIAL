
// Do while is very similar like while loop but the only difference is Do while get executed once even if the condition is not satisfied

s = 1;
e = 5;


// conditon is right and will be executed till the conditon is satisfied 
console.log('\nstart form right Condition')
do{
    console.log(s);
    s++
}while(s < e)

// condition is wrong , but also the loop will be executed once 
console.log("\nExected loop onece even if the condition is wrong ")
do{
    console.log(s);
    s++
}while(s < e)