const fs = require('fs');

fs.readFile('callback.txt','utf8',(err,data)=>{
     if(err) return;//this is a call back funtion and we are learing call back hell which means that we perform nested callback whcih means one callback have another call back inside it 
     const modifyTheFile = data.toUpperCase();
     console.log("The text have been modified to upper case");


     //this is now our callback function which is under another callback function 
fs.writeFile('Output.txt',modifyTheFile,(err)=>{
    if(err) return ;
    console.log("We have written the text in our new file");


    fs.readFile('Output.txt','utf8',(err,data)=>{
        if(err) return ;

        console.log("The new text file has been created ");
    })
})

     
})