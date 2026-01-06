// const http = require('http');

// // const servers = http.createServer((req,res)=>{
// //     res.write("hello");
// //     res.end();//this is used to end the server req and res for this specific server 
// // })

const http = require('http');
const server = http.createServer((req,res) =>{
    console.log(req.url);
    console.log(req.headers);
    res.writeHead(200,{"Content-Type":"text/plain"})
    res.end("I am the Best Giga brain");
        })

//WE need a port on which our server will listen the request and send back the response

const port = 3000;
server.listen(port ,()=>{
    console.log(`The server is running on port ${port}`);

})//this return a call back , as this is happening outside of node environment and port 
//is listenning some where else , and i will need confirmation that this port is running or not 
//by logging it out, with the logic of placeholder, which put that value only whcih is current right now


//this simply end the response process for current client request, means
    //if for one request the response is completed then simply end the res by using res.end() keyword 





