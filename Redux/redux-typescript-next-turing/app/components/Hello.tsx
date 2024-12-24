"use client"
import {useState} from "react";

interface greetingProps {
    message: string
}

export default function Hello({message}:  greetingProps ) {
    const [count, setCount] = useState(1);
    // console.log(message.toUpperCase())//error when integer
    return <div>
        Hello World
        Count {count}
        {message.toString()}
        <button onClick={() => setCount(count+1)}>Inc</button>
    </div>
}