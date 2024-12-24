"use client";
import {useGetAllTodoQuery,useGetTodoByIDQuery,useDeleteTodoMutation} from "@/lib/features/todos/todoApiSlice";
import {Todo} from "@/lib/features/todos/todoSlice";
import {useRouter} from "next/navigation";

function TodoItem({todo}:{todo:Todo}){
    const router = useRouter();
    const [deleteTodoAPI, deleteTodoResult] = useDeleteTodoMutation();

    // -> later
    // const { data, isError, isLoading, isSuccess } = useGetTodoByIDQuery(props.todo._id);
    const btnDetailHandler = () => {
        router.push(`/todos/${todo._id}`)
    }

    const btnDeleteHandler = () => {
        console.log("Delete API",todo._id);
        deleteTodoAPI(todo._id)
            .unwrap()
            .then(data=>console.log("Deleted Todo Success",todo))
    }
    return (<div className={"border p-2 my-3 shadow-sm rounded "}>
        <div className={"font-monospace d-flex justify-content-between"}>
            <div className={"small"}>{todo.title}</div>
            <button type={"button"} className={"btn btn-outline-dark  btn-sm"} onClick={btnDeleteHandler}>Delete</button>
        </div>
        <hr/>
        <button type={"button"} className={"btn btn-outline-dark btn-sm m-1 font-monospace"} onClick={btnDetailHandler}>Details</button>

    </div>)
}
export default function TodoApiUI() {

    // use router from next.js

    const { data, isError, isLoading, isSuccess,refetch } = useGetAllTodoQuery(undefined,{
        // refetchOnMountOrArgChange:true
        pollingInterval:1000,
        skipPollingIfUnfocused:true
    });
    // const { data, isError, isLoading, isSuccess,refetch } = useGetAllTodoQuery()
    if (isError) {
        return (
            <div>
                <h1>There was an error!!!</h1>
            </div>
        );
    }

    if (isLoading) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        );
    }

    if (isSuccess) {
        const btnForceReload = () => {
            console.log("Force Reload")
            refetch();

        }
         return (<div>
            <button type={"button"} className={"btn btn-dark btn-sm"} onClick={btnForceReload}>Force Refetch</button>
            {
                data.map(todo => <TodoItem todo={todo} key={todo._id} />)
            }
        </div>)
    }
}