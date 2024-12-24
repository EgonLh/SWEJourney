"use client";
import Counter from "../Counter/Counter";
import {useState} from "react";

export default function RenderingDemo() {
    const [showB,setShowB] = useState(true);
    const [div,setDiv] = useState(false);
    function handleDisplay() {
        showB?setShowB(false):setShowB(true);
    }

    return (<div>
        {div && <div> Hello </div>}
        <Counter></Counter>
       &nbsp;
        {showB && <Counter/>}

        <label>
            <input type="checkbox" onChange={e => {
            setShowB(e.target.checked)}}/>
            Render the second counter
        </label>

        <button type={"button"} onClick={()=>setDiv(!div)}>Add Div</button>


    </div>)
}