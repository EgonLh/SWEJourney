"use client";
import './Tab.css';
import {useState} from "react";

function TabHeader({onClick,item}) {
    return <div className={"tab-header"} onClick={onClick}>
        {item}
    </div>;
}

function TabBody({currentTab}) {
    return <div className={"tab-body"}>
       {currentTab}
    </div>;
}

export default function TabDemo({headers,children}) {
    console.log(headers);
    const [activeTab,setActiveTab] = useState(0);

    const handleTabHeaderClick = (index) =>{
        setActiveTab(index)
    }
return (<div>
    {
        headers.map((item, index) =>
            <TabHeader
                key={index}
                onClick={() => handleTabHeaderClick(index)}
                item={item}
            />
        )
    }
    <TabBody currentTab = {children[activeTab]}/>
</div>)
}