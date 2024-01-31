import React from "react";
import { useFormik } from "formik";
import { FaPaperPlane } from "react-icons/fa";

import Button from 'react-bootstrap/Button';
import * as Yup from "yup";

export default function FormFooter() {
    const formik = useFormik({
        initialValues: {
            username: "",
            email: "",
            


        },
        validationSchema: Yup.object({
            username: Yup.string().max(10).required("this field is required"),
            email: Yup.string().email("plese enter valid email").required("this field is required")
        }),
        onSubmit: (values, action) => {
            console.log("==submiting===", values)
            action.resetForm();

        }
    })

    console.log(formik.touched)


    return (
        <div>
            <center>
                <form    className="row g-3" onSubmit={formik.handleSubmit}>

                <div className="col-auto">
                    <input type="text" name="username" className="form-control" placeholder="enter your name" values={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} ></input><br></br>
                    {formik.touched.username && formik.errors.username && <p style={{ color: "red" }}>{formik.errors.username}</p>}<br></br></div>
                    <div className="col-auto">  <input type="text" className="form-control" name="email" placeholder="enter your email" values={formik.values.email} onChange={formik.handleChange} ></input><br></br>
                    {formik.touched.email && formik.errors.email && <p style={{ color: "red" }}>{formik.errors.email}</p>}<br></br></div>
                   
                    <div className="col-auto">
                    <Button type='submit' variant="primary" className="btn btn-primary"  ><span className="fa fa-paper-plane"><FaPaperPlane/></span></Button>{' '} </div>
                </form>
            </center>


        </div>


    )
}


