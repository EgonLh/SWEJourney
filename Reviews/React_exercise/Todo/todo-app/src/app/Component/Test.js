"use client";

//States
import {useState} from "react";

let obj = [{
    id: 1,
    type: "int",
    status:"complete"
}, {
    id: 2,
    type: "String",
    status:"not started"
}, {
    id: 3,
    type: "Boolean",
    status:"in progress"
}

]
let id = 2;
function nextTodo(title) {
    return {
        id:++id,
        type :title,
        status: "not started"
    }

}
function Test({item_id, item_type}) {
    return (<div key={item_id} className={"border p-3 m-3 max-w-60 shadow-md rounded"}>
        {item_type}
    </div>)
}


function NewComponent(props) {
    return <>{(obj.filter(a => a.status == (props.filter))).map(props.callbackfn)}</>;
}

function TodoV2(props) {
    const handleStatus = (e) =>{
        console.log(e.target.value);
        props.handleA(e);
    }

    return <div className={"border w-40 m-3 shadow m-2"}>{props.a.type} :
    <select onChange={handleStatus}>
        <option value={props.a.status} >{props.a.status}</option>
        <option value={"on progress"}>on progress</option>
        <option value={"complete"}>complete</option>
    </select>
    </div>;
}

export default function TodoTest() {
    const [todo,setTodo] = useState(obj);
    const [defult, setNew] = useState("not started");
    const [fitler,setfilter] = useState("not started");
    const handleStatus = (e) =>{
        setNew(e.target.value);
    }
    function handleIncrease() {
        console.log("handle Increase")
        let a = nextTodo("Hello");
        setTodo([...todo,a]);
        console.log(a)
    }

    const handleValue=(e)=> {
        console.log(fitler);
        setfilter(e.target.value);
    }

    return (<div>
        <center className={"p-3"}> Three Status Problem</center>

        <code>For Mapping</code>
        <select onChange={handleValue}>
            <option value={"complete"}>Complete</option>
            <option value={"not started"}>not started</option>
        </select>
        {
            ((todo.filter(a=>a.status==fitler)).map(a => <TodoV2 a={a} key={Math.random()} handleA={handleStatus}/>))
        }
        <button type={"button"} className={"border m-3"} onClick={handleIncrease}>Add</button>

    </div>)

}

//mapping out
//filter those map