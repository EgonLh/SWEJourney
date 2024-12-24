"use client"
function Button({onClickHandler}) {
    return (<button type={"button"} onClick={onClickHandler}>Click Me</button>)
}
export default function EventDemo() {
    const clickHandler = (event) =>{
        alert("Clicking For Sure");
        console.log(event._reactName)
        event.stopPropagation();
    }
    const DivClickHandler = (event) =>{
        console.log("DivClickHAndler",event)
    }
    return (<div onClick={DivClickHandler}>
        {/*<button type={"button"} onClick={clickHandler}>Click Me</button>*/}
        <Button onClickHandler={clickHandler}></Button>
    </div>)
}