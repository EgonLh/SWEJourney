import type { Metadata } from "next";
import 'bootstrap/dist/css/bootstrap.css';
import { Counter } from "./components/counter/Counter";
import TodoUI from "@/app/components/Todo/TodoUI";
import TodoCount from "@/app/components/Todo/TodoCount";
import TodoApiUI from "@/app/components/Todo/TodoApiUI";
export default function IndexPage() {
  return (<div>
    <Counter />
    {/*<br/>*/}
    {/*<TodoCount/>*/}
    {/*<TodoUI/>*/}
    {/*<TodoApiUI/>*/}
  </div>);
}

export const metadata: Metadata = {
  title: "Redux",
};
