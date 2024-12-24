const net = require("net");
const readline = require("readline")

let server = net.createServer();
server.listen(9000, () => console.log("Listen on port 9000"));

server.on("connection",socket=>{
    socket.on('data',(data)=>{
        console.log("Data from client >>");
        let requestData = data.toString();
        let line = requestData.split("\r\n");
        let statusline = line[0];
        let statusData = statusline.split(" ");
        let path = statusData[1];
        console.log("Path",path);
        // console.log("path :",statusData[1]);
        // console.log(line);
        console.log();
        let hellowlrd = "<h1>Hello,World</h1>"
        let response = "HTTP/1.1 200 OK\r\n";
        response+="Content-Type:text/html\r\n";
        response+=`Content-Lenght:${hellowlrd.length}\r\n\r\n`;
        response += hellowlrd;
        // socket.write("Hello" + new Date()+"\r\n");
        socket.write(response)
        socket.end();

    })
});