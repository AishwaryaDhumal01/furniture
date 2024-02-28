import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';

const CheckoutPage = () => {
  const router = useRouter();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn); 
  useEffect(() => {
    // Check if the user is logged in
    if (!isLoggedIn) {
      // If not logged in, redirect to the login page
      router.push('/login');
    }
  }, [isLoggedIn, router]);

  // If user is not logged in, redirecting will prevent rendering the rest of the component
  if (!isLoggedIn) {
    return null;
  }

  return (
    <>
      <div className="untree_co-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-12">
              <div className="border p-4 rounded" role="alert">
                Returning customer? <a href="#">Click here</a> to login
              </div>
            </div>
          </div>
          <Formik
            initialValues={{
              c_country: '',
              c_fname: '',
              c_lname: '',
              c_companyname: '',
              c_address: '',
              c_state_country: '',
              c_postal_zip: '',
              c_email_address: '',
              c_phone: '',
              c_create_account: false,
              c_diff_country: '',
              c_diff_fname: '',
              c_diff_lname: '',
              c_diff_companyname: '',
              c_diff_address: '',
              c_diff_state_country: '',
              c_diff_postal_zip: '',
              c_diff_email_address: '',
              c_diff_phone: '',
              c_order_notes: '',
              c_code: ''
            }}
            validationSchema={Yup.object().shape({
              c_country: Yup.string().required('Country is required'),
              c_fname: Yup.string().required('First Name is required'),
              c_lname: Yup.string().required('Last Name is required'),
              c_address: Yup.string().required('Address is required'),
              c_state_country: Yup.string().required('State / Country is required'),
              c_postal_zip: Yup.string().required('Postal / Zip is required'),
              c_email_address: Yup.string().email('Invalid email').required('Email Address is required'),
              c_phone: Yup.string().required('Phone is required'),
              c_diff_country: Yup.string().required('Country is required'),
              c_diff_fname: Yup.string().required('First Name is required'),
              c_diff_lname: Yup.string().required('Last Name is required'),
              c_diff_address: Yup.string().required('Address is required'),
              c_diff_state_country: Yup.string().required('State / Country is required'),
              c_diff_postal_zip: Yup.string().required('Postal / Zip is required'),
              c_diff_email_address: Yup.string().email('Invalid email').required('Email Address is required'),
              c_diff_phone: Yup.string().required('Phone is required')
            })}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="row">
                  {/* Billing Details */}
                  <div className="col-md-6 mb-5 mb-md-0">
                    <h2 className="h3 mb-3 text-black">Billing Details</h2>
                    <div className="p-3 p-lg-5 border bg-white">
                      <div className="form-group">
                        <label htmlFor="c_country" className="text-black">Country <span className="text-danger">*</span></label>
                        <Field as="select" id="c_country" name="c_country" className="form-control">
                          <option value="">Select a country</option>
                          <option value="1">bangladesh</option>
                          <option value="2">Algeria</option>
                          <option value="3">Afghanistan</option>
                          <option value="4">Ghana</option>
                          <option value="5">Albania</option>
                          <option value="6">Bahrain</option>
                          <option value="7">Colombia</option>
                          <option value="8">Dominican Republic</option>
                        </Field>
                        <ErrorMessage name="c_country" component="div" className="text-danger" />
                      </div>
                      <div className="form-group row">
                        <div className="col-md-6">
                          <label htmlFor="c_fname" className="text-black">First Name <span className="text-danger">*</span></label>
                          <Field type="text" id="c_fname" name="c_fname" className="form-control" />
                          <ErrorMessage name="c_fname" component="div" className="text-danger" />
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="c_lname" className="text-black">Last Name <span className="text-danger">*</span></label>
                          <Field type="text" id="c_lname" name="c_lname" className="form-control" />
                          <ErrorMessage name="c_lname" component="div" className="text-danger" />
                        </div>
                      </div>

                      <div className="form-group row">
                        <div className="col-md-12">
                          <label htmlFor="c_companyname" className="text-black">Company Name </label>
                          <Field type="text" id="c_companyname" name="c_companyname" className="form-control" />
                        </div>
                      </div>

                      <div className="form-group row">
                        <div className="col-md-12">
                          <label htmlFor="c_address" className="text-black">Address <span className="text-danger">*</span></label>
                          <Field type="text" id="c_address" name="c_address" className="form-control" placeholder="Street address" />
                          <ErrorMessage name="c_address" component="div" className="text-danger" />
                        </div>
                      </div>

                      <div className="form-group mt-3">
                        <Field type="text" className="form-control" placeholder="Apartment, suite, unit etc. (optional)" />
                      </div>

                      <div className="form-group row">
                        <div className="col-md-6">
                          <label htmlFor="c_state_country" className="text-black">State / Country <span className="text-danger">*</span></label>
                          <Field type="text" id="c_state_country" name="c_state_country" className="form-control" />
                          <ErrorMessage name="c_state_country" component="div" className="text-danger" />
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="c_postal_zip" className="text-black">Posta / Zip <span className="text-danger">*</span></label>
                          <Field type="text" id="c_postal_zip" name="c_postal_zip" className="form-control" />
                          <ErrorMessage name="c_postal_zip" component="div" className="text-danger" />
                        </div>
                      </div>

                      <div className="form-group row mb-5">
                        <div className="col-md-6">
                          <label htmlFor="c_email_address" className="text-black">Email Address <span className="text-danger">*</span></label>
                          <Field type="text" id="c_email_address" name="c_email_address" className="form-control" />
                          <ErrorMessage name="c_email_address" component="div" className="text-danger" />
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="c_phone" className="text-black">Phone <span className="text-danger">*</span></label>
                          <Field type="text" id="c_phone" name="c_phone" className="form-control" placeholder="Phone Number" />
                          <ErrorMessage name="c_phone" component="div" className="text-danger" />
                        </div>
                      </div>

                      <div className="form-group">
                        <label htmlFor="c_create_account" className="text-black" data-bs-toggle="collapse" href="#create_an_account" role="button" aria-expanded="false" aria-controls="create_an_account">
                          <Field type="checkbox" id="c_create_account" name="c_create_account" /> Create an account?
                        </label>
                        <div className="collapse" id="create_an_account">
                          <div className="py-2 mb-4">
                            <p className="mb-3">Create an account by entering the information below. If you are a returning customer please login at the top of the page.</p>
                            <div className="form-group">
                              <label htmlFor="c_account_password" className="text-black">Account Password</label>
                              <Field type="password" id="c_account_password" name="c_account_password" className="form-control" />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="form-group">
                        <label htmlFor="c_ship_different_address" className="text-black" data-bs-toggle="collapse" href="#ship_different_address" role="button" aria-expanded="false" aria-controls="ship_different_address">
                          <Field type="checkbox" id="c_ship_different_address" name="c_ship_different_address" /> Ship To A Different Address?
                        </label>
                        <div className="collapse" id="ship_different_address">
                          <div className="py-2">
                            <div className="form-group">
                              <label htmlFor="c_diff_country" className="text-black">Country <span className="text-danger">*</span></label>
                              <Field as="select" id="c_diff_country" name="c_diff_country" className="form-control">
                                <option value="">Select a country</option>
                                <option value="1">bangladesh</option>
                                <option value="2">Algeria</option>
                                <option value="3">Afghanistan</option>
                                <option value="4">Ghana</option>
                                <option value="5">Albania</option>
                                <option value="6">Bahrain</option>
                                <option value="7">Colombia</option>
                                <option value="8">Dominican Republic</option>
                              </Field>
                              <ErrorMessage name="c_diff_country" component="div" className="text-danger" />
                            </div>

                            <div className="form-group row">
                              <div className="col-md-6">
                                <label htmlFor="c_diff_fname" className="text-black">First Name <span className="text-danger">*</span></label>
                                <Field type="text" id="c_diff_fname" name="c_diff_fname" className="form-control" />
                                <ErrorMessage name="c_diff_fname" component="div" className="text-danger" />
                              </div>
                              <div className="col-md-6">
                                <label htmlFor="c_diff_lname" className="text-black">Last Name <span className="text-danger">*</span></label>
                                <Field type="text" id="c_diff_lname" name="c_diff_lname" className="form-control" />
                                <ErrorMessage name="c_diff_lname" component="div" className="text-danger" />
                              </div>
                            </div>

                            <div className="form-group row">
                              <div className="col-md-12">
                                <label htmlFor="c_diff_companyname" className="text-black">Company Name </label>
                                <Field type="text" id="c_diff_companyname" name="c_diff_companyname" className="form-control" />
                              </div>
                            </div>

                            <div className="form-group row  mb-3">
                              <div className="col-md-12">
                                <label htmlFor="c_diff_address" className="text-black">Address <span className="text-danger">*</span></label>
                                <Field type="text" id="c_diff_address" name="c_diff_address" className="form-control" placeholder="Street address" />
                                <ErrorMessage name="c_diff_address" component="div" className="text-danger" />
                              </div>
                            </div>

                            <div className="form-group">
                              <Field type="text" className="form-control" placeholder="Apartment, suite, unit etc. (optional)" />
                            </div>

                            <div className="form-group row">
                              <div className="col-md-6">
                                <label htmlFor="c_diff_state_country" className="text-black">State / Country <span className="text-danger">*</span></label>
                                <Field type="text" id="c_diff_state_country" name="c_diff_state_country" className="form-control" />
                                <ErrorMessage name="c_diff_state_country" component="div" className="text-danger" />
                              </div>
                              <div className="col-md-6">
                                <label htmlFor="c_diff_postal_zip" className="text-black">Posta / Zip <span className="text-danger">*</span></label>
                                <Field type="text" id="c_diff_postal_zip" name="c_diff_postal_zip" className="form-control" />
                                <ErrorMessage name="c_diff_postal_zip" component="div" className="text-danger" />
                              </div>
                            </div>

                            <div className="form-group row mb-5">
                              <div className="col-md-6">
                                <label htmlFor="c_diff_email_address" className="text-black">Email Address <span className="text-danger">*</span></label>
                                <Field type="text" id="c_diff_email_address" name="c_diff_email_address" className="form-control" />
                                <ErrorMessage name="c_diff_email_address" component="div" className="text-danger" />
                              </div>
                              <div className="col-md-6">
                                <label htmlFor="c_diff_phone" className="text-black">Phone <span className="text-danger">*</span></label>
                                <Field type="text" id="c_diff_phone" name="c_diff_phone" className="form-control" placeholder="Phone Number" />
                                <ErrorMessage name="c_diff_phone" component="div" className="text-danger" />
                              </div>
                            </div>

                          </div>

                        </div>
                      </div>

                      <div className="form-group">
                        <label htmlFor="c_order_notes" className="text-black">Order Notes</label>
                        <Field as="textarea" id="c_order_notes" name="c_order_notes" rows="5" className="form-control" placeholder="Write your notes here..." />
                      </div>

                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="row mb-5">
                      <div className="col-md-12">
                        <h2 className="h3 mb-3 text-black">Coupon Code</h2>
                        <div className="p-3 p-lg-5 border bg-white">
                          <label htmlFor="c_code" className="text-black mb-3">Enter your coupon code if you have one</label>
                          <div className="input-group w-75 couponcode-wrap">
                            <Field type="text" id="c_code" name="c_code" className="form-control me-2" placeholder="Coupon Code" aria-label="Coupon Code" aria-describedby="button-addon2" />
                            <div className="input-group-append">
                              <button type="submit" className="btn btn-black btn-sm" id="button-addon2" disabled={isSubmitting}>Apply</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Your Order */}
                    <div className="row mb-5">
                      <div className="col-md-12">
                        <h2 className="h3 mb-3 text-black">Your Order</h2>
                        <div className="p-3 p-lg-5 border bg-white">
                          <table className="table site-block-order-table mb-5">
                            <thead>
                              <tr>
                                <th>Product</th>
                                <th>Total</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Top Up T-Shirt <strong className="mx-2">x</strong> 1</td>
                                <td>$250.00</td>
                              </tr>
                              <tr>
                                <td>Polo Shirt <strong className="mx-2">x</strong>   1</td>
                                <td>$100.00</td>
                              </tr>
                              <tr>
                                <td className="text-black font-weight-bold"><strong>Cart Subtotal</strong></td>
                                <td className="text-black">$350.00</td>
                              </tr>
                              <tr>
                                <td className="text-black font-weight-bold"><strong>Order Total</strong></td>
                                <td className="text-black font-weight-bold"><strong>$350.00</strong></td>
                              </tr>
                            </tbody>
                          </table>

                          {/* Payment Options */}
                          <div className="border p-3 mb-3">
                            <h3 className="h6 mb-0"><a className="d-block" data-bs-toggle="collapse" href="#collapsebank" role="button" aria-expanded="false" aria-controls="collapsebank">Direct Bank Transfer</a></h3>
                            <div className="collapse" id="collapsebank">
                              <div className="py-2">
                                <p className="mb-0">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.</p>
                              </div>
                            </div>
                          </div>

                          <div className="border p-3 mb-3">
                            <h3 className="h6 mb-0"><a className="d-block" data-bs-toggle="collapse" href="#collapsecheque" role="button" aria-expanded="false" aria-controls="collapsecheque">Cheque Payment</a></h3>
                            <div className="collapse" id="collapsecheque">
                              <div className="py-2">
                                <p className="mb-0">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.</p>
                              </div>
                            </div>
                          </div>

                          <div className="border p-3 mb-5">
                            <h3 className="h6 mb-0"><a className="d-block" data-bs-toggle="collapse" href="#collapsepaypal" role="button" aria-expanded="false" aria-controls="collapsepaypal">Paypal</a></h3>
                            <div className="collapse" id="collapsepaypal">
                              <div className="py-2">
                                <p className="mb-0">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.</p>
                              </div>
                            </div>
                          </div>

                          <div className="form-group">
                            <button type="submit" className="btn btn-black btn-lg py-3 btn-block" disabled={isSubmitting}>Place Order</button>
                          </div>

                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
}

export default CheckoutPage;
