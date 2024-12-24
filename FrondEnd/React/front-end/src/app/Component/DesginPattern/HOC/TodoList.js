"use client"
import {useEffect, useState} from "react";

export default function TodoList() {

    const [state, setState] = useState([]);

    // for api call - once
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(resp => resp.json())
            .then(json => setState(json))
    }, [])

    return (<div>
        {
            state.length > 0 && state.map(user => <div key={user.id}>
                    Title : {user.title}
                </div>
            )
        }
        {
            state.length == 0 && <div>Loading.....</div>
        }
    </div>)
}