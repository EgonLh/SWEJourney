"use client"
import {useEffect, useState} from "react";

export default function useLoadHook(url)
{
    const [state, setState] = useState(null);
    // for api call - once
    useEffect(() => {
        fetch(url)
            .then(resp => resp.json())
            .then(json => setState(json))
    }, [])
    return  state;

}