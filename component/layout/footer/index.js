import React from 'react'
import FormFooter from './footerForm'
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import FooterNav from './footerNav'




const Footer = () => {
  return (


	
    // <!-- Start Footer Section -->
		<footer className="footer-section">
			<div className="container relative">
		

				<div className="sofa-img">
					<img src="assets/images/footerimg/sofa.png" alt="Image" className="img-fluid"/>
				</div>

				<div className="row">
					<div className="col-lg-8">
						<div className="subscription-form">
							<h3 className="d-flex align-items-center"><span className="me-1"><img src="assets/images/footerimg/envelope-outline.svg" alt="Image" className="img-fluid"/></span><span>Subscribe to Newsletter</span></h3>
							<FormFooter/>
							
						</div>
					</div>
				</div>

				<div className="row g-5 mb-5">
					<div className="col-lg-4">
						<div className="mb-4 footer-logo-wrap"><a href="#" className="footer-logo">Furni<span>.</span></a></div>
						<p className="mb-4">Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant</p>
                 						<ul className="list-unstyled custom-social">
							<li><a href="#"><span className="fa fa-brands fa-facebook-f"></span><FaFacebookF/></a></li>
							<li><a href="#"><span className="fa fa-brands fa-twitter"></span><FaTwitter/></a></li>
							<li><a href="#"><span className="fa fa-brands fa-instagram"></span><FaInstagram></FaInstagram></a></li>
							<li><a href="#"><span className="fa fa-brands fa-linkedin"></span><FaLinkedin/></a></li>
						</ul>
					</div>
					<FooterNav/>
					
				</div>
				

				<div className="border-top copyright">
					<div className="row pt-4">
						<div className="col-lg-6">
							<p className="mb-2 text-center text-lg-start">Copyright &copy;<script>document.write(new Date().getFullYear());</script>. All Rights Reserved. &mdash; Designed with love by <a href="https://untree.co">Untree.co</a> Distributed By <a hreff="https://themewagon.com">ThemeWagon</a> 
               {/* <!-- License information: https://untree.co/license/ --> */}
            </p>

						</div>
						

						<div className="col-lg-6 text-center text-lg-end">
							<ul className="list-unstyled d-inline-flex ms-auto">
								<li className="me-4"><a href="#">Terms &amp; Conditions</a></li>
								<li><a href="#">Privacy Policy</a></li>
							</ul>
						</div>

					</div>
				</div>

			</div>
		</footer>
		// //{/* <!-- End Footer Section -->	 */}

  )
}

export default Footer
