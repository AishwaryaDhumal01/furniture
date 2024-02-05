'use client'
import React from 'react'
import FormFooter from './footerForm'
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import FooterNav from './footerNav'
import Image from 'next/image'
import Link from 'next/link'





const Footer = () => {
	return (



		// <!-- Start Footer Section -->
		<footer className="footer-section">
			<div className="container relative">


				<div className="sofa-img">
					<Image height={500} width={500} src="/assets/images/footerimg/sofa.png" alt="Image" className="img-fluid" />
				</div>

				<div className="row">
					<div className="col-lg-8">
						<div className="subscription-form">
							<h3 className="d-flex align-items-center"><span className="me-1"><Image src="assets/images/footerimg/envelope-outline.svg" alt="Image" height={30} width={30}  className="img-fluid" /></span><span>Subscribe to Newsletter</span></h3>
							<FormFooter />

						</div>
					</div>
				</div>

				<div className="row g-5 mb-5">
					<div className="col-lg-4">
						<div className="mb-4 footer-logo-wrap"><Link href="#" className="footer-logo">Furni<span>.</span></Link></div>
						<p className="mb-4">Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant</p>
						<ul className="list-unstyled custom-social">
							<li><Link href="#"><span className="fa fa-brands fa-facebook-f"></span><FaFacebookF /></Link></li>
							<li><Link href="#"><span className="fa fa-brands fa-twitter"></span><FaTwitter /></Link></li>
							<li><Link href="#"><span className="fa fa-brands fa-instagram"></span><FaInstagram></FaInstagram></Link></li>
							<li><Link href="#"><span className="fa fa-brands fa-linkedin"></span><FaLinkedin /></Link></li>
						</ul>
					</div>
					 <FooterNav />

				</div>


				<div className="border-top copyright">
					<div className="row pt-4">
						<div className="col-lg-6">
							<p className="mb-2 text-center text-lg-start">Copyright &copy;. All Rights Reserved. &mdash; Designed with love by <Link href="https://untree.co">Untree.co</Link> Distributed By <Link href="https://themewagon.com">ThemeWagon</Link>
								
							</p>

						</div>


						<div className="col-lg-6 text-center text-lg-end">
							<ul className="list-unstyled d-inline-flex ms-auto">
								<li className="me-4"><Link href="#">Terms &amp; Conditions</Link></li>
								<li><Link href="#">Privacy Policy</Link></li>
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
