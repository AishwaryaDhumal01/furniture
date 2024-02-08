import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FiArrowLeft, FiArrowRight, FiUserPlus } from "react-icons/fi";

const LoginPage = () => {
  return (
    <div className="login-container">
      <h1>Login Form</h1>
      <Formik
        initialValues={{
          email: "",
          password: ""
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
          password: Yup.string()
            .min(6, "Password must be at least 6 characters")
            .required("Password is required")
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            console.log(values); // Displaying values in console instead of alert
            setSubmitting(false);
            resetForm(); // Resetting the form after submission
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Field type="email" name="email" className="form-control" />
              <ErrorMessage name="email" component="div" className="error-message" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Field type="password" name="password" className="form-control" />
              <ErrorMessage name="password" component="div" className="error-message" />
            </div>
            <button type="submit" className="btn btn-primary custom-submit-button" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </Form>
        )}
      </Formik>
      <div className="bottom-icons">
        <FiArrowLeft className="back-icon" />
       <FiArrowRight className="signup-icon" />
      </div>
    </div>
  );
};

export default LoginPage;
