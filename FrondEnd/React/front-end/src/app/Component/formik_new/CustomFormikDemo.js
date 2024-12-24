"use client"
import CustomFormik, {CusField} from "./CustomFormik";
import React from "react";

export default function CustomFormikDemo() {
    let initialValue = {
        name: "demo",
        email: "person@gmail.com"
    }
    const onSubmitHandler = (values) => {
        console.log("Form Submit",values)
    }
    return (<CustomFormik initialValues={initialValue} onSubmit={onSubmitHandler}>
        <br/>
        <label>Name</label><br/>
        <CusField name={'name'}/>
        <br/>
        <label>Email</label><br/>
        <CusField password={'email'}/>
        <br/>
        <button type={"submit"}>Submit</button>
    </CustomFormik>)
}