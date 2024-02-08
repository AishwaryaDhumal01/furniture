
import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FiArrowLeft, FiArrowRight, FiUserPlus } from "react-icons/fi";

const Signup = () => {
  return (
    <div className="signup-form-container"> {/* Use the unique CSS class name */}
      <h1>Signup Page</h1>
      <Formik
        initialValues={{
          email: "",
          password: "",
          confirmPassword: "",
          terms: false
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string().email("Invalid email").required("Email is required"),
          password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
          confirmPassword: Yup.string()
            .oneOf([Yup.ref("password"), null], "Passwords must match")
            .required("Confirm Password is required"),
          terms: Yup.boolean().oneOf([true], "Please accept the terms and conditions")
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2)); // Displaying values in alert
            setSubmitting(false);
            resetForm();
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="signup-form"> {/* Use the unique CSS class name */}
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
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <Field type="password" name="confirmPassword" className="form-control" />
              <ErrorMessage name="confirmPassword" component="div" className="error-message" />
            </div>
            <div className="form-check">
              <Field type="checkbox" name="terms" className="form-check-input" />
              <label htmlFor="terms" className="form-check-label">
                I accept the terms and conditions
              </label>
              <ErrorMessage name="terms" component="div" className="error-message" />
            </div>
            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Signup"}
            </button>
          </Form>
        )}
      </Formik>
      {/* Icons at the bottom */}
      <div className="bottom-icons">
        <FiArrowLeft className="back-icon" />
        <FiArrowRight className="signup-icon" />
      </div>
    </div>
  );
};

export default Signup;
