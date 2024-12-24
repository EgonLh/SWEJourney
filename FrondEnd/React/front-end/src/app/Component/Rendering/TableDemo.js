import Row from "./Row";
import {Fragment} from "react";
function Body({todo})
{
   return(<Fragment>{todo.map(item=><Row key={item.id} data={item}></Row>)}</Fragment>)
}
export default function TableDemo() {
    let todo = [
        {
            id:1,
            title:"one"
        },
        {
            id:2,
            title: "two",
        },
        {
            id:3,
            title: "two",
        }
    ]
    return(<table border={1}>
        <tbody>
        <Body todo = {todo}/>
        </tbody>
    </table>)
}