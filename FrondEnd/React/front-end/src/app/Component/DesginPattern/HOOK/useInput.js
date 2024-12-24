"use client"
import {useDebugValue, useState} from "react";

export default function useInput(formData) {
    useDebugValue("Hey d");
    const [state,setState] = useState(formData);
    function handler(propertyName) {
        return function (event) {
            setState({...state,[propertyName]:event.target.value})

        }
    }
    return {state,handler};
}