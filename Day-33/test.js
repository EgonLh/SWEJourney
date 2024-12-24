// console.log("Hello world");
const fs = require("fs");
console.log("Start");
fs.readFile('./Day-33/hello.txt','utf-8',(err,data)=>{
    if(!err)
        {
            console.log("Data :",data.toString());
        }
    else{
        console.log("Err ",err);
    }
});
console.log("End");