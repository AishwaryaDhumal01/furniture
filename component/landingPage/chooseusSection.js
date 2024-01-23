import React from 'react'

const ChooseUsSection = () => {
  return (
    // <!-- Start Why Choose Us Section -->
    <div className="why-choose-section">
        <div className="container">
            <div className="row justify-content-between">
                <div className="col-lg-6">
                    <h2 className="section-title">Why Choose Us</h2>
                    <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>

                    <div className="row my-5">
                        <div className="col-6 col-md-6">
                            <div className="feature">
                                <div className="icon">
                                    <img src="assets/images/chooseimg/truck.svg" alt="Image" className="imf-fluid"/>
                                </div>
                                <h3>Fast &amp; Free Shipping</h3>
                                <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                            </div>
                        </div>

                        <div className="col-6 col-md-6">
                            <div className="feature">
                                <div className="icon">
                                    <img src="assets/images/chooseimg/bag.svg" alt="Image" className="imf-fluid"/>
                                </div>
                                <h3>Easy to Shop</h3>
                                <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                            </div>
                        </div>

                        <div className="col-6 col-md-6">
                            <div className="feature">
                                <div className="icon">
                                    <img src="assets/images/chooseimg/support.svg" alt="Image" className="imf-fluid"/>
                                </div>
                                <h3>24/7 Support</h3>
                                <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                            </div>
                        </div>

                        <div className="col-6 col-md-6">
                            <div className="feature">
                                <div className="icon">
                                    <img src="assets/images/chooseimg/return.svg" alt="Image" className="imf-fluid"/>
                                </div>
                                <h3>Hassle Free Returns</h3>
                                <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="col-lg-5">
                    <div class="img-wrap">
                        <img src="assets/images/chooseimg/why-choose-us-img.jpg" alt="Image" class="img-fluid"/>
                    </div>
                </div>

            </div>
        </div>
    </div>
    // {/* <!-- End Why Choose Us Section --> */}
  )
}

export default ChooseUsSection
