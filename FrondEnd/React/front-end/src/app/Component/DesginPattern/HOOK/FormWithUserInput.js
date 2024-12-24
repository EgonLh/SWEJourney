"use client"
import useInput from "./useInput";

export default function FormWithUserInput() {
    const {state,handler} = useInput({
        name : "",
        email:""
    });
    const submitHandler = (event) => {
        console.log("state", state);
        // event.preventDefault();
    }
    return <div>
        <form>
            <input type={"text"} value={state.name} onChange={handler('name')} />
            <input type={"email"} value={state.email} onChange={handler('email')} />
            <br/>
            <button type="submit" onClick={submitHandler}> Submit!</button>
        </form>
    </div>
}