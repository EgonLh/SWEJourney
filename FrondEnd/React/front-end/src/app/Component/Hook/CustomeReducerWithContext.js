"use client"
import TodoCount from "../reducer/TodoCount";
import React, {useContext, useReducer} from "react";
import TodoContext from '../reducer/TodoContext';
import TodoWithReducer_Context from "../reducer/TodoWithReducer_Context";
import TodoStateContext from "../reducer/TodoStateContext";
import DispatchContext from "../reducer/DispatchContext";
import useCustomReducer from "./useCustomReducer";

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
export default function CustomReducerWithContext() {
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
            title: "Task4 Updated From context"
        },

    ];

    // const [todos,dispatch] = useReducer(todoReducer,initial);
    const [todos,dispatch] = useCustomReducer(todoReducer,initial);
    return(<div>
            <h1><code>Reducer With Custom Context</code></h1>
            <div>
                <h3>Todo Count</h3>
            </div>
            <TodoStateContext.Provider value={todos}>
                <DispatchContext.Provider value={dispatch}>
                    <TodoCount/>
                    <TodoWithReducer_Context/>
                </DispatchContext.Provider>
            </TodoStateContext.Provider>
        </div>
    );
}