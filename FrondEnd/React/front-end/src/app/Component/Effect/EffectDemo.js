"use client"
import React, {useEffect, useState} from "react";

export default function EffectDemo()
{

    const [state,setState] = useState(Math.random());
    const [state2,setState2] = useState(new Date);
    useEffect(()=>{
        console.log("Side Effect Run");
    },[state])
    console.log("Rerender")

    function handleChange() {
        console.log("State Change")
        setState(Math.random());
    }

    return(<div>
        Effect Demo {state}<br/>
        State 2 {state2.toString()}<br/>
        <button type={"button"} onClick={handleChange}>Change</button>
        <button type={"button"} onClick={()=>setState2(new Date())}>Change Date</button>

    </div>)
}