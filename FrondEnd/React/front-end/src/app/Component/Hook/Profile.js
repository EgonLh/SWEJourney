"use client"

import {useEffect,useState} from "react";
import useFetch from "./useFetch";

export default function Profile() {
    const [state,setState] = useState([]);

    // useEffect(()=>{
    //     fetch('https://randomuser.me/api/')
    //         .then(response => response.json())
    //         .then(json => setState(json));
    // },[])

    useFetch('https://randomuser.me/api/',setState);

    return (<div>
        {
            <h1>{state.results && state.results['0'].name.first + state.results[0].name.last}</h1>
        }
    </div>)
}