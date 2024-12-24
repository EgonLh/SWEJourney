"use client"
import React, {useState} from "react";
import Counter from "../Counter/Counter";
let list = [
    {
        id:1,
        title:"one"
    },
    {
        id:2,
        title:"two"
    },
    {
        id:3,
        title:"three"
    }
]
export default function ChildwithKeys() {

    const [items,itemUpdate] = useState(list);
    const listhandler = () =>{
        const clone = [...list];
        clone[0].title="update";
        itemUpdate([...clone]);
    }
    const btnReplaceHandler = () =>{
        const clone = [...list];
        clone[2]={
            id:4,
            title: "Replaced"
        };
        itemUpdate([...clone]);
    }
    const btnReplaceHandler2 = () =>{
        let clone = [...list];
        const newItem = {
            id:4,
            title:"New ITem",
        }
       clone.splice(1,0,newItem);
        itemUpdate([...clone]);


    }
    console.log(items)
    return(<div>
        <ul>
            {/*<li>1</li>*/}
            {/*<li>2</li>*/}
            {/*<li>3</li>*/}
            {/*<li>4</li>*/}
            {
                items.map(item => <li key={item.id}>{item.title}<Counter/></li>)
            }
        </ul>
        <button type={"button"} onClick={listhandler}>
            Update
        </button>
        <button type={"button"} onClick={btnReplaceHandler}>
            Replace
        </button>
        <button type={"button"} onClick={btnReplaceHandler2}>
            Replace 2
        </button>
    </div>)

}