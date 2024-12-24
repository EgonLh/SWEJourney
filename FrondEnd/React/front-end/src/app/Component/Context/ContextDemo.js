"use client"
import Heading from './Heading.js';
import Section from './Section.js';
import React, {useState} from "react";
import {LevelContext} from "./LevelContext";

/*export default function Page() {
    return (
        <Section level={1}>
            <Heading>Title</Heading>
            <Section level={2}>
                <Heading>Heading</Heading>
                <Section level={3}>
                    <Heading>Sub-heading</Heading>
                    <Section level={4}>
                        <Heading>Sub-sub-heading</Heading>
                    </Section>
                </Section>
            </Section>
        </Section>
    );
}
*/

export default function Page() {
    const [level,setLevel] = useState(1);
    const  [levelText,setLevelText] = useState(1);
    console.log("LeveL :",level);
    function changeHandler(e) {
        setLevelText(e.target.value);
    }

    function updateHandler() {
        console.log("Update",levelText)
        setLevel(+levelText);
    }
    console.log("Rendering Context Demo")
    return(<div>
        <input type="text" value={levelText} onChange={changeHandler}/>
        <button type="button" onClick={updateHandler}>Change</button>
        <LevelContext.Provider value={level}>
            <Section>

            </Section>
        </LevelContext.Provider>
    </div>)
}