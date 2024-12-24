import {useDebugValue, useEffect, useState} from "react";
export default function useFetch(url,setState) {
    useDebugValue("CustumHook Fetch")
    useEffect(()=>{
        fetch(url)
            .then(response => response.json())
            .then(json => setState(json));
    },[])
}