import React from 'react'
import TopSection from '../landingPage/topSection'
import CHOOSEUSSECTION_DATA from '@/utils/chooseUseData'
import TestimonialSlider from '../landingPage/testimonialSlider'
import ProductSection from '../landingPage/productSection'


const ServicesPage = () => {
	

  return (
    <>
    <TopSection/>
	<div className="why-choose-section">
			<div className="container">
				
				
				<div className="row my-5">
					{CHOOSEUSSECTION_DATA.map((data,index)=>{
						return(
							<>
							<div className="col-6 col-md-6 col-lg-3 mb-4">
						     <div className="feature">
							<div className="icon">
								<img src={data.image} alt="Image" className="imf-fluid"/>
							</div>
							<h3>{data.title}</h3>
							<p>{data.desc}</p>
						</div>
					</div>
					</>

						)
					})}
						
				</div>
			
			</div>
			<ProductSection/>
        <TestimonialSlider/>
		</div>
		

    </>
  )
}

export default ServicesPage
