//callback function is a function which takes another function as an parameter, and then executes that other function when the current function gets executed

function person(names, callback){
    console.log(`Hello ${names}`);
}
function MyAddress(){
    console.log("India")
}

person("Sachin Kumar",MyAddress);