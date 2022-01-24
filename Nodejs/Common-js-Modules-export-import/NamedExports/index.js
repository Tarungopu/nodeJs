const calculator=require("./calculator");
const{add,sub,mul,div}=calculator;

// or 

// const{add,sub,mul,div}=require("./calculator");


console.log(add(1,2));
console.log(sub(1,2));
console.log(div(1,2));
console.log(mul(1,2));

//index.js

const path = require("fs");
const filePath = path.join("users", "ravi", "notes.txt");

console.log(filePath);

// node index.js