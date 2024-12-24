import React from "react";

export default function CustomContainer({children}: {
    // children: React.ReactNote;
    children : React.ReactElement;
}) {
    return (<div>
        <h1><code>Render Container</code></h1>
        {children}
    </div>)
}