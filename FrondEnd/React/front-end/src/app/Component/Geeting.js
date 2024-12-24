"use client"
export  default function Greeting({name = "unknown",person}) {

    console.log("Persons :",person)

    return(<div>
        <pre>Hello  {name}</pre>
        <pre>Hello  {person.addr}</pre>

    </div>)
}