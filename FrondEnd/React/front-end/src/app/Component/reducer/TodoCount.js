import React, {useContext} from "react";
import TodoContext from "./TodoContext";
import TodoStateContext from "./TodoStateContext";

export default function TodoCount()
{
    const todos = useContext(TodoStateContext);
    return(<div>
        Total Todo is {todos.length}
    </div>);
}