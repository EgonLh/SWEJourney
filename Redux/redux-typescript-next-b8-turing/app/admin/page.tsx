import {redirect} from "next/navigation";
import {loadTodos} from "@/app/action";
async function doSomething() {
    "use server";
    console.log("Form Data")
}
export default async function Admin() {
    // redirect('/todos');
    let todos = await loadTodos();
    return (<div>
        This is Admin <br/>
        {
            todos.length
        }

        <br/>
        <form action={doSomething}>
            <button type="submit" className={"btn btn-danger btn-small p-1"} >Submit</button>
        </form>
    </div>)
}