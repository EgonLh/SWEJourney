"use client"
import {useGetAllTodoQuery} from "@/lib/features/todos/todoApiSlice";

export default function Page() {
    const { data, isError, isLoading, isSuccess,refetch } = useGetAllTodoQuery();
    throw new Error("Somethings.......");
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

        return (<div>
            count {data.length}
        </div>)
    }
}