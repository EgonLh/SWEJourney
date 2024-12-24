"use client"

import {useState} from "react";

export default function EqualityDemo() {
    const [state,setState] = useState("hello");
    const handler = () =>{
        setState(new String("Hello"));
    }
    console.log("Render")
    return <div>
        {state}
        <button type={"button"}
                onClick={handler}
        >
            Change
        </button>
    </div>

}