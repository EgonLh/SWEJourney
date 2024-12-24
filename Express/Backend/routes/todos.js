var express = require('express');
var router = express.Router();
//importing controller
var todos = require('./../controller/TodoController');

//move to controller
// let todos = [
//         {
//             "userId": 1,
//             "id": 1,
//             "title": "delectus aut autem",
//             "completed": false
//         },
//         {
//             "userId": 1,
//             "id": 2,
//             "title": "quis ut nam facilis et officia qui",
//             "completed": false
//         },
//         {
//             "userId": 1,
//             "id": 3,
//             "title": "fugiat veniam minus",
//             "completed": false
//         },
//         {
//             "userId": 1,
//             "id": 4,
//             "title": "et porro tempora",
//             "completed": true
//         },
//         {
//             "userId": 1,
//             "id": 5,
//             "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
//             "completed": false
//         },
//         {
//             "userId": 1,
//             "id": 6,
//             "title": "qui ullam ratione quibusdam voluptatem quia omnis",
//             "completed": false
//         },
//         {
//             "userId": 1,
//             "id": 7,
//             "title": "illo expedita consequatur quia in",
//             "completed": false
//         },
//         {
//             "userId": 1,
//             "id": 8,
//             "title": "quo adipisci enim quam ut ab",
//             "completed": true
//         },
//         {
//             "userId": 1,
//             "id": 9,
//             "title": "molestiae perspiciatis ipsa",
//             "completed": false
//         },
//         {
//             "userId": 1,
//             "id": 10,
//             "title": "illo est ratione doloremque quia maiores aut",
//             "completed": true
//         }
// ];
//registering
// router.get('/',(req,res)=>{
//     res.json(todos);
// });

//same get All todos but using controller
router.get('/',todos.getAllTodos);

//refactoring callbacks
const handler1 = (req, res, next) => {
    console.log("use time",req.requestTime)
    console.log("--preprocessing--");
    next();
};

// change to controller - as follow
// const handler2 = (req, res) => {
//     let todoId = req.params['todoId'];
//     console.log("to do Id ", todoId)
//     // res.json(todos);
//     res.json(todos.find(todo => todo.id == todoId));
//
// };

//before controller
// router.get('/:todoId',handler1,handler2);

//after controller
router.get('/:todoId',handler1,todos.getTodoById);

//downloading
/*
router.get('/download',(req,res,next)=>{
    console.log("Downloading")
    console.log()
    res.download('./public/download/data.txt','data.txt',(err)=>{
        console.log("error");
    })
});
*/

//response ending
router.get('/end',(req,res,next)=>{
    console.log("Ending response")
    res.send("<h1>Hello</h1>");
    res.end();
});

//redirecting
/*
router.get('/home',(req,res)=>{
    res.redirect('/todos');
});
*/

//creating
// router.post('/',(req,res)=>{
//     res.json({
//         "userId": 1,
//         "id": 9,
//         "title": "Created To do",
//         "completed": false
//     },)
// })

//downloading
// router.get('/download',(req,res,next)=>{
//     res.download('../public/download/data.txt','data.txt',(err)=>{
//         console.log("error");
//     })
// });

//redirecting
// router.get('/home',(req,res)=>{
//     res.redirect('/');
// });

//create todo From Controller
//registering
router.post('/',todos.createTodo);
//updating
router.put('/:todoId',todos.updateTodo);
router.delete('/:todoId',todos.deleteTodo)
module.exports = router;