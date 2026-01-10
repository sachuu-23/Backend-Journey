//callback function is a function which takes another function as an parameter, and then executes that other function when the current function gets executed

const fs = require('fs');
function person(names, callback){
    console.log(`Hello ${names}`);
    callback();
}
function MyAddress(){
    console.log("India")
}

person("Sachin Kumar",MyAddress);
console.log("hi")

fs.readFile("callback.txt","utf8",(err,data)=>{
    if(err){
        console.log(err);
        return;
    }
        console.log(data);
    
})//here readfile is an async function , and so err and data is an callback fucntion , which is called after readfile reads the data, so whatever it return , lets assume a callback function is made and it takes error and data and return error if there is error and data if there is data
//so call back function are used once the normal function executes and the callback function is then called, if that call back function need to taka input from the current fucntion ans , then yeah it does take that also 
//and at the end we check if there is error or not if not the print the data

