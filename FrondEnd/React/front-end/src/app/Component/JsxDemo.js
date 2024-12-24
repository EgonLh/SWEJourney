export default function JsxDemo(){
    const username = "Egon Lothbrok";
    let styleCss ={
        backgroundColor:'Black',
        color:"red"
    };
    let person ={
        name :"perons"
    }
    return (<div style={styleCss}>
        JSX Demo
        {
            new Date().toString()
        }
        <br/>
        {username}
        {/*{person}*/}
        {person.name}
    </div>)
}