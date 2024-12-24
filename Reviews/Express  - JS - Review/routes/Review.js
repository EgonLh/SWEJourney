var express = require('express');
var router = express.Router();
router.get('/',function (req,res,next) {
    res.send("Hello Reviews");
})
/* GET users listing. */
router.get('/send', function(req, res, next) {
    res.send('Response Send');
});


router.get('/json', function(req, res, next) {
    res.json('Respone JSON ');
});

router.get('/render', function(req, res, next) {
    res.render('test', {title : "Hello Title"});
});

router.get('/download', function(req, res, next) {
    res.download('./public/images/downloadImg.jpg','img.jpg');

});
router.get('/download', function(req, res, next) {
    res.json("Success")
});

router.get('/middleware', function(req, res, next) {
    console.log("> Middleware Handler Triggered")
    next();
});
router.get('/middleware', function(req, res, next) {
    res.send("Hello, Middleware")
});

router.get('/parameters/:movieID', function(req, res, next) {
    let id = req.params['movieID']

    //route parameters parameters
    res.send("Hello, Parameter :"+id);
});

router.get('/validParams/:movieID(\\\d+)/:movieName([a-zA-Z]+)', function(req, res, next) {
    let id = req.params['movieID']
    let name = req.params['movieName']

    //route parameters parameters
    res.json({urs_id:id,usr_name:name});
});

// ----- bad practice ----- //
router.get('/multipleHandler' ,function (req,res,next) {
    console.log("This is Multiple Handler......")
    next();
},(req,res)=>{
    res.send("Hello, MultipleHandler")
})

// ----- refactored handler ----- //
function refactoredHandler() {
    return (req, res) => {
        res.send("Hello, MultipleHandler")
    };
}

router.get('/refactoredHandler' ,function (req,res,next) {
    console.log("This is Multiple Handler......")
    next();
},refactoredHandler())

// ----- Res.End ----- //
router.get('/endThis' ,function (req,res,next) {
    console.log(" > Ending the process without any data");
    res.end();
    // res.send("Data sent after ending the process");
})

// ----- Res. Comparing ----- //
router.get('/compare' ,function (req,res,next) {
    res.send("HEllo");
    res.send("World");
    res.json({test:"Hello"})
})

// ----- Res ----- //
router.get("/api/data" , (req,res,next)=>{
    res.json({data :1});
})
router.get("/api/pdata" , (req,res,next)=>{ //legacy - one
    res.jsonp({data :1});
})

router.get("/api/noWhere" , (req,res,next)=>{
    res.redirect(302,"/review/api/moved");
})

router.get("/api/moved" , (req,res,next)=>{
    res.sendStatus(300);

})
// --- Status
router.get("/api/Status" , (req,res,next)=>{
    res.status(301).send("Moved To Myanmar")
    // demo -
    // res.status(201).json(savedTodo);
})
module.exports = router;
