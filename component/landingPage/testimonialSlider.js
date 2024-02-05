import {
  MDBCarousel,
  MDBCarouselItem,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import Image from "next/image";
import React from "react";

const TestimonialSlider = () => {
  return (
    <>
    <center><h2 className="section-title">Testimonials</h2></center>
    <MDBContainer className="my-5">
      
     
      <MDBCarousel showControls dark>
       
        <MDBCarouselItem className="active text-center">
        
          <Image
          height={150}
          width={150}
            src="/assets/images/testimonialsimg/person-1.jpg"
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
          <Image 
          height={150}
          width={150}
            src="/assets/images/testimonialsimg/person-1.jpg"
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
          <Image
            height={150}
            width={150}
            src="/assets/images/testimonialsimg/person-1.jpg"
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
    </>
  );
};

export default TestimonialSlider;

