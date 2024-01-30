import React from 'react'
import CHOOSEUSSECTION_DATA from '@/utils/chooseUseData'
import Image from 'next/image'


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
                    {
                        CHOOSEUSSECTION_DATA.map((data,index)=>{
                            return(
                                <>
                                 <div className="col-6 col-md-6">
                                <div className="feature">
                                <div className="icon">
                                 
                                  <Image height={45} width={45} src={data.image} alt="Image" className="imf-fluid"/>
                                </div>
                                <h3>{data.title}</h3>
                                <p>{data.desc}</p>
                            </div>
                            </div>
                            </>
                               
                            )
                        })
                    }
                        
                    </div>
                </div>

                <div class="col-lg-5">
                    <div class="img-wrap">
                        <Image height={1000} width={1000} src="/assets/images/chooseimg/why-choose-us-img.jpg" alt="Image" class="img-fluid"/>
                    </div>
                </div>

            </div>
        </div>
    </div>
    // {/* <!-- End Why Choose Us Section --> */}
  )
}

export default ChooseUsSection
