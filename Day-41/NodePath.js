const path = require("path");
let p = "./hello/text.js";
console.log("base",path.basename(p));
console.log("ext",path.extname(p));
console.log("Dir",path.dirname(p));
console.log("Delimeter",path.delimiter);
console.log("Separator",path.sep); //file separator



