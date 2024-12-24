"use client"
import {useAppSelector} from "@/lib/hooks";
import {selectTodos} from "@/lib/features/todos/todoSlice";

export default function TodoCount() {
    const todos = useAppSelector(selectTodos);
    return (<div>
        <h1>Todo Count {todos.length}</h1>
    </div>)
}