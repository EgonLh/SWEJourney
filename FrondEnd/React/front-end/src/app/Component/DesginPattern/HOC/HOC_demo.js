"use client"
import WithLoader from "./WithLoader";
import UserList_Modified from "./UserList_Modified";
import TodoList_Modified from "./TodoList_Modified";
import WithLogger from "./WithLogger";
function CustomLoader() {
    return <div>
        <code>Loading With Custom Loader.....</code>
    </div>
}
const UserListHoc = WithLoader(UserList_Modified,"https://jsonplaceholder.typicode.com/users");
const TodoListHoc = WithLoader(WithLogger(TodoList_Modified),"https://jsonplaceholder.typicode.com/todos",CustomLoader);
// const Test = WithLogger(TodoListHoc);
export default function HOC_demo() {
    return <div>
        <UserListHoc/>
        <TodoListHoc/>
        {/*<Test/>*/}
    </div>
}