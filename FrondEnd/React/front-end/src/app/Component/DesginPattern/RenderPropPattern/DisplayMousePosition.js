"use client"
import {useState} from "react";

export default function DisplayMousePosition({render}) {

    const [pos,setPos] = useState({
        x:0,
        y:0
    })
    const mouseMoveHandler = (event) => {
        console.log("X ",event.clientX , "Y" , event.clientY);
        setPos({
            x : event.clientX,
            y : event.clientY
        })
    }

    return (<div onMouseMove={mouseMoveHandler}>
        Container
        {/*<img src="./FrondEnd\React\front-end\src\app\Component\DesginPattern\RenderPropPattern\img.jpg" width={10} height={10} alt={"img"} style={{*/}
        {/*    position:'absolute',*/}
        {/*    top:pos.y,*/}
        {/*    left:pos.x*/}
        {/*}}/>*/}
        {
            render(pos)
        }
    </div>)
}