var express = require('express');
var router = express.Router();

// Movie -> middleware
router.get('/',(req,res,next)=>{
    console.log("Hello, From Movie Middleware");
    next();
})

// Reviewing Express
router.get('/',(req,res,next)=>{
    // res.status(300);

    // res.send("Send with status 300") => return view

    // res.json({}) => return json
    // res.status(400).json({name:"HEllo"});

    // res.render("file",{title:...}); => render a file from view engine = take from view folder
    res.render('viewtest',{title:"Hello From Test"});
    // routes are separated based on resources


})

//with regular expression -> for path only => abcd or acd
//should not use regular expression too heavily -> the last options
router.all('/ab?cd',(req,res,next)=>{
    console.log("test From All (ab?cd)")
    res.send("<code><center>For Router.all() > (ab?cd)</center></code>");
})
router.all('/ab+cd',(req,res,next)=>{
    console.log("test From All (ab+cd)")
    res.send("<code><center>For Router.all() > (ab+cd)</center></code>");
})
router.all('/ab*cd',(req,res,next)=>{
    console.log("test From All (ab*cd)")
    res.send("<code><center>For Router.all() > (ab*cd)</center></code>");
})

// Route Parameter
// handle paths with many parameters
// can restrcit with regex
router.get('/:movieId',(req,res,next)=>{
    let a = req.params['movieId'];
    console.log("Param",a);
        res.send("<code><center>This Params `"+a+"`</center></code>")
})

//instead of nested multiple route handler, use next()
//do refactor
//make it array for auth
//later in JWT
//resp later

module.exports = router;

