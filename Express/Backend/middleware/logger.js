function customLog(req,res,next)
{
    req.requestTime = Date.now();
    console.log("custom log" , req.url)
    next();
}

module.exports.logger = customLog;