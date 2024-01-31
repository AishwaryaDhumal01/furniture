import React from 'react'
import { FaLocationArrow } from 'react-icons/fa'
import { FaLocationDot } from "react-icons/fa6";
import { GrMail } from "react-icons/gr";
import { IoCall } from "react-icons/io5";
import { useFormik } from "formik";
import Button from 'react-bootstrap/Button';
import * as Yup from "yup";



const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
        username: "",
       lastname: "",
       email: "",
        message: "",
       

    },
    validationSchema: Yup.object({
        username: Yup.string().max(10).required("this field is required"),
        lastname: Yup.string().max(20).required("this field is required"),
        email: Yup.string().email("plese enter valid email").required("this field is required")
    }),
    onSubmit: (values, action) => {
        console.log("==submiting===", values)
        action.resetForm();

    }
})
  return (
    <div className="untree_co-section">
      <div className="container">

        <div className="block">
          <div className="row justify-content-center">


            <div className="col-md-8 col-lg-8 pb-4">


              <div className="row mb-5">
              <div className="col-lg-4">
                  <div  className="service no-shadow align-items-center link horizontal d-flex active" data-aos="fade-left" data-aos-delay="0">
                    <div className="service-icon color-1 mb-4">
                    <FaLocationDot />
                    </div> 
                    <div className="service-contents">
                      <p>43 Raymouth Rd. Baltemoer,</p>
                    </div> 
                  </div> 
                </div>
                <div className="col-lg-4">
                  <div  className="service no-shadow align-items-center link horizontal d-flex active" data-aos="fade-left" data-aos-delay="0">
                    <div className="service-icon color-1 mb-4">
                    
                    <GrMail />
                    </div> 
                    <div className="service-contents">
                      <p>info@yourdomain.com</p>
                    </div> 
                  </div> 
                </div>

                <div className="col-lg-4">
                  <div  className="service no-shadow align-items-center link horizontal d-flex active" data-aos="fade-left" data-aos-delay="0">
                    <div className="service-icon color-1 mb-4">
                      <IoCall/>
                    </div> 
                    <div className="service-contents">
                      <p>+91 342 456 567</p>
                    </div> 
                </div>

              </div>




              <form  onSubmit={formik.handleSubmit}>
                <div className="row">
                  <div className="col-6">
                    <div className="form-group">
                      <label className="text-black" for="fname">First name</label>
                      <input id="fname" type="text" name="username" className="form-control" placeholder="enter your name" values={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} ></input><br></br>
                    {formik.touched.username && formik.errors.username && <p style={{ color: "red" }}>{formik.errors.username}</p>}<br></br>
                     
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group">
                      <label className="text-black" for="lname"  id="lname">Last name</label>
                      <input type="text" name="lastname" className="form-control" placeholder="enter your lastname" values={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} ></input><br></br>

                      {formik.touched.lastname && formik.errors.lastname && <p style={{ color: "red" }}>{formik.errors.lastnamename}</p>}<br></br>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label className="text-black" for="email">Email address</label>
                  <input type="email" className="form-control" id="email" name='email' placeholder="enter your email" values={formik.values.email} onChange={formik.handleChange}  />
                  {formik.touched.email && formik.errors.email && <p style={{ color: "red" }}>{formik.errors.email}</p>}<br></br>

                </div>

                <div className="form-group mb-5">
                  <label className="text-black" for="message">Message</label>
                  <textarea name="message" className="form-control" id="message" cols="60" rows="5" placeholder="enter your message" values={formik.values.email} onChange={formik.handleChange} ></textarea>
                </div>

                <button type="submit" style={{backgroundColor:"black",color:"white"}} className="btn btn-primary-hover-outline">Send Message</button>
              </form>

            </div>

          </div>

        </div>

      </div>


    </div>
  </div>

  )
}

export default ContactForm
