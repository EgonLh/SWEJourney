const net = require("net");
var client = new net.Socket();
client.connect(9000, 'localhost', function(){
    console.log("Connected");
    client.write(" Hello, Sever! : Cilent");//write
})

client.on('data',function(data){
    console.log('Received' + data);
    client.destroy();//kill cilent after server's response
})

client.on('close',function(){
    console.log("Connection Closed");
})