"use client"
import {useState} from "react";
import {log} from "next/dist/server/typescript/utils";

export default function FormDemo() {

    const [price,setPrice] = useState(0);
    const [quantity,setQuantity] = useState(0)
    const handlePrice = (e) =>{
        console.log("Handle Price",e.target.value);
        setPrice(e.target.value);
    }
    const  handleQuantity = e =>{
        console.log("Handle Quantity",e.target.value);
        setQuantity(e.target.value);
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("Form Submit" , price , "Qty ",quantity);
        setPrice(0);
        setQuantity(0);
    }
    return(<div>
        <form onSubmit={handleSubmit}>
            Form Demo
            <br/>
            Price :<input type={"text"}
                          value={price}
                          onChange={handlePrice}/>
            <br/>
            Qty :<input type={"text"} value={quantity} onChange={handleQuantity}/>

            <h1>
                <code>Total  : {price * quantity}</code>
            </h1>

            <button type={"submit"} >Submit</button>
        </form>

    </div>)

}
