
//There are seven premitive types which are below
// 'bb u ss nn'----> bigInt, boolean, undefined, symbol, string, null, number

let a = BigInt("567");  //BigInt
let b = true;  //Boolean
let c = undefined;  // Undefined
let d;  //This is also undefined
let e = "Sujan"; //string
let f = Symbol("I am Symbol"); //this is symbol
let g = null; //this id null
let h = 574; // this is number

console.log(`${typeof a} a:${a}\n  ${typeof b} b:${b}\n ${typeof c} c:${c}\n   ${typeof d} d:${d}\n  ${typeof e} e:${e}\n `)
console.log(`${typeof g} g:${g}\n  ${typeof h} h: ${h}\n` )

console.log (typeof d) //we use 'typeof' keyword to get the type of any data