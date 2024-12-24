"use client"
import useFetch_Hook from "./useFetch_Hook";
import UserList_Modified from "../HOC/UserList_Modified";

export default function UserListWithFetchHook() {
    const {data,loading} = useFetch_Hook("https://jsonplaceholder.typicode.com/users");
    if(loading)
    {
        return <div>Loading........</div>
    }else{
        return <UserList_Modified data={data} />
    }

}