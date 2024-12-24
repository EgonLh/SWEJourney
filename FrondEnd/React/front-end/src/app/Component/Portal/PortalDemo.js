"use client"
import {createPortal} from "react-dom";

export default function PortalDemo() {
    return (<div>
        Here is backdrop From Partent Div
        {createPortal(<p>This is form Document Body</p>,document.body)}
    </div>)
}