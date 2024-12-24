"use client"
import {useEffect, useState} from "react";

export default function WithLoader(Element, url , Loader)
{
    return  (props) => {

        const [state, setState] = useState(null);
            // for api call - once
            useEffect(() => {
            fetch(url)
                .then(resp => resp.json())
                .then(json => setState(json))
        }, [])

        // inner component return
        if(state===null && Loader == undefined)
        {
            return <div>Loading without loader....</div>;
        }else if(state === null){
            return <Loader/>
        }
        else{
            return <Element {...props} data={state}></Element>
        }

    }
}