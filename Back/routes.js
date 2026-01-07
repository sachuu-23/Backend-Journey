//In this routes file we will learn about routes and url
//We will learn how using http modules we can get the routes , url of home page, and about page, this is the starting of express, means express is build to ease this work and its imporatant to understand this before diving int o express section ,which is express.js

const http = require('http');
const server = http.createServer((req,res)=>{
    const url = req.url;

    if(url === "/"){
        res.writeHead(200,{'Content-Type':'text/plain'})
        res.end("Home Page");//this is as same as console.log kind of thing , here 200 indicates that the req was good and we respond it back the required data, so for that reason we have to give the status code 
    }
    else if(url === "/projects"){
        res.writeHead(200,{"Content-Type":"text/plain"})
        res.end("This url is projects url ");

    }
    else{
        res.writeHead(404,{"Content-Type":"text/plain"});
        res.end("This page is not found");
    }
});

    const port = 3000;
    server.listen(port,()=>{
        console.log(`The port is running on port number ${port}`);
    })
    
