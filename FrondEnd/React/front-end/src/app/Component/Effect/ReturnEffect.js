"use client"
import React, {useState} from "react";
import Counter from "../Counter/Counter";

export default function DifferentProperty() {
    const [showB, setShowB] = useState(true);
    return (<div>
        {
            showB ? <Counter key={1} property={"Hello"}/> : <Counter key={2} property={"Hi"}/>
            // <Counter property={"Hello"}/> : <Counter property={"Hi"}/>


        }
        <label>
            <input type="checkbox" onChange={e => {
                setShowB(e.target.checked)
            }}/>
            Render the second counter
        </label>
    </div>)
}