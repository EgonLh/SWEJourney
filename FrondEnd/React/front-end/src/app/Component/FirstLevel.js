"use client"
function SecondLevel(props) {
    console.log("Props From Second Level :",props)
    return (<div>
        <code>Second Level</code><br/>
        <code>{props.another}</code><br/>
        <code>From Children as second level : {props.children}</code>

        <code>From Children[0] : {props.children[0]}</code>

        <code>From Children[2] : {props.children[2]}</code>

    </div>)
}
export default function FirstLevel(props) {
    console.log("Persons From First Level :",props.person)
    return (<div>
        <code>First Level</code>
        <SecondLevel {...props}/>
    </div>)
}