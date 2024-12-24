const http =  require("http");
const url  = require("url");
const fs = require("fs")
const path = require("path");
const host = 'localhost';
const port = 8000;

const requestListener = function(req,res){
    let endpoint = url.parse(req.url).pathname;
    console.log('end Point',endpoint);
    if(endpoint.includes("."))
    {
            console.log("File :");
            let fileName = endpoint.substring(1);
            console.log(fileName);
            let stream = fs.createReadStream(fileName);
            stream.once("readable", ()=>{
                res.setHeader("Content-Type",'text/html');
                res.writeHead(200);
                stream.pipe(res);
            })
            stream.on("error",(err)=>{
                res.setHeader("Content-Type","text/plain; charset=UTF-8");
                res.writeHead(404);
                res.end(err.message)
            })
    }
    else
    {
        res.writeHead(200);
        res.end("<h1>Hello, World</h1>")
    }
    // console.log(req.url);
    // res.setHeader('Content-Type','text/plain') as plain
    // res.setHeader('Content-Type','application/json') // as json
    // res.writeHead(200);

    // let obj = {
    //     name:"ZYH",
    //     age:"20"
    // }
    // res.end("<h1>Hello , </h1>My First Sever!")
    // res.write("<h1>Hello, World</h1>");
    // res.write(JSON.stringify(obj))
    // res.end()
}

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});