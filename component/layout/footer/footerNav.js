
import React from 'react'

const arr=["About us ", "Services" ,"Blog" ,"Contact us","Support","Knowledge","Live chat","Jobs","Our stream","Leadership","privacy policy","Nordic Chair","Kruzo Aero","Ergonomic Chair"]

const FooterNav = () => {
  return (
    <div className="col-lg-8">
		<div className="row links-wrap">


					{arr.map((data)=>{
					return(
						<>
						<div className="col-6 col-sm-6 col-md-3">
								<ul className="list-unstyled">
									<li><a href="#">{data}</a></li>
									
								</ul>
							</div>

						</>
					)

				 })}

					
							{/* <div className="col-6 col-sm-6 col-md-3">
								<ul className="list-unstyled">
									<li><a href="#">About us</a></li>
									<li><a href="#">Services</a></li>
									<li><a href="#">Blog</a></li>
									<li><a href="#">Contact us</a></li>
								</ul>
							</div> */}

							{/* <div className="col-6 col-sm-6 col-md-3">
								<ul className="list-unstyled">
									<li><a href="#">Support</a></li>
									<li><a href="#">Knowledge base</a></li>
									<li><a href="#">Live chat</a></li>
								</ul>
							</div> */}

							{/* <div className="col-6 col-sm-6 col-md-3">
								<ul className="list-unstyled">
									<li><a href="#">Jobs</a></li>
									<li><a href="#">Our team</a></li>
									<li><a href="#">Leadership</a></li>
									<li><a href="#">Privacy Policy</a></li>
								</ul>
							</div> */}

							{/* <div className="col-6 col-sm-6 col-md-3">
								<ul className="list-unstyled">
									<li><a href="#">Nordic Chair</a></li>
									<li><a href="#">Kruzo Aero</a></li>
									<li><a href="#">Ergonomic Chair</a></li>
								</ul>
							</div> */}
						
					</div>

		</div>

  )
}

export default FooterNav;


