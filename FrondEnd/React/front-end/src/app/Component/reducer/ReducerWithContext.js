"use client"
import TodoCount from "./TodoCount";
import React, {useContext, useReducer} from "react";
import TodoContext from './TodoContext';
import TodoWithReducer_Context from "./TodoWithReducer_Context";
import TodoStateContext from "./TodoStateContext";
import DispatchContext from "./DispatchContext";

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
export default function ReducerWithContext() {
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

    const [todos,dispatch] = useReducer(todoReducer,initial);
    return(<div>
         <h1><code>Reducer With Context</code></h1>
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