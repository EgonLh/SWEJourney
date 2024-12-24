"use client"


import React, {Fragment, useRef} from "react";

export default function FocusInputDemo() {
    const inputRef = useRef(null);

    function handleClick() {
        inputRef.current.focus();
    }

    return(
        <Fragment>
            <input ref={inputRef}/>
            <button onClick={handleClick}>Focus The Input</button>
        </Fragment>
    )
}