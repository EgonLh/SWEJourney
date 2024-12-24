"use client"

import {useState} from "react";
import {useImmer} from "use-immer";

export default function EqualityDemoImmer() {
    /* Old Way
    const [state,setState] = useState({
        name :"ZYH",
        address :{
            city : "Ygn"
        }
    });
    */
    const [state,setState] = useImmer({
        name :"ZYH",
        address :{
            city : "Ygn"
        }
    })
    const handler = () =>{
        /*setState({
            ...state,address: {
                city: "Somwhere",
            }
        });
        */
        setState(state => {
            state.address.city = "Hello Imma"
        });

    }
    console.log("Render")
    return <div>
        {state.address.city}
        <button type={"button"}
                onClick={handler}
        >
            Change
        </button>
    </div>

}