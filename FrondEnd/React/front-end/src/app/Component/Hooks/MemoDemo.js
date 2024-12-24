"use client"
import {useMemo, useState} from "react";

function factorial(n) {
    console.log("Computer Factorial :",n)
    let result = 1;
    for (let i = 1; i<=n ; i++){
        result *= i;
    }
    return result;
}
export default function MemoDemo() {
    const [n,setN] = useState(1);
    const fact = useMemo(()=> {
        console.log("Recompute :", n);
        return factorial(n)
    },[n]);
    return (<div>
        <input type="text" value={n} onChange={(event)=>setN(event.target.value)} /><br/>
        Factorial {n} = {fact}
    </div>)
}