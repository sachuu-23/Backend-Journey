const indexx = require("./server");
console.log(indexx.sum(10,30));
console.log(indexx.sub(30,10))

const array = [1,2,3,4];
const target = 7;

try{
    let result = indexx.divide(10,2);
        if(result <3){
            console.log("Hi there");
        }
        else{
            console.log("Good Bye");        }
}
catch(error){
    console.log("The error is :",error.message);

}

