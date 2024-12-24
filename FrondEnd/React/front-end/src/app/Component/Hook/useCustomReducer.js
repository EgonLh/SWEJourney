import {useState} from "react";

export default function UseCustomReducer(reducer,initialState) {
    const [state,setState] = useState(initialState);
    function dispatch(action) {
        let nextState = reducer(state,action);
        setState(nextState);

    }
    return [state,dispatch]

}