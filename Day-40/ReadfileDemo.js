const fileSys = require('fs');

fileSys.readFile('index.js','utf-8',(err,data)=>{
    if(!err)
    {
        console.log("File Read Complete :",data.toString());
    }else{
        console.log(err);
    }
})


console.log("After file Read :");
