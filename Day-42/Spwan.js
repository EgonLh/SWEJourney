// object destrcuturing
const { spawn } = require("child_process");
const child = spawn('cmd',{
    encoding:"utf8"
});
child.on('error',function(err){
    console.log("error"+err);
})
child.stdout.on('data',(data)=> {
    console.log(`Child stdout:\n${data}`);
})
child.stderr.on('data',(data)=>{
    console.error(`Child stderr:\n${data}`)
})
