"use client"
import {useState} from "react";
import {PencilIcon,TrashIcon,CheckIcon,PlusIcon} from "@heroicons/react/16/solid";

import './Todo.css';
let initial = [
    {
        id: 1,
        title: "Untitled",
        status:"Not Start",
    },
];

let id = 2;
function nextTodo(title) {
    return {
        id:++id,
        title :title,
    }

}

// Child 2
function TodoItem({todo,onDelete,onUpdate,onStatus}) {
    const [editMode,setEditMode] = useState(false);
    const[editTitle,setEditTitle]= useState(todo.title);

    //Status
    const [editStatus,setEditStatus] = useState("Not Started");
    const deleteHandler = () =>{
        onDelete(todo);
    }


    const editHandler = () =>{
        console.log("Edit Mode :");
        if(editMode == true){
            setEditMode(false);
            console.log("Updated",editTitle)
            const updateTodo = {...todo,title:editTitle};
            onUpdate(updateTodo);
        }


        setEditMode(!editMode)
    }
    const changeHandler = (e) =>{
        setEditTitle(e.target.value);
    }

    const handleStatus=(e)=> {
        onStatus(e);
    }

    return <div className={"text-sm max-w-96 min-w-96 m-1 md:min-w-fit border p-4 shadow-md hover:shadow-sm rounded bg-white rounded-md shadow p-4 flex flex-col justify-center align-center"}>
        <div className={"flex items-center justify-between "}>
            <div className={"min-w-fit "}>
                {
                    editMode? <textarea type="text" row={0} cols={"30"} value={editTitle} maxLength={30} className={"overflow-hidden flex align-center justify-center outline-none"} onChange={changeHandler}/>:<div className=" max-h-100% max-w-100% text-justify break-words  font-mono text-xs flex flex-col justify-center align-center">
                        {todo.title ? todo.title : "Untitled"}
                    </div>

                }
            </div>
            <div className={"flex"}>
                <button type={"button"} onClick={editHandler} className={" p-1 m-1 shadow-md rounded hover:shadow-sm"}>
                    {editMode ? <CheckIcon className={"size-4"}/>: <PencilIcon className={"size-4"}/>}
                </button>
                <button type={"button"} onClick={deleteHandler} className={" p-1 m-1 shadow-md rounded hover:shadow-sm"}><TrashIcon className={"size-4"}/></button>

            </div>
        </div>

    </div>;
}

//Child 1
function TodoInput({addTodo}) {
    const [todoText,setTodoText] = useState("");
    const changeText = (e) =>{
        setTodoText(e.target.value);
    }
    const addBtnHandler = () =>{
        addTodo(todoText);
        setTodoText("");
    }
    return <form className={"p-1 max-w-100% flex justify-end"}>
        <input type="text" value={todoText} onChange={changeText} className={"border rounded text-xs px-1 font-mono outline-none"} placeholder={"Enter Note"}/> &nbsp;
        <button type="button" className={"border rounded bg-white shadow-sm hover:shadow-md px-1 text-sm font-semibold"} onClick={addBtnHandler}> <PlusIcon className={"size-3"}/></button>
    </form>;
}


export default function Todo() {
    const [todos,setTodos] = useState(initial);
    const addTodo = (title)=>{
        console.log("Title of new todo ",title)
        let newTodo = nextTodo(title);
        console.log(newTodo.id)
        setTodos([...todos,newTodo]);
    }
    const DeleteTodoHandler = (todo) =>{
        console.log("Delete", todo)
        setTodos(todos.filter(item =>item.id != todo.id));
    }
    const updateHandler = (todo) => {
        console.log("Update Todo",todo)
        setTodos(todos.map(item => item.id == todo.id?todo:item))
    }
    const logStatus = (e) =>{
        console.log(e.target.value);
    }
    return (<div className={"todo_V2 m-3 bg-blue grid grid-rows-1 grid-flow-row "}>
        <div className={"todo-container "}>
            <TodoInput addTodo={addTodo}/>
        </div>
            <div className={"grid md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3  grid-flow-row gap-4 border flex justify-center"}>
                {todos.map(todo => <TodoItem  key={todo.id} todo={todo} onDelete={DeleteTodoHandler} onUpdate={updateHandler} onStatus={logStatus}/>)}
                {

                    console.log("To do Data :",todos.length)
                }
            </div>


    </div>


    )
}