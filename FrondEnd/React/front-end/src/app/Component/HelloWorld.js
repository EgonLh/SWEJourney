"use client";
import React from 'react';
import "./HelloWorld.css";
export  function Another() {
    return <div><h1>This is "Name" Import</h1></div>
}
export  default function HelloWorld()
{
    let vdom = React.createElement("code",null,React.createElement("h2",null,"Content From Virtual Dom"))
    console.log("Virtual Dom :",vdom)
    return (<div>
        {vdom}
        <img
            className={"profile"}
            src="https://i.imgur.com/MK3eW3Am.jpg"
            alt="Katherine Johnson"
        />
        <h1>Hello World From Component</h1>
        <Another/>
    </div>)
}