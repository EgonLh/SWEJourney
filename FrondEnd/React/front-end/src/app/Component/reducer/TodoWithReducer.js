"use client"
import {useContext, useReducer, useState} from "react";
import "./../TodoVersion2/TodoV_2.css";
import TodoContext from "./TodoContext";

let initial = [
    {
        id: 1,
        title: "Task1"
    },
    {
        id: 2,
        title: "Task2"
    }, {
        id: 3,
        title: "Task3"
    }, {
        id: 4,
        title: "Task4"
    },

];
let id = 4;
function nextTodo(title) {
    return {
        id:++id,
        title :title,
    }

}

// Child 2
function TodoItem({todo,onDelete,onUpdate}) {
    const [editMode,setEditMode] = useState(false);
    const[editTitle,setEditTitle]= useState(todo.title);
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
    return <div className={"todo-item"}>
        {
            editMode? <input type="text" value={editTitle} onChange={changeHandler}/>:todo.title
        }
        <div>
            <button type={"button"} onClick={editHandler}>{editMode ? "Update" : "Edit"}</button>
            <button type={"button"} onClick={deleteHandler}>Delete</button>

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
    return <form>
        <code> Add Todo </code><br/>
        <input type="text" value={todoText} onChange={changeText}/> &nbsp;
        <button type="button" onClick={addBtnHandler}>Add</button>
    </form>;
}
function todoReducer(state,action) {
    console.log("State :",state ,"\t Action :",action)
    switch (action.type) {
        case "ADD_TODO":
            return [action.payload,...state];
        case "DELETE_TODO":
            return state.filter(todo => todo.id!==action.payload.id);
        case "UPDATE_TODO":
            return state.map(todo => todo.id == action.payload.id?action.payload:todo)
        default:
            return state;
    }
    return state;

}
// function Filter() {
//     return
// }
export default function TodoWithReducer() {
    const [todos,dispatch] = useReducer(todoReducer,initial);
    const addTodo = (title)=>{
        console.log("Title of new todo ",title)
        let newTodo = nextTodo(title);
        dispatch({
            type:"ADD_TODO",
            payload:newTodo
        });

    }
    const DeleteTodoHandler = (todo) =>{
        console.log("Delete", todo);
        dispatch({
            type:"DELETE_TODO",
            payload:todo
        });
    }
    const updateHandler = (todo) => {
        console.log("Update Todo",todo)
        dispatch({
            type:"UPDATE_TODO",
            payload:todo
        });
    }
    return (<div className={"todo_V2"}>
        <div className={"todo-container"}>
            <TodoInput addTodo={addTodo}  />
        </div>
        <code>
            {todos.map(todo => <TodoItem key={todo.id} todo={todo} onDelete={DeleteTodoHandler} onUpdate={updateHandler}/>)}
        </code></div>)
}