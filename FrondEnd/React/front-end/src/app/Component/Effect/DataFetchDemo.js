"use client"
import React, {useEffect, useState} from "react";

export default function DataFetchDemo() {
    const [todos,setTodos] = useState([]);
    useEffect(()=>{
        console.log("Run Effect")
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(data => data.json())
            .then(json => setTodos(json))
            // .then(json =>console.log("Data :",json))

    },[])
    useEffect(()=>{
        console.log('Second Called : Effect')
    })
    console.log("Run Render")
    return(<div>
        Data Fetch
        {
            todos.map(todo => <div key={todo.id}> - <code>{todo.title}</code></div>)
        }
    </div>)
}