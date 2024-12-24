//moved to business logic
// let todos = [
//     {
//         "userId": 1,
//         "id": 1,
//         "title": "delectus aut autem",
//         "completed": false
//     },
//     {
//         "userId": 1,
//         "id": 2,
//         "title": "quis ut nam facilis et officia qui",
//         "completed": false
//     },
//     {
//         "userId": 1,
//         "id": 3,
//         "title": "fugiat veniam minus",
//         "completed": false
//     },
//     {
//         "userId": 1,
//         "id": 4,
//         "title": "et porro tempora",
//         "completed": true
//     },
//     {
//         "userId": 1,
//         "id": 5,
//         "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
//         "completed": false
//     },
//     {
//         "userId": 1,
//         "id": 6,
//         "title": "qui ullam ratione quibusdam voluptatem quia omnis",
//         "completed": false
//     },
//     {
//         "userId": 1,
//         "id": 7,
//         "title": "illo expedita consequatur quia in",
//         "completed": false
//     },
//     {
//         "userId": 1,
//         "id": 8,
//         "title": "quo adipisci enim quam ut ab",
//         "completed": true
//     },
//     {
//         "userId": 1,
//         "id": 9,
//         "title": "molestiae perspiciatis ipsa",
//         "completed": false
//     },
//     {
//         "userId": 1,
//         "id": 10,
//         "title": "illo est ratione doloremque quia maiores aut",
//         "completed": true
//     }
// ];

var todoServices = require('../services/TodoServices.js');

async function getAllTodos(req,res){
    // console.log(" Data :",await todoServices.getAllTodos())
    let todos =await todoServices.getAllTodos();
    console.log("Todo from services:",todos);
    res.json(todos);
}

async  function getTodoById(req,res){
    let todoId = req.params['todoId'];
    console.log("to do Id :", todoId)
    try {
        let todo = await todoServices.getTodoById(todoId);
        if(todo)
        {
            res.json(todo);
        }
        else
        {
            res.status(400).json({
                error:"ToDo not found"
            });
        }
    }
    catch (e)
    {
        res.status(400).json({
            error:"ToDo not found"
        });
    }

}

async function createTodo(req,res)
{
    //getting data from the body of HTTP


    try
    {
        let todo = req.body;
        let savedTodo = await todoServices.saveTodo(todo);
        if(savedTodo){
            res.status(201).json(savedTodo);
        }
    }
    catch (e)
    {
        res.status(400).json({
            error:e
        });
    }
}

//update
async  function updateTodo(req,res){

    let todoId = req.params['todoId'];
    let todo = req.body;
    try
    {
        let updateTodo = await  todoServices.updateTodo(todoId,todo);
        if(updateTodo)
        {
            res.json(updateTodo);
        }

    }catch (e)
    {
        res.status(400).json({
            error:"ToDo not found"
        });
    }
}

async function sleep(ms){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve();
        },ms);
    })
}
async  function deleteTodo(req,res){
    let todoId = req.params['todoId'];
    try
    {
        await sleep(3000);
        let deletedTodo = await todoServices.deleteTodoByID(todoId);
        if(deletedTodo){
            res.json(deletedTodo);
        }
    }catch (e)
    {
        res.status(400).json({
            error:e.message
        });
    }
}
module.exports = {
    getAllTodos,
    getTodoById,
    createTodo,
    updateTodo,
    deleteTodo,
}