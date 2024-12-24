function myLogger(options) {
    console.log("\nThis is Logger.......\n")
    return function (req,res,next) {
        console.log("\nThis is Middleware.......\n")
        next();
    }
}
module.exports = myLogger();