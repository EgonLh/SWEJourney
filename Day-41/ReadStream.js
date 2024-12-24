const fs = require('fs');
async function logChunks(readable){
    for await(const chunk of readable)
    {
        console.log("Cunk-1: ",chunk);
    }
}
 
const  readable = fs.createReadStream(
    'test.js', {encoding : "utf8"}
);

logChunks(readable)