function sum(a,b){
    return a + b;
}


function sub(a,b){
    return a - b;
}
function divide(a,b){
    if(b === 0){
        throw new Error("Divide by 0 is not possible")//this will give the error meassage to the place where this function will execute and i will need the error message 
    }

    return a/b;
}
module.exports = {sum,
    divide,
    sub
};