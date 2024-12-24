"use client"
import {useState} from "react";

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
function nextTodo() {
    return {
        id:id++,
        title :"Task "+(id++),
    }

}
export default function ArrayListDemo()
{
   const [todos,setTodos] = useState(initial);
   const addHandler = () => {
       const nextodo = nextTodo();
       console.log("Next Todo :",nextodo);
       setTodos([...todos,nextodo]);
   }

   const updateHandler = (todo) =>{
       console.log("Update Handler ",todo);
       todo.title = todo.title + "Update";
       setTodos(todos.map(item=>item.id == todo.id?todo : item))
   }
    const deleteHandler = (todo) => {
        console.log("Delete Todo",todo)
       setTodos(todos.filter(item => item.id != todo.id))
    }
    return (<div>
        <button type={'button'}
                onClick={addHandler}
        >Add</button>
        {
            todos.map(todo => {
                return <div key={todo.id}>{todo.title}
                <button type={'button'} onClick={()=>deleteHandler(todo)}> Delete</button>
                    <button type={'button'} onClick={()=>updateHandler(todo)}> Update</button>
                </div>

            })
        }
    </div>)

}