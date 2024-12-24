const child_process = require('child_process');
// let listening = child_process.execSync("dir ",{encoding :"utf8"})

const util = require("util");
const execP = util.promisify(child_process.exec);//change callback to promise

execP("dir",{
    encoding:"utf8"
}).then(data => console.log(data))