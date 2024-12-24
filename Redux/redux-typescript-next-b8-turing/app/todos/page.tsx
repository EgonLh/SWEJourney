"use client"
import TodoApiUI from "@/app/components/Todo/TodoApiUI"; // this component cause refreshOnFocus
import {useState} from "react";
import {useAddTodoMutation} from "@/lib/features/todos/todoApiSlice";
import {Todo} from "@/lib/features/todos/todoSlice";
function TodoInput() {
    const [addTodoAPI,addTodoResult] = useAddTodoMutation();
    const [todoText,setTodoText] = useState("");
    const btnAddHandler = () =>{
        console.log("Add Hander");
        const todoPayload:Partial<Todo> = {
            title: todoText,
            completed: false,
        };

        addTodoAPI(todoPayload)
            .unwrap()
            .then(data => {
                console.log("Add Success ",data)
                setTodoText("");
            }),error=>{
            console.log("Add Error ",error)
        }
    }
    return (<div>
        <input type={"text"} value={todoText} onChange={(event => setTodoText(event.target.value))} className={"form-control shadow-sm border"}/>
        <br/>
        <button type={"button"} className={"btn btn-dark m-1 btn-sm"} onClick={btnAddHandler} >Add To Do</button>
    </div>)
}

export default function TodoPage()
{
    console.log("ENV FROM CLIENT :",process.env.NEXT_PUBLIC_BACKEND_URL)
    return(<div>
        <h1>Todo Pages</h1>
        <TodoInput/>
        <TodoApiUI/>

    </div>)
}