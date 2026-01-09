// First lets understand what is promise , promise is a type of call back function which means that i will run later on, wait for a moment, basically means wait as it will return something, if that thing get resolve then it will return resolve or else it wil return reject , resolve is a type of call back function which indicates that data is fetched and we got the required data.

// function delayTime(time){
//     return new Promise((resolve)=>setTimeout(resolve,time));
// }


// // when we return the promise we do something from that returned value which means ,do some action , when prmoise is returned , for that we use .then , means once the promise is returned do this stuffs now , you can make use of the returned data or you can print that data or agian call something other and send that recive data there 
// console.log("Promise stars from here");

// delayTime(4000).then(()=>console.log("The other promise execute after 4 seconds"));

// console.log("end");




//We are checking if num2 === 0 which means its an undefined number right in maths which means that it is inreject case, and yeah you do have to provide the reason for the rejct also 
function divideFunction(num1,num2){
    return new Promise((resolve, reject)=>{
        if(num2 === 0){
            reject('The number cannot be divisible by 0');
        }
       else{
        resolve(num1/num2);
       }
    })
}


divideFunction(10,0).then(result=>{
    console.log(result);
})
    .catch(error=>{
        console.log(error,'is our error');
    })

