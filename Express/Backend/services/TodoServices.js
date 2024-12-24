let ToDos = require('../model/ToDo');
/* => don't need cause this is services not mock data
let todos = [
    {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    },
    {
        "userId": 1,
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": false
    },
    {
        "userId": 1,
        "id": 3,
        "title": "fugiat veniam minus",
        "completed": false
    },
    {
        "userId": 1,
        "id": 4,
        "title": "et porro tempora",
        "completed": true
    },
    {
        "userId": 1,
        "id": 5,
        "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
        "completed": false
    },
    {
        "userId": 1,
        "id": 6,
        "title": "qui ullam ratione quibusdam voluptatem quia omnis",
        "completed": false
    },
    {
        "userId": 1,
        "id": 7,
        "title": "illo expedita consequatur quia in",
        "completed": false
    },
    {
        "userId": 1,
        "id": 8,
        "title": "quo adipisci enim quam ut ab",
        "completed": true
    },
    {
        "userId": 1,
        "id": 9,
        "title": "molestiae perspiciatis ipsa",
        "completed": false
    },
    {
        "userId": 1,
        "id": 10,
        "title": "illo est ratione doloremque quia maiores aut",
        "completed": true
    }
]
*/
async  function getAllTodos(){
    console.log("Get All todos Invoded")
    return ToDos.find();
}
async function getTodoById(todoId)
{
    return ToDos.findById(todoId);
}

async  function saveTodo(todo){
    //will insert in db
    let newToDo = new ToDos(todo);
    return newToDo.save();
}

async  function updateTodo(todoId,todo){
    let updateTodo = await  ToDos.findByIdAndUpdate(todoId,todo,{new:true});
    return updateTodo;
}
async  function deleteTodoByID(todoId)
{
    //solved the too long request time when deleting twice
    let todo = await ToDos.findById(todoId);
    if(todo){
        let deletedTodo = await ToDos.findByIdAndDelete(todoId);
        return  deletedTodo;
    }else{
        throw new Error("Invalid Todo Id")
    }

}
module.exports = {
    getAllTodos,
    getTodoById,
    saveTodo,
    updateTodo,
    deleteTodoByID,
}
