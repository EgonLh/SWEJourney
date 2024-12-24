import {useDebugValue, useEffect, useState} from "react";
export default function useFetch_Hook(url) {
    const [data,setData] = useState(null);
    const [loading,setLoading] = useState(true);
    useDebugValue("CustumHook Fetch")

    useEffect(()=>{
        setLoading(true);
        fetch(url)
            .then(response => response.json())
            .then(json => {
                setData(json);
                setLoading(false);
            });
    },[])
    //error
    return {data,loading};
}