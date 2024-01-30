import {
  MDBCarousel,
  MDBCarouselItem,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import React from "react";

const TestimonialSlider = () => {
  return (
    <MDBContainer className="my-5">
      <MDBCarousel showControls dark>
        <MDBCarouselItem className="active text-center">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
            alt="avatar"
            className="rounded-circle shadow-1-strong mb-4"
            style={{ width: "150px" }}
          />
          <MDBRow className="d-flex justify-content-center">
            <MDBCol lg="8">
              <h5 className="mb-3">Maria Kate</h5>
              <p>Photographer</p>
              <p className="text-muted">
                <MDBIcon fas icon="quote-left" className="pe-2" />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                et deleniti nesciunt sint eligendi reprehenderit reiciendis,
                quibusdam illo, beatae quia fugit consequatur laudantium velit
                magnam error. Consectetur distinctio fugit doloremque.
              </p>
            </MDBCol>
          </MDBRow>
          <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
            <li>
              <MDBIcon fas icon="star" size="sm" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" />
            </li>
            <li>
              <MDBIcon far icon="star" size="sm" />
            </li>
          </ul>
        </MDBCarouselItem>

        <MDBCarouselItem className="text-center">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp"
            alt="avatar"
            className="rounded-circle shadow-1-strong mb-4"
            style={{ width: "150px" }}
          />
          <MDBRow className="d-flex justify-content-center">
            <MDBCol lg="8">
              <h5 className="mb-3">John Doe</h5>
              <p>Web Developer</p>
              <p className="text-muted">
                <MDBIcon fas icon="quote-left" className="pe-2" />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                et deleniti nesciunt sint eligendi reprehenderit reiciendis.
              </p>
            </MDBCol>
          </MDBRow>
          <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
            <li>
              <MDBIcon fas icon="star" size="sm" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" />
            </li>
            <li>
              <MDBIcon far icon="star" size="sm" />
            </li>
          </ul>
        </MDBCarouselItem>

        <MDBCarouselItem className="text-center">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
            alt="avatar"
            className="rounded-circle shadow-1-strong mb-4"
            style={{ width: "150px" }}
          />
          <MDBRow className="d-flex justify-content-center">
            <MDBCol lg="8">
              <h5 className="mb-3">Anna Deynah</h5>
              <p>Web Developer</p>
              <p className="text-muted">
                <MDBIcon fas icon="quote-left" className="pe-2" />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                et deleniti nesciunt sint eligendi reprehenderit reiciendis,
                quibusdam illo, beatae quia fugit consequatur laudantium velit
                magnam error. Consectetur distinctio fugit doloremque.
              </p>
            </MDBCol>
          </MDBRow>
          <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
            <li>
              <MDBIcon fas icon="star" size="sm" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" />
            </li>
            <li>
              <MDBIcon far icon="star" size="sm" />
            </li>
          </ul>
        </MDBCarouselItem>
      </MDBCarousel>
    </MDBContainer>
  );
};

export default TestimonialSlider;

{
  /* // <!-- Start Testimonial Slider -->
// 		<div className="testimonial-section">
// 			<div className="container">
// 				<div className="row">
// 					<div className="col-lg-7 mx-auto text-center">
// 						<h2 className="section-title">Testimonials</h2>
// 					</div>
// 				</div>

// 				<div className="row justify-content-center">
// 					<div className="col-lg-12">
// 						<div className="testimonial-slider-wrap text-center">

// 							<div id="testimonial-nav">
// 								<span className="prev" data-controls="prev"><span className="fa fa-chevron-left"></span></span>
// 								<span className="next" data-controls="next"><span className="fa fa-chevron-right"></span></span>
// 							</div>

// 							<div className="testimonial-slider">
								
// 								<div className="item">
// 									<div className="row justify-content-center">
// 										<div className="col-lg-8 mx-auto">

// 											<div className="testimonial-block text-center">
// 												<blockquote className="mb-5">
// 													<p>&ldquo;Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.&rdquo;</p>
// 												</blockquote>

// 												<div className="author-info">
// 													<div className="author-pic">
// 														<img src="assets/images/testimonialsimg/person-1.png" alt="Maria Jones" className="img-fluid"/>
// 													</div>
// 													<h3 className="font-weight-bold">Maria Jones</h3>
// 													<span className="position d-block mb-3">CEO, Co-Founder, XYZ Inc.</span>
// 												</div>
// 											</div>

// 										</div>
// 									</div>
// 								</div> 
// 								{/* <!-- END item --> */
}

{
  /* // 								<div className="item">
// 									<div className="row justify-content-center">
// 										<div className="col-lg-8 mx-auto">

// 											<div className="testimonial-block text-center">
// 												<blockquote className="mb-5">
// 													<p>&ldquo;Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.&rdquo;</p>
// 												</blockquote>

// 												<div className="author-info">
// 													<div className="author-pic">
// 														<img src="assets/images/testimonialsimg/person-1.png" alt="Maria Jones" className="img-fluid"/>
// 													</div>
// 													<h3 className="font-weight-bold">Maria Jones</h3>
// 													<span className="position d-block mb-3">CEO, Co-Founder, XYZ Inc.</span>
// 												</div>
// 											</div>

// 										</div>
// 									</div>
// 								</div>  */
}
// 								{/* <!-- END item --> */}

{
  /* // 								<div className="item">
// 									<div className="row justify-content-center">
// 										<div className="col-lg-8 mx-auto">

// 											<div className="testimonial-block text-center">
// 												<blockquote className="mb-5">
// 													<p>&ldquo;Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.&rdquo;</p>
// 												</blockquote>

// 												<div className="author-info">
// 													<div className="author-pic">
// 														<img src="assets/images/testimonialsimg/person-1.png" alt="Maria Jones" className="img-fluid"/>
// 													</div>
// 													<h3 className="font-weight-bold">Maria Jones</h3>
// 													<span className="position d-block mb-3">CEO, Co-Founder, XYZ Inc.</span>
// 												</div>
// 											</div>

// 										</div>
// 									</div>
// 								</div> 
// 								{/* <!-- END item --> */
}

{
  /* // 							</div> */
}

// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	 //{/* <!-- End Testimonial Slider --> */}
