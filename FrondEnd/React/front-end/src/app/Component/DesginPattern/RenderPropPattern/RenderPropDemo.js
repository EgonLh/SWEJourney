"use client"
import DisplayMousePosition from "./DisplayMousePosition";

export default function RenderPropDemo() {
    return (
        <div>
            Render Property
            <DisplayMousePosition render={(pos)=>{
                return <img src="./FrondEnd\React\front-end\src\app\Component\DesginPattern\RenderPropPattern\img.jpg" width={10} height={10} alt={"img"} style={{
                    position:'absolute',
                    top:pos.y,
                    left:pos.x }}/>
            }}/>
        </div>
    );
}