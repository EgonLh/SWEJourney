"use client"
import {useState} from "react";

export function CusField(props) {
    return (<input {...props}/>)
}

export function ControlInput(props) {
    console.log("Control Props: ", props)
    return (<input {...props}/>)
}

export default function CustomFormik({initialValues, children,onSubmit}) {
    console.log("InitialValues :", initialValues)
    const [values, setValues] = useState(initialValues);

    const onChange = (e) => {
        let value = e.target.value;
        console.log(value);
        setValues({...values, [e.target.name]: value});
    }

    const onSubmitHandler = (e) => {
        onSubmit(values);
        e.preventDefault();
    };
    return (
        <form onSubmit={onSubmitHandler}>
        <div>
        Custom Formik :
        {
            children.map((child, index) => {
                    return child.type === CusField ? <ControlInput key={index} value={values[child.props.name]}
                                                                   onChange={onChange} {...child.props}/> : child
                }
            )
        }
    </div>
        </form>)
}