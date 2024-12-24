"use client"
import React, {useEffect, useState} from "react";
import Counter from "../Counter/Counter";
export default function DifferentRoot() {
 const [showB,setShowB] = useState(true);

 //for destroy after reset
 useEffect(()=>{
  console.log("Counter useEffect");
  return ()=>{
   console.log("Counter UseEffect CleanUp");
  }
 })
 return (<div>
     {
         showB?<span>
         <Counter/>
     </span>:<div>
             <Counter/>
         </div>
     }
  <label>
   <input type="checkbox" onChange={e => {
    setShowB(e.target.checked)}}/>
   Render the second counter
  </label>
 </div>)
}