"use client"
import {redirect} from "next/navigation";
import {useRouter} from "next/navigation";

export default function Login() {
    const router = useRouter();
    const loginHandler = () =>{
        router.push("/admin?auth=true")
    }
    const checkBoxHandler = (e) => {
        setState(e.target.value)
        console.log(state)
    }

    return (<div>
        <button className={"btn btn-dark btn-small p-2"} onClick={loginHandler}> Click to login</button>
    </div>)
}