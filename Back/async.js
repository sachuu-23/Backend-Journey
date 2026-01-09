// This code is all about async function , whih takes whatevr the promise returns and it has diff keyword compare to normal promise where we got just .then and .catch , but here we have got try and then catch which means whatever we got from async function , use it and check it i try block if it didnt work in try block that means we got an error , we we  basically put the error in catch block 




// function delayTime(time){
//     return new Promise ((resolve) => setTimeout(resolve,time))
// }

//  async function delayGreet(name){
//       await delayTime(4000);
//     console.log("The name of the person is",name);

//  }
//  delayGreet("sachin");



async function Divideit(num1,num2){
    try{
        //inside the try block we cna write logic and if that logic doesnt work then we can throw error ,means basially we can try many things inside the try block ,using if else stuffs and . also write logic like this that if this does not work then let the other one fucntion and let it procees furter 
        if(num2 === 0) throw new Error("cannot be divisible by 0")
        return num1/num2;
    }
      catch(error){
        console.error("The error is, it",error);
        return null;
        
      }
    }

async function mainfunction(){
    // console.log(await Divideit(100,5));
    const result = await Divideit(10,5);
    if(result === null){
      console.log("Divison has failed");
    }
}
const ans = mainfunction();
console.log(ans);