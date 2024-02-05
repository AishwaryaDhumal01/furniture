
import React from 'react'

const arr = ["About us ", "Services", "Blog", "Contact us", "Support", "Knowledge", "Live chat", "Jobs", "Our stream", "Leadership", "privacy policy", "Nordic Chair", "Kruzo Aero", "Ergonomic Chair"]

const FooterNav = () => {
	return (
		<div className="col-lg-8">
			<div className="row links-wrap">


				{arr.map((data, index) => {
					return (

						<div key={index} className="col-6 col-sm-6 col-md-3">
							<ul className="list-unstyled">
								<li><a href="#">{data}</a></li>

							</ul>
						</div>


					)

				})}

			</div>

		</div>

	)
}

export default FooterNav;


