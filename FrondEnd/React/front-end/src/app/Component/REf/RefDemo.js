"use client"

import React, {useRef, useState} from "react";
export default function RefDemo() {
    const [state,setState] = useState('');
    // let counter = 0;
    let ref = useRef(0);
    const btnHandler = () =>{
        // counter++;
        // alert("Counter"+counter);

        ref.current++;
        alert("Use Ref :"+ref.current);
    }
    const btnChange = () =>{
        setState(Math.random());
    }
    return(<div>
        <button type={"button"} onClick={btnHandler}>INC</button>
        {state}
        <button type={"button"} onClick={btnChange}>Change</button>
    </div>)
}