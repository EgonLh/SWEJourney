"use client";
import {addTodo, deleteTodo, selectTodos, Todo,loadAllTodo} from "@/lib/features/todos/todoSlice";
import {useAppDispatch, useAppSelector} from "@/lib/hooks";
import React, {useEffect, useState} from "react";


// todo input
let id = 3;

function TodoInput() {
    const dispatch = useAppDispatch();
    const [todo, setTodo] = useState("");
    const onChangeHandler = (event) => {
        setTodo(event.target.value)
    }
    const btnAddHandler = () => {
        let payload: Todo = {
            id: ""+(++id),
            title: todo,
            completed: false,
        };
        dispatch(addTodo(payload));
        setTodo("")
    }
    return (<div>
        <form className={"border p-3 text-center rounded shadow-sm"}>
            <button className={"btn btn-dark font-monospace"}>{!todo?"EMPTY":todo}</button>
            <div className={"form-group"}>
                <label className={"p-4 fs-6 fw-bold font-monospace"}>Todo</label>
                <input type={"text"}
                       className={"form-control"}
                       value={todo}
                       onChange={onChangeHandler}/>
                <button type={"button"}
                        className={"btn btn-primary p-1"}
                        onClick={btnAddHandler}
                >Add Todo
                </button>
            </div>
        </form>
    </div>)
}

function TodoItem(props: { todo: Todo }) {
    const dispatch = useAppDispatch();

    const btnDeleteHandler = () => {
        dispatch(deleteTodo(props.todo))
    }
    return <div
        className={"border p-3 m-3 shadow-sm bg-white rounded-sm d-flex justify-content-between align-items-center"}>
        <div className={"fw-bold font-monospace small"}>{props.todo.title}</div>
        <button type={"button"}
                className={"btn btn-dark p-1 btn-sm fw-bold"}
                onClick={btnDeleteHandler}
        >Delete Todo
        </button>

    </div>;
}

// todo component
function TotoList() {
    const todos = useAppSelector(selectTodos);
    return (<div>
        <TodoInput/>

        {
            todos.map(todo => <TodoItem key={todo.id} todo={todo}/>)
        }
    </div>)
}

export default function TodoUI() {

    /*For Add Todo : Object Return  */
    console.log("Add Todo :",addTodo({
        id : 1,
        title:"smth"
    }))
    const dispatch = useAppDispatch();
    useEffect(()=>{
        dispatch(loadAllTodo());
    },[])
    return (<div>
        <code className={"text-center fs-2 w-100"}>Todo</code>
        <TotoList/>
    </div>)
}