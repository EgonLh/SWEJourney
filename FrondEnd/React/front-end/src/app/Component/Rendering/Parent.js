"use client"
import {useState} from "react";
import Counter from "../Counter/Counter";

export default function Parent(){
    const [count,setCount] = useState(0);
    const countHandler = () =>{
        setCount(count+1);
    }
    console.log("Parent Render")
    return(<div>
    Parent counter {count}
    <button type={"button"}
        onClick={countHandler}>Parent Increase</button>

      <h5>Child</h5>
      <Counter/>
    </div>)
}