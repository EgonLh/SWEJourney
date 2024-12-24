"use client";
import {useEffect, useState} from "react";
import useFetch from "./useFetch";
export default function CustomHook() {
    const [state,setState] = useState([]);
    // useEffect(()=>{
    //     fetch('https://jsonplaceholder.typicode.com/todos')
    //         .then(response => response.json())
    //         .then(json => setState(json));
    // },[]);
    useFetch('https://jsonplaceholder.typicode.com/todos',setState);
    return (<div>
        {
            state.map(item=><div key={item.id}> - {item.title}</div>)
        }
    </div>);
}