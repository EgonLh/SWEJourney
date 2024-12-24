"use client"
import {useGetAllTodoQuery,useUpdateTodoMutation} from "@/lib/features/todos/todoApiSlice";
import {useState} from "react";
import {Todo} from "@/lib/features/todos/todoSlice";
import {log} from "util";

export default function TodoDetail({params}: { params: { id: string } }) {
    // normal
    // const { data, isError, isLoading, isSuccess } = useGetTodoByIDQuery(params.id);

    //with polling interval
    // const { data, isError, isLoading, isSuccess } = useGetTodoByIDQuery(params.id,{
    //     pollingInterval: 2000,
    //     refetchOnMountOrArgChange: true,
    //     skip: false,});

    // with selectfromResult
    // for the sake of perfromance , the api should refetch for the individual if there are all api called in code

    const {todo, isError, isLoading, isSuccess} = useGetAllTodoQuery(undefined, {
        selectFromResult: ({data}) => ({
            todo: data?.find((todo) => todo._id === params.id),
        }),
    })
    const [updateTodoApi,updateTodoResult] = useUpdateTodoMutation();
    if (isSuccess) {
        return (<h1>{todo.title}</h1>)
    }
    const [todoText,setTodoText] = useState('');
    const btnUpdateHandler = () =>{
        const updateTodo:Todo = {
            ...todo,
            title:todoText
        }
        console.log("new Todo",updateTodo);
        updateTodoApi(updateTodo)
            .unwrap()
            .then(data=>console.log("Update Success :",data))
    }
        return (<div>
            <div className={"border p-3 shadow-sm rounded d-flex flex-column justify-content-between"}>
                <h5 className={"font-monospace small bg-dark rounded text-white p-2"}>Title : {todo.title}</h5>
                <input
                    type={"text"}
                    onChange={(e)=>{setTodoText(e.target.value)}}
                    value={todoText}
                    className={"outline-0 border p-1"}
                />
                <button type={"button"} className={"btn btn-primary btn-sm m-2"} onClick={btnUpdateHandler}>Update</button>
            </div>
        </div>)
}