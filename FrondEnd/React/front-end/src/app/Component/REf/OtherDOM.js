"use client"
import React, {forwardRef, Fragment, useRef} from "react";

// function MyInput(props) {
//     return <input {...props}/>
// }
const MyInput = forwardRef((props,ref)=>{
    return <input {...props} ref={ref}/>
})

export default function OtherDOMRefDemo() {
    const inputRef = useRef(null);

    function handleClick() {
        inputRef.current.focus();
    }

    return(<div>
        <MyInput ref={inputRef}/>
        <button onClick={handleClick}>Focus The Input</button>
    </div>)
}