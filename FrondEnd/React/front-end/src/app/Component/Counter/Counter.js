"use client"
import { useState } from 'react';
export default function Counter() {
    // let count = 0;
    //using state
    const [count,setCount] = useState(0);
    const [date,setDate] = useState(Date);
    console.log("Rerander")
    const incHandler= () =>{
        // count++; ==> normal increasement
        setCount(count+1);
        setDate(new Date());
        console.log(count)
    }
    const changeDate = () =>{
        setDate(new Date());
    }
    return(<div>
        Counter {count}<br/>
        <button type={"button"}
                onClick={incHandler}>Click</button>

        {/*<code>Date</code>*/}
        {/*<div>{date.toString()}</div>*/}
        {/*<button type={"button"}*/}
        {/*        onClick={changeDate}>change Date</button>*/}
    </div>)
}