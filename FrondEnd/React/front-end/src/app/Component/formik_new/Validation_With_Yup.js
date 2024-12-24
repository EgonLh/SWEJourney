"use client"
import React from 'react';
import * as Yup from 'yup';
import {Formik,Form,Field} from "formik";
// import {bootstrap} from "bootstrap/dist/css/bootstrap.css"; //succeed

const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, "Too Short")
        .max(50, "Too Long")
        .required("Required For FirstName"),
    lastName: Yup.string()
        .min(2, "Too Short")
        .max(50, "Too Long")
        .required("Required For LasName"),
    email: Yup.string()
        .email("Invalid Email, Bro !")
        .required("Required"),
})
export const ValidationWithYup = () => (
    <div>
        <div>Form With Yup And Formik</div>
        <Formik
            initialValues={{
                firstName: "",
                lastName: "",
                email: ""}}
            validationSchema={SignupSchema}
            onSubmit={values => {
                alert("Values :"+values.firstName);
            }}
        >
            {({errors,touched})=>(
                <div Style={"margin:30px;font-family:monospace"}>
                    <Form Style={"border:1px solid black; padding:20px;width:200px;"}>

                        {/*First Name*/}
                        <label for="firstName" Style={"font-weight:bold"}>First Name</label><br/>
                        <Field name="firstName"/>
                        {/*Error Return*/}
                        {errors.firstName && touched.firstName ? (
                            <div Style={"color:red"}>{errors.firstName}</div>
                        ) : null}
                        <br/>
                        {/*Last Name*/}
                        <label for="lastName" Style={"font-weight:bold"}>Last Name</label><br/>
                        <Field name="lastName"/>
                        {/*Error Return*/}
                        {errors.lastName && touched.lastName ? (
                            <div Style={"color:red"}>{errors.lastName}</div>
                        ) : null}


                        {/*Email*/}
                        <label for="email" Style={"font-weight:bold"}>Email</label><br/>
                        <Field name="email" type={"email"} />
                        {/*Error Return*/}
                        {errors.email && touched.email ? (
                            <div Style={"color:red"}>{errors.email}</div>
                        ) : null}
                        <button type="submit"
                                >Submit</button>
                    </Form>
                </div>
            )}

        </Formik>
    </div>
);
