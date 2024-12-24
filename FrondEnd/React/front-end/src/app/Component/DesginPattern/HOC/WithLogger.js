"use client"
export default function WithLogger(Element) {

    return (props)=>{
        console.log(new Date() ,":",  Element.displayName)
        return <Element {...props}/>
    }
}