console.log(process.argv);//argv
console.log(process.cwd());//current dic
console.log(process.env);//current dic


const os = require('os');
console.log("Cpus ",os.cpus());
console.log("network ",os.networkInterfaces());
console.log("User Info ",os.userInfo());

// https://nodejs.org/api/os.html