"use client"
import React, {useReducer} from "react";

//Step 1
interface State {
    // connected with value in Counter action > State["count"]
    count: number
}

//union literal -> for reusable and others
type CounterActionType = "reset" | "setCount";
// Step 3
type CounterAction =
    | { type: CounterActionType }
    | {
    type: CounterActionType;
    value: State["count"]
}

// Step 2
const initialState: State = {count: 0};

function stateReducer(state: State, action: CounterAction): State {
    switch (action.type) {
        case "reset":
            return initialState;
        case "setCount":
            return {...state, count: action.value}
        default:
            throw new Error("unknown actions");
    }
}

export default function CounterWithReducer() {
    const [state, dispatch] = useReducer(stateReducer, initialState);

    const addFive = () => dispatch({type: "setCount", value: state.count + 5})
    const reset = () => dispatch({type: "reset"});
    return <div>
        <code>Counter With Reducer</code>
        <h1>Counter</h1>
        <p>Count : {state.count}</p>
        <button onClick={addFive}>Add</button>
        <button onClick={reset}>Reset</button>
    </div>
}